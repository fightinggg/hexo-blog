---
date: 2018-12-08 18:52:21
updated: 2018-12-08 18:52:21
mathjax: true
---



```c++
struct Manacher {//鉴于马拉车算法较复杂，此处有少量修改，
    //s[i]=ma[i<<1]
    //mp[i]表示以i为中心的最长回文串的半径，且mp[i]-1恰好为此回文串包含原字符串的字符的数量
    //可以证明ma字符串所包含的回文串总数=原字符串b所包含的回文串总数+2n+2
    static const int maxn = 1e6 + 666;
    char ma[maxn << 1];
    int mp[maxn << 1], begat[maxn];//begta[i]-> 以i开头的回文串的数量  begin at

    void build(char *str) {
        int len = strlen(str + 1), l = 0;
        ma[l++] = '$';//$#.#.#.#.#.#.#.#
        ma[l++] = '#';
        for (int i = 1; i <= len; i++) {
            ma[l++] = str[i];
            ma[l++] = '#';
        }
        ma[l] = mp[l] = 0;
        int mx = 0, id = 0;
        for (int i = 0; i < l; i++) {
            mp[i] = mx > i ? min(mp[2 * id - i], mx - i) : 1;
            while (ma[i + mp[i]] == ma[i - mp[i]])mp[i]++;
            if (i + mp[i] > mx) {
                mx = i + mp[i];
                id = i;
            }
        }
        //for(int i=2;i<=l;i++)palindrome+=mp[i]>>1;//回文串个数

        //若不用dalt数组，此后可删掉
        for (int i = 1; i <= len; i++)begat[i] = 0;
        for (int i = 2; i < l; i++) {
            int s = i - mp[i] + 1;//ma串最长回文左端点s
            s = (s + 1) / 2;//变为str串最长回文左端点，向上取整,因为str[i]对应smp[i<<1]
            int t = s + mp[i] / 2 - 1;//右端点
            begat[s]++;
            begat[t + 1]--;
        }
        for (int i = 1; i <= len + 1; i++)begat[i] += begat[i - 1];//+1是为了还原
    }
};
```

