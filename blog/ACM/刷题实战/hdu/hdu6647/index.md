---
date: 2019-08-12 23:09:04
updated: 2019-08-12 23:09:04
---

###name
Bracket Sequences on Tree

###decription
Cuber QQ knows about DFS on an undirected tree, he's sure that you are familiar with it too. In case you are not, Cuber QQ is delighted to share with you a snippet of pseudo code:


function dfs(int cur, int parent):
  print('(')
  for all nxt that cur is adjacent to:
    dfs(nxt, cur)
  print(')')

<!---more-->
You might notice that Cuber QQ print a "(" when entering a node, and a ")" when leaving a node. So when he finishes this DFS, in his console, he will see a bracket sequence of length 2n, where n is the number of vertices in the tree.

Obviously, if the tree is undirected and the nodes are unlabelled (meaning that all the nodes are treated equally), you can get a lot of different bracket sequences when you do the DFS. There are two reasons accounting for this. Firstly, when you are at cur, you can follow any permutation of the nodes that cur is adjacent to when you visit nxt. Secondly, the entrance to the tree, that is the root, is undeterministic when you start your DFS.

So Cuber QQ couldn't help wondering how many distinct bracket sequences he can get possibly. As the answer can be very large, output it modulo 998 244 353.

###input
The first line of the input consists of one integer t $(1≤t≤10^5)$, which is the number of the test cases.

For each test case, the tree is given in a standard format, which you might be very familiar with: first line n $(1≤n≤10^5)$, the size of tree; then n−1 lines, each consisting of two space-separated integers u, v (1≤u,v≤n, u≠v), denoting an edge.

The sum of n from all test cases does not exceed $3.2×10^6$.

###output
For each test case, output the answer in one line.

###sample input
3
4
1 3
2 3
4 3
5
1 2
2 3
3 4
4 5
5
1 2
2 3
3 4
3 5


###sample output
2
4
8


###toturial
其实很简单，就一个树hash然后树dp就秒掉了，但是由于之前学某博客的树hash，结果冲突掉了，最后看了杨弋的论文才懂了怎么一回事

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define get64(a,b) ((a)*2000000000ll+(b))
typedef pair<int,int> pii;
#define __int64 long long

const int maxn=2e5+5;


// tree 节点0不准使用
int head[maxn];// point
int to[maxn*2],nex[maxn*2],tot;// edge
inline void _addedge(int u,int v){to[++tot]=v,nex[tot]=head[u],head[u]=tot;}
inline void addedge(int u,int v){_addedge(u,v),_addedge(v,u);}
void deltree(int rt,int father){// deltree() and also don't forget tot
    for(int i=head[rt];i;i=nex[i]) if(to[i]!=father) deltree(to[i],rt);
    head[rt]=0;
}
//  struct tree{int rt,n;}


//tree hash
int pw[maxn*2]={1},hshmod;//pw要两倍
int *hsh,siz[maxn]; //point
int *ehsh; //edge
void dfs(int u,int father){
    siz[u]=1;
    for(int i=head[u];i;i=nex[i]){
        if(to[i]==father)continue;
        dfs(to[i],u), siz[u]+=siz[to[i]];
    }
}
void dfs1(int u,int father){// solve every edge from father->u
    for(int i=head[u];i;i=nex[i]){
        if(to[i]==father) continue;
        dfs1(to[i],u);

        vector<pii>buf;
        for(int j=head[to[i]];j;j=nex[j]){
            if(to[j]==u) continue;
            buf.emplace_back(ehsh[j],2*siz[to[j]]);
        }
        sort(buf.begin(),buf.end());
        ehsh[i]=1;// 左边放1
        for(pii x:buf) ehsh[i]=(1ll*ehsh[i]*pw[x.second]+x.first)%hshmod;
        ehsh[i]=(1ll*ehsh[i]*pw[1]+2)%hshmod;// 右边放2
    }
}
void dfs2(int u,int father,int rt){
    vector<pii>buf;
    for(int i=head[u];i;i=nex[i]) {
        if(to[i]==father) buf.emplace_back(ehsh[i],2*(siz[rt]-siz[u]));
        else buf.emplace_back(ehsh[i],2*siz[to[i]]);
    }
    sort(buf.begin(),buf.end());
    hsh[u]=1;// 左边放1
    for(pii x:buf) hsh[u]=(1ll*hsh[u]*pw[x.second]+x.first)%hshmod;
    hsh[u]=(1ll*hsh[u]*pw[1]+2)%hshmod;// 右边放2

    vector<pii>pre(buf),suf(buf);// 对后面进行处理
    int sz=suf.size();
    for(int i=1,j=sz-2;i<sz;i++,j--){
        pre[i].first=(1ll*pre[i-1].first*pw[pre[i].second]+pre[i].first)%hshmod;// merge i-1 and i
        suf[j].first=(1ll*suf[j].first*pw[suf[j+1].second]+suf[j+1].first)%hshmod;// merge j and j+1
        pre[i].second+=pre[i-1].second;
        suf[j].second+=suf[j+1].second;
    }

    for(int i=head[u];i;i=nex[i]){
        if(father==to[i]) continue;
        ehsh[i^1]=1;//左边放1
        int idx=lower_bound(buf.begin(),buf.end(),pii(ehsh[i],2*siz[to[i]]))-buf.begin();
        if(idx-1>=0) ehsh[i^1]=(1ll*ehsh[i^1]*pw[pre[idx-1].second]+pre[idx-1].first)%hshmod;// 前缀
        if(idx+1<sz) ehsh[i^1]=(1ll*ehsh[i^1]*pw[suf[idx+1].second]+suf[idx+1].first)%hshmod;// 后缀
        ehsh[i^1]=(1ll*ehsh[i^1]*pw[1]+2)%hshmod;//右边放2
        dfs2(to[i],u,rt);
    }
}
void treehash(int u,int*hsh_,int*ehsh_,int base,int hshmod_){//hash all tree of tree u
    hsh=hsh_,ehsh=ehsh_,hshmod=hshmod_;
    dfs(u,0); for(int i=1;i<=siz[u]*2;i++) pw[i]=1ll*pw[i-1]*base%hshmod;
    dfs1(u,0),dfs2(u,0,u);
}
////// end


