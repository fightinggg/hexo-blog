---
date: 2019-08-09 22:34:28
updated: 2019-08-09 22:34:28
---

###name
决战圆锥曲线

###descirption
数学考试，一道圆锥曲线的题难住了你，你开始疯狂地笔算。但是，这题实在太难，于是你决定每种思路多尝试尝试。

<!---more-->
你的思维过程可以转化为如下过程：
有一个随机数产生器，有个内部变量 x 初始时为 x0，每次产生随机数时它会将 x 变为 (100000005x+20150609)mod998244353，然后返回 ⌊x100⌋。（amodb 表示 a 除以 b的余数，该运算的优先级高于加减法。⌊α⌋表示 α向下取整后的结果。）初始时有 n个点，分别编号为 1,…,n，按编号从小到大顺序生成第 i个点的坐标：把横坐标赋为 i。产生一个随机数 y^，把纵坐标赋为 y^mod100001。有 m个操作，表示你的思路过程。操作共有三种：C：按顺序产生随机数 p^,y^，令 p=p^modn+1,y=y^mod100001，然后把第 p 个点的纵坐标修改为 y。R：按顺序产生随机数 p^,q^
，令 p=min{p^modn+1,q^modn+1},q=max{p^modn+1,q^modn+1}，把编号大于等于 p 小于等于 q的点的纵坐标 y改为 100000−y。Q a b c：查询操作。按顺序产生随机数 p^,q^，令 p=min{p^modn+1,q^modn+1},q=max{p^modn+1,q^modn+1}，求最小的整数 t使得：对于所有编号大于等于 p小于等于 q的点 (x,y)都满足 ax+by+cxy≤t。（a,b,c均为非负整数）

###input
第一行三个整数 n,m,x0。保证 n,m≥1，0≤x0<998244353 且 x0≠340787122。
接下来 m行，每行表示一个操作，格式如前所述。

###output
对于每个查询操作输出一个整数表示最小的 t。

###sample input
3 3 2705443
C
R
Q 872784 195599 7

###sample output
13035048532

###hint
最开始三个点的坐标分别是 (1,91263),(2,33372),(3,10601)。
第一个操作把第三个点的坐标改成了 (3,94317)。
第二个操作修改了区间 [2,3]，第二个点变成了 (2,66628)，第三个点变成了 (3,5683)。
最后一个操作询问区间 [2,3]，可以发现最小的 t 是 13035048532。

###totuirial
对于$x_i&lt;x_j$且$y_i&lt;y_j$显然i不可能是答案，据此分析，每次取出y最大的点，然后就不用考虑左边的区间了，递归下去，复杂度$nlogn^2$ 在线段树上启发式查询即可


###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define ml ((l+r)>>1)
#define mr (ml+1)

const int maxn=1e5+5;
int ls[maxn<<1],rs[maxn<<1],rev[maxn<<1],mx[maxn<<1],mi[maxn<<1],a[maxn],tot;
void pushup(int&u){
    mx[u]=max(mx[ls[u]],mx[rs[u]]);
    mi[u]=min(mi[ls[u]],mi[rs[u]]);
}
void pushdown(int&u){
    if(rev[u]){
        swap(mx[ls[u]],mi[ls[u]]);
        mx[ls[u]]=1e5-mx[ls[u]];
        mi[ls[u]]=1e5-mi[ls[u]];
        rev[ls[u]]^=1;

        swap(mx[rs[u]],mi[rs[u]]);
        mx[rs[u]]=1e5-mx[rs[u]];
        mi[rs[u]]=1e5-mi[rs[u]];
        rev[rs[u]]^=1;

        rev[u]=0;
    }
}
void build(int&u,int l,int r){
    u=++tot;
    rev[u]=0;
    if(l==r){mx[u]=mi[u]=a[l];return;}
    build(ls[u],l,ml); build(rs[u],mr,r);
    pushup(u);
}
void update1(int&u,int l,int r,int q,int d){
    if(l==r){mx[u]=mi[u]=d;return;}
    pushdown(u);
    if(q<=ml)update1(ls[u],l,ml,q,d);
    if(q>=mr)update1(rs[u],mr,r,q,d);
    pushup(u);
}
void update2(int&u,int l,int r,int ql,int qr){
    if(ql<=l&&r<=qr){
        rev[u]^=1;
        swap(mx[u],mi[u]); mx[u]=1e5-mx[u]; mi[u]=1e5-mi[u];
        return;
    }
    pushdown(u);
    if(ql<=ml) update2(ls[u],l,ml,ql,qr);
    if(mr<=qr) update2(rs[u],mr,r,ql,qr);
    pushup(u);
}
int A,B,C;
long long f(int x,int y){return 1ll*x*A+1ll*y*B+1ll*x*y*C;}

long long query(int&u,int l,int r,int ql,int qr){
    if(mx[u]==mi[u]) return f(r,mx[u]);
    pushdown(u);
    if(qr<=ml) return query(ls[u],l,ml,ql,qr);
    else if(ql>=mr) return query(rs[u],mr,r,ql,qr);
    else {
        long long f1=f(ml,mx[ls[u]]),f2=f(r,mx[rs[u]]);
        long long res=0;
        if(f1>f2){
            res=query(ls[u],l,ml,ql,qr);
            if(f2>res) res=max(res,query(rs[u],mr,r,ql,qr));
        }
        else{
            res=query(rs[u],mr,r,ql,qr);
            if(f1>res) res=max(res,query(ls[u],l,ml,ql,qr));
        }
        return res;
    }
}


int x;
int read(){
    x=(100000005ll*x+20150609)%998244353;
    return x/100;
}

int main(){
    int n,m;
    scanf("%d%d%d",&n,&m,&x);
    for(int i=1;i<=n;i++) a[i]=read()%100001;
    char s[10];
    int rt; build(rt,1,n);
    while(m--){
        scanf("%s",s);
        if(s[0]=='C'){
            int p=read()%n+1;
            int y=read()%100001;
            update1(rt,1,n,p,y);
        }
        else if(s[0]=='R'){
            int p=read()%n+1;
            int q=read()%n+1;
            if(p>q) swap(p,q);
            update2(rt,1,n,p,q);
        }
        else{
            scanf("%d%d%d",&A,&B,&C);
            int p=read()%n+1;
            int q=read()%n+1;
            if(p>q) swap(p,q);
            printf("%lld\n",query(rt,1,n,p,q));
        }
    }
}

```