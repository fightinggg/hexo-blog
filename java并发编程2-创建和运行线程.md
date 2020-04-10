---
title: ' java并发编程2-创建和运行线程'
mathjax: true
abbrlink: 64018
date: 2020-04-10 12:51:27
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


# 使用Tread创建线程
&emsp;&emsp;
```java
package com.wsx.test;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ThreadTest {
    @Test
    public void test1() {
        final Logger logger = LoggerFactory.getLogger(ThreadTest.class);
        Thread thread = new Thread() {
            @Override
            public void run() {
                logger.debug("running");
            }
        };
        thread.setName("t1");
        thread.start();
        logger.debug("running");
    }
}
```
&emsp;&emsp; 得到输出
```output
13:23:33.225 [t1] DEBUG com.wsx.test.ThreadTest - running
13:23:33.225 [main] DEBUG com.wsx.test.ThreadTest - running
```

# 使用Runnable
```java
    @Test
    public void test2(){
        final Logger logger = LoggerFactory.getLogger(ThreadTest.class);
        Runnable runnable = new Runnable() {
            public void run() {
                logger.debug("runing");
            }
        };
        Thread thread = new Thread(runnable,"t2");
        thread.start();
        logger.debug("running");
    }
```
&emsp;&emsp;
```output
13:29:08.503 [t2] DEBUG com.wsx.test.ThreadTest - runing
13:29:08.503 [main] DEBUG com.wsx.test.ThreadTest - running
```

# lambda表达式
&emsp;&emsp; 注意到Runnable源码中有注解@FunctionalInterface,那么他就可以被lambda表达式简化，因为只有一个方法
```java
    @Test
    public void test3() {
        final Logger logger = LoggerFactory.getLogger(ThreadTest.class);
        Runnable runnable = () -> {
            logger.debug("runing");
        };
        Thread thread = new Thread(runnable, "t3");
        thread.start();
        logger.debug("running");
    }
```

# Thread和Runnable
&emsp;&emsp; Thread在用Runnable构造的时候，把他赋值给了一个target变量，然后run


# FutureTask和Callable
&emsp;&emsp; 下面的代码会阻塞
```java
    @Test
    public void test4() throws ExecutionException, InterruptedException {
        final Logger logger = LoggerFactory.getLogger(ThreadTest.class);
        FutureTask<Integer> task = new FutureTask<>(new Callable<Integer>() {
            @Override
            public Integer call() throws Exception {
                logger.debug("runing...");
                Thread.sleep(1000);
                return 100;
            }
        });
        Thread thread = new Thread(task, "t2");
        thread.start();
        logger.debug("running");

        // 阻塞
        logger.debug("{}", task.get());
    }
```
```output
13:48:00.930 [main] DEBUG com.wsx.test.ThreadTest - running
13:48:00.930 [t2] DEBUG com.wsx.test.ThreadTest - runing...
13:48:01.937 [main] DEBUG com.wsx.test.ThreadTest - 100
```

# jps
&emsp;&emsp; 可以查看java程序的pid
&emsp;&emsp; jstack &lt;pid&gt; 查看某个java进程的所有线程状态,非动态
&emsp;&emsp; jconsole可以查看java进程中线程的图形界面
![](http://q8awr187j.bkt.clouddn.com/java%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B-jconsole.png)
&emsp;&emsp; 他还可以远程连接，注意需要在运行java程序的时候要加入一些参数，而且注意关闭防火墙


# ps
```shell script
ps | grep java
```
&emsp;&emsp;, ps 看进程，grep筛选
&emsp;&emsp; kill + PID杀死进程

# top
&emsp;&emsp; 他用表格来显示，还是动态的
&emsp;&emsp; -H 表示查看线程，-p表示pid
```shell script
top -H -p 3456
```


