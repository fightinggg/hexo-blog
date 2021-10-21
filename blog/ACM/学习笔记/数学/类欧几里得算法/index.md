---
date: 2019-07-26 15:57:18
updated: 2019-07-26 15:57:18
---

先考虑一个简单的问题

$$
f(a,b,c,n)=\sum_{i=0}^n\lfloor\frac{ai+b}{c}\rfloor
$$

<!-- more -->

我们这样来解决
$$
\begin{aligned}
\\&f(a,b,c,n)
\\&=\sum_{i=0}^n\lfloor\frac{ai+b}{c}\rfloor
\\&=f(a\%c,b\%c,c,n)+\sum_{i=0}^{n}(i\lfloor\frac{a}{c}\rfloor+\lfloor\frac{b}{c}\rfloor)
\\&=f(a\%c,b\%c,c,n)+\frac{n(n+1)}{2}\lfloor\frac{a}{c}\rfloor+(n+1)\lfloor\frac{b}{c}\rfloor
\\
\\&令m=\lfloor\frac{an+b}{c}\rfloor
\\&则f(a,b,c,n)
\\&=\sum_{i=0}^n\lfloor\frac{ai+b}{c}\rfloor
\\&=\sum_{i=0}^n\sum_{j=1}^m[\lfloor\frac{ai+b}{c}\rfloor\geq j]
\\&=\sum_{i=0}^n\sum_{j=0}^{m-1}[\lfloor\frac{ai+b}{c}\rfloor\geq j+1]
\\&=\sum_{i=0}^n\sum_{j=0}^{m-1}[ai+b \geq cj+c]
\\&=\sum_{i=0}^n\sum_{j=0}^{m-1}[ai \gt cj+c-b-1]
\\&=\sum_{i=0}^n\sum_{j=0}^{m-1}[i \gt \lfloor\frac{cj+c-b-1}{a}\rfloor]
\\&=\sum_{j=0}^{m-1}n-\lfloor\frac{cj+c-b-1}{a}\rfloor
\\&=nm-f(c,c-b-1,a,m-1)
\\&可以开始递归，递归出口 m=0
\end{aligned}
$$

然后我们考虑两个难一点的题目，同时解决这两个问题
$$
\begin{aligned}
&h(a,b,c,n)=\sum_{i=0}^n\lfloor\frac{ai+b}{c}\rfloor^2
\quad\quad\quad\quad g(a,b,c,n)=\sum_{i=0}^ni\lfloor\frac{ai+b}{c}\rfloor
\end{aligned}
$$


