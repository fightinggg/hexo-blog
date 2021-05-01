---
date: 2019-04-23 17:11:29
updated: 2019-04-23 17:11:29
mathjax: true
---

## 常见数位dp

如果一个在数字上的计数问题只与数位和数的大小有关的时候 我们可以尝试用数位dp来解决。最经典的就像不要62那道题。

## 数位dp状态

我们常常设`dp[val][len][limit][lead]`来表示以val开头 数位长度剩余len(包含val)，limit表示数有没有上限,后面发现这一维度没有作用 。lead表示val及以前是否含有前导数，来特判某些跟前导0有关的题目

```c++
ll dfs(int*num, int n, int pre, int pos, bool limit, bool lead){//try to fill the pos bit
    if(pos==n)return 1;
    else{
        if(!limit&&dp[pre==6][num[pos]][n-pos][lead]!=-1)
            return dp[pre==6][num[pos]][n-pos][lead];
        else {
            int upper=limit ? num[pos] : 9;
            ll ans=0;
            for(int i=0;i<=upper;i++){
                if(i==4)continue;
                if(pre==6&&i==2)continue;
                ans+=dfs(num,n,i,pos+1,limit&&i==upper,lead||i!=0);
            }
            if(!limit) dp[pre==6][num[pos]][n-pos][lead]=ans;
            return ans;
        }
    }
}
```