---
date: 2019-05-27 14:45:58
updated: 2021-05-07 22:30:00
---



# 公式


$$
g(1)\sum_{i=1}^nf(i)=\sum_{i=1}^{n}(f*g)(i)-\sum_{d=2}^{n}g(d) \sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}f(i)
$$


# 使用

很多时候我们会碰到求积性函数前缀和的情况，由于积性函数的前缀和不一定依然是积性函数，所以我们需要使用一些技巧。

比如给你一个积性函数$f(x)$, 现在要求你计算$\begin{aligned}\sum_{i=1}^n f(x)\end{aligned}$。

<!-- more -->

如果有机会，我们需要根据自己的经验，选择一个合适的积性函数$g(x)$,然后与积性函数$f(x)$进行狄利克雷卷积运算。即$\begin{aligned}(f*g)(n)=\sum_{d|n}f(d)\cdot g(\frac{n}{d})\end{aligned}$

对其计算前缀和
$$
\begin{aligned}
&\sum_{i=1}^n(f*g)(i)
\\&=\sum_{i=1}^n\sum_{d|i}f(\frac{i}{d})\cdot g(d)
\\&=\sum_{d=1}^n\sum_{d|i}f(\frac{i}{d})\cdot g(d)
\\&=\sum_{d=1}^n g(d) \sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}f(i)
\\&=g(1)\sum_{i=1}^n f(x)+\sum_{d=2}^n g(d) \sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}f(i)
\end{aligned}
$$


稍作变形
$$
g(1)\sum_{i=1}^nf(i)=\sum_{i=1}^{n}(f*g)(i)-\sum_{d=2}^{n}g(d) \sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}f(i)
$$


我们发现右边等式的第一项为前缀和，这里要求我们可以快速计算$f*g$的前缀和

对于第二项，我们可以使用分块的整除方案，这里要求$g$的前缀和可以快速计算。

```c++
/*
常见数论函数
e(n)=[n=1]
1(n)=1
id(n)=n
d(n)=sum{1} (1<=i<=n&&i|n)
SIG(n)=sum{i} (1<=i<=n&&i|n)

常见关系
e=u*1
d=1*1
SIG=id*1
id=phi*1

杜教筛
g(1->i->n)*f(1->n/i) = (g*f)(1->n)
g(1)*f(1->n) = (g*f)(1->n) - g(2->i->n)*f(1->n/i)

phi*I = id
I(1)*phi(1->n) = (I*phi)(1->n) - I(2->i->n)*phi(1->n/i)
phi(1->n) = id(1->n) - phi(1->n/i)
phi(1->n) = n*(n+1)/2 - phi(1->n/i), (2<=i<=n)g
*/

//杜教筛求 phi(n) 前缀和
ll sum_phi(ll n){// 2e9 is ok
    static map<ll,ll> mp;
    if(n<maxn) return PHI[n];
    ll ret=mp[n];
    if(ret!=0) return ret;
    ret=n*(n+1)/2;
    for(ll i=2,ed;i<=n;i=ed+1){
        ed=n/(n/i);
        ret-=(ed-i+1)*sum_phi(n/i);
    }
    if(n>maxn) mp[n]=ret;
    return ret;
}
```
