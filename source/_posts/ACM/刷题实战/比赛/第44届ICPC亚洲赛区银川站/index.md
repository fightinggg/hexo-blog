---

date: 2021-05-09 23:00:00
updated: 2021-05-09 23:00:00
---

# 比赛链接

https://www.jisuanke.com/contest/20844



# B. So Easy



















```c++
#include<bits/stdc++.h>

using namespace std;
typedef long long ll;
typedef vector<int> v1;
const int bit = 30;
const int maxn = 1e5 + 5;

v1 tree[maxn], kdisSon[maxn];
int value[maxn], stk[maxn];
unsigned long long dp[maxn], ans[maxn];
int state[maxn][4];

void dfs1(int cur, int k, int dep) {
    stk[dep] = cur;
    if (dep - k >= 0) {
        kdisSon[stk[dep - k]].push_back(cur);
    }
    for (int son:tree[cur]) {
        dfs1(son, k, dep + 1);
    }
}


void dfs2(int cur, int j, int k) {
    for (int t = 0; t < 4; t++) {
        state[cur][t] = 0;
    }
    for (int son:tree[cur]) {
        dfs2(son, j, k);

        for (int kson:kdisSon[son]) {
            int msk1 = (value[kson] & (1 << j)) >> j;
            int msk2 = (value[kson] & (1 << k)) >> k;
            int t = msk1 << 1 | msk2;
            state[cur][t]--;
        }
        for (int t = 0; t < 4; t++) {
            state[cur][t] += state[son][t];
        }
    }
    int msk1 = (value[cur] & (1 << j)) >> j;
    int msk2 = (value[cur] & (1 << k)) >> k;
    int t = msk1 << 1 | msk2;
    state[cur][t]++;
    dp[cur] = 0;
    for (int t = 0; t <= 1; t++) {
        ll add = 1ll * state[cur][t ^ 3] * state[cur][t];
        add <<= j + k;
        dp[cur] += add;
    }
}

int main() {
    int n, k;
    scanf("%d%d", &n, &k);

    for (int i = 1; i <= n; i++) {
        scanf("%d", &value[i]);
    }
    for (int i = 2; i <= n; i++) {
        int fa;
        scanf("%d", &fa);
        tree[fa].push_back(i);
    }

    dfs1(1, k, 0);
    for (int i = 0; i < bit; i++) {
        dfs2(1, i, i);
        for (int cur = 1; cur <= n; cur++) {
            ans[cur] += dp[cur];
        }
        for (int j = i + 1; j < bit; j++) {
            dfs2(1, i, j);
            for (int cur = 1; cur <= n; cur++) {
                ans[cur] += dp[cur] * 2;
            }
        }
    }
    for (int i = 1; i <= n; i++) {
        printf("%llu\n", ans[i]);
    }
}
```
