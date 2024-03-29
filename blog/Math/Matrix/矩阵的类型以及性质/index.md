---
date: 2020-02-26 11:25:50
updated: 2020-02-26 11:25:50
---

### 实矩阵
常见的几种实矩阵有: 实对称矩阵、实反对称矩阵、厄米特矩阵、反厄米特矩阵、正交矩阵、对角矩阵、酉矩阵、正规矩阵

### 实对称矩阵
#### 定义
若$A$为对称矩阵、则：
$$
\begin{aligned}
A = A^{T}
\end{aligned}
$$
这里左边为矩阵本身，右边为矩阵的转置
#### 性质
对称矩阵必然有$n$个实特征向量，并两两正交
<!---more-->

### 实反对称矩阵
#### 定义
若$A$为对称矩阵,则：
$$
\begin{aligned}
A = -A^{T}
\end{aligned}
$$

### 厄米特矩阵
#### 定义
若$A$为厄米特矩阵，则
$$
\begin{aligned}
A = A^H
\end{aligned}
$$
右边是矩阵的转置共轭矩阵

### 反厄米特矩阵
#### 定义
若$A$为反厄米特矩阵，则
$$
\begin{aligned}
A = -A^H
\end{aligned}
$$


### 正交矩阵
#### 定义
若$A$为正交矩阵,则
$$
\begin{aligned}
A * A^{T} = \lambda E
\end{aligned}
$$
这里右边为单位矩阵乘一个常数

### 对角矩阵
#### 定义
若$A$为对角矩阵，则矩阵仅仅在对角线上对值非零
#### 性质
对角矩阵一定是对称矩阵，对角矩阵的特征值即为对角线上的元素

### 酉矩阵
#### 定义
若$A$为酉矩阵，则
$$
\begin{aligned}
AA^H = A^HA = E
\end{aligned}
$$


### 正规矩阵
#### 定义
若$A$为正规矩阵，则
$$
\begin{aligned}
AA^H = A^HA
\end{aligned}
$$
实对称矩阵、实反对称矩阵、厄米特矩阵、反厄米特矩阵、正交矩阵、对角矩阵、酉矩阵都是正规矩阵，但正规矩阵远不止这些


### 矩阵的相似
#### 定义
若满足
$$
\begin{aligned}
A = B^{-1}CB
\end{aligned}
$$
则AC相似
#### 性质
 若两个矩阵相似，则他们的特征值相同