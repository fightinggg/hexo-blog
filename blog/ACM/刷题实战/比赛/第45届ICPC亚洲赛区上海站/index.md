---
date: 2021-04-25 23:14:00
updated: 2021-05-04 23:14:00
---



# 前言

这几天训练的太频繁了，一天一场比赛，简直不要太👹。从四月25号到5月3号9天开了7场。

# 比赛地址

https://ac.nowcoder.com/acm/contest/9925



<!-- more -->

# B Mine Sweeper II

## 题意

扫雷，给你一个n\*m的矩阵，没有炸弹的地方会有数字，其值为周围的炸弹的个数。

给你两个矩阵，第一个为A，第二个为B，你需要对矩阵A做一些改变，修改最多一半的格子（即把炸弹变成没有炸弹或者把没有炸弹变成有炸弹），使得矩阵A修改后，没有炸弹的格子的数值之和与矩阵B相等。

## 数据范围

$n\cdot m<10^6$

## 题解

考虑矩阵$B$，以及他的翻转$B_2$（炸弹变为非炸弹，非炸弹变为炸弹）

他们中没有炸弹的格子的数值之和是相等的，证明过程也很简单。

然后我们考虑,把A变为其中一个，显然如果变为$B$需要修改超过一半的格子，则变为$B_2$需要修改的格子数量少于一半。







# C Sum of Log

## 题意

输入$x$和$y$,你要计算
$$
\sum_{i=0}^{x}\sum_{j=0}^{y}[i\&j=0]\lfloor \log_2(i+j)+1\rfloor
$$


## 数据范围

$x<10^9, y<10^9$

## 题解

考虑到$\log_2(x)$只和x的二进制最高位的1的位置有关，另外由于$i$和$j$的与为0，所以现在变成了只与ij中最高的二进制位的位置有关，所以可以直接数位dp，考虑`dp(u,limitx,limity)`代表考虑第u位，以及此时xy是否有限制，其值为方案的计数，

然后进行第二次dp，枚举最高位1的位置，然后使用前一次dp的值乘以最高位1的位置来计算答案。

## 代码

```c++
#include <iostream>
#include <cmath>
#include <algorithm>
#include <vector>
 
using namespace std;
typedef long long ll;
 
 
ll dp[50][2][2];
 
 
void predp() {
    for (ll i = 0; i < 40; ++i) {
        for (ll j = 0; j < 2; ++j) {
            for (ll k = 0; k < 2; ++k) {
                dp[i][j][k] = -1;
            }
        }
    }
}
 
// 对方案计数
ll dfs(ll u, bool limitx, bool limity, ll x, ll y) {
    if (dp[u][limitx][limity] != -1) {
        return dp[u][limitx][limity];
    }
 
    ll res = 0;
 
    if (u == 1) {
        ll upx = limitx ? x : 1;
        ll upy = limity ? y : 1;
        for (ll i = 0; i <= upx; i++) {
            for (ll j = 0; j <= upy; j++) {
                if (!(i == 1 && j == 1)) {
                    res++;
                }
            }
        }
 
    } else {
        ll high = 1 << (u - 1); // 1000000 1在第u位
        ll mask = high | (high - 1);
 
        ll nextMask = mask >> 1;
 
        // x=0, y=0
        res += dfs(u - 1, limitx && x < nextMask, limity && y < nextMask, x & nextMask, y & nextMask);
 
        // x=0, y=1
        if (!limity || y >= high) {
            res += dfs(u - 1, limitx && x < nextMask, limity, x & nextMask, y & nextMask);
        }
        // x=1, y=0
        if (!limitx || x >= high) {
            res += dfs(u - 1, limitx, limity && y < nextMask, x & nextMask, y & nextMask);
        }
    }
 
    dp[u][limitx][limity] = res;
    return res;
}
 
ll getAns(ll u, bool limitx, bool limity, ll x, ll y) {
    if (u == 1) {
        ll count = dfs(u, limitx, limity, x, y) - 1;
//        prllf("1*%d\n", count);
        return count;
    }
 
    ll res = 0;
 
    ll high = 1 << (u - 1); // 1000000 1在第u位
    ll mask = high | (high - 1);
 
    ll nextMask = mask >> 1;
 
    // x=0 y=0
    res += getAns(u - 1, limitx && x < nextMask, limity && y < nextMask, x & nextMask, y & nextMask);
 
    // x=0, y=1
    if (!limity || y >= high) {
        ll count = dfs(u - 1, limitx && x < nextMask, limity, x & nextMask, y & nextMask);
//        prllf("%d*%d\n", u, count);
        res += u * count;
    }
    // x=1, y=0
    if (!limitx || x >= high) {
        ll count = dfs(u - 1, limitx, limity && y < nextMask, x & nextMask, y & nextMask);
//        prllf("%d*%d\n", u, count);
        res += u * count;
    }
 
    return res;
 
}
 
 
ll solve(ll x, ll y) {
    predp();
    return getAns(30, true, true, x, y);
}
 
int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    ll t;
    cin >> t;
    while (t--) {
        ll x, y;
        cin >> x >> y;
        predp();
        cout << solve(x, y) % (int(1e9 + 7)) << "\n";
    }
}
```





