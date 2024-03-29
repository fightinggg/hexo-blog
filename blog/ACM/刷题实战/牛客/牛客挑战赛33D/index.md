---
date: 2019-10-22 20:14:23
updated: 2019-10-22 20:14:23
---

###name
种花家的零食

###descirption
在很久以前，有一颗蓝星，蓝星上有一个种花家。
种花家有1到n共n包零食，同时种花家的兔子又有1到n共n个朋友(比如毛熊，鹰酱，脚盆鸡等）。
昨天，兔子的n个朋友都到他家来玩了。他的n个朋友瓜分了他的n包零食，每个人都恰好吃了一包零食，没有两个人吃了同一包零食。
兔子发现，第i个朋友吃第j包零食能获得的愉悦值是$i\mod j$。
今天，兔子想回忆起每个朋友吃的是哪包零食，他想不起来了，但是他却记得了所有人的愉悦值之和s。于是，兔子找上了你，请你构造出一种可能的方案。
由于兔子记忆力不好，他有可能记错了s，所以可能会存在无解的情况。

<!---more-->

###input
一行两个整数$n(1\leq n\leq 10^6)$和$s(1\leq s\leq10^{18})$

###output
如果不存在满足条件的方案，输出一行-1。
否则输出n行，每行一个整数，第i行的整数表示第i个朋友吃的是哪包零食。

###sample input
5 7

###sample output
1
4
3
5
2

###sample input
5 100

###sample output
-1

###toturial
分析出上界为$\frac{n(n-1)}{2}$后，分类讨论，用数学归纳法证明特例即可

###code
```cpp
#include<bits/stdc++.h>
#define rep(i,j,k) for(ll i=(j);i<=(k);++i)

using namespace std;
typedef long long ll;

const int maxn=1e6+10;
ll ans[maxn];
vector<ll>vec;
void solve(ll n,ll s){
    if(n==1) {
        vec.push_back(1);
        return;
    }
    // choose n-1
    s-=n-1;
    n--;
    if(s!=n*(n-1)/2-1&&s!=2&&s!=0&&s>0){
        vec.push_back(n);
        solve(n,s);
        return;
    }
    n++;
    s+=n-1;


    solve(n-1,s);
}

int main() {
    ll n,s;
    cin>>n>>s;
    if(s>n*(n-1)/2) ans[0]=-1;
    else if(n==1){
        if(s==0) ans[1]=1;
        else ans[0]=-1;
    }
    else if(n==2){
        if(s==0) ans[1]=1,ans[2]=2;
        else if(s==1) ans[1]=2,ans[2]=1;
        else ans[0]=-1;
    }
    else if(s==0) rep(i,1,n) ans[i]=i;
    else if(s==2) {
        ans[1]=3;;
        ans[2]=1;
        ans[3]=2;
        rep(i,4,n) ans[i]=i;
    }
    else if(s==n*(n-1)/2-1){
        if(n%2==0){
            ans[1]=1;
            rep(i,2,n-1) ans[i]=i+1;
            ans[n]=2;
        }
        else{
            ans[1]=3;
            ans[2]=1;
            rep(i,3,n-1) ans[i]=i+1;
            ans[n]=2;
        }
    }
    else {
        vec.push_back(n);
        solve(n,s);
        rep(i,1,n) ans[i]=i;
        int sz=vec.size();
       // rep(i,0,sz-1) cout<<vec[i]<<endl;
       // cout<<endl;
        rep(i,0,sz-1)ans[vec[i]]=vec[(i-1+sz)%sz];
    }
    if(ans[0]==-1) printf("-1\n");
    else {
        ll ss=0;
        rep(i,1,n) ss+=i%ans[i],printf("%lld\n",ans[i]);
        assert(ss==s);
       // cout<<s<<endl;
    }
}
```