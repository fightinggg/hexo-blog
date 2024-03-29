---
date: 2019-08-31 22:54:24
updated: 2019-08-31 22:54:24
---

###name
path

###descripption
You have a directed weighted graph with n vertexes and m edges. The value of a path is the sum of the weight of the edges you passed. Note that you can pass any edge any times and every time you pass it you will gain the weight.

Now there are q queries that you need to answer. Each of the queries is about the k-th minimum value of all the paths.

<!---more-->
 
###input
The input consists of multiple test cases, starting with an integer t (1≤t≤100), denoting the number of the test cases.
The first line of each test case contains three positive integers n,m,q. $(1≤n,m,q≤5∗10^4)$

Each of the next m lines contains three integers ui,vi,wi, indicating that the i−th edge is from ui to vi and weighted wi.$(1≤u_i,v_i≤n,1≤w_i≤10^9)$

Each of the next q lines contains one integer k as mentioned above.$(1≤k≤5∗10^4)$

It's guaranteed that$ Σn ,Σm, Σq,Σmax(k)≤2.5∗10^5$ and max(k) won't exceed the number of paths in the graph.

###output
For each query, print one integer indicates the answer in line.

###sample input
1
2 2 2
1 2 1
2 1 2
3
4

###sample output
3
3

###hint
1->2 value :1

2->1 value: 2

1-> 2-> 1 value: 3

2-> 1-> 2 value: 3


###toturial
拓展一条边有两种方式，第一终点往外走 ， 第二相同起点的下一条边，这样做的前提是边要有序，从小到大排好


###code
```cpp
#include<bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(int i=j;i<=(k);++i)
#define per(i,j,k) for(int i=j;i>=(k);--i)
#define repe(i,u) for(int i=head[u];i;i=nex[i])

// graph
const int V=5e4+5,E=5e4+5;
int head[V];
int to[E],nex[E],ew[E],tot=1;
inline void addedge1(int u,int v,int w) {to[++tot]=v,nex[tot]=head[u],ew[tot]=w,head[u]=tot;}
void del(int u){repe(i,u) head[u]=0,del(to[i]);}

// kthpath
typedef long long ll;
struct path{
    int u,id;ll d;
    bool operator<(const path&rhs)const{return d>rhs.d;}
};
void kthpath(int l,int r,int k,vector<ll>&dist){ // assert(dist.empty())
    priority_queue<path>q;
    rep(i,l,r) if(head[i]) q.push(path{i,head[i],ew[head[i]]});
    while(k--&&!q.empty()){
        int u=q.top().u,id=q.top().id;
        ll d=q.top().d; q.pop();
        dist.push_back(d);
        if(head[to[id]]) q.push(path{to[id],head[to[id]],d+ew[head[to[id]]]});
        if(nex[id]) q.push(path{u,nex[id],d-ew[id]+ew[nex[id]]});
    }
}

struct edge{ll u,v,w;};

int main() {
    ll T; scanf("%lld",&T);
    while(T--){
        ll n,m,q; scanf("%lld%lld%lld",&n,&m,&q);
        rep(i,1,n) head[i]=0; tot=1;
        vector<edge> vec;
        while(m--){
            ll u,v,w; scanf("%lld%lld%lld",&u,&v,&w);
            vec.push_back(edge{u,v,w});
        }
        sort(vec.begin(),vec.end(),[](edge&a,edge&b){return a.w>b.w;});
        for(edge e:vec) addedge1(e.u,e.v,e.w);
        vector<ll> ans;
        kthpath(1,n,5e4+5,ans);
        while(q--){
            ll k; scanf("%lld",&k);
            printf("%lld\n",ans[k-1]);
        }
    }
}
```