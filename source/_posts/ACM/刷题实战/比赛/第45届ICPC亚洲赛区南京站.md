---
date: 2021-04-24 14:21:00
updated: 2021-04-24 14:21:00
mathjax: true
---



# F Fireworks

## 链接

https://ac.nowcoder.com/acm/contest/10272/F

## 题意

你想要放一个的烟花，你可以花费时间n来制作一个烟花，花费时间m点燃所有的烟花，烟花被点燃以后就释放了，但是他只有$\frac{p}{10^4}$的概率完美释放，你想完美释放至少一个烟花，那么需要的最少时间的期望是多少？

T组输入

<!-- more -->

## 数据范围

$T<10^4, n<10^9, m<10^9, p<10^4$

## 题解

假设准备了k个烟花，然后释放，这个期望值是$\frac{kn+m}{1-(1-\frac{p}{10^4})^k}$ , 这个应该只有一个极值点，也就是最小值，队友用三分过了，当然这个不好证明，其实直接使用模拟退火就可以了。下面提供了三分和模拟退火的算法。

## 代码



```c++
#include <iostream>
#include <cmath>
#include <algorithm>

using namespace std;
#define ll long long

const double eps = 1e-9;

double cal(double mid, double pp, ll n, ll m) {
    return (n * mid + m) / (1.0 - pow(pp, mid));
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        ll n, m, p;
        scanf("%lld%lld%lld", &n, &m, &p);
        double pp = 1.0 - 1.0 * p / 10000.0;

        double t = 1e18, alpha = 0.95, x = 1.0, y = cal(x, pp, n, m), step = 0.8;
        while (t > 1) {
            double x_1 = x + t;
            double x_2 = max(1.0, x - t);
            double y_1 = cal(x_1, pp, n, m);
            double y_2 = cal(x_2, pp, n, m);
            double minx = x_2, miny = y_2;
            if (y_1 < y_2) {
                minx = x_1;
                miny = y_1;
            }
            if (y > miny) {
                x = x + step * (minx - x);
                y = cal(x, pp, n, m);
            }
            t *= alpha;
        }
        double ans = 1e308;
        for (ll i = max(1ll, (ll) x - 100); i <= x + 100; ++i) {
            ans = min(ans, cal(i, pp, n, m));
        }
        printf("%.10lf\n", ans);
    }
}
```



```c++
#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <bitset>
#include <cmath>
#include <algorithm>

using namespace std;
#define ll long long

const double eps = 1e-9;

double cal(double mid, double pp, ll n, ll m) {
    return (n * mid + m) / (1.0 - pow(pp, mid));
}

int main() {
    int t; cin >> t;
    while(t--) {
        int n, m, p;
        scanf("%d%d%d", &n, &m, &p);
        double pp = 1.0 - 1.0 * p / 10000.0;
        ll l = 1, r = 1e18;
        while(l + 2 < r) {
            ll lmid = l + (r - l) / 3;
            ll rmid = l + (r - l) / 3 * 2;
            if(cal(lmid, pp, n, m) >= cal(rmid, pp, n, m)) {
                l = lmid;
            } else if(cal(lmid, pp, n, m) < cal(rmid, pp, n, m)) {
                r = rmid;
            }
        }
        vector<double>v;
        for(ll i = l; i <= r; ++i) {
            v.push_back(cal(i, pp, n, m));
        }
        v.push_back(cal(1, pp, n, m));
        sort(v.begin(), v.end());
        printf("%.10lf\n", v[0]);
    }
}
```



# J Just Another Game of Stones

## 链接

https://ac.nowcoder.com/acm/contest/10272/J

## 题意

给一个长度为n的序列

操作1: 选择一段区间，把小于等于m的值变为m

操作2: 把这段区间的值取出来，放入一个列表中，向列表中加入一个值m，对列表进行nim博弈，问先手如果赢，他第一步的策略有多少种。

## 数据范围

$n<2e5,3S, 262MB$



## 题解

根据博弈论把第二个操作转化为：

问这段区间中有多少个数，他的二进制中第k位是1.

直接按位建立线段树，然后使用吉司机线段树来维护



## 代码