# D Walker

## 题意

有两个人在x轴上，第一个人在位置$p_1$,他可以以速度$v_1$行走，第二个人在位置$p_2$，可以以速度$v_2$行走，他们可以向左或者向右，任何时刻都可以调头，问最少经过多久，使得区间[0,n]中任意一个点都被至少一个人走过。

## 数据范围

10000组输入

## 题解

### 错误思路

考虑每个人向左或者向右，一共四个情况，

两人都向左，到达0后向右，

两人都向右，到达n后向左，

左边人向左，到达0后向右，右边人向右，到达0后向左，然后是一个相遇问题

左边人向右，右边人向左。

错误原因： 左边人向右走一点点，然后掉头向左直到0，右边人向右走到n，然后向左走。

### 正确思路

二分答案，同时考虑0和n位置被哪个人碰到了，一共四个情况，先拿0来说，假设左边的人在时间t以内到了0，那么他应该尽量贪心的往右边蹭蹭。这里有两个策略：

- 先向左走，摸到0，然后向右蹭

- 先向右蹭一点点，然后转向，在时刻t前到达位置0.

对于其他情况同理。

## 代码

```c++
#include <iostream>
#include <cmath>
#include <algorithm>
#include <vector>

using namespace std;
#define ll long long

const double eps = 1e-10;

double left(double p, double s) {
    //printf("l:   %.10lf\n", max(s - p, (s + p) / 2));
    return max(s - p, (s + p) / 2);
}

double right(double p, double s, double n) {
    //printf("r:   %.10f\n", min(2 * n - s - p, (n + p - s) / 2));
    return min(2 * n - s - p, (n + p - s) / 2);
}


bool check(double mid, double n, double p1, double v1, double p2, double v2) {
    double s1 = v1 * mid;
    double s2 = v2 * mid;
    return s1 >= p1 && s2 >= n - p2 && left(p1, s1) > right(p2, s2, n);
}


int main() {
    //ios::sync_with_stdio(false); cin.tie(0);
    int t;
    cin >> t;
    while (t--) {
        double n, p1, v1, p2, v2; //cin >> n >> p1 >> v1 >> p2 >> v2;
        scanf("%lf%lf%lf%lf%lf", &n, &p1, &v1, &p2, &v2);
        if (p1 > p2) {
            swap(p1, p2);
            swap(v1, v2);
        }
        double l = 0, r = 1e9;
        for (int i = 0; i <= 100; ++i) {
            double mid = (l + r) / 2;
            if (check(mid, n, p1, v1, p2, v2)) {
                r = mid;
            } else {
                l = mid;
            }
        }

        l = min({
                        l,
                        (n + p1) / v1,
                        (2 * n - p1) / v1,
                        (n + p2) / v2,
                        (2 * n - p2) / v2,
                        max((n - p1) / v1, p2 / v2)

        });
        printf("%.10lf\n", l);
    }
}
```



# H Rice Arrangement

## 题意

圆桌上有n个餐位，从1到n顺时针编号，其中有k个餐位上有盘子，圆桌外围n个椅子，k个人坐在椅子上，告诉你盘子的位置，人的位置，你可以顺时针或逆时针转动圆桌，每次转动会让盘子顺时针或逆时针移动一个单位，当一个盘子转到一个人的前，这个人可以选择把盘子拿下来，问你最少转动多少次，使得每个人都能拿到盘子。

## 数据范围

$k<1000$

## 题解

如果第i个人拿了第j个盘子，那么第i-1个人拿的一定是第j-1个盘子。枚举第一个人拿了哪个盘子即可



# I Sky Garden

## 题意

有n个同心圆。圆的半径分别是1到n，有m条直线，经过圆心，每个圆都被分割成m等分。这个过程中形成了一些交点，定义一个点到另一个点到距离为在同心圆或在直线上行走所需要的最短距离，你需要计算交点中点任意两点的距离之和。



## 题解

一层一层考虑，从内层到外层进行dp，每次新增的值等于外层点到内层所有其他点到距离之和，另一方面，两个点之间到距离，可以证明要么只走直线，要么只走圆弧。



## 题解

```c++
#include <iostream>
#include <cmath>
#include <algorithm>
#include <vector>

using namespace std;
#define ll long long


const double pi = acos(-1.0);

double dp[510];

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    int n, m;
    cin >> n >> m;
    double ans = 0;
    dp[1] = 1;
    ans += 2 * m * dp[1];
    for (int j = 2; j <= 2 * m; ++j) {
        double tmp = min(2.0, pi / m * 1 * min(j - 1, 2 * m + 1 - j));
        dp[1] += tmp;
        ans += m * tmp;
    }

    for (int i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + (i - 1) * (2 * m) + 1;
        ans += 2 * m * dp[i];
        for (int j = 2; j <= 2 * m; ++j) {
            double tmp = min(2.0 * i, pi / m * i * min(j - 1, 2 * m + 1 - j));
            dp[i] += tmp;
            ans += m * tmp;
        }
    }

    if(m == 1) {
        ans -= n * (n + 1);
    }
    printf("%.10f\n", ans);
}
```












