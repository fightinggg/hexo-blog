---
date: 2021-05-06 23:00:10
updated: 2021-05-06 23:00:10
---



# 比赛链接

http://codeforces.com/gym/102832

# A. Krypton

## 题意

充游戏币，首充可以获得优惠，之后充值就没有优惠了，问你x元最多能拿到多少游戏币。
$$
\begin{array}{|c|c|c|} 
\hline 
\text{Price (RMB yuan)} 
& \text{Normal amount (coupons)} 
& \text{First recharge reward (coupons)} 
\\ \hline 1 & 10 & 8 
\\ \hline 6 & 60 & 18 
\\ \hline 28 & 280 & 28 
\\ \hline 88 & 880 & 58 
\\ \hline 198 & 1980 & 128 
\\ \hline 328 & 3280 & 198 
\\ \hline 648 & 6480 & 388 
\\ \hline 
\end{array}
$$


<!-- more -->

## 题解

只考虑首充，这个题目本质上就是一个01背包，考虑其他充值，是一个完全背包。



```c++
#include <bits/stdc++.h>

using namespace std;

typedef long long ll;

ll  f[10][2100];

int  main() {
    ll  n;
    scanf("%lld", &n);
    vector<pair<ll , ll >> packags;
    packags.push_back(make_pair(1, 18));
    packags.push_back(make_pair(6, 78));
    packags.push_back(make_pair(28, 308));
    packags.push_back(make_pair(88, 938));
    packags.push_back(make_pair(198, 2108));
    packags.push_back(make_pair(328, 3478));
    packags.push_back(make_pair(648, 6868));

    for (ll  i = 0; i < packags.size(); ++i) {
        for (ll  j = 0; j <= n; ++j) {
            ll  v = packags[i].first, w = packags[i].second;

            if (j >= v && i >= 1) {
                f[i][j] = max(f[i - 1][j], f[i - 1][j - v] + w);
            } else if (i >= 1) {
                f[i][j] = f[i - 1][j];
            } else {
                f[i][j] = (j >= v) ? w : 0;
            }
        }
    }

    ll  ans = 0;
    for (ll  i = 0; i <= n; ++i) {
        ans = max(ans, f[6][i] + (n - i) * 10);
    }
    printf("%lld\n", ans);
}

```



# D. Meaningless Sequence

## 题意

$$
a_n = \begin{cases} 1, & n = 0 \\ c \cdot \max\limits_{0 \leq i < n} a_{n \operatorname{\&} i}, & \text{otherwise} \end{cases},
$$



你要计算
$$
\left( \sum\limits_{i=0}^n a_i \right) \bmod (10^9+7)
$$


## 题解

$a_i$与数字i的二进制表示法中有多少个1有关，如果有k个，则为c的k次方，直接数位dp即可。

http://codeforces.com/gym/102832/submission/115385503
```c++    
#include <bits/stdc++.h>

using namespace std;

typedef long long ll;

char s[3010];
const int mod = 1e9 + 7;

int qpow(int a, int b) {
    int res = 1;
    while (b) {
        if (b & 1) {
            res = 1ll * res * a % mod;
        }
        a = 1ll * a * a % mod;
        b >>= 1;
    }
    return res;
}

int dp[2][3010][3010];
bool vis[2][3010][3010];

int count(int cur, int n, int limit, int oneCount, int zeroCount) {
    if (vis[limit][oneCount][zeroCount]) {
        return dp[limit][oneCount][zeroCount];
    }

    int ans = 0;

    if (cur == n) {
        return 1;
    }


    // add 0
    if (zeroCount != 0) {
        ans = (ans + count(cur + 1, n, limit && s[cur] == '0', oneCount, zeroCount - 1)) % mod;
    }

    // add 1
    if (oneCount != 0) {
        if (!limit || s[cur] != '0') {
            ans = (ans + count(cur + 1, n, limit && s[cur] == '1', oneCount - 1, zeroCount)) % mod;
        }
    }

    vis[limit][oneCount][zeroCount] = true;
    return dp[limit][oneCount][zeroCount] = ans;
}

int main() {
    int c;
    scanf("%s %d", s, &c);
    int n = strlen(s);
    int ans = 0;
    for (int i = 0; i <= n; i++) {
        int cnt = count(0, n, true, i, n - i);
        ans = (ans + 1ll * cnt * qpow(c, i)) % mod;
    }
    printf("%d\n", ans);
}

```



