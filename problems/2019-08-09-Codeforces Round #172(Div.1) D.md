
###name
k-Maximum Subsequence Sum

###descirption
time limit per test 4 seconds
memory limit per test 256 megabytes
Consider integer sequence $a_1, a_2, ..., a_n$. You should run queries of two types:
The query format is "0 i val". In reply to this query you should make the following assignment: $a_i$ = val.
The query format is "1 l r k". In reply to this query you should print the maximum sum of at most k non-intersecting subsegments of sequence $a_l, a_{l + 1}, ..., a_r$. Formally, you should choose at most k pairs of integers $(x_1, y_1), (x_2, y_2), ..., (x_t, y_t) (l ≤ x_1 ≤ y_1 < x_2 ≤ y_2 < ... < x_t ≤ y_t ≤ r; t ≤ k)$ such that the sum $a_{x_1
} + a_{x_1 + 1} + ... + a_{y_1} + a_{x_2} + a_{x_2 + 1} + ... + a_{y_2} + ... + a_{x_t} + a_{x_t + 1} + ... + a_{y_t}$ is as large as possible. Note that you should choose at most k subsegments. Particularly, you can choose 0 subsegments. In this case the described sum considered equal to zero

<!---more-->

###input
The first line contains integer $n (1 ≤ n ≤ 10^5)$, showing how many numbers the sequence has. The next line contains n integers a1, a2, ..., an (|ai| ≤ 500).
The third line contains integer $m (1 ≤ m ≤ 10^5)$ — the number of queries. The next m lines contain the queries in the format, given in the statement.
All changing queries fit into limits: 1 ≤ i ≤ n, |val| ≤ 500.
All queries to count the maximum sum of at most k non-intersecting subsegments fit into limits: 1 ≤ l ≤ r ≤ n, 1 ≤ k ≤ 20. It is guaranteed that the number of the queries to count the maximum sum of at most k non-intersecting subsegments doesn't exceed 10000.

###output
For each query to count the maximum sum of at most k non-intersecting subsegments print the reply — the maximum sum. Print the answers to the queries in the order, in which the queries follow in the input.

###sample input
9
9 -8 9 -1 -1 -1 9 -8 9
3
1 1 9 1
1 1 9 2
1 4 6 3

###sample output
17
25
0

###sample input
15
-4 8 -3 -10 10 4 -7 -7 0 -6 3 8 -10 7 2
15
1 3 9 2
1 6 12 1
0 6 5
0 10 -7
1 4 9 1
1 7 9 1
0 10 -3
1 4 10 2
1 3 13 2
1 4 11 2
0 15 -9
0 13 -9
0 11 -10
1 5 14 2
1 6 12 1

###sample output
14
11
15
0
15
26
18
23
8

###hint
In the first query of the first example you can select a single pair (1, 9). So the described sum will be 17.

Look at the second query of the first example. How to choose two subsegments? (1, 3) and (7, 9)? Definitely not, the sum we could get from (1, 3) and (7, 9) is 20, against the optimal configuration (1, 7) and (9, 9) with 25.

The answer to the third query is 0, we prefer select nothing if all of the numbers in the given interval are negative.

###toturial
先考虑k=1的情况, 我么你可以直接用线段树来维护，这是一个经典问题，但是当k>1的时候，我们可以这样来做，我们做k次下诉操作，取出最大字段和，然后将这一段数乘以-1，直到最大字段和为负或者执行了k次操作，如此我们就能得到最大k字段和。正确性可以用费用流来证明。

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define rep(i,j,k) for(int i=(j);i<=(k);i++)
#define ml ((l+r)>>1)
#define mr (ml+1)

