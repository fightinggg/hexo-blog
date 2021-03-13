---
mathjax: true
---

# 如何编写
## 理清依赖
## 自动配置
@Configuration 指定这个是配置类
@ConditionalOnxxx 在某些条件下才生效
@AutoConfigureAfter 指定自动配置类的顺序
@Bean 给IOC加组件
@ConfiguretionProperties 结合相关的xxxProperties配置类来绑定配置
@EnableConfigurationProperties 让xxxProperties生效加入到容器中
讲自动配置类配置在META-INF/spring.factories中

<!-- more -->

# 自动配置设置
启动器只做依赖导入，自动配置专门用一个模块来写，让启动器依赖自动配置，别人就只需要引入启动器即可

# 开始操作
先创建空工程，在里面创建两个modules，一个是空的maven，另一个是空的springboot

# maven工程
导入一个依赖就可以了
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>hello-spring-boot-starter</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>hello-spring-boot-starter-autoconfigure</artifactId>
            <version>0.0.1-SNAPSHOT</version>
        </dependency>
    </dependencies>

</project>
```
# springboot自动配置
给他多删些东西
```xml

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.2.6.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.example</groupId>
	<artifactId>hello-spring-boot-starter-autoconfigure</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>hello-spring-boot-starter-autoconfigure</name>
	<description>Demo project for Spring Boot</description>

	<properties>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>
	</dependencies>

</project>
```

# 增加配置类
配置类会被放入到容器中
```java
package com.wsx.starter;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "wsx.hello")
public class HelloProperties {
    String prefix;
    String suffix;

    public String getPrefix() {
        return prefix;
    }

    public String getSuffix() {
        return suffix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public void setSuffix(String suffix) {
        this.suffix = suffix;
    }
}
```

# 增加service类
service借助配置提供函数服务
```java

package com.wsx.starter;

import org.springframework.beans.factory.annotation.Autowired;

public class HelloService {
    HelloProperties helloProperties;

    public String sayHello(String name) {
        return helloProperties.getPrefix() + name + helloProperties.getSuffix();
    }

    public void setHelloProperties(HelloProperties helloProperties) {
        this.helloProperties = helloProperties;
    }
}
```

# 增加自动配置类
自动配置类从IOC容器中取出配置类，绑定并注入service类提供服务
```java
package com.wsx.starter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnWebApplication
@EnableConfigurationProperties(HelloProperties.class)
public class HelloServiceAutoConfigueation {
    @Autowired
    HelloProperties helloProperties;
    @Bean
    public HelloService helloService(){
        HelloService helloService = new HelloService();
        helloService.setHelloProperties(helloProperties);
        return helloService;
    }
}

```

# 最后增加spring.factories
把自动配置类交给springboot
```factories
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.wsx.starter.HelloServiceAutoConfigueation
```

# 打包
先打包starter-autocinfigure，然后打包starter

# 测试
新建项目，导入依赖，创建controller
```java
package com.wsx.springbootstartertest.controller;

import com.wsx.starter.HelloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MyController {
    @Autowired
    HelloService helloService;

    @ResponseBody
    @GetMapping("/hello")
    public String hello() {
        return helloService.sayHello("haha! ");
    }

}
```
编写配置文件
```properties
wsx.hello.prefix=hello prefix
wsx.hello.suffix=hello suffix
```
测试即可