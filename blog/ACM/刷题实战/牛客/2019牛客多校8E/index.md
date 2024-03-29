---
date: 2019-08-15 19:11:11
updated: 2019-08-15 19:11:11
---

###name
explorer

###description
Gromah and LZR have entered the fifth level. Unlike the first four levels, they should do some moves in this level.

There are nvertices and m bidirectional roads in this level, each road is in format (u,v,l,r) , which means that vertex u and v are connected by this road, but the sizes of passers should be in interval [l,r] . Since passers with small size are likely to be attacked by other animals and passers with large size may be blocked by some narrow roads.

Moreover, vertex 1 is the starting point and vertex n is the destination. Gromah and LZR should go from vertex 1 to vertex n to enter the next level.

At the beginning of their exploration, they may drink a magic potion to set their sizes to a fixed positive integer. They want to know the number of positive integer sizes that make it possible for them to go from 1 to n .

Please help them to find the number of valid sizes.

<!---more-->

###input
The first line contains two positive integers n,m , denoting the number of vertices and roads.
Following m lines each contains four positive integers u,v,l,r  , denoting a bidirectional road (u,v,l,r)  .
$1≤n,m≤10^5 ,1≤u\lt v≤n,1≤l≤r≤10^9$

###output
Print a non-negative integer in a single line, denoting the number of valid sizes.

###sample input
5 5
1 2 1 4
2 3 1 2
3 5 2 4
2 4 1 3
4 5 3 4

###sample output
2

###hint
There are 2 valid sizes : 2 and 3.
For size 2, there exists a path 1→2→3→5.
For size 3, there exists a path 1→2→4→5.

###toturial
把l,r看作限制，从小到大枚举区间，则表现为删边加边，然后问图的联通情况。这可以用直接lct维护。

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

static const int N=4e5+555;
int X[N],Y[N],L[N],R[N],sa[2][N];
int n,m;

int top,c[N][2],f[N],tim[N],sta[N],rev[N],val[N];
void ini(){
    for(int i=0;i<=n;i++)c[i][0]=c[i][1]=f[i]=rev[i]=0,tim[i]=i,val[i]=2e9;
    for(int i=n+1;i<=n+m;i++)c[i][0]=c[i][1]=f[i]=rev[i]=0,tim[i]=i,val[i]=R[i-n];
}
inline void pushup(int x){
    tim[x]=x;
    if(val[tim[c[x][0]]]<val[tim[x]]) tim[x]=tim[c[x][0]];
    if(val[tim[c[x][1]]]<val[tim[x]]) tim[x]=tim[c[x][1]];
}
inline void pushdown(int x){
    int l=c[x][0],r=c[x][1];
    if(rev[x]){
        rev[l]^=1;rev[r]^=1;rev[x]^=1;
        swap(c[x][0],c[x][1]);
    }
}
inline bool isroot(int x){return c[f[x]][0]!=x&&c[f[x]][1]!=x;}
inline void rotate(int x){
    int y=f[x],z=f[y],xis=c[y][1]==x,yis=c[z][1]==y;//
    if(!isroot(y)) c[z][yis]=x;//son
    f[x]=z;f[y]=x;f[c[x][xis^1]]=y;//father
    c[y][xis]=c[x][xis^1];c[x][xis^1]=y;//son
    pushup(y);
}
inline void splay(int x){
    top=1;sta[top]=x;//init stack
    for(int i=x;!isroot(i);i=f[i])sta[++top]=f[i];//update stack
    for(int i=top;i;i--)pushdown(sta[i]);//pushroad
    while(!isroot(x)){
        int y=f[x],z=f[y];
        if(!isroot(y)) (c[y][0]==x)^(c[z][0]==y)?rotate(y):rotate(x);
        rotate(x);
    }pushup(x);
}
inline void access(int x){for(int t=0;x;t=x,x=f[x])splay(x),c[x][1]=t,pushup(x);}
inline int treeroot(int x){access(x);splay(x);while(c[x][0])x=c[x][0];return x;}
inline void makeroot(int x){access(x);splay(x);rev[x]^=1;}// 让x变成根
inline void cut(int x,int y){makeroot(x);access(y);splay(y);f[x]=c[y][0]=0;pushup(y);}
inline void link(int x,int y){makeroot(x);f[x]=y;}
inline void cut2(int i){
    makeroot(X[i]);
    if(treeroot(Y[i])!=X[i]) return;
    cut(X[i],n+i),cut(Y[i],n+i);
}
inline void link2(int i){
    makeroot(X[i]);
    if(treeroot(Y[i])==X[i]) {// access(y) splay(y)
        int p=tim[Y[i]]-n;
        if(R[p]>=R[i]) return;// 这个非常重要
        cut(X[p],n+p),cut(Y[p],n+p);
    }
    link(X[i],n+i),link(Y[i],n+i);
}

int main(){
    scanf("%d%d",&n,&m);
    for(int i=1;i<=m;i++) scanf("%d%d%d%d",X+i,Y+i,L+i,R+i),sa[0][i]=sa[1][i]=i;
    ini();

    sort(sa[0]+1,sa[0]+1+m,[](int a,int b){return L[a]<L[b];});
    sort(sa[1]+1,sa[1]+1+m,[](int a,int b){return R[a]<R[b];});
    vector<int>disc;
    for(int i=1;i<=m;i++) disc.push_back(L[i]),disc.push_back(R[i]+1);// [)
    sort(disc.begin(),disc.end());
    disc.erase(unique(disc.begin(),disc.end()),disc.end());

    int ans=0;
    for(int t=0,i=1,j=1;t<disc.size();t++){//   [T,T+1)
        while(i<=m&&L[sa[0][i]]==disc[t]) link2(sa[0][i++]);
        while(j<=m&&R[sa[1][j]]+1==disc[t]) cut2(sa[1][j++]);
        makeroot(1);if(treeroot(n)==1) ans+=disc[t+1]-disc[t];
    }
    cout<<ans<<endl;
}
```