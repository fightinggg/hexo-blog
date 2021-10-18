---
date: 2019-08-16 19:10:09
updated: 2019-08-16 19:10:09
---

广义斐波那契数递推公式 
$$f_i=af_{i-1}+bf_{i-2}(\mod p) (p是奇素数)$$

他的转移矩阵
$$
 \left[
 \begin{matrix}
   a & b  \\
   1 & 0 
  \end{matrix}
  \right]^n

 \left[
 \begin{matrix}
   f_{2}   \\
   f_{1} 
  \end{matrix}
  \right]\mod p=

   \left[
 \begin{matrix}
   f_{n+2}   \\
   f_{n+1} 
  \end{matrix}
  \right]
$$

如果存在循环节则存在n使得
$$
\left[
 \begin{matrix}
   a & b  \\
   1 & 0 
  \end{matrix}
  \right]^n=
  \left[
 \begin{matrix}
   k_1p+1 & k_2p+0 \\
   k_3p+0 & k_4p+1 
  \end{matrix}
  \right]
$$

<!---more-->

我们尝试把左边变成相似对角矩阵
先求特征值 
$$
(\lambda-a)\lambda-b=0 \Leftrightarrow \lambda=\frac{a\pm\sqrt{a^2+4b}}{2}
$$

当且仅当$a^2+4b=0$的时候，$\lambda_1=\lambda_2$，易证尽管此时$\lambda$是二重特征值，但是它对应的特征向量只有一个，即上诉矩阵不可对角化，我们不考虑这种复杂的情况。
当$a^2+4b\neq0$的时候，两个特征向量分别为
$$
\left[
 \begin{matrix}
   \lambda_1  \\
   1 
  \end{matrix}
  \right] 和
  \left[
 \begin{matrix}
   \lambda_2 \\
   1 
  \end{matrix}
  \right]
$$
那么就有了
$$
\left[
 \begin{matrix}
   a & b  \\
   1 & 0 
  \end{matrix}
  \right]=
  \left[
 \begin{matrix}
   \lambda_1 & \lambda_2  \\
   1 & 1 
  \end{matrix}
  \right]
  \left[
 \begin{matrix}
   \lambda_1 & 0  \\
   0 & \lambda_2
  \end{matrix}
  \right]
  \left[
 \begin{matrix}
   \frac{1}{\lambda_1-\lambda_2} & \frac{-\lambda_2}{\lambda_1-\lambda_2}  \\
   \frac{-1}{\lambda_1-\lambda_2} & \frac{\lambda_1}{\lambda_1-\lambda_2} 
  \end{matrix}
  \right]
$$
进而有了
$$
  \left[
 \begin{matrix}
   \lambda_1 & \lambda_2  \\
   1 & 1 
  \end{matrix}
  \right]
  \left[
 \begin{matrix}
   \lambda_1^n & 0  \\
   0 & \lambda_2^n
  \end{matrix}
  \right]
  \left[
 \begin{matrix}
   \frac{1}{\lambda_1-\lambda_2} & \frac{-\lambda_2}{\lambda_1-\lambda_2}  \\
   \frac{-1}{\lambda_1-\lambda_2} & \frac{\lambda_1}{\lambda_1-\lambda_2} 
  \end{matrix}
  \right]=
  \left[
 \begin{matrix}
   k_1p+1 & k_2p+0 \\
   k_3p+0 & k_4p+1 
  \end{matrix}
  \right]
$$
右乘$T$消掉那个一堆分数的矩阵
$$
  \left[
 \begin{matrix}
   \lambda_1 & \lambda_2  \\
   1 & 1 
  \end{matrix}
  \right]
  \left[
 \begin{matrix}
   \lambda_1^n & 0  \\
   0 & \lambda_2^n
  \end{matrix}
  \right]=
  \left[
 \begin{matrix}
   k_1p+1 & k_2p+0 \\
   k_3p+0 & k_4p+1 
  \end{matrix}
  \right]
    \left[
 \begin{matrix}
   \lambda_1 & \lambda_2  \\
   1 & 1 
  \end{matrix}
  \right]
  $$
  乘开
  $$
    \left[
 \begin{matrix}
   \lambda_1^{n+1} & \lambda_2^{n+1}  \\
   \lambda_1^{n} & \lambda_1^{n} 
  \end{matrix}
  \right]=
  \left[
 \begin{matrix}
   \lambda_1(k_1p+1)+k_2p & \lambda_2(k_1p+1)+k_2p \\
   \lambda_1k_3p+k_4p+1 & \lambda_2k_3p+k_4p+1
  \end{matrix}
  \right]
  $$
