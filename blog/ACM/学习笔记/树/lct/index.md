---
date: 2019-08-15 20:13:01
updated: 2019-08-15 20:13:01
---

```cpp
int top,c[N][2],f[N],tim[N],sta[N],rev[N],val[N];
void ini(){
    for(int i=0;i<=n;i++)c[i][0]=c[i][1]=f[i]=rev[i]=0,tim[i]=i,val[i]=2e9;
    for(int i=n+1;i<=n+m;i++)c[i][0]=c[i][1]=f[i]=rev[i]=0,tim[i]=i,val[i]=R[i-n];
}
inline void pushup(int x){
    tim[x]=x;
    if(val[tim[c[x][0]]]<val[tim[x]]) tim[x]=tim[c[x][0]];
    if(val[tim[c[x][1]]]<val[tim[x]]) tim[x]=tim[c[x][1]];
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
    top=1;sta[top]=x;//init stack
    for(int i=x;!isroot(i);i=f[i])sta[++top]=f[i];//update stack
    for(int i=top;i;i--)pushdown(sta[i]);//pushroad
    while(!isroot(x)){
        int y=f[x],z=f[y];
        if(!isroot(y)) (c[y][0]==x)^(c[z][0]==y)?rotate(y):rotate(x);
        rotate(x);
    }pushup(x);
}
inline void access(int x){for(int t=0;x;t=x,x=f[x])splay(x),c[x][1]=t,pushup(x);}
inline int treeroot(int x){access(x);splay(x);while(c[x][0])x=c[x][0];return x;}
inline void makeroot(int x){access(x);splay(x);rev[x]^=1;}// 让x变成根
inline void cut(int x,int y){makeroot(x);access(y);splay(y);f[x]=c[y][0]=0;pushup(y);}
inline void link(int x,int y){makeroot(x);f[x]=y;}
```