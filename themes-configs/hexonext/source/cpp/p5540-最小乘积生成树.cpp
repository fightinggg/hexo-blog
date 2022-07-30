#include<bits/stdc++.h>
using namespace std;

const int N=5000+5;
int f[N];
int find(int x){return x==f[x]?x:f[x]=find(f[x]);}

struct edge{int u,v,w,x,y;};
edge g[200000+10];
//最小乘积生成树 O(mlgmsqrt(lgn!))=O(mlgmlgn) //https://www.luogu.org/problem/P5540
void kruskal(int n,int m,int&x,int&y){
    x=y=0;
    for(int i=1;i<=n;++i) f[i]=i;
    sort(g+1,g+1+m,[](edge l,edge r){return l.w<r.w;});
    for(int i=1;i<=m;++i) {
        if(find(g[i].u)!=find(g[i].v)){
            f[find(g[i].u)]=find(g[i].v);
            x+=g[i].x,y+=g[i].y;
        }
    }
}

int ansx,ansy;
void update(int x,int y){
    if(x*y<ansx*ansy) ansx=x,ansy=y;
    else if(x*y==ansx*ansy&&x<ansx) ansx=x,ansy=y;
}
void solve(int n,int m,int x1,int y1,int x2,int y2){
    int x3,y3;
    for(int i=1;i<=m;++i) g[i].w=g[i].y*(x2-x1)+g[i].x*(y1-y2);
    kruskal(n,m,x3,y3);
    update(x3,y3);
    if((x2-x1)*(y3-y1)>=(x3-x1)*(y2-y1)) return;
    solve(n,m,x1,y1,x3,y3);
    solve(n,m,x3,y3,x2,y2);
}

int read(){int x;scanf("%d",&x);return x;}
int main(){
    //n为点数,m为边数，后面m行u->v边权(x,y) 保证联通且存在最小生成树
    int n=read(),m=read();
    for(int i=1;i<=m;++i) g[i].u=read()+1,g[i].v=read()+1,g[i].x=read(),g[i].y=read();
    int x1,y1,x2,y2;
    for(int i=1;i<=m;++i) g[i].w=g[i].x;
    kruskal(n,m,x1,y1);
    for(int i=1;i<=m;++i) g[i].w=g[i].y;
    kruskal(n,m,x2,y2);
    ansx=x1,ansy=y1;
    update(x2,y2);
    solve(n,m,x1,y1,x2,y2);
    cout<<ansx<<" "<<ansy<<endl;
}