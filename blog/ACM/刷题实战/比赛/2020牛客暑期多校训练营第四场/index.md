---
date: 2021-04-29 23:48:49
updated: 2021-05-05 17:25:00
---

# 链接

https://ac.nowcoder.com/acm/contest/15789



# B Basic Gcd Problem

## 题意

定义
$$
f_c(x)=
\begin{cases}
max_{i=1}^n c\cdot f_c(\gcd(i,x)) &x\gt1\\
1&x=1
\end{cases}
$$


输入c和x

## 题解

f函数迭代次数越多，则值越大，也就是x取gcd的次数越多越好，所以每次选择x的最大因子即可。最终使用快速幂解决。

<!-- more -->

# C Count New String

## 题意

给你一个字符串S，定义f(s,x,y)是一个字符串，长度为y-x+1，他的第k个字符串为$max_{i=x,x+1...x+k}S_i$

你要计算$A=\lbrace f(f(s,x_1,y_1),x_2-x_1+1,y_2-x_1+1)| 1\le x_1\le x_2 \le y_2 \le y_1\le n \rbrace$



## 题解

对于第一层而言，只需要考虑所有后缀即可。于是成了给你n个后缀，你需要计算这些后缀的本质不同的子串，由于后缀间的最长公共后缀很长，所以在后缀自动机上要记录每个后缀对应的last结点。从那个地方开始拓展即可。





# F Finding the Order

## 题意

有两条平行线，一条上有AB两个点，另一条有CD两个点。

问你是AB与CD同向，还是AB与DC同向。

## 题解

考虑梯形ABCD，有$AC+BD>AD+BC$

考虑梯形ABDC，有$AD+BC>AC+BD$





# H Harder Gcd Problem

## 题目描述

给你1到n这n个数，每个数只能用一次，你要选出m个数对，数对的两个数两两互素，问你最多选多少个数对。

## 数据范围

$n<2\times10^5$

## 题解

从大到小考虑奇素数p，取出他的所有倍数，可以证明，如果至少有两个，则一定有$p$和$2p$, 如果有奇数个，则拿出2p，然后两两配对，如果有偶数个，则两两配对。

最后剩下来的一定全是偶数和一个1，直接两两配对即可。








