---

date: 2021-05-05 23:00:00
updated: 2021-05-05 23:00:00
---

# 比赛链接

https://ac.nowcoder.com/acm/contest/15167

# A. A Warm Welcome

## 题意

输出`Shenzhen Institute of Computing Sciences`



# B. Mr.Maxwell and attractions

## 题意

你可以上午工作下午玩，也可以上午玩下午工作。

玩可以获得快乐，玩的时候有两类地方，一类是室内，一类是室外，室外下午玩会降低快乐值为$80\%$，重复玩一个地方会导致快乐值降低$60\%$, 可叠加。

你需要至少k个早上都在工作，问你最多获得多少快乐值。

## 题解

枚举玩多少次室内即可。用前缀和加速。

```c++
#include<bits/stdc++.h>
using namespace std;
#pragma warning(disable:4996)
priority_queue<double, vector<double>, less<double>>ap, bp;
const int maxn = 1e5 + 100;
double a[maxn],b[maxn],at[maxn],bt[maxn],apreSum[maxn], bpreSum[maxn];
int n, m, t, k;
void initQ() {
    int cnt = 1;
    while (cnt <= t) {
        double cura = ap.top();
        ap.pop();
        ap.push(cura * 0.6);
        at[cnt] = cura;
        apreSum[cnt] = apreSum[cnt - 1] + at[cnt];


        double curb = bp.top();
        bp.pop();
        bp.push(curb * 0.6);
        bt[cnt] = curb;
        bpreSum[cnt] = bpreSum[cnt - 1] + bt[cnt];
        cnt++;
    }

}
void show() {
    for (int i = 1; i <= t; i++) {
        cout << at[i] << " " << bt[i] << endl;
    }
    for (int i = 1; i <= t; i++) {
        cout << apreSum[i] << " " << bpreSum[i] << endl;
    }
}
void solve() {
    double ans = 0.0;
    for (int x = 0; x <= t; x++) {
        int y2 = t - x;
        int y1 = y2;
        if (x < k) {
            y1 -= (k-x);
        }
        double curAns = apreSum[x] + bpreSum[y1] + (0.8 * (bpreSum[y2] - bpreSum[y1]));
        ans = max(ans, curAns);
    }
    printf("%.2lf", ans);
}
int main() {
    scanf("%d%d%d%d", &n, &m, &t, &k);
    for (int i = 1; i <= n; i++) {
        scanf("%lf", &a[i]);
        ap.push(a[i]);
    }

    for (int i = 1; i <= m; i++) {
        scanf("%lf", &b[i]);
        bp.push(b[i]);
    }
    initQ();
    solve();
}
```



# C. Hamster and Equation

## 题意

输入n和k

输出
$$
x_1(x_1+1)+x_2(x_2+1)=k(x_3(x_3+1)+x_4(x_4+1))
\\ x_1,x_2,x_3,x_4 \in [-n,n]
$$
的解的个数

## 数据范围

$0\lt n,|k|\lt500$

## 题解

预处理等式左边，枚举等式右边，复杂度$n^2$

```c++
#include<bits/stdc++.h>
using namespace std;

#define  ll long long
int main() {
    int t; scanf("%d", &t);
    while(t--) {
        int n, k; scanf("%d%d", &n, &k);
        unordered_map<ll, ll>ex;
        for(int i = -n ; i <= n; ++i) {
            for(int j = -n; j <= n; ++j) {
                ll tem = 1ll * k * (1ll * i * (i + 1) + 1ll * j * (j + 1));
                ex[tem]++;
            }
        }
        ll cnt = 0;
        for(int i = -n; i <= n; ++i) {
            for(int j = -n; j <= n; ++j) {
                ll tem = 1ll * i * (i + 1) + 1ll * j * (j + 1);
                cnt += ex[tem];
            }
        }
        printf("%lld\n", cnt);
    }
}
```

# D. WA

## 题意

输入一个字符串$S$, 一个整数$k$, 你可以修改字符串$S$的任意k个字母，问你修改后最多出现多少个$aa$子串。输出修改后的串。

## 数据范围

$|S|\le 5\times10^5$

$k\le |S|$

## 题解

预处理所有a之间的空隙，优先修改短的空隙，按顺序模拟即可。注意最后修改两端的空隙。

