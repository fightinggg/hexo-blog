
# 总览
&emsp;&emsp;这篇博客将用于整理各种搜索树的数据结构,目前已经整理了BST、AVL、BTree、B+Tree、B*Tree、23Tree、234Tree、TTree、RBTree、LLRBTree、AATree、SplayTree、Treap、无旋Treap、scapegoatTree,VPTree、cartesianTree,

# 项目地址
[链接](https://github.com/fightinggg/fightinggg.github.io/tree/master/cpp/perfect)

# 前置条件
&emsp;&emsp;基本数据结构：变长数组、栈、队列、字符串的实现(此时暂未实现，使用STL代替，后面有时间会自己实现)
&emsp;&emsp;内存池机制

# 树的设计
&emsp;&emsp;我们设计一个基类让所有的树来继承此基类，然后在看后面会有什么改变，以后再来更新
<!---more-->
# 基类
&emsp;&emsp; 我们的基类只提供接口，不提供数据类型
<details>
<summary> tree代码 </summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/tree.h %}
</details>

# 更新： 搜索树的设计
&emsp;&emsp; 由于笔者能力有限，设计欠佳，导致后面的空间树、字典树等数据结构无法加入tree中，所以我们在tree的后面加一层search_tree来表示搜索树。
&emsp;&emsp;
<details>
<summary> 搜索树代码 </summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/search_tree.h %}
</details>


# B+ Tree
&emsp;&emsp; 和B树一样，B+树也具有相同的性质。

## 不同点
&emsp;&emsp; B+树的内部节点、根节点只保存了键的索引，一般情况下保存的是一个键指向的子树的所有键的集合中最大的那个，即所有左边子树的max，唯一的键保存在叶子节点上，
&emsp;&emsp; 叶子节点按照链表有序连接，这导致了B+树能够用链表来遍历整棵树。


# 23tree
&emsp;&emsp;参见3阶Btree

# 234tree
&emsp;&emsp;参见4阶Btree


# T tree
&emsp;&emsp;T tree 是一颗二叉树，他和avl tree有着一定的联系,总所周知，avl树为一颗二叉树，利用其中序维护信息，利用子树高度维护平衡。我们借此修改一下，我们尝试让avl树的每个节点维护多个信息[信息序列]，于是T tree就出现了。T tree是一颗二叉树，每个节点维护一个有序序列，用T 树的中序遍历方式，将其节点维护的序列依次相连即成为了我们维护的信息。

## T tree 解释
&emsp;&emsp;为了便于编码，我们不考虑序列中会出现相同的元素，可以证明，对于泛型编程方式而言，这并不影响该数据结构的功能，该数据结构依旧具备维护相同元素的能力

## T tree结论
&emsp;&emsp;非叶节点维护的序列都充满了各自的容器

## T tree树上信息
&emsp;&emsp;每一颗子树都要维护一个序列，对于每个节点，我们都维护一个稍微小一点的序列，比该序列中元素更小的元素放入左子树，否则放入右子树。


## T tree搜索
&emsp;&emsp;搜索的话，就是普通二叉树的搜索，比当前节点维护的最小值小，就在左子树找，比当前节点维护的最大值大，就在右子树找，否则就在当前节点找

## T tree插入
&emsp;&emsp;当我们插入一个数的时候，我们首先递归向下，找到插入的节点位置，若该节点中储存的序列未满，则置入该节点，否则，有两种处理方式，第一种是从该节点中取出最小值，放入左子树，然后把带插入的树放入该节点，第二种是放入右子树，这里不多说明。插入可能会导致树失去平衡，我们用avl树单旋的方式来让树重新平衡

## T tree删除
&emsp;&emsp;当我们删除一个数的时候，像avl树一样处理，若该数在叶子上，简单删掉并维护树的平衡即可，让该数在非叶节点时，我们取出前驱或后继来顶替即可。

## T tree一个容易出错的地方
&emsp;&emsp;笔者在编码的时候，遇到了一个问题，就是有时候会出现非叶节点维护的数据并未充满容器，这种情况发生的原因是单旋造成的。在单旋的时候，将叶子结点旋转成非叶节点后，我们应该调整数据，让非叶节点重新维护的数据充满容器

## T treecode
<details>
<summary>TT代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/T_tree.h %}
</details>

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

