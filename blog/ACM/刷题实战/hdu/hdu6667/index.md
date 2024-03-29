---
date: 2019-08-14 19:50:09
updated: 2019-08-14 19:50:09
---

###name
Roundgod and Milk Tea

###decription
Roundgod is a famous milk tea lover at Nanjing University second to none. This year, he plans to conduct a milk tea festival. There will be n classes participating in this festival, where the ith class has ai students and will make bi cups of milk tea.

Roundgod wants more students to savor milk tea, so he stipulates that every student can taste at most one cup of milk tea. Moreover, a student can't drink a cup of milk tea made by his class. The problem is, what is the maximum number of students who can drink milk tea?

<!---more-->

###input
The first line of input consists of a single integer T (1≤T≤25), denoting the number of test cases.

Each test case starts with a line of a single integer n $(1≤n≤10^6)$, the number of classes. For the next n lines, each containing two integers a,b (0≤a,b≤109), denoting the number of students of the class and the number of cups of milk tea made by this class, respectively.

It is guaranteed that the sum of n over all test cases does not exceed $6×10^6$.

###output
For each test case, print the answer as a single integer in one line.
 

###sample input
1
2
3 4
2 1


###sample output
3

###toturial
霍尔定理

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define rep(i,j,k) for(ll i=(j);i<=(k);i++)

const int maxn=1e6+6;
ll a[maxn],b[maxn];
int main(){
    ll t; scanf("%lld",&t);
    while(t--){
        ll n; scanf("%lld",&n);
        ll sa=0,sb=0,mx=0;// 空集
        rep(i,1,n) scanf("%lld%lld",a+i,b+i),sa+=a[i],sb+=b[i];
        rep(i,1,n) mx=max(mx,a[i]-(sb-b[i]));// 子集中一个元素
        printf("%lld\n",sa-max(mx,sa-sb));// 子集中大于一个元素
    }
}
```