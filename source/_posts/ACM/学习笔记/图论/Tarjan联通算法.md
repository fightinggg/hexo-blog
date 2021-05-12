---
date: 2019-05-12 01:07:43
updated: 2019-05-12 01:07:43
mathjax: true
---



# 强联通

```c++
struct Tarjan:Graph{//强连通分量缩点
    int low[maxn],dfn[maxn],belong[maxn],stk[maxn],instk[maxn],block[maxn];
    int step,color;
    void tarjan(){
        step=color=0;
        for(int i=0;i<=n;i++) dfn[i]=0;
        for(int i=1;i<=n;i++) if(dfn[i]==0) tarjan(i,0);//多个联通快
    }
    void tarjan(int u,int father=0){//此函数不开放
        low[u]=dfn[u]=++step; stk[++stk[0]]=u;instk[u]=1;
        for(int i=head[u];~i;i=edge[i].nex){
            int v=edge[i].v;
            if(dfn[v]) {
                if(instk[v]) low[u]=min(low[u],dfn[v]);
            }
            else{
                tarjan(v,u);
                low[u]=min(low[u],low[v]);
            }
        }
        if(low[u]==dfn[u]){
            block[color+1]=1;
            while(stk[stk[0]]!=u) {
                belong[stk[stk[0]]]=color+1;
                instk[stk[stk[0]--]]=0;
                block[color+1]++;
            }
            belong[stk[stk[0]]]=++color;
            instk[stk[stk[0]--]]=0;
        }
    }
    void rebuild(Dag&dag){
        set<long long>se;
        dag.ini(color);
        for(int u=1;u<=n;u++){
            int uu=belong[u];
            for(int i=head[u];~i;i=edge[i].nex){
                int v=edge[i].v;
                int vv=belong[v];
                if(uu==vv||se.find(uu*1e6+vv)!=se.end())continue;
                se.insert(uu*1e6+vv);
                dag.add_edge(uu,vv);
            }
            dag.dp[uu][u]=1;
            dag.w[uu]=block[uu];
        }
    }
}graph;
```



# 点双联通

```c++
struct Graph{
    static const int maxn=1e5+5, maxm=3e5+5;
    struct star{int v,nex;}edge[maxm<<1];
    int head[maxn],cnt,n;
    void ini(int n){
        this->n=n; cnt=-1;
        for(int i=0;i<=n;i++) head[i]=-1;
    }
    void add_edge(int u,int v){
        edge[++cnt]=star{v,head[u]}; head[u]=cnt;
        edge[++cnt]=star{u,head[v]}; head[v]=cnt;
    }
}tree;

struct Tarjan:Graph{//割点
    int low[maxn],dfn[maxn],cut[maxn];
    int step;
    void tarjan(){
        step=0;
        for(int i=0;i<=n;i++) dfn[i]=cut[i]=0;
        for(int i=1;i<=n;i++) if(dfn[i]==0) tarjan(i,0);//多个联通快
    }
    void tarjan(int u,int father=0){//此函数不开放
        low[u]=dfn[u]=++step;
        int first=1, son=0;
        for(int i=head[u];~i;i=edge[i].nex){
            int v=edge[i].v;
            if(v==father&&!first) first=false;
            else if(dfn[v]) low[u]=min(low[u],dfn[v]);
            else{
                son++;
                tarjan(v,u);
                low[u]=min(low[u],low[v]);
                //一个顶点u是割点,当且仅当1或2
                //1.u为树根且u有多与一个子树
                //2.u不为树根且存在边(u,v)为树边，使得dfn[u]<=low[v]
                if(father!=0&&dfn[u]<=low[v]) cut[u]=1;
                if(father==0&&son>1) cut[u]=1;
            }
        }
    }
}graph;
```



边双联通

```c++
struct Graph{
    static const int maxn=1e5+5, maxm=3e5+5;
    struct star{int v,nex;}edge[maxm<<1];
    int head[maxn],cnt;
    void ini(int n){
        for(int i=0;i<=n;i++) head[i]=-1;
        cnt=-1;
    }
    void add_edge(int u,int v){
        edge[++cnt]=star{v,head[u]};
        head[u]=cnt;
        edge[++cnt]=star{u,head[v]};
        head[v]=cnt;
    }
};

struct Tarjan:Graph{//双联通分量, 割边, 桥, 边双联通缩点
    struct Bridge{int u,v;}bridge[maxn];
    int dfn[maxn],low[maxn],belong[maxn],vis[maxn],sta[maxn],sta_,nums,bridge_;
    void ini(int n){
        for(int i=0;i<=n;i++) vis[i]=0;
        bridge_=0;
        nums=0;
        Graph::ini(n);
    }
    void tarjan(int u,int father,int&step){
        low[u]=dfn[u]=++step;
        sta[++sta_]=u;
        vis[u]=1;
        bool firsttimes=true;//用于判重边
        for(int i=head[u];~i;i=edge[i].nex){
            int v=edge[i].v;
            if(v==father&&firsttimes) {
                firsttimes=false;
                continue;
            }//父边
            if(vis[v]==1) low[u]=min(low[u],dfn[v]);//回边,终点在栈中
            else {//树边
                tarjan(v,u,step);
                low[u]=min(low[u],low[v]);
                if(low[v]>dfn[u]) bridge[++bridge_]=Bridge{u,v};
            }
        }
        if(low[u]==dfn[u]){
            while(sta[sta_]!=u) belong[sta[sta_--]]=nums+1;
            belong[sta[sta_--]]=++nums;
        }
    }
}graph;
```

