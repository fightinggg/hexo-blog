---
date: 2019-05-27 14:39:14
updated: 2019-05-27 14:39:14
---

# 积性函数

对于一个离散函数$f(x), x\in Z^+$ , 如果$\forall \gcd(a,b)=1$都有$f(a\cdot b)=f(a)\cdot f(b)$, 则称函数$f(x)$为积性函数。

# 完全积性函数

对于一个离散函数$f(x), x\in Z^+$ , 如果$\forall a,b\in Z^+$都有$f(a\cdot b)=f(a)\cdot f(b)$, 则称函数$f(x)$为完全积性函数。

# 积性函数分析

我们根据积性函数的定义，其实只要我们计算出了所有素数的幂的函数值，则任何其他$f(x)$都可以快速获取。

对此笔者准备了一个模版，我们只需要修改其中的56到63行即可



# 欧拉函数

$\phi(n)$就是小于等于n，且与n互质的数的个数。

```c++
//O(lgn)适用于少求
int euler(int n){
    int ret=n;
    for(int i=2; i*i<=n; i++)
        if(n%i==0){
            ret=ret-ret/i;
            do n/=i;
            while(n%i==0);
        }
    if(n>1)ret=ret-ret/n;
    return ret;
}
```

# 莫比乌斯函数

```c++
//求单个值
ll getmob(ll a){
    ll x=a,tmp=a;
    int cnt=0,now=0;
    for(ll j=2;j*j<=x;j++){
        now=0;
        if(x%j==0){
            while(x%j==0) now++,x/=j;
            if(now>1) return 0;
            cnt++;
        }
    }
    if(x!=1) cnt++;
    return (cnt&1)?-1:1;
}
int getmu(int n)
{
    int v=1;
    for(int i=2;i*i<=n;i++)
     if(n%i==0)
     {
        v=-v;n/=i;
        if(n%i==0)return 0;
     }
    if(n!=1)v=-v;
    return v;
}
```



```cpp
#include<bits/stdc++.h>
using namespace std;

/*                        数论函数表
 i phi(i) PHI(i) muu(i) MUU(i) ddd(i) DDD(i) sig(i) SIG(i)
 1   1      1      1      1      1      1      1      1
 2   1      2     -1      0      2      3      3      4
 3   2      4     -1     -1      2      5      4      8
 4   2      6      0     -1      3      8      7     15
 5   4     10     -1     -2      2     10      6     21
 6   2     12      1     -1      4     14     12     33
 7   6     18     -1     -2      2     16      8     41
 8   4     22      0     -2      4     20     15     56
 9   6     28      0     -2      3     23     13     69
10   4     32      1     -1      4     27     18     87
11  10     42     -1     -2      2     29     12     99
12   4     46      0     -2      6     35     28    127
13  12     58     -1     -3      2     37     14    141
14   6     64      1     -2      4     41     24    165
15   8     72      1     -1      4     45     24    189
16   8     80      0     -1      5     50     31    220
17  16     96     -1     -2      2     52     18    238
18   6    102      0     -2      6     58     39    277
19  18    120     -1     -3      2     60     20    297
20   8    128      0     -3      6     66     42    339
21  12    140      1     -2      4     70     32    371
22  10    150      1     -1      4     74     36    407
23  22    172     -1     -2      2     76     24    431
24   8    180      0     -2      8     84     60    491
25  20    200      0     -2      3     87     31    522
26  12    212      1     -1      4     91     42    564
27  18    230      0     -1      4     95     40    604
28  12    242      0     -1      6    101     56    660
29  28    270     -1     -2      2    103     30    690
30   8    278     -1     -3      8    111     72    762*/

/****  * 超级积性函数线性筛 *  ****/
typedef long long ll;
const ll maxn=5e6;
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

int main(){
    f_ini();
    printf("数论函数表\n");
    printf(" i phi(i) PHI(i) muu(i) MUU(i) ddd(i) DDD(i) sig(i) SIG(i)\n");
    for(ll i=1;i<=30;i++) {
        printf("%2lld %3lld %6lld %6lld %6lld %6lld %6lld %6lld %6lld\n",i,PHI[i]-PHI[i-1],PHI[i],MUU[i]-MUU[i-1],MUU[i],DDD[i]-DDD[i-1],DDD[i],SIG[i]-SIG[i-1],SIG[i]);
    }
    return 0;
}
```