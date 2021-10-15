---
date: 2019-08-07 22:42:08
updated: 2019-08-07 22:42:08
---

###name
fraction

###descirption
Many problems require printing the probability of something. Moreover, it is common that if the answer is $\frac{a}{b}$, you should output $a×b^{−1}(modp)$ (p is a prime number). In these problems, you cannot know the exact value of the probability. It's so confusing!!! Now, we want to reverse engineer the exact probability from such calculated output value x. We do so by guessing the probability is the one with the minimum b such that $a×b^{−1}=x(modp)$. Now we invite you to solve this problem with us!
You are given two positive integers p and x, where p is a prime number.
Please find the smallest positive integer b such that there exist some positive integer a satisfying $a\lt b$ and a≡bx(modp).

<!---more-->

###input
The first line contains an integer T indicating there are T tests. Each test consists of a single line containing two integers: p,x.
* $1≤T≤2×10^5$
* $3≤p≤10^{15}$
* p is a prime
* $1\lt x\lt p$

###output
For each test, output a line containing a string represents the fraction $\frac{a}{b}$ using the format "a/b" (without quotes).

###sample input
3
11 7
998244353 554580197
998244353 998244352

###sample output
2/5
8/9
499122176/499122177

###toturial
$$
a≡bx(modp) 
\\\Leftrightarrow bx-pk=a
\\\Leftrightarrow 0\lt bx-pk\lt b
\\\Leftrightarrow \frac{p}{x}\lt \frac{b}{k}\lt \frac{p}{x-1}
$$
等价于求一个分子最小的分数，其值在$(\frac{p}{x},\frac{p}{x-1})$,欧几里得辗转相除即可

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve(ll u1,ll u2,ll&r1,ll&r2,ll v1,ll v2){ // u1/u2<r1/r2<v1/v2
    if((u1+u2-1)/u2<=v1/v2) r1=(u1+u2-1)/u2,r2=1;
    else{
        ll d=u1/u2; //u1/u2-d<r1/r2-d<v1/v2-d
        solve(v2,v1-v2*d,r2,r1,u2,u1-u2*d);
        r1+=d*r2;
    }
}

int main(){
    int t;
    scanf("%d",&t);
    while(t--){
        ll p,x; scanf("%lld%lld",&p,&x);
        ll b,k; solve(p,x,b,k,p,x-1);
        printf("%lld/%lld\n",b*x-p*k,b);
    }
}
```