---
date: 2018-12-31 02:25:32
updated: 2018-12-31 02:25:32
mathjax: true
---



1. 给你一棵n个节点的树，要你求出包含每个点的连通点集的数量。答案对1e9+7取模。

两次dfs，第一次处理每个节点的子孙方向的联通点集数量，
$$
dp[i]=\prod _{all..son}{(dp[son]+1)}
$$


第二次处理父亲方向的点集数量
$$
\begin{aligned}
&dp2[i] \\
=&(\prod _{all..brother}{(dp1[brother]+1)})*dp2[father]+1 \\
=&\frac{dp1[father]}{dp1[i]+1}*dp2[father]+1 \\
\end{aligned}
$$


特别注意这里小心没有逆元

