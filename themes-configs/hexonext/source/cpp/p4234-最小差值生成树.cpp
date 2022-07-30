#include<bits/stdc++.h>
using namespace std;

//仅仅维护图联通的lct tle可能因为自环
struct graphlct{
    static const int V=5e4+5,E=2e5+5;
    static const int N=V+E;//拆点
    int X[N],Y[N],W[N],n,m;//预先传入的参数
    int c[N][2],f[N],t[N],s[N],rev[N],val[N];// t->times s->stack
    set<int>e;
    void ini(){// X是边起点从1开始，Y是终点从1开始，R是删除的顺序，越小越先删除 edgenums维护边的条数
        e.clear();
        for(int i=0;i<=n;i++)c[i][0]=c[i][1]=f[i]=rev[i]=0,t[i]=i,val[i]=2e9;
        for(int i=n+1;i<=n+m;i++)c[i][0]=c[i][1]=f[i]=rev[i]=0,t[i]=i,val[i]=W[i-n];
    }
    inline void pushup(int x){
        t[x]=x;
        if(val[t[c[x][0]]]<val[t[x]]) t[x]=t[c[x][0]];
        if(val[t[c[x][1]]]<val[t[x]]) t[x]=t[c[x][1]];
    }
    inline void pushdown(int x){
        int l=c[x][0],r=c[x][1];
        if(rev[x]){
            rev[l]^=1;rev[r]^=1;rev[x]^=1;
            swap(c[x][0],c[x][1]);
        }
    }
    inline bool isroot(int x){return c[f[x]][0]!=x&&c[f[x]][1]!=x;}
    inline void rotate(int x){
        int y=f[x],z=f[y],xis=c[y][1]==x,yis=c[z][1]==y;//
        if(!isroot(y)) c[z][yis]=x;//son
        f[x]=z;f[y]=x;f[c[x][xis^1]]=y;//father
        c[y][xis]=c[x][xis^1];c[x][xis^1]=y;//son
        pushup(y);
    }
    inline void splay(int x){
        s[s[0]=1]=x;//init stack
        for(int i=x;!isroot(i);i=f[i])s[++s[0]]=f[i];//update stack
        for(int i=s[0];i;i--)pushdown(s[i]);//pushroad
        while(!isroot(x)){
            int y=f[x],z=f[y];
            if(!isroot(y)) (c[y][0]==x)^(c[z][0]==y)?rotate(y):rotate(x);
            rotate(x);
        }pushup(x);
    }
    inline void access(int x){for(int i=0; x; i=x, x=f[x])splay(x), c[x][1]=i,pushup(x);}
    inline int treeroot(int x){access(x);splay(x);while(c[x][0])x=c[x][0];return x;}
    inline void makeroot(int x){access(x);splay(x);rev[x]^=1;}// 让x变成根
    inline void cut(int x,int y){makeroot(x);access(y);splay(y);f[x]=c[y][0]=0;pushup(y);}
    inline void link(int x,int y){makeroot(x);f[x]=y;}
    inline void cut2(int i){
        makeroot(X[i]);
        if(treeroot(Y[i])!=X[i]) return;
        cut(X[i],n+i),cut(Y[i],n+i),e.erase(i);
    }
    inline void link2(int i){
        makeroot(X[i]);
        if(treeroot(Y[i])==X[i]) {// access(y) splay(y)
            int p=t[Y[i]]-n;
            if(W[p]>=W[i]) return;// 这个非常重要
            cut(X[p],n+p),cut(Y[p],n+p),e.erase(p);
        }
        link(X[i],n+i),link(Y[i],n+i),e.insert(i);
    }
}g;

const int E=2e5+555;
struct edge{int u,v,w;}e[E];

int read(){int x;scanf("%d",&x);return x;}
int main(){
    g.n=read(),g.m=read();
    for(int i=1;i<=g.m;++i) e[i].u=read(),e[i].v=read(),e[i].w=read();
    sort(e+1,e+1+g.m,[](edge&a,edge&b){return a.w<b.w;});
    for(int i=1;i<=g.m;++i) g.X[i]=e[i].u,g.Y[i]=e[i].v,g.W[i]=e[i].w;
    g.ini();
    int ans=1e9;
    for(int i=1;i<=g.m;++i){
        if(e[i].u==e[i].v) continue;
        g.link2(i);
        if(g.e.size()==g.n-1) ans=min(ans,g.W[*g.e.rbegin()]-g.W[*g.e.begin()]);
    }
    cout<<ans<<endl;
}


