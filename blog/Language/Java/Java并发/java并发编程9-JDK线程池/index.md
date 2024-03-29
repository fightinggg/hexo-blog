---
date: 2020-04-12 23:53:55
updated: 2020-04-12 23:53:55
---

# JDK的线程池
 线程池状态，RUNNING，SHUTDOWN(不会再接受新任务了)，STOP(立刻停止)，TIDYING(任务执行完毕，即将TERMINATED)，TERMINATED

## 构造函数
```java
public ThreadPollExecutor(int corePoolsize,int maximumPoolSize,long keepAliveTime,TimeUnit unit,BlockingQueue<Runnable> workQueue,ThreadFactory threadFactory,RejectedExecutionHandler handler)
```
- 核心线程数量
- 最大线程数量
- 就急线程生存时间
- 时间单位
- 阻塞队列
- 线程工厂: 给线程起个名字
- 拒绝策略

<!--more-->
### 拒绝策略
- AbortPolicy 让调用者抛出异常
- CallerRunsPolicy 让调用者运行任务
- DiscardPolicy 放弃本次任务
- DIcardOldestPolicy 放弃队列中最先进入的任务
- Dubbo 抛出异常并记录线程栈信息
- Netty 创建新的线程来执行
- ActiveMQ 等待超时
- PinPoint 拒绝策略链， 比如先用方法A，如果失败就要方法B，...

## newFixedThreadPool
 固定大小的线程池
 阻塞队列无界，没有就急线程，nThreads个核心线程, 是非守护线程
 当然我们也可以自己创建线程工厂，自己给线程取名字
```java
 public static ExecutorService newFixedThreadPool(int nThreads) {
        return new ThreadPoolExecutor(nThreads, nThreads,
                                      0L, TimeUnit.MILLISECONDS,
                                      new LinkedBlockingQueue<Runnable>());
    }
```

## newCachedThraedPool
 不固定大小的线程池
 阻塞队列无界，没有核心线程，全是救急线程，但不是无限个，活60秒
```java
    public static ExecutorService newCachedThreadPool() {
        return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
                                      60L, TimeUnit.SECONDS,
                                      new SynchronousQueue<Runnable>());
    }
```

### SynchronousQueue
 如果没有人取出东西，放入操作会被阻塞, 如果没有人放入东西，同理拿出会被阻塞，如果有多个同时拿，这时候就像栈一样，后来的人，会先拿到东西
```java
    void test10_f1(SynchronousQueue<Integer> integers, String string) throws InterruptedException {
        Thread.sleep(200);
        new Thread(() -> {
            try {
                logger.debug("begin");
                integers.put(1);
                logger.debug("end");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }, string).start();
    }

    void test10_f2(SynchronousQueue<Integer> integers, String string) throws InterruptedException {
        Thread.sleep(200);
        new Thread(() -> {
            try {
                logger.debug("begin");
                integers.take();
                logger.debug("end");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }, string).start();
    }

    @Test
    public void test10() throws InterruptedException {
        SynchronousQueue<Integer> integers = new SynchronousQueue<>();
        test10_f1(integers, "1");
        test10_f1(integers, "2");
        test10_f1(integers, "3");
        test10_f1(integers, "4");
        test10_f2(integers, "5");
        test10_f2(integers, "6");
        test10_f2(integers, "7");
        test10_f2(integers, "8");
        test10_f2(integers, "a");
        test10_f2(integers, "b");
        test10_f2(integers, "c");
        test10_f2(integers, "d");
        test10_f1(integers, "e");
        test10_f1(integers, "f");
        test10_f1(integers, "g");
        test10_f1(integers, "h");
    }
```
 下面是输出, 可以看到，1234按顺序进入，4321按顺序出来