```c++
#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <bitset>
#include <cmath>
#include <algorithm>

using namespace std;

#define lson (u<<1)
#define rson (lson|1)
#define lmid ((l+r)>>1)
#define rmid (lmid+1)

int qu = 0;
int up = 0;

const int maxn = 2e5 + 100;
int a[maxn];
int mn1[maxn << 2], mn2[maxn << 2];
int lzy[maxn << 2], bit[maxn << 2][32];
int cnt[maxn << 2], xrr[maxn << 2];

void pushup(int u, int l, int r) {

    map<int, int> ma;
    ma[mn1[lson]] += cnt[lson];
    ma[mn1[rson]] += cnt[rson];

    if (lmid - l + 1 != cnt[lson]) {
        ma[mn2[lson]]++;
    }
    if (r - rmid + 1 != cnt[rson]) {
        ma[mn2[rson]]++;
    }

    if (ma.size() > 1) {
        mn2[u] = (++ma.begin())->first;
    }
    cnt[u] = ma.begin()->second;

    for (int i = 0; i < 31; ++i) {
        bit[u][i] = bit[lson][i] + bit[rson][i];
    }

    mn1[u] = min(mn1[lson], mn1[rson]);
    xrr[u] = xrr[lson] ^ xrr[rson];
}

void build(int u, int l, int r) {
    if (l == r) {
        xrr[u] = mn1[u] = mn2[u] = a[l];
        lzy[u] = 0;
        cnt[u] = 1;
        for (int i = 0; i < 31; ++i) {
            bit[u][i] = ((1 << i) & a[l]) >> i;
        }
        return;
    }
    build(lson, l, lmid);
    build(rson, rmid, r);
    lzy[u] = 0;
    pushup(u, l, r);
}


void pushSon(int son, int l, int r, int value) {
    if (mn1[son] < value) {
        for (int i = 0; i < 31; ++i) {
            bit[son][i] -= (((1 << i) & mn1[son]) >> i) * cnt[son];
            bit[son][i] += (((1 << i) & value) >> i) * cnt[son];
        }
        lzy[son] = max(lzy[son], value);
        if (cnt[son] & 1) {
            xrr[son] ^= mn1[son];
            xrr[son] ^= value;
        }
        mn1[son] = value;
    }
}

void pushdown(int u, int l, int r) {
    pushSon(lson, l, lmid, lzy[u]);
    pushSon(rson, rmid, r, lzy[u]);
}

void modify(int u, int l, int r, int ql, int qr, int mx) {
    up++;
    if (ql <= l && r <= qr) {
        if (r - l + 1 == cnt[u] || mx < mn2[u]) {
            pushSon(u, l, r, mx);
            return;
        }
    }
    pushdown(u, l, r);
    if (ql <= lmid) {
        modify(lson, l, lmid, ql, qr, mx);
    }
    if (qr > lmid) {
        modify(rson, rmid, r, ql, qr, mx);
    }
    pushup(u, l, r);
}


int query(int u, int l, int r, int ql, int qr, int bt) {
    qu++;
    if (ql <= l && r <= qr) {
        return bit[u][bt];
    }
    int res = 0;
    pushdown(u, l, r);
    if (ql <= lmid) {
        res += query(lson, l, lmid, ql, qr, bt);
    }
    if (qr > lmid) {
        res += query(rson, rmid, r, ql, qr, bt);
    }
    return res;
}

int query_xr(int u, int l, int r, int ql, int qr) {
    qu++;
    if (ql <= l && r <= qr) {
        return xrr[u];
    }
    int res = 0;
    pushdown(u, l, r);
    if (ql <= lmid) {
        res ^= (query_xr(lson, l, lmid, ql, qr));
    }
    if (qr > lmid) {
        res ^= (query_xr(rson, rmid, r, ql, qr));
    }
    return res;
}


int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    int n, q;
    cin >> n >> q;
    for (int i = 1; i <= n; ++i) {
        cin >> a[i];
    }
    build(1, 1, n);
    for (int i = 1; i <= q; ++i) {
        int op, l, r, x;
        cin >> op >> l >> r >> x;
        if (op == 1) {
            modify(1, 1, n, l, r, x);

        } else {
            int value = query_xr(1, 1, n, l, r) ^x;
            if (value == 0) {
                cout << "0\n";
                continue;
            }
            int bt = 30;
            while (1) {
                if ((1 << bt) & value) {
                    break;
                }
                --bt;
            }
            int add = 0;
            if ((value ^ x) < x) {
                add = 1;
            }
            cout << query(1, 1, n, l, r, bt) + add << "\n";
        }
    }
}

```









