---
date: 2019-10-29 23:19:56
updated: 2019-10-29 23:19:56
---

### name
Easy Math Problem
### descirption
One day, Touma Kazusa encountered a easy math problem. Given n and k, she need to calculate the following sum modulo $1e9+7$.  
$$∑_{i=1}^n∑^n_{j=1}gcd(i,j)^klcm(i,j)\[gcd(i,j)∈prime\]\%(1e9+7) $$
However, as a poor student, Kazusa obviously did not, so Touma Kazusa went to ask Kitahara Haruki. But Kitahara Haruki is too busy, in order to prove that he is a skilled man, so he threw this problem to you. Can you answer this easy math problem quickly?
<!---more-->

### input
There are multiple test cases.$（T=5）$ The first line of the input contains an integer$T$, indicating the number of test cases. For each test case:  
There are only two positive integers n and k which are separated by spaces.  
$1≤n≤1e10$
$1≤k≤100$
### output
An integer representing your answer.
### sample input
1
10 2
### sample output
2829
### toturial
$$
\begin{aligned}
&\sum_{i=1}^n\sum_{j=1}^n i*j*gcd(i,j)^{k-1} gcd is prime
\\=&\sum_{d\in prime} \sum_{i=1}^n\sum_{j=1}^nijd^{k-1}[gcd(i,j)=d]
\\=&\sum_{d\in prime} \sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}\sum_{j=1}^{\lfloor\frac{n}{d}\rfloor}ijd^{k+1}[gcd(i,j)=1]
\\=&\sum_{d\in prime}d^{k+1} \sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}\sum_{j=1}^{\lfloor\frac{n}{d}\rfloor}ij[gcd(i,j)=1]
\\=&\sum_{d\in prime}d^{k+1} \sum_{j=1}^{\lfloor\frac{n}{d}\rfloor}j^2\phi(j)
\end{aligned}
$$
我们可以对n分块了，前面可以min25筛
$\begin{aligned}f(j)=j^2\phi(j)\end{aligned}$ 
$\begin{aligned}g(j)=j^2\end{aligned}$ 
$\begin{aligned}f\ast g(j)=\sum_{i|j}i^2\phi(i)(\frac{j}{i})^2=j^2\sum_{i|j}\phi(i)=j^2(\phi\ast 1)(j)=j^3\end{aligned}$
于是后面可以杜教筛 
### code
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

// 模意义
const ll mod=1e9+7;
ll qpow(ll a,ll b){
    assert(a<mod);
    ll res=1;
    while(b){
        if(b&1) res=res*a%mod;
        a=a*a%mod;
        b>>=1;
    }return res;
}
const ll inv2=qpow(2,mod-2),inv3=qpow(3,mod-2);
inline ll reduce(ll x){return x<0?x+mod:x;}
inline ll A(ll a,ll b){assert(a<mod&&b<mod); return reduce(a+b-mod);}
inline ll M(ll a,ll b){assert(a<2*mod&&b<2*mod); return a*b%mod;}
inline ll M(ll a,ll b,ll c){return M(M(a,b),c);}

//线性筛
// 3e7 int = 120mb
const ll maxn=2.5e7;
bitset<maxn>vis;
int siiphi[maxn];
ll p[1565927+100];
void f_ini(){
    siiphi[1]=1;
    for (ll i=2;i<maxn;i++){
        if(!vis[i]) p[++p[0]]=i,siiphi[i]=i-1;
        for (ll j=1;i*p[j]<maxn;j++){
            vis[i*p[j]]=true;
            if(i%p[j])siiphi[i*p[j]]=siiphi[i]*(p[j]-1);//由积性函数性质推
            else{siiphi[i*p[j]]=siiphi[i]*p[j];break;}
        }
    }
    for(ll i=1;i<maxn;i++) siiphi[i]=A(siiphi[i-1],M(i,i,siiphi[i]));
}

