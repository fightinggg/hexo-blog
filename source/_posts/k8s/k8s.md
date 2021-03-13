
---
date: 2020-10-01 00:00:00
updated: 2020-10-01 00:00:00
mathjax: true
---


# K8S

## 初始化K8S集群



```sh
kubeadm init --pod-network-cidr=10.244.0.0/16
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
kubectl taint nodes --all node-role.kubernetes.io/master-
vim /etc/kubernetes/manifests/kube-apiserver.yaml
#- --service-node-port-range=1000-32000
```
<!-- more -->
## K8S客户端

```sh
export KUBECONFIG=/etc/kubernetes/admin.conf
sudo kubectl get pods
```

## K8S资源负载情况

```sh
curl -L https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.3.6/components.yaml \
| sed -s 's/k8s.gcr.io/registry.cn-hangzhou.aliyuncs.com\/google_containers/g' \
| kubectl apply -f -
```

[参考](https://www.sklinux.com/posts/k8s/%E9%9B%86%E7%BE%A4%E6%A0%B8%E5%BF%83%E6%8C%87%E6%A0%87%E6%9C%8D%E5%8A%A1/)

```sh
# echo "serverTLSBootstrap: true" >> /var/lib/kubelet/config.yaml

systemctl daemon-reload
systemctl restart kubelet.service
kubectl get csr
kubectl certificate approve xxx ???
```

## K8S 资源限制

```sh
echo "===prepare workspace==="
if [ ! -d "workspace" ]; then
echo "create new workspace"
mkdir workspace
fi
cd workspace

echo "===goto current space==="
version=$[$(ls | sort -n | tail -n 1)+1]
mkdir $version
cd $version
echo "Version: $version"
echo "Space: $(pwd)"


echo "===deploy to k8s==="
mkdir deploy
cd deploy
cat>limitRange.yaml<<EOF
apiVersion: v1
kind: LimitRange
metadata:
  name: cpu-min-max-demo-lr
spec:
  limits:
  - max:
      cpu: "800m"
    min:
      cpu: "200m"
    type: Container
EOF
kubectl apply -f limitRange.yaml
cd ..
```

## K8S重启失败

```sh
systemctl status kubelet -n 1000

free -m # 看看swap分区是否被打开
swapoff -a

systemctl daemon-reload
systemctl restart kubelet

hostname -f
hostname xxxxxxx
```

### 重装

```sh
kubeadm reset
rm -rf /etc/kubernetes
rm -rf /var/lib/etcd/
```



## simple Java Project

```sh
echo -e "===prepare workspace==="
if [ ! -d "workspace" ]; then
echo "create new workspace"
mkdir workspace
fi
cd workspace

echo -e "===goto current space==="
version=$[$(ls | sort -n | tail -n 1)+1]
mkdir $version
cd $version
echo "Version: $version"
echo "Space: $(pwd)"

echo -e "===set parmas==="
gitPath=xxxx
girBranch=xxxx
# mavenMirror=https://maven.aliyun.com/repository/public
mavenMirror=xxxx
mavenCacheVolume=maven-repo
# mavenImage=maven:3.6.3-openjdk-16
mavenImage=maven:3.6.3-jdk-8
mavenPackageTarget=xxx-start/target/*.jar
# jdkImage=openjdk:16-jdk
jdkImage=openjdk:8-jdk
javaApp=xxxx

echo -e "===get code==="
docker run -i --rm \
	-v ${HOME}:/root \
	-v $(pwd)/src:/git \
	alpine/git \
	clone $gitPath .
pwd
echo $girBranch
docker run -i --rm \
	-v ${HOME}:/root \
	-v $(pwd)/src:/git \
	alpine/git \
	checkout $girBranch 
	

echo -e "===build target==="
mkdir .m2
cat>.m2/settings.xml<<EOF
<settings>
    <mirrors>
        <mirror>
            <id>proxy</id>
            <mirrorOf>central</mirrorOf>
            <name>proxy maven</name>
            <url>$mavenMirror</url>
        </mirror>
    </mirrors>
</settings>
EOF
docker volume create --name $mavenCacheVolume
docker run -i --rm \
	-v $(pwd)/src:/usr/src/mymaven \
	-v $mavenCacheVolume:/root/.m2/repository \
	-v $(pwd)/.m2/settings.xml:/root/.m2/settings.xml \
	-w /usr/src/mymaven \
	$mavenImage \
	mvn package -Dmaven.test.skip=true

echo -e "===move jar==="
mkdir image
mv src/$mavenPackageTarget image/main.jar

echo -e "===build image==="
cd image
cat>Dockerfile<<EOF
FROM $jdkImage
COPY main.jar /main.jar
COPY entrypoint.sh /entrypoint.sh
CMD ["sh","entrypoint.sh"]
EOF
cat>entrypoint.sh<<EOF
java -jar -Xmx250m -Xms200m -Dserver.port=80 /main.jar --logger.print-parmas.enable=true
EOF
docker build -t $javaApp:$version .
cd ..

echo -e "===deploy to k8s==="
mkdir deploy
cd deploy
cat>${javaApp}-deployment.yaml<<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${javaApp}-deployment
  labels:
    app: $javaApp
spec:
  replicas: 1
  selector:
    matchLabels:
      app: $javaApp
  template:
    metadata:
      labels:
        app: $javaApp
    spec:
      containers:
      - name: $javaApp
        image: $javaApp:$version
        imagePullPolicy: IfNotPresent
        env: 
        - name: ENV
          value: "env"
        ports:
        - containerPort: 80
        resources:
          limits: 
            cpu: 0.3
            memory: 400Mi
          requests:
            cpu: 0.3
            memory: 300Mi
        livenessProbe:
          httpGet:
            path: /swagger-ui/
            port: 80
          initialDelaySeconds: 100
          periodSeconds: 3
  strategy: # 策略
    type: RollingUpdate # 也可以是Recreate
    rollingUpdate: 
      maxUnavailable: 50% # 滚动更新的时候的最大不可用pod数量， 可以是绝对数字或者比例10%
      maxSurge: 50% # 动更新的时候的溢出的pod数量，也可以是绝对数字
  progressDeadlineSeconds: 150 # 进度期限秒数，不懂是什么
  minReadySeconds: 100 # 最短就绪时间， 容器创建多久以后被视为就绪
  revisionHistoryLimit: 3 # 历史修订限制， 保留的rs的数量，这个数量会消耗etcd资源，rs删除了就不能回滚刀那个版本的Deployment了
EOF

cat>${javaApp}-service.yaml<<EOF
apiVersion: v1
kind: Service
metadata:
  name: ${javaApp}-service
spec:
  type: NodePort
  selector:
    app: $javaApp
  ports:
    - port: 80
      targetPort: 80
      nodePort: 10010
EOF

kubectl apply -f ${javaApp}-deployment.yaml
kubectl apply -f ${javaApp}-service.yaml
cd ..
```

