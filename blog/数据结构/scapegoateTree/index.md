---
date: 2020-03-16 12:32:06
updated: 2020-03-16 12:32:06
---
# scapegoat Tree
 替罪羊树，他是一个暴力的bst，与普通bst相比，他记录了子树的大小，用参数alpha来定义平衡，即左右子树的大小都不允许超过根的alpha倍，所以往往aplha是一个0.5到1的数字，当违反了这个性质，就暴力重构，将树构造为完全平衡树。
## 替罪羊树erase
 为节点打上标记scapegoat，代表这个节点已经被删除了，回溯子树大小信息。
## 替罪羊树insert
 使用bst插入的方式来插入，注意特判掉那些被打删除标记的点，就可以了
## 替罪羊树重构
 当我们erase或者insert以后，受影响的节点应该恰好构成了一条从根到目标的链，我们使用maintain来重新调整子树大小的时候，注意标记那些非法(不平衡)的节点，然后当我们maintain到根的时候，我们重构离根最近的不平衡的子树。
## 替罪羊树代码
<details>
<summary>替罪羊树代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/scapegoat_tree.h %}
</details>