//poj1639-k度限制最小生成树
// #include <bits/stdc++.h>
#include <algorithm>
#include <iostream>
#include <map>
#include <vector>
#include <cstdio>
using namespace std;
typedef pair<int, int> pii;
typedef map<int, int>::iterator IT;

const int V = 1e4, E = 1e5;
struct edge {
  int u, v, w;
  bool operator<(const edge& rhs) const { return w < rhs.w; }
} e[E], mxway[V];
map<int, int> g[V];
int lens[V];
int f[V];
int find(int u) { return u == f[u] ? u : f[u] = find(f[u]); }
void addedge(int u, int v, int w) {
  if (g[u].find(u) != g[u].end()) w = min(w, g[u][v]);
  g[u][v] = g[v][u] = w;
}
void eraedge(int u, int v) { g[u].erase(v), g[v].erase(u); }

void dfs(int u, int father) {
  // for (pii x : g[u]) {
  for (IT it = g[u].begin(); it != g[u].end(); ++it) {
    pii x = *it;
    if (x.first == father) continue;
    if (x.second > mxway[u].w)
      mxway[x.first] = edge{u, x.first, x.second};
    else
      mxway[x.first] = mxway[u];
    dfs(x.first, u);
  }
}

int klimitmst(int n, int m, int k) {
  int res = 0;
  // 求最小森林
  sort(e + 1, e + m + 1);
  for (int i = 1; i <= n; ++i) f[i] = i, lens[i] = 2e9;
  for (int i = 1; i <= m; ++i) {
    if (e[i].u > e[i].v) swap(e[i].u, e[i].v);
    if (e[i].u == 1 || find(e[i].u) == find(e[i].v)) continue;
    addedge(e[i].u, e[i].v, e[i].w);
    f[find(e[i].u)] = find(e[i].v);
    res += e[i].w;
  }
  // 求最小k0限制生成
  int k0 = 0;
  for (int i = 1; i <= m; ++i) {
    if (e[i].u == 1) {
      if (find(e[i].u) == find(e[i].v)) {
        lens[e[i].v] = min(lens[e[i].v], e[i].w);
      } else {
        addedge(e[i].u, e[i].v, e[i].w);
        f[find(e[i].u)] = find(e[i].v);
        res += e[i].w;
        k0++;
      }
    }
  }
  // 求最小k限制生成树
  for (k0++; k0 <= k; k0++) {
    for (int i = 1; i <= n; ++i) mxway[i].w = -1;
    for (IT it = g[1].begin(); it != g[1].end(); ++it) dfs(it->first, 1);
    // for (pii x : g[1]) dfs(x.first, 1);
    int p = 2;
    for (int i = 3; i <= n; ++i) {
      if (lens[i] != 2e9 && lens[i] - mxway[i].w < lens[p] - mxway[p].w) p = i;
    }
    // cout << lens[p] << " " << mxway[p].w << endl;
    if (lens[p] - mxway[p].w >= 0) break;
    eraedge(mxway[p].u, mxway[p].v);
    addedge(1, p, lens[p]);
    res += lens[p] - mxway[p].w;
    lens[p] = 2e9;
  }
  return res;
}

int read() {
  int x;
  scanf("%d", &x);
  return x;
}

int main() {
  // int n = read(), m = read(), k = read();
  // for (int i = 1; i <= m; ++i)
  //   e[i].u = read(), e[i].v = read(), e[i].w = read();
  // cout << klimitmst(n, m, k) << endl;
  int n = 0, m = read();
  map<string, int> id;
  id["Park"] = ++n;
  for (int i = 1; i <= m; ++i) {
    string s1, s2;
    cin >> s1 >> s2;
    if (id.find(s1) == id.end()) id[s1] = ++n;
    if (id.find(s2) == id.end()) id[s2] = ++n;
    e[i] = edge{id[s1], id[s2], read()};
  }
  cout <<"Total miles driven: "<< klimitmst(n, m, read()) << endl;
}
