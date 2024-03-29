---
date: 2021-05-09 20:38:00
updated: 2021-05-09 20:38:00
---



# 分块

已知某函数$f(x)$对于$x\in[l,r]$，有$f(x)$关于$x$单调，且$f(x)$值域远小于$x$的定义域。

现在要你求$\sum_{x=1}^n g(x,f(x))$

那么我们就可以根据$f(x)$对$g$进行分块，在这一块中，始终有常数$y=f(x)$，然后对$h(x)=g(x,y)$统计$x$的前缀和。

最终我们就能很快的计算答案。



<!-- more -->

# 细节

对于分块，很多时候我们无法直接计算块的范围，需要二分，比如这题 https://nanti.jisuanke.com/t/42386

下面展示详细的二分分块代码：

```c++
int f(ll x) {
    __int128 prod = x;
    int res = 0;
    while (prod * x <= _n) {
        prod *= x;
        res++;
    }
    return res;
}

// 找到最大的x， 使得f(x)==f(l)
ll calcEnd(ll l, ll r) {
    while (l < r) {
        ll mid = (l + r + 1) / 2; // (l,r]
        if (f(l) == f(mid)) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    return l;
}

// O(lgn * lgn * lgn)
int solve(ll n) {
    int ans = 0;
    for (ll l = 2, r; l <= n; l = r + 1) {
        r = calcEnd(l, n);
        int I = f(l);
//        printf("cal: %lld %lld %d \n", l, r, I);
        int add = (sum(n % mod, I, r) - sum(n % mod, I, l - 1) + mod) % mod;
        ans = (ans + add) % mod;
    }
    return ans;
}
```





# 过题代码

```c++
#include <bits/stdc++.h>


using namespace std;
typedef long long ll;

const int maxn = 100;
const int mod = 998244353;

int qpow(int a, int b) {
    int ret = 1;
    while (b) {
        if (b & 1) ret = 1ll * ret * a % mod;
        a = 1ll * a * a % mod;
        b >>= 1;
    }
    return ret;
}

//  拉格朗日插值法
int facinv[maxn] = {1, 1};

void facinv_ini() {
    for (int i = 0, fac = 1; i < maxn; ++i, fac = 1ll * fac * i % mod) {
        facinv[i] = qpow(fac, mod - 2);
    }
}

int lagrange(int *y, int n, int x) {// O(n) n次多项式有n+1项 y[0]...y[n] -> y[x]
    static int prepre[maxn], suf[maxn], *pre = prepre + 1;
    pre[-1] = suf[n + 1] = 1;
    for (int i = 0; i <= n; ++i) pre[i] = 1ll * pre[i - 1] * (x - i + mod) % mod;
    for (int i = n; i >= 0; i--) suf[i] = 1ll * suf[i + 1] * (i - x + mod) % mod;
    int b = 0;
    for (int i = 0; i <= n; ++i) {
        int up = 1ll * pre[i - 1] * suf[i + 1] % mod;
        int down = 1ll * facinv[i] * facinv[n - i] % mod;
        b = (b + 1ll * y[i] * up % mod * down) % mod;
    }
    return b;
}

// O(I)
int sum(int n, int I, ll mx) {
    static int f[100];
    f[0] = 0;
    f[1] = (1ll * (n + 1) * (I + 1) % mod - (I + 1) + mod) % mod;
    for (int x = 2; x <= I + 3; x++) {
        int left = 1ll * (n + 1) * (I + 1) % mod * x % mod;
        int fenzi = (qpow(x, 2) - qpow(x, I + 3) + mod) % mod;
        int fenmu = (1 - x + mod) % mod;
        f[x] = (left - 1ll * fenzi * qpow(fenmu, mod - 2) % mod + mod) % mod;
    }
    for (int x = 1; x <= I + 3; x++) {
        f[x] = (f[x - 1] + f[x]) % mod;
    }
    return lagrange(f, I + 3, mx % mod);
}


ll _n;

int f(ll x) {
    __int128 prod = x;
    int res = 0;
    while (prod * x <= _n) {
        prod *= x;
        res++;
    }
    return res;
}

// 找到最大的x， 使得f(x)==f(l)
ll calcEnd(ll l, ll r) {
    while (l < r) {
        ll mid = (l + r + 1) / 2; // (l,r]
        if (f(l) == f(mid)) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    return l;
}

// O(lgn * lgn * lgn)
int solve(ll n) {
    int ans = 0;
    for (ll l = 2, r; l <= n; l = r + 1) {
        r = calcEnd(l, n);
        int I = f(l);
//        printf("cal: %lld %lld %d \n", l, r, I);
        int add = (sum(n % mod, I, r) - sum(n % mod, I, l - 1) + mod) % mod;
        ans = (ans + add) % mod;
    }
    return ans;
}


int main() {
    facinv_ini();

    ll n;
    while (cin >> n) {
        _n = n;
        for (int i = 0; i < 1e3; i++) {
            solve(n);
        }
        printf("%d\n", solve(n));
    }
}
```


