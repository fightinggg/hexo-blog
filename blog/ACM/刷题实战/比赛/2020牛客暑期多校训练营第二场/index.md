---
date: 2021-04-27 23:48:49
updated: 2021-05-04 23:48:49
---

# 比赛链接

https://ac.nowcoder.com/acm/contest/15688?&headNav=www



# A All with Pairs

## 题意

给你字符串n个字符串$s_1$，$s_2$，$s_3$，... $s_n$给你函数$f(s,t)$，其值为最大的长度w，使得s的长度为w的前缀和t的长度为w的后缀相同完全。

你要计算
$$
\sum_{i=1}^{n}\sum_{i=1}^{n}f(s_i,s_j)^2 \mod 998244353
$$

## 数据范围

$n<10^5$, 字符串总长度小于$10^6$



<!-- more -->

## 题解

我们枚举i，把前i个字符串对每一个后缀都hash，然后放入map，最后枚举$s_i$的前缀，在map中寻找此前缀的hash，然后即可对$f(s_i,s_j)$实现计数，最后把增加到值添加到答案中。复杂度$O(len\cdot\log(len))$。len为字符串总长。





# B Boundary

## 题意

给你二维平面到n个点，你要找一个经过原点的圆，穿过尽可能多的点。

## 数据范围

最多2000个点。

## 题解

三个点可以确定一个圆，由于有一个点在原点，所以我们枚举另外两个点。则可以唯一确定圆，对圆进行hash，然后计数，计数最多的那个就是答案。

```c++
#include<bits/stdc++.h>
using namespace std;
#define ll long long
const double inf = 1e18;
const double eps = (1e-6);
struct point {
    ll x, y;
};
struct circle {
    double a, b;
    circle(double a, double b) :a(a), b(b) {};
    circle() {};
};
double getFrac(point a, point b, ll isA) {
    ll z1 = a.x * a.x + a.y * a.y;
    ll z2 = b.x * b.x + b.y * b.y;

    ll u1 = 2 * a.x;
    ll v1 = 2 * a.y;

    ll u2 = 2 * b.x;
    ll v2 = 2 * b.y;

    double fenzi, fenmu;
    if (isA) {
        fenzi = z1 * v2 - z2 * v1;
        fenmu = u1 * v2 - u2 * v1;
    }
    else {
        fenzi = z1 * u2 - z2 * u1;
        fenmu = v1 * u2 - v2 * u1;
    }
    if (fenmu == 0)return inf;
    return fenzi * 1.0 / fenmu;
}

int  n;
const int  maxn = 2500;
point points[maxn];
vector<circle>vec;
bool eql(circle c1, circle c2) {
    if (fabs(c1.a - c2.a) <= eps && fabs(c1.b - c2.b) <= eps)return true;
    return false;
}
int main() {
    cin >> n;
    for (ll i = 1; i <= n; i++) {
        ll x, y;
        cin >> x >> y;
        points[i].x = x;
        points[i].y = y;
    }
    for (ll i = 1; i <= n; i++) {
        for (ll j = i + 1; j <= n; j++) {
            circle c(getFrac(points[i], points[j], 1), getFrac(points[i], points[j], 0));
            if (c.a == inf || c.b == inf)continue;
            vec.push_back(c);
        }
    }
    if (vec.size() == 0) {
        cout << 1 << endl;
        return 0;
    }
    sort(vec.begin(), vec.end(), [](circle c1, circle c2) {
        return c1.a == c2.a ? c1.b < c2.b : c1.a < c2.a;
        });
    int ans = 2;
    int l = 0, r = 0;
    while (r < vec.size()) {
        if (eql(vec[l], vec[r])) {
            r++;
        }
        else {
            ans = max(ans, r - l + 1);
            l = r;
        }
    }
    ans = max(ans, r - l + 1);
    ans = (1 + sqrt(1 + 8 * ans)) / 2;
    cout << ans << endl;
}
```



# C Cover the Tree

## 题意

给你一个无根树，你需要使用最少的链使得这棵树的每条边至少被一条链覆盖。

## 数据范围

$节点个数n<2\times 10^5$

## 题解

贪心，我们让每条链的端点都选择度数为1的结点。

我们使用一个度数为1的结点当作根，把树展开为平面结构，树根在上，叶子在下，显然我们直接让最左边的叶子连接最右边的叶子即可，最后有两种情况，

