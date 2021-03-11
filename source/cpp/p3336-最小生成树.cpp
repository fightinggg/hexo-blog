#include<bits/stdc++.h>
using namespace std;

const int N=5000+5;
int f[N];
int find(int x){return x==f[x]?x:f[x]=find(f[x]);}

struct edge{int u,v,w;};
edge g[200000+10];

int read(){int x;scanf("%d",&x);return x;}
int main(){
    //最小生成树 复杂度O(mlgm)
    //n为点数,m为边数，后面m行u->v边权w 保证联通且存在最小生成树
    int n=read(),m=read();
    for(int i=1;i<=n;i++) f[i]=i;
    for(int i=1;i<=m;i++) g[i].u=read(),g[i].v=read(),g[i].w=read();
    sort(g+1,g+1+m,[](edge l,edge r){return l.w<r.w;});
    int ans=0;
    for(int i=1;i<=m;i++) {
        if(find(g[i].u)!=find(g[i].v)){
            f[find(g[i].u)]=find(g[i].v);
            ans+=g[i].w;
        }
    }
    cout<<ans<<endl;
}