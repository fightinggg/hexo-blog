---
date: 2020-03-16 12:31:26
updated: 2020-03-16 12:31:26
---

# left leaning red black tree
##  left leaning red black tree定义
 在红黑树的基础上，左倾红黑树保证了3节点(2key-3son-node)的红色节点为向左倾斜，这导致了红黑树更加严格的定义,
##  left leaning red black tree实现
 在红黑树代码的基础上，我们定义一个left leaning函数，用来调整右倾斜为左倾斜，这个函数需要适当的加入到红黑树代码当中，笔者调试了很久，找到了很多思维漏洞，把这些漏洞全部用数学的方式严格证明以后，调用left leaning函数即可。
##  left leaning red black tree优点
 相比红黑树而言，笔者认为提升不大，真的，但是有人使用了很少的代码就实现了LLRBT，这也算一个吧，笔者是修改的红黑树，所以很难受，代码更长了。
##  left leaning red black tree code
<details>
<summary>left leaning red black tree代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/left_leaning_red_black_tree.h %}
</details>