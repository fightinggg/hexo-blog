//poj2728-最小比值生成树
#include <algorithm>
#include <cmath>
#include <cstdio>
#include <iostream>
#include <assert.h>
using namespace std;
// 完全图用prim算法复杂度为O(n^2)
const int V = 1e3 + 5;
double A[V][V], B[V][V], W[V][V];
double totree[V];

int mst[V];
int x[V], y[V], h[V];

int main() {
  int n;
  while (scanf("%d", &n), n) {
    for (int i = 1; i <= n; i++) scanf("%d%d%d", x + i, y + i, h + i);
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n; j++) {
        double dx = x[i] - x[j], dy = y[i] - y[j], dh = h[i] - h[j];
        A[i][j] = fabs(dh);
        B[i][j] = sqrt(dx * dx + dy * dy);
      }
    }
    double l = 0, r = 100;
    while (r - l > 1e-8) {// 二分
      double mid = (l + r) / 2;
      for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++) W[i][j] = mid * B[i][j] - A[i][j];// 分数规划

      int s = 1;
      for (int i = 1; i <= n; i++) mst[i] = 0, totree[i] = W[s][i]; // 距离
      mst[s] = 1;
      double sum = 0;
      for (int t = 2; t <= n; t++) {
        int u = -1;
        for (int i = 1; i <= n; i++)
          if (mst[i] == 0 && (u == -1 || totree[u] < totree[i])) u = i;
        mst[u]=1;
        sum+=totree[u];// 取出最远的点，求最大生成树
        for (int i = 1; i <= n; i++) 
          if(mst[i]==0) totree[i] = max(totree[i], W[u][i]);//只有不在生成树中的点才被松弛
      }// 生成树[?...sum] 与比值保持一致的单调性   

      sum > 0 ? r = mid : l = mid;// sum 大于0 则比值可以下降，则下移上界，反之上移下届
    }
    printf("%.3f\n", l);
  }
}
