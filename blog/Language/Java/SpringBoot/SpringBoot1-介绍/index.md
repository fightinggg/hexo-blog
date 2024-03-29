---
date: 2020-04-15 21:18:12
updated: 2020-04-15 21:18:12
---



# 微服务
 讲大应用拆分成多个小应用

# springboot介绍
## 创建maven工程
## 导入依赖
```xml
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>1.5.9.RELEASE</version>
    </parent>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
```
<!-- more -->
## 写主类
```java
package com.wsx.springbootstudy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/**
 * @SpringBootApplication 标注一个类，说明这个是SpringBoot应用
 */
@SpringBootApplication
public class HelloWorldMainApplication {
    public static void main(String[] args) {
        // 启动应用
        SpringApplication.run(HelloWorldMainApplication.class,args);
    }
}
```
## 写Controller
```java
package com.wsx.springbootstudy.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
    @ResponseBody
    @RequestMapping("/hello")
    public String hello(){
        return "Hello World!";
    }
}

```
## 登陆http://localhost:8080/hello
```HTML
Hello World!
```

## 部署我们的helloworld
```xml
    <build>
        <plugins>
            <!--            spring-boot打包-->
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```
 然后再maven中点击package,有如下输出
```
Building jar: /Users/s/Documents/untitled/target/untitled-1.0-SNAPSHOT.jar
```
 然后点击这个jar就开始跑了
 如果你想要关闭他就在终端中输入
```sh
ps -ef | grep /Users/s/Desktop/untitled-1.0-SNAPSHOT.jar
```
 然后看左边的进程号
```sh
kill -9 pid
```


# 分析
## pom
 parent父项目,他管理springboot的所有依赖，又叫做springboot版本仲裁中心，以后我们导入依赖默认不需要添加版本号
```xml
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>1.5.9.RELEASE</version>
    </parent>
```
## spring-boot-starter-web
 spring-boot-starter 是spring-boot场景启动器，他帮我们导入了web模块正常运行所依赖的组件
 SpringBoot将所有的功能场景都抽取出来，做成一个starters启动器，只需要在项目中引入这些 starter，相关场景的所有依赖都会被导入进来，要什么功能就导入什么场景启动器。

## 主类
 @SpringBootApplication ，SpringBoot应用标注在某个类上说明这个类是SpringBoot的主配置类，SpringBoot就应该运行这个类的main方法来启动SpringBoot应用
### @SpringBootConfiguration
 Spring Boot 的配置类，标注在某个类上，表示这是一个SpringBoot的配置类
#### Configuration 
 配置类上来标识这个注解，配置类和配置文件差不多，用于注入，这是个spring的注解,
#### EnableAutoConfiguration
 开启自动配置，SpringBoot帮我们自动配置
##### @AutoConfigurationPackage
 自动配置包
###### @import(AutoConfigurationPackage.Registrar.class)
 Spring的注解@import，给容器中导入一个组件，导入的组件由AutoConfigurationPackage.Registrar.class 指定
 把主配置类的所在包的所有子包的所有组件扫描到Spring容器中
##### @import(EnableAutoConfigurationImportSelect.class)
 EnableAutoConfigurationImportSelect: 导入的选择性，讲所有需要导入的组件一全类名的方式返回，这些组件会被添加到容器中，最终会给容器中导入非常多的自动配置类***AutoConfiguration，就是导入场景所需要的组件。有了自动配置类，就免去了我们手动编写配置注入等功能组件的工作，
 SpringFactoryLoader.loadFactoryNames(EnableAutoConfiguration.class,classLoader); 从类路径下的META-INF/spring.factories中获取EnableAutoConfiguration指定的值,将这些值作为自动配置类导入到容器中，自动配置类就生效了，帮我们进行自动配置工作,以前我们需要自己配置的东西，自动配置类帮我们做了，都在spring-boot-autoconfigure下,见spring.factories和org.springframework.boot.autoconfigure

# SpringInitial
 idea中选择SpringInitial，点继续，选择Springweb，生成，然后加入下面的代码,就可以启动了
```java
package com.wsx.springboothelloworld.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@Controller
//@ResponseBody // 把这个类的所以方法返回给浏览器，转化为json数据
@RestController // 这一个顶上边两个
public class HelloController {
    @RequestMapping("/hello")
    public String hello(){
        return "hello world quick!";
    }
}
```
 resources中目录结构的static保存静态资源，如css、js、images，templates保存所以的模版页面(spring boot默认jar包使用嵌入式tomcat，默认不支持jsp)，但我们可以使用模版引擎(freemarker,thymeleaf), application.properties中放了springboot的默认配置文件，比如你想换web的端口
```properties
server.port=8081
```