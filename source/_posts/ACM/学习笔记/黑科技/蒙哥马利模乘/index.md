---
date: 2018-10-15 09:37:26
updated: 2021-05-02 00:42:00
---



# 核心思想

蒙哥马利运算是一种新的运算，他把乘模简化为对进制数的除法，以及简单加法，这就使得乘模避开了大量的取模试除。

# 蒙哥马利表示法

例如$a%mod$的蒙哥马利表示法为$f(a) = a\times p\% mod$，$p$是一个进制数， 我们储存$f(a)$的值，而不是a的值。

# 复原

于是我们很容易发现，对于蒙哥马利表示法变回普通表示法时只需要乘p对mod的逆元即可。

# p的取值

蒙哥马利表示法会找一个进制数使得普通数字转化为蒙哥马利表示法，一般来说这是一个刚好大于模数的进制数。

<!-- more -->

# 乘法

如果我们要计算$a\cdot b\%mod$

在蒙哥马利表示法中，$f(a\cdot b)$并不是简单的$f(a)\cdot f(b)$, 实际上应该是$\frac{f(a)\cdot f(b)}{p}$

于是这里出现了除法，我们就是靠着这个除以p，避开了对非进制数取模，由于p是一个2进制幂，所以可以依靠移位，借此避开了很多高复杂度的除法。

由拓展欧几里得算法我们可以找到这样一个数字$x$，使得在模$p$时$x\cdot mod \equiv 1$，找到这样的数字以后，我们可以让分子增加一个mod的倍数，很明显这不会影响结果。令 $t=x\cdot f(a)\cdot f(b)\mod p$ , 则有

$\frac{f(a)\cdot f(b)}{p}\%mod=\frac{f(a)\cdot f(b)- t\cdot mod }{p}\%mod$

不难证明在模$p$的时候$f(a)\cdot f(b)\equiv t\cdot mod $, 于是我们直接使用移位来计算$\frac{f(a)\cdot f(b)- t\cdot mod }{p}$。 至于取模不取模已经无所谓了，至少在数量级上已经同阶了。

最后给出dls的代码

```c++
typedef long long ll; 
typedef unsigned long long u64; 
typedef __int128_t i128; 
typedef __uint128_t u128; 

struct Mod64 { 
    static u64 mod,inv,r2; 
    u64 n_; 
    Mod64():n_(0) {} 
    Mod64(u64 n):n_(init(n)) {} 
    static u64 init(u64 w) { return reduce(u128(w) * r2); } 
    static void set_mod(u64 m) { 
        mod=m; //assert(mod&1); 
        inv=m; for(int i=0;i<5;i++) inv*=2-inv*m; 
        r2=-u128(m)%m; 
    } 
    static u64 reduce(u128 x) { 
        u64 y=u64(x>>64)-u64((u128(u64(x)*inv)*mod)>>64); 
        return ll(y)<0?y+mod:y; 
    } 
    Mod64& operator += (Mod64 rhs) { n_+=rhs.n_-mod; if (ll(n_)<0) n_+=mod; return *this; } 
    Mod64 operator + (Mod64 rhs) const { return Mod64(*this)+=rhs; } 
    Mod64& operator -= (Mod64 rhs) { n_-=rhs.n_; if (ll(n_)<0) n_+=mod; return *this; } 
    Mod64 operator - (Mod64 rhs) const { return Mod64(*this)-=rhs; } 
    Mod64& operator *= (Mod64 rhs) { n_=reduce(u128(n_)*rhs.n_); return *this; } 
    Mod64 operator * (Mod64 rhs) const { return Mod64(*this)*=rhs; } 
    u64 get() const { return reduce(n_); } 
}; 
u64 Mod64::mod,Mod64::inv,Mod64::r2;
```
