---
date: 2021-04-07 22:14:00
updated: 2021-04-14 11:34:00
---

# 前言

最讨厌的东西就是八股文了，但是没办法，这东西会忘记，不记不行。



# 题库开始
## OSI七层网络是什么
[答案](/Q7E57R.html#七层网络)

## 七层网络各有哪些协议

[答案](/Q7E57R.html#五层网络)

<!-- more -->

## IP五层网络是什么

[答案](/Q7E57R.html#五层网络)

## 一个HTTP连接的底层是什么样的

[答案1](/Q7E57R.html#HTTP下载文件的过程)

[答案2](/QR12J0.html)

## HTTP1.0,1.1,2.0的区别

[答案1](/Q7E57R.html#HTTP1-1)

[答案2](https://blog.csdn.net/ailunlee/article/details/97831912)

## TCP拥塞控制是怎么实现的

- 拥塞控制三个状态如何转移

[答案](/QQTKJ0.html#拥塞控制)



## TCP流控制是什么

[答案](Q7FK6U.html#%E6%B5%81%E6%8E%A7%E5%88%B6)

## HTTP状态码301和302的区别

301  永久重定向  

302  临时重定向

## CA证书有哪些内容

>颁发机构信息，域名，公钥，有效期。
>
>证书中还会有==证书中信息通过加密算法==生成的数字签名。
>
>数字签名就是一种保证数据完整性（不被篡改）和有效性（是真正的使用者发来的，不是伪造者发来的）的手段。它一般是通过给数据计算出的hash值加密生成。

## SSL和TLS握手流程

[答案](/Q7FYH8.html#SSL-TLS)



## SYN攻击如何避免

[答案](/QQTKJ0.html#SYN洪泛攻击)



## ICMP是什么

[答案](/QQTKJ0.html#ICMP)



## PING的过程

[答案](/QQPNNQ.html)

## MyISAM和InnoDB区别

https://www.jianshu.com/p/a957b18ba40d



## like能用索引吗

https://blog.csdn.net/lan12334321234/article/details/70048833

## 三范式BC范式

https://my.oschina.net/liuyuantao/blog/778826

## count(1) count(\*) 和count(主键)、count(非主键)

https://blog.csdn.net/iFuMI/article/details/77920767

[答案2](https://blog.csdn.net/FeiChangWuRao/article/details/89493516?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)



## union 和union all

https://www.cnblogs.com/zhangminghui/p/4408546.html



## SQL执行慢点原因

https://www.cnblogs.com/kubidemanong/p/10734045.html



## 什么是聚簇索引，优势，劣势

- 索引覆盖是什么？

https://cloud.tencent.com/developer/article/1541265

## 事务的四个特性，各解决了什么问题

>- 原子性：事务内操作不可分割，要么全部成功，要么全部失败
>
>- 一致性：对于使用者来说，满足业务特定的规则。
>
>- 隔离性：一个事务在执行过程中修改了表中的数据，在这个事务提交之前，其他事务对它的修改不可见
>
>- 持久性：事务一旦提交就必须持久到磁盘。
>
## 事务并发问题
>
>脏读：事务A读到了事务B未提交时修改的数据。
>
>不可重复读：事务A在重复读相同的数据时，数据不一致。被事务B修改提交了。
>
>幻读：在同一事物中，执行两次同样的sql可能返回不同的结果，第二次sql返回的结果可能产生之前不存在的行。

## 事务隔离级别，当前读？快照读？

https://tech.meituan.com/2014/08/20/innodb-lock.html

## mysql如何保证事务

https://juejin.cn/post/6844903959677632519

## mysql 记录锁、间隙锁、临键锁

https://zhuanlan.zhihu.com/p/48269420



## Mysql主从复制

https://zhuanlan.zhihu.com/p/48269420



## Redis 五个数据结构，编码

https://zhuanlan.zhihu.com/p/145436045

http://zhangtielei.com/posts/blog-redis-ziplist.html



## Redis更多的数据结构

https://mp.weixin.qq.com/s/zcWvzZTwUAm2NfAQhxMqeQ



## Redis如何内存回收，kv过期策略

https://zhuanlan.zhihu.com/p/145436045



## LRU和LFU算法

https://www.jianshu.com/p/1f8e36285539



## RDB和AOF

- AOF重写是什么

https://blog.csdn.net/ljheee/article/details/76284082





## Redis如何高可用

- 主从复制如何实现
- 哨兵是什么
- 读写分离是什么
- Redis集群如何Hash
- codis是什么

https://www.jianshu.com/p/5de2ab291696

## 进程通信方式

[答案](/QQPI8C.html)



## 死锁是什么，条件，怎么预防

[答案](/Q85J17.html)



## 线程池是什么，参数有哪些，任务提交流程是什么

https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html



## 核心线程在任务执行完以后会退出吗

https://www.cnblogs.com/wqff-biubiu/p/12589450.html

[答案2](https://blog.csdn.net/m0_45406092/article/details/114266265?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242)



## 锁的类型

https://tech.meituan.com/2018/11/15/java-lock.html



## volatile

https://blog.csdn.net/u010255818/article/details/65633033



## Java内存模型

https://zhuanlan.zhihu.com/p/58387104



## JVM 内存区域

https://zhuanlan.zhihu.com/p/58387104

## MESI协议

https://www.cnblogs.com/yanlong300/p/8986041.html



## 信号量是什么

[答案](/QPI740.html#第31章-信号量)



## 信号量如何实现

[答案](/Q846CC.html#信号量)



## 条件变量是什么

[答案](/QPI740.html#第30章-条件变量)



## 管程是什么

https://zhuanlan.zhihu.com/p/26757689



## ThreadLocal是什么，内存泄露吗

https://www.jianshu.com/p/1342a879f523



## 软引用，弱引用的例子

https://www.cnblogs.com/dolphin0520/p/3784171.html



## NIO的Buffer、Channel和Selector

https://www.jianshu.com/p/5442b04ccff8

https://segmentfault.com/a/1190000012316621



## 类加载过程

https://zhuanlan.zhihu.com/p/33509426



## 谈谈垃圾回收算法

[答案](/Q5KTS0.html#more)



## MMAP

https://www.cnblogs.com/huxiao-tee/p/4660352.html





## 熔断降级限流

https://my.oschina.net/u/4544836/blog/4474352



## 缓存穿透，缓存击穿，缓存雪崩

https://blog.csdn.net/zeb_perfect/article/details/54135506



## String、 String Builder、 Stringbuffer 区别

https://segmentfault.com/a/1190000022038238

https://blog.csdn.net/xupeng874395012/article/details/70238863

## 动态代理的原理，JDK和CGlib 的区别

https://blog.csdn.net/u013126379/article/details/52121096?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-2.control

## 僵尸进程和孤儿进程

https://www.cnblogs.com/anker/p/3271773.html



## 持续集成 vs. 持续交付 vs. 持续部署

https://zhuanlan.zhihu.com/p/103554905