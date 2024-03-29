---
date: 2019-08-09 19:23:22
updated: 2019-08-09 19:23:22
---

###name
双面棋盘

###descirption
佳佳有一个 n 行 n 列的黑白棋盘，每个格子都有两面，一面白色，一面黑色。佳佳把棋盘平放在桌子上，因此每个格子恰好一面朝上，如下图所示：
![wtf][base64str]
我们把每行从上到下编号为 1，2，3，……，n，各列从左到右编号为 1，2，3，……，n，则每个格子可以用棋盘坐标(x,y)表示。在上图中，有8个格子黑色朝上，另外17 个格子白色朝上。
如果两个同色格子有一条公共边，我们称这两个同色格子属于同一个连通块。上图共有 5 个黑色连通块和 3 个白色连通块。
佳佳可以每分钟将一个格子翻转（即白色变成黑色，黑色变成白色），然后计算当前有多少个黑色连通块和白色连通块，你能算得更快吗？

<!---more-->

###input
输入文件的第一行包含一个正整数 n，为格子的边长。以下 n 行每行 n 个整数，非 0 即 1，表示初始状态。0 表示白色，1 表示黑色。下一行包含一个整数 m，表示操作的数目。以下 m 行每行两个整数 x, y (1 ≤ x, y ≤ n)，表示把坐标为(x,y)的格子翻转。

###output
输出文件包含 m 行，每行对应一个操作。该行包括两个整数 b, w，表示黑色区域和白色区域数目。

###sample input
5
0 1 0 0 0
0 1 1 1 0
1 0 0 0 1
0 0 1 0 0
1 0 0 0 0
2
3 2
2 3

###sample out
4 3
5 2

###hint
○1 ≤ n ≤ 200
○1 ≤ m ≤ 10,000

###toturial
用线段树维护并查集，每个节点维护两个并查集，最上面的一行和最下面的一行，合并的时候根据四个并查集来维护即可，注意并查集的合并操作要仔细即可。

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define rep(i,j,k) for(int i=(j);i<=(k);i++)
struct DSU{
    int f[810];
    inline void ini(int n){rep(i,1,n)f[i]=i;}
    inline int find(int x){return x==f[x]?x:f[x]=find(f[x]);}
    inline void join(int x,int y){f[find(x)]=find(y);}
};

int mp[222][222];

#define ml ((l+r)>>1)
#define mr (ml+1)
int ls[210*2],rs[210*2],tot,n;
struct treenode{
    DSU d;
    int sz[2];
}tr[210*2];

void build(treenode&res,int*a){
    res.d.ini(n+n);
    rep(i,2,n) if(a[i]==a[i-1]) res.d.join(i,i-1),res.d.join(n+i,n+i-1);
    rep(i,1,n) res.d.join(i+n,i);
    res.sz[0]=res.sz[1]=0;
    static int vis[220];
    rep(i,1,n) vis[i]=0;
    rep(i,1,n) if(!vis[res.d.find(i)]) res.sz[a[i]]++,vis[res.d.find(i)]=1;
}

void merge(treenode&a,treenode&b,int c1,int c2){
    a.sz[0]=a.sz[0]+b.sz[0];
    a.sz[1]=a.sz[1]+b.sz[1];
    rep(i,1,2*n) a.d.f[i+2*n]=b.d.f[i]+2*n;
    DSU&dsu=a.d;
    rep(i,1,n) if(mp[c1][i]==mp[c2][i]){
        if(dsu.find(i+n)!=dsu.find(i+2*n)){
            dsu.join(i+n,i+2*n);
            a.sz[mp[c1][i]]--;
        }
    }
    rep(i,1,n) if(dsu.find(i)>n&&dsu.find(i)<=3*n) dsu.f[dsu.find(i)]=i,dsu.f[i]=i;
    rep(i,3*n+1,4*n) if(dsu.find(i)>n&&dsu.find(i)<=3*n) dsu.f[dsu.find(i)]=i,dsu.f[i]=i;
    rep(i,3*n+1,4*n) dsu.f[i-2*n]=dsu.f[i]>n?dsu.f[i]-2*n:dsu.f[i];
}

void build(int&u,int l,int r){
    u=++tot;
    if(l==r){
        build(tr[u],mp[l]);
        return;
    }
    build(ls[u],l,ml);
    build(rs[u],mr,r);
    tr[u]=tr[ls[u]];
    merge(tr[u],tr[rs[u]],ml,mr);
}

void update(int&u,int l,int r,int q){
    if(l==r){
        build(tr[u],mp[l]);
        return;
    }
    if(q<=ml) update(ls[u],l,ml,q);
    else update(rs[u],mr,r,q);
    tr[u]=tr[ls[u]];
    merge(tr[u],tr[rs[u]],ml,mr);
}

int main(){
    scanf("%d",&n);
    rep(i,1,n)rep(j,1,n) scanf("%d",&mp[i][j]);
    int rt; build(rt,1,n);
    int m;scanf("%d",&m);
    while(m--){
        int x,y;scanf("%d%d",&x,&y);
        mp[x][y]^=1;
        update(rt,1,n,x);
        printf("%d %d\n",tr[1].sz[1],tr[1].sz[0]);
    }
}
```

















































[base64str]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAADfCAYAAABh25blAAADMUlEQVR4nO3dsW6jQBRA0Z0V///Ls3bhKgK80U0YknPaoXiyuX4ukBjz4Q+Q+Xv1APDTiApiooKYqCAmKoiJCmKigpioILYdHY4xvmsOuJ295yZsKogdbqqXVZ9kusMmXf2zM9//O7vvbCqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIiQpiYz7sHp682h5+s710bCqIbe9cdLDMLmWT/nwr3ntn951NBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQWx756KzV9zDV7njvWdTQeytTbW6OefVI3zw+oVdcbanu8x3RzYVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFse3qAQpjjKtH2LXybE+rz3dHNhXE3tpUc86vnuNTXr+yK853lw2w4mf3dOfv1qaCmKggJiqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIjfmwezjGd84Ct7KXjk0Fse3qAQoHy/Yyry2/4mxP5vu8s39wNhXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAWxMR92D09ebQ+/2V46NhXEtqPDgyUG7LCpICYqiIkKYqKCmKgg9g/WUFPJczlrDwAAAABJRU5ErkJggg==