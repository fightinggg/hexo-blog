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

![](/images/image-2020-12-30-14.54.40.469.png)

![](/images/image-2020-12-30-14.53.48.241.png)

![](/images/image-2020-12-30-14.54.01.518.png)