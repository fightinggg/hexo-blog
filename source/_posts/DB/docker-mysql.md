---
date: 2021-03-15 12:53:00
updated: 2021-03-15 12:53:00
mathjax: true
typora-root-url: ../..
---





# mysql安装

```sh
docker run --restart=always \
  -d -e MYSQL_ROOT_PASSWORD=123456 \
  --name mysql \
  -v /data/docker/mysql/data:/var/lib/mysql \
  -p 3306:3306 mysql
```



# docker-mysql

## 宿主机无法连接

当我们使用docker创建了mysql服务以后，一般无法在宿主机对其进行连接，现象如下

![](/images/image-2021-03-15-12.54.00.159.png)

原因是mysql连接如果不指定IP，则会使用/var/lib/mysql/mysql.sock进行连接，这时我们只需要指定ip即可





