---
date: 2019-05-24 00:00:00
updated: 2019-05-24 00:00:00
---

很早就想写这个了，觉得好厉害，结果分析停留在理论上，其实时间复杂度贼高

```c++
#include<bits/stdc++.h>
using namespace std;

struct big0{//最大999999，
    int o,h,l;// 溢出6位 高3位 低3位
    big0(){}
    big0(int rhs):o(0),h(0),l(rhs){}
    big0(int h,int l):o(0),h(h),l(l){}

    operator int(){return int(l);}
    big0 operator!=(const big0&rhs){return h!=rhs.h||l!=rhs.l;}
    big0 operator+(const big0&rhs){
        big0 ret=0;
        ret.l=l+rhs.l;
        ret.h=h+rhs.h+ret.l/1000;//进位
        ret.o=o+rhs.o+ret.h/1000;//暂时记录高位溢出情况
        ret.l%=1000;
        ret.h%=1000;
        return ret;
    }
    void show(int flag){
        printf("%03d%03d",h,l);
        // printf(" %3d %3d",h,l);
    }
    void show(){
        if(h!=0){
            printf("%d%03d",h,l);
        }
        else printf("%d",l);
    }

};

template<class T>
struct big{
    T o,h,l;// 溢出6位 高3位 低3位
    big(){}
    big(int rhs):o(0),h(0),l(rhs){}
    big(T h,T l):o(0),h(h),l(l){}

    operator int(){return int(l);}
    big operator!=(big rhs){return h!=rhs.h||l!=rhs.l;}
    big operator+(const big rhs){
        big ret=0;
        ret.l=l+rhs.l;
        ret.h=h+rhs.h+T(0,ret.l.o);
        ret.o=o+rhs.o+T(0,ret.h.o);
        ret.l.o=0;
        ret.h.o=0;
        return ret;
    }
    void show(int flag){
        h.show(1);
        l.show(1);
    }
    void show(){
        if(h!=T(0)){
            h.show();
            l.show(1);
        }
        else l.show();
    }
};

//big0  w<1e3   3*2^0
typedef big<big<big<big<big0>>>> big4;// w<1e(3*2^4)
typedef big<big<big<big<big4>>>> big8;// w<1e(3*2^8)
big8 a,b,c;

int main(){
    a=1;
    b=1;
    for(int i=3;i<=700;i++){
        c=a+b;
        a=b;
        b=c;
        printf("%3d: ",i);
        c.show();
        cout<<endl;
    }
}
```

输出了斐波拉契700位，数据还行，就是太慢了。



![](image-2019-05-24-00.00.00.000.png)