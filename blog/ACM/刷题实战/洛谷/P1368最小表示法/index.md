---
date: 2020-03-28 19:19:57
updated: 2020-03-28 19:19:57
---

# 题目描述
小敏和小燕是一对好朋友。
他们正在玩一种神奇的游戏，叫 Minecraft。
他们现在要做一个由方块构成的长条工艺品。但是方块现在是乱的，而且由于机器的要求，他们只能做到把这个工艺品最左边的方块放到最右边。
他们想，在仅这一个操作下，最漂亮的工艺品能多漂亮。
两个工艺品美观的比较方法是，从头开始比较，如果第i 个位置上方块不一样那么谁的瑕疵度小，那么谁就更漂亮，如果一样那么继续比较第i+1 个方块。如果全都一样，那么这两个工艺品就一样漂亮。

<!---more-->

# 输入格式
第一行一个整数 n，代表方块的数目。
第二行 n 个整数，每个整数按从左到右的顺序输出方块瑕疵度的值。

# 输出格式
一行n 个整数，代表最美观工艺品从左到右瑕疵度的值。

# 输入样例
```
10
10 9 8 7 6 5 4 3 2 1
```
# 输出样例
```
1 10 9 8 7 6 5 4 3 2
```

# 数据范围
n&lt;3e5

# 做法1
 维护两个指针i,j让其表示两个子串，开始向后匹配，直到匹配失败，则S[i+k]和S[j+k]不一样了，可以证明如果S[i+k]小，则最小表示法一定不在区间[i,i+k]上，我们可以直接让i=i+k+1;j同理，复杂度On
```cpp
#include <bits/stdc++.h>
using namespace std;

int v[300000 + 5];

int main() {
  int n;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) scanf("%d", v + i);
  int i = 0, j = 1, k = 0;
  while (i < n && j < n && k < n) {
    if (v[(i + k) % n] == v[(j + k) % n])
      k++;
    else {
      v[(i + k) % n] < v[(j + k) % n] ? j += k + 1 : i += k + 1;
      k = 0;
      if (i == j) j++;
    }
  }
  int ans = min(i, j);
  for (int x = 0; x < n; x++) printf("%d ", v[(ans + x) % n]);
}
```

# 做法2
 后缀数组+倍增字符串
```cpp
#include <bits/stdc++.h>
using namespace std;

const int N = 6e5 + 5;

void sort(int* sa, int* rk, int* tp, int n, int m) {
  static int s[N];
  for (int i = 0; i < m; i++) s[i] = 0;                         //清空
  for (int i = 0; i < n; i++) s[rk[i]]++;                       //计数
  for (int i = 1; i < m; i++) s[i] += s[i - 1];                 //前缀和
  for (int i = n - 1; i >= 0; i--) sa[--s[rk[tp[i]]]] = tp[i];  //按tp枚举排序
}

void getsa(int* sa, int* s, int n, int m) {  // s[i]<m i<n
  static int rk[N], tp[N];  // rk和sa相对，tp是枚举顺序
  for (int i = 0; i < n; i++) rk[i] = s[i];
  for (int i = 0; i < n; i++) tp[i] = i;  // tp是枚举顺序
  sort(sa, rk, tp, n, m);                 // 第1轮排序
  for (int k = 1; k <= n; k <<= 1) {  // k 是已经排序完成的后缀长度
    for (int i = 0; i < k; i++)
      tp[i] = n - 1 - i;  // 短后缀的第二关键字为空，放到最前面
    for (int t = k, i = 0; i < n; i++)
      if (sa[i] >= k) tp[t++] = sa[i] - k;  // 按照第二关键字排好序

    sort(sa, rk, tp, n, m);
    for (int i = 0; i < n; i++) tp[i] = rk[i];  //拷贝一份
    rk[sa[0]] = 0;
    for (int i = 1; i < n; i++) {
      int x = sa[i], y = sa[i - 1];
      if (tp[x] == tp[y] && x + k < n && y + k < n && tp[x + k] == tp[y + k])
        rk[x] = rk[y];
      else
        rk[x] = rk[y] + 1;
    }
  }
}

int main() {
  int n;
  scanf("%d", &n);
  vector<int> v(n);
  for (int i = 0; i < n; i++) scanf("%d", &v[i]);
  vector<int> dist = v;
  sort(dist.begin(), dist.end());
  dist.erase(unique(dist.begin(), dist.end()), dist.end());
  for (int& x : v) x = lower_bound(dist.begin(), dist.end(), x) - dist.begin();
  for (int i = 0; i < n; i++) v.push_back(v[i]);
  vector<int> sa(v.size());
  getsa(sa.data(), v.data(), v.size(), v.size());
  int ans = 0;
  while (sa[ans] >= n) ans++;
  for (int i = 0; i < n; i++) {
    printf("%d ", dist[v[sa[ans] + i]]);
  }
}
```

# 做法3
 构建后缀自动机,每次走权值最小的边，由于数据范围大，我们需要使用map，导致复杂度增加至nlgn，可过，
## 优化
 手写hash，维护最值，复杂度On,可过
```cpp
#include <bits/stdc++.h>
using namespace std;

const int N = 6e5 + 5;
int par[N << 1], len[N << 1];
map<int, int> son[N << 1];
int p, tot;

void extend(int c) {  // s[i]-'a'
  int np = ++tot;
  par[np] = 0;
  len[np] = len[p] + 1;
  while (son[p][c] == 0) {
    son[p][c] = np;
    p = par[p];
  }
  if (p != 0 || son[p][c] != np) {
    int q = son[p][c];
    par[np] = q;
    if (len[q] != len[p] + 1) {
      int nq = ++tot;
      son[nq] = son[q];
      par[nq] = par[q];
      len[nq] = len[p] + 1;
      par[np] = par[q] = nq;
      while (son[p][c] == q) {
        son[p][c] = nq;
        p = par[p];
      }
    }
  }
  p = np;
}

int main() {
  ios::sync_with_stdio(false);
  int n;cin>>n;
  vector<int>s(n);
  for(int i=0;i<n;i++) cin>>s[i];
  for (int x : s) extend(x);
  for (int x : s) extend(x);

  for (int i = 0, cur = 0; i < s.size(); i++) {
    auto x =son[cur].begin();
    cout<<x->first<<" ";
    cur=x->second;
  }
}
```