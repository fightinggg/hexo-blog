---
date: 2019-05-02 12:37:22
updated: 2019-05-02 12:37:22
---


让你用lg的时间复杂度求下面这东西(n<1e18)

$$
\begin{aligned}
&\prod_{i=1...n}{(2i-1)}  \%2^{64}\\&
suppose\quad that\quad f(x,n)=(2x+1)(2x+3)(2x+5)...(2x+2n-1)\%2^{64}\\&
then \quad the \quad 0th \quad item \quad of \quad f(x,n) \quad is \quad answer\\&
we \quad can \quad try \quad to\quad calculate \quad f(x,n) \quad by \quad f(x,\left \lfloor \frac{n}{2} \right \rfloor)  \\&
let \quad y=x+n\\&
then \quad f(y,n)=(2y+1)(2y+3)(2y+5)...(2y+2n-1)\%2^{64}\\&
so \quad f(x+n,n)=(2x+2n+1)(2x+2n+3)(2x+2n+5)...(2y+4n-1)\%2^{64}\\&
Surprisedly \quad we \quad find \quad that \quad f(x,2n)=f(x,n)*f(x+n,n)\\&
which \quad means \quad we \quad can \quad calculate\quad  f(x,2n)\quad  by\quad f(x,n) \quad easy\\&
\\&
becase \quad we \quad can \quad calculate \quad f(x+n,n)\quad by \quad f(x,n) \\&
but \quad we \quad can't \quad calculate \quad it \quad faster \quad because\quad of\quad the\quad huge\quad numbers \quad of \quad item\\&
considering \quad that \quad we \quad need \quad mod \quad 2^{64} , we\quad can \quad reserve \quad  the \quad items \quad with \quad index \quad less\quad  than\quad  64\\&
because \quad the \quad useful \quad information \quad is  \quad the \quad 0th \quad item \\&
and \quad in \quad f(x,n)\quad when \quad the\quad index\quad of\quad x \quad is \quad larger \quad than\quad 63 ,the \quad coefficient \quad of \quad it \quad must\quad divisible\quad 2^{64}\\&
it \quad has \quad no \quad contribution \quad to \quad answer \quad and \quad f(x+n,n)\\&
so \quad we \quad can \quad solve \quad it \quad by \quad this \quad way
\\&
for \quad every \quad polynomial \quad we \quad reserve\quad the \quad first \quad 64\quad  items \quad of\quad x
\\& and  \quad then \quad calculate \quad f(x,n) \quad by
\left\{\begin{matrix}
\quad  f(x,\left \lfloor \frac{n}{2} \right \rfloor)*f(x+\left \lfloor \frac{n}{2} \right \rfloor,\left \lfloor \frac{n}{2} \right \rfloor)\quad if \quad n\%2=0\\&
\quad  f(x,\left \lfloor \frac{n}{2} \right \rfloor)*f(x+\left \lfloor \frac{n}{2} \right \rfloor,\left \lfloor \frac{n}{2} \right \rfloor)*(2x+2n-1) \quad if \quad n\%2=1
\end{matrix}\right.
\\&
and \quad we \quad can \quad get \quad the \quad answer \quad no \quad more \quad than \quad lg \quad times \quad recursion\\&
because \quad of \quad the \quad 64 \quad items \quad only \quad and \quad we \quad don't\quad care \quad the \quad higher \quad  items  ,\\&
it \quad is \quad very \quad fast \quad to \quad get \quad f(x,n)\quad by \quad f(x+n,n)
\\&
so\quad the\quad  total\quad  time\quad  complexity \quad is \quad O(lgn)

\end{aligned}
$$

假设f(x,n)=(2x+1)(2x+3)(2x+5)...(2x+2n-1)%64

然后这东西的0次项系数就是答案

我们尝试通过f(x,n/2)来求f(x,n)

令y=x+n

则f(y,n)=(2y+1)(2y+3)(2y+5)...(2y+2n-1)%64

所以f(x+n,n)=(2x+2n+1)(2x+2n+3)(2x+2n+5)...(2x+4n-1)%64

我们惊讶地发现了f(x,2n)=f(x,n)*(fx+n,n)

这意味着我们可以通过f(x,n)来求f(x,2n)因为我们可以通过f(x,n)求出f(x+n,n)

很遗憾的是这些东西项数太多了

考虑到我们要的是模上2^64的答案，我们可以只保留前64项

因为有用的只有0次项，但是在f(x,n)转移到f(x+n,n)的时候也只有前64项有效，因为大于指数64的项，他们前面的系数一定整除2^64次方，

于是我们就有了做法了

我们保留前64项

...

时间复杂度为lg级别