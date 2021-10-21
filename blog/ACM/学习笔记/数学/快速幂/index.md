---
date: 2019-03-15 19:12:30
updated: 2021-05-06 11:48:00
---

# 简介

快速幂是能快速计算一个幂的方案，他可以作用于所有满足结合律、封闭性的二元运算，即[半群](/QSFAYC.html#%E5%8D%8A%E7%BE%A4)

# 定义

不妨假设这个二元运算为$\circ$,两个元素进行运算为$x\circ y$,当$xy$同为$x$时，不妨设$x^2=x\circ x$, 同样的$x^1=x$, 当然$x^0=e$, 还有$x^k=x^{k-1}\circ x$

# 快速幂核心思想

在半群中，只要$k=u+v$一定有$x^k=x^u\circ x^v$. 

所以我们可以把k看作一个二进制数，把$x^k$分解为$x^{2^{p_1}}\circ x^{2^{p_2}}\circ x^{2^{p_3}}\circ \circ \circ  x^{2^{p_n}}$

 这里最多分解为$\log_2(k)$个元素，而且每个元素可以由前k个元素获取，所以只需要进行$log_2(k)$次二元计算即可的到最终答案。



<!-- more -->

## 代码

```c++
T qpow(T a,int k){
    T res = getE(); // 单位元
    while(k){
        if(k&1){
            res = binaryOp(res,a); // 二元运算
        }
        a = binaryOp(a,a);
        k>>=1;
    }
    return res;
}
```



## 加法模群快速幂

在加法模群中，`getE()`定义为0，因为任何数加上0得到自身。`binaryOp`为二元运算$binaryOp(x,y)=(x+y)\mod p$。

## 乘法模群快速幂

在乘法模群中，`getE()`定义为1，因为任何数乘以1得到自身。`binaryOp`为二元运算$binaryOp(x,y)=(x\cdot y)\mod p$。

## 矩阵乘法模群快速幂

在矩阵乘法模群中，`getE()`定义为矩阵的单位元，即对角线全为1的对角矩阵。`binaryOp`为普通矩阵模乘。

## 无理数乘法快速幂

很多时候我们需要用到无理数，即设一个无理数$y=\sqrt{(c_1)}\cdot x_1+x_2$, 其中$x$为变量，$c$均为常量，一个无理数可以被唯一标识为一个二元组$(x_1,x_2)$,

这时候单位元是`getE()`=$(0,1)$,` binaryOp`为普通无理数乘法。

## 置换群快速幂

在置换中，单位元为$h=\begin{pmatrix}
1 & 2 & 3 &... &n\\
1 & 2 & 3 &... &n
\end{pmatrix}$ ,`binaryOp`为普通置换乘法。



# 十进制快速幂

有的时候，给你的k是一个10进制大数，由于我们朴素的快速幂需要使用二进制的k（后面有移位），所以会遇到一些麻烦。

当然，最简单的就是直接分解为十进制乘法。

$x^k=x^{10^{p_1}}\circ x^{10^{p_2}}\circ x^{10^{p_3}}\circ \circ \circ  x^{10^{p_n}}$

道理都是一样的。这里最多分解出$\log^{10}(k)$个元素，每个$x^{10^1}$可以从前一项直接运算推导。最多进行$\log^{10}(k)$次计算





# 代码

## 矩阵快速幂

```c++
typedef long long ll;
const int LEN=3;

void sarray_cpy(int a[][LEN],int b[][LEN],int n){
    for(int i=0;i<n;i++){// a/b可以为同一个数组
        for(int j=0;j<n;j++) b[i][j]=a[i][j];
    }
}

void sarray_mul(int a[][LEN],int b[][LEN],int ret[][LEN],int n,int mod){
    static int c[LEN][LEN];// a/b/ret可以为同一个数组
    for(int i=0;i<n;i++) {
        for(int j=0;j<n;j++){
            c[i][j]=0;
            for(int k=0;k<n;k++){
                c[i][j]=(c[i][j]+1ll*a[i][k]*b[k][j])%mod;
            }
        }
    }
    sarray_cpy(c,ret,n);
}

void sarray_qpow(int aa[][LEN],ll b,int ret[][LEN],int n,int mod){
    static int a[LEN][LEN];// aa ret可以为同一个数组
    sarray_cpy(aa,a,n);
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++) ret[i][j]=0;
        ret[i][i]=1;
    }
    while(b){
        if(b&1) sarray_mul(ret,a,ret,n,mod);
        sarray_mul(a,a,a,n,mod);
        b>>=1;
    }
}

void sarray_add(int a[][LEN],int b[][LEN],int c[][LEN],int n,int mod){
    for(int i=0;i<n;i++){// a,b,c可以为同一个数组
        for(int j=0;j<n;j++){
            c[i][j]=(a[i][j]+b[i][j])%mod;
        }
    }
}

// a^0 a^1 a^2 a^3 ... a^b
void sarray_sum(int a[][LEN],ll b,int ret[][LEN],int n,int mod){
    static int tmp[LEN][LEN];
    if(b==0) sarray_qpow(a,b,ret,n,mod);
    else{
        ll mid=(b-1)>>1;
        sarray_sum(a,mid,ret,n,mod);
        sarray_qpow(a,mid+1,tmp,n,mod);
        for(int i=0;i<n;i++) tmp[i][i]=(tmp[i][i]+1)%mod;
        sarray_mul(ret,tmp,ret,n,mod);
        if((b&1)==0) {
            sarray_mul(ret,a,ret,n,mod);
            for(int i=0;i<n;i++) ret[i][i]=(ret[i][i]+1)%mod;
        }
    }
}

int trans[LEN][LEN]={
    1,1,1,
    1,0,0,
    0,1,0
};

```



## 十进制快速幂

```c++
#include<bits/stdc++.h>
using namespace std;

void mul(const int a[2][2],const int b[2][2],int c[2][2],int mod){
    int res[2][2]={};
    for(int i=0;i<2;i++){
        for(int j=0;j<2;j++){
            for(int k=0;k<2;k++) res[i][j]=(res[i][j]+1ll*a[i][k]*b[k][j])%mod;
        }
    }
    memcpy(c,res,sizeof(res));
}

void qpow(const int aa[2][2],int b,int c[2][2],int mod){
    int a[2][2]; memcpy(a,aa,sizeof(a));
    int res[2][2]={
            1,0,
            0,1
    };
    while(b){
        if(b&1) mul(res,a,res,mod);//res=1ll*res*a%mod;
        mul(a,a,a,mod);//a=1ll*a*a%mod;
        b>>=1;
    }
    memcpy(c,res,sizeof(res));
}

void qpow(const int aa[2][2],char*b,int ed,int c[2][2],int mod){
    int a[2][2]; memcpy(a,aa,sizeof(a));
    int res[2][2]={
            1,0,
            0,1
    };
    while(ed>=0){
        int t[2][2];
        qpow(a,b[ed]-'0',t,mod); mul(res,t,res,mod);//res=res*qpow(a,b[ed]-'0',mod);
        qpow(a,10,a,mod);
        ed--;// b/=10
    }
    memcpy(c,res,sizeof(res));
}

const int maxn=1e6+6;
char s[maxn];
int main(){
    int x0,x1,a,b,mod;
    scanf("%d%d%d%d%s%d",&x0,&x1,&a,&b,s,&mod);
    int trans[2][2]={
            a,b,
            1,0
    };
    int ans[2][2]={
            x1,0,
            x0,0
    };
    int trans2[2][2];
    qpow(trans,s,int(strlen(s))-1,trans2,mod);
    mul(trans2,ans,ans,mod);
    cout<<ans[1][0]<<endl;
}
```
