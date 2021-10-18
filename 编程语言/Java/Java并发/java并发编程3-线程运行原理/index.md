---
date: 2020-04-10 14:11:57
updated: 2020-04-10 14:11:57
---

# 栈
 每个线程都有自己的栈，

# 线程上下文切换
- CPU时间片用完
- gc
- 有更高优先级的线程要运行
- 线程自己sleep,yield,wait,join,park,synchronized,lock


<!--more-->


# 线程中常用的方法
- start() 线程进入就绪状态
- run() 线程要执行的方法
- join() 等待某个线程结束
- join(long) 最多等待n毫秒
- getId() 线程的长整型id
- getName() 线程名
- setName() 
- getPriority() 优先级
- setPriority() 
- getState() 线程状态
- isInterrupted() 是否被打断
- isAlive() 是否存活
- interrupt() 打断线程
- interrupted() 判断是否被打断，会清楚标记
- currentThread() 获得当前正在执行的线程
- sleep() 睡眠
- yield() 提示调度器让出当前线程对cpu使用

# run和start
 主线程也可以直接调用thread的run，但这不是多线程

# sleep
```java
    @Test
    public void f(){
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
```

# yield
 让当前线程进入就绪状态,而不是sleep的阻塞

# 防止CPU占用100%
```java
    @Test
    public void test5() {
        while (true) {
            try{
                Thread.sleep(50);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
```

# 打断
 打断会让打断标记变为true，sleep的时候打断会抛出异常，并清除打断标记，没有sleep的程序，可以用Thread.isInterrupted()退出

# 两阶段终止模式(别用stop)
 每次循环前尝试判断自己是否被打断，sleep的时候被打断会被清除,就自己打断自己，最后料理后事

# LockSupport.park()
 打断park的线程，不会清除标记，所以连续的park其实后面的都无效了，你可以手动用Interrupted来清除。

# 守护线程
 setDaemon(true); 
 只要进程的所有非守护线程都结束以后，不管守护线程有没有结束，他都会被强制结束，垃圾回收器就是守护线程。Tomcat中的Acceptor和Poller线程都是守护线程，他们用来接受请求和分发请求的，如果shutdown以后，不会等待他们处理的

# 线程的五种状态
 初始、就绪、运行、阻塞、终止

# 线程的六种状态
 new,runnable,blockded,wating,timedwaiting,terminated,分别是没有调用start，正在被调度，没有获得锁，join之类的等待，sleep之类的等待，执行完成
 千万注意runnable包含了物种状态中的就绪、运行和阻塞