---
title: c++基础笔记20 - type2type
mathjax: true
categories:
  - c++笔记
  - c++基础笔记
tags:
  - c++笔记
  - c++基础笔记
keywords:
  - c++笔记
  - c++基础笔记
abbrlink: 598b4f42
date: 2020-03-15 23:22:06
---

# type2type
&emsp;&emsp; 这种技术类似与int2type,他用来解决函数不能偏特化的问题，当然现在的编译器似乎已经支持这个功能了。
```cpp
template <class T>
struct type2type {
  typedef T orignal_type;
};
```

&emsp;&emsp; 有了这个代码,我们能模拟出偏特化，甚至函数返回值的重载，而且这个类型不占任何空间。
