---
date: 2020-04-29 21:22:15
updated: 2020-04-29 21:22:15
---


时间限制：C/C++ 2秒，其他语言4秒
空间限制：C/C++ 262144K，其他语言524288K
64bit IO Format: %lld
# 题目描述 
Rinne 最近学习了位运算相关的知识，她想运用自己学习的知识发明一个加密算法。
首先她有一个源数组 A，还有一个密钥数组 B，现在她想生成加密后的数组 C。
她发明的方法是：当计算$$C_i$$的时候，首先将 $$C_i$$赋值为$$C_{i-1}$$，然后加上$$ A_i$$ 分别与每一个满足 $$j \lt i$$ 的 $$B_j$$ 异或后的和，然后加上 $$B_i$$ 分别与每一个满足 $$j \lt i$$ 的 $$A_j$$ 异或后的和，最后加上 $$A_i$$ 与 $$B_i$$ 的异或和。
形式化的讲，关于 $$C_i$$ 的递推式为以下式子： 
<!-- more -->
$$
\begin{aligned}
&C_0 = 0
\\&C_i = C_{i-1} + A_i xor B_i + (\sum_{j=1}^{i-1} (A_i xor B_j + A_j xor B_i))C 
\end{aligned}
$$
现在她想用程序来实现这个过程，你能帮帮她吗？由于输出可能太大，你只需要输出每个 $$C_i$$ 模 $$10^9+7$$ 的结果即可。

# 输入描述:
第一行一个整数 N，表示数组 A 和 B 的长度。
第二行 N 个整数表示数组 A。
第三行 N 个整数表示数组 B。
# 输出描述:
输出一行 N 个整数，表示加密后的数组 C。

# 示例1
输入
```input
10
65605 70259 77306 43823 61443 98602 9261 7662 46394 83019
81393 5966 61479 24259 92528 96132 35859 47981 11702 71736
```
输出
```
15796 166270 623824 1132402 1650729 2445262 3256941 4150718 5106184 6353038
```
备注:
$$
N \leq 10^5 ,a_i \leq 10^9N≤10 
$$

# 思路
我们不难发现，数字的每一个位是独立的，他们对答案的影响互不干扰，于是我们就可以吧数字拆开，一位一位的考虑，
当我们只考虑一位的时候，答案就只和1的个数有关了。

# 代码
```cpp
#include<bits/stdc++.h>
using namespace std;

void sum01(int*a,int*b,int*c,int n,int mod){
    long long sa=0,sb=0;
    for(int i=0;i<n;i++){
        sa+=a[i];
        sb+=b[i];
        c[i]=(sa*(i+1-sb)+sb*(i+1-sa))%mod;
    }
}
void sum(int*a,int*b,int*c,int n,int mod){
    vector<int> a01(n),b01(n),c01(n);
    for(int mask=1;mask<=1e9;mask<<=1){
        for(int i=0;i<n;i++){
            a01[i] = (mask&a[i]) ? 1:0;
            b01[i] = (mask&b[i]) ? 1:0;
        }
        sum01(a01.data(),b01.data(),c01.data(),n,mod);
        for(int i=0;i<n;i++) c[i] = (c[i]+1ll*c01[i]*mask)%mod;
    }
}

int main(){
    int n;
    cin>>n;
    vector<int> a(n),b(n),c(n);
    for(int i=0;i<n;i++) cin>>a[i];
    for(int i=0;i<n;i++) cin>>b[i];
    sum(a.data(),b.data(),c.data(),n,1e9+7);
    for(int i=0;i<n;i++) cout<<c[i]<<" ";
    cout<<endl;
}
```