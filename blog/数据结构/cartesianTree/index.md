---
date: 2020-03-16 12:32:20
updated: 2020-03-16 12:32:20
---
# cartesian tree
笛卡尔树是一颗二叉树，他满足中序遍历为维护的序列，且满足堆的性质

## build
我们使用单调栈来维护树根到叶子的链，在单调栈的构建中完成树的构建

<details>
<summary>ct代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/cartesian_tree.h %}
</details>