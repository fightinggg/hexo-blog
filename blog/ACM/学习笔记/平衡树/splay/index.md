---
date: 2019-08-13 15:00:35
updated: 2019-08-13 15:00:35
---

```cpp
//初始化时要初始化tot和stk[0]
const int N=3e5+3;
int c[N][2],f[N],stk[N],nie=N-1,tot;//树结构,几乎不用初始化
int nu[N],w[N],cov[N];//值和懒惰标记结构,一定要赋初值，
int sz[N],mx[N],mi[N]; long long s[N];//区间结构，不用赋予初值，

inline void pushfrom(int u,int son){// assert(son!=nie)
    sz[u]+=sz[son],mx[u]=max(mx[u],mx[son]),mi[u]=min(mi[u],mi[son]),s[u]+=s[son];
}
inline void pushup(int u){// assert(u!=nie)
    sz[u]=nu[u],mi[u]=mx[u]=w[u],s[u]=1ll*w[u]*nu[u];
    if(c[u][0]!=nie) pushfrom(u,c[u][0]);
    if(c[u][1]!=nie) pushfrom(u,c[u][1]);
}
inline void modify(int u,int _cov){// assert(u!=nie)
    if(_cov!=-1) {
        w[u]=mx[u]=mi[u]=_cov;
        s[u]=1ll*sz[u]*_cov;
    }
}
inline void pushdown(int u){
    if(u==nie||cov[u]==-1) return;
    if(c[u][0]!=nie) modify(c[u][0],cov[u]);
    if(c[u][1]!=nie) modify(c[u][1],cov[u]);
    cov[u]=-1;
}
inline void rotate(int x){// rotate后x的区间值是错误的，需要pushup(x)
    int y=f[x],z=f[y],xis=c[y][1]==x,yis=c[z][1]==y;
    f[x]=z,f[y]=x,f[c[x][xis^1]]=y;//father
    c[z][yis]=x,c[y][xis]=c[x][xis^1],c[x][xis^1]=y;//son
    pushup(y);
}
inline void splay(int x,int aim){//由于rotate后x的区间值不对，所以splay后x的区间值依旧不对，需要pushup(x)
    while(f[x]!=aim){
        int y=f[x],z=f[y];
        if(z!=aim) (c[y][0]==x)^(c[z][0]==y)?rotate(x):rotate(y);// 同一个儿子先旋转y
        rotate(x);
    }
}
void del(int u){// del compress newnode decompress 是一套独立的函数，可以直接删除，也可以与上面的代码共存
    stk[++stk[0]]=u;
    if(c[u][0]!=nie) del(c[u][0]);
    if(c[u][1]!=nie) del(c[u][1]);
}
inline void compress(int u){ // 压缩区间，将节点丢进栈 assert(u!=nie)
    if(c[u][0]!=nie) del(c[u][0]);
    if(c[u][1]!=nie) del(c[u][1]);
    c[u][0]=c[u][1]=nie,nu[u]=sz[u];
}
inline int newnode(int father,int val,int siz){//
    int u=stk[0]==0?(++tot):stk[stk[0]--];
    f[u]=father,c[u][0]=c[u][1]=nie; //树结构
    w[u]=val,nu[u]=siz,cov[u]=-1; //值和懒惰标记结构,
    sz[u]=siz,mi[u]=mx[u]=val,s[u]=1ll*val*siz;//区间结构
    return u;
}
inline void decompress(int x,int u){// 解压区间并提取第x个值 assert(u!=nie)
    int ls=c[u][0],rs=c[u][1];
    if(x>1) c[u][0]=newnode(u,w[u],x-1),c[c[u][0]][0]=ls;
    if(x<nu[u]) c[u][1]=newnode(u,w[u],nu[u]-x),c[c[u][1]][1]=rs;
    nu[u]=1;
}
inline int id(int x,int u=c[nie][0]){ // 查询排名为x的数的节点下标 n个数 [1,n]
    while(true){
        pushdown(u);
        if(sz[c[u][0]]>=x) u=c[u][0];
        else if(sz[c[u][0]]+nu[u]<x) x-=sz[c[u][0]]+nu[u],u=c[u][1];
        else{
            if(nu[u]!=1) decompress(x,u);
            return u;
        }
    }
}
int build(int father,int l,int r){// 把区间l,r建树，返回根(l+r)>>1
    int u=(l+r)>>1;
    f[u]=father;
    c[u][0]=l<=u-1?build(u,l,u-1):nie;
    c[u][1]=r>=u+1?build(u,u+1,r):nie;
    pushup(u);
    return u;
}

void updatephi(int u){
    pushdown(u);
    if(c[u][0]!=nie) updatephi(c[u][0]);
    if(c[u][1]!=nie) updatephi(c[u][1]);
    w[u]=math::phi[w[u]];
    pushup(u);
    if(nu[u]!=1&&mi[u]==mx[u]) compress(u);
}
```