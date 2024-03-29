---
date: 2019-09-03 00:23:26
updated: 2019-09-03 00:23:26
---

###name
Operation

###descirption
There is an integer sequence a of length n and there are two kinds of operations:
0 l r: select some numbers from $a_l...a_r$ so that their xor sum is maximum, and print the maximum value.

1 x: append x to the end of the sequence and let n=n+1.

<!---more-->

###input
There are multiple test cases. The first line of input contains an integer T(T≤10), indicating the number of test cases.
For each test case: 
The first line contains two integers n,m$(1≤n≤5×10^5,1≤m≤5×10^5)$, the number of integers initially in the sequence and the number of operations.
The second line contains n integers a1,a2,...,an$(0≤a_i\lt 2^{30})$, denoting the initial sequence.
Each of the next m lines contains one of the operations given above.
It's guaranteed that $∑n≤10^6,∑m≤10^6,0≤x\lt 2^{30}$.
And operations will be encrypted. You need to decode the operations as follows, where lastans denotes the answer to the last type 0 operation and is initially zero: 
For every type 0 operation, let $l=(l xor lastans)mod n + 1$, $r=(r xor lastans)mod n + 1$, and then swap(l, r) if $l>r$.
For every type 1 operation, let x=x xor lastans.

###output
For each type 0 operation, please output the maximum xor sum in a single line.

###sample input
1
3 3
0 1 2
0 1 1
1 3
0 3 4

###sample output
1
3

###toturial
我们使用线性基，对每一个前缀都建立一个线性基，贪心的选择考后的向量作为基即可，如此则查询T(30)，添加值T(30)，关键点在于如何通过一个前缀构建另一个前缀的线形基，我们只要保证线形基中的元素有顺序，即某个前缀的基都是相对于这个前缀的后缀最简形式，那么我们就可以在后面进行换基，来构建另一个前缀的基

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define rep(i,j,k) for(int i=(j);i<=(k);++i)
#define per(i,j,k) for(int i=(j);i>=(k);--i)

const int maxn=1e6+6;
int bs[maxn][30],ps[maxn][30];
void add(int n,int x){
    rep(i,0,29) bs[n][i]=bs[n-1][i],ps[n][i]=ps[n-1][i];
    int pos=n;
    per(i,29,0) if(1<<i&x) {
        if(bs[n][i]==0) {
            bs[n][i]=x,ps[n][i]=pos;
            break;
        }
        else {
            if(ps[n][i]<pos)swap(bs[n][i],x),swap(ps[n][i],pos);
            x^=bs[n][i];
        }
    }
}
inline int read(){int x;scanf("%d",&x);return x;}
int main() {
    int t=read();
    while(t--){
        int n=read(),m=read();
        rep(i,1,n) add(i,read());
        int lst=0;
        while(m--){
            if(read()==1) add(++n,read()^lst);
            else{
                int l=(read()^lst)%n+1,r=(read()^lst)%n+1;
                if(l>r)swap(l,r);
                lst=0;
                per(i,29,0) if(ps[r][i]>=l) lst=max(lst,lst^bs[r][i]);
                printf("%d\n",lst);
            }
        }
    }
}
```