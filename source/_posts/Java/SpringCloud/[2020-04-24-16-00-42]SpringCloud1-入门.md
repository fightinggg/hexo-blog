---
date: 2020-04-24 16:00:42
updated: 2020-04-24 16:00:42
mathjax: true
---

# 集群/分布式
集群是多台计算机为了完成同一个工作，组合在一起达到更高的效率的系统

分布式是为了完成一个工作，将工作拆分为多个服务，分别运行在不同机器上的系统
<!-- more -->
# 分布式系统的CAP理论
强一致性、高可用性、分区容错性无法同时达到极致

强一致性指的是多个节点间的数据是实时一致的

高可用性指的是单位时间内我们的分布式系统能够提供服务的时间

分区容错性指的是分布式系统中一部分节点出现问题以后，我们仍然可以提供正常服务。

# SpringCloud的基础功能
- 服务治理：Eureka
- 客户端负载均衡：Ribbon
- 服务容错保护：Hystrix  
- 声明式服务调用：Feign
- API网关服务：Zuul
- 分布式配置中心：Config

# Eureka(服务治理)
这是一个根据服务名字提供IP和端口的服务器，和DNS服务器比较像，我们的节点分为3类，服务提供者、服务消费者、EurekaServer
## 服务提供者
这些节点提供服务，他们在EurekaServer上注册自己，并定时通过心跳机制来表明自己正常，当他下机的时候也会通知EurekaServer， 这些分别叫做服务注册、服务续约、服务下线
## 服务消费者
这些节点调用服务提供者的服务，但是他们不知道IP和Port是多少，所以他们需要先向EurekaServer询问自己想要调用的服务在哪些机器上，然后才可以调用服务。这些叫做获取服务和服务调用
## EurekaServer
他们支持服务提供者的注册，支持服务消费者的询问，还要支持监视服务提供者的心跳，当他们发现某服务提供者心跳出现问题的时候，将其剔除，如果某些服务提供者的心跳不正常但是不致死，他们就会将这些服务提供者的信息保护起来，尽量不让他们过期。

# Ribbon(客户端负载均衡)
摘自[撸一撸Spring Cloud Ribbon的原理](https://www.cnblogs.com/kongxianghai/p/8445030.html)
>说起负载均衡一般都会想到服务端的负载均衡，常用产品包括LBS硬件或云服务、Nginx等，都是耳熟能详的产品。
>而Spring Cloud提供了让服务调用端具备负载均衡能力的Ribbon，通过和Eureka的紧密结合，不用在服务集群内再架设负载均衡服务，很大程度简化了服务集群内的架构。

# Hystrix(服务器容错)
## 问题提出
在高并发的情况下，某个服务延迟，导致其他请求延迟，最终引发雪崩
## 断路器
当某个服务单元故障，即50%的请求失败的时候，就会触发熔断，直接返回错误调用，熔断期间的请求都会直接返回错误，5秒以后重新检测该服务是否正常，判断熔断是否关闭
## 线程隔离
为了保证服务之间尽量不要相互影响，每个服务的线程池是独立的

# Feign(声明式服务调用)
我们可以直接使用注解构造接口来指定服务，非常简单，你只需要声明一下就可以了
当然他整合了Ribbon和Hystrix

# Zuul(API网关服务)
看得不是太懂

我们的微服务实现了Eureka，但是入口的第一个服务缺没有，，Nginx必须手动维护IP，然后Nginx执行负载均衡以后，我们还需要对每一个请求验证签名、登陆校验冗余，这就导致了重复的代码。

Zuul出现了，他整合了Eureka、Hystrix、Ribbon，通过Eureka解决IP问题，通过调用微服务解决代码重复的问题

# Config(分布式配置中心)
功能和Zookeeper比较相似

# 入门结束
下次再深入学习，我康康SpringMVC去






# 参考资料
[外行人都能看懂的SpringCloud，错过了血亏！](https://mp.weixin.qq.com/s?__biz=MzAwNDA2OTM1Ng==&mid=2453140943&idx=1&sn=72ef2d1aa0a5a0265babfdce7234cefd&scene=21%23wechat_redirect)
[Spring Cloud Feign设计原理](https://www.jianshu.com/p/8c7b92b4396c)
[SOA和微服务架构的区别？](https://www.zhihu.com/question/37808426)
[分布式、集群、微服务、SOA 之间的区别](https://blog.csdn.net/heatdeath/article/details/79038795)
[微服务Springcloud超详细教程+实战（一）](https://blog.csdn.net/weixin_41838683/article/details/84959520?depth_1-utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-5&utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-5)