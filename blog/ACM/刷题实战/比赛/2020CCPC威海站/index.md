---
date: 2021-05-04 23:00:00
updated: 2021-05-04 23:00:00
---



# 比赛链接

http://codeforces.com/gym/102798

# A. Golden Spirit

有一个桥，桥两边都有n个老人，你桥的一边，你可以花时间x把一个老人带到对面，然后你可以接着把那边的老人带回来，你也可以原地等待，所有老人移动一次以后需要休息t分钟，问你至少花费多少时间，能让所有老人都互相跑到对面，然后又回到原本的位置。

```c++
#include<bits/stdc++.h>
using namespace std;

#define ll long long
int main(){
    int T; scanf("%d", &T);
    while(T--) {
        ll n, x, t; scanf("%lld %lld %lld", &n, &x, &t);
        ll y1 = max(x + 2 * t - 2 * n * t, 0ll);
        ll y2 = max(x - 2 * n * t, 0ll);
        ll ans1 = y1 + 4 * n * t, ans2 = y2 + (4 * n + 1) * t;
        printf("%lld\n", min(ans1, ans2));
    }
}

```



<!-- more -->

# D. ABC Conjecture

## 题意

定义$rad(a)$为$a$的素因子的积, 给你一个c，你要计算是否存在两个数$a$和$b$，使得$a+b=c$且$rad(abc)<c$

## 数据范围

$1<c<10^{18}$

## 题解

打表发现唯一分解中，指数的最大值不为1时一定可以分解。

```c++
#include<bits/stdc++.h>
#include<iostream>
#include<cmath>
#include<cstring>
#include<algorithm>
#include<cstdio>
#include<stdlib.h>
#include<time.h>
#pragma warning(disable:4996)
#define times 20
using namespace std;
#define ll long long
map<ll, ll> mp;

ll total;
ll factor[110];

ll qmul(ll a, ll b, ll M) {
    a %= M;
    b %= M;
    ll ans = 0;
    while (b) {
        if (b & 1) {
            ans = (ans + a) % M;
        }
        a = (a <<= 1) % M;
        b >>= 1;
    }
    return ans % M;
}///快乘，因为两个longlong的数相乘可能会溢出，所以这里转乘法为加法，思想和快速幂相似
ll qpow(ll a, ll b, ll int M) {
    ll ans = 1;
    ll k = a;
    while (b) {
        if (b & 1)ans = qmul(ans, k, M) % M;
        k = qmul(k, k, M) % M;
        b >>= 1;
    }
    return ans % M;
}

bool witness(ll a, ll n, ll x, ll sum) {
    ll judge = qpow(a, x, n);
    if (judge == n - 1 || judge == 1)return 1;
    while (sum--) {
        judge = qmul(judge, judge, n);
        if (judge == n - 1)return 1;
    }
    return 0;
}

bool miller(ll n) { ///判断素数
    if (n < 2)return 0;
    if (n == 2)return 1;
    if ((n & 1) == 0)return 0;
    ll x = n - 1;
    ll sum = 0;
    while (x % 2 == 0) {
        x >>= 1;
        sum++;
    }
    for (ll i = 1; i <= times; i++) {
        ll a = rand() % (n - 1) + 1;
        if (!witness(a, n, x, sum))return 0; ///费马小定理的随机数检验
    }
    return 1;
}

ll gcd(ll a, ll b) {
    return b == 0 ? a : gcd(b, a % b);
}

ll pollard(ll n, ll c) {
    ll x, y, d, i = 1, k = 2;
    x = rand() % n;
    y = x;
    while (1) {
        i++;
        x = (qmul(x, x, n) + c) % n; ///不断调整x
        d = gcd(y - x, n);
        if (d < 0)d = -d;
        if (d > 1 && d < n)return d; ///找到因子
        if (y == x)return n; ///找到循环，返回n，重新来
        if (i == k) { ///一个优化
            y = x;
            k <<= 1;
        }
    }
}

void find(ll n) {
    if (miller(n)) {
        factor[++total] = n;
        mp[n]++;
        return;
    }
    ll p = n;
    while (p >= n) p = pollard(p, rand() % (n - 1) + 1);
    find(n / p);
    find(p);
}

int main() {
    int t;
    scanf("%d", &t);
    while (t--) {
        total = 0;
        ll n;
        scanf("%lld", &n);
        if (n == 1) {
            puts("no");
            continue;
        }
        mp.clear();
        find(n);
        int flag = 0;
        for (auto& tem : mp) {
            if (tem.second >= 2) {
                flag = 1;
                break;
            }
        }
        printf("%s\n", (flag == 1 ? "yes" : "no"));
    }
}

```



# H. Message Bomb

