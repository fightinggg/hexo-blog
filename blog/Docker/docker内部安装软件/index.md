---
date: 2022-07-16 15:07:00
updated: 2022-07-16 15:07:00
tags: docker
---

# 以哪个镜像作为基础镜像
[centos:centos8](https://hub.docker.com/layers/centos/library/centos/centos8/images/sha256-a1801b843b1bfaf77c501e7a6d3f709401a1e0c83863037fa3aab063a7fdb9dc?context=explore)

```shell
docker run -it --rm centos:centos8
```



# 换源

## 阿里源

```shell
sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-* \
&& sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-* \
&& curl https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo -L -o /etc/yum.repos.d/CentOS-Base.repo \
&& yum clean all \
&& yum makecache
```



# 安装Git

## yum 安装

```shell
yum install git -y
```

## 二进制安装

```shell

```



# 安装Clang

## yum安装

```
yum install clang -y
```

## 二进制安装

```
```



# 安装SSH

## yum安装

```shell
yum install openssh-server openssh-clients passwd  -y \
&& sed -i "s/^UsePAM yes/UsePAM no/g" /etc/ssh/sshd_config \
&& echo 123456 | passwd root --stdin \
&& ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa \
&& cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys \
&& chmod 0600 ~/.ssh/authorized_keys \
&& ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key \
&& ssh-keygen -q -N "" -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key \
&& ssh-keygen -q -N "" -t ed25519 -f /etc/ssh/ssh_host_ed25519_key
```

## 启动

```shell
/usr/sbin/sshd
```