###在这之后我们分两部分讨论
####$a^2+4b是二次剩余$
如果$a^2+4b$是二次剩余，那么$\lambda_1$和$\lambda_2$可以直接写成模意义下对应的整数,则上诉矩阵等式在$n=p-1$的时候根据费马小定理恒成立
####$a^2+4b不是二次剩余$
在这里，是绝对不能够直接取模的，因为$\lambda$中一旦包含了根号下非二次剩余，这里就是错的，我们不可以取模，直接用根式表达即可。
#####两矩阵相等条件1:
  $$
  \lambda^n=\lambda k_3p+k_4p+1
  $$
 先看$\lambda_1$
$$
\lambda_1=\frac{a+\sqrt{a^2+4b}}{2}=\frac{a}{2}+\frac{1}{2}\sqrt{a^2+4b}
$$
则
$$
(\frac{a}{2}+\frac{1}{2}\sqrt{a^2+4b})^n=(\frac{a}{2}+\frac{1}{2}\sqrt{a^2+4b})k_3p+k_4p+1
$$
分母有点难受，把它移到右边去
$$
(a+\sqrt{a^2+4b})^n=2^n* ((\frac{a}{2}+\frac{1}{2}\sqrt{a^2+4b})k_3p+k_4p+1)\\
\sum_{i=0}^nC_n^ia^i\sqrt{a^2+4b}^{n-i}=2^n* (\frac{a}{2}k_3p+k_4p+1)+2^n* (\frac{1}{2}k_3p)\sqrt{a^2+4b}
$$
我们在这里引入一些概念，我们在实数领域解决这个问题，在实数领域，我们把数分为两部分来表示，一部分是有理数部分，称之为有理部，另一部分是无理数部分，称之为无理部，即$1+2\sqrt{16}$中，我们称1为有理部，2位无理部。
上式左边显然能够唯一表示为$x+y\sqrt{a^2+4b}$,那么两式相等的充要条件就是
$$
存在k_3,k_4使得x=2^n* (\frac{a}{2}k_3p+k_4p+1), y=2^n* \frac{1}{2}k_3p
$$
上面的式子的某个充分条件为
$$
\frac{x}{2^n} \equiv1 \mod p\\
\frac{y}{2^n} \equiv0 \mod p
$$
更加具体一点如果n是(p-1)的倍数则下面的式子也是充分条件
$$
x \equiv1 \mod p\\
y \equiv0 \mod p
$$
为了利用这点，我们保证后面n一定是p-1的倍数，让我们先遗忘掉这些充分条件

然后我们来看看这个规律，注意到$\sum_{i=0}^nC_n^ia^i\sqrt{a^2+4b}^{n-i}$中，当$n=p且i\neq0且i\neq n$的时候，$C_n^i|p$，所以
$$
x\equiv a^p \equiv a\\
y\equiv \sqrt{a^2+4b}^p
$$
即
$$
\begin{aligned}
&(a+\sqrt{a^2+4b})^p 
\\=&（a+c_1p)+(\sqrt{a^2+4b}^{p-1}+c_2p)\sqrt{a^2+4b},c_1c_2是整数
\\=& (a+c_1p)+((a^2+4b)^{\frac{p-1}{2}}+c_2p)\sqrt{a^2+4b}
\\=& a+(a^2+4b)^{\frac{p-1}{2}}\sqrt{a^2+4b}+c_1p+c_2p\sqrt{a^2+4b}
\end{aligned}
$$
这时候因为$a^2+4b$是一个非二次剩余,所以上式可以表达为
$$
a-\sqrt{a^2+4b}+c_1p+c_2p\sqrt{a^2+4b}
$$
我们让他乘上$\frac{a+\sqrt{a^2+4b}}{2}$,他的无理部就彻底与0同余了，此时的$n=(p+1)$,在让这个数幂上$p-1$，他的有理部就与1同余了，并且我们达到了之前的约定，n是p-1的倍数，此时的$n=(p+1)(p-1)$
#####两矩阵相等条件2:
$$
\begin{aligned}
&\lambda^{n+1}=\lambda(k_1p+1)+k_2p\\
\Leftrightarrow&\lambda^{n+1}=(\frac{a}{2}+\frac{1}{2}\sqrt{a^2+4b})(k_1p+1)+k_2p\\
\Leftrightarrow&\lambda^{n+1}=(\frac{a}{2}+\frac{1}{2}\sqrt{a^2+4b})+\frac{a}{2}k_1p+\frac{1}{2}\sqrt{a^2+4b}k_1pk_2p+k_2p
\end{aligned}
$$
之前我们证明了$\lambda^{(p+1)(p-1)}$的有理部与1同余，无理部与0同余，这里显然$\lambda^{(p+1)(p-1)+1}$的有理部与$\frac{a}{2}$同余，无理部与$\frac{1}{2}$同余,
至于$\lambda_2$是同理的。

至此证明了当$a^2+4b$是二次剩余的时候,循环节至多为$n-1$,当$a^2+4b$不是二次剩余的时候，循环节至多为$n^2-1$ 
当$a^2+4b=0$的时候还有待挖掘