const int mod=998244353;
int qpow(int a,int b){
    int res=1;
    while(b){
        if(b&1) res=1ll*res*a%mod;
        a=1ll*a*a%mod;
        b>>=1;
    }
    return res;
}
int fac[maxn]={1},rev[maxn]={1};
void ini(){
    for(int i=1;i<maxn;i++) fac[i]=1ll*fac[i-1]*i%mod;
    rev[maxn-1]=qpow(fac[maxn-1],mod-2);
    for(int i=maxn-2;i>=0;i--) rev[i]=1ll*rev[i+1]*(i+1)%mod;
}


int myhsh[4][maxn],ans[maxn]; // point
int myehsh[4][maxn*2],eans[maxn*2]; // edge
void dfs3(int u,int father){// solve edge from father->u
    for(int i=head[u];i;i=nex[i]){
        if(to[i]==father) continue;
        dfs3(to[i],u);

        map<__int64,pii>mp;
        int son=0;
        for(int j=head[to[i]];j;j=nex[j]){
            if(to[j]==u) continue;
            __int64 key=get64(myehsh[0][j],myehsh[1][j]);
            if(mp.find(key)!=mp.end()) mp[key].first++;
            else mp[key]=pii(1,eans[j]);// 数量+方案
            son++;
        }
        eans[i]=fac[son];//全排列
        for(auto it:mp){
            eans[i]=1ll*eans[i]*rev[it.second.first]%mod;//去全排
            eans[i]=1ll*eans[i]*qpow(it.second.second,it.second.first)%mod;//自排
        }
    }
}
void dfs4(int u,int father){
    map<__int64,pii>mp;
    int son=0;
    for(int i=head[u];i;i=nex[i]) {
        __int64 key=get64(myehsh[0][i],myehsh[1][i]);
        if(mp.find(key)!=mp.end()) mp[key].first++;
        else mp[key]=pii(1,eans[i]);// 数量+方案
        son++;
    }
    ans[u]=fac[son];

    for(auto it:mp){
        ans[u]=1ll*ans[u]*rev[it.second.first]%mod;//去全排
        ans[u]=1ll*ans[u]*qpow(it.second.second,it.second.first)%mod;//自排
    }

    for(int i=head[u];i;i=nex[i]){
        if(to[i]==father) continue;
        __int64 key=get64(myehsh[0][i],myehsh[1][i]);
        int a=mp[key].first, x=eans[i];// a^x
        eans[i^1]=1ll*ans[u]*a%mod*qpow(1ll*x*son%mod,mod-2)%mod;
        dfs4(to[i],u);
    }
}

int main(){
    ini();
    int times;scanf("%d",&times);
    while(times--){
        tot=1;
        int n;scanf("%d",&n);
        for(int i=0;i<n-1;i++){
            int u,v;scanf("%d%d",&u,&v);
            addedge(u,v);
        }
        int b[]={3,5},p[]={1000000009,1000000009};
        for(int i=0;i<2;i++) treehash(1,myhsh[i],myehsh[i],b[i],p[i]);
        dfs3(1,0),dfs4(1,0);
        map<__int64,int>mp;
        long long res=0;
        for(int i=1;i<=n;i++) {
            __int64 key=get64(myhsh[0][i],myhsh[1][i]);
            if(mp[key]==0) res+=ans[i];// ans<1e14
            mp[key]=1;
        }
        printf("%d\n",int(res%mod));
        deltree(1,0),tot=1;
    }
}
```