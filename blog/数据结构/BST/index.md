---
date: 2020-03-16 12:30:30
updated: 2020-03-16 12:30:30
---

# binary search tree
BST是二叉搜索树，满足中序遍历是一个有序的序列,他是最最基础的二叉树，他不一定平衡，

## BST insert
插入的时候，在树上递归插入，比当前节点大就向右边走，否则向左走

## BST search
查找的时候，同上

## BST erase
删除的时候，相对复杂，如果只有一个儿子，很简单，但是当他有两个儿子的时候，我们可以选择将一个儿子顶替自己，另外一个儿子去找前驱或后继即可。

## BST code
我们使用内存池来维护整个数据结构
<details>
<summary>BST代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/binary_search_tree.h %}
</details>