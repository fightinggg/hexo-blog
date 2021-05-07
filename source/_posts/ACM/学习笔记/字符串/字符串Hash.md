---
date: 2018-10-15 13:01:42
updated: 2018-10-15 13:01:42
mathjax: true
---



就像cantor映射一样，字符串hash采取一种更加随机化的映射，它的通项公式为$hash[i]=\sum _{j=0}^{i}s[j]*p^{i-j}$,如此将一个字符串随机映射到了一个数字上，

我们来看这个公式的意义，他把一个字符串映射到了一个p进制数字上，位数代表着字符串的长度，然后我们将这个p进制数转化为十进制数并对1e9+7取模来存储，通项公式不好求，但是我们可以通过递推公式来求

$hash[i]=hash[i-1]\cdot p+s[i]$

这个公式就比较友好了，另外对于任意区间，我们有这个公式

$hash[l~r] = hash[r] - hash[l - 1] \cdot pow(p, r - l + 1)$



```c++
struct str_hash {//单hash
    static const int maxn = 3e5 + 5, p = 47, mod = 1e9 + 7;
    static int pw[maxn], pr[maxn];
    int h1[maxn], h2[maxn], len;

    str_hash() {
        if (pw[0] == 1) return;
        pw[0] = pr[0] = 1;
        int rev = qpow(p, mod - 2, mod);
        for (int i = 1; i < maxn; i++) {
            pw[i] = 1ll * pw[i - 1] * p % mod;
            pr[i] = 1ll * pr[i - 1] * rev % mod;
        }
    }

    void extend(char c) {
        len++;
        h1[len] = (1ll * h1[len - 1] * p + c) % mod;
        h2[len] = (h2[len - 1] + 1ll * c * pw[len - 1]) % mod;
    }

    void ini() { len = 0; }

    int query(int l, int r) { return (h1[r] + 1ll * h1[l - 1] * (mod - pw[r - l + 1])) % mod; }//注意没有下标检查
    int qurev(int l, int r) { return 1ll * (h2[r] - h2[l - 1] + mod) * pr[l - 1] % mod; }//注意没有下标检查
};

int str_hash::pw[maxn], str_hash::pr[maxn];


//双hash，双倍常数，1e6 的数据 nlgn的做法 1s的时限 不建议使用
typedef unsigned long long ull;

struct double_hash {
    static const ull maxn = 1e3 + 666, p = 26, mod1 = 1e9 + 7, mod2 = 1e9 + 9;
    static ull pw1[maxn], pw2[maxn];
    ull hash1[maxn], hash2[maxn], len;

    double_hash() {
        if (pw1[0] == 1)return;
        pw1[0] = pw2[0] = 1;
        for (ull i = 1; i < maxn; i++) {
            pw1[i] = pw1[i - 1] * p % mod1;
            pw2[i] = pw2[i - 1] * p % mod2;
        }
    }

    void build(char *s, ull _len) {
        len = _len;
        for (ull i = 1; i <= len; i++) {
            hash1[i] = (hash1[i - 1] * p + s[i] - 'a') % mod1;//无边界
            hash2[i] = (hash2[i - 1] * p + s[i] - 'a') % mod2;//same
        }
    }

    ull query1(ull l, ull r) { return (hash1[r] - hash1[l - 1] * pw1[r - l + 1] % mod1 + mod1) % mod1; }

    ull query2(ull l, ull r) { return (hash2[r] - hash2[l - 1] * pw2[r - l + 1] % mod2 + mod2) % mod2; }

    ull query(ull l, ull r) { return query1(l, r) * mod2 + query2(l, r); }//注意没有下标检查
} hash_a, hash_b;

ull double_hash::pw1[maxn], double_hash::pw2[maxn];
```



[http://codeforces.com/contest/727/problem/E ](http://codeforces.com/contest/727/problem/E)

给你一个长度为n×k的环，环上每一个位置有一个字符。现在给你g个长度为k的字符串，问是否可以在g个字符串中选出n个构成这个环。
 `  1 ≤ n ≤ 10^5, 1 ≤ k ≤ 10^5, n*k ≤ 10^6, n ≤ g ≤ 10^5, g*k ≤ 2*10^6`

枚举起点,hash.