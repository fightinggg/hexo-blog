---
date: 2020-04-06 00:05:26
updated: 2020-04-06 00:05:26
---

# 注解配置IOC
 先总结一下之前的东西，曾经的XML配置，有标签id和class用于构造，有scope用来表示作用范围，有init-method和destroy-method用来表示生命周期，有property用来表示依赖注入

## 告知spring去扫描
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
<!-- more -->
## @Component
 讲当前类的对象存入spring的容器，有一个value表示id，如果不写的话会让当前类名的首字母变小写作为id
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
 他们和Component的作用一样，但是分别用于表现层、业务层、持久层当然你乱用也不要紧

## @Autowired
 自动注入，如果容器中有唯一一个bean对象，就可以成功注入,如果一个都没有就报错，如果有多个，先用类型匹配，再用变量名字(首字母变大些)去匹配，
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
 必须和@Autowired配合使用，在Qualifier的value中写类型就可以了，注意首字母小写。

## @Resource
 用name表示id
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
 注入基本类型和string类型 $(表达式)，需要有配置文件properties，详细的后面会讲

## @Scope
 写在类的上面， 常常取值singleton prototype

## @PreDestory
 指定destroy方法

## @PostConstruct
 写在init方法的上面


## spring中的新注解
### @Configuration
用于指定当前类是一个配置类，当配置类作为AnnotationConfigApplication的参数时候,可以不写，其他的配置类要写
### @ComponentScan
 用于指定spring在创建容器时要扫描的包

### @Bean
 把当前方法的返回值作为bean对象存入spring的ioc容器中 ，属性为name表示ioc容器中的键，当我们使用注解配置方法的时候，如果方法有参数，spring会去容器中寻找，和Autowired一样
```java
@Configuration
public class MyAppConfig{
  @Bean
  public HelloService helloService(){
    return new HelloService();
  }
}
```
### 现在你可以删xml了
```java
ApplicationContext ac = new AnnotationConfigApplication(SpringConfiguration.class);
```

### @Import
 如果我们有多个配置类的时候，有很多做法，一是在使用AnnotationConfigApplication创建对象的时候把类都加进去，二是在主配置类的@ComponentScan中加入配置类(这个类需要使用@Configuration)，三是在主配置类中使用@Import直接导入

### @PropertySource
 还记得前面说的@Value注解吗，那里需要一个properties配置文件，这里我们在主类中使用PropertySource就可以指定properties配置文件了
```
@PropertySource(classpath:jdbconfig.properties)
```

## 总结
 没有选择以公司为主，全xml配置复杂，全注解也不太好，所以xml+注解更方便，自己写的类用注解，导入的类用xml