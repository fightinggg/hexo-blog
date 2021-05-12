---
date: 2019-05-03 10:37:42
updated: 2019-09-03 16:09:30
mathjax: true
---



# 先bb一堆

dij算法很简单，就是通过不断的松弛离源最近的点，说白了，就是一个bfs变种,或者叫做启发式搜索？启发函数就是当前的距离。搜索过程中松弛点

A\*算法也不难，本质上就是启发式搜索，核心就在启发函数f+g上面，其中f为当前走过的路径长度，g为估值函数，估计下还有多远到终点

在一般的A\*搜索中，可以解决迷宫问题，用曼哈顿距离来作为g函数，可以跑的飞快

我们可以根据dij算法求出的信息来计算第k短路。

我们对原图的反向图，求出以待求终点为起点的最短路数组，以此作为A\*的启发函数的评估函数，可以证明，在此启发函数作为指引的情况下， 我们首先会得到一条从原图起点到终点的路线，如果我们此时不让算法停止，忽略此次结果，那么我们得到的第二个路线是什么呢？

其实就是第二短路。

# dijkstra

dijkstra算法，用于解决单源最短路问题，是一种每一次通过贪心的选择距离源点最近的点来松弛其他点来得到解的方法。

# 为什么选择距离源点最近的没有松弛过其他点的点

在松弛过程中，距离数组（函数）表达的意义是这样的，dist(i)代表到i到最短路不会短于dist(i)

我们尝试用第一数学归纳法来证明松弛的这个点已经达到了最短路状态，

数学归纳法第一步:归纳起点，我们选择松弛的第一个点是源点自己，首先不可否认，对源点自己来说，他已经达到了最短路状态。

数学归纳法第二步:假设我们已经用k个点松弛过其他点，那么这k个点都已经达到了最短路状态，那么我们接下来要选择第k+1个点来松弛其他点， 我们在所有没有松弛过其他点的点中，选出了距离源点最近的点之一，下面来证明这个点已经达到了最短路状态

假设它并非为最短路状态，首先，那就意味着他的最后一步并非通过那k个点到它来得到，肯定是剩余到没有松弛过其点的点得到的， 然鹅，你要到其他点，在到此点，的路，显然比直接到此点更长，因为我们选出的就是离源点最近的点，矛盾。

# 启发式搜索

对于启发式搜索，他有一个启发函数，看哪个点的启发函数值大/小，就先搜索哪一个，比方说，dfs的启发函数是点的深度，bfs的启发函数是点的深度的相反数。

# A*搜索

对于A\*搜索，他也有启发函数，他的启发函数一般为当前已经走过的路径长度+评估函数，这个评估函数，在迷宫搜索中一般取曼哈顿距离，在最短路搜索中评估函数一般选取为小于等于真实距离，否则会得到错解，比方说，若把dij算法看着A\*搜索，他的的评估函数就是f(x)=0哈哈哈哈。可以证明，评估函数选取为小于等于真实距离， 不会导致算法正确性的改变。

# 如何求第k短路？

​    如果我们以每一个点到终点到真实最短距离作为评估函数，这个评估函数简直神了，这不叫评估了，这叫开挂。对我们就是开挂，这个挂好开 建反向图跑dij即可，然后我们以这个启发函数为指引，来搜索，一下子就找到了最短路，0.0 ，这不是我们想要的，丢掉，只要我们不退出程序，我们就会逐渐得到第二短路、第三短路、等等，这个很显然的。



# SPFA

```c++
int d[maxn],inq[maxn];
    void short_path(int s,int*dist){
        for(int i=0;i<=n;i++) dist[i]=1e9;
        dist[s]=0;
        deque<int>q;
        q.push_back(s);
        inq[s]=1;
        long long sum=0;
        while(!q.empty()){
            int u=q.front(); q.pop_front(); sum-=dist[u];inq[u]=0;
            if(1ll*dist[u]*q.size()>sum){//large label last
                sum+=dist[u];
                q.push_back(u);
                inq[u]=1;
            }
            else{
                for(int i=head[u];~i;i=edge[i].nex){
                    int v=edge[i].v, w=edge[i].w;
                    if(dist[v]>dist[u]+w){
                        if(inq[v]){
                            sum-=dist[v];
                            dist[v]=dist[u]+w;
                            sum+=dist[v];
                        }
                        else{
                            dist[v]=dist[u]+w;
                            inq[v]=1;
                            sum+=dist[v];
                            if(dist[v]<dist[q.front()]) q.push_front(v);//small lable first
                            else q.push_back(v);
                        }
                    }
                }
            }
        }
    }
```



# DIJ


```cpp
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
```

# Astar

```c++
const int maxn=1e6;
int buf[maxn];
struct graph{
    static const int maxn=1e3+5;
    static const int maxm=1e5+5;
    struct star{
        int v,w,nex;
        star(int v=0,int w=0,int nex=0):v(v),w(w),nex(nex){}
    }edge[maxm];//有向图不要双倍边
    int head[maxn], tot, n;

    void init(int _n){
        n=_n;
        tot=-1;
        memset(head,-1,(n+1)*sizeof(head[0]));
    }

    void add_edge(int u,int v,int w){
        edge[++tot]=star(v,w,head[u]);
        head[u]=tot;
    }


    struct dijnode{
        int d,u;
        bool operator<(const dijnode&rhs)const{return d>rhs.d;}
        dijnode(int d,int u):d(d),u(u){}
    };
    void short_path(int s,int*dist){//short path
        for(int i=0;i<=n;i++) dist[i]=2e9;
        priority_queue<dijnode>q;// dis and vert
        dist[s]=0;
        q.push(dijnode(dist[s],s));
        while(!q.empty()){
            int u = q.top().u; q.pop();
            for(int i=head[u];~i;i=edge[i].nex){
                int v=edge[i].v, w=edge[i].w;
                if(dist[u]+w<dist[v]){
                    dist[v]=dist[u]+w;
                    q.push(dijnode(dist[v],v));
                }
            }
        }
    }


    struct Astarnode{
        int d,need,u;
        bool operator<(const Astarnode&rhs)const{return d+need>rhs.d+rhs.need;}
        Astarnode(int d,int need,int u):d(d),need(need),u(u){}
    };
    int kthway(graph&rev,int s,int t,int k){//from s to t the kth way ， g是反向图
        if(s==t)k++;
        int*dist=buf;//分配内存
        rev.short_path(t,dist);
        if(dist[s]==2e9)return -1;//此路不通
        priority_queue<Astarnode>q;
        q.push(Astarnode(0,dist[s],s));
        while(!q.empty()){
            int u = q.top().u, d=q.top().d;
            q.pop();
            if(u==t){
                k--;
                if(k==0)return d;
            }
            for(int i=head[u];~i;i=edge[i].nex){
                int v=edge[i].v, w=edge[i].w;
                q.push(Astarnode(d+w,dist[v],v));
            }
        }
        return -1;//没那么多路
    }
};
```