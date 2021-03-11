---
mathjax: true
---


# spring整合junit
## @RunWith
 我们需要切换junit的main
## @ContextConfiguration
 指定配置类或者配置文件
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>4.3.8.RELEASE</version>
</dependency>
```
<!-- more -->
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
