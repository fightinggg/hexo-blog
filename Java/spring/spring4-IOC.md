---
title: spring4-XML配置IOC
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





## XML配置IOC
## 注解配置IOC
## 依赖注入

# spring整合Junit


# AOP
## account案例
&emsp;&emsp; 我们有一个转账方法: 根据名称找到账户，转出账户减钱，转入账户加钱，更新转出账户，更新转入账户，这个方法没有事务的控制，可能出现问题
## 案例问题
48ok
## 动态代理
## 动态代理的另一种实现方式
## 解决案例问题
## AOP的概念
## srping中的AOP
## spring中AOP的配置
 





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
# 使用默认构造函数创建Bean
&emsp;&emsp; 在spring的配置文件中使用Bean标签, 只配置id个class属性
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="myclass" class="com.wsx.spring.Myclass"></bean>
</beans>
```

<!-- more -->
# 使用某个类中的方法创建
&emsp;&emsp; 加入一个方法
```xml
<bean id="myfactory" factory-bean="com.wsx.spring.Myfactory"
    factory-method="function"></bean>
```

# 使用类的静态方法创建
```xml
<bean id="myfactory" class="com.wsx.spring.Myfactory" 
    factory-method="function"></bean>
```

# Bean的作用范围
- singleton 单例(默认值)
- prototype 多例
- request web应用的请求范围
- session web应用的会话范围
- global-session 集群环境的会话范围，一个集群只有一个全局会话

# Bean的生命周期
## 单例
&emsp;&emsp; 当容器创建对象出生，当容器存在，对象活着，当容器销毁，对象消亡
&emsp;&emsp; init-method 是创建以后调用的， destory-method是销毁之前调用的的
```xml
<bean id="myclass" class="com.wsx.spring.Myclass" 
    scope="singleton" init-method="init" 
    destory-method="destory"></bean>
```
## 多例
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
<bean id="myclass" class="com.wsx.spring.Myclass">
    <constructor-arg type="java.lang.String" value="wsx"></constructor-arg>
</bean>
```

#### index 标签
&emsp;&emsp; 使用下标，位置从0开始
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <constructor-arg index="0" value="wsx"></constructor-arg>
</bean>
```
#### name 标签
&emsp;&emsp; 使用参数的名称
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <constructor-arg name="name" value="wsx"></constructor-arg>
</bean>
```
#### 使用ref
&emsp;&emsp; 使用其他的bean
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <constructor-arg name="myobj" ref="myobj"></constructor-arg>
</bean>
```

### set方法注入
&emsp;&emsp; property标签
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <property name="name" value="wsx"></property>
    <property name="myobj" ref="myobj"></property>
</bean>
```

### 构造函数注入和set方法注入
&emsp;&emsp; set注入可以有选择性地注入，构造函数强制了必要的数据

### 集合的注入
&emsp;&esmp; 当我们碰到集合的时候，使用ref就不合适了，我们发现property内部还有标签
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <property name="mylist">
        <list>
            <value>1</value>
            <value>2</value>
            <value>3</value>
            <value>4</value>
            <value>5</value>
        </list>
    </property>
</bean>
```
&emsp;&emsp; 注意上面的<list> 我们甚至可以使用其他的例如<set> <array>
&emsp;&emsp; 同理<map> 和<prop>也可以互换

# 注解IOC 
&emsp;&emsp; 先总结一下之前的东西，曾经的XML配置，有标签id和class用于构造，有scope用来表示作用范围，有init-method和destroy-method用来表示生命周期，有property用来表示依赖注入

# 告知spring去扫描
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
            http://www.springframework.org/schema/context
            http://www.springframework.org/schema/context/spring-context-4.0.xsd
            http://www.springframework.org/schema/aop
            http://www.springframework.org/schema/aop/spring-aop-4.0.xsd
            http://www.springframework.org/schema/tx
            http://www.springframework.org/schema/tx/spring-tx-4.0.xsd">
    <context:component-scan base-package="com.wsx.spring"></context:component-scan>
</beans>
```

