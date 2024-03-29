---
date: 2019-08-16 14:50:56
updated: 2019-08-16 14:50:56
---

虚树就是把树上一些节点拿下来重新建树，插入一些lca之类的点，deltree会删除一颗树，但不会删掉他的边,所以要注意边的情况

<!---more-->

```cpp
// tree 节点0不准使用
const int maxn=5e5+5;
int head[maxn];// point
int to[maxn*2],ew[maxn*2],nex[maxn*2],tot;// edge
inline void _addedge(int u,int v,int w){to[++tot]=v,ew[tot]=w,nex[tot]=head[u],head[u]=tot;}
inline void addedge(int u,int v,int w){_addedge(u,v,w),_addedge(v,u,w);}
void deltree(int rt,int father){// deltree() and also don't forget 还原tot
    for(int i=head[rt];i;i=nex[i]) if(to[i]!=father) deltree(to[i],rt);
    head[rt]=0;
}

// 树剖lca
int dep[maxn],dad[maxn],siz[maxn],son[maxn],dfn[maxn],chain[maxn],step;
void dfs1(int u,int father){// dfs(1,0)
    siz[u]=1; son[u]=0; dad[u]=father; dep[u]=dep[father]+1;
    for(int i=head[u];i;i=nex[i]){
        if(to[i]==father) continue;
        dfs1(to[i],u);
        siz[u]+=siz[to[i]];
        if(siz[to[i]]>siz[son[u]]) son[u]=to[i]; // don't care son=0 because siz[0]=0
    }
}
void dfs2(int u,int s){// dfs(1,1) step=0 at begin
    dfn[u]=++step; chain[u]=s;
    if(son[u]) dfs2(son[u],s);
    for(int i=head[u];i;i=nex[i]){
        if(to[i]==dad[u]||to[i]==son[u]) continue;
        dfs2(to[i],to[i]);
    }
}
int getlca(int x,int y){
    while(chain[x]!=chain[y]) {
        if(dep[chain[x]]<dep[chain[y]]) swap(x,y);
        x=dad[chain[x]];
    }
    return dep[x]<dep[y]?x:y;
}

// virtual tree
bool vt[maxn];// point
void buildvt(int*vert,int nums,int base){// vert -> [1,nums]
    sort(vert+1,vert+nums+1,[](int x,int y){return dfn[x]<dfn[y];});
    int top=0;
    stk[++top]=1,vt[base+1]=vert[1]==1; // root
    rep(i,vert[1]==1?2:1,nums){
        int lca=getlca(vert[i],stk[top]);
        if(lca==stk[top]) {stk[++top]=vert[i],vt[base+vert[i]]=true;continue;}//还在链上
        while(dfn[lca]<=dfn[stk[top-1]]) addedge(base+stk[top],base+stk[top-1],0),top--;
        if(lca!=stk[top]) addedge(base+stk[top],base+lca,0),stk[top]=lca,vt[base+lca]=false;
        stk[++top]=vert[i],vt[base+vert[i]]=true;
    }
    while(top>=2){
        addedge(base+stk[top],base+stk[top-1],0);
        top--;
    }
}
```