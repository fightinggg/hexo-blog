---
date: 2020-04-24 22:46:52
updated: 2020-04-24 22:46:52
---

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
<!-- more -->
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

# 前端传入参数
为了避免麻烦，请写上@RequestParam
```java
    @RequestMapping("/user")
    public String user(@RequestParam("name") String name, Model model){
        model.addAttribute("msg",name);
        return "hello";
    }
```
然后访问下面这个，显然成功了
http://localhost:8080/annotation_war_exploded/user?name=hi

# 前端传入对象
SpringMVC回去匹配对象的字段,你的参数必须和对象的字段名保持一致

# Model、ModelMap、LinkedHashMap
Model 只有几个方法储存数据，简化了新手对于model对象的操作和理解
ModelMap继承了LinkedMap，
ModelAndView 可以在储存数据的同时，设置返回的逻辑视图(几乎不用)

# 乱码配置
在web.xml中配置下面的过滤器, 然后在tomcat的配置文件中查看tomcat是否配置UTF-8
千万要注意，下面的/ 一定要改为/\*
```xml
    <filter>
        <filter-name>encoding</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>utf-8</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>encoding</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

```