---
date: 2020-04-29 15:04:37
updated: 2020-04-29 15:04:37
mathjax: true
---

# 微服务于微服务架构
微服务强调服务的大小，他关注某一个点，一个模块只做一种事情
微服务架构通常而言，他提倡将单一的程序划分为一组小的服务，每个服务运行在独立的进程中，采用轻量级的通信机制 doubbo是rpc，springcloud是restful

<!-- more -->

# 微服务的优点
每个服务足够内聚，代码容易聚焦，开发简答，微服务可以被小团队单独开发，微服务松耦合，微服务可以使用不同的语言开发，易于第三方集成，微服务不会和html/css等组件混合

# 微服务的缺点
开发人员要处理分布式系统的复杂性，多服务运维难度提高，系统部署依赖，服务间通信成本提高，数据一致性问题，系统集成测试问题


# 微服务技术栈
微服务条目 | 技术
-|-
服务开发 | Spring,SpringBoot,SpringMVC
服务配置与管理 | Archaius,Diamond
服务注册与发现 | Eureka,Consul,Zookeeper
服务调用 | Rest,RPC,gRPC
服务熔断器 | Hystrix,Envoy
负载均衡 | Ribbon,Nginx
服务接口调用 | Feign
消息队列 | Kafka,RabbitMQ,ActiveMQ
服务配置中心管理 | SpringCloudCOnfig,Chef
服务路由 | Zuul
服务监控 | Zabbix,Nagios,Metrics,Spectator
全链路追踪 | Zipkin,Brave,Dapper
服务部署 | Docker, OpenStack,Kubernetes
数据流操作开发包 | SpringCloudStream
事件消息总线 | SpringCloudBus

# 为什么选择SpringCloud？ 
## 其他的微服务架构
阿里用Dubbo/HSF 2012-2017年就没有维护了
京东JSF
新浪Motan
当当DubboX
## SpringCloud的优点
他提供了完整的微服务框架，完整！！！！