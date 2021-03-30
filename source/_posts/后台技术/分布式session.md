---
date: 2021-03-30 00:38:46
updated: 2021-03-30 00:38:46
mathjax: true
typora-root-url: ../..
---

# 分布式session

## 客户端储存

通过加密的方式储存在客户端

有安全隐患，cookie大小被限制，对网络传输造成压力

## session复制

通过广播来异步同步session，还是存在一致性问题

## session绑定，会话保持

一个客户端每次都被代理到同一个服务器上

## redis

把session缓存在redis中，在cookie中保留sessionid

## 《大型分布式网站架构设计与实践》-2.1.3 分布式session

如果我们需要非常高的系统可靠性，则可以把session持久化到DB中。但是这会导致吞吐降低。

![image-20210330113546497](/images/image-20210330113546497.png)