剩余一个结点，我们直接让他和根结点相连。

不剩余任何结点，但是最后连接的两个结点形成的链只能覆盖到lca，所以我们让根与那个lca相连即可。

```c++
#include <bits/stdc++.h>

using namespace std;

int read() {
    static bool init = false;
    if (!init) {
        ios::sync_with_stdio(false);
        cin.tie(0);
        init = true;
    }
    int x;
    cin >> x;
    return x;
}

const int maxn = 2e5 + 5;
vector<int> tree[maxn];
int fa[maxn];

int lca(int u, int v) {
    set<int> se;
    while (fa[u] != 0) {
        se.insert(u);
        u = fa[u];
    }
    se.insert(u);

    while (se.find(v) == se.end()) {
        v = fa[v];
    }
    return v;
}

int main() {
    int n = read();

    for (int i = 0; i < n - 1; i++) {
        int u = read();
        int v = read();
        tree[u].push_back(v);
        tree[v].push_back(u);
    }
    queue<int> q;
    vector<bool> inq(n + 1);

    int root = -1;
    for (int i = 1; i <= n; i++) {
        if (tree[i].size() == 1) {
            root = i;
            q.push(i);
            inq[i] = true;
            break;
        }
    }
    fa[root] = 0;

    vector<int> ans;
    while (!q.empty()) {
        int u = q.front();
        q.pop();


        if (tree[u].size() == 1 && u != root) {
            ans.push_back(u);
        }
        for (int v:tree[u]) {
            if (inq[v]) {
                continue;
            }
            inq[v] = true;
            fa[v] = u;
            q.push(v);
        }
    }

    int size = ans.size();
    cout << size / 2 + 1 << "\n";

    int i = 0, j = size - 1;
    while (i < j) {
        cout << ans[i] << " " << ans[j] << "\n";
        i++;
        j--;
    }

    if (i == j) {
        cout << ans[i] << " " << root << "\n";
    } else {
        cout << lca(ans[i], ans[j]) << " " << root << "\n";
    }
}
```













# E Exclusive OR

## 题意

给你长度为n的序列a，对于1到n的每一个数字i，你都要计算这个序列精确选择i个数字能异或出来的最大异或和。

ps : 数字可以重复选择。

## 数据范围

$a_i<2^{18}$

## 题解

不难证明当n大于36以后，都是异或最大值。对于小于36的情况，使用fwt快速计算即可。

证明: 

对于18位的二进制数，其线性基的个数最多是18，所以18个数及以内一定能能够异或出最大的值，这个值是上确届，不妨设x个数能达到这个上届，其中$x\le18$

然后考虑$x+2k$, $k\ge0$显然他们都能达到，我只需要选两个相同的数字即可。

然后考虑$x+2k+1$, $k\ge0$, 其实这里并不一定能达到上届，我们需要更多的分析。考虑这样一个事实，当你选择了$x+2k+1\gt18$的时候，我们一定可以找到更少的数，使得他他们异或和与当前$x+2k+1$个数相等。我们不妨设$f[i]$为精确$i$个数能异或出的最大值，显然$f[i]$可以由$f[j]$转移过来，其中ij之差不会超过18。然后考虑$f[j]$由$f[k]$转移过来，jk只差不会超过18，这里我们可以确定，

如果ij差、jk差都为偶数或者都为奇数，则可以规约于$f[i]由f[k]$转移过来，ik为偶数。

如果ij差、jk差都为一奇一偶，则jk中有且仅有一个数与i之差为偶数，不妨设她为t，则$f[i]$可以有$f[t]$转移过来，it之差为偶数。

综上，当i大于36的时候,$f[i]$可以由$f[i-2]$转移。所以我们fwt暴力计算到36即可。



