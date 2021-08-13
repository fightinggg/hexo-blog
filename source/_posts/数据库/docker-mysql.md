---
date: 2021-03-15 12:53:00
updated: 2021-03-15 12:53:00
mathjax: true
typora-root-url: ../../..
---

# mysql安装

可以酌情修改内存大小和交换内存大小。

```shell
# filename: $HOME/data/mysql/conf/docker.cnf
[mysqld]
performance_schema_max_table_instances=400
table_definition_cache=400
table_open_cache=256
performance_schema = off
skip-host-cache
skip-name-resolve
```

```sh
docker run \
  --cpus 0.2 \
  -d -e MYSQL_ROOT_PASSWORD=123456 \
  --name mysql \
  -v $HOME/data/mysql/data:/var/lib/mysql \
  -v $HOME/data/mysql/conf:/etc/mysql/conf.d \
  -p 3306:3306 \
  mysql
```

# 允许远程登录

```sql
docker exec -it mysql bash
mysql -u root -p123456
ALTER USER 'root'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '123456';
```



![](/images/image-2021-04-09-16.25.42.031.png)

