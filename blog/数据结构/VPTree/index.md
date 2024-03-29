---
date: 2020-03-16 12:32:13
updated: 2020-03-16 12:32:13
---

# vantate point tree
vp tree 是一颗二叉树，他和kd tree有着一定的相似度,

## 树上信息
每一颗子树都要维护一个点集，对于每个节点，我们都维护一个距离d，然后将到该节点的距离小于d的点放到左儿子，其他的放到右儿子中。

## vantate point
vantate point的选取是一个比较麻烦的事情，我们仔细想想都知道，这个点的选取肯定会影响算法，有一种处理办法是随机选取，这显然不是我们想要的。我们其实可以这样来处理，
>Our algorithm constructs a set of vantage point candidates by random sampling,and then evaluates each of them.Evaluation is accomplished by extracting another sample,from which the median of $\prod_p(S)$,and a corresponding moment are estimated.Finally,based on these statistical images,the candidate with the largest moment is chosen.

这里的$\prod_p(S)$指的就是在该度量空间中点p和点s的距离,作者选取的statistical images是方差，我们可以从伪码中看出。

## 建树
和kd树一样，建树的过程是一致的，我们选出vantate point,然后递归左右建树

## 搜索
搜索的话，也是一样的，用结果剪枝即可

## 修改
这样的树不存在单旋这种方式，我们只能用替罪羊树套vantate point tree来实现


## 参考资料
[Data Structures and Algorithms for Nearest Neighbor Search in General Metric Spaces Peter N.Yianilos*](http://web.cs.iastate.edu/~honavar/nndatastructures.pdf)