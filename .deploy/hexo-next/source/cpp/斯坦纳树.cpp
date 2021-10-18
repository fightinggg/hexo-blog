#include <bits/stdc++.h>

using namespace std;

const int mod = 1e9 + 7;
int k;

/**graph*/
struct star {
    int v, nex;
} edge[1000 * 2];
int head[50], cnt, n, m;

void ini() {
    cnt = -1;
    for (int i = 0; i < n; i++) head[i] = -1;
}

void add_edge(int u, int v) {
    edge[++cnt] = star{v, head[u]}, head[u] = cnt;
    edge[++cnt] = star{u, head[v]}, head[v] = cnt;
}


/**dp*/
struct dpnode {
    int w, ct;

    dpnode(int w = 0, int ct = 0) : w(w), ct(ct) {}
};

dpnode dp[3][1 << 12][50];

// dp[0][s][i] 保证s联通的斯坦纳树的答案中 包含节点i的部分
// dp[1][s][i] 保证s联通 且 删除i节点以后依旧联通 的斯坦纳树的答案中 包含节点i的部分
// dp[2][s][i] 保证s联通 且 删除i节点以后不联通了 的斯坦纳树的答案中 包含节点i的部分
// if   ( dp[1].w==dp[2].w ) dp[0]=merge(dp[1],dp[2])
// elif ( dp[1].w< dp[2].w ) dp[0]=dp[1]
// else                      dp[0]=dp[2]
dpnode dpmerge(dpnode a, dpnode b) {
    return dpnode(a.w + b.w, 1ll * a.ct * b.ct % mod);
}

void upd(dpnode &a, dpnode b) {
    if (b.w < a.w) a = b;
    else if (b.w == a.w) {
        a.ct = a.ct + b.ct;
        if (a.ct >= mod) a.ct -= mod;
    }
}


int main() {
    while (~scanf("%d%d%d", &n, &m, &k)) {
        ini();
        for (int i = 0, u, v; i < m; i++) {
            scanf("%d%d", &u, &v);
            add_edge(u - 1, v - 1);
        }
        k--;
        for (int s = 0; s < 1 << k; s++) {
            for (int i = 0; i < n; i++) dp[0][s][i] = dp[1][s][i] = dp[2][s][i] = dpnode(1e9, 0);
        }

        for (int i = 0; i < k; i++) {
            upd(dp[1][1 << i][i], dpnode(0, 1));
            upd(dp[0][1 << i][i], dpnode(0, 1));
        }
        for (int s = 1; s < 1 << k; s++) {
            for (int i = 0; i < n; i++) {
                for (int s0 = (s - 1) & s; s0; s0 = (s0 - 1) & s) {//枚举s的非空真子集
                    if ((s0 & -s0) == (s & -s)) {// s0 必然包含s的最小的点
//                        upd(dp[2][s][i], dpmerge(dp[1][s0][i], dp[0][s ^ s0][i]));
                        upd(dp[0][s][i], dpmerge(dp[1][s0][i], dp[0][s ^ s0][i]));// type1
                    }
                }
            }
            // dij
            struct dijnode {
                int w,id;

                bool operator<(const dijnode &rhs) const { return w > rhs.w; }
            };
            priority_queue<dijnode> q;
            for (int i = 0; i < n; i++) q.push(dijnode{dp[0][s][i].w, i});
            while (!q.empty()) {
                dijnode top = q.top(); q.pop();
                if(top.w!=dp[0][s][top.id].w) continue;
                for (int i = head[top.id]; ~i; i = edge[i].nex) {
                    if (top.w + 1 <= dp[0][s][edge[i].v].w) {
                        upd(dp[1][s][edge[i].v], dpmerge(dp[0][s][top.id], dpnode(1, 1)));
                        upd(dp[0][s][edge[i].v], dpmerge(dp[0][s][top.id], dpnode(1, 1))); // type2
                        q.push(dijnode{dp[0][s][edge[i].v].w, edge[i].v});
                    }
                }
            }
        }
        cout << dp[0][(1 << k) - 1][k].ct+1-1 << endl;
    }
}