// 分块
const ll sqr=3e5;
ll id1[sqr],id2[sqr],w[sqr],idn,idm;// w[x] 第几大的分块值是多少
inline ll& id(ll x){return x<sqr?id1[x]:id2[idn/x];}//返回x是第几大的整除分块值
void ini(ll n){
    idn=n;idm=0;
    for(ll l=1,r;l<=n;l=r+1){
        r=n/(n/l);
        id(n/l)=++idm;
        w[idm]=n/l;
    }
}

namespace min25shai{
    ll g[sqr],sp[sqr];
    ll getsum(ll x,ll n){// O(n) n次多项式有n+1项 y[0]...y[n] -> y[x]
        static ll prepre[1000],suf[1000],r[1000]={1,1},y[1000],*pre=prepre+1;
        if(y[999]!=++n) {//这里非常重要
            y[999]=n;
            for(ll i=1;i<=n;i++) y[i]=A(y[i-1],qpow(i,n-1));
            for(ll i=2;i<=n;i++) r[i]=M(mod-mod/i,r[mod%i]);
            for(ll i=2;i<=n;i++) r[i]=M(r[i],r[i-1]);
        }
        pre[-1]=suf[n+1]=1;
        for(ll i=0;i<=n;++i) pre[i]=M(pre[i-1],x%mod-i+mod);//这个地方爆掉了
        for(ll i=n;i>=0;i--) suf[i]=M(suf[i+1],i-x%mod+mod);//这个地方爆掉了
        ll b=0;
        for(ll i=0;i<=n;++i) {
            ll up=M(pre[i-1],suf[i+1]);
            ll down=M(r[i],r[n-i]);
            b=A(b,M(y[i],up,down));
        }
        return b;
    }
    void min25(ll*g,ll n,ll k,ll(*f)(ll,ll),ll(*s)(ll,ll)){
        for(ll i=1;i<=idm;++i) g[i]=A(s(w[i],k),mod-1);
        for(ll j=1;p[j]*p[j]<=n;j++){
            ll t=f(p[j],k);
            sp[j]=A(sp[j-1],t);
            for(ll i=1;w[i]>=p[j]*p[j];++i) g[i]=A(g[i],M(sp[j-1]-g[id(w[i]/p[j])]+mod,t));
            // w[i]从大到小 当i等于m的时候 w[i]>=p[j]*p[j]恒不成立
        }
    }
}

namespace dujiaoshai{
    // g(1)S(n)=(1≤i≤n)h(i)+(2≤d≤n)g(d)S(n/d)
    // f(n)=n*n*phi(n)
    // g(n)=n*n
    // h(n)=n*n*n
    ll s[sqr];// 前缀和
    inline ll s1(ll n){return M(n,n+1,inv2);}
    inline ll s2(ll n){return M(s1(n),2*n+1,inv3);}
    inline ll s3(ll n){return M(s1(n),s1(n));}
    void ini(){for(ll i=1;i<=idm;i++)s[i]=0;}
    ll dujiao(ll n){
        if(n<maxn) return siiphi[n];
        if(s[id(n)]!=0) return s[id(n)];
        s[id(n)]=s3(n%mod);
        for(ll l=2,r;l<=n;l=r+1){
            r=n/(n/l);
            s[id(n)]-=(s2(r%mod)-s2((l-1)%mod))*dujiao(n/l)%mod;
        }
        return s[id(n)]=(s[id(n)]%mod+mod)%mod;
    }
}

ll solve(ll n,ll k){
    ini(n);
    dujiaoshai::ini();
    #define F(M) [](ll n,ll k){return ll(M);}
    min25shai::min25(min25shai::g,n,k+1,F(qpow(n%mod,k)),F(min25shai::getsum(n,k)));
    #undef F
    ll res=0;
    for(ll l=1,r;l<=n;l=r+1){
        r=n/(n/l);
        ll t1=dujiaoshai::dujiao(n/l);
        ll t2=min25shai::g[id(r)];
        if(l!=1) t2+=mod-min25shai::g[id(l-1)];
        res+=M(t1,t2);
    }
    return res%mod;
}

inline ll read(){ll x;cin>>x;return x;}
int main() {
    f_ini();
    for(ll t=read();t>=1;t--){
        ll n=read(),k=read();
        cout<<solve(n,k)<<endl;
    }
}
```