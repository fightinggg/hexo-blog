---
date: 2019-10-28 19:06:42
updated: 2019-10-28 19:06:42
mathjax: true
---



# min25筛是什么
min25筛是一种筛法，他能以亚线性的时间复杂度筛出一类函数的前缀和  

# 定义一部分符号
$M(x) x\gt1$代表$x$的最小质因子 

我们再设$P_j$为第$j$小的质数, $P_1=2,P_2=3,P_3=5...$  

<!---more-->
# 先看最简单的第一类函数
$$
\begin{aligned}
f(x)=\left\{\begin{matrix}
x^k&x\in primes\\
0&x \notin primes
\end{matrix}\right.
\end{aligned}
$$
对于这个函数我们可以利用min25筛来达到$O(\frac{n^\frac{3}{4}}{lg(n)})$的时间复杂度，我们没有办法直接求这个函数的前缀和，但是我们可以另外设一个相对好求的函数$h(x)=x^k$，通过h来求f，因为$\begin{aligned}\sum_{i=2}^nh(i)[i\in primes]=\sum_{i=2}^nf(i)[i\in primes]\end{aligned}$
设
$$
\begin{aligned}
g(n,j)=\sum_{i=2}^nh(i)[i \in primes或M(i)\gt P_j]
\end{aligned}
$$
即 i要么是质数，要么i的最小质因子大于$P_j$。对g函数的理解，我们甚至可以回忆埃式筛,每一轮都会选择一个最小的质数，然后筛掉他的所有倍数，最终唯有所有的质数不会被筛掉，我们的这个函数就是那些没有被筛掉的数的函数值的和。  
$$
\begin{aligned}
g(n,j)=\left\{\begin{matrix}
g(n,j-1)-x&M(n)\le P_j\\
g(n,j-1)& M(n)\gt P_j
\end{matrix}\right.
\end{aligned}
$$
x处是什么呢?第j-1次的结果和第j次的结果有什么不同呢？第j次埃式筛筛掉了$P_j$的倍数，他们的最小质因子都是$P_j$,所以  
$$
\begin{aligned}
x&=\sum_{i=2P_j}^nh(i)[M(i)=P_j]
\\&=\sum_{i=2}^{\frac{n}{P_j}}h(iP_j)[M(iP_j)=P_j]
\\&=h(P_j)\sum_{i=2}^{\frac{n}{P_j}}h(i)[M(i)\ge P_j]
\\&=h(P_j)\sum_{i=2}^{\frac{n}{P_j}}h(i)[M(i)\gt P_{j-1}]
\\&=h(P_j)(\sum_{i=2}^{\frac{n}{P_j}}h(i)[M(i)\gt P_{j-1}或i \in primes]-\sum_{i=1}^{j-1}h(P_i))
\\&=h(P_j)(g(\frac{n}{P_j},j-1)-\sum_{i=1}^{j-1}h(P_i))
\end{aligned}
$$

最后就成了这个  
$$
\begin{aligned}
g(n,j)=\left\{\begin{matrix}
g(n,j-1)-h(P_j)(g(\frac{n}{P_j},j-1)-\sum_{i=1}^{j-1}h(P_i))&M(n)\le P_j\\
g(n,j-1)& M(n)\gt P_j
\end{matrix}\right.
\end{aligned}
$$
到这里就已经可以记忆化递归解决了,但是递归比较慢,我们考虑把它变成非递归,我们观察这个式子。 

我们发现我们可以先枚举j因为$g(n,j)$是由$g(?,j-1)$推导过来的，然后从大到小枚举n，来更新数组，又因为n的前一项可能与$\frac{n}{P_j}$有关，所以我们可以把他们都用map映射一下，再进一步分析，根据整除分块的传递性，$\frac{\frac{a}{b}}{c}=\frac{a}{bc}$我们可以得出所有$g(x,y)$中x构成的集合，恰好是集合$\{x|x=\frac{n}{t},t\in [1,n]\}$,最后预处理一下$\sum^{j-1}_{i=1}h(P_i)$即可，对于整除分块的映射，我们又可以加速到O(1)此处不做过多分析。 

最后我们得到了这个$O(\frac{n^{\frac{3}{4}}}{lg(n)})$算法  

# 再看复杂一些的第二类函数
第二类函数是抽象的积性函数$f$。 

如果我们能够通过一些方法求出$\sum_{i=1}^{n}f(P_i)$和$f(P_i^k)$,那么我们就能够很简单得推出f的前缀和。我们这样来求，比如说f(x)在x是一个质数的时候能表示为某个简单多项式，那么我们就可以通过将多项式函数看做某些幂函数的线形组合，先求出幂函数各自的质数前缀和，然后相加就可以得到f的质数前缀和。而对于另外一个$f(P_i^k)$则需要通过函数的定义来求了。 

现在假设我们已经预处理出了$\sum_{i=1}^xf(P_i)(x \in n的数论分块即x=\frac{n}{?})其实就是g(x,\infty)$。 

我们设$\begin{aligned}S(n,j)=\sum_{i=2}^nf(i)[M(i)\ge P_j]\end{aligned}$注意和$g(n,j)$对比。  
$$
\begin{aligned}
&S(n,j)
\\=&\sum_{i=j}^{P_i\le n}f(P_i)+f(P_i)S(\frac{n}{P_j},j+1)+f(P_i^2)S(\frac{n}{P_i^2},j+1)+f(P_i^3)S(\frac{n}{P_i^3},j+1)+...
\end{aligned}
$$
这里已经可以了，第一项可以通过两个前缀和相减得到，后边的递归。这就是min25筛的灵魂所在。 

我们现在好好来分析一下这个递归式子。我们发现第一项是最好求的，就是第一类函数，但是后边的几项必须要求积性函数。这也是min25筛只能对积性函数起作用的地方。

# min25筛能处理更多的函数吗？
我们暂定这些函数为f，显然我们必须要能够求出g和s，这就是min25筛,对于g，这里不对此作过多分析，没有这个必要，我们假定都是一类与幂函数线形组合有关的函数，抑或是某几项与幂函数有关，反正只要能够找到完全积性函数h在质数自变量和f函数存在相等关系即可。s的话，第一项简单差分，后边的看似要求f是积性函数，其实不然，我们仔细分析，其实他要求的是这样的要求: 假定y是x的最小质因子，$z=y^k且z｜x且k最大$，我们只要能够通过$f(z)和f(\frac{x}{z})$这两项能够推出f(x)即可，这里并没有强制要求$f(x)=f(z)*f(\frac{x}{z})即f(x)=f(M(x))$。举个例子，若$f(x)=f(z)=f(y)=y$，我们也是可以求的。  


贴一个求$f(a^b)=a \bigotimes b$和$f(x)=M(x)$的代码
```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

const ll sqr=2e5+10;// 2sqrt(n)
ll p[sqr],np[sqr]={1,1};
void prime_ini(){// 素数不可能筛到longlong范围
    for(int i=2; i<sqr; i++){
        if(!np[i])p[++p[0]]=i;//把质数收录
        for(int j=1; 1ll*i*p[j]<sqr; j++){
            np[i*p[j]]=1;//对每一个数字枚举他的最小因子
            if(i%p[j]==0)break;//在往后的话就不是最小因子了
        }
    }
}

const ll mod=1e9+7;
ll w[sqr],g[sqr][2],sp[sqr][2],id1[sqr],id2[sqr],mpn;
inline ll& mp(ll x){return x<sqr?id1[x]:id2[mpn/x];}
void min25(ll n){// 计算质数位置之和的时候 只用到了f(x,1) 和 oddsum(x)
    mpn=n;
    ll m=0;
    for(ll l=1,r;l<=n;l=r+1){// i从小到大  n/i从到小
        r=n/(n/l);
        mp(n/l)=++m;
        w[m]=n/l;
        g[m][0]=(w[m]-1)%mod;// f(x)=1, s(x)=x
        g[m][1]=(__int128(w[m])*(w[m]+1)/2-1)%mod; // f(x)=x, s(x)=x(x+1)/2  这里的int128非常关键，因为n是1e10级别的
    }//assert(w[m]==1);
    for(ll j=1;p[j]*p[j]<=n;j++){
        sp[j][0]=sp[j-1][0]+1;// f(x)=1
        sp[j][1]=(sp[j-1][1]+p[j])%mod;// f(x)=x
        for(ll i=1;w[i]>=p[j]*p[j];++i){// w[i]从大到小 当i等于m的时候 w[i]>=p[j]*p[j]恒不成立
            g[i][0]-=(g[mp(w[i]/p[j])][0]-sp[j-1][0])*1;// f(x)=1
            g[i][1]-=(g[mp(w[i]/p[j])][1]-sp[j-1][1])*p[j];// f(x)=x
            g[i][0]=(g[i][0]%mod+mod)%mod;
            g[i][1]=(g[i][1]%mod+mod)%mod;
        }
    }
}

// f(pow(a,b))=a^b f为积性函数
inline ll f(ll a,ll b){return a^b;} // 当且仅当a是一个素数
ll s(ll n,ll j){// sum of f(x) x<=n minfac(x)>=p[j]
    ll res=(g[mp(n)][1]-g[mp(n)][0])-(sp[j-1][1]-sp[j-1][0])+2*mod;// 减掉p[j]前面的质数 ： [p[j],n]上的质数的函数的和
    if(n>=2&&j==1) res+=2;
    for(ll k=j;p[k]*p[k]<=n;k++){// 枚举的最小质因子
        for(ll x=p[k],e=1;x*p[k]<=n;x*=p[k],e++){//枚举该因子出现次数
            res+=s(n/x,k+1)*f(p[k],e)%mod+f(p[k],e+1);// 每次增加2mod res不可能超过 long long
        }
    }
    return res%mod;
}

// f(x)=minfac(x)  f不为积性函数 但我们用积性函数来做他
typedef pair<ll,ll> pll;
pll s2(ll n,ll j){//
    ll res1=g[mp(n)][0]-sp[j-1][0]+2*mod;
    ll res2=g[mp(n)][1]-sp[j-1][1]+2*mod;// 减掉p[j]前面的质数 ： [p[j],n]上的质数的函数的和
    for(ll k=j;p[k]*p[k]<=n;k++){// 枚举的最小质因子
        for(ll x=p[k],e=1;x*p[k]<=n;x*=p[k],e++){//枚举该因子出现次数
            pll tmp=s2(n/x,k+1);
            res1+=tmp.first*1%mod+1;
            res2+=tmp.first*p[k]%mod+p[k];// 每次增加2mod res不可能超过 long long
        }
    }
    return pll(res1%mod,res2%mod);
}

int main() {
    prime_ini();
    ll n;
    while(cin>>n){
        min25(n);
        if(n==1) cout<<1<<endl;
        else cout<<(s(n,1)+1)%mod<<endl;
    }
}

```