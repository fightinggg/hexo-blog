---
title: java并发编程8-自定义线程池
mathjax: true
abbrlink: 57324
date: 2020-04-12 23:53:44
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

# 自定义线程池
&emsp;&emsp; 把main看作任务的生产者，把线程看作任务的消费者，这时候模型就建立出来了
&emsp;&emsp; 于是我们需要一个缓冲区，采取消费正生产者模式，然后让消费者不断消费，并在适当的时候创建新的消费者，如果所有任务都做完了，就取消消费者

<!-- more -->

```java
package com.wsx;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

public class TestThreadPool {
    public static void main(String[] args) {
        Logger logger = LoggerFactory.getLogger(ThreadPool.class);
        ThreadPool threadPool = new ThreadPool(3, 10, 10);
        for (int i = 0; i < 50; i++) {
            int finalI = i;
            threadPool.execute(() -> {
                logger.debug("{}", finalI);
                try {
                    Thread.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }
    }
}

class ThreadPool {
    // 线程安全阻塞队列
    private final BlockingQueue<Runnable> blockingQueue;
    // 线程安全
    private final AtomicInteger runingSize = new AtomicInteger(0);
    // 线程安全final
    private final int maxSize;
    // 线程安全final
    private final long timeout;

    public ThreadPool(int maxSize, long timeout, int queueCapcity) {
        this.maxSize = maxSize;
        this.timeout = timeout;
        this.blockingQueue = new BlockingQueue<>(queueCapcity);
    }

    public void execute(Runnable task) {
        for (int old = runingSize.get(); old != maxSize; old = runingSize.get()) {
            if (runingSize.compareAndSet(old, old + 1)) {
                new Thread(() -> threadRun(task)).start();
                return;
            }
        }
        blockingQueue.put(task);
    }

    public void threadRun(Runnable task) {
        for (; task != null; task = blockingQueue.takeNanos(timeout)) {
            try {
                task.run();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        // 线程退出，当前线程数量降低1
        runingSize.decrementAndGet();
    }
}


class BlockingQueue<T> {
    private final Deque<T> queue = new ArrayDeque<>();
    private final ReentrantLock lock = new ReentrantLock();
    private final Condition full = lock.newCondition();
    private final Condition empty = lock.newCondition();
    private final int capcity;

    public BlockingQueue(int capcity) {
        this.capcity = capcity;
    }

    // 带超时的等待
    public T takeNanos(long timeout) {
        lock.lock();
        try {
            while (queue.isEmpty()) {
                try {
                    if (timeout <= 0) return null;
                    // 返回剩余时间
                    timeout = empty.awaitNanos(timeout);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            T t = queue.removeFirst();
            full.signal();
            return t;
        } finally {
            lock.unlock();
        }
    }

    // 超时等待
    public T take() {
        lock.lock();
        try {
            while (queue.isEmpty()) {
                try {
                    empty.await(); // 等待空
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            T t = queue.removeFirst();
            full.signal();
            return t;
        } finally {
            lock.unlock();
        }
    }

    public void put(T element) {
        lock.lock();
        try {
            while (queue.size() == capcity) {
                try {
                    full.await(); // 等待空
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            queue.addLast(element);
            empty.signal();
        } finally {
            lock.unlock();
        }
    }
}
```
&emsp;&emsp; 策略模式
&emsp;&emsp; 当队列满了的时候， 死等，超时等待，让调用者放弃执行，让调用者抛出异常，让调用者自己执行
&emsp;&emsp; 可以用函数式编程实现
