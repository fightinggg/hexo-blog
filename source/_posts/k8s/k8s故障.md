---
date: 2021-03-15 12:50:00
updated: 2021-03-15 12:50:00
mathjax: true
typora-root-url: ../..
---


# 很多POD处于evicted状态

![image-20210315143851446](/images/image-20210315143851446.png)

```sh
#!/bin/bash
for pod in $(kubectl get pods|grep Evicted|awk '{print $1}');
do
  kubectl delete pods $pod
done
```