# F. Strange Memory

## 题意

给你一颗点带权的树，你要计算,其中$\oplus$表示异或
$$
\sum\limits_{i=1}^n\sum\limits_{j=i+1}^n [a_i \oplus a_j = a_{\operatorname{lca}(i, j)}] (i \oplus j).
$$


## 题解

暴力枚举lca，如果解决了一些子树的子问题，那么合并到父节点的时候，只需要枚举不同子树里面有多少个数满足点权异或和等于父节点值。

很明显这里是三个变量，但是当枚举lca时，父节点值为定值，所以实际上只有两个变量，由于异或构成群，于是可以枚举一个变量，寻找另一个变量，很自然想到了枚举小的子树，在大的子树中寻找，这实际上就是树上启发式合并。

http://codeforces.com/gym/102832/submission/115392207

```c++
#include <bits/stdc++.h>

using namespace std;

typedef long long ll;

const ll maxn = 1e5 + 100;

ll a[maxn], sz[maxn];
vector<ll> g[maxn];


struct Node {
    vector<ll> bit0, bit1;
    vector<ll> lazy;

    Node() : bit0(17), bit1(17) {}

    ll query(ll x) {
        for (ll tmp:lazy) {
            lazyInsert(tmp);
        }
        lazy.clear();
        ll res = 0;
        for (ll i = 0; i < 17; ++i) {
            if ((1 << i) & x) {
                res += bit0[i];
            } else {
                res += bit1[i];
            }
        }
        return res;
    }

    void insert(ll x) {
        lazy.push_back(x);
    }

    void lazyInsert(ll x) {
        for (ll i = 0; i < 17; ++i) {
            if ((1 << i) & x) {
                bit1[i] += (1 << i);
            } else {
                bit0[i] += (1 << i);
            }
        }
    }
};

struct DS {
    vector<pair<ll, ll >> kv;
    ll ans = 0;

    unordered_map<ll, Node> ma;

    ll query(ll k, ll v) {
        auto tmp = ma.find(v);
        return tmp == ma.end() ? 0 : tmp->second.query(k);
    }

    void insert(ll k, ll v) {
        kv.push_back({k, v});
        ma[v].insert(k);
    }
};

void dfs(ll u, ll f) {
    sz[u] = 1;
    for (auto v : g[u]) {
        if (v == f) {
            continue;
        }
        dfs(v, u);
        sz[u] += sz[v];
    }
}

void dfs2(ll u, ll f, DS &ds) {
    ll mxv = 0;
    for (auto v : g[u]) {
        if (v == f) {
            continue;
        }
        if (sz[v] > sz[mxv]) {
            mxv = v;
        }
    }

    if (mxv != 0) {
        dfs2(mxv, u, ds);
        ll ans = ds.ans;

        for (auto v : g[u]) {
            if (v == f || v == mxv) {
                continue;
            }
            DS tem;
            dfs2(v, u, tem);
            ans += tem.ans;

            for (auto x : tem.kv) {
                ans += ds.query(x.first, x.second ^ a[u]);
            }

            for (auto x: tem.kv) {
                ds.insert(x.first, x.second);
            }
        }

        ds.ans = ans;
    }

    ds.insert(u, a[u]);
}

int main() {
//    cout << bitset<32>(1e5) << endl;
    ll n;
    scanf("%lld", &n);
    for (ll i = 1; i <= n; ++i) {
        scanf("%lld", &a[i]);
    }
    for (ll i = 1; i <= n - 1; ++i) {
        ll u, v;
        scanf("%lld %lld", &u, &v);
        g[u].push_back(v);
        g[v].push_back(u);
    }
    dfs(1, 0);
    DS ds;
    dfs2(1, 0, ds);
    printf("%lld\n", ds.ans);
}

```

# K. Ragdoll

## 题意

给你一个森林，每个点有一个权，有三个操作，

- 增加一个单个节点的树
- 合并两颗树
- 修改一颗树的某个节点的权

每次操作以后你要输出有多少对节点在同一棵树且$gcd(i,j)=i\oplus j$

## 题解



预处理出所有$gcd(i,j)=i\oplus j$的数对，然后启发式合并。














