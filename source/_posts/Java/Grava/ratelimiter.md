---
date: 2020-10-25 00:00:00
updated: 2020-10-25 00:00:00
typora-root-url: ..\..
---


## Guava

### RateLimiter

```java
RateLimiter rateLimiter = RateLimiter.create(10);
for (int i = 0; i < 20; i++) {
    int finalI = i;
    new Thread(new Runnable() {
        @Override
        public void run() {
            int cnt = 0;
            while (true) {
                if (rateLimiter.tryAcquire()) {
                    cnt++;
                    System.out.println("thread: " + finalI + " cnt: " + cnt);
                }
            }
        }
    }).start();
}
Thread.sleep(1000 * 100 * 1000);
```
<!-- more -->


源码流程图：

![image-20201230145440469](/images/image-20201230145440469.png)

![image-20201230145348241](/images/image-20201230145348241.png)

![image-20201230145401518](/images/image-20201230145401518.png)