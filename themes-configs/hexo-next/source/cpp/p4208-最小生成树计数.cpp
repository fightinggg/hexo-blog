#include <bits/stdc++.h>
using namespace std;

/*
 *
 * 矩阵树定理
 * 基尔霍夫矩阵定义为度数矩阵减去邻接矩阵
 * 生成树的个数等于基尔霍夫矩阵的任意一个代数余子式的行列式的值的绝对值
 * 完全图的生成树的个数是pow(n,n-2)
 *
 *
 * p4208
 * 最小生成树计数
 *
 *
 * */
typedef long long ll;
#define rep(i,j,k) for(int i=(j);i<=int(k);++i)
#define SZ(x) int(x.size())

const int N=1e5;
int f[N];
inline int find(int x){return x==f[x]?x:f[x]=find(f[x]);}

vector<int>disc;
int getid(int x){return lower_bound(disc.begin(),disc.end(),x)-disc.begin()+1;}
ll qpow(ll a,ll b,ll p){ll s=1;for(;b;b>>=1,a=a*a%p)if(b&1)s=s*a%p;return s;}
struct mst{
    struct sedge{int u,v,w;};
    static const int V=105;
    int hoff[V][V];// memset(hoff,0,sizeof(hoff));
    void addedge(int u,int v){hoff[u][u]++,hoff[v][v]++,hoff[u][v]--,hoff[v][u]--;}
    static int det(int m[V][V],int n,int p){// 可以计算任意行列式的值 a[1..n][1..n]
        int r=1;
        rep(i,1,n) rep(j,1,n) m[i][j]=(m[i][j]%p+p)%p;
        rep(i,1,n) rep(j,i+1,n) {//枚举行i，去消掉行j 目的是将他变成上三角
                int &u=m[i][i],&v=m[j][i],a=1,b=0,c=0,d=1;
                while(v){// x=m[i][i],y=m[j][i],则u=ax+by&&v=cx+dy)
                    int k=p-u/v;
                    a=(a+1ll*k*c)%p,b=(b+1ll*k*d)%p,u=(u+1ll*k*v)%p;//此行消元
                    swap(u,v),swap(a,c),swap(b,d),r=-r;//行互换 行列式值变为相反数
                }
                rep(k,i+1,n) {//为了处理非质数的消元方案，这里采取了这种不明智的方案，导致常数增大了一倍
                    int x=m[i][k],y=m[j][k];
                    m[i][k]=(1ll*a*x+1ll*b*y)%p;
                    m[j][k]=(1ll*c*x+1ll*d*y)%p;
                }
            }
        rep(i,1,n) r=1ll*r*m[i][i]%p;
        return (r+p)%p;
    }
    int countmst(sedge*edge,int n,int m,int p){// 1..n
        sort(edge+1,edge+1+m,[](sedge&a,sedge&b){return a.w<b.w;});
        rep(i,1,n) f[i]=i;
        vector<int>used;
        rep(i,1,m) {
            if(find(edge[i].u)!=find(edge[i].v)){
                f[find(edge[i].u)]=find(edge[i].v);
                used.push_back(i);
            }
        }
        if(SZ(used)!=n-1) return 0;//无树
        int ans=1;
        for(int l=1,r=0;l<=m;l=r+1){
            while(r+1<=m&&edge[r+1].w==edge[l].w) ++r;
            rep(i,1,n) f[i]=i;// O(n*n)
            for(int i:used) if(i<l||i>r) f[find(edge[i].u)]=find(edge[i].v);//O(n*n)
            disc.clear();
            rep(i,l,r) if(find(edge[i].u)!=find(edge[i].v)) {//准备离散化
                    disc.push_back(find(edge[i].u));
                    disc.push_back(find(edge[i].v));
                }
            sort(disc.begin(),disc.end());
            disc.erase(unique(disc.begin(),disc.end()),disc.end());
            rep(i,1,SZ(disc))rep(j,1,SZ(disc))hoff[i][j]=0;
            rep(i,l,r) if(find(edge[i].u)!=find(edge[i].v)) { //利用矩阵树定理合并
                addedge(getid(find(edge[i].u)),getid(find(edge[i].v)));
            }
            ans=1ll*ans*det(hoff,SZ(disc)-1,p)%p;
        }
        return ans;
    }
}g;

int read(){int a;scanf("%d",&a);return a;}
int main(){
    int n=read(),m=read();
    vector<mst::sedge>edge;
    rep(i,1,m) {
        int u=read(),v=read(),w=read();
        edge.push_back(mst::sedge{u,v,w});
    }
    cout<<g.countmst(edge.data()-1,n,m,31011)<<endl;
}



