---
title: LDA
mathjax: true
categories:
  - machine learning
  - supervised learning
  - LDA
tags:
  - machine learning
  - supervised learning
  - kernel LDA
keywords:
  - machine learning
  - supervised learning
  - LDA
abbrlink: 130f56b1
date: 2020-02-18 14:47:04
---

# LDA
### 算法输入与目的
有很多有标签的高纬数据,他们的格式为列向量：
$$ x = [x_1,x_2,x_3...]^T $$
我们想要找到一个高纬空间到一维空间的映射,其中$w$是一个列向量
$$ y=w^T x $$
使得我们在这个新的维度上，能够完成分类，类内紧凑，类间松散

<!---more-->

### 模型建立
假设映射后类别i的数据集合为：
$$Y_i = \{y_1,y_2,y_3...\}$$
分别根据求映射后数据集合的期望

$$
\tilde{m_i}=\frac{1}{n_i}\sum_{y\in Y_i}y
$$

和方差
$$\tilde{S_i}^2 = \sum_{y \in Y_i}(y-\tilde{m_i})^2$$
模型建立,把类中心点间的方差作为分子，把类内方差和作为分母，我们的目标就是最大化整个分式
$$
\tilde{m}=\frac{1}{n}\sum n_i*\tilde{m_i}
\\\max\quad J(w)=\frac{ \sum n_i(\tilde{m_i}-\tilde{m})^2}{\sum{\tilde{s_i}^2}}$$

### 变形
假设映射前类别i的数据集合为：
$$D_i = \{x_1,x_2,x_3...\}$$
为了能够同时描述类内距离和类间距离，我们需要对映射后的各类集合求期望和方差
令
$$m_i=\frac{1}{n_i}\sum_{x\in D_i}x$$
则映射后的期望为
$$
\tilde{m_i}=\frac{1}{n_i}\sum_{y\in Y_i}y=\frac{1}{n_i}\sum_{x\in D_i}w^Tx=w^T\frac{1}{n_i}\sum_{x\in D_i}x=w^Tm_i
$$
令
$$S_i = \sum_{x \in D_i}(x-m_i)(x-m_i)^T$$
则映射后的方差
$$
\begin{aligned}
\tilde{S_i}^2&= \sum_{y \in Y_i}(y-\tilde{m_i})^2
\\&= \sum_{x \in D_i}(w^Tx-w^Tm_i)^2
\\&=\sum_{x \in D_i}(w^T(x-m_i))*(w^T(x-m_i))
\\&=\sum_{x \in D_i}(w^T(x-m_i))*((x-m_i)^Tw)
\\&=w^TS_iw
\end{aligned}
$$

模型
$$
\tilde{m}=\frac{1}{n}\sum n_i*\tilde{m_i}=w^T\frac{1}{n}\sum n_i*m_i=w^Tm
$$
模型的分子
$$
\begin{aligned}
\\&\sum n_i(\tilde{m_i}-\tilde{m})^2
\\=&\sum n_i(w^Tm_i-w^Tm)^2
\\=&w^T(\sum n_i(m_i-m)(m_i-m)^T) w
\end{aligned}
$$
### 模型总结
$$
\begin{aligned}
&S_B=\sum n_i(m_i-m)(m_i-m)^T
\\&S_W=\sum S_i
\\&\max\quad J(w)=\frac{ w^TS_Bw}{w^TS_ww}
\end{aligned}
$$

### 拉格朗日乘子法求极值
J(w)的值与w的长度无关，只和w的方向有关，我们不妨固定分子为1，则变为了
$$\max\quad J_2(w)=w^TS_Bw\quad,\quad w^TS_ww=1$$
构建拉格朗日函数,并使用标量对列向量求导法则,求偏导
$$L(w,\lambda) = w^TS_Bw+\lambda(1-w^TS_ww)$$
一个求导法则:($x$是列向量，$A$是方阵)
$$
\begin{aligned}
&\frac{\partial x^TAx}{\partial x} = (A^T+A)x
\end{aligned}
$$
开始求导
$$
\begin{aligned}
&\frac{\partial L}{\partial w}=(S_B+S_B^T)w-\lambda(S_w+S_w^T)w=0
\end{aligned}
$$
其中S_B和S_w是对称矩阵
$$
\begin{aligned}
&2S_Bw-2\lambda S_ww=0
\\\to&S_Bw=\lambda S_ww
\\\to&(S_w^{-1}S_B)w=\lambda w
\end{aligned}
$$
因此$w$取矩阵$S_w^{-1}S_B$的特征向量即可


