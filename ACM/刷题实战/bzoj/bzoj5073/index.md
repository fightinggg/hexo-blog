---
date: 2019-03-22 20:13:05
updated: 2019-03-22 20:13:05
---

# 题意 

给你两个串s,t和一个数k，询问是否存在s的k个不重叠子串按原顺序排列后能组成 t,


# 数据范围

$|s|<1e5$,$|t|<1e5$,$k<100$,时间30s

<!-- more -->

# 题解

设状态$dp1[i][j]$代表串$s$从$s[1]$匹配到$s[i]$的时候选择了$k$个不重叠子串后，能够匹配到t串到最远位置。

设状态$dp2[i][j]$代表串s从$s[1]$匹配到$s[i]$的时候选择了$k$个不重叠子串且最后一个子串以$s[i]$结尾后，能够匹配到t串到最远位置。

根据定义$dp1[i][j]=max(dp2[t][j]), \forall t<=i$，于是简单的写出了转移式子：$dp1[i][j]=max(dp1[i-1][j],dp2[i][j])$

复杂的是$dp2[i][j]$不好得到，根据定义，$dp2[i][j]$一定会选择$s[i]$作为结尾的，现在分两类来讨论：

1. $s[i]$单独为一个子串,那么可以由$dp1[i-1][j-1]$转移过来，

2. $s[i]$可能不单独为一个子串,是跟前面的某串拼在一起的，那么可以由$dp2[i-1][j]$转移过来。
   

知道了转移来源，但是状态转移过来了，值要怎么更新呢？处理不好的话，更新是个麻烦事，这里我们预处理出$t$串里面从$t[1]$到$t[i]$中字符$ch$最后一次出现的位置，成为$max\_index\_before[i][ch]$

于是我们就有了转移式：

```txt
 dp2[i][j]=max(
        max_index_before[dp1[i-1][j-1]+1][s[i]],
        max_index_before[dp2[i-1][j]+1][s[i]]
        );
```

​    最后处理一下边界情况，把输入进来的s变成`"@&"+s`,把t变成`"@"+t`,k增大1，边界就简单了。最终答案在$dp1[n][k]$中。

时间复杂度O（nk）

做完了之后翻了下题解，没有人用我这方法做这个题目。。。。。。

正解如下：

考虑$dp[i][j]$就是我上文所谈到的$dp1[i][j]$，他没有$dp2[i][j]$，所以不能像我那样转移了。用到了“我为人人”的转移思路，$dp[i][j]$如果转移走的时候花费一次取子串，就能够转移到$dp[i+len][j+1]$，其中len代表`lcp(s.suffix(i+1),t.suffix(dp[i][j]+1))`,这个地方的lcp可以用后缀数组+rmq预处理优化为O(1)，如果不花费就转移到了$dp[i+1][j]$。总体上时间复杂度为O（nlogn+nk），时间复杂度较前一个做法偏高，代码也很长。

事实也是如此

```c++
#include<bits/stdc++.h>
using namespace std;

const int MAXN=1e5+555;
char s[MAXN],t[MAXN];
int dp1[MAXN][105];//前i的匹配最远
int dp2[MAXN][105];//i必须匹配的最远的
int max_index_before[MAXN][256];

int main(){
    int T,n,m,k;
    scanf("%d",&T);
    while(T--){
        //@&---
        //@---
        scanf("%d%d%d%s%s",&n,&m,&k,s+3,t+2);
        n+=2;
        m++;
        k++;
        s[1]=t[1]='@';
        s[2]='&';

        int max_index[256];
        for(int i=0;i<256;i++){
            max_index[i]=0;
        }
        for(int i=1;i<=m;i++){
            max_index[t[i]]=i;
            for(int j='a';j<='z';j++){
                max_index_before[i][j]=max_index[j];
            }
            max_index_before[i]['@']=max_index['@'];
            max_index_before[i]['&']=max_index['&'];
        }

        for(int i=1;i<=n;i++){
            dp1[i][1]=1;
            dp2[i][1]=0;
        }
        dp2[1][1]=1;

        for(int j=1;j<=k;j++){
            dp1[1][j]=dp2[1][j]=1;
        }

        for(int i=2;i<=n;i++){
            for(int j=2;j<=k;j++){
                dp2[i][j]=max(max_index_before[dp1[i-1][j-1]+1][s[i]],max_index_before[dp2[i-1][j]+1][s[i]]);
                dp1[i][j]=max(dp1[i-1][j],dp2[i][j]);
            }
        }

        if(dp1[n][k]==m)puts("YES");
        else puts("NO");
    }
}
```