## 题意

有多个聊天室，三个操作

- 学生x加入聊天室y
- 学生x离开聊天室y
- 学生x在聊天室y发布一条消息，这个聊天室的所有其他人会收到一条消息。

最后只有一次询问，问每个学生各自收到了多少条消息



## 数据范围

$10^5个聊天室$

$2\times10^5个学生$

$10^6次操作$

## 题解

维护一个懒标记，即聊天室中的同学收到了多少条消息，当同学离开聊天室的时候，把这个懒标记发放给这个学生。

```c++
#include<bits/stdc++.h>
using namespace std;

#define ll long long
const int maxn = 1e5 + 100;
const int maxm = 2e5 + 100;

set<int>group[maxn];
int lazy[maxn];
ll ans[maxm];
int main(){
    int n, m, s; scanf("%d %d %d", &n, &m, &s);
    for(int i = 1; i <= s; ++i) {
        int t, x, y; scanf("%d %d %d", &t, &x, &y);
        if(t == 1) {
            group[y].insert(x);
            ans[x] -= lazy[y];
        } else if(t == 2) {
            group[y].erase(group[y].find(x));
            ans[x] += lazy[y];
        } else if(t == 3) {
            lazy[y] += 1;
            ans[x] -= 1;
        }
    }
    for(int i = 1; i <= n; ++i) {
        if(group[i].size() == 0) {
            continue;
        }
        for(auto x : group[i]) {
            ans[x] += lazy[i];
        }
    }
    for(int i = 1; i <= m; ++i) {
        printf("%lld\n", ans[i]);
    }
}

```





# L. Clock Master

## 题意

你要找一个长度为k的正整数序列a，你要最大化整个序列所有元素的lcm，输出这个lcm对自然对数的对数函数值$ln(lcm)$

## 题解

显然序列a中两两互质是最优解。所有我们直接考虑只取素数。

然后就成了容量为2，3，5，7，11，13，17...价值为ln2,ln3,ln5,ln7,ln11,ln13,ln17的01背包问题。

```c++
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;

ll lcm(ll x, ll y) {
    return x / __gcd(x, y) * y;
}

ll dfs(int maxValue, int result) {
    if (maxValue + 1 > result) {
        return 1;
    }
    ll ans = 1;
    for (int i = maxValue + 1; i <= result; i++) {
        ans = max(ans, lcm(dfs(i, result - i), i));
    }
    return ans;
}

void showfactor(int x) {
    int s = sqrt(x);
    for(int i = 2; i <= s; ++i) {
        while(x % i == 0) {
            cout << i << " ";
            x /= i;
        }
    }
    cout << x << endl;
}


const int maxn = 30000;
double f[maxn + 100];
vector<int> prime;
vector<pair<ll, double>> item[maxn + 100];

void ini() {
    for (int i = 2; i <= maxn; ++i) {
        int s = sqrt(i);
        bool ok = true;
        for (int j = 2; j <= s; ++j) {
            if (i % j == 0) {
                ok = false;
                break;
            }
        }
        if (ok) {
            prime.push_back(i);
        }
    }

    for (auto x : prime) {
        for (ll i = x; i <= maxn; i = i * x) {
            ll c = i;
            double w = log(i);
            item[x].push_back(make_pair(c, w));
        }
    }

    int n = prime.size();

    for (int k = 0; k < n; ++k) {
        for (int v = maxn; v >= 0; --v) {
            for (int i = 0; i < item[prime[k]].size(); ++i) {
                ll c = item[prime[k]][i].first;
                double w = item[prime[k]][i].second;
                if (v >= c) {
                    f[v] = max(f[v], f[v - c] + w);
                }
            }
        }
    }
}


int main() {
//
//    for (int i = 1; i <= 100; i++) {
//        int ans = dfs(0, i );
//        cout << log(ans) << "\n";
//    }

    ini();
    int t;
    scanf("%d", &t);
    for (int i = 1; i <= t; ++i) {
        int b;
        scanf("%d", &b);
        printf("%.10lf\n", f[b]);
//        printf("%.10lf\n",pow(2.718281828, f[b]));
//        printf("%.10lf\n", log(dfs(0, b)));
//        cout << dfs(0, b) << "\n";
//        showfactor(dfs(0, b));
//        showfactor(1021020);
    }
}

```



# C. Rencontre

## 题意

给你一颗树，边带权，有三个人，这三个人都有自己的候选点集，他们等概率的出现在自己的候选点集上，三个人想要走到同一个点，问你三个人走的路的和的最少期望是多少。

## 题解

三个点abc汇聚到一起的最小答案是$\frac{ab+bc+ac}{2}$, 然后就是换根dp。








