---
date: 2019-08-06 14:20:31
updated: 2019-08-06 14:20:31
---

###name
three arrays


###descirption
There are three integer arrays a,b,c. The lengths of them are all N. You are given the full contents of a and b. And the elements in c is produced by following equation: c[i]=a[i] XOR b[i] where XOR is the bitwise exclusive or operation.

Now you can rearrange the order of elements in arrays a and b independently before generating the array c. We ask you to produce the lexicographically smallest possible array c after reordering a and b. Please output the resulting array c.

<!---more-->

###input
The first line contains an integer T indicating there are T tests.

Each test consists of three lines. The first line contains one positive integer N denoting the length of arrays a,b,c. The second line describes the array a. The third line describes the array b.

* T≤1000

* $1≤N≤10^5$

* integers in arrays a and b are in the range of [0,230).

* at most 6 tests with N>100

###output
For each test, output a line containing N integers, representing the lexicographically smallest resulting array c.

###sample input
1
3
3 2 1
4 5 6

###sample output
4 4 7

###toturial
&emsp;&emsp;对于每一个数来说，能够与他匹配最优的数个数可能很多，但是值肯定只有一个，我们以这种关系建图，把数组a的数放在左边，数组b的数放在右边，建立出来的图一定是二分图。
&emsp;&emsp;易证此二分图中可能存在环，若有环，可能有多个数，但必定只有两个值，且这两个值一定是最佳匹配，我们将所有的最佳匹配去掉以后，剩下的是dag图，我们对此图逆拓扑排序，得到的结果即为答案，用栈模拟，字典树加速即可

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

int read(){int x;scanf("%d",&x);return x;}
const int maxn=1e5+5;
int trans[maxn*61][2],s[maxn*61],tot;

inline int newnode(){
    tot++;
    trans[tot][0]=trans[tot][1]=s[tot]=0;
    return tot;
}

inline void insert(int rt,int x){
    int cur=rt; s[cur]++;
    for(int j=29;j>=0;j--){
        int nex=(1<<j&x)>>j;
        if(trans[cur][nex]==0) trans[cur][nex]=newnode();
        cur=trans[cur][nex]; s[cur]++;
    }
}

inline void erase(int rt,int x){
    int cur=rt; s[cur]--;
    for(int j=29;j>=0;j--){
        int nex=(1<<j&x)>>j;
        cur=trans[cur][nex]; s[cur]--;
    }
}

inline int find(int rt,int x){
    int cur=rt,res=0;
    for(int j=29;j>=0;j--){
        int nex=(1<<j&x)>>j;
        if(s[trans[cur][nex]]==0) nex^=1;
        cur=trans[cur][nex];
        res|=nex<<j;
    }
    return res;
}

int a[maxn],b[maxn];

int main(){
    int ti=read();
    while(ti--){
        int n=read();
        tot=0;
        int rta=newnode(),rtb=newnode();
        for(int i=0;i<n;i++) insert(rta,a[i]=read());
        for(int i=0;i<n;i++) insert(rtb,b[i]=read());
        vector<int> ans;
        stack<int> stk;
        while(ans.size()!=n){
           // getchar();
            if(stk.empty()) stk.push(find(rta,214340));
            int top=stk.top(); stk.pop();
            if((stk.size()&1)==0){// in a
                int priority=find(rtb,top);
                //cout<<top<<" "<<priority<<endl;
                if(!stk.empty()&&stk.top()==priority){
                    ans.push_back(priority^top);
                  //  cout<<ans.back()<<endl;
                    stk.pop();
                    erase(rta,top);
                    erase(rtb,priority);
                }
                else{
                    stk.push(top);
                    stk.push(priority);
                }
            }
            else{// in b
                int priority=find(rta,top);
               // cout<<top<<" "<<priority<<endl;
                if(!stk.empty()&&stk.top()==priority){
                    ans.push_back(priority^top);
                   // cout<<ans.back()<<endl;

                    stk.pop();
                    erase(rtb,top);
                    erase(rta,priority);
                }
                else{
                    stk.push(top);
                    stk.push(priority);
                }
            }
        }
        sort(ans.begin(),ans.end());
        for(int i=0;i+1<ans.size();i++){
            printf("%d ",ans[i]);
        }
        printf("%d\n",ans.back());
    }
}
```