---
date: 2019-08-15 21:29:52
updated: 2019-08-15 21:29:52
---

```cpp
typedef long long ll;
struct cp{
    static ll p,w;
    ll x,y;// x+y\sqrt(w)
    cp(ll x,ll y):x(x),y(y){}
    cp operator*(cp rhs){
        return cp((x*rhs.x+y*rhs.y%p*w)%p,(x*rhs.y+y*rhs.x)%p);
    }
};
ll cp::p,cp::w;

cp qpow(cp a,ll b){
    cp res(1,0);
    for(;b;b>>=1,a=a*a) if(b&1)res=res*a;
    return res;
}
ll qpow(ll a,ll b,ll p){
    ll res=1;
    for(;b;b>>=1,a=a*a%p) if(b&1)res=res*a%p;
    return res;
}
ll sqrt(ll x,ll p){ // return sqrt(x)%p
    if(x==0) return 0;
    if(qpow(x,(p-1)/2,p)==p-1)return -1;
    ll a=1,w=(1-x+p)%p;
    while(qpow(w,(p-1)/2,p)!=p-1) ++a,w=(a*a-x+p)%p;
    cp::w=w,cp::p=p;
    return qpow(cp(a,1),(p+1)/2).x;
}
```