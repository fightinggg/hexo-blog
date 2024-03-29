---
date: 2020-04-12 23:54:19
updated: 2020-04-12 23:54:19
---


# JUC
## AQS
&emsp;&emsp; AbstractQueuedSynchronizer 是阻塞式的锁和相关的同步器工具的框架

## ReentrantLock
### 如何重入
&emsp;&emsp; 用一个变量记录重入了多少次
### NonfairSync
#### lock
&emsp;&emsp; cas ,成功就吧ouner改为自己，否则acquire，把自己放进链表中
#### acquire
&emsp;&emsp; tryacquire，成功就结束，失败的话还会尝试几次，然后才park，并为前驱标记，让前驱记得唤醒自己,如果曾经被打断的话，会被忽略，再次进入aqs队列，得到锁以后会打断自己来再次重新打断
<!--more-->
#### unlock
&emsp;&emsp; 调用release
#### release
&emsp;&emsp; 如果成功，unpark唤醒后继，为什么是非公平呢？因为被唤醒以后，可能会有不在链表中线程来跟自己竞争，所以这不公平
#### acquireInterruptibly
&emsp;&emsp; 不忽略打断，抛出异常即可
### FairSync
&emsp;&emsp; 区别再也tryAccquire，如果c=0,即没人占用锁，他还会去检测AQS队列是否为空，其实就是看一下链表队列首部是否为自己，或者链表队列是否为空
### Condition 
&emsp;&emsp; 条件变量又是一个链表，当我们调用await的时候，当前线程的节点会被放进其中，然后把节点状态设为CONDITION,
#### fullrelease
&emsp;&emsp; 拿到锁的重数，然后一次性释放，在唤醒后面的节点，然后park自己
#### signal
&emsp;&emsp; 当调用的时候讲条件变量的链表中第一个元素取出并加入到锁的等待链表中。
## ReentrantReadWriteLock
- ReentrantReadWriteLock rw = new ReentrantReadWriteLock()
- rw.readLock();
- rw.writeLock();
### 锁升级
&emsp;&emsp; 下面的代码会写锁永久等待
```java
rw.readLock().lock();
rw.writeLock().lock();
```
### 锁降级
&emsp;&emsp; 你可以把写锁转化为读锁
```java
// 获得写锁
rw.writeLock().lock();

// 锁降级
rw.readLock().lock();
rw.writeLock().unlock();

// 获得读锁
rw.readLock().unlock();
```
### 缓存问题
&emsp;&emsp; 我们可以把对数据库的某些操作缓存到内存中，来降低数据库的压力
#### query
&emsp;&emsp; 先在缓存中找，找不到就加锁进数据库找，然后更新缓存,可以考虑双重检查锁
#### update
&emsp;&emsp; 先更新数据库,后清除缓存
#### 缓存更新策略
##### 先删缓存，后更新数据库
&emsp;&emsp; A删了缓存，准备更新，结果B来了，B一查缓存没用，去数据找数据，就找到了旧值。
##### 先更新数据库，后删缓存
&emsp;&emsp; A更新数据库的时候，B去查了缓存的旧
#### 保证强一致性
&emsp;&emsp; query查缓存套读锁，查数据库更新缓存加写锁
&emsp;&emsp; update直接加写锁
#### 没有考虑到的问题
- 上面的操作时候读多写少
- 没有考虑缓存容量
- 没有考虑缓存过期
- 只适合单机
- 并发度还是太低， 可以降低锁粒度
### 读写锁原理
&emsp;&emsp; 写锁就是简单加锁，注意照顾读锁的情况就可以了
&emsp;&emsp; 源码太复杂了，我说不清了，留个坑吧
## StampedLock
&emsp;&emsp; 乐观读，每个操作都可以返回一个戳，解锁的时候可以吧戳还回去，如果这中间有人进行了修改，会返回失败，否则成功
- stamp = tryOptimisticRead() 乐观读
- validate(stamp)  校验是否被修改
- stamp = readLock() 读锁
- stamp = writeLock() 写锁
- unlockRead(stamp) 释放
- unlockWriteLock() 释放
&emsp;&emsp; 不支持条件变量，不支持重入
## Semaphore
&emsp;&emsp; acquire、release，和PV有点像
### 应用
&emsp;&emsp; 可以限流，在高峰区让线程阻塞，比如数据库连接池，
### 原理
&emsp;&emsp; state存信号量的值
&emsp;&emsp; acquire 用cas，如果不成功但是位置还够就一直尝试，如果位置不够的话就吧当前线程节点加入AQS队列
&emsp;&emsp; release依然是先cas，失败就一直尝试，绝对会成功，成功以后，依然是改状态，然后唤醒后面的线程，
## CountdownLatch
&emsp;&emsp; 可以用来同步，等待n个线程countDown以后，await的线程才会开始运行
### 原理
&emsp;&emsp; 维护一个值，每当一个线程执行完成，就让他减少1，当减少为0的时候唤醒await的线程
### 为什么不用join？
&emsp;&emsp; 在线程池中，线程都不带停下来的，join没用
### 应用1
&emsp;&emsp; 在游戏中，每个玩家都自己加载自己的数据，当他们都加载完成的时候，游戏才能开始，
&emsp;&emsp; 我们设置10的倒计时，当10个玩家执行完的时候，让他们各自调用countdount，然后就能唤醒游戏开始线程
### 应用2
&emsp;&emsp; 在微服务中，我们可能需要请求多个信息，当信息都请求完成才能返回，如果串行，效率太低了，我们考虑并发，这里也是个倒计时
### 返回结果？
&emsp;&emsp; 如果线程需要返回结果，还是用fature更为合适，CountdownLatch不太适合

## cyclicbarrier
&emsp;&emsp; CountdownLatch 不能用多次，要多次用的话，只能反复创建才行。
&emsp;&emsp; await()即为CountdownLatch的countDown
&emsp;&emsp; cyclicbarrier 构造的时候可以传进一个Runnable，当信号值降低为0的时候，运行Runnable，然后信号量再次赋值为n达到重用的效果
&emsp;&emsp; 千万要注意nthreads和线程数要相等，不要搞骚操作,不是说不行，是不太好。