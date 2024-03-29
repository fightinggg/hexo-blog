---
date: 2019-09-03 16:23:37
updated: 2019-09-03 16:23:37
---

###name
Typewriter

###descirption
One day, Jerry found a strange typewriter. This typewriter has 2 input modes: pay p coins to append an arbitrary single letter to the back, or q coins to copy a substring that has already been outputted and paste it in the back.
Jerry now wants to write a letter to Tom. The letter is a string S which contains only lowercase Latin letters. But as Jerry is not very wealthy, he wants to know the minimum number of coins he needs to write this letter.

<!---more-->

###input
This problem contains multiple test cases. Process until the end of file.
For each test case, the first line contains string S $(|S|≤2×10^5,∑|S|≤5×10^6)$, consisting of only lowercase Latin letters. And the second line contains 2 integers p and q $(1≤p,q<2^{31})$.

###output
For each test case, output one line containing the minimum number of coins Jerry needs to pay.
 
###sample input
abc
1 2
aabaab
2 1

###sample output
3
6

###toturial
这个题目首先dp肯定跑不掉的，我们设dp[i]为构造出前i个字母的代价，我们先来分析dp函数的特点，他具有以下这些性质，
\* $1.$ dp单调不减
\* $2.$ 复制方案的决策点递增，
这两个性质非常好证明

据此我们就可以直接来dp了
dp[i] &lt;- dp[i-1] 
dp[i] &lt;- dp[j] 这里要求j是最小的值使得前缀S[1..j]包含子串S[j+1..i]

第二个转移方程的决策点递增，于是我们就可以直接利用这一点，来使用后缀自动机加速
###code
```cpp
#include<bits/stdc++.h>
using namespace std;

struct SAM{//下标从1开始，0作为保留位，用于做哨兵
    //如果没有特殊要求，尽量选择合适的自动机，要算好内存
    //经过hdu1000测试，10000个map大概是10kb,对于1e6的字符串，不建议使用后缀自动机
    typedef map<int,int>::iterator IT;
    static const int MAXN=2e5+10;
    int cnt,last,par[MAXN<<1],len[MAXN<<1];
//    map<int,int>trans[MAXN<<1];//map用于字符集特别大的时候，注意这里占内存可能会特别大
    int trans[MAXN<<1][26];

    inline int newnode(int parent,int length){
        par[++cnt]=parent;
        len[cnt]=length;
//        trans[cnt].clear();
        for(int i=0;i<26;i++) trans[cnt][i]=-1;
        return cnt;
    }

    void ini(){
        cnt=0;
        last=newnode(0,0);
    }

    void extend(int c){
        int p=last;
        int np=newnode(1,len[last]+1);//新建状态，先让parent指向根（1）
        while(p!=0&&trans[p][c]==-1){//如果没有边，且不为空，根也是要转移的
            trans[p][c]=np;//他们都没有向np转移的边，直接连过去
            p=par[p];//往parent走
        }
        if(p!=0){//如果p==0，直接就结束了，什么都不用做，否则节点p是第一个拥有转移c的状态，他的祖先都有转移c
            int q=trans[p][c];//q是p转移后的状态
            if(len[q]==len[p]+1)par[np]=q;//len[q]是以前的最长串，len[p]+1是合并后的最长串，相等的话，不会影响，直接结束了，
            else{
                int nq=newnode(par[q],len[p]+1);
//                trans[nq]=trans[q];//copy出q来，
                for(int i=0;i<26;i++) trans[nq][i]=trans[q][i];
                par[np]=par[q]=nq;//改变parent树的形态
                while(trans[p][c]==q){//一直往上面走
                    trans[p][c]=nq;//所有向q连边的状态都连向nq
                    p=par[p];
                }
            }
        }
        last=np;//最后的那个节点
    }//SAM到此结束
}sam;


int main(){
    // freopen("/Users/s/Desktop/02in.txt","r",stdin);
//    freopen("/Users/s/Desktop/02out.txt","w",stdout);
    ios::sync_with_stdio(false);
    cin.tie(0); cout.tie(0);
    string s;
    int a,b;
    while(cin>>s>>a>>b){
        vector<int>dp(s.size());
        sam.ini();
        sam.extend(s[0]-'a');
        dp[0]=a;
        int last=1; //rt
        int j=0;// match s[j+1,i]
        for(int i=1;i<s.size();i++){
            //assert(sam.len[sam.par[last]]<=i-1-(j+1)+1);
            while(j<i){
                if(sam.trans[last][s[i]-'a']!=-1) {
                    last=sam.trans[last][s[i]-'a'];
                    break;// find it
                }
                else{//match s[j+1,i-1] and can't match s[j+1,i] -> match s[j+2,i-1]
                    sam.extend(s[++j]-'a');
                    if(last!=1&&sam.len[sam.par[last]]>=(i-1)-(j+1)+1) last=sam.par[last];
                    if(last!=1&&sam.len[sam.par[last]]>=(i-1)-(j+1)+1) last=sam.par[last];
                }//只跳一步是不够的，因为extend的时候可能会让原last多一个父亲,所以要跳两步
            }
            dp[i]=dp[i-1]+a;
            if(j!=i) dp[i]=min(dp[i],dp[j]+b);
        }
        cout<<dp.back()<<endl;
    }
}





/*
 *
 *
 *





baaabbabbbabbaa
1 1



 */







```