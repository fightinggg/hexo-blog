---
date: 2020-05-01 13:21:28
updated: 2020-05-01 13:21:28
---

# 架构
约定 > 配置 > 编码
先写pom,xml,yml,sql,
然后写dao,写Mapper,Service,Controller

# 起步
用上面的方法建立一个Restful风格的服务端生产者，然后我们准备建立消费者，这里的消费者就不应该有Service了，你只需要使用RestTemplate即可

# RestTemplate
是spring提供的专门针对rest客户端的高度抽象模版，
```java
@Configuration
public class ConfigBean{
  @Bean
  public RestTemplate getRestTemplate(){
    return new RestTemplate();
  }
}
```