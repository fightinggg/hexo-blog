---
date: 2020-04-01 22:10:03
updated: 2020-04-01 22:10:03
---

[n个进程互斥，留坑](https://www.bilibili.com/video/BV1js411b7vg?p=61)

# 禁用中断
 进入临界区以后禁用中断，离开临界区以后开启中断
 一但禁用了中断，整个系统都停止，可能导致饥饿，要是临界区有个死循环就完蛋，多个CPU无法解决问题。

<!-- more -->

# 利用软件解决
## 轮换
```cpp
do{
  while(turn!=i);
  // 进入临界区
  // do something
  turn=j
  // 离开临界区
}while(1);
```

## peterson算法
```cpp
do{
  flag[i]=true; // 自己要进去
  turn = j; // 把机会让给别人
  while(flag[j]&&turn==j);
  // 进入临界区
  // do something 
  flag[i]=false;
  // 离开临界区
}while(1);
```

## n个进程的互斥
 Bakery算法， 进入临界区以前，进程接受一个数字，得到最小数字的进入临界区，如果数字相同，id小的进去

# 基于硬件解决
 优点: 简单，适用于多CPU中任意数量的进程，支持多临界区，开销小
 可能发生饥饿，可能死锁，如果低优先级进程拥有锁，高优先级进程拥有CPU，还在忙等待，就死锁了
## Test and Set
```cpp
bool testAndSet(bool*p){ 
  bool res = *p;
  *p=true;
  return res;
}
```

## change
```cpp
void swap(bool *a,bool*b){
  bool tmp = *a;
  *a=*b;
  *b=tmp;
}
```