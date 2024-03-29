---
date: 2019-09-03 14:29:26
updated: 2019-09-03 14:29:26
---

###name
Vacation

###descirption
Tom and Jerry are going on a vacation. They are now driving on a one-way road and several cars are in front of them. To be more specific, there are n cars in front of them. The ith car has a length of $l_i$, the head of it is $s_i$ from the stop-line, and its maximum velocity is $v_i$. The car Tom and Jerry are driving is $l_0$ in length, and $s_0$ from the stop-line, with a maximum velocity of $v_0$.
The traffic light has a very long cycle. You can assume that it is always green light. However, since the road is too narrow, no car can get ahead of other cars. Even if your speed can be greater than the car in front of you, you still can only drive at the same speed as the anterior car. But when not affected by the car ahead, the driver will drive at the maximum speed. You can assume that every driver here is very good at driving, so that the distance of adjacent cars can be kept to be 0.
Though Tom and Jerry know that they can pass the stop-line during green light, they still want to know the minimum time they need to pass the stop-line. We say a car passes the stop-line once the head of the car passes it.
Please notice that even after a car passes the stop-line, it still runs on the road, and cannot be overtaken.

<!---more-->

###input
This problem contains multiple test cases.
For each test case, the first line contains an integer n $(1≤n≤10^5,∑n≤2×10^6)$, the number of cars.
The next three lines each contains n+1 integers, $l_i,s_i,v_i (1≤s_i,v_i,l_i≤10^9)$. It's guaranteed that $s_i≥s_i+1+li+1,∀i∈[0,n−1]$
 
###output
For each test case, output one line containing the answer. Your answer will be accepted if its absolute or relative error does not exceed $10^{−6}$.
Formally, let your answer be a, and the jury's answer is b. Your answer is considered correct if $|a−b|max(1,|b|)≤10^{−6}$.
The answer is guaranteed to exist.

###sample input
1
2 2
7 1
2 1
2
1 2 2
10 7 1
6 2 1

###sample output
3.5000000000
5.0000000000
 
###toturial
我们尝试把位移时间图画出来，发现这是一个凸壳，我们直接暴力维护凸壳即可

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define ll long long

struct frac{
    ll x,y;
    frac(ll x_,ll y_){
        ll gcd=__gcd(abs(x_),abs(y_));
        x=x_/gcd;
        y=y_/gcd;
        if(y<0){
            x*=-1;
            y*=-1;
        }
    }
    bool operator>=(const frac&rhs)const{
        ll lcm=y/__gcd(y,rhs.y)*rhs.y;
        return x*(lcm/y)>=rhs.x*(lcm/rhs.y);
    }
};

struct line{ll k,b,h;};

frac getx(line l1,line l2){
    return frac(-(l1.b-l2.b),l1.k-l2.k);
}

double gety(line l1,line l2){
    frac t=getx(l1,l2);
    return double(l1.k)/t.y*t.x+l1.b;
}

int stk[101010];

int main(){
    //freopen("/Users/s/Desktop/02.txt","r",stdin);
    //freopen("/Users/s/Desktop/02out.txt","w",stdout);
    int n;
    while(~scanf("%d",&n)){
        vector<line> l(n+1);
        for(int i=0;i<=n;i++) scanf("%lld",&l[i].h);
        for(int i=0;i<=n;i++) scanf("%lld",&l[i].b),l[i].b*=-1;
        for(int i=0;i<=n;i++) scanf("%lld",&l[i].k);
        stk[0]=0;
        ll d=0;
        for(int i=n;i>=0;i--){
            l[i].b-=d;
            while(stk[0]>=1&&l[stk[stk[0]]].k>=l[i].k) stk[0]--;
            while(stk[0]>=2&&l[stk[stk[0]]].k<l[i].k&& \
                getx(l[i],l[stk[stk[0]]])>=getx(l[stk[stk[0]]],l[stk[stk[0]-1]])) stk[0]--;
            stk[++stk[0]]=i;
            d-=l[i].h;
        }
        d+=l[0].h;
//        cout<<d<<endl;
        for(int i=1;i<=stk[0];i++) l[stk[i]].b+=d;
        while(stk[0]>=2&&gety(l[stk[stk[0]]],l[stk[stk[0]-1]])<=0)stk[0]--;
        line linex{0ll,0ll,0ll};
        frac ans=getx(l[stk[stk[0]]],linex);
        printf("%.12f\n",double(ans.x)/ans.y);
    }
}

/*
 1
 2 2
 14 2
 4 2


 2
2 2 2
100 14 2
1 4 2

 *
 *
 * */
```