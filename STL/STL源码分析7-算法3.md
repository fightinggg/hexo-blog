---
title: STL源码分析7-算法3
mathjax: true
categories:
  - c++笔记
  - STL源码分析
tags:
  - c++笔记
  - STL源码分析
keywords:
  - c++笔记
  - STL源码分析
abbrlink: e4399b41
date: 2020-03-25 21:02:55
---

# 这边的算法应该爽一些了

# lower_bound upper_bound binary_search
&emsp;&emsp; 不多说了，就是二分，

# next_permutation
&emsp;&emsp; 一直想不明白这个函数怎么实现的，今天来看看，既然是下一个排列，显然是需要找到一个刚好比现在这个大大排列，简单分析......6532,如果一个后缀都是递减的，显然这个后缀不能更大了，如果一个后缀都不能变得更大，就必须调整更前的，所以我们要找到这样的非降序....16532,把最后一个放到1的位置，其他的从小到大排列好就行了。也即swap(1,2),reverse(6531)
<!---more-->
# prev_permutation
&emsp;&emsp; 同理

# random_shuffle
&emsp;&emsp; 洗牌算法，从first往last遍历，每次从最后面随机选一个放到当前位置即可。

# partial_sort 
&emsp;&emsp; partial_sort(first,middle,last)
&emsp;&emsp; 保证[first,middle)有序且均小于[middle,last)直接对后面元素使用堆上浮，这样保证了小的元素均在[first,middle)中，然后使用sort_heap?????
&emsp;&ems; 为啥第一步不用线性时间选择，第二步不用快排？

# sort
&emsp;&emsp; 大一就听说了这个的大名，现在来学习学习

## Median_of_three
&emsp;&emsp;__median(a,b,c) 返回中间那个值
## Partitionining
&emsp;&emsp; 这个大家都会写，就是按照枢轴，把小的放左边，大的放到右边
## threshold
&emsp;&emsp; 当只有很少很少的几个元素的时候，插入排序更快。
## final insertion sort
&emsp;&emsp; 我们不必在快速排序中进行插入排序，但是可以提前推出，保证序列基本有序，然后再对整体使用插入排序
## SGI sort 
&emsp;&emsp; 先快速排序到基本有序，然后插入排序
### 快速排序
&emsp;&emsp; 先排序右边，后左边，且将左边当作下一层，当迭代深度恶化的时候，即超过了lg(n)*2的时候，采取堆排序
&emsp;&emsp; 枢轴的选择，首、尾、中间的中位数
## RW sort
&emsp;&emsp; 这个就少了堆排序了，其他的和SGI一样


#  equal_range
&emsp;&emsp; lower_bound和upper_bound的合体
&emsp;&emsp; 比直接lower_bound+upper_bound应该快一些，大概这样，二分中值偏小，做缩左断点，偏大则缩右端点，若二分中值等于value，则对左边lower_bound,对右边upper_bound,然后就能直接返回了

# inplace_merge
&emsp;&emsp; 将两个相邻的有序序列合并为有序序列，他在分析卡空间的做法，再见。。。不缺空间，

#  nth_element
&emsp;&emsp; 线性时间选择，三点中值，递归变迭代，长度很小以后直接插入排序，666666

# mergesort
&emsp;&emsp; 借助inplace_merge直接完成了，

# 总结
&emsp;&emsp; STL的算法还是很厉害的。

