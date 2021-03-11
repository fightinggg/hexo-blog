#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

const ll sqr=2e5+10;// 2sqrt(n)
ll p[sqr],np[sqr]={1,1};
void prime_ini(){// 素数不可能筛到longlong范围
    for(int i=2; i<sqr; i++){
        if(!np[i])p[++p[0]]=i;//把质数收录
        for(int j=1; 1ll*i*p[j]<sqr; j++){
            np[i*p[j]]=1;//对每一个数字枚举他的最小因子
            if(i%p[j]==0)break;//在往后的话就不是最小因子了
        }
    }
}

const ll mod=1e9+7;
ll w[sqr],g[sqr][2],sp[sqr][2],id1[sqr],id2[sqr],mpn;
inline ll& mp(ll x){return x<sqr?id1[x]:id2[mpn/x];}
void min25(ll n){// 计算质数位置之和的时候 只用到了f(x,1) 和 oddsum(x)
    mpn=n;
    ll m=0;
    for(ll l=1,r;l<=n;l=r+1){// i从小到大  n/i从到小
        r=n/(n/l);
        mp(n/l)=++m;
        w[m]=n/l;
        g[m][0]=(w[m]-1)%mod;// f(x)=1, s(x)=x
        g[m][1]=(__int128(w[m])*(w[m]+1)/2-1)%mod; // f(x)=x, s(x)=x(x+1)/2  这里的int128非常关键，因为n是1e10级别的
    }//assert(w[m]==1);
    for(ll j=1;p[j]*p[j]<=n;j++){
        sp[j][0]=sp[j-1][0]+1;// f(x)=1
        sp[j][1]=(sp[j-1][1]+p[j])%mod;// f(x)=x
        for(ll i=1;w[i]>=p[j]*p[j];++i){// w[i]从大到小 当i等于m的时候 w[i]>=p[j]*p[j]恒不成立
            g[i][0]-=(g[mp(w[i]/p[j])][0]-sp[j-1][0])*1;// f(x)=1
            g[i][1]-=(g[mp(w[i]/p[j])][1]-sp[j-1][1])*p[j];// f(x)=x
            g[i][0]=(g[i][0]%mod+mod)%mod;
            g[i][1]=(g[i][1]%mod+mod)%mod;
        }
    }
}

// f(pow(a,b))=a^b f为积性函数
inline ll f(ll a,ll b){return a^b;} // 当且仅当a是一个素数
ll s(ll n,ll j){// sum of f(x) x<=n minfac(x)>=p[j]
    ll res=(g[mp(n)][1]-g[mp(n)][0])-(sp[j-1][1]-sp[j-1][0])+2*mod;// 减掉p[j]前面的质数 ： [p[j],n]上的质数的函数的和
    if(n>=2&&j==1) res+=2;
    for(ll k=j;p[k]*p[k]<=n;k++){// 枚举的最小质因子
        for(ll x=p[k],e=1;x*p[k]<=n;x*=p[k],e++){//枚举该因子出现次数
            res+=s(n/x,k+1)*f(p[k],e)%mod+f(p[k],e+1);// 每次增加2mod res不可能超过 long long
        }
    }
    return res%mod;
}

// f(x)=minfac(x)  f不为积性函数 但我们用积性函数来做他
typedef pair<ll,ll> pll;
pll s2(ll n,ll j){//
    ll res1=g[mp(n)][0]-sp[j-1][0]+2*mod;
    ll res2=g[mp(n)][1]-sp[j-1][1]+2*mod;// 减掉p[j]前面的质数 ： [p[j],n]上的质数的函数的和
    for(ll k=j;p[k]*p[k]<=n;k++){// 枚举的最小质因子
        for(ll x=p[k],e=1;x*p[k]<=n;x*=p[k],e++){//枚举该因子出现次数
            pll tmp=s2(n/x,k+1);
            res1+=tmp.first*1%mod+1;
            res2+=tmp.first*p[k]%mod+p[k];// 每次增加2mod res不可能超过 long long
        }
    }
    return pll(res1%mod,res2%mod);
}

int main() {
    prime_ini();
    ll n;
    while(cin>>n){
        min25(n);
        if(n==1) cout<<1<<endl;
        else cout<<(s(n,1)+1)%mod<<endl;
    }
}
