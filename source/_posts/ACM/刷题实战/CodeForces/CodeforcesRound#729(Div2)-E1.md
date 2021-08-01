---
date: 2021-07-16 14:20:19
updated: 2021-07-16 14:20:19
---



# 题目大意： 

你需要计算有多少对满足长度为n的排列$p$和$q$，满足$p$字典序>$q$ 且 $inv(p)<inv(q)$，答案取模

 $inv$ 为逆序对个数

# 做法：

设$f(i,j)$为长度为$i$、逆序对个数为$j$的排列的个数 , 考虑第一个数字为$t$

$f(i,j) = \sum_{t \in [1,i]} f(i-1,j-t+1)$

一个填$u$，另一个填$v$ $u<v$



$$
\begin{aligned}
ans[i] \\&= i * ans[i-1] + \sum_{1<=u<v<=i, x+u>y+v} f(i-1,x)\cdot f(i-1,y)
 	\\&= i * ans[i-1] + \sum_{x-y>v-u, 1<=u<v<=i} f(i-1,x)\cdot f(i-1,y)
    \\&= i * ans[i-1] + \sum_{x-y>d, 1<=d<i} (i-d)*f(i-1,x)\cdot f(i-1,y)
    \\&= i * ans[i-1] + \sum_{x,y} f(i-1,x)\cdot f(i-1,y) \cdot \sum_{x-y>d, 1<=d<i} (i-d)
\end{aligned}
$$

<!-- more -->






```c++
#include<iostream>

using namespace std;

/**
 * 题目大意： 
 * http://codeforces.com/contest/1542/problem/E1
 * 你需要计算有多少对满足长度为n的排列p和q，满足p字典序>q 且 inv(p)<inv(q)，答案取模
 * inv 为逆序对个数
 * 
 * 做法：
 * 设f(i,j)为长度为i、逆序对个数为j的排列的个数 , 考虑第一个数字为t
 * f(i,j) = sum_{t \in [1,i]} f(i-1,j-t+1)
 *
 * 一个填u，另一个填v u<v
 * ans[i] = i * ans[i-1] + sum_{1<=u<v<=i, x+u>y+v} f(i-1,x)*f(i-1,y)
 *        = i * ans[i-1] + sum_{x-y>v-u, 1<=u<v<=i} f(i-1,x)*f(i-1,y)
 *        = i * ans[i-1] + sum_{x-y>d, 1<=d<i} (i-d)*f(i-1,x)*f(i-1,y)
 *        = i * ans[i-1] + sum_{x,y} f(i-1,x)*f(i-1,y) *  sum_{x-y>d, 1<=d<i} (i-d)
 *
 * 4 403458273
 * 17
 */
const int maxn = 50 + 5;
int f[maxn][maxn * maxn];


int main() {
    int n, mod;
    cin >> n >> mod;

    // O(n^4)
    f[1][0] = 1;
    for (int i = 2; i <= n; i++) {
        for (int j = 0; j <= n * n; j++) {
            f[i][j] = 0;
            for (int t = 1; t <= i; t++) {
                f[i][j] = (f[i][j] + f[i - 1][j - t + 1]) % mod;
            }
        }
    }

    // O(n^5)
    int ans = 0;
    for (int i = 1; i <= n; i++) {
        int add = 0;
        int upi = (0 + i - 1) * i / 2;
        for (int x = 0; x <= upi; x++) {
            for (int y = 0; y < x; y++) {
                int tmp = min(i - 1, x - y - 1);
                int sd = (i - 1 + i - tmp) * tmp / 2;
//                printf("x=%d y=%d %d\n", x, y, sd);
                add = (add + 1ll * sd * f[i - 1][x] % mod * f[i - 1][y]) % mod;
            }
        }
//        cout << "i=" << i << " add=" << add << endl;
        ans = (1ll * i * ans + add) % mod;
    }
    cout << ans << endl;


    for (int i = 1; i <= n; i++) {
        for (int j = 0; j <= n * n; j++) {
//            printf("%d%c", f[i][j], j == n * n ? '\n' : ' ');
        }
    }

}

/**
*
 *
 * 123 0
 * 132 1
 * 213 1
 * 231 2
 * 312 2
 * 321 3
 *
 *
*/

```











