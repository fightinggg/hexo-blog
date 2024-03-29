---
date: 2019-08-11 11:40:09
updated: 2019-08-11 11:40:09
---

###name
Transformation

###description
Yuanfang is puzzled with the question below: 
There are n integers, $a_1, a_2, …, a_n$. The initial values of them are 0. There are four kinds of operations.
Operation 1: Add c to each number between ax and ay inclusive. In other words, do transformation $a_k=a_k+c$, k = x,x+1,…,y.
Operation 2: Multiply c to each number between ax and ay inclusive. In other words, do transformation $a_k=a_k×c$, k = x,x+1,…,y.
Operation 3: Change the numbers between ax and ay to c, inclusive. In other words, do transformation $a_k=c$, k = x,x+1,…,y.
Operation 4: Get the sum of p power among the numbers between ax and ay inclusive. In other words, get the result of $a_x^p+a_{x+1}^p+…+a_y^p$.
Yuanfang has no idea of how to do it. So he wants to ask you to help him. 

<!---more-->

###input
There are no more than 10 test cases.
For each case, the first line contains two numbers n and m, meaning that there are n integers and m operations. 1 <= n, m <= 100,000.
Each the following m lines contains an operation. Operation 1 to 3 is in this format: "1 x y c" or "2 x y c" or "3 x y c". Operation 4 is in this format: "4 x y p". (1 <= x <= y <= n, 1 <= c <= 10,000, 1 <= p <= 3)
The input ends with 0 0.

###output
For each operation 4, output a single integer in one line representing the result. The answer may be quite large. You just need to calculate the remainder of the answer when divided by 10007.

###sample input
5 5
3 3 5 7
1 2 4 4
4 1 5 2
2 2 5 8
4 3 5 3
0 0

###sample output
307
7489

###tutorial
练习splay代替线段树

###cdoe
``` cpp
#include<bits/stdc++.h>
using namespace std;

const int mod=10007;
inline int M(int a,int b){return 1ll*a*b%mod;}
inline int M(int a,int b,int c){return M(M(a,b),c);}
inline int p2(int a){return M(a,a);}
inline int p3(int a){return M(a,a,a);}
inline int A(int a,int b){a+=b;return a>=mod?a-mod:a;}
inline int A(int a,int b,int c){return A(A(a,b),c);}
inline int A(int a,int b,int c,int d){return A(A(a,b,c),d);}

const int N=8e5+3;
int c[N][2],f[N],nie=N-1,tot;//树结构,几乎不用初始化
int nu[N],w[N],add[N],cov[N],mul[N];//值和懒惰标记结构,一定要赋初值，
int sz[N],s[N][3];//区间结构，不用赋予初值，
inline void pushup(int u){
    sz[u]=sz[c[u][0]]+sz[c[u][1]]+nu[u];// assert(sz[nie]==0);
    s[u][0]=A(s[c[u][0]][0],s[c[u][1]][0],w[u]);
    s[u][1]=A(s[c[u][0]][1],s[c[u][1]][1],p2(w[u]));
    s[u][2]=A(s[c[u][0]][2],s[c[u][1]][2],p3(w[u]));
}
inline void modify(int u,int _cov,int _mul,int _add){
    if(u==nie) return;
    if(_cov!=-1){
        s[u][0]=M(sz[u],_cov);
        s[u][1]=M(s[u][0],_cov);
        s[u][2]=M(s[u][1],_cov);
        cov[u]=_cov,mul[u]=1,add[u]=0;w[u]=_cov;
    }
    if(_mul!=1){
        s[u][0]=M(s[u][0],_mul);
        s[u][1]=M(s[u][1],p2(_mul));
        s[u][2]=M(s[u][2],p3(_mul));
        mul[u]=M(mul[u],_mul);
        add[u]=M(add[u],_mul);
        w[u]=M(w[u],_mul);
    }
    if(_add!=0){
        s[u][2]=A(s[u][2],M(sz[u],p3(_add)),M(3,s[u][0],p2(_add)),M(3,s[u][1],_add));
        s[u][1]=A(s[u][1],M(sz[u],p2(_add)),M(2,s[u][0],_add));
        s[u][0]=A(s[u][0],M(sz[u],_add));
        add[u]=A(add[u],_add);
        w[u]=A(w[u],_add);
    }
}
inline void pushdown(int u){
    if(u==nie) return;
    modify(c[u][0],cov[u],mul[u],add[u]);
    modify(c[u][1],cov[u],mul[u],add[u]);
    cov[u]=-1,mul[u]=1,add[u]=0;
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
inline int id(int x,int u=c[nie][0]){ // 查询排名为x的数的节点下标 n个数 [1,n]
    while(true){
        pushdown(u);
        if(sz[c[u][0]]>=x) u=c[u][0];
        else if(sz[c[u][0]]+nu[u]<x) x-=sz[c[u][0]]+nu[u],u=c[u][1];
        else return u;
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

//究极读入挂
inline char nc(){
    static char buf[100000],*p1=buf,*p2=buf;
    return p1==p2&&(p2=(p1=buf)+fread(buf,1,100000,stdin),p1==p2)?EOF:*p1++;
}
inline int read(){
    char ch=nc();int sum=0;
    while(!(ch>='0'&&ch<='9'))ch=nc();
    while(ch>='0'&&ch<='9')sum=sum*10+ch-48,ch=nc();
    return sum;
}

int main(){
    while(true){
        int n=read(),m=read();
        for(int i=0;i<=n+1;i++) w[i]=0,nu[i]=1,cov[i]=-1,mul[i]=1,add[i]=0;// 初始化节点信息 ,我们维护额外两个点的信息
        c[nie][1]=f[nie]=nie,c[nie][0]=build(nie,0,n+1);
        if(n==0&&m==0) break;
        for(int i=0;i<m;i++){
            int op=read(),x=id(1+read()-1),y=id(1+read()+1),p=read();
            splay(x,nie), splay(y,x);
            switch(op){
                case 1:modify(c[y][0],-1,1,p);break;// add
                case 2:modify(c[y][0],-1,p,0);break;// mulity
                case 3:modify(c[y][0],p,1,0);break;// cover
                case 4:printf("%d\n",s[c[y][0]][p-1]);break;
            }
            pushup(y), pushup(x);
        }
    }
}
```