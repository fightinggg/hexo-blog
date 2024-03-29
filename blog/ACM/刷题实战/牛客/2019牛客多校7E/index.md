---
date: 2019-08-08 20:29:37
updated: 2019-08-08 20:29:37
---

###name
Find the median

###descirption
Let median of some array be the number which would stand in the middle of this array if it was sorted beforehand. If the array has even length let median be smallest of of two middle elements. For example, median of the array [10,3,2,3,2] is 3 Median of the array [1,5,8,1] is 1

At first, you're given an empty sequence. There are N operations. The i-th operation contains two integers$L_i$and$R_i$.This means that adding $R_i-L_i+1$ integers $L_i,L_i+1,...,R_i$into the sequence. After each operation, you need to find the median of the sequence.
<!---more-->

###input
The first line of the input contains an integer N(1≤N≤400000)as described above.

The next two lines each contains six integers in the following format, respectively:
- $X_1X_2A_1B_1C_1M_1$
- $Y_1Y_2A_2B_2C_2M_2$

These values are used to generate $L_i,R_i$as follows:

We define:
- $X_i=(A_1X_{i-1}+B_1X_{i-2}+C_1)module\quad  M_1,for\quad  i=3\quad to\quad  N$
- $Y_i=(A_2Y_{i-1}+B_2Y_{i-2}+C_2)module\quad  M_1,for\quad  i=3\quad to\quad  N$

We also define:
- $L_i=min(X_i,Y_i)+1,for\quad  i=1\quad  to\quad  N$
- $R_i=max(x_i,Y_i)+1,for\quad  i=1\quad  to\quad  N$

Limits:
$1≤N≤400000$
$0≤A_1,B_1,C_1,X_1,X_2<M_1$
$0≤A_2,B_2,C_2,Y_1,Y_2<M_2$
$1≤M1,M2≤10^9$

###output
You should output N lines. Each line contains an integer means the median.

###sample input
5
3 1 4 1 5 9
2 7 1 8 2 9

###sample output
3
4
5
4
5

###hint
L = [3, 2 ,4, 1, 7]
R = [4, 8, 8, 3, 9]

###toturial
离散化区间后用权值线段树维护区间和,直接在树上二分答案

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

vector<int>disc;
int getid(int x){return lower_bound(disc.begin(),disc.end(),x)-disc.begin();}

#define ml ((l+r)>>1)
#define mr (ml+1)
const int maxn = 8e5+55;
int ls[maxn*2],rs[maxn*2],add[maxn*2],tot;//update用了几次，就要乘以多少
long long siz[maxn*2];

void maketrue(int&u){if(u==0) u=++tot,ls[u]=rs[u]=siz[u]=add[u]=0;}
void pushup(int u,int l,int r){siz[u]=siz[ls[u]]+siz[rs[u]];}
void pushdown(int u,int l,int r){
    maketrue(ls[u]);
    maketrue(rs[u]);
    add[ls[u]]+=add[u];
    add[rs[u]]+=add[u];
    siz[ls[u]]+=add[u]*(disc[ml+1]-disc[l]);
    siz[rs[u]]+=add[u]*(disc[r+1]-disc[mr]);
    add[u]=0;
}

void update(int&u,int l,int r,int ql,int qr){//把u按照pre复制，然后更新pos
    maketrue(u);
    if(ql<=l&&r<=qr){
        siz[u]+=disc[r+1]-disc[l];
        add[u]++;
        return;
    }
    pushdown(u,l,r);
    if(ml>=ql)update(ls[u],l,ml,ql,qr);
    if(mr<=qr)update(rs[u],mr,r,ql,qr);
    pushup(u,l,r);
}

int query(int&u,int l,int r,long long k){
    maketrue(u);
    if(l==r) {
        int ct=siz[u]/(disc[l+1]-disc[l]);
        return disc[l]-1+(k+ct-1)/ct;
    }
    pushdown(u,l,r);
    if(siz[ls[u]]>=k) return query(ls[u],l,ml,k);
    else return query(rs[u],mr,r,k-siz[ls[u]]);
}

int main(){
    long long n,x1,x2,a1,b1,c1,m1,y1,y2,a2,b2,c2,m2;
    scanf("%lld%lld%lld%lld%lld%lld%lld%lld%lld%lld%lld%lld%lld",&n,&x1,&x2,&a1,&b1,&c1,&m1,&y1,&y2,&a2,&b2,&c2,&m2);
    vector<int> x(n+1),y(n+1);
    x[1]=x1; x[2]=x2;
    y[1]=y1; y[2]=y2;
    for(int i=3;i<=n;i++){
        x[i]=(1ll*a1*x[i-1]+1ll*b1*x[i-2]+c1)%m1;
        y[i]=(1ll*a2*y[i-1]+1ll*b2*y[i-2]+c2)%m2;
    }
    for(int i=1;i<=n;i++) {
        x[i]++,y[i]++;
        if(x[i]>y[i]) swap(x[i],y[i]);
    }
    for(int i=1;i<=n;i++) disc.push_back(x[i]),disc.push_back(y[i]+1);
    disc.push_back(-2e9),disc.push_back(2e9);
    sort(disc.begin(),disc.end());
    disc.erase(unique(disc.begin(),disc.end()),disc.end());

    tot=0;
    long long sum=0;
    int rt=0;
    for(int i=1;i<=n;i++){
        sum+=y[i]-x[i]+1;
        update(rt,1,disc.size(),getid(x[i]),getid(y[i]+1)-1);
        printf("%d\n",query(rt,1,disc.size(),(sum+1)/2));
    }
}
```