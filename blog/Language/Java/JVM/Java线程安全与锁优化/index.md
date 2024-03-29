---
date: 2020-02-16 20:07:39
updated: 2020-02-16 20:07:39
---

### Java共享数据的分类
- 不可变: 不可变数据是绝对线程安全的
- 绝对线程安全: “不管运行时环境如何，调用者都不需要任何额外的同步措施”
- 相对线程安全: 对一个对象单独对操作是线程安全对
- 线程兼容: 本身并非线程安全，但我们可以在调用端使用同步手段来确保在并发环境中可以安全得使用
- 线程对立: 对象在调用端无论使用何种同步手段，都无法确保安全
<!---more-->

### 线程安全的实现方法
- 互斥同步: 使用互斥量
- 非阻塞同步 : 使用原子操作

### 锁优化
- 自旋锁与自适应自旋锁:  使用多个忙循环而不是挂起，当忙循环超过某个固定阈值的时候挂起，自适应指得是动态选择阈值
- 锁清除: 消除不必要的锁
- 锁粗化: 扩大锁的范围，避免在循环中频繁加锁
- 轻量级锁: 使用CAS操作，避免互斥加锁，若CAS操作失败，则使用互斥加锁
- 偏向锁: 让第一个使用对象对线程持有，在第二个线程到来前,不进行任何同步操作。