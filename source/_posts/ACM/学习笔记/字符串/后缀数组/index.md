---
date: 2018-10-29 14:10:22
updated: 2018-10-29 14:10:22
---



定义：

先定义一个字符串s，假设它的长度为n，s[i]表示第i个元素 ，s[i...]代表以s[i]开头且包含s[i]的后缀。我们定义新的数组 sa[i]为一个0-n的排列，且sa[i]为后缀s[i...]在所有后缀中按 照从小到大排序的排名。最后定义rank是sa的反函数。 

sa数组也称为后缀数组



```c++
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
```
