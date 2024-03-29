---
date: 2020-04-15 21:18:18
updated: 2020-04-15 21:18:18
---

# springboot配置
## 配置文件
 配置文件的名字是固定的
### application.properties
### applicstion.yml
 YAML 是一个标记语言，不是一个标记语言
#### 标记语言
 以前的配置文件大多是xml文件，yaml以数据为中心，比json、xml等更适合做配置文件 
 这是yml
```yml
server:
  port: 8081
```
 这个是xml
```xml
<server>
    <port>8081</port>
</server>
```
<!-- more -->
### yml语法
#### 基本语法
 k:(空格)v 表示一对键值对
 用空格锁进来控制层级关系，只要左对齐就都是一个层级的，属性和值也是大小写敏感的
```yml
server:
  port: 8081
  path: /hello
```
#### 值的写法
##### 字面量： 普通的值、字符串、bool,
 字符串默认不用加上双引号和单引号
```yml
s1: 'a\nb'
s2: "a\nb"
```
 等加于下面等js
```js
{s1: 'a\\nb',s2: 'a\nb'}
```
##### 对象、map
 对象的写法
```yml
friends:
  lastName: zhangsan
  age: 20
```
 行内写法
```yml
friends: {lastName: zhangsan,age: 18}
```
##### 数组 list set
 用-表示数组中的元素
```yml
pets:
 - cat
 - dog
 - pig
```
 行内写法
```yml
pest: [cat,dog,pig]
```

### 配置文件注入
 @ConfigurationProperties 告诉springboot将本类中的所有属性和配置文件中相关的配置进行绑定， prefix = "person"： 配置文件中哪个下面的所有属性一一映射
 @Data 来自动生成tostring，@Component来把这个类放到容器中，@ConfigurationProperties来从配置文件注入数据
```java
@Data
@Component
@ConfigurationProperties(prefix = "person")
public class Person {
    private String lastName;
    private Integer age;
    private Boolean boss;
    private Date birth;

    private Map<String, Object> maps;
    private List<Object> lists;
    private Dog dog;
}
```
 Dog同理
```java
@Data
@Component
public class Dog {
    private String name;
    private Integer age;
}
```
 导入依赖
```xml
 <!--        导入配置文件处理器，配置文件进行绑定就会有提示-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
            <optional>true</optional>
        </dependency>
```
 开始测试
```java
@SpringBootTest
class SpringBootHelloworldApplicationTests {

    @Autowired
    Person person;

    @Test
    void contextLoads() {
        System.out.println(person);
    }

}
```
 我们看到输出
```sh
Person(lastName=zhangsan, age=18, boss=false, birth=Tue Dec 12 00:00:00 CST 2017, maps={k1=v1, k2=v2}, lists=[lisi, zhaoliu], dog=Dog(name=dogname, age=2))
```
 改写为properties
```properties
person.last-name=zhangsan
person.age=18
person.birth=2017/12/15
person.boss=false
person.maps.k1=v1
person.maps.k2=v2
person.lists=a,b,c
person.dog.name=dog
person.dog.age=15
```
### 注解注入
 详见@Value
 @Value("$(person.last-name)") 从环境变量和配置文件中获得值
 @Value("#{11*12*13}") 从表达式中获得值
 @Value("true") 

### @PropertySource和@ImportResource
 @PropertySource可以指定配置文件，还可以写数组加载多个配置文件，
 @ImportResource导入Spring的配置文件，让配置文件中的内容生效，即我们以前写的spring的那些东西springboot是不会识别的，必须通过ImportResource才能成功,springboot不推荐这个注解
 springboot推荐全注解形式，使用@Configuration,这个配置类就是来替代spring的配置文件的，当然这个就是spring的注解，然后在方法上加入@Bean注解就能吧这个方法的返回值注入到容器中，注意这里的都是spring中的注解
```java
@Configuration
public class MyAppConfig{
  @Bean
  public HelloService helloService(){
    return new HelloService();
  }
}
```

