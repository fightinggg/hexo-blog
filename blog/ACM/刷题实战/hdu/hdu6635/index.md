---
date: 2019-08-08 22:11:55
updated: 2019-08-08 22:11:55
---

###name
Nonsense Time

###description
You a given a permutation $p_1,p_2,…,p_n$ of size n. Initially, all elements in p are frozen. There will be n stages that these elements will become available one by one. On stage i, the element $p_{k_i}$ will become available.

For each i, find the longest increasing subsequence among available elements after the first i stages.

<!---more-->

###input
The first line of the input contains an integer T(1≤T≤3), denoting the number of test cases.

In each test case, there is one integer n(1≤n≤50000) in the first line, denoting the size of permutation.

In the second line, there are n distinct integers $p_1,p_2,...,p_n(1≤p_i≤n)$, denoting the permutation.

In the third line, there are n distinct integers $k_1,k_2,...,k_n(1≤k_i≤n)$, describing each stage.

It is guaranteed that $p_1,p_2,...,p_n$ and $k_1,k_2,...,k_n$ are generated randomly.

###output
For each test case, print a single line containing n integers, where the i-th integer denotes the length of the longest increasing subsequence among available elements after the first i stages.

###sample input
1
5
2 5 3 1 4
1 4 5 3 2
 
###sample output
1 1 2 3 3

###toturial
lis单调不减，所以我们可以直接采取倍增的思路，去尝试计算，即若存在ans[i]=ans[j]则所有ij之间的数，ans[k]=ans[i]=ans[j]他们都相等。可惜用树状数组写常数太大炸了，改正常写法才过

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

const int maxn=5e4+55;
int p[maxn],k[maxn],ans[maxn],a[maxn],dp[maxn];
int N;

int getlis(int*a,int n){
    static int v[maxn];
    int tot=0;
    for(int i=1;i<=n;i++){
        int*it=lower_bound(v+1,v+tot+1,a[i]);
        if(it==v+tot+1) v[++tot]=a[i];
        else *it=a[i];
    }
    return tot;
}

int vis[maxn];
inline void solve(int n){
    if(n<5e3){
        for(int i=1;i<=n;i++) dp[i]=k[i]; sort(dp+1,dp+1+n);
        for(int i=1;i<=n;i++) a[i]=p[dp[i]];
    }
    else{
        for(int i=1;i<=N;i++) vis[i]=0;
        for(int i=1;i<=n;i++) vis[k[i]]=1;
        int tot=0;
        for(int i=1;i<=N;i++){
            if(vis[i]==0) continue;
            a[++tot]=p[i];
        }
    }
    ans[n]=getlis(a,n); //a[1,n]
}

//究极读入挂
inline char nc(){
    static char buf[100000],*p1=buf,*p2=buf;
    return p1==p2&&(p2=(p1=buf)+fread(buf,1,100000,stdin),p1==p2)?EOF:*p1++;
}
inline int read(){
    char ch=nc();int sum=0;
    while(!(ch>='0'&&ch<='9'))ch=nc();
    while(ch>='0'&&ch<='9')sum=sum*10+ch-48,ch=nc();
    return sum;
}

int main(){
    int t=read();
    while(t--){
        int n=read(); N=n;
        for(int i=1;i<=n;i++) p[i]=read();
        for(int i=1;i<=n;i++) k[i]=read();
        solve(1); solve(n);
        set<int>se; se.insert(n);

        int cur=1;
        while(cur<n){
            int begin=*se.begin();
            if(cur+1==begin){
                cur=begin;
                se.erase(begin);
            }
            else if(ans[begin]==ans[cur]){
                while(cur<begin) ans[++cur]=ans[begin];
                se.erase(begin);
            }
            else{
                int x=(cur+begin)>>1;
                solve(x); se.insert(x);
            }
        }
        for(int i=1;i<=n;i++) printf("%d%c",ans[i],i==n?'\n':' ');
    }
}
```