# splay tree
&emsp;&emsp; 伸展树，以其操作splay出名。
&emsp;&emsp; 伸展树的本质就是bst，
## splay操作
&emsp;&emsp; 伸展树对splay操作的参数是一个节点，他的结果是将这个节点通过双旋变成根。
## splay insert
&emsp;&emsp; 伸展树insert的时候，先按照bst的操作insert，然后将insert的点进行splay操作即可
## splay search
&emsp;&emsp; 伸展树search的时候，先按照bst的操作search,对找到的节点进行splay即可
## splay erase
&emsp;&emsp; 伸展树erase的时候，先search,这样我们要删除的节点就成为了根，然后按照bst的操作删除即可
## splay操作详解
### 重新定义旋转rotate
&emsp;&emsp; rotate(x)即交换x和x的父亲的位置，即如果x是父亲y的左儿子，则rotate(x)等价与zig(y)，反之则等价于zag(y)
### 定义splay
&emsp;&emsp; 如果祖父-父亲-自己构成一条直链，则选rotate父亲再rotate自己，若不是直链则rotate自己两次。知道自己成为根。
## splay复杂度分析
### splay势能函数
&emsp;&emsp; 对于一个伸展树T，他的一个节点x的子树大小为$s(x)$,定义一个节点x的势能为$X=log_2(s(x))$
#### 对数函数是一个凸函数
&emsp;&emsp; 已知a,b>0,则$lg(a)+lg(b)\lt 2lg(\frac{a+b}{2}) = 2lg(a+b)-2$
### 对于一条直链，我们要先rotate父亲，再rotate自己
<img src="/images/splay_tree/rotate_father.png" width="30%">
&emsp;&emsp; 设自己为x，父亲为y，祖父为z， 则势能变化为
$$
\begin{aligned}
&X'+Y'+Z'-X-Y-Z
\\&=Y'+Z'-X-Y\lt X'+Z'-2X
\\&=(3X'-3X)+(X+Z'-2X')
\end{aligned}
$$
&emsp;&emsp;这里的x和z‘的子树大小加起来刚好等于x'的子树大小-1。所以势能变化小于$3(X'-X)-2$
### 对于一条非直链，我们要rotate自己两次，才能上去，rotate父亲不行的
<img src="/images/splay_tree/rotate_self.png" width="30%">
&emsp;&emsp; 同理，势能变化为
$$
\begin{aligned}
&X'+Y'+Z'-X-Y-Z
\\&=Y'+Z'-X-Y\lt Y'+Z'-2X
\\&=(2X'-2X)+(Y'+Z'-2X')
\end{aligned}
$$
&emsp;&emsp;这里的y'和z'的子树大小加起来刚好等于x‘的子树大小-1，所以势能变化小于$2(X'-X)-2$
### 单旋
&emsp;&emsp; 易证势能变化小于$X'-X$
### 整理合并
&emsp;&emsp; 三种操作的均摊复杂度分别为$O(1)+X'-X$,$O(1)+2(X'-X)-2$,$O(1)+3(X'-X)-2$,对于后面的两种情况,我们增大势的单位来支配隐藏在O(1)中的常数，最终分别为$O(1)+X'-X$,$2(X'-X)$,$3(X'-X)$,再次放缩: $O(1)+3(X'-X)$,$3(X'-X)$,$3(X'-X)$,最后对于所有的旋转求和，因为只有一次单旋所以最终我们得到了均摊复杂度为$O(1)+X'-X\lt O(1)+X'$,显然X'是一个很小的数，他恰好等于伸展树中的元素的个数取对数后的结果。至此所有的操作均取决于splay的复杂度，均为$lg$级别。
## splay代码
<details>
<summary>splay树代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/splay_tree.h %}
</details>