inline void swap2(int&a,int&b){a*=-1;b*=-1;swap(a,b);}
struct sub{
    int maxl,maxlat;
    int minl,minlat;
    int maxr,maxrat;
    int minr,minrat;
    int maxv,maxvlat,maxvrat;
    int minv,minvlat,minvrat;
    int sum,l,r;
    void mul(int val){
        if(val==-1){
            swap2(maxl,minl);
            swap2(maxr,minr);
            swap2(maxv,minv);
            swap(maxlat,minlat);
            swap(maxrat,minrat);
            swap(maxvlat,minvlat);
            swap(maxvrat,minvrat);
            sum*=-1;
        }
    }
    void cov(int val){
        if(val>0){
            maxl=maxr=maxv=sum=val*(r-l+1);
            maxlat=maxvrat=r;
            maxrat=maxvlat=l;
            minl=minr=minv=0;
        }
        else{
            minl=minr=minv=sum=val*(r-l+1);
            minlat=minvrat=r;
            minrat=minvlat=l;
            maxl=maxr=maxv=0;
        }
    }
};
inline sub merge(const sub&a,const sub&b){
    if(a.l>a.r) return b;
    sub res=a;
    res.maxr=b.maxr;
    res.minr=b.minr;
    res.maxrat=b.maxrat;
    res.minrat=b.minrat;
    if(res.maxl<a.sum+b.maxl) res.maxl=a.sum+b.maxl,res.maxlat=b.maxlat;
    if(res.minl>a.sum+b.minl) res.minl=a.sum+b.minl,res.minlat=b.minlat;
    if(res.maxr<b.sum+a.maxr) res.maxr=b.sum+a.maxr,res.maxrat=a.maxrat;
    if(res.minr>b.sum+a.minr) res.minr=b.sum+a.minr,res.minrat=a.minrat;
    if(res.maxv<b.maxv) res.maxv=b.maxv,res.maxvlat=b.maxvlat,res.maxvrat=b.maxvrat;
    if(res.maxv<a.maxr+b.maxl) res.maxv=a.maxr+b.maxl,res.maxvlat=a.maxrat,res.maxvrat=b.maxlat;
    if(res.minv>b.minv) res.minv=b.minv,res.minvlat=b.minvlat,res.minvrat=b.minvrat;
    if(res.minv>a.minr+b.minl) res.minv=a.minr+b.minl,res.minvlat=a.minrat,res.minvrat=b.minlat;
    res.sum=a.sum+b.sum, res.l=a.l, res.r=b.r;
    return res;
}

const int maxn=1e5+5;
int ls[maxn*2],rs[maxn*2],cov[maxn*2],mul[maxn*2],a[maxn],tot;
sub s[maxn*2];

void pushup(int&u){s[u]=merge(s[ls[u]],s[rs[u]]);}
void pushdown(int&u,int l,int r){
    if(cov[u]<2e9){
        cov[ls[u]]=cov[rs[u]]=cov[u];
        mul[ls[u]]=mul[rs[u]]=1;
        s[ls[u]].cov(cov[u]);
        s[rs[u]].cov(cov[u]);
        cov[u]=2e9;
    }
    if(mul[u]==-1) {
        mul[ls[u]]*=mul[u];
        mul[rs[u]]*=mul[u];
        s[ls[u]].mul(mul[u]);
        s[rs[u]].mul(mul[u]);
        mul[u]=1;
    }
}

void build(int&u,int l,int r){
    u=++tot;
    cov[u]=2e9;
    mul[u]=1;
    s[u].l=l;
    s[u].r=r;
    if(l==r){
        s[u].cov(a[l]);
        return;
    }
    build(ls[u],l,ml);// ls[u]
    build(rs[u],mr,r);// rs[u]
    pushup(u);// s[u]
}

void update(int&u,int l,int r,int ql,int qr,int d,int flag){
    if(ql<=l&&r<=qr){
        if(flag==0) {//cover
            cov[u]=d;
            mul[u]=1;
            s[u].cov(d);
        }
        else{// multi
            mul[u]*=d;
            s[u].mul(d);
        }
        return;
    }
    pushdown(u,l,r);
    if(ql<=ml) update(ls[u],l,ml,ql,qr,d,flag);
    if(mr<=qr) update(rs[u],mr,r,ql,qr,d,flag);
    pushup(u);
}


sub query(int&u,int l,int r,int ql,int qr){
    if(ql<=l&&r<=qr) return s[u];
    pushdown(u,l,r);
    sub res; res.l=res.r+1;
    if(ql<=ml) res=merge(res,query(ls[u],l,ml,ql,qr));
    if(mr<=qr) res=merge(res,query(rs[u],mr,r,ql,qr));
    return res;
}

int main(){
    int n;scanf("%d",&n);
    rep(i,1,n) scanf("%d",&a[i]);
    tot=0;
    int rt; build(rt,1,n);
    int m;scanf("%d",&m);
    int op,i,val,l,r,k;
    while(m--){
        scanf("%d",&op);
        if(op==0){
            scanf("%d%d",&i,&val);
            update(rt,1,n,i,i,val,0);
        }
        if(op==1){
            scanf("%d%d%d",&l,&r,&k);
            int ans=0;
            vector<int>L,R;
            while(k--){
                sub res=query(rt,1,n,l,r);
                if(res.maxv<=0) break;
                ans+=res.maxv;
                L.push_back(res.maxvlat);
                R.push_back(res.maxvrat);
                update(rt,1,n,L.back(),R.back(),-1,1);
            }
            while(!L.empty()){
                update(rt,1,n,L.back(),R.back(),-1,1);
                L.pop_back();R.pop_back();
            }
            printf("%d\n",ans);
        }
    }
}
```
