### 配置文件占位符
 ${random.value},${random.int},${random.long},${random.int[1024,65536]}表示随机数，${..}中间写之前配置的值可以取出来
```properties
person.last-name=zhangsan${random.uuid}
person.age=${random.int}
person.birth=2017/12/15
person.boss=false
person.maps.k1=v1
person.maps.k2=v2
person.lists=a,b,c
person.dog.name=${person.last-name}_dog
person.dog.age=15
```
### 多profile
 创建多个配置文件application-{profile}.properties/yml

#### 激活profile
 在主配置文件中写 spring.profile.active = dev, 就可以激活application-dev.properties

#### yml多文档块
 下面定义了三个文档块,并激活了第三个文档块
```
server:
  port: 8081
spring:
  profiles:
    action: prod

server:
  port: 8083
spring:
  profiles: dev

server:
  port: 8084
spring:
  profiles: prod
```
 用命令行激活
```sh
--spring.properties.active=dev
```
 用虚拟机参数激活
```sh
-Dspring.properties.active=dev
```
#### 配置文件加载顺序
1 file:./config/
2 file:./
3 classpath:/config
4 classpath:/
 从上到下，优先级从高到低，高优先级的会覆盖低优先级的内容，注意是覆盖，而不是看了高优先级的配置以后就不看低优先级的配置了，还可以通过命令行参数设置--spring.config.localtion指定配置文件路径,这里也是互补配置
#### 外部配置文件
 优先加载profile的，由外部到内部加载

#### 自动配置原理
 去查官方文档
 SpringBoot启动的时候加载主配置类，开启了自动配置功能@EnableAutoConfiguration ,利用EnableAutoConfigurationImportSelect导入组件，每一个xxxAutoConfiguration都是容器中的一个组件，都加入到容器中，用他们来做自动配置，每一个自动配置类进行自动配置功能
##### HttpEncodingAutoConfiguration
 根据当前不同的条件判断，决定当前这个配置类是否生效  
 Configuration 表明配置类
 EnableConfigurationProperties 启动指定类的ConfigurationProperties功能,到HttpProperties中看到这个类上有ConfigurationProperties
 ConditionalOnWebApplication Conditionalxx是spring中的注解，根据不同的条件，如果满足指定条件，整个配置类中的配置才会生效，这里判断当前应用是否为web应用
 ConditionalOnClass 判断当前项目中有没有这个类, 
 CharacterEncodingFilter SpringMVC中进行乱码解决的过滤器
 ConditionalOnProperties 判断配置文件中是否存在某个配置
```java
@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(HttpProperties.class)
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
@ConditionalOnClass(CharacterEncodingFilter.class)
@ConditionalOnProperty(prefix = "spring.http.encoding", value = "enabled", matchIfMissing = true)
public class HttpEncodingAutoConfiguration {
```
 所有在配置文件中能配置的属性都是在xxxProperties中封装着
```java
@ConfigurationProperties(prefix = "spring.http")
public class HttpProperties {
```
##### xxxAutoConfiguration 
 自动配置类
##### xxxProperties
 封装配置文件中相关属性

#### Condition

@Conditional|作用
-|-
@ConditionalOnjava|java版本是否符合要求
@ConditionalOnBean|容器中存在指定Bean
@ConditionalOnMissingBean|容器中不存在指定Bean
@ConditionalOnExpression|满足SpEL表达式
@ConditionalOnClass|系统中有指定的类
@ConditionalOnMissingClass|系统中没有指定的类
@ConditionalOnSingleCandidate|容器中只有一个指定的Bean，或者这个Bean是首选
@ConditionalOnProperty|系统中指定的属性是否有指定的值
@ConditionalOnResource|类路径下是否存在指定资源文件
@ConditionalOnWebApplication|当前项目为web项目
@ConditionalOnNotWebApplication|当前不是web项目
@ConditionalOnJndi|JNDI存在指定项

#### 自动配置生效
 只有在特定的条件下才能生效
 启用debug=true让控制台打印自动配置报告
```properties
debug=true
```