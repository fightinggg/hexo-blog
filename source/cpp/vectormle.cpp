#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

struct Edge {
  int u, v, w;
};
vector<Edge> edge[10005];

const int N = 1005, M = 1005;
int f[N * M];
int find(int x) { return x == f[x] ? x : f[x] = find(f[x]); }

int X[N * M];
int main() {
  int T;
  scanf("%d", &T);
  for (int times = 1; times <= T; times++) {
    int n, m, sr, sc, tr, tc;
    int a, b, c, p;
    scanf("%d%d%d%d%d%d", &n, &m, &sr, &sc, &tr, &tc);
    scanf("%d%d%d%d%d%d", &X[1], &X[2], &a, &b, &c, &p);
    int nm = n * m;
    for (int i = 0; i <= 10000; i++) edge[i].clear();
    for (int i = 3; i <= nm; i++) X[i] = (a * X[i - 1] + b * X[i - 2] + c) % p;
    int dic[4][2] = {0, 1, 0, -1, 1, 0, -1, 0};
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= m; j++) {
        for (int t = 0; t < 4; t++) {
          int x = i + dic[t][0], y = j + dic[t][1];
          if (x < 1 || x > n) continue;
          if (y < 1 || y > m) continue;
          int u = (i - 1) * m + j;
          int v = (x - 1) * m + y;
          edge[X[u] * X[v]].push_back(Edge{u, v, X[u] * X[v]});
        }
      }
    }
    ll ans = 0;
    for (int i = 1; i <= nm; i++) f[i] = i;
    for (int w = 10000; w >= 0; w--) {
      for (Edge& e : edge[w]) {
        if (find(e.u) == find(e.v)) continue;
        f[find(e.u)] = find(e.v);
        ans += e.w;
      }
    }
    cout << "Case #" << times << ": " << ans << endl;
  }
}
