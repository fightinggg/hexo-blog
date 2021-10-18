---
date: 2018-10-26 23:51:44
updated: 2018-10-26 23:51:44
---

# 题目1

[2018宁夏网络赛H题](https://nanti.jisuanke.com/t/26219)

给你类似剪刀石头布游戏的五种手势和十种克制关系。每种手势克制其他两种手势并被另外两种手势克制。给你两个字符串分别表示A，B的 手势顺序，A长B短，你可以随意挪动B相对于A的位置，求B最多能赢多少次？

```txt
若两个串为abcde和ede
则共有三种方法来决斗，
abcde
eda

abcde
 eda

abcde
  eda
为每一个字符标上指数，将一个串逆置后，发现是fft
```



# 题目2

[ BZOJ4259](https://acm.taifua.com/bzoj/p/4259.html)

给你两个字符串原串和匹配串，串里只包含小写字母和`∗`,`∗`可以表示任意字符，问匹配串在原串不同位置中出现多少次，起始位置不同即不同位置。
    我们还是利用上一题逆置短串构造卷积的方法，我们把`*`的值当作赋为0，`pow(str1[i]−str2[i],2)*str1[i]*str2[i] `化简消去负数项即可

# FFT

```c++
const int maxn=4e6//开四倍所有数组。准确的数值是乘法结果数组的2进制对齐那么大。这个值小于四倍，
const double pi=acos(-1.0);

struct cp{
    double x,y;
    cp(double X=0,double Y=0){x=X,y=Y;}
    cp operator + (cp b){return cp(x+b.x,y+b.y);}
    cp operator - (cp b){return cp(x-b.x,y-b.y);}
    cp operator * (cp b){return cp(x*b.x-y*b.y,x*b.y+y*b.x);}
};

// opt = 1 把系数表达式变为点值表达式
// opt =-1 把点值表达式变成系数表达式
// 传参的时候必须要求n为2的bits次方
int r[maxn];
void fft(cp *a,int n,int bits,int opt){
    for (int i=0; i<n; ++i){
        r[i]=(r[i>>1]>>1)|((i&1)<<(bits-1));
        if (i<r[i]) swap(a[i],a[r[i]]);
    }
    for (int k=1; k<n; k<<=1){
        cp wn=cp(cos(pi/k),opt*sin(pi/k));
        for (int i=0; i<n; i+=(k<<1)){
            cp w=cp(1,0);
            for (int j=0; j<k; ++j,w=w*wn){
                cp x=a[i+j],y=w*a[i+j+k];
                a[i+j]=x+y,a[i+j+k]=x-y;
            }
        }
    }
}

// 没有必要分x和y的长度,没有意义，对时间复杂度影响不大
// 传数组使用闭区间[0,n-1],n-1为多项式最高次数
// xy甚至可以传一个x或y一样的参数 例如mul(f,g,f,n,m)等价于f*=g
cp cpa[maxn],cpb[maxn];//经测试, 两个1e6的多项式乘起来大概的时间700ms, 
void mul(int*x,int*y,int*xy,int xn,int yn){
    int exn=1,bits=0;
    while(exn-1 < xn-1+yn-1)exn<<=1,bits++;//exn为xy数组拓展的长度，bits为lg(exn)
    for(int i=0 ;i<xn ;i++)cpa[i]=cp(x[i],0);
    for(int i=xn;i<exn;i++)cpa[i]=cp(0,0);//按0补齐
    for(int i=0 ;i<yn ;i++)cpb[i]=cp(y[i],0);
    for(int i=yn;i<exn;i++)cpb[i]=cp(0,0);//按0补齐
    fft(cpa,exn,bits,1);fft(cpb,exn,bits,1);//化为点值表示法
    for(int i=0; i<exn;i++)cpa[i]=cpa[i]*cpb[i];//乘
    fft(cpa,exn,bits,-1);//化为系数表示法
    for(int i=0; i<exn;i++)xy[i]=cpa[i].x/exn+0.5;//赋值结果
}
```

## NTT

```c++
typedef long long ll;
// ll mod=1004535809,g=3;// 479*pow(2,21)+1
// ll mod=998244353,g=3;//  119*pow(2,23)+1
// ll mod=2281701377,g=3;//  17*pow(2,27)+1

ll qpow(ll a,ll b,ll mod){
    ll ret=1;
    while(b){
        if(b&1) ret=ret*a%mod;
        a=a*a%mod;
        b>>=1;
    }
    return ret;
}

const ll maxn=1e6;
ll r[maxn];
void ntt(ll*a,ll n,ll bits,ll opt,ll g,ll mod){
    for(ll i=0;i<n;i++) {
        r[i]=(r[i>>1]>>1)|((i&1)<<(bits-1));
        if(i<r[i]) swap(a[i],a[r[i]]);
    }
    for(ll k=1;k<n;k<<=1){
        ll wn=qpow(g,(mod-1)/(k<<1),mod);//用原根代替单位根
        if(opt==-1) wn=qpow(wn,mod-2,mod);//逆变换则乘上逆元
        for (ll i=0;i<n;i+=(k<<1)){
            for (ll j=0,w=1; j<k; j++,w=w*wn%mod){
                ll x=a[i+j], y=w*a[i+j+k]%mod;
                a[i+j]=(x+y)%mod, a[i+j+k]=(x-y+mod)%mod;
            }
        }
    }
    if(opt==-1) {
        ll inv=qpow(n,mod-2,mod);
        for(ll i=0;i<n;i++) a[i]=a[i]*inv%mod;
    }
}

ll cpx[maxn],cpy[maxn];
void mul(ll*x,ll*y,ll*xy,ll xn,ll yn,ll g,ll mod){
    ll exn=1,bits=0;
    while(exn-1 < xn-1+yn-1)exn<<=1,bits++;//exn为xy数组拓展的长度，bits为lg(exn)
    for(ll i=0 ;i<xn ;i++)cpx[i]=x[i];
    for(ll i=xn;i<exn;i++)cpx[i]=0;//按0补齐
    for(ll i=0 ;i<yn ;i++)cpy[i]=y[i];
    for(ll i=yn;i<exn;i++)cpy[i]=0;//按0补齐
    ntt(cpx,exn,bits,1,g,mod); ntt(cpy,exn,bits,1,g,mod);//化为点值表示法
    for(ll i=0; i<exn;i++)cpx[i]=cpx[i]*cpy[i]%mod;//乘
    ntt(cpx,exn,bits,-1,g,mod);//化为系数表示法
    for(ll i=0; i<exn;i++)xy[i]=cpx[i];//赋值结果
}
```