```c++
#include<bits/stdc++.h>
using namespace std;

//定义以s[i]开头的后缀是suf(i)
//后缀数组性质：suf(sa[i])<suf(sa[i+1])
//模版从下标为1的地方开始，引入的字符串下标也要从下标为1开始

struct SA{
    static const int MAXN=2e5+555;
    static int lg[MAXN];
    int h[MAXN][20],rank[MAXN],sa[MAXN],n;

    void init(char*s,int len){//第一个参数要是从下标为1开始的字符串，第二个参数是要从下标为
        static int x[MAXN],y[MAXN],c[MAXN];//全部是辅助数组
        n=len;//初始化后缀数组内部的n->s后缀数组长度
        int m=1000;//桶的大小
        for(int i=1;i<=n;i++)sa[i]=y[i]=0;//初始化sa,y
        for(int i=1;i<=n;i++)x[i]=s[i];//把s复制到x
        for(int i=1;i<=m;i++)c[i]=0;//初始化c
        for(int i=1;i<=n;i++)c[x[i]]++;//对x计数
        for(int i=1;i<=m;i++)c[i]+=c[i-1];//计数前缀和
        for(int i=n;i>=1;i--)sa[c[x[i]]--]=i;//按照计数排序后的结果
        for(int k=1;k<=n;k<<=1){
            int num=0;
            for(int i=n-k+1;i<=n;i++)y[++num]=i;
            for(int i=1;i<=n;i++)if(sa[i]>k)y[++num]=sa[i]-k;
            for(int i=1;i<=m;i++)c[i]=0;//初始化c
            for(int i=1;i<=n;i++)c[x[i]]++;//对x计数
            for(int i=1;i<=m;i++)c[i]+=c[i-1];//计数前缀和
            for(int i=n;i>=1;i--)sa[c[x[y[i]]]--]=y[i];
            for(int i=1;i<=n;i++)y[i]=x[i];
            for(int i=1;i<=n;i++)x[i]=0;
            num=1;
            x[sa[1]]=1;
            for(int i=2;i<=n;i++){
                if((y[sa[i]]!=y[sa[i-1]])||(y[sa[i]+k]!=y[sa[i-1]+k])){
                    x[sa[i]]=++num;
                }
                else x[sa[i]]=num;
            }
            if(num>=n)break;
            m=num;
        }
        for(int i=1;i<=n;i++)rank[i]=x[i];
        //获取高度数组
        int k=0;
        for(int i=1;i<=n;i++){
            if(k)k--;
            int j=sa[rank[i]-1];
            while((i+k<=n)&&(j+k<=n)&&(s[i+k]==s[j+k]))k++;
            h[rank[i]][0]=k;
        }
        //对高度数组做rmq
        for(int j=1;j<20;j++){
            int d=1<<j;
            for(int i=1;i+2*d-1<=n;i++)h[i][j]=min(h[i][j-1],h[i+d][j-1]);
        }
        if(lg[1]!=0)for(int i=1;i<MAXN;i++)lg[i]=trunc(log(i+0.5)/log(2));
    }

    int lcp(int x,int y){//注意没有下标检查，如果访问越界的话，会错。
        int L=min(rank[x],rank[y])+1;
        int R=max(rank[x],rank[y]);
        int k=lg[R-L+1];
        return min(h[L][k],h[R-(1<<k)+1][k]);
    }
}sa;
int SA::lg[SA::MAXN];

const int MAXN=1e5+555;
char s[MAXN<<1];
int dp[MAXN][105];

int main(){
    int T,n,m,k;
    scanf("%d",&T);
    while(T--){
        //@&---
        //@---
        scanf("%d%d%d",&n,&m,&k);
        n+=2;
        m++;
        k++;
        char*t=s+n;

        scanf("%s%s",s+3,t+2);
        s[1]=t[1]='@';
        s[2]='&';

        sa.init(s,n+m);

        for(int i=1;i<=n;i++){
            for(int j=1;j<=k;j++){
                dp[i][j]=0;
            }
        }

        for(int i=1;i<=n;i++)dp[i][1]=1;
        for(int j=1;j<=k;j++)dp[1][j]=1;

        for(int i=1;i<=n;i++){
            for(int j=1;j<=k;j++){
                dp[i+1][j]=max(dp[i+1][j],dp[i][j]);//not choose

                if(dp[i][j]>=m)continue;//此处为下标检查
                int len=sa.lcp(i+1,n+dp[i][j]+1);
                dp[i+len][j+1]=max(dp[i][j]+len,dp[i+len][j+1]);//choose

            }
        }

        if(dp[n][k]==m)puts("YES");
        else puts("NO");
    }
```
