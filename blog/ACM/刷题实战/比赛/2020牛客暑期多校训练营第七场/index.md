---
date: 2021-05-07 23:00:00
updated: 2021-05-07 23:00:00
---



# 比赛链接

https://ac.nowcoder.com/acm/contest/16151?&headNav=www



# D. Fake News

## 题意

输入一个数$n$，问你$\begin{aligned}\sum_{i=1}^n i^2\end{aligned}$ 是不是一个完全平方数。

## 数据范围

$10^6$组输入

$n\lt 10^{15}$

## 题解

前缀和为$\frac{n\cdot(n+1)\cdot(2n+1)}{6}$, 由于$n$，$n+1$，$2n+1$两两互质，所以他们排除掉$2$和$3$这两个因子以后是完全平方数。直接验证这个就可以了。





# H. Dividing

## 题意

- (1,k)合法
- 如果(n,k)合法，则(n+k,k)合法
- 如果(n,k)合法，则(nk,k)合法

输入$N$,$K$, 问你有多少组$1\le n\le N,1\le k\le K$合法。

## 题解

显然每个$k$都是独立的。

考虑n的k进制，很容易发现第一句话说的是$1$合法，第二句话说的是合法的数加上$10$合法，第三句话说的是合法的数左移一位合法。

所以很容易发现，只要最低位为0或者1，就是合法的。

然后就是一个分块的模版题了。计算$\begin{aligned}\sum_{i=1}^K \sum_{j=1}^N [j\mod i\le 1]\end{aligned}$

```c++
#include <bits/stdc++.h>

using namespace std;

#define ll long long
const int mod = 1e9 + 7;

// [0,n] sum n/i
ll cal(ll k, ll n) {
    ll ans = 0, pos;
    // i=1, min(n,k)
    for (ll i = 1; i <= min(n, k); i = pos + 1) {
        pos = n / (n / i);
        pos = min(pos, min(n , k));
        //doing something
        ans += (pos - (i - 1)) * (n / i);
        ans %= mod;
    }
    // i=min(n,k)+1 , k
    return ans;
}

ll cal2(ll k, ll n) {
    if(k == 1) {
        return 0;
    }
    ll ans = 0, pos;

    for (ll i = 2; i <= min(n - 1, k); i = pos + 1) {
        pos = (n - 1) / ((n - 1) / i);
        pos = min(pos, min(n - 1, k));
        //doing something
        ans += (pos - (i - 1)) * ((n - 1) / i);
        ans %= mod;
    }
    ans += k-1;
    return ans % mod;
}

int main() {
    ll n, k;
    scanf("%lld %lld", &n, &k);
   // cout << cal(k, n) << " " << cal2(k, n) << endl;
    ll ans = (cal(k, n) + cal2(k, n));
    printf("%lld", ans % mod);
}


```





# B. Mask Allocation

## 题意

给你$n\times m$个口罩，你可以对口罩进行分组，要求分组后可以在不拆开组的情况下，分配给n个医院。每个医院m个口罩，也可以分配给m个医院，每个医院n个口罩。

## 数据范围

$100$组输入

$1\le n,m \le 10^4$

## 题解

不妨考虑$n<m$, 那么我们直接分出n个n，那么后面剩余$n\times m-n\times n$个口罩，要求可以分成$m-n$个n，以及n个$m-n$，注意到出现了子问题。所以递归解决。










