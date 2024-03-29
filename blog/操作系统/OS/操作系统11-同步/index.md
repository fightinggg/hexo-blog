---
date: 2020-04-01 22:45:48
updated: 2020-04-01 22:45:48
---

# 信号量
 就是一个整型加上一个队列
```cpp
class Semaphore{
  int sem;
  WaitQueue q;
}
```

# P操作
 让信号量减少1，如果&lt;0，把自己挂起
```cpp
// 有原子性
P(){
  sem--;
  if(sem<0){
    Add this thread to q;
    block(t);
  }
}
```

<!-- more -->

# V操作
 让信号量加1，如果&le;0，唤醒挂起的一个线程
```cpp
// 有原子性
V(){
  sem++;
  if(sem<=0){
    Remove a thread  t from q;
    wakeUp(t);
  }
}
```

# 简单的同步
 这是A的代码
```cpp
do a1
do a2
```
 这是B的代码
```cpp
do b1
do b2
```
我们需要保证a2在b1之后执行，应该怎么办？
 我们可以让信号量设为0，如果A先执行完a1，则P()导致阻塞，当B执行完b1以后，A被唤醒，代码如下
```cpp
do a1
P()
do a2
```
```cpp
do b1
V()
do b2
```

# 生产者与消费者
 任何时间只有一个线程操作缓冲区(互斥)
 当缓冲区空，消费者要等待生产者(同步)
 当缓冲区满，生产者等待消费者(同步)
 所以我们需要一个互斥量，两个个信号量
```cpp
mutex = 1; // 互斥量
fullBuffers = 0; // 缓冲区满的信号量
emptyBuffers = n; // 缓存区空的信号量
```
 生产者
```cpp
emptyBuffers.P(); // 我们要生产之前需要判断空缓冲区的信号量，如果空间不足就要阻塞
mutex.P(); // 进入临界区
Add
mutex.V(); // 退出临界区
fullBuffers.V(); // 释放
```

 消费者
```cpp
fullBuffers.P(); 
mutex.P(); 
Del
mutex.V(); 
emptyBuffers.V(); 
```

 mutex.V和fullBuffers.V可以交换，但是P不行，会死锁

# 管程
 包含了一个锁，包含了很多条件变量
```cpp
class Condition{
  int numWaiting=0; // 队列中的元素个数
  WaitQueue q;
  void Wait(lock){
    numwaiting++;
    Add this thread to q;
    release(lock);
    schedule();
    require(lock);
  }
  void Signal(){
    if(numWaiting>0){
      Remove a thread t from q;
      wakeup(t);
      numWaiting--;
    }
  }
}
```
 想想如何用管程实现生产者消费者
 一个锁lock+两个条件变量notFull和notEmpty+一个计数器记录缓冲区的食物数量
```cpp
// 生产者
lock.require();
while(count==n) notFull.Wait(&lock); // 如果满了就等待，参加上面的wait会释放锁
Add， count++;
notEmpty.Signal(); // 生产了以后就可以去唤醒别人了
lock.Release();
```
```cpp
// 消费者
lock.require();
while(count==0) notEmpty.Wait(&lock); 
Del， count--;
notFull.Signal(); 
lock.Release();
```

 注意到消费者的Signal后,有两种选择，第一是继续执行，直到release，第二是将CPU交给被唤醒的线程去执行管程，
 我们先考虑第一种方案，当唤醒线程以后，自己的release执行完以前，没有任何其他线程能够进入临界区，当自己release以后，我们来考虑所有的生产者，有若干个被唤醒的线程已经在临界区里面了，可能还有一些生产者也在临界区中然而没有被唤醒，这种我们不用管他，还有一种在临界区外正准备争夺临界区的控制，所以，为了避免那些临界区外和若干个临界区内被唤醒的线程发生冲突，我们必须用while来保证只有一个线程再次获得控制权。
 为什么会有若干个未被唤醒的线程出现在临界区中? 我们考虑这样一种情况,此时缓冲区食物满了，一个生产者进入了临界区，发现count=n,于是开始wait,这导致了锁被释放，之后就有两个分支了，要么是又来了一个生产者争夺了锁，要么来了一个消费者开始消费，如果来的是生产者，他发现count=n,又会开始wait,这就是为什么会出现多个未被唤醒的生产者出现在临界区中。
 为什么会有若干个被唤醒的线程出现在临界区中，我们先考虑现在只有一个未被唤醒的生产者在临界区，此时cpu在消费者手中，当消费者signal以后，会唤醒生产者，但是生产者不见得能拿到CPU，当消费者release以后，临界区的那个生产者跃跃欲试，然后临界区外面还有一群生产者也在等着呢，要是他们拿到了，临界区中的生产者虽然被唤醒，但是还是会被require阻塞,这种情况下，被唤醒的生产者就一个接一个的被阻塞了。
 如果我们改进CPU，使用第二种方法，让被唤醒的线程去执行管程，那就不会发生上面的问题，我们的while可以换位if，但是这样的CPU难以设计。


# 读者与写者
 两个信号量countMutex和writeMutex，一个整形Rcount
# 读者优先
```cpp
// write
lock(writeMutex); // 上锁，私有锁

write

unlock(writeMutex);
```
```cpp
// 写者
lock(CountMutex); // 上私有锁
if(Rcount=0) lock(writeMutex); // 读者的锁共享
++Rcount
unlock(CountMutex);

read;

lock(CountMutex); // 上私有锁
--Rcount
if(Rcount=0) unlock(writeMutex); // 读者的锁共享
unlock(CountMutex);
```

# 写者优先
 使用管程实现
```cpp
void read(){
  wait until no writers; // 等待所有的活跃的读者和等待的读者
  read;
  wakeup waiting writers; // 唤醒等待的读者
}
void write(){
  wait until no readers/writers; // 等待活跃的读者和活跃的写者
  write;
  wakeup waiting readers/writers; // 优先唤醒等待的写者
}
```


# 哲学家进餐
 错误： 先拿左边，再拿右边，如果右边没拿到则放下左边的，然后等待一段时间, 可能导致饥饿
 错误： 让筷子变成互斥的，导致只有一个人能够吃面条
```cpp
if(state[i]==HUNGRY&&state[LEFT]!=EATING&&state[RIGHT]!=EATING){
  state[i]=EATING;
  V(s[i]);
}
```
```cpp
think();

P(mutex);
state[i]=HUNGRY;
test_take_left_right_forks(LEFT); // 自己吃
V(mutex);
P(s[i])

eat();

P(mutex);
state[i]=THINKING;
test_take_left_right_forks(LEFT); // 左邻居吃
test_take_left_right_forks(RIGHT); //右邻居吃
V(mutex);
```