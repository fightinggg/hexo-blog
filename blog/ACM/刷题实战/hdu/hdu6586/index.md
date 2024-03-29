---
date: 2019-09-04 10:32:30
updated: 2019-09-04 10:32:30
---

###name
String

###descirption
Tom has a string containing only lowercase letters. He wants to choose a subsequence of the string whose length is k and lexicographical order is the smallest. It's simple and he solved it with ease.
But Jerry, who likes to play with Tom, tells him that if he is able to find a lexicographically smallest subsequence satisfying following 26 constraints, he will not cause Tom trouble any more.
The constraints are: the number of occurrences of the ith letter from a to z (indexed from 1 to 26) must in $[L_i,R_i]$.
Tom gets dizzy, so he asks you for help.

<!---more-->

###input
The input contains multiple test cases. Process until the end of file.
Each test case starts with a single line containing a string $S(|S|≤10^5)$and an integer k(1≤k≤|S|).
Then 26 lines follow, each line two numbers$ L_i,R_i(0≤L_i≤R_i≤|S|)$. 
It's guaranteed that S consists of only lowercase letters, and $∑|S|≤3×10^5$.
 
###output
Output the answer string. 
If it doesn't exist, output −1.

###sample input
aaabbb 3
0 3
2 3
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
0 0
###sample output
abb

###toturial
遇到这种题一般要想到一位一位去构造，贪心的选择小的字母，从而构造出最小字典序，而这一步我们需要的是验证此字母是否合法。因为是在选子序列，所以我们只需要统计后缀是否满足要求即可，后缀中的字母都满足数量足够即可

###code
```cpp
#include<bits/stdc++.h>
using namespace std;

#define rep(i,j,k) for(int i=(j);i<=(k);++i)
#define per(i,j,k) for(int i=(j);i>=(k);--i)

const int maxn=1e5+5;
char s[maxn];
int k;
int l[maxn],r[maxn];

int suf[maxn][26],ct[maxn][26];
char ans[maxn];

int main(){
    while(~scanf("%s%d",s,&k)){
        rep(i,0,25) scanf("%d%d",l+i,r+i);
        int len=strlen(s);

        rep(j,0,25) suf[len][j]=-1,ct[len][j]=0;
        per(i,len-1,0){
            rep(j,0,25) suf[i][j]=suf[i+1][j],ct[i][j]=ct[i+1][j];
            suf[i][s[i]-'a']=i;
            ct[i][s[i]-'a']++;
        }

        int cur=0;// no choose
        rep(i,0,k-1){
            rep(j,0,25){
                if(suf[cur][j]!=-1) {
                    l[j]--,r[j]--;
                    int nex=suf[cur][j]+1;
                    int ok=1,nd=0;
                    for(int t=0;t<26;t++){
                        if((nex==len?0:ct[nex][t])<l[t]||r[t]<0) ok=0;
                        nd+=max(0,l[t]);
                    }
                    if(ok==1&&i+1+nd<=k){
                        ans[i]=j+'a';
                        cur=nex;
                        break;
                    }
                    l[j]++,r[j]++;
                }
                if(j==25){
                    printf("-1\n");
                    goto failed;
                }
            }
        }
        for(int i=0;i<k;i++) printf("%c",ans[i]);
        printf("\n");

        failed:;
    }
}
```