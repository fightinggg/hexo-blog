---
date: 2020-04-16 12:19:20
updated: 2020-04-16 12:19:20
---


## 模版引擎
常见的模版引擎有JSP,Velocity,Freemarker,Thymeleaf
### SpringBoot推荐的Thymeleaf
```xml
        <!--        模版引擎-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
```
视频中说这个版本有点低，是2.16的
然鹅我用的SpringBoot2，已经是3.x了
修改版本号,这招估计学了有用,这个能覆盖版本
<!-- more -->
```xml
<properties>
  <thymeleaf.version>3.0.2.RELEASE</thymeleaf.version>
  <thymeleaf-layout-dialect.versoin>2.1.1</thymeleaf-layout-dialect.version>
</properties>
```
### Thymeleaf语法
还是去autoconfigure中找thymeleaf的ThymeleafAutoDConfigution,这里可以看到配置源码
```java

/**
 * Properties for Thymeleaf.
 *
 * @author Stephane Nicoll
 * @author Brian Clozel
 * @author Daniel Fernández
 * @author Kazuki Shimizu
 * @since 1.2.0
 */
@ConfigurationProperties(prefix = "spring.thymeleaf")
public class ThymeleafProperties {

    private static final Charset DEFAULT_ENCODING = StandardCharsets.UTF_8;

    public static final String DEFAULT_PREFIX = "classpath:/templates/";

    public static final String DEFAULT_SUFFIX = ".html";
```
只要我们吧HTML页面放在class:/templates/下，thymeleaf就可以渲染。 
继续修改我们的代码，注意这里不要用RestController注解，
```java
package com.wsx.springboothelloworld.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HelloController {
    @RequestMapping("/hello")
    @ResponseBody // 把这个类的所以方法返回给浏览器，转化为json数据
    public String hello() {
        return "hello world quick!";
    }

    @RequestMapping("/templates_hello")
    public String templates_hello() {
        return "templates_hello";
    }
}
```
然后在templates下创建一个templates_hello.html这样就能返回那个html了

#### 使用
[thymeleafspring.pdf](https://www.thymeleaf.org/doc/tutorials/3.0/thymeleafspring.pdf)
在3.1中找到如下片段
导入名称空间
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head><title>Good Thymes Virtual Grocery</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <link rel="stylesheet" type="text/css" media="all" href="../../css/gtvg.css" th:href="@{/css/gtvg.css}"/>
</head>
<body><p th:text="#{home.welcome}">Welcome to our grocery store!</p></body>
</html>
```
修改我们的Controller
```java
    @RequestMapping("/templates_hello")
    public String templates_hello(Map<String,Object> map) {
        map.put("hello","map.put(hello,hello)");
        return "templates_hello";
    }
```
我们这样写templates_hello.html,这里的text值得是改变当前div中的内容的
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head><title>Good Thymes Virtual Grocery</title>
</head>
<body>
    <h1>这个来自templates_hello.html</h1>
    <div th:text="${hello}"></div>
</body>
</html>
```
然后我们就得到了hello的内容
#### th
th:text改变div文本，th:id改变id，th:class改变class，th可以改变所有的属性，更多的信息查看官方文档10 Attribute Precedence
##### Fragment inclusion
片段包含，如jsp的include，有th:insert和th:replace
##### Fragment iterator
遍历，如jsp的forEach， 有th:each
##### Conditional evaluation
条件判断， 如jsp的if， 有th:if,th:unless,th:saitch,th:case,
##### 后边的还有很多，这里就不展开、
#### 表达式
参见文档4 Standard Experssion Syntax
文档我就不贴过来了。。挺清楚的，这个应该不是我目前的重点。