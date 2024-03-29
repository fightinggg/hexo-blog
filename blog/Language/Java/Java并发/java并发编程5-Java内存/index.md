---
date: 2020-04-11 13:07:36
updated: 2020-04-11 13:07:36
---

# JMM
 Java Memory Model
- 原子性: 保证指令不会收到线程上下文切换的影响
- 可见性: 保证指令不会受到cpu缓存的影响
- 有序性: 保证指令不会受到cpu指令并行优化的影响

<!-- more -->

# 可见性
 java线程都有自己的高速缓存区，是内存的一个子集，下面的测试，不会停止运行,尝试使用volatile解决,当然加入synchronized罩住他也可以。System.out.println也可以
```java
    boolean flag = true;
    @Test
    public void test8() throws InterruptedException {
        Logger logger = LoggerFactory.getLogger(ThreadTest.class);
        Thread thread = new Thread(() -> {
            while (flag) {
            }
            logger.debug("end");
        }, "t1");
        thread.start();

        Thread.sleep(1000);
        flag = false;
        logger.debug("end");
        thread.join();
    }
```

# 两阶段终止
 用volatile来实现可见性，一个负责读，另一个负责写。

# balking
 犹豫
 参见多线程实现的单例模式，双重检查锁，指令重排发生在构造函数和对内存赋值之间。

# 指令重排
 为了提高CPU吞吐率，我们会做指令重排,下面的f2中，一旦发生指令重拍，r就可能变为0
```java
    int num = 0;
    boolean ready = false;
    int r;

    public void f1() {
        if (ready) r = num + num;
        else r = 1;
    }

    public void f2() {
        num = 2;
        ready = true;
    }
```

# 压测工具
 JCstress, 用大量的线程并发模拟

# 禁止指令重排
 volatile 可以实现

# volatile原理
## 写屏障
 在该屏障之前的改动，都将被同步到主存当中
## 读屏障
 保证该屏障以后的读取，都要加载主存中最新的数据

# 单例操作volatile
 因为volatile加入了写屏障，构造方法不会被排到对内存赋值之后

# happens-before
 happens-before 规定了对共享变量的写操作对其他线程的读操作可见。线程解锁m前对变量的写，对于接来下对m加锁的其他线程可见，对volatile的写对其他线程的读可见，start之前对变量的写，对其可见，线程结束前对变量的写，对其他线程得知他结束后可见，线程t1打断t2前对变量的写，对于其他线程得知t2被打断后对变量的读可见,对变量的默认值的写，对其他线程可见，还有屏障也能保证