先来看h
$$
\begin{aligned}
&h(a,b,c,n)\\
=&\sum_{i=0}^n\lfloor\frac{ai+b}{c}\rfloor^2\\
=&\sum_{i=0}^n(\lfloor\frac{(a\%c)i+(b\%c) }{c}\rfloor+\lfloor\frac{a}{c}\rfloor i+\lfloor\frac{b}{c}\rfloor)^2\\
=&\sum_{i=0}^n(\lfloor\frac{(a\%c)i+(b\%c) }{c}\rfloor^2+\lfloor\frac{a}{c}\rfloor^2i^2+\lfloor\frac{b}{c}\rfloor^2+2\lfloor\frac{a}{c}\rfloor i\lfloor\frac{b}{c}\rfloor+2\lfloor\frac{(a\%c)i+(b\%c) }{c}\rfloor\lfloor\frac{a}{c}\rfloor i+2\lfloor\frac{(a\%c)i+(b\%c) }{c}\rfloor\lfloor\frac{b}{c}\rfloor\\
=&h(a\%c,b\%c,c,n)+2\lfloor\frac{a}{c}\rfloor g(a\%c,b\%c,c,n)+2\lfloor\frac{b}{c}\rfloor f(a\%c,b\%c,c,n)+\lfloor\frac{a}{c}\rfloor^2\frac{n(n+1)(2n+1)}{6}+2\lfloor\frac{a}{c}\rfloor \lfloor\frac{b}{c}\rfloor\frac{n(n+1)}{2}+(n+1)\lfloor\frac{b}{c}\rfloor^2
\end{aligned}
$$

这里我们只用关心第一项
$$
\begin{aligned}
&令m=\lfloor\frac{an+b}{c}\rfloor则\\
&h(a,b,c,n)\\
=&\sum_{i=0}^n\lfloor\frac{ai+b}{c}\rfloor^2\\
=&\sum_{i=0}^n(\sum_{j=1}^m[\lfloor\frac{ai+b}{c}\rfloor\geq j])^2\\
=&\sum_{i=0}^n(\sum_{j=0}^{m-1}[i \gt \lfloor\frac{cj+c-b-1}{a}\rfloor])^2\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}[i \gt \lfloor\frac{cj+c-b-1}{a}\rfloor]\sum_{k=0}^{m-1}[i \gt \lfloor\frac{ck+c-b-1}{a}\rfloor]\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}\sum_{k=0}^{m-1}[i \gt \lfloor\frac{cj+c-b-1}{a}\rfloor]*[i \gt \lfloor\frac{ck+c-b-1}{a}\rfloor]\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}\sum_{k=0}^{m-1}[i \gt max(\lfloor\frac{cj+c-b-1}{a}\rfloor,\lfloor\frac{ck+c-b-1}{a}\rfloor)]\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}\sum_{k=0}^{m-1}[i \gt max(\lfloor\frac{cj+c-b-1}{a}\rfloor,\lfloor\frac{ck+c-b-1}{a}\rfloor)]\\
=&nm^2-\sum_{j=0}^{m-1}\sum_{k=0}^{m-1} max(\lfloor\frac{cj+c-b-1}{a}\rfloor,\lfloor\frac{ck+c-b-1}{a}\rfloor)\\
=&nm^2-2\sum_{j=0}^{m-1}j\lfloor\frac{cj+c-b-1}{a}\rfloor-\sum_{j=0}^{m-1}\lfloor\frac{cj+c-b-1}{a}\rfloor\\
=&nm^2-2g(c,c-b-1,a,m-1)-f(c,c-b-1,a,m-1)
\end{aligned}
$$
推出来了。。。。。

