---
date: 2020-03-31 23:19:56
updated: 2020-04-09 21:01:41
---

# Automic 
是一个原子类型包,其中包含了AtomicBoolean,AtomicInteger,AtomicLong等， 原子操作说是这样说的，然而并不是所有的物理机器都支持原子指令，所以不能保证不被阻塞，一般而言，采用的CAS+volatile+native的方法，避免synchronized的使用，如果不支持CAS那就上自旋锁了

<!-- more -->

# 接口

![](Automic/type.png)

![](Automic/Boolean.png)

![](Automic/Integer.png)



# log4j
## Maven依赖
```XML
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

## log4j.properties
```properties
log4j.rootLogger=all, stdout, logfile

<!--more-->

#日志输出位置为控制台
#（ConsoleAppender）控制台
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.err
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{yyyy-MM-dd HH\:mm\:ss} %l %F %p %m%n

#日志输出位置为文件
#（RollingFileAppender）
log4j.appender.logfile=org.apache.log4j.RollingFileAppender
#日志文件位置
log4j.appender.logfile.File=log/log.log
log4j.appender.logfile.layout=org.apache.log4j.PatternLayout
log4j.appender.logfile.Append = true
log4j.appender.logfile.MaxFileSize=1MB
log4j.appender.logfile.layout.ConversionPattern=%d{yyyy-MM-dd HH\:mm\:ss} %l %F %p %m%n
```

## 用法
```Java
package com.wsx;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class Test {
    public static void main(String[] args) {
        Logger logger = Logger.getLogger(Test.class);
        logger.info("info");
        logger.debug(" debug ");
        logger.debug(" debug ");
        logger.debug(" debug ");
        logger.debug(" debug ");
        logger.debug(" debug ");
        logger.debug(" debug ");
        logger.error(" error ");
        logger.error(" error ");
        logger.error(" error ");
    }
}
```

# SLF4J
 log的实现太多了，log4j,logBack,jdklog,以后想换怎么办呢？
 Simple Logging Facade for Java
 就像和JDBC一样，SLF4J把所有的日志框架连接起来


## 五个级别
 trace,debug,info,warn,error
 啥事不干，写下面的代码
```java
package com.wsx;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

public class Test {
    public static void main(String[] args) {
        Logger logger = LoggerFactory.getLogger(Test.class);
        logger.trace("trace");
        logger.debug("debug");
        logger.info("info");
        logger.warn("warn");
        logger.error("error");
    }
}
```
 得到了
```out
22:23:01.931 [main] DEBUG com.wsx.Slf4jStudy - debug
22:23:01.940 [main] INFO com.wsx.Slf4jStudy - info
22:23:01.941 [main] WARN com.wsx.Slf4jStudy - warn
22:23:01.941 [main] ERROR com.wsx.Slf4jStudy - error
```
## logback
 写一个logback.xml
 appender 后面是log的名字，再往后是输出位置：文件或者控制台
 level后面跟级别，表示输出哪些东西
```XML
<configuration>
    <!--
    1.起别名
    2.服务器上跑的项目多的时候可以好的区分
     -->
    <contextName>play_dice</contextName>
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <!-- 调整输出的格式 -->
        <encoder>
          <pattern>%date{HH:mm:ss.SSS} [%thread] %-5level %logger{35} - %msg%n</pattern>
        </encoder>
    </appender>
    <!--
    1.key:对应的是动态的文件名
    2.datePattern:是动态生成的时间格式
    -->
    <timestamp key="bySecond" datePattern="yyyyMMdd'T'HHmmss"/>

    <appender name="FILE" class="ch.qos.logback.core.FileAppender">
        <!-- 动态设置日志的文件名 -->
        <!--<file>D:\日志\log-${bySecond}.txt</file>-->
        <append>false</append><!-- 每次一更新就是新的 -->
        <encoder>
          <pattern>%date{HH:mm:ss.SSS} [%thread] %-5level %logger{35} - %msg%n</pattern>
        </encoder>
    </appender>
    <!-- 设置输出的等级 -->
    <root level="tarce">
        <appender-ref ref="STDOUT"/><!-- 输出到控制台 -->
        <appender-ref ref="FILE"/><!-- 输出到文件中 -->
    </root>
</configuration>
```
## 简化
 注释太烦了，我们给他全删掉，使用下面的vim指令
 \v代表字符模式，把所有的特殊字符看着特殊意义
 (.|\n)可以匹配所有的字符
 {-}是\*的非贪婪匹配
```
%s/\v\<!--(.|\n){-}--\>//g
```
 会到logback中
 %date是时间，%thread是线程，level是级别，-是左对齐，%logger指名字，%msg是日志输出 %n是换行

```XML
<configuration>
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%date{HH:mm:ss.SSS} [%thread] %-5level %logger{35} - %msg%n</pattern>
        </encoder>
    </appender>
    <timestamp key="bySecond" datePattern="yyyyMMdd'T'HHmmss"/>
    <appender name="FILE" class="ch.qos.logback.core.FileAppender">
        <append>false</append>
        <encoder>
            <pattern>%date{HH:mm:ss.SSS} [%thread] %-5level %logger{35} - %msg%n</pattern>
        </encoder>
    </appender>
    <root level="tarce">
        <appender-ref ref="STDOUT"/>
        <appender-ref ref="FILE"/>
    </root>
</configuration>
```

## 细节

```java
logger.info("hello {} {} {}","I","am","wsx");
```