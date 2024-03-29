---
date: 2020-04-28 21:34:47
updated: 2020-04-28 21:34:47
---

# 创建项目
选择MySQL+JDBC+Web
# 链接数据库
```yml
spring:
  datasource:
    username: root
    password: 123456
    url: jdbc:mysql://localhost:3306/jdbc
    driver-class-name: com.mysql.jdbc.Driver
```
<!-- more -->
```java
package com.wsx.study.springboot.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@SpringBootTest
class DemoApplicationTests {

    @Autowired
    DataSource dataSource;

    @Test
    void contextLoads() throws SQLException {
        System.out.println(dataSource.getClass());
        Connection connection = dataSource.getConnection();
        System.out.println(connection);
        connection.close();
    }
}
```

# 数据源自动配置原理
DataSourceConfiguration,根据配置创建数据源，默认使用Tomcat连接池
SpringBoot支持很多数据源类型，甚至可以自定义,利用反射绑定数据源，并绑定相关属性

## 配置druid
```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid-spring-boot-starter</artifactId>
    <version>1.1.22</version>
</dependency>
```
然后再application.yml中配置这个, 就可以用localhost:8080/druid/来访问来
```yml
spring:
  # 配置数据库信息
  datasource:
    druid:
      # 数据源配置
      username: root
      password: 123456
      url: jdbc:mysql://127.0.0.1:3306/debug?serverTimezone=GMT%2B8&characterEncoding=UTF-8&useSSL=false  # 设置时区
      driver-class-name: com.mysql.cj.jdbc.Driver
      # 初始化 最小 最大
      initial-size: 5
      min-idle: 5
      max-active: 20
      # 配置获取连接等待超时的时间
      max-wait: 60000
      # 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒
      time-between-eviction-runs-millis: 60000
      # 配置一个连接在池中最小生存的时间，单位是毫秒
      min-evictable-idle-time-millis: 300000
      validation-query: SELECT 'x'
      test-while-idle: true
      test-on-borrow: false
      test-on-return: false
      # 打开PSCache，并且指定每个连接上PSCache的大小
      poolPreparedStatements: true
      maxPoolPreparedStatementPerConnectionSize: 20
      # 配置多个英文逗号分隔
      filters: stat,wall
      # WebStatFilter配置，说明请参考Druid Wiki，配置_配置WebStatFilter
      # 是否启用StatFilter默认值true
      web-stat-filter:
        enabled: true
        url-pattern: /*
        exclusions: "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*"
        session-stat-enable: false
        session-stat-max-count: 1000
        principal-cookie-name: admin
        principal-session-name: admin
        profile-enable: true
      # 根据配置中的url-pattern来访问内置监控页面，如果是上面的配置，内置监控页面的首页是/druid/index.html
      # http://loacalhsot:8081/druid
      stat-view-servlet:
        enabled: true
        url-pattern: /druid/*  # 监控页面访问路径
        # 允许清空统计数据
        reset-enable: true
        login-username: admin
        login-password: 123456
          # StatViewSerlvet展示出来的监控信息比较敏感，是系统运行的内部情况，如果你需要做访问控制，可以配置allow和deny这两个参数
          # deny优先于allow，如果在deny列表中，就算在allow列表中，也会被拒绝。如果allow没有配置或者为空，则允许所有访问
          # 配置的格式
          # <IP>
          # 或者<IP>/<SUB_NET_MASK_size>其中128.242.127.1/24
        # 24表示，前面24位是子网掩码，比对的时候，前面24位相同就匹配,不支持IPV6。
        allow:
        deny:
```

# 整合MyBatis
建表+逆向工程
SpringBoot就自动帮我们把Mapper放到IOC中了
```java
package com.wsx.demo.dao;


import com.wsx.demo.pojo.Table1;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface Table1Mapper {
    @Select("select * from table1")
    public List<Table1> selectAll();
}
```
当然这里也支持批量导入
```java

@SpringBootApplication
@MapperScan("com.wsx.demo.dao")
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
```

# 整合JPA
最后是最强的。。。
新建项目的时候选择JPA
JPA你甚至不用自己写sql？好强大
```yml
spring:
  datasource:
    url: jdbc:mysql://localhost/debug
    username: root
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```
```java
package com.wsx.demo.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String lastName;
    String email;
}
```
```java

package com.wsx.demo.repository;

import com.wsx.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
```
```java

package com.wsx.demo.controller;

import com.wsx.demo.entity.User;
import com.wsx.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Optional;

@Controller
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/user/select/{id}")
    @ResponseBody
    public Optional<User> selectUser(@PathVariable("id") Integer id) {
        return userRepository.findById(id);
    }

    @GetMapping("/user/insert")
    @ResponseBody
    public User insertUser(User user) {  
        return userRepository.save(user);
    }
}
```



[SpringBoot整合Druid](https://www.cnblogs.com/freephp/p/11688387.html)