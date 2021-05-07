---
date: 2018-10-15 13:01:41
updated: 2018-10-15 13:01:41
mathjax: true
---



```c++
inline void GetNext(char *s) {
    int l = strlen(s), t;
    next[0] = -1;
    for (int i = 1; i < l; ++i) {
        t = next[i - 1];
        while (s[t + 1] != s[i] && t >= 0)
            t = next[t];
        if (s[t + 1] == s[i])
            next[i] = t + 1;
        else
            next[i] = -1;
    }
}

inline void KMP(char *s1, char *s2) {
    ans.clear();
    GetNext(s2);//预处理next数组
    int len_1 = strlen(s1);
    int len_2 = strlen(s2);
    int i = 0, j = 0;
    while (j < len_1) {
        if (s2[i] == s1[j]) {
            ++i;
            ++j;
            if (i == len_2) {
                ans.push_back(j - len_2 + 1);
                i = next[i - 1] + 1;
            }
        } else {
            if (i == 0)
                j++;
            else
                i = next[i - 1] + 1;
        }
    }
}
```

