---
title: spring5-XML配置IOC
categories:
  - Java
  - spring
tags:
  - Java
  - spring
keywords:
  - Java
  - spring
abbrlink: 64390
date: 2020-04-06 00:05:05
---


# XML配置IOC
## 使用默认构造函数创建Bean
&emsp;&emsp; 在spring的配置文件中使用Bean标签, 只配置id个class属性
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="myclass" class="com.wsx.spring.Myclass"></bean>
</beans>
```
<!-- more -->
## 使用某个类中的方法创建
&emsp;&emsp; 加入一个方法
```xml
<bean id="myfactory" factory-bean="com.wsx.spring.Myfactory"
    factory-method="function"></bean>
```

## 使用类的静态方法创建
```xml
<bean id="myfactory" class="com.wsx.spring.Myfactory"
    factory-method="function"></bean>
```

## Bean的作用范围
- singleton 单例(默认值)
- prototype 多例
- request web应用的请求范围
- session web应用的会话范围
- global-session 集群环境的会话范围，一个集群只有一个全局会话

## Bean的生命周期
### 单例
&emsp;&emsp; 当容器创建对象出生，当容器存在，对象活着，当容器销毁，对象消亡
&emsp;&emsp; init-method 是创建以后调用的， destory-method是销毁之前调用的的
```xml
<bean id="myclass" class="com.wsx.spring.Myclass"
    scope="singleton" init-method="init"
    destory-method="destory"></bean>
```
### 多例
&emsp;&emsp; 当我们使用的时候spring为我们创建，当我们一直使用，对象就一直活着，对象等着被垃圾回收机制删掉

