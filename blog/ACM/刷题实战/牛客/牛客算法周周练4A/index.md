---
date: 2020-04-29 22:33:48
updated: 2020-04-29 22:33:48
---


时间限制：C/C++ 1秒，其他语言2秒
空间限制：C/C++ 262144K，其他语言524288K
64bit IO Format: %lld
# 题目描述 
现有一个传动系统，包含了N个组合齿轮和M个链条。每一个链条连接了两个组合齿轮u和v，并提供了一个传动比x  : y。
即如果只考虑这两个组合齿轮，编号为u的齿轮转动x圈，编号为v的齿轮会转动y圈。传动比为正表示若编号为u的齿轮顺时针转动，则编号为v的齿轮也顺时针转动。传动比为负表示若编号为u的齿轮顺时针转动，则编号为v 的齿轮会逆时针转动。若不同链条的传动比不相容，则有些齿轮无法转动。我们希望知道，系统中的这Ｎ个组合齿轮能否同时转动。
<!-- more -->
# 输入描述:
有多组数据，第一行给定整数Ｔ，表示总的数据组数，之后依次给出Ｔ组数据。
每一组数据的第一行给定整数Ｎ和Ｍ，表示齿轮总数和链条总数。
之后有Ｍ行，依次描述了每一个链条，其中每一行给定四个整数u，v，x和y，表示只考虑这一组联动关系的情况下，编号为u的齿轮转动x圈，编号为v的齿轮会转动y圈。
请注意，x为正整数，而y为非零整数，但是y有可能为负数。
T ≤ 32，N ≤ 1000，M ≤ 10000且x与y的绝对值均不超过100
# 输出描述:
输出T行，对应每一组数据。首先应该输出标识这是第几组数据，参见样例输出。之后输出判定结果，如果N个组合齿轮可以同时正常运行，则输出Yes，否则输出No。
# 示例1
输入
```input
2
3 3
1 2 3 5
2 3 5 -7
1 3 3 -7
3 3
1 2 3 5
2 3 5 -7
1 3 3 7
```
输出
```output
Case #1: Yes
Case #2: No
```

# 做法
之前想复杂了，一直在想如何转化为图论，想连边的方式，最后想到了用转速比作为边权，那么我们的目的就是找一个环，环的所有边权的积不等于1，然后就陷入了死胡同了，取对数变成了0权回路的存在性判定，泛化为k权回路的判定，这里就走歪了
其实很简单，如果存在积不为1的回路，那么我们在dfs的时候讲边权转化为点权，就会出现一个点被赋不同的值的情况，**这个做法也可以推广到k权回路上**，

# 代码
```cpp

#include<bits/stdc++.h>
using namespace std;

bool eq(double x,double y){ return fabs(x-y) < 1e-6;}

bool dfs(vector<vector<int>>& edge,
         vector<vector<double>>& rate,
         vector<double>& speed,
         int current,
         double current_speed){
    
    if(speed[current]==0) speed[current] = current_speed;
    else if(eq(speed[current] , current_speed)) return true;
    else return false;
    
    for(int i=0;i<edge[current].size();i++){
        if(!dfs(edge,
                rate,
                speed,
                edge[current][i],
                current_speed*rate[current][i])
          ) return false;
    }
    return true;
}

int main(){
    int T;
    cin>>T;
    for(int times=1;times<=T;times++){
        int n,m;
        cin>>n>>m;
        vector<vector<int>> edge(n);
        vector<vector<double>> rate(n);
        vector<double> speed(n);
        for(int i=1;i<=m;i++){
            int u,v,x,y;
            cin>>u>>v>>x>>y;
            u--,v--;
            edge[u].push_back(v);
            edge[v].push_back(u);
            rate[u].push_back(1.0*y/x);
            rate[v].push_back(1.0*x/y);
        }
        bool rotate = true;
        for(int i=0;i<n;i++) {
            if(speed[i]!=0) continue;
            if(!dfs(edge,rate,speed,i,1)) rotate=false;
        }
        if(rotate) cout<<"Case #"<<times<<": Yes"<<endl;
        else cout<<"Case #"<<times<<": No"<<endl;
    }
}




```