# left leaning red black tree
##  left leaning red black tree定义
&emsp;&emsp; 在红黑树的基础上，左倾红黑树保证了3节点(2key-3son-node)的红色节点为向左倾斜，这导致了红黑树更加严格的定义,
##  left leaning red black tree实现
&emsp;&emsp; 在红黑树代码的基础上，我们定义一个left leaning函数，用来调整右倾斜为左倾斜，这个函数需要适当的加入到红黑树代码当中，笔者调试了很久，找到了很多思维漏洞，把这些漏洞全部用数学的方式严格证明以后，调用left leaning函数即可。
##  left leaning red black tree优点
&emsp;&emsp; 相比红黑树而言，笔者认为提升不大，真的，但是有人使用了很少的代码就实现了LLRBT，这也算一个吧，笔者是修改的红黑树，所以很难受，代码更长了。
##  left leaning red black tree code
<details>
<summary>left leaning red black tree代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/left_leaning_red_black_tree.h %}
</details>

# AA Tree
&emsp;&emsp; AA树真的很棒，虽然他没有普通红黑树那么厉害,但是AA树挺容易实现的，AA树是一棵右倾红黑树23树，注意! 这里是23树，不是234树。
## AA树的由来
&emsp;&emsp; Arne Andersson教授在论文Balanced search trees made simple中提到，红黑树有7种特殊情况（图片源于wiki）
![](\images\aa_tree\rb.png)
&emsp;&emsp; 为了改进，他提出了使用23树并强行要求3节点(2key-3son-node)向右倾斜，于是，我们只剩下两种情况(图片源于wiki)
![](\images\aa_tree\aa.png)
&emsp;&emsp; 为了更加容易编码，他提出不再使用红黑来标识节点，而是选择高度，这里的高度指的是黑高度，即黑色节点的高度，学习过左偏树(左翼堆)或斜堆的读者应该对这里不太陌生，这里的高度其实和左偏树或斜堆中的右距离是同一个东西。
## AA树的特性
>所有叶节点的level都是1
>每个左孩子的level恰好为其父亲的level减一
>每个右孩子的level等于其父亲的level或为其父亲的level减一
>每个右孙子的level严格小于其祖父节点的level
>每一个level大于1的节点有两个子节点

## AA树的skew
&emsp;&emsp;skew 是一个辅助函数，他的本质是zig，即如果发现一个节点的左儿子与自己黑高相同，则将左儿子选择至根。这将保证右倾。
## AA树中的split
&emsp;&emsp; split同样是一个辅助函数，他的本质是zag，即如果发现一个节点的右孙子与自己黑高相同，则将右儿子选择至根，并将黑高+1，这将保证不会出现4节点(3key-4son-node)
## AA树中的insert
&emsp;&emsp; 递归向下，找到插入位置，然后插入，最后调整，调整的时候，树会变高，对每一层递归而言，左儿子变高我们就先让其skew，这可能导致出现4节点，我们再split，对于右儿子变高的情况，这时候可能右儿子本身是一个3节点，当他变高，导致根成为了4节点，我们调用skew即可，全部统一一下，就是先skew后split
## AA树中的erase
&emsp;&emsp; 很多时候删除都是一件困难的事情，但是我们可以通过寻找前驱后继，可以保证删除的节点一定是叶子,对于删除叶子，可能树高下降，同样的，先删除后对每一层进行调整。我们前面说过，AA树只有两种结构。我们来分析一下树高下降产生的影响。