```sh
16:33:54.391 [1] DEBUG com.wsx.test.ThreadTest - begin
16:33:54.591 [2] DEBUG com.wsx.test.ThreadTest - begin
16:33:54.792 [3] DEBUG com.wsx.test.ThreadTest - begin
16:33:54.996 [4] DEBUG com.wsx.test.ThreadTest - begin
16:33:55.202 [5] DEBUG com.wsx.test.ThreadTest - begin
16:33:55.202 [5] DEBUG com.wsx.test.ThreadTest - end
16:33:55.202 [4] DEBUG com.wsx.test.ThreadTest - end
16:33:55.407 [6] DEBUG com.wsx.test.ThreadTest - begin
16:33:55.409 [6] DEBUG com.wsx.test.ThreadTest - end
16:33:55.409 [3] DEBUG com.wsx.test.ThreadTest - end
16:33:55.609 [7] DEBUG com.wsx.test.ThreadTest - begin
16:33:55.609 [2] DEBUG com.wsx.test.ThreadTest - end
16:33:55.609 [7] DEBUG com.wsx.test.ThreadTest - end
16:33:55.813 [8] DEBUG com.wsx.test.ThreadTest - begin
16:33:55.814 [8] DEBUG com.wsx.test.ThreadTest - end
16:33:55.814 [1] DEBUG com.wsx.test.ThreadTest - end
16:33:56.017 [a] DEBUG com.wsx.test.ThreadTest - begin
16:33:56.221 [b] DEBUG com.wsx.test.ThreadTest - begin
16:33:56.425 [c] DEBUG com.wsx.test.ThreadTest - begin
16:33:56.630 [d] DEBUG com.wsx.test.ThreadTest - begin
16:33:56.835 [e] DEBUG com.wsx.test.ThreadTest - begin
16:33:56.836 [e] DEBUG com.wsx.test.ThreadTest - end
16:33:56.836 [d] DEBUG com.wsx.test.ThreadTest - end
16:33:57.038 [f] DEBUG com.wsx.test.ThreadTest - begin
16:33:57.039 [f] DEBUG com.wsx.test.ThreadTest - end
16:33:57.039 [c] DEBUG com.wsx.test.ThreadTest - end
16:33:57.244 [g] DEBUG com.wsx.test.ThreadTest - begin
16:33:57.244 [g] DEBUG com.wsx.test.ThreadTest - end
16:33:57.244 [b] DEBUG com.wsx.test.ThreadTest - end
16:33:57.448 [h] DEBUG com.wsx.test.ThreadTest - begin
16:33:57.449 [h] DEBUG com.wsx.test.ThreadTest - end
16:33:57.449 [a] DEBUG com.wsx.test.ThreadTest - end
```

## newSingleThreadExecutor
 1个核心线程，0个救急线程，使用无界队列,于是任务可以无数个
```java
    public static ExecutorService newSingleThreadExecutor() {
        return new FinalizableDelegatedExecutorService
            (new ThreadPoolExecutor(1, 1,
                                    0L, TimeUnit.MILLISECONDS,
                                    new LinkedBlockingQueue<Runnable>()));
    }
```
 1个线程的线程池能叫池吗？我干嘛不自己用？ 实际上我们自己创建的话如果碰到一些错误的任务，可能线程就退出了，这里不好处理，但是线程池在该线程退出以后会帮我们重新创建线程
 FinalizableDelegatedExecutorService 是一个装饰者模式，只暴露部分接口，避免后期被修改容量

## TimerTask
 这个不重要，他很差，他是串行执行的，如果前面的太耗时会导致后面的被推迟，如果前面发生异常，后面的不会执行

## ScheduledExecutorService
 用法和TimerTask很像，但是他不会出现上面的异常影响后续任务的情况
### ScheduledExecutorService.scheduleAtFixedTate()
 在初始延迟以后，能够在单位时间内被反复执行
### ScheduledExecutorService.scheduleWithFixedDelay()
 在初始延迟以后，反复执行的两个任务之间隔固定时间


## 函数
### submit
 用future来返回，future.get();

### invokeAll(tasks)
 提交tasks中的所有任务

### invokeAll(tasks,timeout,unit)
 带一个超时时间

### invokeAny 
 谁最先执行完就返回谁，其他的就不管了

### shutdown
 无阻塞，不会接受新提交的任务，但已提交的任务后执行完。

### shutdownNow
 打断所有的线程，并返回队列中的任务，

### isShutdown
 只要不是running， 就返回true

### isTerminated
 只有TREMINATED返回真

### awaitTermination
 就一直等，等到超时或者线程结束

## 正确处理异常
 如果执行过程中没有异常，future.get()正常返回,如果出现异常，future.get()会抛出异常

## Fork/Join
 fork能创建新的线程来执行，join会阻塞，这就实现了并行，下面是100的阶乘模998244353
```java
    Logger logger = LoggerFactory.getLogger(RecursiveTaskTest.class);

    @Test
    public void test() {
        class Task extends RecursiveTask<Integer> {
            private int begin;
            private int end;
            private int mod;

            Task(int begin, int end, int mod) {
                this.begin = begin;
                this.end = end;
                this.mod = mod;
            }

            @Override
            protected Integer compute() {
                if (begin == end) return begin;
                int mid = begin + end >> 1;
                Task task1 = new Task(begin, mid, mod);
                Task task2 = new Task(mid + 1, end, mod);
                task1.fork();
                task2.fork();
                return Math.toIntExact(1L * task1.join() * task2.join() % mod);
            }
        }

        ForkJoinPool forkJoinPool = new ForkJoinPool(3);
        logger.debug("{}", forkJoinPool.invoke(new Task(1, 100, 998244353)));

    }
```