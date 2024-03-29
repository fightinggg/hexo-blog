---
date: 2020-10-05 00:00:00
updated: 2020-10-05 00:00:00
---

# Docker

## 常见参数

### 资源限制

```
--cpus 0.8
-m 800m
```

### 文件夹映射

```
-v /root/.m2:/root/.m2
```
<!-- more -->

# 安装docker

```sh
# 配置yum
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo

# 删除旧版本
yum remove docker docker-client docker-client-latest docker-common \
    docker-latest docker-latest-logrotate docker-logrotate docker-engine

# 安装yum-utils
echo " === install yum-utils === "
yum install -y yum-utils

#增加镜像地址
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
 
# docker
yum install docker-ce docker-ce-cli containerd.io -y
systemctl start docker.service
systemctl enable docker.service
docker version

# 下面的指令不知道是干嘛的
# 安装containerd.io
#echo " === install containerd.io === "
#yum install -y https://mirrors.aliyun.com/docker-ce/linux/centos/7/x86_64/edge/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm

# 安装docker
#echo " === install docker === "
#yum install -y docker-ce-3:19.03.13-3.el8
#sed -i 's/^ExecStart=\/usr\/bin\/dockerd/ExecStart=\/usr\/bin\/dockerd --exec-opt native.cgroupdriver=systemd/' /usr/lib/systemd/system/docker.service
#systemctl start docker.service
#systemctl enable docker.service
#docker version
```





# docker 换源

```sh
cat >>/etc/docker/daemon.json <<EOF
{
    "registry-mirrors":[
         "http://docker.mirrors.ustc.edu.cn",
         "http://hub-mirror.c.163.com",
         "http://registry.docker-cn.com"
    ] ,
    "insecure-registries":[
       "docker.mirrors.ustc.edu.cn",
         "registry.docker-cn.com"
    ]
}  
EOF

# 重启docker生效
service docker restart
```

# 启docker生效
service docker restart

# 镜像

就是类似于虚拟机中的iso文件
# 容器
就是运行中的系统

# tar文件
将一个镜像保存为tar文件
# Dockerfile
写构建的步骤来制作镜像
# 仓库
保存了很多镜像
# 免费使用
[点这里](https://labs.play-with-docker.com)

# --link myng:myng
将另一个容器储存为域名，其实是在/etc/hosts中加入了一行映射
# 复杂的Docker
比方你有一个nginx服务，php服务，mysql服务，nginx依赖php，php依赖mysql，这个依赖关系导致我们需要先创建mysq，然后创建php。这就很麻烦，部署、重启啊很麻烦的。
# docker-compose
```sh
vim docker-compose.yml
```
```yml
version: "3"
services:
  nginx:
    image: nginx
    ports:
    - 80:80
    volumes:
    - /root/html:/usr/share/nginx/html
    - /root/conf/nginx.conf:/etc/nginx/nginx.conf
  php:
    image: php
    volumes:
    - /root/html:/var/www/html
  mysql:
    images: mysql
    enviroment:
    - MYSQL_ROOT_PASSWORD=123456
```
启动
```
docker-compose up -d
```
# 故障

查看防火墙状态（若防火墙为关闭状态，可跳过防火墙有关设置）：

`sudo firewall-cmd --state`

若返回runging，则防火墙为开启状态，查看防火墙是否开启ip地址转发（ip地址伪装）：

`sudo firewall-cmd --query-masquerade`

若返回no，则输入以下命令开启ip地址转发：

`sudo firewall-cmd --add-masquerade --permanent`

然后输入以下命令使修改生效：

`sudo firewall-cmd --reload`



如果有一天发现docker把空间占满了，我们可以先暂停docker，然后使用软连接将/var/lib/docker放置到其他地方

# Docker临时容器妙用

```sh
docker run -it --rm --net=host centos:centos8 bash
yum install vim wget lrzsz -y

```

# 小内存

```shell
-m 50M --memory-swap=1024M \
```



# Docsker 自动更新容器

```sh
 docker run -d \
 --name watchtower \
 -v /var/run/docker.sock:/var/run/docker.sock \
 -m 50M --memory-swap=1024M \
 v2tec/watchtower
```

# Docker的坑

千万不要在docker启动以后重启防火墙！！！！！！



# Docker 命令行

docker非常有用，很多时候你不需要下载那些奇怪的东西，你只需要一个别名，就能使用下面这些应用

```txt
alias busybox='docker run -it --rm -v $PWD:$PWD -w $PWD busybox'
alias centos='docker run -it --rm -v $PWD:$PWD -w $PWD centos:8'
alias dot='docker run -it --rm -v $PWD:$PWD -w $PWD fightinggg/graphviz dot'
alias rar='docker run -it --rm -v $PWD:$PWD -w $PWD fightinggg/rar rar'
alias unrar='docker run -it --rm -v $PWD:$PWD -w $PWD fightinggg/rar unrar'
alias java8='docker run -it --rm -v $PWD:$PWD -w $PWD openjdk:8 java'
alias mvn8='docker run -it --rm -v $HOME/.m2:/root/.m2 -v $PWD:$PWD -w $PWD maven:3.8.1-jdk-8 mvn'
alias java='docker run -it --rm -v $PWD:$PWD -w $PWD openjdk java'
alias mvn='docker run -it --rm -v $HOME/.m2:/root/.m2 -v $PWD:$PWD -w $PWD maven mvn'
alias jpegoptim='docker run -it --rm -v $PWD:$PWD -w $PWD fightinggg/jpegoptim jpegoptim'
alias tree='docker run -it --rm -v $PWD:$PWD -w $PWD fightinggg/tree tree'
```




# 参考

[10分钟，快速学会docker](https://www.bilibili.com/video/av58402749)

[实战~如何组织一个多容器项目docker-compose](https://www.bilibili.com/video/BV1Wt411w72h?from=search&seid=8050868676251482351)