### 情况1
&emsp;&emsp; 右儿子与自己同黑高
<img src="/images/aa_tree/3.png" width="30%">
#### 情况1.1
&emsp;&emsp;  右儿子下降
<img src="/images/aa_tree/1.png" width="30%">
&emsp;&emsp; 这种情况是合法的，不需要调整
#### 情况1.2
&emsp;&emsp;  左儿子下降
<img src="/images/aa_tree/10.png" width="30%">
&emsp;&emsp; 我们观察到这里是一种较为复杂的情况，可以这样处理，让节点a和c同时黑下降，得到了
<img src="/images/aa_tree/11.png" width="30%">
&emsp;&emsp; 然后我们考虑到c节点的左右儿子,注意到c和a以前黑同高，所以c的右儿子cr，一定比c矮，当c下降以后，cl、c、cr同高
<img src="/images/aa_tree/12.png" width="30%">
&emsp;&emsp; 根据定义，这里最多还能拖出两个同黑高的，cl的右儿子clr，cr的右儿子crr
<img src="/images/aa_tree/13.png" width="30%">
&emsp;&emsp; 这时候我们对c执行skew，然后clr成了c的左儿子，我们再次对c执行skew，最终a-cl-clr-c-cr-crr同黑高，
<img src="/images/aa_tree/14.png" width="30%">
&emsp;&emsp; 接下来的一步是让我最吃惊的，非常漂亮，我们先对a进行split，然后对根的右儿子再次split，就结束了。对a进行split后我们得到,注意到这里根的高度提高了
<img src="/images/aa_tree/15.png" width="30%">
&emsp;&emsp; 对根对右儿子split,就结束了
<img src="/images/aa_tree/16.png" width="30%">
### 情况2
&emsp;&emsp; 右儿子与自己不同黑高
<img src="/images/aa_tree/1.png" width="30%">
#### 情况2.1
&emsp;&emsp; 右儿子下降
<img src="/images/aa_tree/4.png" width="30%">
&emsp;&emsp; 让a节点高度降低
<img src="/images/aa_tree/5.png" width="30%">
&emsp;&emsp; 让a进行skew,最后因为b的右儿子高度，分两种情况
<img src="/images/aa_tree/6.png" width="30%">
<img src="/images/aa_tree/7.png" width="30%">
&emsp;&emsp; 对于b的右儿子太高的时候，对a进行skew
<img src="/images/aa_tree/8.png" width="30%">
&emsp;&emsp; 然后对b进行split即可
#### 情况2.2
&emsp;&emsp; 左儿子下降
<img src="/images/aa_tree/2.png" width="30%">
&emsp;&emsp; 让a下降
<img src="/images/aa_tree/9.png" width="30%">
&emsp;&emsp; 这里可能发生c的右儿子与c同高，split（a）即可

## AA树erase总结
&emsp;&emsp; 至此我们的删除已经讨论完了，实际细分只有4种情况，这要比普通红黑树简单多了，

## AA树缺点
&emsp;&emsp; 多次旋转导致性能不及红黑树，旋转次数较多

## AA树代码
<details>
<summary>AA树代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/aa_tree.h %}
</details>

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

# Treap
&emsp;&emsp; 树堆Treap来源于Tree+Heap的组合, 其实就是一棵树，他的节点储存了两个键，一个是我们维护的信息，另外一个是随机数，我们不妨设前者叫key，后者叫rand_key，Treap的key满足搜索树的性质，Treap的rand_key满足堆的性质。(从某种意义上而言，笛卡尔树是key=rand_key的Treap)
&emsp;&emsp; 特点: 若key与rand_key确定后，Treap的形态唯一，
&emsp;&emsp; Treap在大多数情况下显然是平衡的，但我不会证明，也没找到证明，暂时先放一下。
## Treap insert
&emsp;&emsp; 我们向一棵Treap中按照搜索树的性质插入值以后，不会破坏搜索树的特点，但是大概率导致Heap的性质被违反。考虑到单旋不会导致搜索树的性质被破坏，我们通过单旋来从新让Treap满足Heap的性质。考虑回溯，假设我们对某个子树插入了一个值，若最终插入到左子树，则可能导致左子树树根的rand_key比当前节点的rand_key大，同时因为我们只插入了一个节点，所以最多也只有一个节点的rand_key比当前节点的rand_key大，这时候如果使用zig，则树恢复平衡。
## Treap erase
&emsp;&emsp; 还是使用平衡树的操作来对Treap进行删除。如果过程中用到了前驱后继替换的技巧，这将导致替换节点的rand_key和他所处在为位置不匹配，我们就只考虑这颗子树，因为只有这颗子树的树根出现了问题，我们尝试递归向下，将位置不匹配这个现象下移，因为不匹配，必然是这个节点的rand_key比儿子们小，这时候如果左儿子的rand_key大就zig，否则zag,最后能发现这问题在向叶子结点转移，我们能够递归向下，直到最后转移到叶子上，树就恢复平衡了。
## Treap 代码
<details>
<summary>Treap代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/treap.h %}
</details>

