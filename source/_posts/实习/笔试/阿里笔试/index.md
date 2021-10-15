---
date: 2020-03-30 21:13:03
updated: 2020-03-30 21:13:03
---

# 阿里笔试
 感觉很难受，笛卡尔树没写出来，气死了，我咋这么菜 

# 第一题
 有n个羊圈，第i个羊圈初始有a[i]个羊，每天早上每个羊圈会增加k的羊，每天晚上主人会选出羊圈中羊最多的那个，卖掉一半，变为$\lfloor \frac{a[i]}{2}\rfloor$个羊，问m天后剩下多少只羊。

 n,k,m,a[i]&lt;1e5 

 每天增加本质是区间加法，寻找羊最多的是区间最值查询，减半是单点修改，第一想到线段树，但是这么敲也太莽撞了，然后发现区间修改为全区间修改，考虑到可以懒惰化，即增加一个值add用来表示全区间增大的情况。区间加法的时候让add+=k即可，查询的时候是最值查询，修改的时候注意$\lfloor \frac{a[i]+add}{2}-add\rfloor$,这样用一个多重集合维护即可

<!---more-->

# 第二题
 给一个长度为n的数组，任意选择一个子串，问最大值的期望, n&lt;1e6
 笛卡尔树的板子题，太丢人了，没做出来，考虑建一颗笛卡尔树，那么区间最值就是树根，树形dp维护子树大小，dfs统计答案。
 代码祭天,下次一定分情况讨论，先写个暴力偏点分，不然笛卡尔树没搞好，暴力也没写太惨了。
```cpp
#include <bits/stdc++.h>
using namespace std;

int read() {
  int x;
  scanf("%d", &x);
  return x;
}

const int N = 1e6 + 6;
int l[N], r[N], siz[N], a[N];
int n;
int s[N], top;

double dfs(int rt) {
  if (rt == 0) return 0;
  double ans = dfs(l[rt]) + dfs(r[rt]);
  siz[rt] = siz[l[rt]] + siz[r[rt]] + 1;
  double ls = siz[l[rt]] + 1;
  double rs = siz[r[rt]] + 1;
  ans += a[rt] * ls * rs / n / (n + 1) * 2;
  return ans;
}

double f2() {
  top = 0;
  s[++top] = 1;
  for (int i = 2; i <= n; i++) {
    while(top&&a[s[top]]<=a[i]) l[i]=s[top--];
    if(top) r[s[top]]=i;
    s[++top]=i;
  }
  return dfs(s[1]);
}

double f1() {
  static int mx[10005][10005];
  for (int i = 1; i <= n; i++) {
    mx[i][i] = a[i];
    for (int j = i + 1; j <= n; j++) mx[i][j] = max(mx[i][j - 1], a[j]);
  }
  double ans = 0;
  for (int i = 1; i <= n; i++) {
    for (int j = i; j <= n; j++) {
      ans += mx[i][j];
    }
  }
  return ans / n / (n + 1) * 2;
}

int main() {
  while (true) {
    n = 1e3;
    for (int i = 0; i <= n + 10; i++)
      a[i] = rand() % 10, l[i] = r[i] = siz[i] = 0;
    double ans1 = f1();
    double ans2 = f2();
    printf("%.6f %.6f\n", ans1, ans2);
    fflush(stdout);
    assert(fabs(ans1-ans2)<1e-8);
  }
  n = read();
  for (int i = 1; i <= n; i++) a[i] = read();
  printf("%.6f\n", f2());
  printf("%.6f\n", f1());
}
```