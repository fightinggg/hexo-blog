---
date: 2019-09-04 11:24:31
updated: 2019-09-04 11:24:31
---

###name

###descirption

<!---more-->

###input

###output

###sample input

###sample output

###toturial
先来看一个简单的变形
$$
\begin{aligned}
&\sum_{i=1}^{n}gcd(x,i)\\
=&\sum_{d|x}\sum_{i=1}^{n}[gcd(x,i)=d]\\
=&\sum_{d|x}\sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}[gcd(\frac{x}{d},i)=1]\\
=&\sum_{d|x}\sum_{i=1}^{\lfloor\frac{n}{d}\rfloor}\sum_{y|\frac{x}{d},y|i}\mu(y)\\
=&\sum_{y|x}\sum_{d|\frac{x}{y}}\sum_{y|i,i\leq\lfloor\frac{n}{d}\rfloor}\mu(y)\\
=&\sum_{y|x}\sum_{d|\frac{x}{y}}\frac{\lfloor\frac{n}{d}\rfloor}{y}\mu(y)\\
=&\sum{}\\
\end{aligned}
$$

题目让我们求的东西是这个
$$
\begin{aligned}
\sum_{i=1}^{n}gcd(\lfloor\sqrt[3]{i}\rfloor,i)
\end{aligned}
$$

###code
```cpp
#include<bits/stdc++.h>
using namespace std;
```