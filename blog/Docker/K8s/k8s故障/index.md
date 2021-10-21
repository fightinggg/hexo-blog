---
date: 2021-03-15 12:50:00
updated: 2021-03-15 12:50:00
---


# 很多POD处于evicted状态

![](image-2021-03-15-14.38.51.446.png)

```sh
#!/bin/bash
for pod in $(kubectl get pods|grep Evicted|awk '{print $1}');
do
  kubectl delete pods $pod
done
```
