---
date: 2019-06-22 00:00:00
updated: 2019-06-22 00:00:00
---

# 题意
给你一个集合s
让你把这个集合划分为两个集合
在集合A中若x存在则a-x也存在
在集合B中若x存在则b-x也存在
# 数据范围
    |s|<1e5
    a<1e9
    b<1e9
# 注意
    集合中不包含相同的数

# 题解
使用并查集维护，
容易证明若x和a-x存在，则他们必定在同一个集合中
x和b-x同理

# 代码
```cpp
#include<bits/stdc++.h>
using namespace std;

map<int,int>fa;
int find(int x){
    if(fa.find(x)==fa.end()) fa[x]=x;
    return x==fa[x]?x:fa[x]=find(fa[x]);
}
void join(int x,int y){
    int f1=find(x);
    int f2=find(y);
    if(f1>f2) swap(f1,f2); // f1
    fa[f1]=f2;
}

map<int,int>mp;
const int maxn=1e5+5;
int p[maxn];

int main(){
    int n,a,b;
    scanf("%d%d%d",&n,&a,&b);
    for(int i=1;i<=n;i++) {
        scanf("%d",p+i);
        mp[p[i]]++;
    }
    const int A=1e9+123;
    const int B=1e9+124;
    for(int i=1;i<=n;i++) {
        if(mp.find(a-p[i])!=mp.end()) join(p[i],a-p[i]);
        else join(p[i],B);
        if(mp.find(b-p[i])!=mp.end()) join(p[i],b-p[i]);
        else join(p[i],A);
    }
    if(find(A)==find(B)){
        printf("NO\n");
    }
    else{
        printf("YES\n");
        for(int i=1;i<=n;i++) {
            if(find(p[i])<=1e9) join(p[i],A);
            if(find(p[i])==A) printf("0 ");
            else printf("1 ");
        }
    }
}
```