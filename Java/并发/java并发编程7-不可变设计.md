---
title: ' java并发编程7-不可变设计'
mathjax: true
abbrlink: 27955
date: 2020-04-11 18:32:04
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

# 不可变就是线程安全
&emsp;&emsp; 如String

## 拷贝构造函数
&emsp;&emsp; 之间赋值

## char[]构造 
&emsp;&emsp; 拷贝一份(保护性拷贝)

## 子串
&emsp;&emsp; 如果下标起点和母串起点相同，则之间引用过去，否则保护性拷贝(不明白为啥不共用)

# 享元模式
&emsp;&emsp; 最小化内存的使用，共用内存

## 包装类
&emsp;&emsp; valueOf, 比如Long如果在-128到127之间，就使用一个cache数组，又如String串池，BigDecimal和BigInteger的某些数组

## 保护
&emsp;&emsp; 千万要注意这些类的函数组合起来操作就不一定安全了，需要用原子引用类来保护

<!-- more -->

## 数据库连接池
```java
package com.wsx;


import lombok.Data;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.atomic.AtomicIntegerArray;

@Data
public class ConcurrentPool {
    private final Logger logger = (Logger) LoggerFactory.getLogger(Connection.class);
    private final int poolSize;
    private Connection[] connections;
    private AtomicIntegerArray states;

    public ConcurrentPool(int poolSize) {
        this.poolSize = poolSize;
        this.connections = new Connection[poolSize];
        this.states = new AtomicIntegerArray(new int[poolSize]);
        for (int i = 0; i < poolSize; i++) {
            connections[i] = new Connection();
        }
    }

    public Connection borrow() {
        while (true) {
            for (int i = 0; i < poolSize; i++) {
                if (states.get(i) == 0) {
                    if (states.compareAndSet(i, 0, 1)) {
                        logger.debug("return {}",i);
                        return connections[i];
                    }
                }
            }
            synchronized (this) {
                try {
                    logger.debug("wait...");
                    this.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public void free(Connection conn) {
        for (int i = 0; i < poolSize; i++) {
            if (conn == connections[i]) {
                states.set(i, 0);
                synchronized (this) {
                    logger.debug("notifyAll...");
                    this.notifyAll();
                }
                break;
            }
        }
    }
}
```
# 改进
&emsp;&emsp; 动态扩容，可用性检测，等待超时处理，分布式hash

# final原理
&emsp;&emsp; final会给变量后面加入写屏障，注意第一步是分配空间值默认为0，然后才赋予初值，写屏障保证其他对象看到他的值是赋值以后的而不是默认值
&emsp;&emsp; 在读的时候，如果不用final用的是getstatic，否则的话如果小就复制到栈中，大就放到常量池中。

# 无状态
&emsp;&emsp; 例如不要为servlet设置成员变量，这时候他就成了无状态对象，这就是线程安全的
