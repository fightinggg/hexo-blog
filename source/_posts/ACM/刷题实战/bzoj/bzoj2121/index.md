---
date: 2019-03-29 23:35:59
updated: 2019-03-29 23:35:59
---

# 题意

BX正在进行一个字符串游戏，他手上有一个字符串L，以及其他一些字符串的集合S，然后他可以进行以下操作：对于一个在集合S中的字符串p,如果p在L中出现，BX就可以选择是否将其删除，如果删除，则将删除后L分裂成的左右 两部分合并。举个例子，L='abcdefg' , S={'de'}，如果BX选择将'de'从L中删去，则删后的L='abcfg'。现在BX可 以进行任意多次操作（删的次数，顺序都随意），他想知道最后L串的最短长度是多少。

# 限制条件

|L|<=150

|S[i]|<=20

|S|<=30



<!-- more -->

# 题解

设置`dp[i][j][k][t]`代表L的子串`L[i,j]`，能否实现删除之后，可以匹配S中第k个串的前t个字符。

转移的时候

若匹配成功时，考虑第j位，若还在串中，且有`L[j]==S[k][t]`,则可以由`dp[i][j-1][k][t-1]`转移过来

若此位不在，肯定是被其他S=消除了，则考虑枚举ij中间的d，若存在一个k’,若`dp[d][j][k’][len[k’]]==true` (len[k’]代表k’串的长度），说明存在某方法消掉区间d..j 于是`dp[i][j][k][t]`可以由`dp[i][d-1][k][t]`转移过来。

综合：转移依赖于`dp[i][j-1][k][t-1]`、`dp[d][j][k’][len[k’]]`、`dp[i][d-1][k][t]`

仔细观察，区间长度是关键，这些区间长度都比区间ij小，我们只需要从小到大枚举区间长度，即可成功转移，时间复杂度$(151\times 151\times 31\times 21) \times (151\times 31)$

这里转移过程时间复杂度太大了，也不利于转移，我们紧接着发现一个可以优化的地方，`dp[d][j][k’][len[k’]]`这里的枚举k’是可以优化的，它的本质是看看能否消掉区间d..j，我们用另外一个数组`crm[i][j](如果能移除子串L[i,j],则crm[i][j]=true)`来记录一下即可，于是时间复杂度$(151\times 151\times31\times21) \times31$

$4\times108$这样的时间复杂度已经可以了，

我们再来看如何转移到答案，其实只需要`crm[][]`即可，我们用`mln[i]`数组来代表前i项经过操作后能留下的最短的串的长度，

mln[i]如果保留最后一个字符则可以由mln[i-1]+1转移

否则可以由mln[d]转移,前提是`crm[d+1][i]=true`,区间[d+1,i]可以被消掉。

 最终答案在mln[strlen[L]]中。

```c++
#include<bits/stdc++.h>
using namespace std;

char L[160],S[40][30];
int len[40];
bool crm[160][160];//crm[i][j]  ->   can remove L[i..j]
int mln[160];//mln[i]  ->  min len  ->   L[1..i]经过操作后能够变得最短的长度
bool dp[160][160][40][30];//dp[i][j][k][t] ->  代表L[i..j]能够删成串k的前t项

int main(){

    int n;
    scanf("%s%d",L+1,&n);
    for(int i=1;i<=n;i++){
        scanf("%s",S[i]+1);
        len[i]=strlen(S[i]+1);
    }

    int lenL=strlen(L+1);

    for(int i=1;i<=lenL;i++){
        for(int k=1;k<=n;k++){
            dp[i][i-1][k][0]=true;
        }
    }

    for(int len_seg=1;len_seg<=lenL;len_seg++){
        for(int i=1;i+len_seg-1<=lenL;i++){
            int j=i+len_seg-1;
            for(int k=1;k<=n;k++){
                for(int t=1;t<=len[k];t++){
                    dp[i][j][k][t]=false;
                    if(L[j]==S[k][t])dp[i][j][k][t]=dp[i][j-1][k][t-1];
                    for(int d=i;d<=j;d++){
                        if(crm[d][j]&&dp[i][d-1][k][t])dp[i][j][k][t]=true;
                    }
                }
                if(dp[i][j][k][len[k]])crm[i][j]=true;
            }
        }
    }

    for(int i=1;i<=lenL;i++){
        mln[i]=mln[i-1]+1;
        for(int j=1;j<=i;j++){
            if(crm[j][i])mln[i]=min(mln[i],mln[j-1]);
        }
    }

    cout<<mln[lenL]<<endl;
}
```
