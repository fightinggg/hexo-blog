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



# 允许远程登录

```sql
ALTER USER 'root'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '123456';
```



![image-2021-04-09 16.25.42.031](/images/image-2021-04-09-16.25.42.031.png)