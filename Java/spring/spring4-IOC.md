---
title: spring4-IOC
mathjax: true
abbrlink: c401c415
date: 2020-04-02 23:22:41
categories:
  - java
  - spring
tags:
  - java
  - spring
keywords:
  - java
  - spring
---

# ApplicationContest
&emsp;&emsp; 单例对象适用
- ClassPathXmlApplicationContext 可以加载类路径下的配置文件，要求配置文件在类路径下
- FileSystemXmlApplicationContext 可以加载任意路径下的配置文件(要有访问权限)
- AnnotationConfigApplicationContext 读取注解创建容器

# ApplicationContest什么时候创建对象
- 当加载配置文件的时候就创建了对象

# BeanFactory
&emsp;&emsp; 多例对象适用
- XmlBeanFactory 使用的时候才创建对象

# spring的管理细节
## 使用默认构造函数创建Bean
&emsp;&emsp; 在spring的配置文件中使用Bean标签, 只配置id个class属性
```xml
<bean id="Myclass" class="com.wsx.spring.Myclass"></bean>
```
## 使用某个类中的方法创建
&emsp;&emsp; 加入一个方法
```xml
<bean id="Myfactory" factory-bean="com.wsx.spring.Myfactory"
    factory-method="function"></bean>
```

## 使用类的静态方法创建
```xml
<bean id="Myfactory" class="com.wsx.spring.Myfactory" 
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
<bean id="Myclass" class="com.wsx.spring.Myclass" 
    scope="singleton" init-method="init" 
    destory-method="destory"></bean>
```
### 多例
&emsp;&emsp; 当我们使用的时候spring为我们创建，当我们一直使用，对象就一直活着，对象等着被垃圾回收机制删掉

## sprint的依赖注入
&emsp;&emsp; dependency injection 
&emsp;&emsp; IOC是降低程序之间的依赖关系的，我们把依赖关系交给spring维护，依赖关系的维护就叫做依赖注入
&emsp;&emsp; 注入的类型 基本类型和Sring、 bean类型、集合类型
&emsp;&emsp; 注入的方法 构造函数、set、注解

### 构造函数注入
&emsp;&emsp; 使用constructor-arg标签
#### type标签
&emsp;&emsp; 我们很容易想到
```xml
<bean id="Myclass" class="com.wsx.spring.Myclass">
    <constructor-arg type="java.lang.String" value="wsx"></constructor-arg>
</bean>
```

#### index 标签
&emsp;&emsp; 使用下标，位置从0开始
```xml
<bean id="Myclass" class="com.wsx.spring.Myclass">
    <constructor-arg index="0" value="wsx"></constructor-arg>
</bean>
```
#### name 标签
&emsp;&emsp; 使用参数的名称
```xml
<bean id="Myclass" class="com.wsx.spring.Myclass">
    <constructor-arg name="name" value="wsx"></constructor-arg>
</bean>
```
#### 使用ref
&emsp;&emsp; 使用其他的bean
```xml
<bean id="Myclass" class="com.wsx.spring.Myclass">
    <constructor-arg name="Myobj" ref="myobj"></constructor-arg>
</bean>
```

### set方法注入
&emsp;&emsp; property标签
```xml
<bean id="Myclass" class="com.wsx.spring.Myclass">
    <property name="name" value="wsx"></property>
    <property name="Myobj" ref="myobj"></property>
</bean>
```

### 构造函数注入和set方法注入
&emsp;&emsp; set注入可以有选择性地注入，构造函数强制了必要的数据