---
date: 2021-05-08 19:53:00
updated: 2021-05-08 19:53:00
---

# 莫比乌斯反演

## 狄利克雷卷积

$$
\begin{aligned}
f(n)\circ g(n)=\sum_{d|n} f(d)\cdot g(\frac{n}{d})
\end{aligned}
$$

## 莫比乌斯函数

$$
f(n)=
\begin{cases}
1 &n=1
\\(-1)^k &n=p_1\cdot p_2\cdot \cdot \cdot p_k
\\0 &p^k|n , k>1
\end{cases}
$$



## 反演

若$F(n)=\sum_{d|n} f(d)$

则$f(n)=\sum_{d|n}\mu(d)F(\frac{n}{d})$



# 二项式反演

$$
f_n = \sum_{i=0}^n (-1)^i {n \choose i} g_i
\Leftrightarrow
g_n = \sum_{i=0}^n (-1)^i {n \choose i} f_i
$$
