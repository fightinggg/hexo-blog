---
date: 2020-04-12 23:54:34
updated: 2020-04-12 23:54:34
---

# 集合的线程安全类
## 遗留的线程安全类
 Hashtable，Vector直接把同步加到方法上
## 修饰的安全集合
 装饰器模式，Syncronize*
## JUC安全集合
### Blocking型
 大部分实现基于锁并提供阻塞的方法
<!--more-->
### CopyOnWrite
 在修改的时候会拷贝一份
### Concurrent
 使用CAS优化，使用多个锁，但是是弱一致性，如迭代的时候得到的内容是旧的，求大小未必100%准确，读取也是弱一致性
## ConcurrentHashMap
 细粒度锁
```java
LongAdder value = concurrentHashMap.computeIfAbsent(word,(key)->new LongAdder());
value.increment();
```
### HashMap
### 并发死链
 在jdk7中链表是头插法，插入16，35，1,得到了1->35->16
 线程A准备扩容 e 1->35->16->null ,  next 35->16->null,然后被中断
 线程B扩容完成， 导致链表成了 head->35->1->null， 然后中断
 线程A继续扩容 e 1->null, next 35->1->null, 把e插入到next新的位置,得到了head->1->35->1->
 继续扩容 e = 35->1-> next = 1->35-> ，把e插入，得到了head->35->1->35, 这里已经死循环了
### 丢失数据
 jdk8扩容会丢失数据

### ConcurrentHashMap 源码
 ForwardingNode, 当扩容的时候，我们搬运一次就把老位置上连接ForwardingNode， 当查询来临的时候，就会知道去新的table里面找了，
 TreeBin， 是红黑树来替换链表,添加值优先考虑扩容而不是转化为红黑树
[???怎么不讲了??](https://www.bilibili.com/video/BV16J411h7Rd?p=281)