---
title: java并发编程10-异步模式
mathjax: true
abbrlink: 23688
date: 2020-04-12 23:54:07
categories:
 - Java
 - Java并发
tags:
 - Java
 - Java并发
keywords:
 - Java
 - Java并发
---

# 异步模式-工作线程
## 线程不足导致饥饿
&emsp;&emsp; 有两个线程A，B，任务有两种，上菜和做菜，显然上菜要等待做菜，如果AB都在执行上菜，就没有更多的线程做菜了，这就导致了AB在死等，注意这不是死锁，
&emsp;&emsp; 所以不同的任务类型应该用不同的线程池

<!--more-->

## 创建多少线程
&emsp;&emsp; 过小导致CPU不充分利用，过大导致上下文切换占用更多内存
### CPU密集型运算
&emsp;&emsp; CPU核数+1个线程最好，+1是当某个线程由于缺页中断导致暂停的时候，额外的线程就能顶上去
### IO密集型运算
&emsp;&emsp; 核数* 期望CPU利用率 * (CPU计算时间+等待时间) / CPU计算时间

