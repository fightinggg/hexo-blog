---
date: 2019-09-02 22:57:13
updated: 2019-09-02 22:57:13
---

###name
Blank

###description
There are N blanks arranged in a row. The blanks are numbered 1,2,…,N from left to right.
Tom is filling each blank with one number in {0,1,2,3}. According to his thought, the following M conditions must all be satisfied. The ith condition is:
There are exactly $x_i$ different numbers among blanks $∈[l_i,r_i]$.
In how many ways can the blanks be filled to satisfy all the conditions? Find the answer modulo 998244353.

<!---more-->

###input
The first line of the input contains an integer T(1≤T≤15), denoting the number of test cases.
In each test case, there are two integers n(1≤n≤100) and m(0≤m≤100) in the first line, denoting the number of blanks and the number of conditions.
For the following m lines, each line contains three integers l,r and x, denoting a condition(1≤l≤r≤n, 1≤x≤4).
 
###output
For each testcase, output a single line containing an integer, denoting the number of ways to paint the blanks satisfying all the conditions modulo 998244353.

###sample input
2
1 0
4 1
1 3 3

###sample output
4
96


###toturial
设dp[a][b][c][d]为填完前d个数之后0，1，2，3最后出现的位置为a,b,c,d且前a个位置都满足题意的方案数，于是我们就可以转移了，注意到0，1，2，3具有轮换对称性，那么dp一定也有他的规律，举个很简单的例子dp[9][3][5][7]和dp[9][7][5][3]一定是相等的，于是我们可以对b,c,d排序来进一步压缩状态，可以提高程序的速度,时间复杂度$n^4$,空间上滚动即可达到$n^3$的复杂度

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define rep(i,j,k) for(int i=(j);i<=(k);++i)

const int maxn=103;
int dp[2][maxn][maxn][maxn];
int mx[maxn][5],mi[maxn][5];

const int mod=998244353;
void add(int&a,int&b){a+=b;if(a>=mod) a-=mod;}

int main(){
    int T; scanf("%d",&T);
    while(T--){
        int n,m; scanf("%d%d",&n,&m);
        rep(i,1,n) rep(j,1,4) mx[i][j]=-1e9,mi[i][j]=1e9;
        rep(i,1,m){
            int l,r,x; scanf("%d%d%d",&l,&r,&x);
            mx[r][x]=max(mx[r][x],l);
            mi[r][x]=min(mi[r][x],l);
        }
        rep(i,0,n)rep(j,0,i)rep(k,0,j)dp[1&1][i][j][k]=0;
        dp[1&1][0][0][0]=4;// 因为第一个位置可以填四种数，不妨假设位置0填了所有的数字
        rep(t,1,n){
            rep(i,0,t) rep(j,0,i) rep(k,0,j)dp[(t+1)&1][i][j][k]=0;
            rep(i,0,t-1) rep(j,0,i) rep(k,0,j){
                if(mi[t][1]<=i||mi[t][2]<=j||mi[t][3]<=k||mx[t][2]>i||mx[t][3]>j||mx[t][4]>k) dp[t&1][i][j][k]=0;
                if(dp[t&1][i][j][k]==0) continue;
                add(dp[(t+1)&1][t][i][j],dp[t&1][i][j][k]);
                add(dp[(t+1)&1][t][i][k],dp[t&1][i][j][k]);
                add(dp[(t+1)&1][t][j][k],dp[t&1][i][j][k]);
                add(dp[(t+1)&1][i][j][k],dp[t&1][i][j][k]);
            }
        }
        int ans=0;
        rep(i,0,n-1) rep(j,0,i) rep(k,0,j) add(ans,dp[n&1][i][j][k]);
        printf("%d\n",ans);
    }
}
```