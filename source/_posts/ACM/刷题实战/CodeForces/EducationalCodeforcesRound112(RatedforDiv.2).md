---
date: 2021-08-01 11:47:00
updated: 2021-08-01 11:47:00
---



# 比赛链接

https://codeforces.com/contest/1555



# 1. A. PizzaForces

## 1.1. 题意

6元15个物品，8元20个物品，10元25个物品

现在需要买至少n个物品，问需要多少钱



## 1.2. 做法

首先看单价，发现他们都相同，然后就是尽量不要多买了。

如果n比15,20,25的最小公倍数的两倍还要大，则多出的这一部分，可以考虑直接购买6元的，剩下的小范围dp即可

核心思想： 大范围贪心，小范围dp

**notes**: 注意一定是至少两倍以上才能贪心



## 1.3. 代码

```cpp
#include <bits/stdc++.h>

using namespace std;


int main() {
    std::ios::sync_with_stdio(false);
    cin.tie(0);


    int step;
    cin >> step;
    // 6 8 10 -> 2*3 2*2*2 2*5 -> 2*2*2*3*5
    // ->
    int lcm = 2 * 2 * 2 * 3 * 5;
    vector<int> dp(2 * lcm);
    for (int i = 1; i < 2 * lcm; i++) {
        int v1 = (i - 6) >= 0 ? dp[i - 6] : 0;
        int v2 = (i - 8) >= 0 ? dp[i - 8] : 0;
        int v3 = (i - 10) >= 0 ? dp[i - 10] : 0;
        dp[i] = min({v1 + 15, v2 + 20, v3 + 25});
    }
    while (step--) {
        long long n;
        cin >> n;
        if (n / lcm == 0) {
            cout << dp[n % lcm] << endl;
        } else {
            cout << (1ll * dp[lcm - 1] * (n / lcm - 1) + dp[n % lcm + lcm]) << endl;

        }
    }
}


```



# 2. B. Two Tables

pass





# 3. C. Coin Rows

## 3.1. 题意

两行n列的矩阵，alice和bob在左上角，他们只可以往右或者往下走，alice先走，bob后走。

所有bob经过的位置，如果这里没有被alice走过，那么bob就可以拿走这里的值，

最后bob希望最大化自己的值的和，alice希望最小化bob的值的和

问最后bob的值的和最后是多少







## 3.2. 做法

考虑alice什么时候向下走，然后bob能拿这段第一行的后缀，或者第二行的前缀，bob会取最大



## 3.3. 代码

```cpp
#include <bits/stdc++.h>

using namespace std;


int main() {
    std::ios::sync_with_stdio(false);
    cin.tie(0);


    int step;
    cin >> step;

    while (step--) {
        int n;
        cin >> n;
        vector<int> a(n + 2), b(n + 2);
        for (int i = 1; i <= n; i++) {
            cin >> a[i];
        }
        for (int i = 1; i <= n; i++) {
            cin >> b[i];
        }
        for (int i = n - 1; i >= 1; i--) {
            a[i] += a[i + 1];
        }
        for (int i = 1; i <= n; i++) {
            b[i] += b[i - 1];
        }

        int ans = 1e9;
        for (int i = 1; i <= n; i++) {
            int ans1 = a[i + 1];
            int ans2 = b[i - 1];
            //cout << ans1 << " " << ans2 << endl;
            ans = min(ans, max(ans1, ans2));
        }
        cout << ans << "\n";
    }
}
```



# 4. D. Say No to Palindromes

## 4.1. 题意

没有长度超过1的回文子串的串就是漂亮串，给你一个串S，k组询问，每次问S的一个子串至少修改几个字符后是漂亮串

S只包含abc三个字母

## 4.2. 做法

打表发现漂亮串只有6类，他们分别以`abc`,`acb`,`bac`,`bca`,`cab`,`cba`作为自己的循环节 ，然后就直接按照这6类来进行比较，看有多少字符不同即可，可以使用前缀和优化。



## 4.3. 代码

```cpp
#include <bits/stdc++.h>

using namespace std;

int sz[3][3][200000 + 5];
int n, m;
string s;
int l, r;


int solve(int a, int b, int c) {
    int same = sz[0][a][r] - sz[0][a][l - 1]
               + sz[1][b][r] - sz[1][b][l - 1]
               + sz[2][c][r] - sz[2][c][l - 1];
//    cout << r - l + 1 - same << endl;
    return r - l + 1 - same;
}

int main() {
    std::ios::sync_with_stdio(false);
    cin.tie(0);

    cin >> n >> m >> s;
    s.insert(s.begin(), ' ');
    for(int i=1;i<=n;i++){
       // cout<<s[i];
    }
    vector<vector<int>> size;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 1; k <= n; k++) {
                sz[i][j][k] = k > 1 ? sz[i][j][k - 1] : 0;
                if (k % 3 == j) {
                    sz[i][j][k] += (s[k] == ('a' + i));
                }
                //  cout<<sz[i][j][k]<<" ";
            }
            // cout<<endl;
        }
        // cout<<endl;
    }

    for (int i = 0; i < m; i++) {
        cin >> l >> r;
//        cout << solve(2, 1, 0) << endl;
        int ans = min({solve(0, 1, 2),
                       solve(0, 2, 1),
                       solve(1, 2, 0),
                       solve(1, 0, 2),
                       solve(2, 1, 0),
                       solve(2, 0, 1),
                      });
        cout << ans << "\n";
    }

}


```





















