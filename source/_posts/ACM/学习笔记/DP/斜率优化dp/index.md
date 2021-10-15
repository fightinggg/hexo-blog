---
date: 2018-10-20 20:37:04
updated: 2018-10-20 20:37:04
---

```c++
// 斜率优化

// 对于dp[i]=max/min(f(j)+g(j)*h(i)+H(i))形式

// 为简化描述我们可以只考虑min情况
// 我们对式子中不同的j作差
// 这里姑且用j与k表示
// 不妨设k>j
// 得到差f(k)-f(j)+h(i)*(g(k)-g(j))

// 如果k优于j那么上式<=0
// f(k)-f(j)+h(i)*(g(k)-g(j))<=0
// 如果g函数满足单调，为了方便 我们假设他单调增
// 则【f(k)-f(j)】/【g(k)-g(j)】<=h(i)
// 斜率找到，就是最大且小于h(i)的一组相邻点的斜率，这时的右端点就是dp转移式所要的东西

// 总而言之，当且仅当转移方程满足dp[i]=max/min(f(j)+g(j)*h(i)+H(i))形式且g函数单调
// 我们就可以斜率优化 

// 重在思维与推导，不在板子，此板子仅供参考
#include<bits/stdc++.h>

using namespace std;
#define ll long long
const int maxn = 5e4;
long long Q[maxn], dp[maxn], s[maxn];

long long f(int j) {
    return dp[j] + (j + s[j]) * (j + s[j]);
}

double Slope(long long j, long long k)   //求斜率
{
    return double(f(k) - f(j)) / (k + s[k] - j - s[j]);
}

int main() {
    ll n, L;
    while (~scanf("%lld%lld", &n, &L)) {
        for (int i = 1; i <= n; i++) {
            int tmp;
            scanf("%d", &tmp);
            s[i] = s[i - 1] + tmp;
        }

        int Left = 1, Right = 1;
        Q[1] = 0;
        dp[0] = 0;
        for (int i = 1; i <= n; i++) {
            while (Left < Right && Slope(Q[Left], Q[Left + 1]) <= 2 * (s[i] + i - L - 1))
                Left++; //维护队首（删除非最优决策）
            int j = Q[Left];
            dp[i] = dp[j] + (i - j - 1 + s[i] - s[j] - L) * (i - j - 1 + s[i] - s[j] - L); //计算当前f
            while (Left < Right && Slope(Q[Right - 1], Q[Right]) >= Slope(Q[Right], i))
                Right--; //维护队尾（维护下凸包性质）
            Q[++Right] = i; //入队
        }
        printf("%lld\n", dp[n]);
    }
    return 0;
}
// solved pzoj 1010
```
