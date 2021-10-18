---
date: 2020-12-06 00:00:00
updated: 2020-12-06 00:00:00
---


# JAVA

## IDEA

### Spring Boot 启动命令行太长

修改文件.idea/workspace.xml

```xml
  <component name="PropertiesComponent">
    <property name="dynamic.classpath" value="true" />
```
<!-- more -->
##  反编译

```sh
 # https://varaneckas.com/jad/
 wget https://varaneckas.com/jad/jad158e.linux.static.zip; \
 unzip jad158e.linux.static.zip
 jad xxx.class
 cat xxx.jad
```

## Java启动参数

### JVM参数



```sh
-ea
-Dhttp.proxyPort=12639
-Dhttp.proxyHost=127.0.0.1
-Dhttps.proxyPort=12639
-Dhttps.proxyHost=127.0.0.1
-Xmx400m # JVM最大内存
-Xms300m # JVM初始内存
-Xmn200m # 年轻代内存
-Xss128k # 线程堆栈
```

### Java参数

```
--server.port=80
--jasypt.encryptor.password=xxx
--spring.profiles.active=development
```

## Maven

```sh
docker run -it --rm \
	-v "$(pwd)":/usr/src/mymaven \
	-w /usr/src/mymaven \
	maven:3.3-jdk-8 \
	mvn clean install
```

```sh
# 发布
mvn clean javadoc:jar source:jar deploy
```

### 单元测试

```java
@Import(XxxServiceImpl.class)
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = TestRunner.class)
public class ScriptBizServiceTest {
    @Autowired
    XxxService xxxService;

    @MockBean
    XxxService xxxService;
}
```

```xml
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
```

### 源码上传插件

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-source-plugin</artifactId>
    <version>3.0.1</version>
    <configuration>
        <attach>true</attach>
    </configuration>
    <executions>
        <execution>
            <phase>compile</phase>
            <goals>
                <goal>jar</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

### 规范

#### 多仓库规范

https://maven.apache.org/guides/mini/guide-multiple-repositories.html



Remote repository URLs are queried in the following order for artifacts until one returns a valid result:

1. Global `settings.xml`
2. User `settings.xml`
3. Local POM
4. Parent POMs, recursively
5. Super POM

For each of these locations, the repositories within the profiles are queried first in the order outlined at [Introduction to build profiles](https://maven.apache.org/guides/introduction/introduction-to-profiles.html).

