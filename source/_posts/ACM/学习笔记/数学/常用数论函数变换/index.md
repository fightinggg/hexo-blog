---
date: 2018-03-11 11:41:58
updated: 2019-10-26 16:56:48
---

# 中间结论

$$
f_n = \sum_{i=0}^n (-1)^i {n \choose i} g_i
\Leftrightarrow
g_n = \sum_{i=0}^n (-1)^i {n \choose i} f_i
$$


$$
f_n = \sum_{i=0}^n {n \choose i} g_i 
\Leftrightarrow
g_n = \sum_{i=0}^n (-1)^{n-i} {n \choose i} f_i
$$


# 杜教筛

$$
g(1)\sum_{i=1}^nf(i)=\sum_{i=1}^{n}(f*g)(i)-\sum_{d=2}^{n}g(d) \sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}f(i)
$$

# 数论变换
$$
\begin{aligned}
&e(n)=[n=1]
\\&id(n)=n
\\&I(n)=1
\\&d(n)=\sum_{x|n}1 （就是因子个数）
\\&σ(n)=\sum_{x|n}x   (就是因子和)
\\&\mu(n) 莫比乌斯函数
\\&\phi(n) 欧拉函数
\\&I\ast I=d
\\&I\ast id=σ
\\&I\ast \phi=id
\\&I\ast \mu=e
\end{aligned}
$$

# 自变量互质的前缀和函数分析
$$
\begin{aligned}
&\sum_{i=1}^n{f(i)[gcd(i,j)=1]}=\sum_{d|j}{\mu(d)\sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}f(i*d)}\\
&\sum_{i=1}^n{[gcd(i,j)=1]}=\sum_{d|j}{\mu(d)\lfloor\frac{n}{d}\rfloor}\\
&\sum_{i=1}^n{[gcd(i,n)=1]}=\phi(n)\\
&\sum_{i=1}^n{i[gcd(i,j)=1]}=\sum_{d|j}{\mu(d)d\frac{\lfloor\frac{n}{d}\rfloor(\lfloor\frac{n}{d}\rfloor+1)}{2}}\\
&\sum_{i=1}^n{i[gcd(i,n)=1]}=\frac{n}{2}(\phi(n)+e(n))\\
&\sum_{i=1}^n\sum_{j=1}^nij[gcd(i,j)=1]=\sum_{j=1}^nj^2\phi(j)\\
\end{aligned}
$$
