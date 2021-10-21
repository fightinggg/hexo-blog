---
date: 2019-02-25 21:57:53
updated: 2019-02-25 21:57:53
---

# 链接

http://codeforces.com/contest/1117/problem/D

# 题意

你有两个数字：1和m，

你需要构造一个和为n的序列，问你能构造出多少种序列。答案对$10^9+7$取模。

# 范围

$N\le10^{18}$

$M\le100$

# 题解

`ans(n,m) = ans(n-1,m) + ans(n-m,m)`

由于m一样，所以`dp[n] = dp[n-1] + dp[n-m]`

 # 矩阵快速幂

```cpp
#include<bits/stdc++.h>
using namespace std;

//函数参数输入，返回值输出
//特别注意lenth一定要改，不然每次都遍历到最大的矩阵会tle
typedef long long ll;
ll lenth=200;
ll mod=1e9+7;
struct Sarray{
    ll data[200][200];
    //看着改
    Sarray operator *(const Sarray&a){
        Sarray tem;
        for(ll i=0;i<lenth;i++){
            for(ll j=0;j<lenth;j++){
                for(ll k=0;k<lenth;k++){
                    tem.data[i][j]=(tem.data[i][j]+data[i][k]*a.data[k][j])%mod;
                }
            }
        }
        return tem;
    }
    
    Sarray operator +(const Sarray&a){
        Sarray tem;
        for(ll i=0;i<lenth;i++){
            for(ll j=0;j<lenth;j++){
                tem.data[i][j]=(data[i][j]+a.data[i][j])%mod;
            }
        }
        return tem;
    }
    
    Sarray(const Sarray&a){
        for(ll i=0;i<lenth;i++){
            for(ll j=0;j<lenth;j++){
                data[i][j]=a.data[i][j];
            }
        }
    }
    
    Sarray(){
        memset(data,0,sizeof(data));
    }
    
};

Sarray E;
void ini(){
    for(ll i=0;i<lenth;i++)
        for(ll j=0;j<lenth;j++)
            if(i==j)E.data[i][j]=1;
            else E.data[i][j]=0;
}

Sarray qpow(Sarray a,ll b){
    Sarray tem=E;
    while(b){
        if(b&1)tem=a*tem;
        a=a*a;
        b>>=1;
    }
    return tem;
}

//sigma(p^i) from 0 to n [0,n]
Sarray sigma(Sarray&p,ll n){
    if(n==0)return E;
    if(n==1)return E+p;
    if(n&1) return (E+qpow(p,n/2+1))*sigma(p,n>>1);
    else return (E+qpow(p,n/2+1))*sigma(p,n/2-1)+qpow(p,n>>1);
}
///////////////////////////////////////


int main(){
    ini();
    
    ll n,m;
    cin>>n>>m;
    lenth=m;
    Sarray p,r;
    
    p.data[0][0]=1;
    p.data[0][m-1]=1;
    for(ll i=1;i<m;i++){
        p.data[i][i-1]=1;
    }
    
    r.data[0][0]=2;
    for(ll i=1;i<m;i++){
        r.data[i][0]=1;
    }
    
    if(n>=m){
        Sarray l=qpow(p,n-m)*r;
        cout<<l.data[0][0]<<endl;
    }
    else{
        cout<<1<<endl;
    }
}
```
