---
title: c++基础笔记3 - const修饰返回值
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
abbrlink: f6ac3788
date: 2020-03-13 15:58:31
---

# const 修饰返回值
&emsp;&emsp; 如果有必要，尽量使用const修饰返回值
```cpp
#include <iostream>
using namespace std;

const int sum(int a, int b) { return a + b; }

int main() { return 0; }
```

# 有什么好处？
&emsp;&emsp; 如果你不小心把==写成了=，下面的代码会报错。当然也有肯定是好处多余坏处
```cpp
#include <iostream>
using namespace std;

const int sum(int a, int b) { return a + b; }

int main() {
  if (sum(1, 2) = 3) {
    printf("hello world!");
  }
}
```
