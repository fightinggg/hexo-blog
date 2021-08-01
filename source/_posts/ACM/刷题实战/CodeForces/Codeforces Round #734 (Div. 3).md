---
date: 2021-07-24 11:08:00
updated: 2021-07-24 11:08:00
---

# 比赛链接

https://codeforces.com/contest/1551

# 1.  A. Polycarp and Coins

## 1.1. 题意

给你一个数n，你要把他拆为$c_1+2c_2$的形式，你需要最小化$c_1$和$c_2$的差

## 1.2. 做法

对模3的余数进行分类讨论

## 1.3. 代码

```cpp
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
        if (n % 3 == 0) {
            cout << n / 3 << " " << n / 3 << endl;
        } else if (n % 3 == 1) {
            cout << n / 3 + 1 << " " << n / 3 << endl;
        } else {
            cout << n / 3 << " " << n / 3 + 1 << endl;
        }
    }
}
 
```



# 2.  B2. Wonderful Coloring - 2

## 2.1. 题意

给你一个长度为n的序列，你要用k种颜色给序列的每个元素染色，

1. each element of the sequence is either painted in one of k colors or isn't painted;
2. each two elements which are painted in the same color are different (i. e. there's no two equal values painted in the same color);
3. let's calculate for each of k colors the number of elements painted in the color — all calculated numbers must be equal;
4. the total number of painted elements of the sequence is the **maximum** among all colorings of the sequence which meet the first three conditions.

你要最大化被染色的元素的个数



## 2.2. 做法

贪心染色，先把元素按照值分类，每个类中如果有超过k个颜色，则直接丢弃，最后把这些元素放到一起构成集合$S$，继续丢弃一些元素,直到$|s|$是k的倍数



## 2.3. 代码

```cpp
#include <bits/stdc++.h>

using namespace std;

inline int read() {
    int x;
    cin >> x;
    return x;
}


int main() {

    int step = read();
    while (step--) {
        int n = read();
        int k = read();
        vector<int> a(n);
        vector<int> pos;
        vector<int> vis(n + 1);
        for (int i = 0; i < n; i++) {
            a[i] = read();
            if (vis[a[i]] < k) {
                pos.push_back(i);
            }
            vis[a[i]]++;
        }
        sort(pos.begin(), pos.end(), [&a](int x, int y) { return a[x] < a[y]; });
        vector<int> ans(n, 0);
        while (pos.size() % k != 0) pos.pop_back();
        for (int i = 0; i < pos.size(); i++) {
            ans[pos[i]] = i % k + 1;
        }
        for (int i = 0; i < n; i++) {
            printf("%d ", ans[i]);
        }
        printf("\n");
    }
}


```



# 3. C. Interesting Story

## 3.1. 题意

 A story is called *interesting* if there exists a letter which occurs among all words of the story more times than all other letters together.

如果一个字符串中，有一个字符出现的次数，币其他字符出现的次数之和还要大，则这个字符串为有趣。

You are given a sequence of n words consisting of letters 'a', 'b', 'c', 'd' and 'e'. Your task is to choose the maximum number of them to make an interesting story. If there's no way to make a non-empty story, output 0.

给你一些字符串，你要从中选择最多的字符串，这些字符串拼在一起之后是一个有趣的字符串、

字符串只由`abcde`五种字符构成

## 3.2. 做法

对每种字符分别判断，假设现在在处理a，每个字符串中a出现的次数为$a_i$其他字符出现的次数为$x_i$,然后对字符串按照$a_i-x_i$排序，贪心选择前几项即可



## 3.3. 代码

```cpp
#include <bits/stdc++.h>

using namespace std;

int solve(const vector<vector<int>> &a, int pos) {
    vector<int> t(a.size());
    for (int i = 0; i < a.size(); i++) {
        t[i] = i;
    }
    sort(t.begin(), t.end(), [&a, pos](int x, int y) {
        return 2 * a[x][pos] - a[x][5] > 2 * a[y][pos] - a[y][5];
    });

    int ans = 0;
    int cnt = 0;
    int all = 0;
    for (int i = 0; i < a.size(); i++) {
        cnt += a[t[i]][pos];
        all += a[t[i]][5];
        //cout << "i " << i << " cnt " << cnt << " all " << all << endl;
        if (cnt > all - cnt) {
            ans = i + 1;
        }
    }
    return ans;
}

int main() {
    std::ios::sync_with_stdio(false);
    cin.tie(0);

    int step;
    cin >> step;
    while (step--) {
        int n;
        cin >> n;
        vector<vector<int>> a(n, vector<int>(6));
        for (int i = 0; i < n; i++) {
            string s;
            cin >> s;
            for (char ch:s) {
                a[i][ch - 'a']++;
                a[i][5]++;
            }
        }
        cout << max({solve(a, 0), solve(a, 1), solve(a, 2), solve(a, 3), solve(a, 4)}) << endl;
    }
}



```



# 4. D2. Domino (hard version)

 ## 4.1. 题意

sb题目没营养，不展开了

## 4.2. 代码

```cpp
#include <bits/stdc++.h>

using namespace std;


int main() {
    std::ios::sync_with_stdio(false);
    cin.tie(0);

    int step;
    cin >> step;
    while (step--) {
        int n, m, k;
        cin >> n >> m >> k;

        vector<string> ans(n, string(m, ' '));
        if (n % 2 == 0 && m % 2 == 0) {
            if (k % 2 == 0) {
                puts("YES");
                for (int i = 0; i < n; i += 2) {
                    for (int j = 0; j < m; j += 2) {
                        if (k) {
                            k -= 2;
                            ans[i][j] = (j & 2) ? 'a' : 'c';
                            ans[i][j + 1] = (j & 2) ? 'a' : 'c';
                            ans[i + 1][j] = (j & 2) ? 'b' : 'd';
                            ans[i + 1][j + 1] = (j & 2) ? 'b' : 'd';
                        } else {
                            ans[i][j] = (i & 2) ? 'e' : 'g';
                            ans[i + 1][j] = (i & 2) ? 'e' : 'g';
                            ans[i][j + 1] = (i & 2) ? 'f' : 'h';
                            ans[i + 1][j + 1] = (i & 2) ? 'f' : 'h';
                        }
                    }
                }
                for (int i = 0; i < n; i++) {
                    cout << ans[i] << endl;
                }
            } else {
                puts("NO");
            }
        } else if (n % 2 == 0 && m % 2 == 1) {
            if (k * 2 <= n * (m - 1) && k % 2 == 0) {
                puts("YES");
                for (int i = 0; i < n; i += 2) {
                    for (int j = 0; j < m - 1; j += 2) {
                        if (k) {
                            k -= 2;
                            ans[i][j] = (j & 2) ? 'a' : 'c';
                            ans[i][j + 1] = (j & 2) ? 'a' : 'c';
                            ans[i + 1][j] = (j & 2) ? 'b' : 'd';
                            ans[i + 1][j + 1] = (j & 2) ? 'b' : 'd';
                        } else {
                            ans[i][j] = (i & 2) ? 'e' : 'g';
                            ans[i + 1][j] = (i & 2) ? 'e' : 'g';
                            ans[i][j + 1] = (i & 2) ? 'f' : 'h';
                            ans[i + 1][j + 1] = (i & 2) ? 'f' : 'h';
                        }
                    }
                }
                for (int i = 0; i < n; i += 2) {
                    ans[i][m - 1] = (i & 2) ? 'z' : 'x';
                    ans[i + 1][m - 1] = (i & 2) ? 'z' : 'x';
                }
                for (int i = 0; i < n; i++) {
                    cout << ans[i] << endl;
                }
            } else {
                puts("NO");
            }
        } else { // n%2==1 && m%2==0
            k -= m / 2;
            if (k >= 0 && k % 2 == 0) {
                puts("YES");
                for (int i = 0; i < n - 1; i += 2) {
                    for (int j = 0; j < m; j += 2) {
                        if (k) {
                            k -= 2;
                            ans[i][j] = (j & 2) ? 'a' : 'c';
                            ans[i][j + 1] = (j & 2) ? 'a' : 'c';
                            ans[i + 1][j] = (j & 2) ? 'b' : 'd';
                            ans[i + 1][j + 1] = (j & 2) ? 'b' : 'd';
                        } else {
                            ans[i][j] = (i & 2) ? 'e' : 'g';
                            ans[i + 1][j] = (i & 2) ? 'e' : 'g';
                            ans[i][j + 1] = (i & 2) ? 'f' : 'h';
                            ans[i + 1][j + 1] = (i & 2) ? 'f' : 'h';
                        }
                    }
                }
                for (int j = 0; j < m; j += 2) {
                    ans[n - 1][j] = (j & 2) ? 'z' : 'x';
                    ans[n - 1][j + 1] = (j & 2) ? 'z' : 'x';
                }
                for (int i = 0; i < n; i++) {
                    cout << ans[i] << endl;
                }
            } else {
                puts("NO");
            }
        }
    }
}



```













