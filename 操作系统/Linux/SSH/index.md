---
date: 2020-09-14 22:42:00
updated: 2020-09-14 22:42:00
---



# SSH Install

```sh
# 必须安装passwd
yum install openssh-server openssh-clients passwd  -y; \
sed -i "s/^UsePAM yes/UsePAM no/g" /etc/ssh/sshd_config; \
echo 123456 | passwd root --stdin; \
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa; \
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys; \
chmod 0600 ~/.ssh/authorized_keys; \
ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key; \
ssh-keygen -q -N "" -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key; \
ssh-keygen -q -N "" -t ed25519 -f /etc/ssh/ssh_host_ed25519_key; \
/usr/sbin/sshd
```

# SSH Install2

```sh
# 必须安装passwd
yum install openssh-server openssh-clients passwd  -y; \
sed -i "s/^UsePAM yes/UsePAM no/g" /etc/ssh/sshd_config; \
echo 123456 | passwd root --stdin; \
ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key; \
ssh-keygen -q -N "" -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key; \
ssh-keygen -q -N "" -t ed25519 -f /etc/ssh/ssh_host_ed25519_key; \
/usr/sbin/sshd
```

## id_rsa

```sh
chmod 0600 id_rsa
```

```txt
xxxx
~~~~
xxxx
```

## authorized_keys

```txt
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCxlCDiJkFEK+cI9i1RltBdzhmkpEOHxGaqJh9CXzkmWRCYE1IaqBQ3ev+kHMShMX48crpdv1mHVrMvt9Kpo7PhkZem+Pd5i+PMVw53MY3Ow0ntoaqK0nBclDieJNmb32BfdI19nm4j6bSyyh8IMmYPsBfTR5wO+5u4cZxXb4I4mocVtvQXa3g7yZHaeEAVL9WfCrWM8/tH/7sAcP3pxdIuoIht/dMBU6wbRt7oPPC7pgw4uDq6y0sHv5SR9zlrmyqusZHDkg+BUaaFnsxnwREuC5Ll1q6ufqNBoUhTETxmZTaqMiwXyKb3gIer8BVctLRoKstNxX08CBiM/1RNzFX3 1144560553@qq.com
```



## id_rsa.pub

```txt
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCxlCDiJkFEK+cI9i1RltBdzhmkpEOHxGaqJh9CXzkmWRCYE1IaqBQ3ev+kHMShMX48crpdv1mHVrMvt9Kpo7PhkZem+Pd5i+PMVw53MY3Ow0ntoaqK0nBclDieJNmb32BfdI19nm4j6bSyyh8IMmYPsBfTR5wO+5u4cZxXb4I4mocVtvQXa3g7yZHaeEAVL9WfCrWM8/tH/7sAcP3pxdIuoIht/dMBU6wbRt7oPPC7pgw4uDq6y0sHv5SR9zlrmyqusZHDkg+BUaaFnsxnwREuC5Ll1q6ufqNBoUhTETxmZTaqMiwXyKb3gIer8BVctLRoKstNxX08CBiM/1RNzFX3 1144560553@qq.com
```



## Problem

- [System is booting up. Unprivileged users are not permitted to log in yet](https://unix.stackexchange.com/questions/487742/system-is-booting-up-unprivileged-users-are-not-permitted-to-log-in-yet)



# Docker Install

- Dockerfile

```txt
FROM centos:centos8
RUN yum install openssh-server openssh-clients passwd  -y; \
sed -i "s/^UsePAM yes/UsePAM no/g" /etc/ssh/sshd_config; \
echo 123456 | passwd root --stdin; \
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa; \
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys; \
chmod 0600 ~/.ssh/authorized_keys; \
ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key; \
ssh-keygen -q -N "" -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key; \
ssh-keygen -q -N "" -t ed25519 -f /etc/ssh/ssh_host_ed25519_key;
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
```

- Build

```sh
docker build -t sshd:centos8 .
```

- Run

```sh
docker run -itd -p 2222:22 sshd:centos8
```

- Connect

```sh
ssh localhost -p 2222
```

## USE

```sh
ssh root@9.135.10.2 -p 36000 -P
xxxx
```

### 
