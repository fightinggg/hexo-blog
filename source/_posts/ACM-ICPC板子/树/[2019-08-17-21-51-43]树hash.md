---
date: 2019-08-17 21:51:43
updated: 2019-08-17 21:51:43
mathjax: true
---

```cpp
// tree 节点0不准使用
int head[maxn];// point
int to[maxn*2],nex[maxn*2],tot;// edge
inline void _addedge(int u,int v){to[++tot]=v,nex[tot]=head[u],head[u]=tot;}
inline void addedge(int u,int v){_addedge(u,v),_addedge(v,u);}
void deltree(int rt,int father){// deltree() and also don't forget tot
    for(int i=head[rt];i;i=nex[i]) if(to[i]!=father) deltree(to[i],rt);
    head[rt]=0;
}
//  struct tree{int rt,n;}


//tree hash
int pw[maxn*2]={1},hshmod;//pw要两倍
int *hsh,siz[maxn]; //point
int *ehsh; //edge
void dfs(int u,int father){
    siz[u]=1;
    for(int i=head[u];i;i=nex[i]){
        if(to[i]==father)continue;
        dfs(to[i],u), siz[u]+=siz[to[i]];
    }
}
void dfs1(int u,int father){// solve every edge from father->u
    for(int i=head[u];i;i=nex[i]){
        if(to[i]==father) continue;
        dfs1(to[i],u);

        vector<pii>buf;
        for(int j=head[to[i]];j;j=nex[j]){
            if(to[j]==u) continue;
            buf.emplace_back(ehsh[j],2*siz[to[j]]);
        }
        sort(buf.begin(),buf.end());
        ehsh[i]=1;// 左边放1
        for(pii x:buf) ehsh[i]=(1ll*ehsh[i]*pw[x.second]+x.first)%hshmod;
        ehsh[i]=(1ll*ehsh[i]*pw[1]+2)%hshmod;// 右边放2
    }
}
void dfs2(int u,int father,int rt){
    vector<pii>buf;
    for(int i=head[u];i;i=nex[i]) {
        if(to[i]==father) buf.emplace_back(ehsh[i],2*(siz[rt]-siz[u]));
        else buf.emplace_back(ehsh[i],2*siz[to[i]]);
    }
    sort(buf.begin(),buf.end());
    hsh[u]=1;// 左边放1
    for(pii x:buf) hsh[u]=(1ll*hsh[u]*pw[x.second]+x.first)%hshmod;
    hsh[u]=(1ll*hsh[u]*pw[1]+2)%hshmod;// 右边放2

    vector<pii>pre(buf),suf(buf);// 对后面进行处理
    int sz=suf.size();
    for(int i=1,j=sz-2;i<sz;i++,j--){
        pre[i].first=(1ll*pre[i-1].first*pw[pre[i].second]+pre[i].first)%hshmod;// merge i-1 and i
        suf[j].first=(1ll*suf[j].first*pw[suf[j+1].second]+suf[j+1].first)%hshmod;// merge j and j+1
        pre[i].second+=pre[i-1].second;
        suf[j].second+=suf[j+1].second;
    }

    for(int i=head[u];i;i=nex[i]){
        if(father==to[i]) continue;
        ehsh[i^1]=1;//左边放1
        int idx=lower_bound(buf.begin(),buf.end(),pii(ehsh[i],2*siz[to[i]]))-buf.begin();
        if(idx-1>=0) ehsh[i^1]=(1ll*ehsh[i^1]*pw[pre[idx-1].second]+pre[idx-1].first)%hshmod;// 前缀
        if(idx+1<sz) ehsh[i^1]=(1ll*ehsh[i^1]*pw[suf[idx+1].second]+suf[idx+1].first)%hshmod;// 后缀
        ehsh[i^1]=(1ll*ehsh[i^1]*pw[1]+2)%hshmod;//右边放2
        dfs2(to[i],u,rt);
    }
}
void treehash(int u,int*hsh_,int*ehsh_,int base,int hshmod_){//hash all tree of tree u
    hsh=hsh_,ehsh=ehsh_,hshmod=hshmod_;
    dfs(u,0); for(int i=1;i<=siz[u]*2;i++) pw[i]=1ll*pw[i-1]*base%hshmod;
    dfs1(u,0),dfs2(u,0,u);
}
////// end
```