```c++
#include<bits/stdc++.h>

using namespace std;

#define  ll long long

const int maxn = 5e5 + 5;
char s[maxn];

typedef pair<int, int> pii;

int main() {
    int t;
    //scanf("%d", &t);
    t = 1;
    while (t--) {
        int n, k;
        scanf("%d %d %s", &n, &k, s);

        vector<pii> vec;
        vec.push_back({int(1e9), -1});

        for (int i = 0; i < n; i++) {
            if (s[i] == 'a') {
                vec.push_back({0, i});
            } else {
                vec.back().first++;
            }
        }

        vector<pii> vec2;
        for (auto x:vec) {
            if (x.first != 0) {
                vec2.push_back(x);
            }
        }


        sort(vec2.begin(), vec2.end());

        int cnt = 0;
        for (auto p:vec2) {
            if (p.second == -1) {
                int up = p.second + 1;
                while (up < n && s[up] != 'a') up++;
                for (int i = up - 1; i > p.second; i--) {
                    if (cnt == k) {
                        break;
                    }
                    s[i] = 'a';
                    cnt++;

                }
            } else {
                for (int i = p.second + 1; i < n && s[i] != 'a'; i++) {
                    if (cnt == k) {
                        break;
                    }
                    s[i] = 'a';
                    cnt++;

                }
            }

        }

        int base = 0;
        for (int i = 0; i < n; i++) {
            if (i != 0 && s[i] == 'a' && s[i - 1] == 'a') {
                base++;
            }
        }


        printf("%d\n%s\n", base, s);
    }
}
```



# E. Pipeline Maintenance



## 题意

给你一条长度为n的链，外加三个点，这三个点与链上每个点都连边，你得到了一个图，问你这个图的最小生成树的个数是多少。

输入只有一个n

## 数据范围

$n\lt 10^9$

## 题解

首先推出基尔霍夫矩阵，发现这个矩阵是有少量的地方有值，很明显他的行列式就是一个多项式，所以答案一定是一个多项式。

暴力计算前100项，然后BM线性递推即可。



```c++
#include<bits/stdc++.h>
#pragma warning(disable:4996)
using namespace std;
#define rep(i,a,n) for (int i=a;i<n;i++)
#define per(i,a,n) for (int i=n-1;i>=a;i--)
#define pb push_back
#define mp make_pair
#define all(x) (x).begin(),(x).end()
#define fi first
#define se second
#define SZ(x) ((int)(x).size())
typedef vector<int> VI;
typedef long long ll;
typedef pair<int, int> PII;
const ll mod = 1000000007;
ll powmod(ll a, ll b) { ll res = 1; a %= mod; assert(b >= 0); for (; b; b >>= 1) { if (b & 1)res = res * a % mod; a = a * a % mod; }return res; }
ll n;
namespace linear_seq {
    const int N = 10010;
    ll res[N], base[N], _c[N], _md[N];

    vector<int> Md;
    void mul(ll* a, ll* b, int k) {
        rep(i, 0, k + k) _c[i] = 0;
        rep(i, 0, k) if (a[i]) rep(j, 0, k) _c[i + j] = (_c[i + j] + a[i] * b[j]) % mod;
        for (int i = k + k - 1; i >= k; i--) if (_c[i])
            rep(j, 0, SZ(Md)) _c[i - k + Md[j]] = (_c[i - k + Md[j]] - _c[i] * _md[Md[j]]) % mod;
        rep(i, 0, k) a[i] = _c[i];
    }
    int solve(ll n, VI a, VI b) {
        ll ans = 0, pnt = 0;
        int k = SZ(a);
        assert(SZ(a) == SZ(b));
        rep(i, 0, k) _md[k - 1 - i] = -a[i]; _md[k] = 1;
        Md.clear();
        rep(i, 0, k) if (_md[i] != 0) Md.push_back(i);
        rep(i, 0, k) res[i] = base[i] = 0;
        res[0] = 1;
        while ((1ll << pnt) <= n) pnt++;
        for (int p = pnt; p >= 0; p--) {
            mul(res, res, k);
            if ((n >> p) & 1) {
                for (int i = k - 1; i >= 0; i--) res[i + 1] = res[i]; res[0] = 0;
                rep(j, 0, SZ(Md)) res[Md[j]] = (res[Md[j]] - res[k] * _md[Md[j]]) % mod;
            }
        }
        rep(i, 0, k) ans = (ans + res[i] * b[i]) % mod;
        if (ans < 0) ans += mod;
        return ans;
    }
    VI BM(VI s) {
        VI C(1, 1), B(1, 1);
        int L = 0, m = 1, b = 1;
        rep(n, 0, SZ(s)) {
            ll d = 0;
            rep(i, 0, L + 1) d = (d + (ll)C[i] * s[n - i]) % mod;
            if (d == 0) ++m;
            else if (2 * L <= n) {
                VI T = C;
                ll c = mod - d * powmod(b, mod - 2) % mod;
                while (SZ(C) < SZ(B) + m) C.pb(0);
                rep(i, 0, SZ(B)) C[i + m] = (C[i + m] + c * B[i]) % mod;
                L = n + 1 - L; B = T; b = d; m = 1;
            }
            else {
                ll c = mod - d * powmod(b, mod - 2) % mod;
                while (SZ(C) < SZ(B) + m) C.pb(0);
                rep(i, 0, SZ(B)) C[i + m] = (C[i + m] + c * B[i]) % mod;
                ++m;
            }
        }
        return C;
    }
    int gao(VI a, ll n) {
        VI c = BM(a);
        c.erase(c.begin());
        rep(i, 0, SZ(c)) c[i] = (mod - c[i]) % mod;
        return solve(n, c, VI(a.begin(), a.begin() + SZ(c)));
    }
};
int a[1000] = { 1,20,216,1840,13775,95040,619801,3878720,23520456,139127500,806585879,599175652,861664394,707058859,417979870,901047604,478633297,859865743,368755586,930893321,243990638,416220770,156922876,768961406,372030171,188255286,753829864,246844887,442658427,357182332,744405222,783203806,469197530,863684841,605924134,166060944,506226150,446220745,171110722,498919220,700717610,739340306,607058637,253306001,703467596,231535400,903802311,143421365,864786702,113238066,748503739,575557576,596128329,62322981,98752077,240806338,956345596,374036254,976624372,344168146,879827644,658625868,76392155,576562868,336205776,392396240,70109394,71982377,780620194,821250696,668859101,16081127,485315931,278337560,180126339,172842175,402815218,33449281,512582468,457919375,64916357,966658493,531395887,571188277,243742869,586283678,302575818,40249574,901283990,633872644,396221397,13159314,543397157,575791218,993120783,494677489,620570286,883513941,153287837,309800837 };
int main() {
    vector<int>v;
    for (int i = 0; i < 50; i++) {
        v.push_back(a[i]);
    }
    scanf("%lld", &n);
    printf("%lld\n", 1LL * linear_seq::gao(v, n - 1) % mod);
}
```





