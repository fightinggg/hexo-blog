---
date: 2020-04-02 22:13:25
updated: 2020-04-02 22:13:25
---

# maven依赖管理
 maven工程可以帮助我们管理jar包的依赖，他有一个jar包仓库，这导致我们自己的项目会非常小。

# maven启动
```sh
mvn tomcat:run
```

# maven仓库启动
 先本地，然后私服，然后中央仓库

# Java代码
 核心代码+配置文件+测试代码+测试配置文件
## 传统项目
```dir
workspace
  src
  config
```

<!-- more -->

## maven项目
```dir
workspace
  src
    main
      java(核心代码)
      config(配置文件)
      webapp(css,js)
    test
      java
      config
```

## maven命令
```sh
mvn clean # 清除编译文件
mvn compile # 编译
mvn test # 编译+测试
mvn package # 编译+测试+打包
mvn install # 编译+测试+打包+放入本地仓库
```
# pom.xml
 自身信息，依赖的jar包信息，运行环境信息

# 依赖管理
 公司名,项目名,版本号
```xml
<dependency>
  <groupld>javax.servlet.jsp</groupld>
  <artifacid>jsp-api</artifactid>
  <version>2.0</version>
</dependency>
```

# maven生命周期(一键构建)
## 清理生命周期
 清除
## 默认生命周期
编译-测试-打包-安装-发布
## 站点生命周期
 用的不多

# 使用骨架
```sh
mvn archetype:generate
```

# 不使用骨架
```sh
mkdir src
cd src
mkdir -p main/java test/java main/resources test/resources
echo "<project>" >> pom.xml
echo "  <groupId>com.project</groupId>" >> pom.xml
echo "  <artifacId>project</artifacId>" >> pom.xml
echo "  <version>1.0-SNAPSHOT</version>" >> pom.xml
echo "</project>" >> pom.xml
cd ..
```





# 发布时加入源码

```xml
<build>
    <plugins>
        <plugin>
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
    </plugins>
</build>
```