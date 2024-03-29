---
date: 2018-10-21 17:59:39
updated: 2018-10-21 17:59:39
---

想必大家都知道的组合数在正整数上有：
$$
C_{a}^{b}=\frac{a!}{b!(a-b)!}
$$


但很少有人知道这个公式在实数领域上也是成立的：

也就是说$n!$在实数上有定义

$x!=\gamma(x+1)...\gamma(x)$为伽马函数

![](timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537781108554&di=ed16c8522730026f11421c1e9388ca59&imgtype=0&src=http%3A%2F%2Fwww.twword.com%2Fuploads%2Fwiki%2F02%2F8e%2F537058_1.jpg)

下面问题转移到伽马函数上面了，但是在这里我们所用到的伽马函数的性质只有这一条

$\gamma(x)=(x-1)\gamma(x-1)$

为什么这样说呢，因为我们不需要计算$x!$，我们要算的是这个式子


$$
C_{a}^{b}=\frac{a!}{b!(a-b)!}=\frac{\gamma (a+1)}{\gamma (b+1)\gamma(a-b+1)}
$$


下面给出几个简单的我们来算一下
$$
C_{4.5}^{3} =\frac{4.5!}{3!*1.5!} =\frac{\gamma (5.5)}{3!\gamma (2.5)} =\frac{1}{3!}\frac{\gamma (5.5)}{\gamma(2.5)} =\frac{1}{3!}*4.5*3.5*2.5
$$

$$
C_{3}^{4} =\frac{3!}{4!(-1)!}
$$



为什么我不继续化简了呢？

如果你是一个思维严谨的读者，当你看到了我放入的伽马函数图像的时候，你就应该对我的博客提出质疑，

我曾经说n!在整个实数领域有意义，又说$x!=\gamma(x+1)$ ,然而我给出的伽马函数的定义域明显不包含负整数和0，

我一定有一个地方错了。

对的，负数没有阶乘！



我重新给出定义域：
$$
C_{a}^{b}=\frac{a!}{b!(a-b)!}
$$
$x!$有意义当且仅当$x\geq 0||-x\notin Z$



不管读者如何想，至少我自己认为，如果给要给负数定义一个阶乘的值，依据伽马函数在对应的点的极限为∞，

那么负数的阶乘应该是∞，代入刚刚的式子并化简有
$$
C_{3}^{4} =\frac{3!}{4!(-1)!}=\frac{1}{4}*\frac{1}{infinity}=0
$$


我又写了一个不严谨的证明。。。。。。如果读者有兴趣，自己试着证明一下吧，至少我好像证出来了。

然后继续下一题
$$
C_{-1}^{3}=\frac{(-1)!}{3!*(-4)!}
$$

$$
C_{-1}^{-4}=\frac{(-1)!}{(-4)!*3!}
$$



哈哈哈哈你说怎么办呢？？？？？

除非无穷大有大小关系，否则这里无法解释，，，，此路不通



数学总是这样，如果我非得让这个式子可以运算，将对很多其他数学定理有很大的影响，而不是那些数学家们不愿意在数学界给出新的运算。给出新的运算就得付出代价。



数学界用这样一种方法来回避这样的问题，重新定义组合数，而不是引入新的运算。



重新定义广义组合数的值
$$
C_{x}^{n}=\frac{\prod _{i=x-n+1}^{x}i}{n!}(x\in R,n\in Z^{*})
$$




如此我们把题目都重新做一遍
$$
C_{4.5}^{3}=\frac{\prod _{i=4.5-3+1}^{4.5}i}{3!}=\frac{\prod _{I=2.5}^{4.5}i}{3!}=\frac{2.5*3.5*4.5}{1*2*3}
$$

$$
C_{3}^{4}=\frac{\prod _{i=3-4+1}^{3}i}{4!}=\frac{\prod _{i=0}^{3}i}{4!}=\frac{0*1*2*3}{1*2*3*4}=0
$$

$$
C_{-1}^{3}=\frac{\prod _{i=-1-3+1}^{-1}i}{3!}=\frac{\prod _{i=-3}^{-1}i}{3!}=\frac{(-3)*(-2)*(-1)}{1*2*3}
$$



.......

差不多了

over