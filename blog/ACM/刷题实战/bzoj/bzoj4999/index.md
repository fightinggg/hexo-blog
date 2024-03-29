---
date: 2019-08-12 20:40:28
updated: 2019-08-12 20:40:28
---

### name
This Problem Is Too Simple！

### description
给您一颗树，每个节点有个初始值。
现在支持以下两种操作：
1. C i x(0<=x<2^31) 表示将i节点的值改为x。
2. Q i j x(0<=x<2^31) 表示询问i节点到j节点的路径上有多少个值为x的节点。

<!---more-->

### input
第一行有两个整数N,Q（1 ≤N≤ 100,000；1 ≤Q≤ 200,000），分别表示节点个数和操作个数。
下面一行N个整数，表示初始时每个节点的初始值。
接下来N-1行，每行两个整数x,y，表示x节点与y节点之间有边直接相连（描述一颗树）。
接下来Q行，每行表示一个操作，操作的描述已经在题目描述中给出。

### output
对于每个Q输出单独一行表示所求的答案。

### sample input
5 6
10 20 30 40 50
1 2
1 3
3 4
3 5
Q 2 3 40
C 1 40
Q 2 3 40
Q 4 5 30
C 3 10
Q 4 5 30

### sample output
0
1
1
0

### toturial
树剖后直接对每一个数值都维护一颗权制线段树，动态开点即可

### code
```cpp
#include<bits/stdc++.h>
using namespace std;

int n;
namespace segtree{
    const int maxn=4e5+5;
    int ls[maxn*20],rs[maxn*20],siz[maxn*20];
    int rt[maxn],a[maxn],tot,vis[maxn];

    void update2(int&u,int l,int r,int pos,int val){
        if(u==0) u=++tot,assert(u<maxn*20),ls[u]=rs[u]=siz[u]=0;
        siz[u]+=val;
        if(l==r) return;
        int mid=(l+r)>>1;
        if(pos<=mid) update2(ls[u],l,mid,pos,val);
        else update2(rs[u],mid+1,r,pos,val);
    }
    void update(int x,int w){// a[x]=w
        if(vis[x]==1) update2(rt[a[x]],1,n,x,-1);
        a[x]=w; vis[x]=1;
        update2(rt[w],1,n,x,1);
    }

    int query2(int u,int l,int r,int ql,int qr){
        if(ql<=l&&r<=qr) return siz[u];
        int res=0,mid=(l+r)>>1;
        if(ql<=mid) res+=query2(ls[u],l,mid,ql,qr);
        if(mid+1<=qr) res+=query2(rs[u],mid+1,r,ql,qr);
        return res;
    }
    int query(int l,int r,int w){// a[?]=w
        return query2(rt[w],1,n,l,r);
    }
}

const int maxn=1e5+5;
int to[maxn<<1],nex[maxn<<1],head[maxn],w[maxn],cnt;
void ini(){cnt=-1;for(int i=0;i<=n;i++) head[i]=-1;}
void add_edge(int u,int v){to[++cnt]=v;nex[cnt]=head[u];head[u]=cnt;}

int dep[maxn],dad[maxn],siz[maxn],son[maxn],chain[maxn],dfn[maxn];//
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

vector<int>disc;
int getid(int x){return lower_bound(disc.begin(),disc.end(),x)-disc.begin()+1;}

char op[maxn*2];
int x[maxn*2],y[maxn*2],z[maxn*2];

int main(){
    int q;scanf("%d%d",&n,&q);
    ini();
    for(int i=1;i<=n;i++) scanf("%d",&w[i]),disc.push_back(w[i]);
    for(int i=2;i<=n;i++) {
        int u,v; scanf("%d%d",&u,&v);
        add_edge(u,v);add_edge(v,u);
    }
    for(int i=1;i<=q;i++){
        scanf(" %c%d%d",op+i,x+i,y+i);
        if(op[i]=='Q') scanf("%d",z+i),disc.push_back(z[i]);
        else disc.push_back(y[i]);
    }
    sort(disc.begin(),disc.end());
    disc.erase(unique(disc.begin(),disc.end()),disc.end());

    int step=0;
    dfs1(1,0),dfs2(1,0,step);
    for(int i=1;i<=n;i++) segtree::update(dfn[i],getid(w[i]));
    for(int i=1;i<=q;i++){
        if(op[i]=='Q') {
            int id=getid(z[i]);
            printf("%d\n",disc[id-1]==z[i]?query(x[i],y[i],id):0);
        }
        else segtree::update(dfn[x[i]],getid(y[i]));
    }
}
```