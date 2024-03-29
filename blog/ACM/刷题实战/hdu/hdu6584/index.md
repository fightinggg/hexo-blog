---
date: 2019-09-03 17:02:44
updated: 2019-09-03 17:02:44
---

###name
Meteor

###descirption
hough time passes, there is always someone we will never forget.
"The probability of being hit by a meteor is one in a billion, but it is much more miraculous, to meet you in my life." said Tom to Jerry with affection.
"One in a billion? I may not agree with you." answered Jerry proudly, "Let's do the math."
...
Thinking of the days they have happily spent together, Tom can't help bursting into tears. Though Jerry has been gone for a long time, Tom still misses him every day. He remembers it was a sunny afternoon when Jerry and him were lying in the yard, working on the probability of a man being hit by a meteor.
Unlike Jerry, he was always slow. Jerry got the answer soon, but Tom was stuck as usual. In the end, Tom lost patience and asked Jerry to tell him the answer.
"I can't be so straightforward," snickered Jerry, "the only thing I will tell you is that the answer is $\frac{p}{q}$, where p,q≤n,gcd(p,q)=1."
"Is it $\frac{1}{n}$?"
"Is it $\frac{1}{n-1}$?"
...
If answered "No" , he would try the minimum larger number that satisfies the requirement.
Tom only remembered n given by Jerry, and k, the times that he tried, but forgot what matters the most: Jerry's answer. Now, he wants you to help him find it.

<!---more-->

###input
The first line contains an integer $T(T≤10^2)$, the number of test cases.
The next T lines, each line contains two number$s, n,k(2≤n≤10^6)$, indicating a query.
The answer is guaranteed to be in (0,1].

###output
T lines, each line contains a fraction in term of p/q ,where gcd(p,q)=1.

###sample input
5
4 6
5 1
9 9
3 4
7 11

###sample output
1/1
1/5
1/3
1/1
3/5

###toturial
$$
\begin{aligned}
&答案肯定是找到一个分子分母小于n的分数\frac{p}{q}他满足下面的特征\\
&(\sum_{i=1}^n\sum_{j=1}^n[gcd(i,j)=1][\frac{i}{j} \leq \frac{p}{q}]) = k\\
&我们对左式化简\\
&=\sum_{i=1}^n\sum_{j=1}^n[gcd(i,j)=1][i \leq \frac{p}{q}j]\\
&=\sum_{i=1}^{\lfloor \frac{p}{q}j\rfloor}\sum_{j=1}^n[gcd(i,j)=1]\\
&=\sum_{i=1}^{\lfloor \frac{p}{q}j\rfloor}\sum_{j=1}^ne(gcd(i,j))\\
&=\sum_{i=1}^{\lfloor \frac{p}{q}j\rfloor}\sum_{j=1}^n(u*1)(gcd(i,j))\\
&=\sum_{i=1}^{\lfloor \frac{p}{q}j\rfloor}\sum_{j=1}^n\sum_{d|gcd(i,j)}u(d)*1(d)\\
&=\sum_{i=1}^{\lfloor \frac{p}{q}j\rfloor}\sum_{j=1}^n\sum_{d|gcd(i,j)}u(d)\\
&=\sum_{i=1}^{\lfloor \frac{p}{q}j\rfloor}\sum_{j=1}^n\sum_{d|i,d|j}u(d)\\
&=\sum_{d=1}^{n}u(d)\sum_{i=1}^{\lfloor \frac{p}{q}j\rfloor}\sum_{j=1}^n[d|i,d|j]\\
&=\sum_{d=1}^{n}u(d)\sum_{xd=1}^{\lfloor \frac{p}{q}(yd)\rfloor}\sum_{yd=1}^n[d|(xd),d|(yd)]\\
&=\sum_{d=1}^{n}u(d)\sum_{x=1}^{\lfloor\frac{\lfloor \frac{p}{q}(yd)\rfloor}{d}\rfloor}\sum_{y=1}^{\lfloor\frac{n}{d}\rfloor}1\\
&=\sum_{d=1}^{n}u(d)\sum_{y=1}^{\lfloor\frac{n}{d}\rfloor}\lfloor\frac{\lfloor \frac{p}{q}(yd)\rfloor}{d}\rfloor\\
&=\sum_{d=1}^{n}u(d)\sum_{y=1}^{\lfloor\frac{n}{d}\rfloor}{\lfloor \frac{p}{q}y\rfloor}\\
\end{aligned}
$$
这里是可以求出答案的,对d分块，右边的部分采用类欧几里得算法
我们一直往下二分，直到区间足够小，最后用 Stern-Brocot Tree 或 法雷序列找出答案

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;

