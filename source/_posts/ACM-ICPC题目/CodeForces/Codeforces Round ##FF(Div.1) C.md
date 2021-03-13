---
date: 2019-08-09 13:34:52
updated: 2019-08-09 13:34:52
mathjax: true
---

###name
DZY Loves Fibonacci Numbers

###discription
time limit per test:4 seconds
memory limit per test:256 megabytes
In mathematical terms, the sequence $F_n$ of Fibonacci numbers is defined by the recurrence relation

$F_1 = 1; F_2 = 1; F_n = F_{n - 1} + F_{n - 2} (n > 2)$.
DZY loves Fibonacci numbers very much. Today DZY gives you an array consisting of n integers: $a_1, a_2, ..., a_n$. Moreover, there are m queries, each query has one of the two types:

Format of the query "1 l r". In reply to the query, you need to add $F_{i - l + 1}$ to each element ai, where l ≤ i ≤ r.
Format of the query "2 l r". In reply to the query you should output the value of  modulo 1000000009 (10^9 + 9).
Help DZY reply to all the queries.

<!---more-->

###input
The first line of the input contains two integers n and m (1 ≤ n, m ≤ 300000). The second line contains n integers $a_1, a_2, ..., a_n (1 ≤ a_i ≤ 10^9)$ — initial array a.

Then, m lines follow. A single line describes a single query in the format given in the statement. It is guaranteed that for each query inequality 1 ≤ l ≤ r ≤ n holds.

###output
For each query of the second type, print the value of the sum on a single line.

###sample input
4 4
1 2 3 4
1 1 4
2 1 4
1 2 4
2 1 3

###sample output
17
12

###hint
After the first query, a = [2, 3, 5, 7].
For the second query, sum = 2 + 3 + 5 + 7 = 17.
After the third query, a = [2, 4, 6, 9].
For the fourth query, sum = 2 + 4 + 6 = 12.

###toturial
斐波那契数列在模$10^9+7$的时候,可以写成这样的形式 $F_n=276601605(691504013^n − 308495997^n)$因为5是一个二次剩余，于是题目就转化为了区间加上等比数列，区间和查询了，加等比数列我们可以直接记录首项然后合并懒惰标记,注意预处理快速幂就能过了。

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define rep(i,j,k) for(int i=(j);i<=(k);i++)

const int mod=1e9+9,mul=276601605,b0=691504013,b1=308495997;
const int maxn=3e5+55;

int qp[2][maxn];
void qpowini(){
    qp[0][0]=qp[1][0]=1;
    int b[2]={b0,b1};
    rep(i,0,1)rep(j,1,maxn-1) qp[i][j]=1ll*qp[i][j-1]*b[i]%mod;
}

int qpow(int a,int b){
    if(b>=maxn){
        int res=1;
        while(b){
            if(b&1) res=1ll*res*a%mod;
            a=1ll*a*a%mod;
            b>>=1;
        }
        return res;
    }
    if(a==b0) return qp[0][b];
    if(a==b1) return qp[1][b];
    assert(false);
}

int fenmu0=qpow((1-b0+mod)%mod,mod-2);
int fenmu1=qpow((1-b1+mod)%mod,mod-2);

int f0(int a1,int n){
    int fenzi=1ll*a1*(1-qpow(b0,n)+mod)%mod;
    return 1ll*fenzi*fenmu0%mod;
}
int f1(int a1,int n){
    int fenzi=1ll*a1*(1-qpow(b1,n)+mod)%mod;
    return 1ll*fenzi*fenmu1%mod;
}

#define ml ((l+r)>>1)
#define mr (ml+1)
int ls[maxn*2],rs[maxn*2],fst[2][maxn*2],sum[maxn*2],a[maxn],tot;

void pushup(int&u){sum[u]=(sum[ls[u]]+sum[rs[u]])%mod;}
void pushson(int&u,int l,int r,int d0,int d1){
    sum[u]=(0ll+sum[u]+f0(d0,r-l+1)+f1(d1,r-l+1))%mod;
    fst[0][u]=(fst[0][u]+d0)%mod;
    fst[1][u]=(fst[1][u]+d1)%mod;
}

void pushdown(int&u,int l,int r){
    pushson(ls[u],l,ml,fst[0][u],fst[1][u]);
    pushson(rs[u],mr,r,1ll*fst[0][u]*qpow(b0,ml-l+1)%mod,1ll*fst[1][u]*qpow(b1,ml-l+1)%mod);
    fst[0][u]=fst[1][u]=0;
}

void build(int&u,int l,int r){
    u=++tot;
    fst[0][u]=fst[1][u]=0;
    if(l==r){
        sum[u]=a[l];
        return;
    }
    build(ls[u],l,ml);
    build(rs[u],mr,r);
    pushup(u);
}

void update(int&u,int l,int r,int ql,int qr,int d0,int d1){
    if(ql<=l&&r<=qr){
        pushson(u,l,r,1ll*d0*qpow(b0,l-ql)%mod,1ll*d1*qpow(b1,l-ql)%mod);
        return;
    }
    pushdown(u,l,r);
    if(ql<=ml) update(ls[u],l,ml,ql,qr,d0,d1);
    if(mr<=qr) update(rs[u],mr,r,ql,qr,d0,d1);
    pushup(u);
}

int query(int&u,int l,int r,int ql,int qr){
    if(ql<=l&&r<=qr) return sum[u];
    int res=0;
    pushdown(u,l,r);
    if(ql<=ml) res+=query(ls[u],l,ml,ql,qr);
    if(mr<=qr) res+=query(rs[u],mr,r,ql,qr);
    return res%mod;
}

int main(){
    qpowini();
    int n,m; scanf("%d%d",&n,&m);
    rep(i,1,n) scanf("%d",&a[i]);
    tot=0;
    int rt;
    build(rt,1,n);
    rep(i,1,m){
        int u,l,r; scanf("%d%d%d",&u,&l,&r);
        if(u==1) update(rt,1,n,l,r,1ll*mul*b0%mod,1ll*(mod-mul)*b1%mod);
        else printf("%d\n",query(rt,1,n,l,r));
    }
}
```