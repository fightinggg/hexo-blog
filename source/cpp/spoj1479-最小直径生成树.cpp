//spoj1479-最小直径生成树
#include <bits/stdc++.h>
#define rep(i, j, k) for (int i = j; i <= int(k); ++i)
using namespace std;
typedef pair<int, int> pii;
struct MDST {
  static const int V = 210;
  int d[V][V], g[V][V], vis[V], rk[V][V], tocen[V], n;
  void init(int _n) {  // O(n^2)
    n = _n;
    rep(i, 1, n) {
      rep(j, 1, n) g[i][j] = 1e9;
      g[i][i] = 0;
    }
  }
  void addedge(int u, int v, int w) {
    g[u][v] = g[v][u] = min(g[u][v], 2 * w);
  }                                                //将边权扩大一倍
  void centra(int& l, int& r, int& dl, int& dr) {  // 图的绝对中心 O(n^3)
    rep(i, 1, n) rep(j, 1, n) d[i][j] = g[i][j];
    rep(k, 1, n) rep(i, 1, n) rep(j, 1, n) d[i][j] =
        min(d[i][j], d[i][k] + d[k][j]);

    rep(i, 1, n) {
      rep(j, 1, n) rk[i][j] = j;
      rep(j, 1, n) rep(k, j + 1, n) if (d[i][rk[i][j]] > d[i][rk[i][k]])
          swap(rk[i][j], rk[i][k]);
    }
    int ans = 1e9;
    rep(u, 1, n) {
      if (d[u][rk[u][n]] * 2 < ans) ans = d[u][rk[u][n]] * 2, l = r = u;
      rep(v, 1, n) if (g[u][v] != 1e9) {
        for (int ii = n, mx = 0; ii >= 1; ii--) {
          int i = rk[u][ii];
          if (abs(mx - d[u][i]) < g[u][v]) {//两边相差小于边权，才能假设绝对中心在这条边上
            int t = mx + d[u][i] + g[u][v];
            if (t < ans) {
              ans = t, l = u, r = v;
              dl = t / 2 - d[u][i];
              dr = g[u][v] - dl;
            }
          }
          mx = max(mx, d[v][i]);
        }
      }
    }
    cout << ans / 2 << endl;
  }
  void spt() {  // O(n^2)
    int l, r, dl, dr;
    centra(l, r, dl, dr);
    rep(i, 1, n) vis[i] = 0, tocen[i] = min(d[l][i] + dl, d[r][i] + dr);
    rep(i, 1, n) rep(j, 1, n) {  // j -> i
      if (i != l && i != r && i != j && tocen[j] + g[j][i] == tocen[i]) {
        cout << min(i, j) << " " << max(i, j) << endl;
        break;
      }
    }
    cout << min(l, r) << " " << max(l, r) << endl;
  }
} g;
int main() {
  int n, m;
  scanf("%d%d", &n, &m);
  g.init(n);
  rep(i, 1, m) {
    int u, v, w;
    scanf("%d%d%d", &u, &v, &w);
    g.addedge(u, v, w);
  }
  g.spt();
}