/****  * 超级积性函数线性筛 *  ****/
typedef long long ll;
const ll maxn=2e6+10;
ll no_pri[maxn]={0,1,0},pri[maxn],low[maxn];
ll PHI[maxn],DDD[maxn],XDX[maxn],MUU[maxn],SIG[maxn];
void f_ini(){
    for(ll i=2;i<maxn;i++){
        if(!no_pri[i]) low[i]=pri[++pri[0]]=i;
        for(ll j=1;pri[j]*i<maxn;j++){
            no_pri[pri[j]*i]=1;
            if(i%pri[j]==0) {
                low[pri[j]*i]=low[i]*pri[j];
                break;
            }
            else low[pri[j]*i]=pri[j];
        }
    }

    DDD[1]=PHI[1]=MUU[1]=SIG[1]=1;// 改这里
    for(ll i=1;i<=pri[0];i++){
        for(ll mul=pri[i],ct=1;mul<maxn;mul*=pri[i],ct++){
            DDD[mul]=ct+1;// 改这里
            SIG[mul]=SIG[mul/pri[i]]+mul;// 改这里
            MUU[mul]=ct==1?-1:0;// 改这里
            PHI[mul]=mul/pri[i]*(pri[i]-1);// 改这里
        }
    }

    for(ll i=2;i<maxn;i++){
        for(ll j=1;pri[j]*i<maxn;j++){
            ll x=low[i*pri[j]], y=i*pri[j]/x;
            DDD[x*y]=DDD[x]*DDD[y];
            MUU[x*y]=MUU[x]*MUU[y];
            PHI[x*y]=PHI[x]*PHI[y];
            SIG[x*y]=SIG[x]*SIG[y];
            if(i%pri[j]==0) break;
        }
    }

    for(ll i=1;i<maxn;i++) {
        DDD[i]+=DDD[i-1];
        MUU[i]+=MUU[i-1];
        PHI[i]+=PHI[i-1];
        SIG[i]+=SIG[i-1];
        XDX[i]=(DDD[i]-DDD[i-1])*i+XDX[i-1];
    }
}


struct frac{
    ll x,y;
    frac(ll x_=0,ll y_=1){
        ll gcd=__gcd(x_,y_);
        x=x_/gcd;
        y=y_/gcd;
    }
    frac operator +(const frac&rhs){
        ll lcm=y/__gcd(y,rhs.y)*rhs.y;
        return frac(x*(lcm/y)+rhs.x*(lcm/rhs.y),lcm);
    }
    frac operator /(ll k){
        ll gcd=__gcd(k,x);
        return frac(x/gcd,y*(k/gcd));
    }
    bool operator <=(const frac&rhs){
        ll lcm=y/__gcd(y,rhs.y)*rhs.y;
        return x*(lcm/y)<=rhs.x*(lcm/rhs.y);
    }
};

// a>=0 b>=0 c>0 n>=0         -> O(lg(a,c))
void calfgh(ll a,ll b,ll c,ll n,ll&f,ll&g,ll&h){
    ll A=a/c,B=b/c,s0=n+1,s1=n*(n+1)/2,s2=n*(n+1)*(2*n+1)/6;
    f=s1*A+s0*B;
    g=s2*A+s1*B;
    h=s2*A*A+s0*B*B+2*s1*A*B-2*B*f-2*A*g;// 先减掉
    a%=c,b%=c;
    ll m=(a*n+b)/c;
    if(m!=0) {
        ll ff,gg,hh; calfgh(c,c-b-1,a,m-1,ff,gg,hh);
        f+=n*m-ff;
        g+=(n*m*(n+1)-hh-ff)/2;
        h+=n*m*m-2*gg-ff;
    }
    h+=2*B*f+2*A*g;//再加上
}


ll count(frac k,int n){
    ll ret=0;
    for(int i=1,ed;i<=n;i=ed+1){
        ed=n/(n/i);
        ll a[3]; calfgh(k.x,0,k.y,n/i,a[0],a[1],a[2]);
        ret+=1ll*(MUU[ed]-MUU[i-1])*a[0];
    }
    return ret;
}

int main(){
    f_ini();
    ll t,n,k;
    scanf("%lld",&t);
    while(t--){
        scanf("%lld%lld",&n,&k);
        frac l(0,1),r(1,1);// [l,r]
        for(int ijk=0;ijk<40;ijk++){
            frac mid=(l+r)/2;
            ll ct=count(mid,n);//[0,mid]
            if(ct>=k)r=mid;
            else l=mid;
        }
        //[l,r]
        frac L(0,1),R(1,0);
        while(true){
            frac mid(L.x+R.x,L.y+R.y);
            if(mid.x<=n&&mid.y<=n&&l<=mid&&mid<=r){
                printf("%lld/%lld\n",mid.x,mid.y);
                break;
            }
            if(!(l<=mid)){
                L=mid;
            }
            if(!(mid<=r)){
                R=mid;
            }
        }
    }
}
```