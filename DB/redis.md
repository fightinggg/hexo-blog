---
title: redis
mathjax: true
categories:
  - redis
tags:
  - redis
keywords:
  - redis
abbrlink: 7b25d017
date: 2020-03-24 14:22:39
---

# nosql
&emsp;&emsp; 随时大规模高并发的出现，传统关系型数据库已经碰到了很大的问题，他难以提供更快的数据访问速度了，这导致数据库成为了瓶颈。人们提出not only sql的一种理念，就是我们不能仅仅依靠关系型数据库。

# 非关系型数据库
&emsp;&emsp; 指的是没有关系的数据库，即不是二纬表，而是KV对。

<!---more-->
# redis 
&emsp;&emsp; redis 就是其中的一个非关系型数据库，他是单线程，将数据储存在内存中的数据库，他支持丰富的数据类型，包括string，list,set,hash,zset

# redis持久化
&emsp;&emsp; 第一种是rdb方案，他将内存的数据定期储存到磁盘中，由于数据的空间问题，一般15分钟一次，第二种是aof方案，他将读取的数据定期增加到磁盘中，由于我们只是添加，一般1s一次。rdb本质为整体储存，aof为懒惰式储存，他储存的是操作，而不是数据库。

# redis事务
&emsp;&emsp; redis半支持事务，语法错误回滚，但运行错误不会。

# redis主从复制
&emsp;&emsp; 主机写，从机读，

# redis哨兵模式
&emsp;&emsp; 当主机挂了以后，通过投票在从机中选出新的主机