# F. Meet in another world, enjoy tasty food!

## 题意

有$n$个人在排队，给你长度为n的数组，这是每个人都的耐心值，排名为$i$的人每秒会丧失$i$点耐心，当耐心值低于$0$的时候，这个人会离开队列，与此同时，他后面的人的排名都会减少1。你需要输出出队顺序。

## 数据范围

$n\lt 1000$

$a_i<10^{18}$

## 题解

暴力计算每一轮谁离开了队列。

```c++
#include<bits/stdc++.h>

using namespace std;

#define ll long long
typedef pair<ll, ll> pll;

int main() {
    ll t;
    t = 1;
    while (t--) {
        ll n;
        scanf("%lld", &n);
        vector<pll> a;

        for (ll i = 1; i <= n; i++) {
            ll x;
            scanf("%lld", &x);
            a.push_back(make_pair(x, i));
        }

        vector<ll> ans;
        for (ll _ = 1; _ <= n; _++) {
            ll k = 1e18 + 100;
            for (ll i = 0; i < a.size(); i++) {
                ll rank = i + 1;
                k = min(k, (a[i].first + rank - 1) / rank);
            }
            vector<pll> b;

            if (k != 1) {
                k--;
                for (ll i = 0, ii = 1; i < a.size(); i++) {
                    if (a[i].first - ii * k <= 0) {
                        ans.push_back(a[i].second);
                    } else {
                        a[i].first -= k * ii;
                        b.push_back(a[i]);
                        ii++;
                    }
                }
                a = b;
                b.clear();
            }

            k = 1;
            for (ll i = 0, ii = 1; i < a.size(); i++) {
                if (a[i].first - ii * k <= 0) {
                    ans.push_back(a[i].second);
                } else {
                    a[i].first -= k * ii;
                    b.push_back(a[i]);
                    ii++;
                }
            }
            a = b;
            b.clear();
        }

        for (ll x: ans) {
            printf("%lld ", x);
        }
        printf("\n");
    }
}
```










