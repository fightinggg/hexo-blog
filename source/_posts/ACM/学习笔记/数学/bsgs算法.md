---
date: 2019-06-12 14:02:09
updated: 2019-06-12 14:02:09
mathjax: true
---





```c++
// a^x === b   x=lg(a,b)
int bsgs_lg(int a,int b,int mod){
    map<int,int>mp;
    int sqr=sqrt(mod-1)+1;
    for(int i=0;i<sqr;i++) mp[qpow(a,i,mod)]=i; // baby step
    for(int i=0;i<mod-1;i+=sqr){ // giant step
        int tp=1ll*b*qpow(a,mod-1-i,mod)%mod; // a^(-i)
        if(mp.find(tp)!=mp.end()) return i+mp[tp];
    }
    return -1;// error 
}
```