---
date: 2020-04-07 21:49:17
updated: 2020-04-07 21:49:17
---

# 第一题
输入一个n，表示n个点的完全图，输入m表示后续有m个操作，输入s表示你站在s点这个位置
接下来m行，每行两个数字x,y
 如果x=0 表示与y相连的所有边断开
 否则 表示边x-y断开
 你需要输出一个数x，表示这m个操作的前x个操作可以让s点与其他所有点断开连接
```cpp
set<int>se;
for(int i=1;i<=m;i++){
  cin>>x>>y;
  if(x==0) {
    if(y==s) return i;
    else se.insert(y);
  }else {
    if(x==s) se.inesrt(y);
    if(y==s) se.insert(x);
  }
  if(se.size()==n) return i;
}
return 0;
```
 怎么说呢，我就是这样写的，显然se.size()==n写错了，应该说n-1，跟yg讲这题的时候才想起来，我原地爆炸了，一直怀疑题目有问题，然后只过了10%，到最后都没找到bug
<!--more-->

# 第二题
 输入一个数n表示n个人，输入一个数m表示他们搞了m次聚会,输入一个数f表示f被感染了
 他们举办聚会，如果聚会中有一个人被感染,则参加聚会的其他人都会被感染
 输入m行，每行行首一个q，表示这一次聚会有q个人参加，q后面跟着q个数，表示这q个人的编号
 你需要输出最终多少人被感染了
```cpp
for(int i=0;i<m;i++){
  cin>>q;
  vector<int> vec;
  for(int i=0;i<q;i++) {
      cin>>x;
      vec.push_back(x);
      if(dead[x]) flag=true;
  }
  if(flag) for(int x:vec) dead[x]=true;
}
int ans=0;
for(bool x:dead) if(x) ans++;
cout<<ans<<endl;
```
 这代码能有问题？？？？？？只能过60%，开玩笑呢

# 第三题
 给一个数字字符串S，一个数字m，
 你需要计算出S有多少个划分，讲他划分为S1，S2，S3，。。 且每个数都是m的倍数，答案对1e9+7取模
```java
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Scanner;

public class Main {
    static String s;
    static BigInteger split(int l,int r){
        return new BigInteger(s.substring(l,r+1));
    }

    static int mod=(int)(1e9+7);
    public static void main(String[] args){
        Scanner cin = new Scanner(System.in);
        int T= cin.nextInt();
        for(int ii=0;ii<T;ii++) {
            int n=cin.nextInt();
            BigInteger m=cin.nextBigInteger();
            s = cin.next();
            long dp[]= new long[n+100];
            for(int i=0;i<n;i++){
                dp[i]=m.mod(split(0,i)).equals(BigInteger.ZERO)?1:0;
                for(int j=1;j<=i;j++){
                    if(split(j,i).mod(m).equals(BigInteger.ZERO)) dp[i]=(dp[i]+dp[j-1])%mod;
                }
            }
            System.out.println(dp[n-1]);
        }
    }


}
```
 java代码在这，我库鸟。这代码TLE，后来跟yg讲的时候发现split(i,j)%mod这句话可以通过字符串hash优化到O1，我真是，为什么笔试的时候没想到呢

# 第四题
 太菜了，没看

# 叙述题
 50G的文件，每行一个int，你需要在512MB内存的机器上求出TOP100
 这个很有意思，显然mapreduce
 先说一个常规的做法，抽象为n个int，取出TOP m
 我们每次从n个数中选出k个来，求这k个数的TOP m,使用线性时间选择算法
 这里一共执行了$$\lceil \frac{n}{k}\rceil$$次，取出了不超过$$\lceil \frac{n}{k}\rceil*m$$个数,于是合并解的时候复杂度为$$O(\lceil \frac{n}{k}\rceil*m)$$,  前面的复杂度为$$O(n)$$, 所以总时间复杂度为$$O(n+\lceil \frac{mn}{k}\rceil)$$<br>
 空间复杂度的话就是$$O(k)+O(\lceil \frac{mn}{k}\rceil)$$<br>
 我们稍微权衡一下，很容易发现时间复杂度就是$$O(n)$$,空间复杂度当k取到$$\sqrt{mn}$$的时候达到最优为$$O(\sqrt{mn})$$<br>
 然后我们来讲mapreduce的做法，我们每份分出去x台机器，map时间复杂度为$$O(n)$$,其他机器上为$$O(\frac{n}{x})$$,然后reduce，我们还有$$x*m$$个数，总共是$$O(n+\frac{n}{x}+x*m)$$