# 无旋Treap
&emsp;&emsp; 无旋treap，指的是不使用zig和zag来重新恢复平衡的Treap
&emsp;&emsp; 我们使用merge和split
## 无旋Treap merge
&emsp;&emsp; merge的参数是两个treap，他返回treap合并后的结果,不妨设其中一个为T1，另一个为T2，这里还要求T1的最大key小于等于T2的最小key。merge其实很简单，如果你学过左偏树的话，会很容易理解。我们不妨设T1的根的rand_key比T2的小。那么很显然，最终结果的根为T2的根，这里我们就可以递归了，我们将T2的左子树与T1合并出T3，最后让T3最为T2新的左子树，我们得到的T2就是merge的结果。
## 无旋Treap split
&emsp;&emsp; split的参数是一个Treap和一个值W，他返回两颗Treap,其中一个的最大key小于W，另一个大于W(不需要考虑等于的情况)，这个过程依然很简单，我们考虑根就可以了，如果根的key大于w，则根和右子树分到一遍，然后递归左儿子，将得到的两个Treap中key大的那个作为之前分到一边的根的左儿子即可。
## 无旋Treap insert
&emsp;&emsp; 先split，然后merge两次
## 无旋Treap erase
&emsp;&emsp; 很多人这里使用了split两次然后merge三次，我认为这个不太好，常数过大，我们可以这样做，先search找到要删的点，然后merge其左右子树顶替自己即可。
## 无旋Treap代码
<details>
<summary>无旋Treap代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/no_rotate_treap.h %}
</details>

# scapegoat Tree
&emsp;&emsp; 替罪羊树，他是一个暴力的bst，与普通bst相比，他记录了子树的大小，用参数alpha来定义平衡，即左右子树的大小都不允许超过根的alpha倍，所以往往aplha是一个0.5到1的数字，当违反了这个性质，就暴力重构，将树构造为完全平衡树。
## 替罪羊树erase
&emsp;&emsp; 为节点打上标记scapegoat，代表这个节点已经被删除了，回溯子树大小信息。
## 替罪羊树insert
&emsp;&emsp; 使用bst插入的方式来插入，注意特判掉那些被打删除标记的点，就可以了
## 替罪羊树重构
&emsp;&emsp; 当我们erase或者insert以后，受影响的节点应该恰好构成了一条从根到目标的链，我们使用maintain来重新调整子树大小的时候，注意标记那些非法(不平衡)的节点，然后当我们maintain到根的时候，我们重构离根最近的不平衡的子树。
## 替罪羊树代码
<details>
<summary>替罪羊树代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/scapegoat_tree.h %}
</details>



# vantate point tree
&emsp;&emsp;vp tree 是一颗二叉树，他和kd tree有着一定的相似度,

## 树上信息
&emsp;&emsp;每一颗子树都要维护一个点集，对于每个节点，我们都维护一个距离d，然后将到该节点的距离小于d的点放到左儿子，其他的放到右儿子中。

## vantate point
&emsp;&emsp;vantate point的选取是一个比较麻烦的事情，我们仔细想想都知道，这个点的选取肯定会影响算法，有一种处理办法是随机选取，这显然不是我们想要的。我们其实可以这样来处理，
>Our algorithm constructs a set of vantage point candidates by random sampling,and then evaluates each of them.Evaluation is accomplished by extracting another sample,from which the median of $\prod_p(S)$,and a corresponding moment are estimated.Finally,based on these statistical images,the candidate with the largest moment is chosen.

&emsp;&emsp;这里的$\prod_p(S)$指的就是在该度量空间中点p和点s的距离,作者选取的statistical images是方差，我们可以从伪码中看出。

## 建树
&emsp;&emsp;和kd树一样，建树的过程是一致的，我们选出vantate point,然后递归左右建树

## 搜索
&emsp;&emsp;搜索的话，也是一样的，用结果剪枝即可

## 修改
&emsp;&emsp;这样的树不存在单旋这种方式，我们只能用替罪羊树套vantate point tree来实现


## 参考资料
[Data Structures and Algorithms for Nearest Neighbor Search in General Metric Spaces Peter N.Yianilos*](http://web.cs.iastate.edu/~honavar/nndatastructures.pdf)

# cartesian tree
笛卡尔树是一颗二叉树，他满足中序遍历为维护的序列，且满足堆的性质

## build
我们使用单调栈来维护树根到叶子的链，在单调栈的构建中完成树的构建

<details>
<summary>ct代码</summary>
{% include_code tree lang:cpp cpp/perfect/data_structure/cartesian_tree.h %}
</details>

