---
date: 2019-08-16 16:18:35
updated: 2019-08-16 16:18:35
---

```cpp
#define I __int128
void exgcd(I a,I&x,I b,I&y,I c){ //  assert(__gcd(a,b)==c)
    if(b==0) x=c/a,y=0;
    else exgcd(b,y,a%b,x,c),y-=a/b*x;
}

inline bool merge(I x1,I p1,I x2,I p2,I&x,I&p){
    I a,b,d=__gcd(p1,p2);// ap1+x1=bp2+x2     a+k(p2/gcd)
    if((x2-x1)%d!=0) return false;
    exgcd(p1,a,p2,b,x2-x1);
    p=p1/d*p2; //lcm
    x=((a*p1+x1)%p+p)%p;//
    return true;
}
```

```java
public class Main {
    static BigInteger[] exgcd(BigInteger a, BigInteger b, BigInteger c) { // ax+by=c  res[0]=x,res[1]=y
        if (b.compareTo(BigInteger.ZERO) == 0) return new BigInteger[]{c.divide(a), BigInteger.ZERO};
        BigInteger[] r = exgcd(b, a.mod(b), c);
        return new BigInteger[]{r[1], r[0].subtract(a.divide(b).multiply(r[1]))};
    }

    static BigInteger[] merge(BigInteger x1, BigInteger p1, BigInteger x2, BigInteger p2) {
        BigInteger d = p1.gcd(p2);
        if (x2.subtract(x1).mod(d).compareTo(BigInteger.ZERO) != 0) return null;
        BigInteger[] r = exgcd(p1, p2, x2.subtract(x1));
        BigInteger p = p1.divide(d).multiply(p2); //     p=p1/d*p2
        BigInteger x=r[0].multiply(p1).add(x1).mod(p).add(p).mod(p);
        return new BigInteger[]{x, p};
    }
}
```