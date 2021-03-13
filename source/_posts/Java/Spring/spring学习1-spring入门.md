---
date: 2020-03-24 23:10:36
updated: 2020-03-24 23:10:36
mathjax: true
---

[学习](https://www.bilibili.com/video/BV1Sb411s7vP?p=59)

# spring 是一个轻量级框架
 他最重要的地方时AOP和IOC，他的目的是降低耦合度，减少代码量

# AOP
 面向切面编程，

# IOC
 控制反转，即将对象的创建交给spring,配置文件+注解
## 耦合问题
 比方说我们要在B类中使用A类，就会在B类中A a=new A();然后这样就导致了B依赖A
### 工厂模式解决耦合
 用工厂来控制A类，在B中就能 A a=factory.getA(); 这又导致了B和工厂耦合。
## ioc方案
 解析xml配置文件中的类，在工厂类中利用反射创建类的对象，这就降低了类的耦合度，我们想要换类的时候，只要将xml中的类名称改掉就可以了。


# 一站式框架
springMVC+ioc+jdbcTemplate