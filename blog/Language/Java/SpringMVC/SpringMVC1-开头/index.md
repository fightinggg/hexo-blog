---
date: 2020-04-23 14:06:32
updated: 2020-04-23 14:06:32
---

# SpringMVC
少写博客,多思考，多看官方文档, 那我就写一篇算了

**更新: 写一篇是不可能写一篇的，这辈子都不可能只写一篇**
<iframe src="//player.bilibili.com/player.html?aid=16169624&bvid=BV1Kx41177Dx&cid=26388147&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
# MVC
model(dao,service) + view(jsp) + controller(servlet)
## 实体类
我们的实体类可能有很多字段，但是前端传输的时候可能只会传输一两个数据过来，我们就没有必要吧前端传过来的数据封装成为一个实体类，这样很多字段都是空的，浪费资源，实际上我们会对pojo进行细分，分为vo、dto等，来表示实体类的一部分的字段
# 回顾jsp+servlet
## 创建项目
卧槽，还能直接创建一个空的maven项目，然后在其中创建子项目，惊呆了
maven-空骨架-name
导入公共依赖
<!-- more -->
```xml
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.2.5.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>jsp-api</artifactId>
            <version>2.2</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
        </dependency>
    </dependencies>
```
然后右键你的项目-new-module
nb nb nb
新建一个子项目以后，右键子项目，添加框架支持。
nb nb nb
然后做普通的servlet就可以了
在main.java中创建helloservlet， 然后继承httpservlet即可
然后配置servlet-name + servlet-class (我现在看到这个就觉得没有springboot的注解爽)

## MVC框架要完成的事情
将URL映射到java类或者java方法
封装用户提交的数据
处理请求-调用相关的业务处理-封装响应数据
将响应的数据进行渲染

# SpringMVC
多看官网
[官网](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html)


## SpringMVC的优点
轻量、简单、高效、兼容Spring、约定优于配置、功能强大

# 莫名其妙的开始
- 配置web.xml在其中注册DispatcherServlet
- 写springmvc-servlet.xml 添加前后缀映射
- 写controller，然后就结束了
404？  注意缺少依赖， 你的项目有，但是编译到tomcat中就没有了，去看看target里面的东西。
[视频](https://www.bilibili.com/video/BV1aE41167Tu?p=5)

## 解释
- 用户请求发到DispatcherServlet
- DispatcherServlet调用HandlerMapping查找url对应的Handler
- DispatcherServlet调用执行Handler，得到model和view
- DispatcherServlrt配置视图解析器，返回视图


## 再写一遍
确定maven中有依赖，确定projectstructrue中的artifacts也有依赖
写web.xml , 注意/ 匹配的不包含jsp，/*是全部
```xml
<?xml version="1.0" encoding="utf-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
               http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!--    处理器、适配器、解析器-->
    <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"/>
    <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"/>
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

    <bean id="/hello" class="com.wsx.controller.HelloController"/>

</beans>
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">



    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springmvc-servlet.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

</web-app>
```
坑真多，我还碰到另外一个坑了，tomcat10也太秀了，居然是他的原因，换成tomcat9就不会404，我服了

还有第二个坑，我绝望了，项目名字不能叫做SpringMVC，你要是取这个名字，你的src目录就是没有颜色的，坑的一批，后面你创建多个moudle的时候，他就给你目录全搞灰色，这个问题只需要不把名字设为SpringMVC就可以了。
![](SpringMVC_name.png)
# 注解配置Controller
这里的19行是spring中的注解扫描，21行是不去处理静态资源，23行是配置处理器的适配器
```xml
<?xml version="1.0" encoding="utf-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
            http://www.springframework.org/schema/context
            http://www.springframework.org/schema/context/spring-context-4.0.xsd
            http://www.springframework.org/schema/aop
            http://www.springframework.org/schema/aop/spring-aop-4.0.xsd
            http://www.springframework.org/schema/tx
            http://www.springframework.org/schema/tx/spring-tx-4.0.xsd
            http://www.springframework.org/schema/mvc
            http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd">

    <context:component-scan base-package="com.wsx.controller"/>
    <!--    不处理静态资源-->
    <mvc:default-servlet-handler/>
    <!--    配置处理器和适配器-->
    <mvc:annotation-driven/>

    <!--    解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

</beans>
```
第7行是配置controller，第9行是映射url，

被controller注解配置的类，会被注入到IOC容器，它里面的方法如果有返回值是String，并且有具体页面可以跳转，就会被视图解析器解析

还可以直接在类上面注解RequestMapping，可以指定一个url，和下面的url拼接

```java
package com.wsx.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
    @RequestMapping("/hello")
    public String hello(Model model) {
        // 封装数据
        model.addAttribute("msg", "hello,Spring");
        // 返回视图
        return "hello";
    }
}

```
# RestFul风格
就是不再使用http://xxxx/?id=1&name=2 这种url
RestFul就是直接使用http://xxxx/1/2
```java
@GetMapping("/add/{a}/{b}")
public String test2(@PathVariable int a,@PathVariable String b,Model model){
  String res = a + b;
  model.addAttribute("msg","结果为"+res);
  return "test";
}
```