```c++
#include<bits/stdc++.h>

using namespace std;

//求卷积a[]=>fwt(n,0)=>fwt[]=>fwt(n,1)=>a[]
//fwt(x$y)=fwt(x)*fwt(y);$代表|，&，^
void fwt(int *a, int n, int f) {
    for (int k = 1; k < n; k <<= 1)
        for (int i = 0; i < n; i += (k << 1))
            for (int j = 0; j < k; j++)
                if (f == 1) {
                    int x = a[i + j], y = a[i + j + k];
                    //&:a[i+j]+=a[i+j+k];
                    //|:a[i+j+k]+=a[i+j];
                    a[i + j] = x + y;
                    a[i + j + k] = x - y;
                } else {
                    int x = a[i + j], y = a[i + j + k];
                    //&:a[i+j]-=a[i+j+k];
                    //|:a[i+j+k]-=a[i+j];
                    a[i + j] = (x + y) / 2;
                    a[i + j + k] = (x - y) / 2;
                }
}

const int maxn = 3e5 + 100;
int a[maxn], b[maxn], mx[maxn];

int main() {
    ios::sync_with_stdio(false); cin.tie(0);
    int n;
    cin >> n;
    for (int i = 1; i <= n; ++i) {
        int x; cin >> x; a[x] = 1;
        mx[1] = max(mx[1], x);
    }
    fwt(a, 1 << 18, 1);
    for (int i = 0; i < (1 << 18); ++i) {
        b[i] = a[i];
    }
    for (int i = 2; i <= 36; ++i) {
        for (int j = 0; j < (1 << 18); ++j) {
            b[j] = a[j] * b[j];
        }
        fwt(b, 1 << 18, 0); // c = a^i

        for (int j = 0; j < (1 << 18); ++j) {
            if (b[j]) {
                b[j] = 1;
                mx[i] = j;
            }
        }
        fwt(b, 1 << 18, 1);
    }

    for(int i = 37; i <= n; ++i) {
        mx[i] = mx[i - 2];
    }
    for(int i = 1; i <= n; ++i) {
        cout << mx[i] << " ";
    }
    cout << "\n";
}
```



# G Greater and Greater

## 题意

给你一个长度为n的序列A，和一个长度为m的序列B，你要计算A有多少个子串S，满足$\forall i \in [1,m] S_i\gt B_i$

## 数据范围

$n<1.5\times10^5$

$m<4\times10^4$

## 题解

设$01$矩阵$G[i][j]$代表$A[i]\gt B[j]$是否成立。

则我们要计算的其实是G中有多少个斜着的直线，其值全是1。

换句话说，你要计算$bitAnd_{i=0}^{m-1} (G[i]<<i)$, $G[i]$代表矩阵G的第i行所代表的二进制数。

我们同时发现列与列是独立的，所以我们可以对A进行排序，然后对于$G[i]$，显然他是一个左边为0，右边为1的01串，这里我们可以对每一行使用bitset暴力更新，

我们发现行与行是独立的。所以可以分别计算每一行，然后暴力移位使用and运算。

空间复杂度$O(\frac{N}{64}+\frac{M}{64})$

时间复杂度$O(\frac{M\cdot N}{64})$



# H Happy Triangle

## 题意

多重集合，支持三个操作，

- 插入一个数x

- 删除一个数x
- 询问能否在集合中找两个数，和x一起作为边长，能构成三角形。

## 题解

考虑查询

如果x为最大值，查询他的两个前驱即可。

如果x为中间值，一个前驱加一个后继即可。

如果x为最小值，找到相邻两个数，让他们对差最小即可。

前两个用map，后以后用平衡数。

为了避免map的边界，可以在前后加入哨兵，讨论的时候删除哨兵即可。





## J Just Shuffle

## 题意

给你一个置换P，给你一个数字k，你要计算$P^\frac{1}{k}$

## 题解

