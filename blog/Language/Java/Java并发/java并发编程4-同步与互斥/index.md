---
date: 2020-04-10 23:59:09
updated: 2020-04-10 23:59:09
---



# synchronized
 锁住对象，放在静态方法前为锁类，放在普通方法前为锁类的对像。使用管程实现

# 线程安全类
 String, Integer, StringBuffer,Random,Vector,Hashtable,juc;

# 加锁
 把对象头的hash、Age和对象的指针放进自己的栈中，让对象头的hash、Age,位置指向自己的栈，
 这时候来了另一个线程也想拿到锁，但是他肯定会失败，失败以后他就申请重量级锁，让对象头再次改变为指向管程，
 当原来当线程想要释放锁的时候，依然使用cas，但是肯定失败，他发现现在的锁已经变成了重量级锁了。

<!--more-->

# 自旋优化
 不阻塞，使用自旋，如果自旋多次失败就阻塞了

# 偏向锁
 可以在对象头中加入线程的ID，然后对象的锁就被这个线程所持有了。程序启动3秒以后启动偏向锁，可以通过VM参数来改变

# 禁用偏向锁
 -XX: -UseBiasedLocking

# hashcode
 轻量级锁和重量级锁都不会因为调用hashcode而撤销锁状态，但是偏向锁会，因为他没有地方储存hashcode，所以调用hashcode以后，偏向锁会被撤销

# wait/notify
 这个是只有重量级锁才有的东西，所以也会撤销轻量锁

# 批量重偏向
 如果连续撤销锁超过20次，jvm会批量的让类的所有对象都偏向于另一个线程

# 批量撤销
 如果撤销次数超过40次，jvm会撤销这个类的所有对象的偏向锁，甚至新建的对象也不会有偏向锁

# 锁消除
 JIT即时编译器会优化热点代码，如果分析出某个锁不会逃离方法，则进行锁消除

# 保护性暂停GuardObject
 用一个中间对象把线程连接起来，注意虚假唤醒的情况发生。我们用时间相减来避免产生等待时间错误的情况

# park和unpark
 他们就像PV操作一样，但是信号量不能叠加
 park和unpark实现的时候有三部分,_mutex,_condition,_counter,这里的_counter最多只能是
 调用park : 检查_counter，如果为0，就获得_mutex锁，然后该线程进入_condition开始阻塞,如果为1，就把它设为0，然后继续执行线程
 调用unpark, 把counter设为1，然后唤醒_condition中的线程

# 线程状态转换
## start
- NEW -> RUNNABLE 调用start()
## 对象锁
- RUNNABLE -> WAITING 获得对象锁后wait()
- WAITING -> RUNNABLE notify(),notifyAll(),interrupt()且竞争成功
- WAITING -> BLOCKED  notify(),notifyAll(),interrupt()且竞争失败
- BLOCKED -> WAITING 当持有锁的线程执行完毕会唤醒其他BLOCKED的线程
## join
- RUNNABLE -> WAITING 调用join()
- WAITING -> RUNNABLE join的线程执行完成或者当前线程被interrupt()
## park和unpark
- RUNNABLE -> WAITING 调用park()
- WAITING -> RUNNABLE 调用unpark()或者interrupt()
## wait(long t)
- RUNNABLE -> TIMED_WAITING 获得对象锁后wait(long)
- TIMED_WAITING -> RUNNABLE 超时，notify(),notifyAll(),interrupt()且竞争成功
- TIMED_WAITING -> BLOCKED  超时，notify(),notifyAll(),interrupt()且竞争失败
## join(long t)
- RUNNABLE -> TIMED_WAITING 调用join(long)
- TIMED_WAITING -> 超时，RUNNABLE join的线程执行完成或者当前线程被interrupt()
## sleep(long)
- RUNNABLE -> TIMED_WAITING 调用sleep(long)
- TIMED_WAITING -> 超时，RUNNABLE sleep的线程执行完成或者当前线程被interrupt()
## parkNanos和parkUntil
## 终止
- RUNNABLE -> TERMINATED 当线程执行完毕

# 死锁
## 定位死锁
 jconsole，jps都可以
## jps
 如果死锁，会提示Found One Java-level deadlock,在里面找去
## jconsole 
 选择线程，点检测死锁，就能看到了


# 活锁
 一个线程i++，另一个i--,难以结束了,原因是改变了互相的结束条件

# 饥饿
 可以通过顺序加锁来避免死锁，但是这又会导致饥饿发生

# ReentrantLock
 可中断，可设置超时时间，可设置公平锁，支持多个条件变量，可重入
## 用法
```java
reentrantLock.lock();
try{

}finally{
  reentrantLock.unlock();
}
```
## 可打断
 没有竞争就能得到锁，如果进入了阻塞队列，可以被其他线程用interruput打断。
```java
try{
  reentrantLock.lockInterruptibly();
}catch(InterruptedException e){
    e.printStackTrace();
}
try{
  //....
}finally{
  reentrantLock.unlock();
}
```
## 非阻塞
 tryLock()
## 超时机制
 tryLock(1,TimeUnit.SECONDS)

## 条件变量
 ReentrantLock支持多个条件变量
```java
Condition c1 = reentrantLock.newCondition()
Condition c2 = reentrantLock.newCondition()
// 获得锁之后
c1.await();
```
```java
c1.signal();
```

# 同步
 await和signal,park和unpark,wati和notify，

# 3个线程分别输出a,b,c, 要看到abcabcabcabcabc
## 一个整数+wait/notifyAll
 轮换，1则a输出，2则b输出，3则c输出，如果不是自己的就wait，是的话就输出然后notifyAll
## 使用信号量+await/signal
 设置3个信号量，一个线程用一个，然后a唤醒b，b唤醒c，c唤醒a
## park和unpark
 a unpark b, b unpark c, c unpark a;
```java
   static Thread t1 = null, t2 = null, t3 = null;
    void show(String string, Thread thread) {
        for (int i = 0; i < 10; i++) {
            LockSupport.park();
            System.out.print(string);
            LockSupport.unpark(thread);
        }
    }

    @Test
    public void test7() throws InterruptedException {
        t1 = new Thread(() -> show("a", t2));
        t2 = new Thread(() -> show("b", t3));
        t3 = new Thread(() -> show("c", t1));
        t1.start();
        t2.start();
        t3.start();
        LockSupport.unpark(t1);
    }
```