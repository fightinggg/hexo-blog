---
date: 2019-10-19 11:29:37
updated: 2019-10-19 11:29:37
---

###name
array

###descirption
You are given an array $a_1,a_2,...,a_n(∀i∈[1,n],1≤a_i≤n)$. Initially, each element of the array is **unique**.

Moreover, there are m instructions.

Each instruction is in one of the following two formats:

1. (1,pos),indicating to change the value of $a_{pos}$ to $a_{pos}+10,000,000$;
2. (2,r,k),indicating to ask the minimum value which is **not equal** to any $a_i$ ( 1≤i≤r ) and **not less** than k.

Please print all results of the instructions in format 2.
<!---more-->

###input
The first line of the input contains an integer T(1≤T≤10), denoting the number of test cases.

In each test case, there are two integers n(1≤n≤100,000),m(1≤m≤100,000) in the first line, denoting the size of array a and the number of instructions.

In the second line, there are n distinct integers $a_1,a_2,...,a_n (∀i∈[1,n],1≤a_i≤n)$,denoting the array.
For the following m lines, each line is of format $(1,t_1) or (2,t_2,t_3)$.
The parameters of each instruction are generated by such way :

For instructions in format 1 , we defined $pos=t_1⊕LastAns$ . (It is promised that 1≤pos≤n)

For instructions in format 2 , we defined $r=t_2⊕LastAns,k=t_3⊕LastAns$. (It is promised that 1≤r≤n,1≤k≤n )

(Note that ⊕ means the bitwise XOR operator. )

Before the first instruction of each test case, LastAns is equal to 0 .After each instruction in format 2, LastAns will be changed to the result of that instruction.

(∑n≤510,000,∑m≤510,000 )

###output
For each instruction in format 2, output the answer in one line.

###sample input
3
5 9
4 3 1 2 5 
2 1 1
2 2 2
2 6 7
2 1 3
2 6 3
2 0 4
1 5
2 3 7
2 4 3
10 6
1 2 4 6 3 5 9 10 7 8 
2 7 2
1 2
2 0 5
2 11 10
1 3
2 3 2
10 10
9 7 5 3 4 10 6 2 1 8 
1 10
2 8 9
1 12
2 15 15
1 12
2 1 3
1 9
1 12
2 2 2
1 9


###sample output
1
5
2
2
5
6
1
6
7
3
11
10
11
4
8
11

###hint
note:
After the generation procedure ,the instructions of the first test case are :
2 1 1, in format 2 and r=1 , k=1
2 3 3, in format 2 and r=3 , k=3
2 3 2, in format 2 and r=3 , k=2
2 3 1, in format 2 and r=3 , k=1
2 4 1, in format 2 and r=4 , k=1
2 5 1, in format 2 and r=5 , k=1
1 3  , in format 1 and pos=3
2 5 1, in format 2 and r=5 , k=1
2 5 2, in format 2 and r=5 , k=2

the instructions of the second test case are :
2 7 2, in format 2 and r=7 , k=2
1 5  , in format 1 and pos=5
2 7 2, in format 2 and r=7 , k=2
2 8 9, in format 2 and r=8 , k=9
1 8  , in format 1 and pos=8
2 8 9, in format 2 and r=8 , k=9

the instructions of the third test case are :
1 10   , in format 1 and pos=10
2 8 9  , in format 2 and r=8 , k=9
1 7    , in format 1 and pos=7
2 4 4  , in format 2 and r=4 , k=4
1 8    , in format 1 and pos=8
2 5 7  , in format 2 and r=5 , k=7
1 1    , in format 1 and pos=1
1 4    , in format 1 and pos=4
2 10 10, in format 2 and r=10 , k=10
1 2    , in format 1 and pos=2

###toturial1
先不考虑修改，若只有查询，我们发现每次都是前缀的查询，这里显然是可以使用主席树用log的复杂度完成的，然后我们考虑修改，我们发现修改等价于删除数字，那么这样一来，又因为每个数都是独一无二的，删除只会让答案变得更小，且恰好变成删掉的数字，我们可以尝试用一个集合记录所有删掉的数字，然后用lower_bound来查询，和主席树得到的答案取得最小值，就是真正的答案。证明过程很简单，分类证明即可。