## @Component
&emsp;&emsp; 讲当前类的对象存入spring的容器，有一个value表示id，如果不写的话会让当前类名的首字母变小写作为id
```java
@Component(value = "myclass")
public class Myclass {
    void function(){
        System.out.println("hello");
    }
}
```
```java
@Component("myclass")
public class Myclass {
    void function(){
        System.out.println("hello");
    }
}
```
```java
@Component
public class Myclass {
    void function(){
        System.out.println("hello");
    }
}
```

## @Controller @Service @Repository
&emsp;&emsp; 他们和Component的作用一样，但是分别用于表现层、业务层、持久层当然你乱用也不要紧

## @Autowired
&emsp;&emsp; 自动注入，如果容器中有唯一一个bean对象，就可以成功注入,如果一个都没有就报错，如果有多个，先用类型匹配，再用变量名字(首字母变大些)去匹配，
```java
@Component
class Node{
    void show(){
        System.out.println("Node");
    }
}

@Component
public class Myclass {
    @Autowired
    private Node node=null;
    void nodeShow(){
        node.show();
    }
    void function(){
        System.out.println("hello");
    }
}
```

## @Qualifier
&emsp;&emsp; 必须和@Autowired配合使用，在Qualifier的value中写类型就可以了，注意首字母小写。

## @Resource 
&emsp;&emsp; 用name表示id
```java
@Component
class Node{
    void show(){
        System.out.println("Node");
    }
}


@Component
public class Myclass {
    @Resource(name = "node")
    private Node node=null;
    void nodeShow(){
        node.show();
    }
    void function(){
        System.out.println("hello");
    }
}
```

## @Value
&emsp;&emsp; 注入基本类型和string类型 $(表达式)，需要有配置文件properties，详细的后面会讲

## @Scope
&emsp;&emsp; 写在类的上面， 常常取值singleton prototype

## @PreDestory
&emsp;&emsp; 指定destroy方法

## @PostConstruct
&emsp;&emsp; 写在init方法的上面


# spring中的新注解
## @Configuration
&emsp;&emsp;用于指定当前类是一个配置类，当配置类作为AnnotationConfigApplication的参数时候,可以不写，其他的配置类要写
## @ComponentScan
&emsp;&emsp; 用于指定spring在创建容器时要扫描的包

## @Bean
&emsp;&emsp; 把当前方法的返回值作为bean对象存入spring的ioc容器中 ，属性为name表示ioc容器中的键，当我们使用注解配置方法的时候，如果方法有参数，spring会去容器中寻找，和Autowired一样

## 现在你可以删xml了
```java
ApplicationContext ac = new AnnotationConfigApplication(SpringConfiguration.class);
```

## @Import
&emsp;&emsp; 如果我们有多个配置类的时候，有很多做法，一是在使用AnnotationConfigApplication创建对象的时候把类都加进去，二是在主配置类的@ComponentScan中加入配置类(这个类需要使用@Configuration)，三是在主配置类中使用@Import直接导入 

## @PropertySource
&emsp;&emsp; 还记得前面说的@Value注解吗，那里需要一个properties配置文件，这里我们在主类中使用PropertySource就可以指定properties配置文件了
```
@PropertySource(classpath:jdbconfig.properties)
```

## 总结
&emsp;&emsp; 没有选择以公司为主，全xml配置复杂，全注解也不太好，所以xml+注解更方便，自己写的类用注解，导入的类用xml



################## spring整合junit
# @RunWith
&emsp;&emsp; 我们需要切换junit的main
# @ContextConfiguration
&emsp;&emsp; 指定配置类或者配置文件
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>4.3.8.RELEASE</version>
</dependency>
```
```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Springconfig.class)
public class MainTest {
    @Autowired
    private Main m = null;
}
```
```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations= "classpath:bean.xml")
public class MainTest {
    @Autowired
    private Main m = null;
}
```



