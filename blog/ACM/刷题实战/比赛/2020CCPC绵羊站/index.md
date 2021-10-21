---
date: 2021-05-03 23:00:00
updated: 2021-05-03 23:00:00
---

# 比赛链接

http://codeforces.com/gym/102822

# D. Defuse the Bombs

## 题意

有一些炸弹，给你一个数组$a$，他们$a_i$秒后会爆炸，你是一个拆弹专家，你可以在炸弹爆炸前，让其爆炸时间延长一秒，问你最多能坚持多少秒



## 题解

二分答案，直接算是错误的，只能二分。



# G. Game of Cards

## 题意

有四个卡片，他们的数值分别是0，1，2，3，两个人轮流操作，操作是可以选择两张和小于等于3的卡片，将他们合并成一张新的卡片，卡片的值是和。谁不能操作谁就输了。

## 题解

考虑3的数量为0的情况，手推sg函数有循环节，

紧接着考虑三维sg函数，上程序打表发现三维也有循环节。



# J. Joy of Handcraft

## 题意

n个灯泡，每个灯泡都是周期性发光和熄灭,在时间$2kt_i+1$到时间$2kt_i+t_i$发光，在时间$2kt_i+t_i+1$到时间$2kt_i+2t_i$熄灭，发光强度为$x_i$。

为你从时刻1到时刻m，最亮的灯泡有多亮。

## 数据范围

$n,m<10^5$

$1 \le t_i,x_i \le 10^5$

## 题解

预处理每个周期最亮的灯泡是哪一个，然后会得到最多m个周期，对所有周期暴力取出发光区间，根据调和级数的和可以得出，最多$mlogm$个区间，最后离线合并处理。



# K. Knowledge is Power

## 题意

输入一个数$n$，问你能不能把它分成至少两个大于等于2的整数，其中两两互质且和为n。

## 题解

分类讨论就可以了，按照模4剩余的情况分，注意最大答案为4

```c++
#include <bits/stdc++.h>

using namespace std;
#define ll long long


int main() {
    int t; scanf("%d", &t);
    for(int tt = 1; tt <= t; ++tt){
        int x; scanf("%d", &x);
        printf("Case #%d: ", tt);
        if(x == 6) {
            printf("-1\n");
            continue;
        }
        if(x & 1) {
            printf("1\n");
        } else {
            if(x % 4 == 0) {
                printf("2\n");
            } else {
               if((x - 3) % 3 == 0) {
                   int y = (x - 3) / 3;
                   if(__gcd(y, y + 2) == 1) {
                       printf("2\n");
                       continue;
                   }
               } else if((x - 4) % 3 == 0) {
                    int y = (x - 4) / 3;
                    if(__gcd(y, y + 1) == 1 && __gcd(y, y + 3) == 1 && __gcd(y + 1, y + 3) == 1) {
                        printf("3\n");
                        continue;
                    }
                } else if((x - 5) % 3 == 0) {
                    int y = (x - 5) / 3;
                    if(__gcd(y, y + 2) == 1 && __gcd(y, y + 3) == 1 && __gcd(y + 2, y + 3) == 1) {
                        printf("3\n");
                        continue;
                    }
                }
                printf("4\n");
            }
        }
    }
}

```







# L. Lottery

## 题意

给你一些物品，每个物品的容量为$2^{a_i}$, 个数为$b_i$, 你可以随意选择，最后计算容量，问你能选出多少总容量（背包计数）

## 题解

首先考虑二进制分组，最后每个二进制数最多两个，接着考虑连续的二进制数，使用组合数学的乘法原理进行合并。

```c++
#include <bits/stdc++.h>

using namespace std;
#define ll long long

const ll mod = 1e9 + 7;

const int base = 1 << 16;
static ll pw2[base], basepw2[base];

void init() {
    pw2[0] = 1;
    for (int i = 1; i < base; i++) {
        pw2[i] = 2ll * pw2[i - 1] % mod;
    }

    const int pw2base = pw2[base - 1] * 2ll % mod; // = 2^base
    basepw2[0] = 1; // base[i] = pow(2,base)^i
    for (int i = 1; i < base; i++) {
        basepw2[i] = 1ll * pw2base * basepw2[i - 1] % mod;
    }
}

int qpow2(int index) {
    const int page = index >> 16;
    const int offset = index & 0xffff;
    return 1ll * basepw2[page] * pw2[offset] % mod; // (2^base)^page * 2 ^ offset = 2^(base*page+offset) = 2^index
}


int main() {
    int T;
    init();
    scanf("%d", &T);
    for (int cas = 1; cas <= T; ++cas) {
        int n;
        scanf("%d", &n);

        unordered_map<int, ll> ma;
        for (int i = 1; i <= n; ++i) {
            int a, x;
            scanf("%d %d", &a, &x);
            ma[a] += x;
            int l = a;
            while (ma.find(l) != ma.end() && ma[l] > 2) {
                ma[l + 1] += (ma[l] - 1) / 2;
                ma[l] = ((ma[l] & 1) ? 1 : 2);
                ++l;
            }
        }

        vector<int> a, b;
        for (auto item : ma) {
            a.push_back(item.first);
            if (item.second > 1) {
                b.push_back(item.first);
            }
        }

        sort(a.begin(), a.end());
        sort(b.begin(), b.end());
        int l = 0, r = 0, lb = 0;
        ll ans = 1;
        for (int i = 1; i < a.size() + 1; ++i) {
            if (i < a.size() && a[i] == a[r] + 1) {
                r = i;
            } else {
                ll sum = 1;
                for (int j = l; j <= r; ++j) {
                    sum += qpow2(a[j] - a[l]);
                    sum %= mod;
                }
                while(lb < b.size() && b[lb] <= a[r]) {
                    sum += qpow2(b[lb] - a[l]);
                    sum %= mod;
                    ++lb;
                }
                ans *= sum; ans %= mod;
                l = r = i;
            }
        }
        printf("Case #%d: %lld\n", cas, ans);
    }
}

```




