#include <bits/stdc++.h>
using namespace std;
/*
 * cf896c
 * 区间加，区间赋值，求区间k次方和，求区间第k小,数据随机，复杂度(n+m)lgn
 *
 * ODT -> old driver tree -> 珂朵莉树
 *
 * */
typedef long long ll;
ll qpow(ll a,ll b,ll p){ll r=1;for(;b;b>>=1,a=a*a%p)if(b&1)r=r*a%p;return r;}
typedef map<int,ll>::iterator IT;
IT split(map<int,ll>&t,int x){//将x分出来，使得这是某个区间的左端点
    IT it=t.lower_bound(x);
    if(it->first==x) return it;
    return t.emplace(x,(--it)->second).first;
}
void assign(map<int,ll>&t,int l,int r,int w){
    t.erase(split(t,l),split(t,r+1)), t.emplace(l,w);
}
void add(map<int,ll>&t,int l,int r,int w){
    for(IT i=split(t,l),j=split(t,r+1);i!=j;++i) i->second+=w;
}
int sum(map<int,ll>&t,int l,int r,int y,int p){
    int res=0;
    for(IT j=split(t,l),k=split(t,r+1),i=j++;i!=k;i=j++) {// i=j++写在最后执行
        res=(res+qpow(i->second%p,y,p)*(j->first-i->first))%p;
    }
    return res;
}
ll kth(map<int,ll>&t,int l,int r,int k){// 1<=k<=r-l+1
    vector<pair<ll,int>>v;
    for(IT j=split(t,l),k=split(t,r+1),i=j++;i!=k;i=j++) {
        v.emplace_back(i->second,j->first-i->first);
    }
    sort(v.begin(),v.end());
    for(auto x:v) {
        if(k<=x.second) return x.first;
        else k-=x.second;
    }
    assert(false);// k>r-l+1
}

ll seed;
ll rnd(){
    ll ret = seed;
    seed = (seed * 7 + 13) % 1000000007;
    return ret;
}

int main(){
    map<int,ll>tr;
    int n,m,vmax;
    cin>>n>>m>>seed>>vmax;
    for(int i=1;i<=n;i++) tr[i]=rnd()%vmax+1;
    tr[n+1]=-1;// 终点哨兵
    int op,l,r,x,y;
    for(int i=1;i<=m;i++) {
        op=rnd()%4+1,l=rnd()%n+1,r=rnd()%n+1;
        if(l>r)swap(l,r);
        if(op==3) x=rnd()%(r-l+1)+1;
        else x=rnd()%vmax+1;
        if(op==4) y=rnd()%vmax+1;
        switch(op){
            case 1:add(tr,l,r,x);break;
            case 2:assign(tr,l,r,x);break;
            case 3:printf("%lld\n",kth(tr,l,r,x));break;
            case 4:printf("%d\n",sum(tr,l,r,x,y));break;
        }
    }
}


