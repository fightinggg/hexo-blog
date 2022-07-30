#include<bits/stdc++.h>
using namespace std;

//tree
const int V=1e5+5,E=V*2;
int head[V],cnt,n;
int to[E],nex[E],m;
void ini(int n_){n=n_;cnt=-1;for(int i=0;i<=n;i++) head[i]=-1;}
void addedge(int u,int v){to[++cnt]=v;nex[cnt]=head[u];head[u]=cnt;}

int dep[V],dad[V],siz[V],son[V],chain[V],dfn[V];//
void dfs1(int u,int father){//dfs1(1,0)
    dep[u]=dep[father]+1;//ini  because dep[0]=1
    dad[u]=father, siz[u]=1, son[u]=-1;
    for(int i=head[u];~i;i=nex[i]){
        int v=to[i];
        if(v==father)continue;
        dfs1(v,u);
        siz[u]+=siz[v];
        if(son[u]==-1||siz[son[u]]<siz[v]) son[u]=v;
    }
}
void dfs2(int u,int s,int&step){
    dfn[u]=++step;
    chain[u]=s;
    if(son[u]!=-1) dfs2(son[u],s,step);
    for(int i=head[u];~i;i=nex[i]){
        int v=to[i];
        if(v!=son[u]&&v!=dad[u]) dfs2(v,v,step);
    }
}
int query(int x,int y,int k){
    int res=0;
    while(chain[x]!=chain[y]){
        if(dep[chain[x]]<dep[chain[y]]) swap(x,y); //dep[chain[x]]>dep[chain[y]]
        res+=segtree::query(dfn[chain[x]],dfn[x],k);// [左，右，值]
        x=dad[chain[x]];
    }
    if(dep[x]>dep[y]) swap(x,y);// dep[x]<dep[y]
    return res+segtree::query(dfn[x],dfn[y],k);// [左,右,值]
}