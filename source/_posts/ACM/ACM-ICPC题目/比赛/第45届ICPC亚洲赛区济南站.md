---
date: 2021-04-23 20:11:00
updated: 2021-04-23 20:11:00
mathjax: true
---

# A Matrix Equation

## 链接

https://ac.nowcoder.com/acm/contest/10662/A

## 题意

给你两个01方阵AB，你要找到一个01矩阵C，使得在2的模群中$A\times C=B\cdot C$ ,其中  $\times$  为一般矩阵乘积， 符号   $\cdot$   为[哈达马积（Hadamard product）](https://baike.baidu.com/item/%E5%93%88%E8%BE%BE%E7%8E%9B%E7%A7%AF/18894493?fr=aladdin)

问你C有多少个解

<!-- more -->

## 数据范围

AB的行列都小于2000

## 题解

通过观察，我们发现C的每一列是互相独立的，不妨设他的第i列为$C_i$ 我们取出这里一列重新构建一个矩阵，这是一个n行一列的矩阵。
$$
\begin{bmatrix}
	C_{1i} \\
	C_{2i} \\
	C_{3i} \\
	. \\
	. \\
	. \\
	C_{ni} \\
\end{bmatrix}
$$
然后就有了
$$
A \times
\begin{bmatrix}
	C_{1i} \\
	C_{2i} \\
	C_{3i} \\
	. \\
	. \\
	. \\
	C_{ni} \\
\end{bmatrix} = 
\begin{bmatrix}
	B_{1i}\cdot C_{1i} \\
	B_{2i}\cdot C_{2i} \\
	B_{3i}\cdot C_{3i} \\
	. \\
	. \\
	. \\
	B_{ni}\cdot C_{ni} \\
\end{bmatrix} = 
\begin{bmatrix}
	B_{11}\\
	& B_{22}\\
	&& B_{33}\\
	&&&\cdot \\
	&&&&\cdot \\
	&&&&&\cdot \\
	&&&&&&B_{ni} \\
\end{bmatrix} 
\times
\begin{bmatrix}
	C_{1i} \\
	C_{2i} \\
	C_{3i} \\
	. \\
	. \\
	. \\
	C_{ni} \\
\end{bmatrix}
$$
即
$$
(A  -
\begin{bmatrix}
	B_{11}\\
	& B_{22}\\
	&& B_{33}\\
	&&&\cdot \\
	&&&&\cdot \\
	&&&&&\cdot \\
	&&&&&&B_{ni} \\
\end{bmatrix} )
\times
\begin{bmatrix}
	C_{1i} \\
	C_{2i} \\
	C_{3i} \\
	. \\
	. \\
	. \\
	C_{ni} \\
\end{bmatrix} = 
\begin{bmatrix}
	0 \\
	0 \\
	0 \\
	. \\
	. \\
	. \\
	0 \\
\end{bmatrix}
$$
我们发现这是一个齐次线性方程组，直接使用高斯消元即可，时间复杂度$O(N^3)$，注意到是01矩阵，可以使用压位的方式降低64倍复杂度。



```c++
#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <bitset>

using namespace std;


int getDel(vector<bitset<205>> a, int n) {
    int row = 1;
    for (int maxCol = 1; maxCol <= n; row++, maxCol++) {
        if (a[row][maxCol] == 0) {
            int i = row + 1;
            while (i <= n && a[i][maxCol] == 0) {
                i++;
            }
            if (i == n + 1) {
                row--;
                continue;
            } else {
                swap(a[i], a[row]);
            }
        }

        for (int nextRow = row + 1; nextRow <= n; nextRow++) {
            if (a[nextRow][maxCol] == 0) {
                continue;
            } else {
                a[nextRow] ^= a[row];
            }
        }
    }

    return row - 1;
}


int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);

    const int mod = 998244353;

    int n;
    cin >> n;
    vector<bitset<205>> a(n + 1), b(n + 1);

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            int x;
            cin >> x;
            a[i][j] = x;
        }
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            int x;
            cin >> x;
            b[i][j] = x;
        }
    }

    int pow[205] = {1};
    for (int i = 1; i < 205; i++) {
        pow[i] = int(pow[i - 1] * 2LL % mod);
    }

    int ans = 1;
    for (int i = 1; i <= n; i++) {
        vector<bitset<205>> t = a; // t = a - bi

        for (int col = 1; col <= n; col++) {
            t[col][col] = t[col][col] ^ b[col][i];
        }

        int del = getDel(t, n);
        int tmp = pow[n - del];
        ans = int(1LL * tmp * ans % mod);
    }

    cout << ans << endl;
}

```



# J Tree Constructer



## 链接

https://ac.nowcoder.com/acm/contest/10662/J

## 题意

Alice有一颗树，你需要构造一个长度为n的序列，Alice会检查序列，如果满足$a_i | a_j=2^{60}-1$, 符号$|$是二进制运算'或', Alice会对点$i$和点$j$连上一条无向边，最后Alice得到了一个图，他会检查这个图是否和他的树一摸一样，如果是，你就成功了。

## 数据范围

$n<100, 0<a_i<2^{60}$

## 题解

考虑一个100个点的二分图，不妨假设这个二分图左侧的点比右侧的点少，且左侧的点的数量为x。则$x<50$。

我们给这$x$个点从0到$x-1$编号，最后为他们赋值$2^{60}-1-2^i(i为编号)$， 对于右边的点，我们假设他与编号在集合$S={s_1,s_2,s_3...}$的所有点相连，则我们为他赋值$2^{s_1}+2^{s_2}+2^{s_3}+...$, 由此方法，我们发现如果左边的点连向右边的点，他们的值的或恰好满足题意。

接下来我们要解决的是左侧的点与左侧的点不可连边，右侧的点与右侧的点不可连边，其实只需要让左侧和右侧的点的值分别以$01,10$开头即可。

然后树是一种特殊的二分图。此题已解决。



# L Bit Sequence

## 链接

https://ac.nowcoder.com/acm/contest/10662/L

## 题意

定义函数$f(x)$为$x$的二进制表示中，数字$1$出现的次数。

现在给你一个$01$串$a$,问在区间$[0,L]$中有多少个$x$满足: $∀i∈[0,m−1],f(x+i) \mod 2=a_i$

T组输入

## 数据范围

$T<1000,|a|<100, L<10^{18}$

## 题解

分析$f(x)$在$x=0,1,2,3$构成的序列$0,1,1,0$, 我们发现复制然后取反就能不断得到后面的值比如接下来的值就是$1,0,0,1$, 这个很好证明，其实本来是复制然后$+1$，但是在$2$的模群中，$+1$其实就是取反。

然后就变成了在一个长度为$10^{18}$的字符串中寻找子串$a$出现的次数，由于$|a|<100$,我们可以先分析长度恰好为128的母串A。然后翻转取反，分析接下来的长度为128的母串B，此后的所有串均为这AB排列得到，然后考虑跨越A或者跨越B的情况，由于$|AB|=256$，$|AA|=256$，$|BB|=256$，$|BA|=256$，所以跨越不会超过两个128长度的串所以我们直接对这四个情况分别统计即可，最后我们只能处理$L\mod 128=0$的情况，对于剩下的一小部分，直接暴力即可。

时间复杂度$O(T*256*4)$



