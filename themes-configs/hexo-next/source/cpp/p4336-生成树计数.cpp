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
 * p4336
 * 容斥+矩阵树定理
 *
 *
 * */

const int V=20,p=1e9+7;
typedef long long ll;
ll qpow(ll a,ll b){ll s=1;for(;b;b>>=1,a=a*a%p)if(b&1)s=s*a%p;return s;}
int hoff[V][V];// memset(hoff,0,sizeof(hoff));
void addedge(int u,int v){hoff[u][u]++,hoff[v][v]++,hoff[u][v]--,hoff[v][u]--;}
#define rep(i,j,k) for(int i=(j);i<=(k);++i)
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
        rep(k,i+1,n) {//消元
            int x=m[i][k],y=m[j][k];
            m[i][k]=(1ll*a*x+1ll*b*y)%p;
            m[j][k]=(1ll*c*x+1ll*d*y)%p;
        }
    }
    rep(i,1,n) r=1ll*r*m[i][i]%p;
    return (r+p)%p;
}

typedef pair<int,int>pii;
int read(){int a;scanf("%d",&a);return a;}
int main(){
    vector<pii> v[20];
    int n=read();
    rep(i,1,n-1) for(int x=read();x>=1;--x) v[i].emplace_back(read(),read());
    int up=(1<<(n-1))-1,ans=0;
    rep(i,0,up){
        rep(x,1,n)rep(y,1,n) hoff[x][y]=0;
        for(int j=i;j;j&=j-1) for(pii x:v[__builtin_ffs(j)])addedge(x.first,x.second);
        if(__builtin_parity(i^up)&1) ans=(ans+p-det(hoff,n-1,p))%p;
        else ans=(ans+det(hoff,n-1,p))%p;
    }
    cout<<ans<<endl;
}



