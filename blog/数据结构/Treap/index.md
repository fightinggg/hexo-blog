---
date: 2020-03-16 12:31:49
updated: 2020-03-16 12:31:49
---

# Treap
 树堆Treap来源于Tree+Heap的组合, 其实就是一棵树，他的节点储存了两个键，一个是我们维护的信息，另外一个是随机数，我们不妨设前者叫key，后者叫rand_key，Treap的key满足搜索树的性质，Treap的rand_key满足堆的性质。(从某种意义上而言，笛卡尔树是key=rand_key的Treap)
 特点: 若key与rand_key确定后，Treap的形态唯一，
 Treap在大多数情况下显然是平衡的，但我不会证明，也没找到证明，暂时先放一下。
## Treap insert
 我们向一棵Treap中按照搜索树的性质插入值以后，不会破坏搜索树的特点，但是大概率导致Heap的性质被违反。考虑到单旋不会导致搜索树的性质被破坏，我们通过单旋来从新让Treap满足Heap的性质。考虑回溯，假设我们对某个子树插入了一个值，若最终插入到左子树，则可能导致左子树树根的rand_key比当前节点的rand_key大，同时因为我们只插入了一个节点，所以最多也只有一个节点的rand_key比当前节点的rand_key大，这时候如果使用zig，则树恢复平衡。
## Treap erase
 还是使用平衡树的操作来对Treap进行删除。如果过程中用到了前驱后继替换的技巧，这将导致替换节点的rand_key和他所处在为位置不匹配，我们就只考虑这颗子树，因为只有这颗子树的树根出现了问题，我们尝试递归向下，将位置不匹配这个现象下移，因为不匹配，必然是这个节点的rand_key比儿子们小，这时候如果左儿子的rand_key大就zig，否则zag,最后能发现这问题在向叶子结点转移，我们能够递归向下，直到最后转移到叶子上，树就恢复平衡了。
## Treap 代码
<details>
<summary>Treap代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/treap.h %}
</details>

# 无旋Treap
 无旋treap，指的是不使用zig和zag来重新恢复平衡的Treap
 我们使用merge和split
## 无旋Treap merge
 merge的参数是两个treap，他返回treap合并后的结果,不妨设其中一个为T1，另一个为T2，这里还要求T1的最大key小于等于T2的最小key。merge其实很简单，如果你学过左偏树的话，会很容易理解。我们不妨设T1的根的rand_key比T2的小。那么很显然，最终结果的根为T2的根，这里我们就可以递归了，我们将T2的左子树与T1合并出T3，最后让T3最为T2新的左子树，我们得到的T2就是merge的结果。
## 无旋Treap split
 split的参数是一个Treap和一个值W，他返回两颗Treap,其中一个的最大key小于W，另一个大于W(不需要考虑等于的情况)，这个过程依然很简单，我们考虑根就可以了，如果根的key大于w，则根和右子树分到一遍，然后递归左儿子，将得到的两个Treap中key大的那个作为之前分到一边的根的左儿子即可。
## 无旋Treap insert
 先split，然后merge两次
## 无旋Treap erase
 很多人这里使用了split两次然后merge三次，我认为这个不太好，常数过大，我们可以这样做，先search找到要删的点，然后merge其左右子树顶替自己即可。
## 无旋Treap代码
<details>
<summary>无旋Treap代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/no_rotate_treap.h %}
</details>