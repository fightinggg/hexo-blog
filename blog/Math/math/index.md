---
date: 2020-03-11 14:39:59
updated: 2020-03-11 14:39:59
---

# 总览
 这篇博客用于记录数学库的实现，

# 项目地址
[链接](https://github.com/fightinggg/fightinggg.github.io/tree/master/cpp/perfect)

# 先介绍我们的数学函数库 math_function
 这里记录了很多数学函数，
<details>
<summary> math_function代码 </summary>
{% include_code tree lang:cpp cpp/perfect/math/math_function.h %}
</details> 

## 重大问题
 这些算法的复杂度感觉都是$lgc$级别的,应该是可以通过倍增来达到$lg(lgc)$的复杂度，我下次再仔细思考思考。

## 介绍我们的牛顿迭代法求$\sqrt{c}$
$$
\begin{aligned}
&x^2=c\\
&f(x) = x^2-c\\
&f'(x) = 2x \\
&g(x) = x-\frac{f(x)}{f'(x)} = x-\frac{x^2-c}{2x} =\frac{x^2+c}{2x}
\end{aligned}
$$
 按照$x_i=g(x_{i-1})$进行迭代即可求出结果。
 更新: 我下次找个机会用下面求$e^c$的方法实现一下先让c变小，看看能不能加速。

<!---more-->
## 介绍我们的泰勒展开求$e^c$
 首先根据公式$e^{-t}=\frac{1}{e^t}$，可以递归为c恒非负
 然后根据公式$e^t=(e^\frac{t}{2})^2$, 可以递归为c在范围$[0,0.001]$上
 最后使用泰勒展开，$e^x=1+x+\frac{x^2}{2!}+...$，这里我们取前10项就能够达到很高的精度了。
 为什么要用第二步将c保证在范围$[0,0.001]$上？ 因为如果c过大，我们的第三部需要展开更多的项才够，这在c达到10000这种，你至少要展开10000项，这不现实。

## 介绍我们的牛顿迭代法求$ln(c)$
$$
\begin{aligned}
&e^x=c
\\&f(x)=e^x-c
\\&f'(x) = e^x
\\&g(x)=x-\frac{f(x)}{f'(x)} = x-1+\frac{c}{e^x}
\end{aligned}
$$
 还是一样的，为了减少迭代次数，我们先对c进行变小，根据公式$ln(x)=ln(\frac{x}{e})+1$,我们可以保证c的值在e附近，
 最后使用迭代，$x_i=g(x_{i-1})$,
 更新： 我刚刚突然想到如果第二步使用泰勒展开而不是牛顿迭代，可能会快很多，考虑到这一点，我们有时间去实现一下泰勒展开求对数函数。