###code1
```cpp
// 主席树+set
#include<bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(int i=j;i<=int(k);++i)

inline int read(){int x;scanf("%d",&x);return x;}

const int maxn = 1e5+5;
int ls[maxn*20*1],rs[maxn*20*1],siz[maxn*20*1],tot,rt[maxn];//update用了几次，就要乘以多少
void update(int pre,int&u,int l,int r,int pos,int val){//把u按照pre复制，然后更新pos
    u=++tot;
    ls[u]=ls[pre];rs[u]=rs[pre];
    siz[u]=siz[pre]+val;
    if(l==r)return ;
    int mid=(l+r)>>1;
    if(pos<=mid) update(ls[pre],ls[u],l,mid,pos,val);
    else update(rs[pre],rs[u],mid+1,r,pos,val);
}

int query(int u,int l,int r,int ql,int qr){
    int mid=(l+r)>>1,res=1e9;
    if(ql<=l&&r<=qr){
        if(l==r)return siz[u]==0?l:1e9;
        if(siz[ls[u]]!=mid-l+1) return query(ls[u],l,mid,ql,qr);
        else return query(rs[u],mid+1,r,ql,qr);
    }
    if(ql<=mid)res=min(res,query(ls[u],l,mid,ql,qr));
    if(res!=1e9)return res;
    if(qr>=mid+1)res=min(res,query(rs[u],mid+1,r,ql,qr));
    return res;
}

int a[maxn];
int main(){
    int T=read();
    rep(times,1,T){
        tot=0;
        set<int>se;
        se.insert(1e9);
        int n=read(),m=read();
        rep(i,1,n) update(rt[i-1],rt[i],1,n+1,a[i]=read(),1);
        int lastans=0;
        rep(i,1,m){
            if(read()==1) se.insert(a[read()^lastans]);
            else{
                int r=read()^lastans,k=read()^lastans;
                printf("%d\n",lastans=min(*se.lower_bound(k),query(rt[r],1,n+1,k,n+1)));
            }
        }
    }
}
```

###toturial2
逆向思维，反转键值，题目让我们在键区间[1,r]上找到最小的不小于k的值，我们反转后变成了在值区间[k,n+1]上找到值最小的键，其键不小于k，修改操作就成了把值所对的键修改为无穷大，这个问题用普通最值线段树很轻松就能解决

###code2
```cpp
// 逆向思维 键值颠倒
#include<bits/stdc++.h>
using namespace std;
#define rep(i,j,k) for(int i=j;i<=int(k);++i)

inline int read(){int x;scanf("%d",&x);return x;}

#define ml ((l+r)>>1)
#define mr (ml+1)
const int maxn = 1e5+20;
int ls[maxn*2],rs[maxn*2],mx[maxn*2],a[maxn],pos[maxn],tot;//update用了几次，就要乘以多少
void build(int&u,int l,int r){
    u=++tot;
    if(l==r) {mx[u]=pos[l];return;}
    build(ls[u],l,ml);
    build(rs[u],mr,r);
    mx[u]=max(mx[ls[u]],mx[rs[u]]);
}

void update(int&u,int l,int r,int q,int d){
    if(l==r) {mx[u]=d;return;}
    if(q<=ml) update(ls[u],l,ml,q,d);
    else update(rs[u],mr,r,q,d);
    mx[u]=max(mx[ls[u]],mx[rs[u]]);
}

int query(int u,int l,int r,int ql,int qr,int x){// >x
    int ans=1e9;
    if(ql<=l&&r<=qr){
        if(mx[u]<=x) return 1e9;
        if(l==r) return l;
        ans=query(ls[u],l,ml,ql,qr,x);
        if(ans!=1e9) return ans;
        return query(rs[u],mr,r,ql,qr,x);
    }
    if(ml>=ql) ans=min(ans,query(ls[u],l,ml,ql,qr,x));
    if(ans!=1e9) return ans;
    if(mr<=qr) ans=min(ans,query(rs[u],mr,r,ql,qr,x));
    return ans;
}

int main(){
    int T=read();
    rep(times,1,T){
        tot=0;
        int n=read(),m=read(),rt;
        rep(i,1,n) a[i]=read(),pos[a[i]]=i;
        a[n+1]=n+1,pos[n+1]=n+1;
        build(rt,1,n+1);
        int lastans=0;
        rep(i,1,m){
            if(read()==1) {
                int val=a[read()^lastans];
                update(rt,1,n+1,val,n+1);
              //  pos[val]=n+1;
            }
            else{
                int r=read()^lastans,k=read()^lastans;
                printf("%d\n",lastans=query(rt,1,n+1,k,n+1,r));
              //  rep(i,k,n+1) if(pos[i]>r) {cout<<"        "<<i<<endl;lastans=i;break;}
            }
        }
    }
}
```