然后我们来怼g
$$
\begin{aligned}
&g(a,b,c,n)\\
=&\sum_{i=0}^ni\lfloor\frac{ai+b}{c}\rfloor\\
=&\sum_{i=0}^ni\lfloor\frac{(a\%c)i+b\%c}{c}+\lfloor\frac{a}{c}\rfloor i+\lfloor\frac{b}{c}\rfloor\rfloor \\
=&\sum_{i=0}^ni(\lfloor\frac{(a\%c)i+b\%c}{c}\rfloor+\lfloor\frac{a}{c}\rfloor i+\lfloor\frac{b}{c}\rfloor)\\
=&\sum_{i=0}^ni\lfloor\frac{(a\%c)i+b\%c}{c}\rfloor+\sum_{i=0}^n\lfloor\frac{a}{c}\rfloor i^2+\sum_{i=0}^n\lfloor\frac{b}{c}\rfloor i\\
=&\frac{n(n+1)(2n+1)}{6}\lfloor\frac{a}{c}\rfloor +\frac{n(n+1)}{2}\lfloor\frac{b}{c}\rfloor +\sum_{i=0}^ni\lfloor\frac{(a\%c)i+b\%c}{c}\rfloor\\
=&g(a\%c,b\%c,c,n)+\frac{n(n+1)(2n+1)}{6}\lfloor\frac{a}{c}\rfloor +\frac{n(n+1)}{2}\lfloor\frac{b}{c}\rfloor
\end{aligned}
$$
同理我们只关心第一项
$$
\begin{aligned}
&g(a,b,c,n)\\
=&\sum_{i=0}^ni\lfloor\frac{ai+b}{c}\rfloor\\
=&\sum_{i=0}^n(i\sum_{j=1}^m[\lfloor\frac{ai+b}{c}\rfloor \geq j])\\
=&\sum_{i=0}^n(i\sum_{j=0}^{m-1}[i \gt \lfloor\frac{cj+c-b-1}{a}\rfloor])\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}i[i \gt \lfloor\frac{cj+c-b-1}{a}\rfloor]\\
=&\sum_{j=0}^{m-1}\sum_{i=\lfloor\frac{cj+c-b-1}{a}\rfloor+1}^ni\\
=&\sum_{j=0}^{m-1}\frac{(n+\lfloor\frac{cj+c-b-1}{a}\rfloor+1)*(n-(\lfloor\frac{cj+c-b-1}{a}\rfloor+1)+1)}{2}\\
=&\sum_{j=0}^{m-1}\frac{(n+\lfloor\frac{cj+c-b-1}{a}\rfloor+1)*(n-\lfloor\frac{cj+c-b-1}{a}\rfloor)}{2}\\
=&\sum_{j=0}^{m-1}\frac{n^2-\lfloor\frac{cj+c-b-1}{a}\rfloor^2+n-\lfloor\frac{cj+c-b-1}{a}\rfloor}{2}\\
=&\frac{n(n+1)m}{2}-\frac{\sum_{j=0}^{m-1}\lfloor\frac{cj+c-b-1}{a}\rfloor^2}{2}-\frac{\sum_{j=0}^{m-1}\lfloor\frac{cj+c-b-1}{a}\rfloor}{2}\\
=&\frac{n(n+1)m}{2}-\frac{h(c,c-b-1,a,m-1)}{2}-\frac{f(c,c-b-1,a,m-1)}{2}\\
\end{aligned}
$$
推完了总结一下
$$
\begin{aligned}
&f(a,b,c,n)=\sum_{i=0}^n\lfloor\frac{ai+b}{c}\rfloor\\
&h(a,b,c,n)=\sum_{i=0}^n\lfloor\frac{ai+b}{c}\rfloor^2  \\
& g(a,b,c,n)=\sum_{i=0}^ni\lfloor\frac{ai+b}{c}\rfloor  \\
\\
&f(a,b,c,n)=f(a\%c,b\%c,c,n)+\frac{n(n+1)}{2}\lfloor\frac{a}{c}\rfloor+(n+1)\lfloor\frac{b}{c}\rfloor\\
&h(a,b,c,n)=h(a\%c,b\%c,c,n)+2\lfloor\frac{a}{c}\rfloor g(a\%c,b\%c,c,n)+2\lfloor\frac{b}{c}\rfloor f(a\%c,b\%c,c,n)+\lfloor\frac{a}{c}\rfloor^2\frac{n(n+1)(2n+1)}{6}+2\lfloor\frac{a}{c}\rfloor \lfloor\frac{b}{c}\rfloor\frac{n(n+1)}{2}+(n+1)\lfloor\frac{b}{c}\rfloor^2\\
&g(a,b,c,n)=g(a\%c,b\%c,c,n)+\frac{n(n+1)(2n+1)}{6}\lfloor\frac{a}{c}\rfloor +\frac{n(n+1)}{2}\lfloor\frac{b}{c}\rfloor\\
\\
&f(a,b,c,n)=nm-f(c,c-b-1,a,m-1)\\
&h(a,b,c,n)=nm^2-2g(c,c-b-1,a,m-1)-f(c,c-b-1,a,m-1)\\
&g(a,b,c,n)=\frac{n(n+1)m}{2}-\frac{h(c,c-b-1,a,m-1)}{2}-\frac{f(c,c-b-1,a,m-1)}{2}\\
\end{aligned}
$$



```cpp
void calfgh_baoli(ll a,ll b,ll c,ll n,ll&f,ll&g,ll&h){
    f=g=h=0;
    for(ll i=0;i<=n;i++) {
        f+=(a*i+b)/c;
        g+=i*((a*i+b)/c);
        h+=((a*i+b)/c)*((a*i+b)/c);
    }
}
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
```