---
date: 2021-04-10 12:18:00
updated: 2021-04-11 12:18:00
---



# 备注

美团笔试每次都能教育人，太难了。

# 第一题

输入n，k，然后输入n个数字，数字为0代表Alis的房子可能出现在这里，数字非0代表其他的房子（数字的值就是价格），你要买一个房子，然后距离Alis的房子的期望距离最近。

<!-- more -->

题目出锅了，我暴力枚举，但是一直wa，wa了半个小时了实在是不敢相信，然后切到了第二题，写到一半难受，一想到我连第一题都过不了我就难受，我又来回马枪，杀回第一题，然后还是wa，最后狠心决定把第一题丢了算了，来来回回浪费了不少时间，还是一直没过，最后切完第三题的时候，笔试也快结束了，才发现出现了一个公告，说第一题如果有多个答案输出最小的那个，我把第27行改成<就过了

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n,k;
    cin>>n>>k;
    vector<int> mayHomePlace;
    vector<int> canChoose;
    vector<int> idx;
    for(int i=0;i<n;i++){
        int ai;
        cin>>ai;
        if(ai==0){
            mayHomePlace.push_back(i);
        }
        if(ai!=0 && ai<=k){
            canChoose.push_back(i);
        }
    }
    int ans=0,d=1e9;
    for(int i=0;i<canChoose.size();i++){
        int x = canChoose[i];
        int sum = 0;
        for(int y:mayHomePlace){
            sum+=abs(y-x);
        }
        if(sum<=d){
            ans=x;
            d=sum;
        }
    }
    cout<<ans+1<<endl;
}
```







# 第二题

给你一个01串，你能删除三个连续的字符，可以无限次操作，问如何操作后让0和1的个数差最大，输出最大的差值。

使用dp即可dp0[x]代表前x个字符0-1最大的差值， dp1[x]代表前x个字符1-0的最大差值。

(果然还是太久没刷题了，都一年多没写过题了，dp方程我推了很久)，最开始推出来是这样,然后一直wa27

```txt
dp0[i] = max(dp0[i-3],dp0[i-3]+cal(s[i],s[i-1],s[i-2]));
```

最后发现正确的转移方程是这个

```txt
dp0[i] = max(dp0[i-3],
                     dp0[i-3]+cal(s[i],s[i-1],s[i-2]),
                     dp0[i-2]+cal(s[i],s[i-1]),
                     dp0[i-1]+cal(s[i])
                    );
```



```cpp

#include<bits/stdc++.h>
using namespace std;

int cal(char x){
    return x=='0'?1:-1;
}

int cal(char x,char y){
    return cal(x)+cal(y);
}

int cal(char x,char y,char z){
    return cal(x)+cal(y,z);
}

int max(int a,int b,int c,int d){
    return max(max(a,b),max(c,d));
}
// 0-1
int cal(int n,string s){
    vector<int>dp0(s.size());
    vector<int>dp1(s.size());
    
    int ct=0;
    for(int i=0;i<3&&i<s.size();i++){
        if(s[i]=='0'){
            ct++;
        }else{
            ct--;
        }
        dp0[i] = ct;
        dp1[i] = -ct;
        if(i==2){
            dp0[i] = max(ct,0);
            dp1[i] = max(-ct,0);
        }
    }
    
    for(int i=3;i<s.size();i++){
        dp0[i] = max(dp0[i-3],
                     dp0[i-3]+cal(s[i],s[i-1],s[i-2]),
                     dp0[i-2]+cal(s[i],s[i-1]),
                     dp0[i-1]+cal(s[i])
                    );
        dp1[i] = max(dp1[i-3],
                     dp1[i-3]-cal(s[i],s[i-1],s[i-2]),
                     dp1[i-2]-cal(s[i],s[i-1]),
                     dp1[i-1]-cal(s[i])
                    );
    }
    return max(dp0.back(),dp1.back());
}

int main(){
    int n;
    cin>>n;
    string s;
    cin>>s;
    cout<<cal(n,s)<<endl;
}


```



# 第三题

有两个射箭队伍，你是裁判，规定射箭射中后，射击的距离在d之内得1分，在d之外得2分，如何设计d的值，让一个队伍尽可能的领先分数。

暴力枚举d即可，计算得分的时候用upper_bound二分一下

```cpp
#include<bits/stdc++.h>
using namespace std;

int cal(int d,vector<int>&v){
    int lw = upper_bound(v.begin(),v.end(),d)-v.begin();
    return lw+(v.size()-lw)*2;
}

int main(){
    int n,m;
    cin>>n>>m;
    vector<int> a(n),b(m);
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    for(int i=0;i<m;i++){
        cin>>b[i];
    }
    sort(a.begin(),a.end());
    sort(b.begin(),b.end());
    int ans = -1e9;
    for(int i=1;i<=1000;i++){
        ans=max(ans,cal(i,b)-cal(i,a));
    }
    cout<<ans<<endl;
}
```



# 第四题

暴力骗分，没有ac，tle了

```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    string s;
    cin>>s;
    vector<vector<int>>v(26,vector<int>(n));
    
    v[s[0]-'a'][0]=1;
    for(int i=0;i<n;i++){
        for(int j=0;j<26;j++){
            v[j][i]=v[j][i-1];
        }
         v[s[i]-'a'][i]++;
    }
    
    int ans = 0;
    for(int i=0;i<s.size();i++){
        for(int j=i;j<s.size();j++){
            for(int ch=0;ch<26;ch++){
                if(i==0){
                    if(v[ch][j]>=(j+1+1)/2){
                        ans++;
                    }
                } else{
                    if(v[ch][j]-v[ch][i-1]>=(j-i+1+1+1)/2){
                        ans++;
                    }
                }
            }
        }
    }
    cout<<ans<<endl;
}
```

# 第五题

没时间看。。。菜哭了