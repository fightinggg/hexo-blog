---
date: 2020-04-11 16:06:24
updated: 2020-04-11 16:06:24
---


# CAS
 compareAndSet(prev,next);无锁，无阻塞


# 为什么效率高
 失败的话会重新尝试，但是锁会进行上下文切换，代价大

# 原子整形
## AtomicInteger
```java
incrementAndGet();
getAndAdd(5);
updateAndGet(value -> value*10);
```

<!-- more -->
# 原子引用
 AtomicReference 不能解决ABA问题
 AtomicStampedReference 版本号机制
 AtomicMarkableReference True和false


# 原子数组
# 字段更新器
 可以保护类的成员
 compareAndSet(obj,expect,update);

# 原子累加器
 和原子整形一样，但是只支持累加并且效率更高

## 缓存行伪共享 
 缓存中的数据是按照行分的，要失效就一起失效
 有数据a和b，他们被分到了一个行中，线程1改变a导致线程2的行失效，线程2改变b导致线程1的行失效，这就是伪共享
 注解sum.misc.Contended , 可以在内存中加入空白，不出现伪共享

## longadder
 累加单元，和concurrentHashMap一样，使用分段的机制，提高并行度，用一个数组来表示累加，数组元素的和才是真正的累加值，orn


# Unsafe
 获得Unsafe ,他是单例且private
```java
Field theUnsafe = Unsafe.class.getDeclaredField("theUnsafe");
theUnsafe.setAccessible(true);
Unsafe unsafe = (Unsafe) theUnsafe.get(null);
```

## CAS
```java
class Teacher{
  volatile int id;
  volatile String name;
}
```
```java
// 1. 获得域的偏移地址
long idOffset = unsafe.objectFieldOffset(Teacher.class.getDeclaredField("id"));
Teacher t = new Teacher();
// 执行cas
unsafe.compareAndSwapInt(t,idOffset,0,1);
```

# 自己实现AutomicInteger
```java
class MyAtomicInteger{
  private volatile int value;
  private static final long valueOffset;
  static final Unsafe UNSAFE;
  static {
    // 获得UNSAFE
  }
  public int getValue(){
    return value;
  }
  public void increment(amount){
    while(true){
      int prev = this.value;
      int next = prev+amount;
      UNSAFE.compareAndSwapInt(this,valueOffset,prev,next);
    }
  }

}
```