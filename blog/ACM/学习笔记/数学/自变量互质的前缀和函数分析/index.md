---
date: 2019-10-20 15:56:54
updated: 2019-10-20 15:56:54
---

# 有这样一类问题，他们的形式常常是这个样子 

$$
\begin{aligned}
\sum_{i=1}^n{f(i)[gcd(i,j)=1]}
\end{aligned}
$$

<!---more-->

## 我们来对他进行变形

$$
\begin{aligned}
&\sum_{i=1}^n{f(i)[gcd(i,j)=1]}\\
=&\sum_{i=1}^n{f(i)e(gcd(i,j))}\\
=&\sum_{i=1}^n{f(i)(\mu*1)(gcd(i,j)}\\
=&\sum_{i=1}^n{f(i)\sum_{d|gcd(i,j)}\mu(d)}\\
=&\sum_{i=1}^n{f(i)\sum_{d|i,d|j}\mu(d)}\\
=&\sum_{d|j}{\mu(d)\sum_{d|i,1<=i<=n}f(i)}\\
=&\sum_{d|j}{\mu(d)\sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}f(i*d)}\\
\end{aligned}
$$

## 如果$f(i)=1$ 则 

$$
\begin{aligned}
\sum_{i=1}^n{[gcd(i,j)=1]}=\sum_{d|j}{\mu(d)\lfloor\frac{n}{d}\rfloor}\\
\end{aligned}
$$
## 更加特殊的 如果$j=n$ 则 

$$
\begin{aligned}
\sum_{i=1}^n{[gcd(i,n)=1]}=\sum_{d|j}{\mu(d)\frac{n}{d}}=(\mu*id)(n)=\phi(n)\\
\end{aligned}
$$

## 如果$f(i)=i$ 则 

$$
\begin{aligned}
&\sum_{i=1}^n{i[gcd(i,j)=1]}\\
=&\sum_{d|j}{\mu(d)\sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}i*d}\\
=&\sum_{d|j}{\mu(d)d\frac{\lfloor\frac{n}{d}\rfloor(\lfloor\frac{n}{d}\rfloor+1)}{2}}\\
\end{aligned}
$$
## 更加特殊的 如果$j=n$ 则 

$$
\begin{aligned}
&\sum_{i=1}^n{i[gcd(i,n)=1]}\\
=&\sum_{d|n}{\mu(d)d\frac{\frac{n}{d}(\frac{n}{d}+1)}{2}}\\
=&\frac{n}{2}\sum_{d|n}{\mu(d)(\frac{n}{d}+1)}\\
=&\frac{n}{2}(\sum_{d|n}{\mu(d)\frac{n}{d}}+\sum_{d|n}{\mu(d)})\\
=&\frac{n}{2}(\phi(n)+e(n))\\
\end{aligned}
$$

## 总结

$
\begin{aligned}
&\sum_{i=1}^n{f(i)[gcd(i,j)=1]}=\sum_{d|j}{\mu(d)\sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}f(i*d)}\\
&\sum_{i=1}^n{[gcd(i,j)=1]}=\sum_{d|j}{\mu(d)\lfloor\frac{n}{d}\rfloor}\\
&\sum_{i=1}^n{[gcd(i,n)=1]}=\phi(n)\\
&\sum_{i=1}^n{i[gcd(i,j)=1]}=\sum_{d|j}{\mu(d)d\frac{\lfloor\frac{n}{d}\rfloor(\lfloor\frac{n}{d}\rfloor+1)}{2}}\\
&\sum_{i=1}^n{i[gcd(i,n)=1]}=\frac{n}{2}(\phi(n)+e(n))\\
\end{aligned}
$