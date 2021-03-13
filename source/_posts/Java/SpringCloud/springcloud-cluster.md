
---
date: 2020-12-16 00:00:00
updated: 2020-12-16 00:00:00
typora-root-url: ..\..
---



### Spring Cloud Cluster 1.0.1.RELEASE

[参考](https://cloud.spring.io/spring-cloud-static/spring-cloud.html#_spring_cloud_cluster)

Spring Cloud Cluster提供了分布式系统中集群的特性，例如选主，集群持久化信息储存，全局锁和一次性token

以下是Spring Cloud Cluster 1.0.1的Spring Boot 自动装配流程，其中的zk模式主要用到了第三方框架[CuratorFramework](#CuratorFramework)

![image-20201221142540901](images/image-20201221142540901.png)

