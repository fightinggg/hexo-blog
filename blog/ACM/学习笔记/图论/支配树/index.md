---
date: 2019-08-31 23:51:40
updated: 2019-08-31 23:51:40
---


```cpp
#include<bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(int i=j;i<=(k);++i)
#define per(i,j,k) for(int i=j;i>=(k);--i)
#define repe(i,u) for(int i=head[u];i;i=nex[i])

// graph
const int V=3*1e5+5,E=3*2e5+5;
int head[V],deg[V];
int to[E],nex[E],edge=1;
inline void addedge1(int u,int v) {to[++edge]=v,nex[edge]=head[u],head[u]=edge,deg[v]++;}
void del(int u){repe(i,u) head[u]=0,deg[u]=0,del(to[i]);}

// dominator tree
int dad[V],sdom[V],idom[V],dfn[V],rnk[V],step;
void tarjan(int u,int father){ //if(father==0) step=0;
    dfn[u]=++step,rnk[step]=u,dad[u]=father;
    repe(i,u)if(dfn[to[i]]==0)tarjan(to[i],u);
}
int df[V],dw[V];//dsu
int find(int x){
    if(x==df[x])return x;
    int tmp=find(df[x]);
    if(dfn[sdom[dw[df[x]]]]<dfn[sdom[dw[x]]])dw[x]=dw[df[x]];
    return df[x]=tmp;
}
void Lengauer_Tarjan(int g1,int g2,int n,int s,int g3){// s是起点 g1是正向图,g2是反向图,g3是支配树
    rep(i,g1+1,g1+n) dfn[i]=0;
    step=g1; tarjan(g1+s,0);
    rep(i,g1+1,g1+n) df[i]=i,dw[i]=sdom[i]=i;// init dsu
    per(i,g1+n,g1+2){//以g1为主体，映射其他图
        int u=rnk[i];
        repe(j,u-g1+g2) {// 在g2中枚举反向边
            int v=to[j]-g2+g1;// 映射回g1
            find(v);
            if(dfn[sdom[dw[v]]]<dfn[sdom[u]])sdom[u]=sdom[dw[v]];
        }
        df[u]=dad[u];// 只有后向边产生影响，因为只有后向边的终点满足要求

        addedge1(sdom[u]-g1+g3,u-g1+g3);// g1->g3
        repe(j,dad[u]-g1+g3){//在g3中枚举边
            int v=to[j]-g3+g1; // 映射回g1
            find(v);
            idom[v]=sdom[dw[v]]==dad[u]?dad[u]:dw[v];
        }
    }
    rep(i,g1+2,g1+n) {
        int x=rnk[i];
        if(idom[x]!=sdom[x]) idom[x]=idom[idom[x]];
    }
    del(g3+s);
    rep(i,g1+1,g1+n) addedge1(idom[i]-g1+g3,i-g1+g3);
    rep(i,g1+1,g1+n) cout<<idom[i]<<" "<<sdom[i]<<" "<<i<<endl;
}

//lca
int dep[V],siz[V],son[V],chain[V];//,dad[V],dfn[V];//
void dfs1(int u,int father){//dfs1(1,0)
    dep[u]=dep[father]+1;//ini  because dep[0]=1
    dad[u]=father, siz[u]=1, son[u]=-1;
    repe(i,u){
        int v=to[i];
        dfs1(v,u);
        siz[u]+=siz[v];
        if(son[u]==-1||siz[son[u]]<siz[v]) son[u]=v;
    }
}
void dfs2(int u,int s){
    dfn[u]=++step;
    chain[u]=s;
    if(son[u]!=-1) dfs2(son[u],s);
    repe(i,u){
        int v=to[i];
        if(v!=son[u]&&v!=dad[u]) dfs2(v,v);
    }
}
int querylca(int x,int y){
    while(chain[x]!=chain[y]){
        if(dep[chain[x]]<dep[chain[y]]) swap(x,y); //dep[chain[x]]>dep[chain[y]]
        x=dad[chain[x]];
    }
    if(dep[x]>dep[y]) swap(x,y);// dep[x]<dep[y]
    return x;
}

inline int read(){int x;scanf("%d",&x);return x;}

int main(){
     freopen("/Users/s/Downloads/2019HDOJ多校3_UESTC/data/1002/1in.txt","r",stdin);
    int t=read();
    while(t--){
        int n=read()+1,m=read();
        int g1=0,g2=n,g3=2*n;  // g1是正向图,g2是反向图,g3是支配树
        rep(i,0,3*n) head[i]=deg[i]=0; edge=1;
        while(m--){
            int u=read(),v=read();
            addedge1(g1+v,g1+u);
            addedge1(g2+u,g2+v);
        }
        rep(i,1,n-1) if(deg[i]==0) addedge1(g1+n,g1+i),addedge1(g2+i,g2+n);
        Lengauer_Tarjan(g1,g2,n,n,g3);
        dfs1(g3+n,0),dfs2(g3+n,g3+n);
        int q=read();
        while(q--){
            int x=g3+read(),y=g3+read();
            printf("%d\n",dep[x]+dep[y]-dep[querylca(x,y)]-1);
        }
        return 0;
    }
}

```