---
date: 2019-08-16 16:22:38
updated: 2019-08-16 16:22:38
---

###name
the power of Fibonacci

###description
Amy asks Mr. B  problem A. Please help Mr. B to solve the following problem.
Let Fi be fibonacci number.
$F_0 = 0, F_1 = 1, F_i = F_{i-1} + F_{i-2}$ 
Given n and m, please calculate
$\sum^n_{i=0}{F_i^m}$  
As the answer might be very large, output it module 1000000000.
<!---more-->

###input
The first and only line contains two integers n, m(1 <= n <= 1000000000, 1 <= m <= 1000).

###output
Output a single integer, the answer module 1000000000.

###sample input 1
5 5

###sample output 1
3402

###sample input 2
10 10

###sample output 2
696237975

###sample input 3
1000000000 1000

###sample output 3
641796875

###toturial
对$10^9$进行分解，$10^9=2^9\*5^9$,然后打表，分别找到循环节的长度，最后用中国剩余定理合并

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define rep(i,j,k) for(int i=(j);i<=(k);++i)
const int len5=7812500,len2=768;
int fib5[len5+1],fib2[len2+1];

int qpow(int a,int b,int mod){
    int res=1;
    for(;b;b>>=1,a=1ll*a*a%mod) if(b&1)res=1ll*res*a%mod;
    return res;
}

void Exeuclid(ll a, ll& x, ll b, ll& y, ll c){
    if (!b) { x = c / a, y = 0; }
    else {
        Exeuclid(b, x, a % b, y, c);
        x -= a / b * y;
        swap(x, y);
    }
}

int merge(int x1,int p1,int x2,int p2){
    // u*p1+x1=v*p2+x2
    // u*p1-v*p2=x2-x1
    ll u,v;
    Exeuclid(p1,u,p2,v,x2-x1);
    ll p=p1*p2;
    return ((u*p1+x1)%p+p)%p;
}

int main(){
    // cout<<1ll*len5/__gcd(len5,len2)*len2<<endl;
    fib2[1]=fib2[2]=fib5[1]=fib5[2]=1;
    rep(i,3,len2) fib2[i]=(fib2[i-1]+fib2[i-2])%512;
    rep(i,3,len5) fib5[i]=(fib5[i-1]+fib5[i-2])%1953125;
    int n,m; scanf("%d%d",&n,&m);
    rep(i,1,len2) fib2[i]=(qpow(fib2[i],m,512)+fib2[i-1])%512;
    rep(i,1,len5) fib5[i]=(qpow(fib5[i],m,1953125)+fib5[i-1])%1953125;
    int ans2=(1ll*fib2[len2]*(n/len2)+fib2[n%len2])%512;
    int ans5=(1ll*fib5[len5]*(n/len5)+fib5[n%len5])%1953125;
    printf("%d\n",merge(ans2,512,ans5,1953125));
}
```