---
date: 2019-08-13 14:53:49
updated: 2019-08-13 14:53:49
---

<!---more-->

```cpp
#define ml ((l+r)>>1)
#define mr (ml+1)
const int maxn=3e5+5;
int a[maxn];
int ls[maxn*2],rs[maxn*2],tot;// 树结构
int cov[maxn*2];// 懒惰标记结构
ll sum[maxn*2];int mi[maxn*2],mx[maxn*2];// 区间结构

inline void modify(int&u,int l,int r,int cov_){// 这个函数要注意重写
    if(cov_!=-1){// 这行要注意重写
        cov[u]=cov_;// 这行要注意重写
        sum[u]=1ll*cov_*(r-l+1);// 这行要注意重写
        mi[u]=mx[u]=cov_;// 这行要注意重写
    }
}

inline void push_down(int u,int l,int r){
    modify(ls[u],l,ml,cov[u]);// 这行要注意重写
    modify(rs[u],mr,r,cov[u]);// 这行要注意重写
    cov[u]=-1;// 这行要注意重写
}

inline void pushup(int u,int l,int r){
    mi[u]=min(mi[ls[u]],mi[rs[u]]);// 这行要注意重写
    mx[u]=max(mx[ls[u]],mx[rs[u]]);// 这行要注意重写
    sum[u]=sum[ls[u]]+sum[rs[u]];// 这行要注意重写
}

void updatecov(int u,int l,int r,int ql,int qr,int d){//
    if(ql<=l&&r<=qr){// 不要改写为 if(mi[u]==mx[u]) 即使想写也要这样 if(ql<=l&&r<=qr&&mi[u]==mx[u])
        modify(u,l,r,d);// 这行要注意重写
        return;
    }
    push_down(u,l,r);
    if(ml>=ql) updatecov(ls[u],l,ml,ql,qr,d);
    if(mr<=qr) updatecov(rs[u],mr,r,ql,qr,d);
    pushup(u,l,r);
}

void updatephi(int u,int l,int r,int ql,int qr){
    if(ql<=l&&r<=qr&&mi[u]==mx[u]){// 这行要注意重写
        modify(u,l,r,math::phi[mi[u]]);// 这行要注意重写
        return;
    }
    push_down(u,l,r);
    if(ml>=ql) updatephi(ls[u],l,ml,ql,qr);
    if(mr<=qr) updatephi(rs[u],mr,r,ql,qr);
    pushup(u,l,r);
}

ll query(int u,int l,int r,int ql,int qr){
    if(ql<=l&&r<=qr) return sum[u];// 这行要注意重写
    push_down(u,l,r);
    ll ret=0;// 这行要注意重写
    if(ml>=ql) ret+=query(ls[u],l,ml,ql,qr);// 这行要注意重写
    if(mr<=qr) ret+=query(rs[u],mr,r,ql,qr);// 这行要注意重写
    return ret;
}

void build(int&u,int l,int r){
    u=++tot;
    cov[u]=-1;
    if(l==r) sum[u]=mi[u]=mx[u]=a[l];
    else{
        build(ls[u],l,ml);
        build(rs[u],mr,r);
        pushup(u,l,r);
    }
}
```