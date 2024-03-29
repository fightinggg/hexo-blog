---
date: 2018-10-19 16:19:43
updated: 2018-10-19 16:19:43
---



# 暴力枚举因子法

```c++
//素数筛与合数分解
//预处理O（sqrt(n)），询问O（sqrt（n））
//调用find_ini() getfac（）
const int maxn=3e6+5;
int prime[maxn],prime_,not_prime[maxn]={1,1};

void prime_ini(){// 素数不可能筛到longlong范围
    for(int i=2; i<maxn; i++){
        if(!not_prime[i])prime[prime_++]=i;//把质数收录
        for(int j=0; 1ll*i*prime[j]<maxn; j++){
            not_prime[i*prime[j]]=1;//对每一个数字枚举他的最小因子
            if(i%prime[j]==0)break;//在往后的话就不是最小因子了
        }
    }
}

int fac[100][2],fac_;
void getfac(int x){ // assert(x>=2)
    fac_=0;//清空fac
    for(int i=0; prime[i]<=x/prime[i]; i++){
        if(x%prime[i]==0){
            fac[fac_][0]=prime[i];
            fac[fac_][1]=0;
            while(x%prime[i]==0){
                fac[fac_][1]++;
                x/=prime[i];
            }
            fac_++;
        }
    }
    if(x!=1){
        fac[fac_][0]=x;
        fac[fac_][1]=1;
        fac_++;
    }
}
```



# 记录最小因子法

```c++

//这个板子只能处理正数
//预处理O（n）合数分解O（lgn）
//最大使用范围[1,MAXN),实际使用[1,MAXN);
//调用find_ini() getfac（）
typedef long long ll;
const ll MAXN=1e6+5;
ll prime[MAXN],prime_;
ll min_fac[MAXN]={-9527,1};//0,1
bool not_prime[MAXN]={true,true};//0,1

void prime_ini(){
    for(ll i=2; i<MAXN; i++){
        if(!not_prime[i]){
            prime[prime_++]=i;//把质数收录
            min_fac[i]=i;
        }
        
        for(ll j=0; j<prime_ && i*prime[j]<MAXN; j++){
            not_prime[i*prime[j]]=true;//对每一个数字枚举他的最小因子
            min_fac[i*prime[j]]=prime[j];
            if(i%prime[j]==0)break;//在往后的话就不是最小因子了
        }
    }
}

//当x=0，1会异常，无意义的东西
ll fac[100][2],fac_;
void getfac(int x){
    fac_=0;
    while(x!=1){
        ll little=min_fac[x];
        fac[fac_][0]=little;
        fac[fac_][1]=0;
        while(little!=1 && min_fac[x]==little){
            x/=little;
            fac[fac_][1]++;
        }
        fac_++;
    }
}
//solved poj-1365
```



# PollaraRho随机分解法

我们使用米勒罗宾素数测试多次，只要无法通过测试，则这个数必然是合数，然后使用PollaraRho随机分解法对素数进行分解。考虑gcd，如果$gcd(a,b)$不为1或者b，那么这个数一定是b的因子，可以用来分解b，一个数的因子很少，但是和gcd不为1或b的数有很多个(至少是$\sqrt{b}$个)，所以我们多次随机生成，一定能够得到他的因子。

```c++
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
