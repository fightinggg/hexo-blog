---
date: 2020-10-05 00:00:00
updated: 2020-10-05 00:00:00
mathjax: true
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

# 安装yum-utils
echo " === install yum-utils === "
yum install -y yum-utils

#增加镜像地址
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
    
# 安装containerd.io
echo " === install containerd.io === "
yum install -y https://mirrors.aliyun.com/docker-ce/linux/centos/7/x86_64/edge/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm

# 安装docker
echo " === install docker === "
yum install -y docker-ce-3:19.03.13-3.el8
sed -i 's/^ExecStart=\/usr\/bin\/dockerd/ExecStart=\/usr\/bin\/dockerd --exec-opt native.cgroupdriver=systemd/' /usr/lib/systemd/system/docker.service
systemctl start docker.service
systemctl enable docker.service
docker version

# docker 换源
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



# 镜像

就是类似于虚拟机中的iso文件
# 容器
就是运行中的系统
<!-- more -->
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

# 管理Docker

systemctl start docker

systemctl stop docker





# Docker临时容器妙用

```sh
docker run -it --rm --net=host centos:centos8 bash
yum install vim wget lrzsz -y



```



# Docker的坑

千万不要在docker启动以后重启防火墙！！！！！！


# 参考

[10分钟，快速学会docker](https://www.bilibili.com/video/av58402749)

[实战~如何组织一个多容器项目docker-compose](https://www.bilibili.com/video/BV1Wt411w72h?from=search&seid=8050868676251482351)