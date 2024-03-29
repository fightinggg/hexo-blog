---
date: 2019-08-08 20:51:13
updated: 2019-08-08 20:51:13
---

###name
Pair

###descirption
Given three integers A, B, C. Count the number of pairs &lt;x,y&gt; (with 
1≤x≤A and 1≤y≤B)such that at least one of the following is true:
- (x and y) > C
- (x xor y) < C
("and", "xor" are bit operators)

<!---more-->

###input
The first line of the input gives the number of test cases, T (T≤100).  T test cases follow.

For each test case, the only line contains three integers A, B and C.
$1≤A,B,C≤10^9$

###output
For each test case, the only line contains an integer that is the number of pairs satisfying the condition given in the problem statement.

###sample input
3
3 4 2
4 5 2
7 8 5

###sample output
5
7
31

###toturial
可以直接dfs搜索，然后记忆化加速，写起来很复杂，但是能过

###code
```cpp
#include<bits/stdc++.h>
using namespace std;
 
typedef  long long ll;
 
typedef pair<pair<int,int>,pair<int,int>> pair4;
inline pair4 mp(int a,int b,int c,int d){return make_pair(make_pair(a,b),make_pair(c,d));}
 
map<pair4,ll> hashxor,hashand;
ll gxor(ll a,ll b,ll hi,ll c){//       ^<c
    if(a==-1||b==-1)return 0;
    if(hi<=1) {
        ll ct=0;
        for(ll i=0;i<=a;i++){
            for(ll j=0;j<=b;j++){
                if((i^j)<c) ct++;
            }
        }
        return ct;
    }
 
    if(hashxor.find(mp(a,b,hi,c))!=hashxor.end()) return hashxor[mp(a,b,hi,c)];
 
    ll a0=a>=hi-1?hi-1:a;// bg with 0
    ll b0=b>=hi-1?hi-1:b;// bg with 1
    ll a1=a>=hi?(a&(hi-1)):-1;
    ll b1=b>=hi?(b&(hi-1)):-1;
    if(c&hi) return hashxor[mp(a,b,hi,c)]=(a0+1)*(b0+1)+(a1+1)*(b1+1)+gxor(a0,b1,hi>>1,c&(hi-1))+gxor(a1,b0,hi>>1,c&(hi-1));
    else return hashxor[mp(a,b,hi,c)]=gxor(a0,b0,hi>>1,c&(hi-1))+gxor(a1,b1,hi>>1,c&(hi-1));
}
 
ll gand(ll a,ll b,ll hi,ll c){//  &>c
    if(a==-1||b==-1)return 0;
    if(hi<=1) {
        ll ct=0;
        for(ll i=0;i<=a;i++){
            for(ll j=0;j<=b;j++){
                if((i&j)>c) ct++;
            }
        }
        return ct;
    }
 
    if(hashand.find(mp(a,b,hi,c))!=hashand.end()) return hashand[mp(a,b,hi,c)];
 
    ll a0=a>=hi-1?hi-1:a;// bg with 0
    ll b0=b>=hi-1?hi-1:b;// bg with 1
    ll a1=a>=hi?(a&(hi-1)):-1;
    ll b1=b>=hi?(b&(hi-1)):-1;
    if(c&hi) return hashand[mp(a,b,hi,c)]=gand(a1,b1,hi>>1,c&(hi-1));
    else return hashand[mp(a,b,hi,c)]=(a1+1)*(b1+1)+gand(a0,b1,hi>>1,c&(hi-1))+gand(a1,b0,hi>>1,c&(hi-1))+gand(a0,b0,hi>>1,c&(hi-1));
}
 
ll f(ll a,ll b,ll hi,ll c){// &>c ^<c
    if(hi<=1){
        ll ct=0;
        for(ll i=0;i<=a;i++){
            for(ll j=0;j<=b;j++){
                if((i&j)>c||(i^j)<c) ct++;
            }
        }
        return ct;
    }
    ll a0=a>=hi-1?hi-1:a;// bg with 0
    ll b0=b>=hi-1?hi-1:b;// bg with 1
    ll a1=a>=hi?(a&(hi-1)):-1;
    ll b1=b>=hi?(b&(hi-1)):-1;
    if(c&hi) return (a0+1)*(b0+1)+(a1+1)*(b1+1)+gxor(a0,b1,hi>>1,c&(hi-1))+gxor(a1,b0,hi>>1,c&(hi-1));// ^ ^  & &
    else return (a1+1)*(b1+1)+gand(a0,b1,hi>>1,c&(hi-1))+gand(a1,b0,hi>>1,c&(hi-1))+f(a0,b0,hi>>1,c&(hi-1));
}
 
 
ll debug(ll a,ll b,ll c){
    hashxor.clear();
    hashand.clear();
 
    ll hi=max({a,b,c});
    while(hi&(hi-1)) hi&=hi-1;
    return f(a,b,hi,c)+1-min(a+1,c)-min(b+1,c);
}
 
ll baoli(ll a,ll b,ll c){
    ll ct=0;
    for(ll i=1;i<=a;i++){
        for(ll j=1;j<=b;j++){
            if((i&j)>c||(i^j)<c) ct++;
        }
    }
    return ct;
}
 
int main(){
//    srand(time(NULL));
//    int up=300;
//    while(true){
//        int i=rand()%20000+1;
//        int j=rand()%20000+1;
//        int k=rand()%20000+1;
//        int fuck1=baoli(i,j,k);
//        int fuck2=debug(i,j,k);
//        cout<<i<<" "<<j<<" "<<k<<" "<<" "<<fuck1<<" "<<fuck2<<endl;
//        if(fuck1!=fuck2){
//            cout<<baoli(i,j,k)<<endl;
//            cout<<debug(i,j,k)<<endl;
//            cout<<i<<j<<k<<endl;
//            getchar();
//        }
//
//
//    }
    ll a,b,c,t;
    scanf("%lld",&t);
    while(t--){
        hashxor.clear();
        hashand.clear();
 
        scanf("%lld%lld%lld",&a,&b,&c);
        ll hi=max({a,b,c});
        while(hi&(hi-1)) hi&=hi-1;
        printf("%lld\n",f(a,b,hi,c)+1-min(a+1,c)-min(b+1,c));
    }
}
```

###toturial2
考虑数位dp

###code
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

#define REP(i,j,k) for(int i=(j);i<=(k);i++)
ll dp[33][2][2][3][3],A[33],B[33],C[33];

ll cmp(ll a,ll b){
    if(a<b) return -1;
    if(a==b) return 0;
    return 1;
}

ll dfs(ll bit,ll la,ll lb,ll ad,ll xr){
    if(bit==-1) return ad==1||xr==-1;
    ll&res=dp[bit][la][lb][ad+1][xr+1];
    if(res!=-1) return res;
    res=0;
    REP(i,0,la?A[bit]:1) REP(j,0,lb?B[bit]:1) res+=dfs(bit-1,la&&i==A[bit],lb&&j==B[bit],ad?ad:cmp(i&j,C[bit]),xr?xr:cmp(i^j,C[bit]));
    return res;
}

int main(){
    int t;
    scanf("%d",&t);
    while(t--){
        memset(dp,-1,sizeof(dp));
        ll a,b,c; scanf("%lld%lld%lld",&a,&b,&c);
        REP(i,0,30) A[i]=bool(1<<i&a),B[i]=bool(1<<i&b),C[i]=bool(1<<i&c);
        printf("%lld\n",dfs(30,1,1,0,0)+1-min(a+1,c)-min(b+1,c));
    }
}

```