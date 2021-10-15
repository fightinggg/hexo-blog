---
date: 2021-07-18 23:16:00
updated: 2021-07-18 23:16:00
---

# 比赛链接

[VK Cup 2021 - Elimination (Engine)](http://codeforces.com/contest/1544)

# 1. A. Binary Decimal

## 1.1. 题意

给你一个十进制数，你要把它拆成多个只由0和1组成的十进制数之和，问最少拆几个。

## 1.2. 做法

答案就是十进制数每个位上的数中的最大值

## 1.3. 代码

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    std::ios::sync_with_stdio(false);
    cin.tie();

    int n;
    cin >> n;
    while (n--) {
        int x;
        cin >> x;
        int mx = 0;
        while (x) {
            mx = max(mx, x % 10);
            x /= 10;
        }
        cout << mx << endl;
    }
}
```

<!-- more -->

# 2. B. Putting Plates

## 2.1. 题意

告诉你矩阵的长和宽，你要在矩阵的边界上填0或者1，不允许出现两个1相邻（上下左右以及对角一共八个方向）



## 2.2. 做法

贪心顺时针填1，能填就填，这个贪心是对的



## 2.3. 代码

```c++
#include <bits/stdc++.h>
using namespace std;

int main() {
    std::ios::sync_with_stdio(false);
    cin.tie();

    int n;
    cin >> n;
    while (n--) {
        int x, y;
        cin >> x >> y;
        vector<vector<int>> vis(x, vector<int>(y));
        // 上面
        // 1010101010....
        for (int i = 0; i < y; i += 2) {
            vis[0][i] = 1;
        }

        // 右边
        for (int i = 2; i < x; i += 2) {
            vis[i][y - 1] = 1;
        }


        // 下面
        for (int i = y - 3; i >= 0; i -= 2) {
            vis[x - 1][i] = 1;
        }

        // 左边
        for (int i = x - 3; i >= 2; i -= 2) {
            vis[i][0] = 1;
        }
        for(int i=0;i<x;i++){
            for(int j=0;j<y;j++){
                cout<<vis[i][j];
            }
            cout<<endl;
        }
        cout<<endl;
    }
}
```

# 3. C. Pursuit

## 3.1. 题意

两个人比n场，每个人的总分取各自最大的$n+\lfloor \frac{n}{4}\rfloor$个得分求和。

你现在知道了前k场比赛的结果，问你至少还要比多少场，你才有可能赢过对方（可以假设你后面全部得满分，对面得0分）

## 3.2. 题解

二分场数，自己取100分，对面取0分



## 3.3. 代码

```c++
#include <bits/stdc++.h>

using namespace std;


int main() {
    std::ios::sync_with_stdio(false);
    cin.tie();

    int step;
    cin >> step;
    while (step--) {
        int n;
        cin >> n;
        vector<int> me(n), you(n);
        for (int i = 0; i < n; i++) cin >> me[i];
        for (int i = 0; i < n; i++) cin >> you[i];
        sort(me.begin(), me.end(), [](int a, int b) { return a > b; });
        sort(you.begin(), you.end(), [](int a, int b) { return a > b; });
        for (int i = 1; i < me.size(); i++) {
            me[i] += me[i - 1];
        }
        for (int i = 1; i < me.size(); i++) {
            you[i] += you[i - 1];
        }
        int l = 0, r = n + 1;
        while (l < r) {
            int mid = (l + r) >> 1;
            int ksub = (mid + n) - (mid + n) / 4;
            int big = min(ksub, mid);
            int little = ksub - big;
            int meSum = big * 100 + (little == 0 ? 0 : me[little - 1]);
            int youSum = you[min(ksub - 1, n - 1)];

            if (meSum >= youSum) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        cout << l << endl;
    }
}


```



# 4. D. Secret Santa

## 4.1. 题意

给你一个长度为n的数组a，每个数都在1到n之间（包括1和n），你需要寻找一个完全错排b，使得尽可能多的`i`满足`a[i]=b[i]`

## 4.2. 做法

贪心一遍，尽可能多的匹配，这是答案的上届，可能会剩下一些位置没有分配值，如果超过1个位置，则可以分配成功

如果只剩下一个位置pos了，且他的值为x，那就看b中哪个位置现在的值为x，把它修改为pos，然后`b[pos]=x`



## 4.3. 代码

```c++
#include <bits/stdc++.h>

using namespace std;


int main() {
    std::ios::sync_with_stdio(false);
    cin.tie();

    int step;
    cin >> step;
    while (step--) {
        int n;
        cin >> n;
        vector<int> a(n), b(n);
        for (int i = 0; i < n; i++) cin >> a[i], a[i]--;

        vector<int> vis(n);

        vector<int> pos;
        for (int i = 0; i < n; i++) {
            if (!vis[a[i]]) {
                vis[a[i]] = true;
                b[i] = a[i];
            } else {
                b[i] = -1;
                pos.push_back(i);
            }
        }

        vector<int> value;
        for (int i = 0; i < n; i++) {
            if (!vis[i]) {
                value.push_back(i);
            }
        }

        int ans = n-value.size();

        for (int i = 0; i < pos.size(); i++) {
            int posi = pos[i];
            b[posi] = value.back();
            value.pop_back();
            if (b[posi] == posi) {
                if (value.empty()) {
                    int index = 0;
                    while (b[index] != a[posi]) index++;
                    swap(b[posi], b[index]);
                    //212
                    //213
                } else {
                    b[posi] = value.back();
                    value.pop_back();
                    value.push_back(posi);
                }
            }
        }



        cout<<ans<<endl;
        for (int i = 0; i < n; i++) {
            cout << (b[i] + 1) << (i == n - 1 ? "\n" : " ");
        }
    }
}


```




