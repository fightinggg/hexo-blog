---
date: 2020-04-19 13:32:52
updated: 2020-04-19 13:32:52
mathjax: true
typora-root-url: ..\..
---

# docker 安装 kafka

先安装[zookeeper](/Q8X72K.html)

然后安装kafka

```shell
docker run -d \
-eZK_HOSTS=zookeeper.zk \
--link zookeeper:zookeeper.zk \
--name=kafka \
kafkamanager/kafka-manager
```

