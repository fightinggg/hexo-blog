---
title: RBTree
mathjax: true
categories:
  - myself_library
  - datastructure
  - tree
tags:
  - myself_library
  - datastructure
  - tree
keywords:
  - myself_library
  - datastructure
  - tree
abbrlink: e4ff2d88
date: 2020-03-16 12:31:21
---



# red black tree
## red black tree定义
&emsp;&emsp;红黑树是一种平衡树，他满足下面的性质
>1.节点是红色或黑色。
>2.根是黑色。
>3.所有叶子都是黑色（叶子是NIL节点）。
>4.每个红色节点必须有两个黑色的子节点。（从每个叶子到根的所有路径上不能有两个连续的红色节点。）
>5.从任一节点到其每个叶子的所有简单路径都包含相同数目的黑色节点。

## red black tree解读性质
&emsp;&emsp;红黑树的性质难以理解，这是因为他太过于抽象了, 如果你了解B Tree, 我们现在考虑节点中最多包含3个键的B Tree，他又叫2-3-4tree,意思是任何一个节点都有2，3或4个直接子孙，直接子孙指的是和当前节点相邻的子孙，相邻指的是恰好有一条边连接。
&emsp;&emsp;2-3-4树的编码是比较复杂的，原因在于节点种类过多。我们现在考虑这样一种情况，RB tree中的红色节点代表他和他父亲在一起，即他+他的父亲构成了2key3son-node，若他的兄弟也是红色，则他+兄弟+父亲构成了3key4son-node
&emsp;&emsp;性质1显然
&emsp;&emsp;性质2的原因是根没有父亲，所以他不能为红
&emsp;&emsp;性质3的原因是为了保证更具有一般性
&emsp;&emsp;性质4的原因是保证最多只有3key4son-node，不能出现4key5son-node
&emsp;&emsp;性质5的原因是B树的完全平衡性质

## red black tree编码
&emsp;&emsp;由此可见，我们仿照234Tree即BTree即可完成编码

## 为什么红黑树跑得快
&emsp;&emsp;我们发现234树的所有操作都能在红黑树上表现,但是234树有一个很大的缺陷，即分裂合并的速度太慢了，要重构很多东西，细心的读者自己模拟会发现，这个过程在RBTree上对应的仅仅是染色问题，这极大的加速了数据结构，这是优势。

## red black tree erase
&emsp;&emsp;删除是比较复杂的，你怎样操作都可以，只要旋转次数少，你可以分很多类来讨论，显然分类越多，平均旋转次数是最少的。正常情况下，erase会引进一个重黑色的概念，这个概念的实际意义指的是该节点有一个0key1son的黑色父亲被隐藏了。

## red black tree code
<details>
<summary>red black tree代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/red_black_tree.h %}
</details>


