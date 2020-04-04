---
title: c++快读
categories:
  - 常数优化
  - c++快读
tag:
  - c++快读
mathjax: true
abbrlink: 76e87a63
date: 2019-08-15 20:33:58
---

```cpp
//究极读入挂
inline char nc(){
    static char buf[100000],*p1=buf,*p2=buf;
    return p1==p2&&(p2=(p1=buf)+fread(buf,1,100000,stdin),p1==p2)?EOF:*p1++;
}
inline int read(){
    char ch=nc();int sum=0;
    while(!(ch>='0'&&ch<='9'))ch=nc();
    while(ch>='0'&&ch<='9')sum=sum*10+ch-48,ch=nc();
    return sum;
}
```
