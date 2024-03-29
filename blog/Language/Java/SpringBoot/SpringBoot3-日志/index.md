---
date: 2020-04-15 21:18:22
updated: 2020-04-15 21:18:22
---

# Springboot和日志
 考虑和jdbc和数据库驱动一样，我们抽象出一个日志的接口
## 常见的java日志
 JUL,JCL,JBoss-logging,logback,log4j,log4j2,slf4j
### Java抽象
 JCL,SLF4j,Jboss-logging
### Java实现
 Log4j,JUL,Log4j2,logback
### 怎么选择
选择SLF4j+Logback
<!-- more -->
### SpringBoot怎么搞？
 Spring选择了JUL，SpringBoot选择了SLF4j+Logback
## SLF4j使用
 调用日志抽象层的方法，而不是实现
```java
Logger logger = LoggerFactory.getLogger(?.class);
logger.info("hello world")
```
### log4j
 log4j出现的早，没想过会有slf4j的出现，那我们要怎么用它呢？实际上是实现了一个适配器，用适配器调用log4j，用slf4j调用适配器，这里是一个设计模式
### 遗留问题
 我们用了多个框架，这些框架有用了不同的日志系统，我们该怎么办？
#### 统一日志记录
 偷天换日，你趁框架不注意，把jar包换一下，如Commons loggingAPI就用jcl-over-slf4j.jar, 如log4jAPI就用log4j-over-slf4j.jar来替换，就可以了，这些jar其实调用了slf4j。
##### 具体操作
 先排除日志框架，然后用中间包替换原用的日志框架，最后导入slf4j其他的实现。
## SpringBoot和日志
```txt
spring-boot-starter-logging
logback-classic
3个狸猫包偷梁换柱
jul-to-slf4j
log4j-ober-slf4j
jcl-ober-slf4j
```
 Springboot给我们做好了偷梁换柱，所以我们在引入其他框架的时候一定要把这个框架的默认日志依赖移除掉。
## 使用日志
 springboot都集成了这些
```properties
logging.level.com.wsx.springboothelloworld = debug
logging.path= log
logging.pattern.console=%d{yyyy-MM-dd:HH:mm:ss.SSS} [%thread] %-5level %logger{50} -%msg%n
```
```java
    @Test
    void contextLoads() {
//        System.out.println(person);
        Logger logger = LoggerFactory.getLogger(getClass());
        logger.error("hi");
        logger.warn("hi");
        logger.info("info hi");
        logger.debug("debug hi");
        logger.trace("trace hi");
    }
```
 想用自己的配置文件直接把它放到resources文件夹下面就可以了，推荐使用xxx-spring.xml,
 比如你使用了logback.xml, 那么这个xml就直接被日志框架识别了，绕开了spring,如果你是用logback-spring.xml, 那么日志框架无法加载，有springboot接管，springboot就可以根据环境来安排不同的配置，在开发环境和非开发环境使用不同的配置。