```c++
#include <bits/stdc++.h>

using namespace std;

const int N = 1e5 + 5;

typedef vector<int> vi;
typedef vector<vector<int>> vvi;


/**
 *
 *  置换模版
 *  置换下标从0开始，n代表置换的长度，一般不提供循环乘积的运算
 *
 */

/**
 *
 *
 *
 *
 */
void show(string s, int *a, int l, int r) {
    cout << s;
    for (int i = l; i <= r; i++) {
        cout << a[i] << " ";
    }
    cout << endl;
}

// 置换单位元， n是置换的长度
void get_one(int *a, int n) {
    for (int i = 0; i < n; ++i) {
        a[i] = i;
    }
}

// 拷贝置换
void cpy(int *src, int *dst, int n) {
    for (int i = 0; i < n; i++) {
        dst[i] = src[i];
    }
}

// 置换标准化， c=(_b^a)
void normal(int *a, int *b, int *c, int n) {
    vector<int> res(n);
    for (int i = 0; i < n; i++) {
        res[a[i]] = b[i];
    }
    cpy(res.data(), c, n);
}

// 置换乘法 c=a*b
void mul(int *a, int *b, int *c, int n) {
    vector<int> res(n);
    for (int i = 0; i < n; ++i) {
        res[i] = b[a[i]];
    }
    cpy(res.data(), c, n);
}

// 分解置换为循环乘积
vvi decomposition(int *a, int n) {
    vector<bool> vis(n);
    vvi res;
    for (int i = 0; i < n; ++i) {
        vector<int> tem;
        if (vis[a[i]]) {
            continue;
        }
        int now = i;
        while (!vis[a[now]]) {
            vis[a[now]] = true;
            tem.push_back(a[now]);
            now = a[now];
        }

        res.push_back(tem);
    }
    return res;
}

// 合并循环乘积为置换
void composition(vvi &a, int *b, int n) {
    vector<int> res(n + 1);
    for (auto &x:a) {
        for (int i = 0; i < x.size(); i++) {
            res[x[i]] = x[(i + 1) % x.size()];
        }
    }
    cpy(res.data(), b, n);
}

// 分解转换为一个循环乘积, 保证只能分出一个
// a->b
void decomposition(int *a, int *b, int n) {
    cpy(decomposition(a, n).front().data(), b, n);
}

// 合并一个循环乘积为置换
void composition(int *a, int *b, int n) {
    vector<int> res(n);
    for (int i = 0; i < n; i++) {
        res[a[i]] = a[(i + 1) % n];
    }
    cpy(res.data(), b, n);
}


// 置换快速幂 b=a^k
void qpow(int *a, int n, int k, int *b) {
    vvi tem = decomposition(a, n);
    for (auto &x:tem) {
        for (int i = 0; i < x.size(); i++) {
            b[x[i]] = x[(i + k) % x.size()];
        }
    }
}


void inv(int *a, int *b, int n) {
    vector<int> res(n);
    for (int i = 0; i < n; i++) {
        res[a[i]] = i;
    }
    cpy(res.data(), b, n);
}

// 置换开方 b = a^{1/n}
bool sqrt(int *a, int *b, int n, int k) {
    vector<int> base(n), basepow(n);
    vvi fac = decomposition(a, n);
    for (vi &faci:fac) {
        int size = faci.size();
        if (__gcd(k, size) != 1) {
            // 这个算法找不到解，但是解应该是存在的
            return false;
        }
        for (int i = 0; i < size; i++) {
            base[i] = (i + 1) % size;
        }
        qpow(base.data(), size, k, basepow.data());

        // 把base 和 powbase 转化为置换
        //decomposition(base.data(), base.data(), size);
        decomposition(basepow.data(), basepow.data(), size);

        // 我们关注 powbase -> base ， 即 t \circ powbase = base
        // 即 t = base*powbase^{-1} = powbase^{-1}
        inv(basepow.data(), basepow.data(), size);

        mul(basepow.data(), faci.data(), faci.data(), size);
    }
    composition(fac, b, n);
    return true;
}


// get kth
struct bit {
    int x2;
    vi d;

    bit(int mx) {
        x2 = 1;
        while (x2 < mx) x2 <<= 1;
        d = vi(x2 + 1);
    }

    void add(int i, int x = 1) {
        for (i++; i <= x2; i += i & -i) d[i] += x;
    }

    int kth(int k) {
        if (k > d[x2]) return -1;
        int i = x2 >> 1, p = 0;
        while (i) {
            if (d[p + i] < k) p += i, k -= d[p];
            i >>= 1;
        }
        return p;
    }
};

// a[1...n]
void getCircle(int *a, int n, int k) {
    static bit b(N);
    for (int i = 1; i <= n; i++) {
        b.add(i, 1);
    }
    for (int i = 1, rk = 1; i <= n; i++) {
        int mod = n - i + 1;
        int add = (k - 1 + mod) % mod;

        rk = (rk + add - 1) % mod + 1;
        a[i] = b.kth(rk);
        b.add(a[i], -1);
    }
}


int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
        a[i]--;
    }


    bool ans = sqrt(a.data(), a.data(), n, k);
    if (!ans) {
        exit(-1);
    }

    for (int i = 0; i < n; i++) {
        cout << a[i] + 1 << " ";
    }
    cout << endl;

//    qpow(a.data(), n, k, a.data());
//
//    for (int i = 0; i < n; i++) {
//        cout << a[i] + 1 << " ";
//    }
//    cout << endl;
}
```










