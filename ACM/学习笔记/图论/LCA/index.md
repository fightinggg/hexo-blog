---
date: 2019-05-12 01:07:43
updated: 2019-05-12 01:07:43
---



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

struct Lca:Graph{// 不要忘记ini
    int dep[maxn],dad[maxn],siz[maxn],son[maxn],chain[maxn],dfn[maxn];
    void dfs1(int u,int father){//dfs1(1,0)
        dep[u]=dep[father]+1;//ini
        dad[u]=father;
        siz[u]=1;
        son[u]=-1;
        for(int i=head[u];~i;i=edge[i].nex){
            int v=edge[i].v;
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
        for(int i=head[u];~i;i=edge[i].nex){
            int v=edge[i].v;
            if(v!=son[u]&&v!=dad[u]) dfs2(v,v,step);
        }
    }
    int lca(int x,int y){
        while(chain[x]!=chain[y]){
            if(dep[chain[x]]<dep[chain[y]]) swap(x,y);//dep[chain[x]]>dep[chain[y]]
            x=dad[chain[x]];
        }
        return dep[x]<dep[y]?x:y;
    }
}tree;
```
