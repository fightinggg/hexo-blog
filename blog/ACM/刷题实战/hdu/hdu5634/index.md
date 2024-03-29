---
date: 2019-08-13 16:57:21
updated: 2019-08-13 16:57:21
---

### name
Rikka with Phi

### decription
Rikka and Yuta are interested in Phi function (which is known as Euler's totient function).
Yuta gives Rikka an array A[1..n] of positive integers, then Yuta makes m queries. 
There are three types of queries: 

1lr 
Change A[i] into φ(A[i]), for all i∈[l,r].

2lrx 
Change A[i] into x, for all i∈[l,r].

3lr 
Sum up A[i], for all i∈[l,r].
Help Rikka by computing the results of queries of type 3.

<!---more-->

### input
The first line contains a number T(T≤100) ——The number of the testcases. And there are no more than 2 testcases with $n>10^5$
For each testcase, the first line contains two numbers n,m($n≤3×10^5,m≤3×10^5$)。
The second line contains n numbers A[i]
Each of the next m lines contains the description of the query. 
It is guaranteed that $1≤A[i]≤10^7$ At any moment.

### output
For each query of type 3, print one number which represents the answer.

### sample input
1
10 10
56 90 33 70 91 69 41 22 77 45
1 3 9
1 1 10
3 3 8
2 5 6 74
1 1 8
3 1 9
1 2 10
1 4 9
2 8 8 69
3 3 9

### sample output
80
122
86

### toturial
phi函数求不了几次就会变成1,区间修改只会让区间值变化为相同，两个修改都逐渐让区间值变成相同。所以可以用线段树维护一个区间最大值，一个区间最小值，当区间最大值等于区间最小值的时候，我们可以把求phi操作对整个区间一起做了。
第二点，这个问题如果用splay将达到更高的效率，区间赋值的时候，我们直接在splay上删除原区间，用一个节点代替，求phi同理，跑起来飞快

### code-线段树

```cpp
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
namespace math{
    const int maxn=1e7+7;
    bool no_pri[maxn]={0,1,0};
    int pri[664579+100],low[maxn],phi[maxn];
    void f_ini(){
        for(int i=2;i<maxn;i++){
            if(!no_pri[i]) low[i]=pri[++pri[0]]=i;
            for(int j=1;1ll*pri[j]*i<maxn;j++){
                no_pri[pri[j]*i]=1;
                if(i%pri[j]==0) {
                    low[pri[j]*i]=low[i]*pri[j];
                    break;
                }
                else low[pri[j]*i]=pri[j];
            }
        }

        phi[1]=1;
        for(int i=1;i<=pri[0];i++){
            for(ll mul=pri[i],ct=1;mul<maxn;mul*=pri[i],ct++){
                phi[mul]=mul/pri[i]*(pri[i]-1);// 改这里
            }
        }

        for(int i=2;i<maxn;i++){
            for(int j=1;1ll*pri[j]*i<maxn;j++){
                int x=low[i*pri[j]], y=i*pri[j]/x;
                phi[x*y]=phi[x]*phi[y];
                if(i%pri[j]==0) break;
            }
        }
    }
}

#define ml ((l+r)>>1)
#define mr (ml+1)
const int maxn=3e5+5;
int a[maxn];
int ls[maxn*2],rs[maxn*2],tot;// 树结构
int cov[maxn*2];// 懒惰标记结构
ll sum[maxn*2];int mi[maxn*2],mx[maxn*2];// 区间结构

inline void modify(int&u,int l,int r,int cov_){// 这个函数要注意重写
    if(cov_!=-1){
        cov[u]=cov_;
        sum[u]=1ll*cov_*(r-l+1);
        mi[u]=mx[u]=cov_;
    }
}

inline void push_down(int u,int l,int r){
    modify(ls[u],l,ml,cov[u]);// 这行要注意重写
    modify(rs[u],mr,r,cov[u]);// 这行要注意重写
    cov[u]=-1;// 这行要注意重写
}

inline void pushup(int u,int l,int r){
    mi[u]=min(mi[ls[u]],mi[rs[u]]);// 这行要注意重写
    mx[u]=max(mx[ls[u]],mx[rs[u]]);// 这行要注意重写
    sum[u]=sum[ls[u]]+sum[rs[u]];// 这行要注意重写
}

void updatecov(int u,int l,int r,int ql,int qr,int d){//
    if(ql<=l&&r<=qr){
        modify(u,l,r,d);// 这行要注意重写
        return;
    }
    push_down(u,l,r);
    if(ml>=ql) updatecov(ls[u],l,ml,ql,qr,d);
    if(mr<=qr) updatecov(rs[u],mr,r,ql,qr,d);
    pushup(u,l,r);
}

void updatephi(int u,int l,int r,int ql,int qr){
    if(ql<=l&&r<=qr&&mi[u]==mx[u]){
        modify(u,l,r,math::phi[mi[u]]);// 这行要注意重写
        return;
    }
    push_down(u,l,r);
    if(ml>=ql) updatephi(ls[u],l,ml,ql,qr);
    if(mr<=qr) updatephi(rs[u],mr,r,ql,qr);
    pushup(u,l,r);
}

ll query(int u,int l,int r,int ql,int qr){
    if(ql<=l&&r<=qr) return sum[u];// 这行要注意重写
    push_down(u,l,r);
    ll ret=0;// 这行要注意重写
    if(ml>=ql) ret+=query(ls[u],l,ml,ql,qr);// 这行要注意重写
    if(mr<=qr) ret+=query(rs[u],mr,r,ql,qr);// 这行要注意重写
    return ret;
}

void build(int&u,int l,int r){
    u=++tot;
    cov[u]=-1;
    if(l==r) sum[u]=mi[u]=mx[u]=a[l];
    else{
        build(ls[u],l,ml);
        build(rs[u],mr,r);
        pushup(u,l,r);
    }
}

int read(){int x;scanf("%d",&x);return x;}

int main(){
    math::f_ini();
    int t=read();
    while(t--){
        int n=read(),m=read();
        for(int i=1;i<=n;i++) a[i]=read();
        tot=0;
        int rt; build(rt,1,n);
        for(int i=1;i<=m;i++){
            int op=read(),l=read(),r=read();
            switch(op){
                case 1:updatephi(rt,1,n,l,r);break;
                case 2:updatecov(rt,1,n,l,r,read());break;
                default:printf("%lld\n",query(rt,1,n,l,r));
            }
        }
    }
}
```

### code-splay

```cpp
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
namespace math{
    const int maxn=1e7+7;
    bool no_pri[maxn]={0,1,0};
    int pri[664579+100],low[maxn],phi[maxn];
    void f_ini(){
        for(int i=2;i<maxn;i++){
            if(!no_pri[i]) low[i]=pri[++pri[0]]=i;
            for(int j=1;1ll*pri[j]*i<maxn;j++){
                no_pri[pri[j]*i]=1;
                if(i%pri[j]==0) {
                    low[pri[j]*i]=low[i]*pri[j];
                    break;
                }
                else low[pri[j]*i]=pri[j];
            }
        }

        phi[1]=1;
        for(int i=1;i<=pri[0];i++){
            for(ll mul=pri[i],ct=1;mul<maxn;mul*=pri[i],ct++){
                phi[mul]=mul/pri[i]*(pri[i]-1);// 改这里
            }
        }

        for(int i=2;i<maxn;i++){
            for(int j=1;1ll*pri[j]*i<maxn;j++){
                int x=low[i*pri[j]], y=i*pri[j]/x;
                phi[x*y]=phi[x]*phi[y];
                if(i%pri[j]==0) break;
            }
        }
    }
}

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

int read(){int x;scanf("%d",&x);return x;}

int main(){
    math::f_ini();
    int t=read();
    while(t--){
        int n=read(),m=read();
        for(int i=0;i<=n+1;i++) nu[i]=1,cov[i]=-1;
        for(int i=1;i<=n;i++) w[i]=read();
        c[nie][1]=f[nie]=nie;c[nie][0]=build(nie,0,n+1);// 左边放一个 右边放一个 刚刚好
        tot=n+1;stk[0]=0;// init rubbish

        for(int i=1;i<=m;i++){
            int op=read(),l=read(),r=read();// [1,n]->[2,n+1]
            int x=id(1+l-1),y=id(1+r+1);
            splay(x,nie);splay(y,x);
            switch(op){
                case 1:updatephi(c[y][0]);break;
                case 2:modify(c[y][0],read()),compress(c[y][0]);break;
                default:printf("%lld\n",s[c[y][0]]);
            }
            pushup(y),pushup(x);
        }
    }
}
```