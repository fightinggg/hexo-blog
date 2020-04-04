---
title: pollard rho
mathjax: true
categories:
  - 数学
  - 素数分解
  - pollard rho
tags:
  - 数学
  - 素数分解
  - pollard rho
keywords:
  - 数学
  - 素数分解
  - pollard rho
abbrlink: 8adcfd6
date: 2019-11-05 23:24:33
---


<!---more-->

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
typedef __int128 I;
/*
 * 素数
 * 欧拉定理
 * 费马小定理1 若a为整数，p为质数，则 pow(a,p)%p=a%p
 * 费马小定理2 若a为整数，p为质数，a不是p的倍数 则 pow(a,p-1)%p=1%p=1  （0是2的0倍）
*/
namespace amazing{
    inline ll gcd(ll a,ll b){
        int shift=__builtin_ctzll(a|b);
        b>>=__builtin_ctzll(b);
        while(a){
            a>>=__builtin_ctzll(a);
            if(a<b) swap(a,b);
            a-=b;
        }return b<<shift;
    }
    inline ll mul(ll x,ll y,ll p){// 有误差，要当心使用，wa了可能就是因为他
        ll z=(long double)x/p*y;
        ll res=x*y-z*p;
        return res<p?res+p:res>p?res-p:res;
    }
}

ll qpow(ll a,ll b,ll c){
    ll r=1;
    while(b){
        if(b&1) r=I(r)*a%c;
        a=I(a)*a%c;
        b>>=1;
    }return r;
}
bool miller_rabin(ll n){// O(10*lgn)
    if(n<=1) return false;
    ll t=n-1,k=0;
    while((t&1)==0) t>>=1,k++;
    for(int i=1;i<=10;i++){// 8-10次
        ll a=qpow(rand()%(n-1)+1,t,n);//全部复杂度在这
        for(ll j=1;j<=k;j++){
            ll nex=I(a)*a%n;
            if(nex==1&&a!=1&&a!=n-1) return false;//通不过测试，是合数
            a=nex;
        }
        if(a!=1)return false;//通不过测试，是合数
    }
    return true;// 通过测试可能是伪素数
}
ll pollard_rho(ll n){ // assert(n>1)
    while(true){
        ll c=rand()%(n-1)+1;
        ll x=0,y=0,val=1;
        for(ll i=0;;i++){
            x=amazing::mul(x,x,n)+c;
            if(x>n)x-=n;
//            x=(I(x)*x+c)%n;
            if(x==y) break;
            val=amazing::mul(val,abs(x-y),n);
//            val=I(val)*abs(x-y)%n;// 乘起来是根据 gcd(a,n)|gcd(ab,n)恒成立  且gcd(ab,n)=gcd(ab%n,n)
            if((i&-i)==i||i%127==0){// 太多必然导致val趋于n，太少导致gcd拖慢速度
                ll d=__gcd(val,n);// 乘起来一起算
                if(d==n) break;
                if(d>1) return d;
            }
            if((i&-i)==i) y=x;
        }
    }
}

vector<ll> findfac(ll n){
    vector<ll>res,stk(1,n);
    if(stk.back()==1) return res;
    while(!stk.empty()){
        ll top=stk.back();stk.pop_back();
        if(miller_rabin(top)) res.push_back(top);
        else{// 通不过测试是合数
            ll fac=pollard_rho(top);
            stk.push_back(fac);
            stk.push_back(top/fac);
        }
    }
    return res;
}

ll read(){ll x;scanf("%lld",&x);return x;}

int main(){
    srand(time(NULL));
    for(int T=read();T>=1;T--){
        vector<ll>v=findfac(read());
        sort(v.begin(),v.end());
        if(v.size()==1) printf("Prime\n");
        else printf("%lld\n",v.back());
    }
}
```
