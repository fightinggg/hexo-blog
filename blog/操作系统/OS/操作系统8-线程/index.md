---
date: 2020-04-01 21:36:48
updated: 2020-04-01 21:36:48
---


# 线程管理
# 线程控制块 TCB
 类似PCB
# 线程优点
 一个进程可以同时存在多个线程，各个线程之间可以并发执行，各个线程之间可以恭喜那个地址空间和文件资源。
# 线程缺点
 一个线程崩溃会导致所属进程的所有线程崩溃。
# 进程与线程
 进程是资源分配单位，线程是CPU调度单位
  进程拥有完整的资源平台，线程只独享其中的寄存器和栈
  线程也有就绪阻塞执行三种状态和状态转化关系
 线程能减少并发执行的时间和空间开销,线程创建终止块，切换快，共享资源可直接进行不依赖内核通信。
# 用户线程和内核线程
 用户线程操作系统看不到，内核线程操作系统看得到
# 用户线程
 线程的创建终止同步和调度都是线程库实现的。TCB在进程内部
# 用户线程的缺点
 当一个线程阻塞以后，整个进程都阻塞了，因为操作系统看不到用户心线程，只能看到进程。
<!-- more -->
# 内核线程
 内核线程是操作系统看得到的，他的TCB在和PCB放在一起
 内核线程的创建终止等都是通过系统调用或内核函数的方式来进行，有内核完成，开销较大，如果内核线程阻塞了，不会影响其他内核线程。时间片分给线程，多线程的进程可以获得更多的CPU时间。
# 轻量级进程
 一个进程可以有多个轻量级进程，每个轻量级进程由一个单独的内核线程来支持。
# 上下文切换
 把进程的资源的上下文(CPU状态)放入PCB中，然后才能安全的调度
# exec()
 加载程序取代当前进程。
# fork()
 完全拷贝一份进程，pid不同, 99%的情况，fork()后马上exec()
# vfork()
 轻量级fork，不创建内存映像，然后调用用exec的时候就比fork+exec快多了。
# cow技术 copy on write
 当fork的时候不拷贝内存，只有当写的时候才拷贝内存
# wait()
常常父进程需要等待子进程结束。wait()等待子进程的exit()的返回值，然后回收子进程的PCB。
# exit()
 当子进程exit,但是父进程没有做完wait的时候，他就成了僵尸态。
# 父进程比子进程先死掉怎么办
 root进程会在定期扫描进程，寻找僵尸态进程,并终结他们。