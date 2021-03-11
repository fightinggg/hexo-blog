#include<bits/stdc++.h>
using namespace std;

typedef pair<int,int> pii;
#define rep(i,j,k) for(int i=j;i<=int(k);++i)
#define per(i,j,k) for(int i=j;i>=int(k);--i)
#define repe(i,u) for(int i=head[u];~i;i=nex[i])
int lg[1<<18];// rep(i,2,1<<18) lg[i]=lg[i>>1]+1;
struct tree{
    static const int V=1e5+5,E=2*V;
    int head[V],n;
    int to[E],nex[E],ew[E],m,tot;
    void addedge1(int u,int v,int w) {to[++tot]=v,nex[tot]=head[u],ew[tot]=w,head[u]=tot;}
    void addedge(int u,int v,int w){addedge1(u,v,w),addedge1(v,u,w);}
    void ini(int _n){tot=-1; n=_n; rep(i,1,n)head[i]=-1;}
    void upd(int*x,int*y){// max
        if(x[1]==y[1]) x[0]=max(x[0],y[0]);
        else if(x[1]>y[1]) x[0]=y[1];
        else x[0]=x[1],x[1]=y[1];
    }
    void upd(int*x,int*y,int*z){upd(x,y),upd(x,z);}
    int f[V][21],pw[V][21][2],dep[V];
    void dfs(int u,int father,int w=0){
        dep[u]=dep[father]+1;
        f[u][0]=father;
        pw[u][0][0]=0;
        pw[u][0][1]=w;
        rep(i,1,20) {
            f[u][i]=f[f[u][i-1]][i-1]; // assert(f[0][i]=0);
            upd(pw[u][i],pw[u][i-1],pw[f[u][i-1]][i-1]);
        }
        repe(i,u)if(to[i]!=father)dfs(to[i],u,ew[i]);
    }
    pii getbigedge(int x,int y){
        int res[2]={0,0};
        if(dep[x]<dep[y]) swap(x,y);
        while(dep[x]>dep[y]) {
            upd(res,pw[x][lg[dep[x]-dep[y]]]);
            x=f[x][lg[dep[x]-dep[y]]];// 取下整
        }if(x==y)return pii(res[0],res[1]);
        per(i,lg[dep[x]-1],0) if(f[x][i]!=f[y][i]) {
                upd(res,pw[x][i],pw[y][i]);
                x=f[x][i],y=f[y][i];
            }
        upd(res,pw[x][0],pw[y][0]);
        return pii(res[0],res[1]);
    }
};

struct secondtmst{
    static const int N=1e5+5;
    int f[N];
    int find(int x){return x==f[x]?x:f[x]=find(f[x]);}
    struct edge{int u,v,w;};

    long long kruskal(int n, vector<edge> &g, tree &t) {
        vector<edge> nmst;
        long long res=0;
        int add=1e9;//设置边权最大值
        rep(i,1,n) f[i]=i;
        sort(g.begin(),g.end(),[](edge l,edge r){return l.w<r.w;});
        t.ini(n);
        for(edge e:g) {
            if(find(e.u)!=find(e.v)) {
                f[find(e.u)]=find(e.v);
                t.addedge(e.u,e.v,e.w);
                res+=e.w;
            }else nmst.push_back(e);
        }
        t.dfs(1,0);

        for(edge e:nmst) {
            pii tmp=t.getbigedge(e.u,e.v);
            if(tmp.second!=e.w) add=min(add,e.w-tmp.second);
            if(tmp.first!=e.w) add=min(add,e.w-tmp.first);
        }
        return res+add;
    }
};

tree t;
secondtmst mst;

int read(){int x;scanf("%d",&x);return x;}
int main(){
    rep(i,2,1<<18) lg[i]=lg[i>>1]+1;
    int n=read(),m=read();// n<1e5个点 m<3e5边 0<=w<=1e9
    vector<secondtmst::edge>g(m);
    rep(i,0,m-1) g[i].u=read(),g[i].v=read(),g[i].w=read();
    cout<<mst.kruskal(n,g,t)<<endl;
}