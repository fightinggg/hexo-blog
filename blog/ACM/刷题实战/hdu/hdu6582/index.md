---
date: 2019-09-03 14:36:36
updated: 2019-09-03 14:36:36
---

###name
Path

###descirption
Years later, Jerry fell in love with a girl, and he often walks for a long time to pay visits to her. But, because he spends too much time with his girlfriend, Tom feels neglected and wants to prevent him from visiting her.
After doing some research on the neighbourhood, Tom found that the neighbourhood consists of exactly n houses, and some of them are connected with directed road. To visit his girlfriend, Jerry needs to start from his house indexed 1 and go along the shortest path to hers, indexed n. 
Now Tom wants to block some of the roads so that Jerry has to walk longer to reach his girl's home, and he found that the cost of blocking a road equals to its length. Now he wants to know the minimum total cost to make Jerry walk longer.
Note, if Jerry can't reach his girl's house in the very beginning, the answer is obviously zero. And you don't need to guarantee that there still exists a way from Jerry's house to his girl's after blocking some edges.

<!---more-->

###input
The input begins with a line containing one integer T(1≤T≤10), the number of test cases.
Each test case starts with a line containing two numbers n,m(1≤n,m≤10000), the number of houses and the number of one-way roads in the neighbourhood.
m lines follow, each of which consists of three integers $x,y,c(1≤x,y≤n,1≤c≤10^9)$, denoting that there exists a one-way road from the house indexed x to y of length c.

###output
Print T lines, each line containing a integer, the answer.

###sample input
1
3 4
1 2 1
2 3 1
1 3 2
1 3 3

###sample output
3

###toturial
扣最短路跑最大流即可

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

// dijkstra算法
typedef long long ll;
ll d[V];// 距离数组
typedef pair<ll,int>pii;
void dijkstra(int base,int n,int s,ll*dist){
    rep(i,base+1,base+n) dist[i]=1e18;
    priority_queue<pii,vector<pii>,greater<pii>>q;// dis and vertex
    q.emplace(dist[base+s]=0,base+s);
    while(!q.empty()){
        int u=q.top().second; q.pop();
        repe(i,u){
            int v=to[i],w=ew[i];
            if(dist[u]+w<dist[v])q.emplace(dist[v]=dist[u]+w,v);
        }
    }
}

//最大流最小割算法
int lv[V],current[V],src,dst;
int *cap=ew;//容量等于边权
bool maxflowbfs(){
    queue<int>q;
    lv[src]=0, q.push(src);
    while(!q.empty()){
        int u=q.front();q.pop();
        repe(i,u){
            if(cap[i]==0||lv[to[i]]>=0)continue;
            lv[to[i]]=lv[u]+1, q.push(to[i]);
        }
    }
    return lv[dst]>=0;
}
int maxflowdfs(int u,int f){
    if(u==dst)return f;
    for(int&i=current[u];i;i=nex[i]){//当前弧优化
        if(cap[i]==0||lv[u]>=lv[to[i]])continue;
        int flow=maxflowdfs(to[i],min(f,cap[i]));
        if(flow==0) continue;
        cap[i]-=flow,cap[i^1]+=flow;
        return flow;
    }
    return 0;
}
ll maxflow(int base,int n,int s,int t){
    src=base+s,dst=base+t;
    ll flow=0,f=0;// 计算最大流的过程中不可能爆int 唯独在最后对流量求和对时候可能会比较大 所以只有这里用ll
    while(true){
        rep(i,base+1,base+n) current[i]=head[i],lv[i]=-1;
        if(!maxflowbfs())return flow;
        while(f=maxflowdfs(src,2e9))
            flow+=f;
    }
}

int main(){
    int T;scanf("%d",&T);
    while(T--){
        int n,m;scanf("%d%d",&n,&m);
        struct edge{int u,v,w;};
        vector<edge>e;
        rep(i,1,m) {
            int u,v,w; scanf("%d%d%d",&u,&v,&w);
            addedge1(u,v,w);
            e.push_back(edge{u,v,w});
        }
        dijkstra(0,n,1,d);
        tot=max(tot,tot^1);
        for(edge&x:e) if(d[x.u]+x.w==d[x.v]) {
            addedge1(n+x.u,n+x.v,x.w);
            addedge1(n+x.v,n+x.u,0);
        }
        printf("%lld\n",maxflow(n,n,1,n));
        rep(i,1,2*n) head[i]=0; tot=1;
    }
}
```