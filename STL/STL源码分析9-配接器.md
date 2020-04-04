---
title: STL源码分析9-配接器
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
abbrlink: 6a7058c7
date: 2020-03-25 22:23:39
---

# 配接器
&emsp;&emsp; 本质上，配接器是一种设计模式，改变仿函数的接口，成为仿函数配接器，改变容器接口，称为容器配接器，改变迭代器接口，称为迭代器配接器

# 容器配接器
&emsp;&emsp; queue和stack就是修饰了deque的配接器

# 迭代器配接器
&emsp;&emsp; 迭代器的配接器有3个，insert itertors,reverse iterators,iostream iterators.
&emsp;&emsp;哇塞这东西有点深，明天再看。
<!---more-->
