---
date: 2020-04-26 22:19:05
updated: 2020-04-26 22:19:05
---


# json用起来
- 导入json
- 配置json
- 新建对象
- 转化为json

```xml
 <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.5.2</version>
 </dependency>
```
```xml
 <!--解决json 乱码配置-->
    <mvc:annotation-driven>
        <mvc:message-converters register-defaults="true">
            <bean class="org.springframework.http.converter.StringHttpMessageConverter">
               <constructor-arg value="UTF-8"/>
            </bean>
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
                <property name="objectMapper">
                    <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean">
                        <property name="failOnEmptyBeans" value="false"/>
                    </bean>
                </property>
            </bean>
        </mvc:message-converters>
    </mvc:annotation-driven>
```
```java
    @ResponseBody
    @RequestMapping("/json1")
    public String json1() throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(
                new node(1, 2L, "hello"));
    }
```

# fastjson用起来
```xml
      <!-- https://mvnrepository.com/artifact/com.alibaba/fastjson -->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.68</version>
        </dependency>
```
```java

    @ResponseBody
    @RequestMapping("/json2")
    public String json2() {
        return JSON.toJSONString(new node(1, 2L, "hello fastjson 你好"));
    }

```