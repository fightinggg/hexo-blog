#define rep(i,j,k) for(int i=j;i<=int(k);++i)
#define per(i,j,k) for(int i=j;i>=int(k);--i)
#define repe(i,u) for(int i=head[u];~i;i=nex[i])
int lg[1<<20];// rep(i,2,1<<18) lg[i]=lg[i>>1]+1;
struct tree{
    static const int V=5e5+5,E=2*V;
    int head[V],n;
    int to[E],nex[E],ew[E],m,tot;
    void addedge1(int u,int v) {to[++tot]=v,nex[tot]=head[u],head[u]=tot;}
    void addedge(int u,int v){addedge1(u,v),addedge1(v,u);}
    void ini(int n){tot=-1; this->n=n; rep(i,1,n)head[i]=-1;}
    int f[V][21],dep[V];
    void dfs(int u,int father){
        dep[u]=dep[father]+1, f[u][0]=father; // assert(dep[0]=0);
        rep(i,1,20) f[u][i]=f[f[u][i-1]][i-1]; // assert(f[0][i]=0);
        repe(i,u)if(to[i]!=father)dfs(to[i],u);
    }
    int getlca(int x,int y){
        if(dep[x]<dep[y]) swap(x,y);
        while(dep[x]>dep[y])x=f[x][lg[dep[x]-dep[y]]];// 取下整
        if(x==y)return x;
        per(i,lg[dep[x]-1],0) if(f[x][i]!=f[y][i]) x=f[x][i],y=f[y][i];
        return f[x][0];//x和y一起向上跳f[x][0]=f[y][0]
    }
}g;