---
date: 2019-08-06 15:43:59
updated: 2019-08-06 15:43:59
---

###name
病毒

###descirption
二进制病毒审查委员会最近发现了如下的规律：某些确定的二进制串是病毒的代码。如果某段代码中不存在任何一段病毒代码，那么我们就称这段代码是安全的。现在委员会已经找出了所有的病毒代码段，试问，是否存在一个无限长的安全的二进制代码。

示例：
例如如果{011, 11, 00000}为病毒代码段，那么一个可能的无限长安全代码就是010101…。如果{01, 11, 000000}为病毒代码段，那么就不存在一个无限长的安全代码。

任务：
请写一个程序：
1.在文本文件WIR.IN中读入病毒代码；
2.判断是否存在一个无限长的安全代码；
3.将结果输出到文件WIR.OUT中。

<!---more-->

###input
在文本文件WIR.IN的第一行包括一个整数n(n≤2000)，表示病毒代码段的数目。以下的n行每一行都包括一个非空的01字符串——就是一个病毒代码段。所有病毒代码段的总长度不超过30000。

###output
在文本文件WIR.OUT的第一行输出一个单词：
TAK——假如存在这样的代码；
NIE——如果不存在。

###sample input
3
01 
11 
00000

###sample output
NIE

###toturial
&emsp;&emsp;建立ac自动机后，判断trans是否构成环即可

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

const int maxn=1e6+5;
int trans[maxn][2],fail[maxn],ed[maxn],ban[maxn];
int root,cnt;

inline int new_node(){
    //fail指针不需要初始化,因为在bfs的时候他被更新
    for(int i=0;i<2;i++)trans[cnt][i]=0;
    ed[cnt]=0;
    ban[cnt]=0;
    return cnt++;
}

void ini(){
    cnt=0;
    root=new_node();
}

void extend(char*buf){
    int len=(int)strlen(buf+1);
    int u=root;
    for(int i=1;i<=len;i++){
        if(trans[u][buf[i]-'0']==0)
            trans[u][buf[i]-'0']=new_node();
        u=trans[u][buf[i]-'0'];
    }
    ed[u]++;
}

void get_fail(){
    queue<int>q;
    q.push(root);
    while(!q.empty()){
        int u=q.front();q.pop();
        for(int i=0;i<2;i++){
            if(trans[u][i]==0){
                trans[u][i]=-abs(trans[fail[u]][i]);//采用负数来表示非树边。。
            }
            else{
                q.push(trans[u][i]);
                fail[trans[u][i]]=abs(trans[fail[u]][i]);
                if(u==root)fail[trans[u][i]]=root;
            }
        }
        if(ban[fail[u]]==1) ban[u]=1;
        if(ed[u]!=0) ban[u]=1;
    }
}

int ins[maxn];
bool dfs(int u=root){// return ture if have huan
    ins[u]=1;
    for(int i=0;i<2;i++){
        if(ban[abs(trans[u][i])]) continue;
        if(ins[abs(trans[u][i])]) return true;
        if(dfs(abs(trans[u][i]))) return true;
    }
    ins[u]=0;
    return false;
}

char s[maxn];

int main(){
    int n; scanf("%d",&n);
    ini();
    while(n--){
        scanf("%s",s+1);
        extend(s);
    }
    get_fail();
    if(dfs()) puts("TAK");
    else puts("NIE");
}
```