---
date: 2020-11-03 00:00:00
updated: 2020-11-03 00:00:00
typora-root-url: ..\..
---


### Aware

#### BeanNameAware

beanNameAware可以获得容器中Bean的名称，作用于每一个Bean。当bean被创建的时候设置他的名字，在基本properties填充完成以后，init调用前执行

> 摘自： spring-beans:5.3.4 org.springframework.beans.factory.BeanNameAware
>
> Set the name of the bean in the bean factory that created this bean. <p>Invoked after population of normal bean properties but before an init callback such as {@link InitializingBean#afterPropertiesSet()} or a custom init-method.

```java
package com.example.demo;

import org.springframework.beans.factory.BeanNameAware;
import org.springframework.stereotype.Component;

@Component
public class BeanNameAwareDemo implements BeanNameAware {
    @Override
    public void setBeanName(String name) {
        System.out.println(name);
    }
}
```
<!-- more -->
输出: 

```txt
beanNameAwareDemo
```



#### BeanFactoryAware

 注入beanFactory

```java
package com.example.demo;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.stereotype.Component;

@Component
public class BeanFactoryAwareDemo implements BeanFactoryAware {
    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        System.out.println(beanFactory);
    }
}
```

#### ApplicationContextAware

类比beanFactory

```java
package com.example.demo;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class ApplicationContextAwareDemo implements ApplicationContextAware {
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        System.out.println(applicationContext);
    }
}
```

#### MessageSourceAware

这是使用国际化用到的

```java
package com.example.demo;

import java.util.Locale;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceAware;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class MessageSourceAwareDemo implements MessageSourceAware {
    @Override
    public void setMessageSource(MessageSource messageSource) {
        String hello = messageSource.getMessage("hello", null, Locale.CHINA);
        log.info(hello);
    }
}
```

```txt
2021-03-05 13:36:38.263  INFO 17836 --- [           main] com.example.demo.MessageSourceAwareDemo  : 你好呀小老弟
```

#### ApplicationEventPublisherAware

用于发布事件

```java
package com.example.demo;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.stereotype.Component;

@Component
public class ApplicationEventPublisherAwareDemo implements ApplicationEventPublisherAware {
    @Override
    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        applicationEventPublisher.publishEvent("hi");
    }
}
```

#### ResourceLoaderAware

用于获取静态文件内容

```java
package com.example.demo;

import java.io.IOException;
import java.io.InputStream;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.context.ResourceLoaderAware;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class ResourceLoaderAwareDemo implements ResourceLoaderAware {
    @Override
    public void setResourceLoader(ResourceLoader resourceLoader) {
        try {
            InputStream inputStream =
                    resourceLoader.getResource("classpath:/messages_zh_CN.properties").getInputStream();
            IOUtils.readLines(inputStream).forEach(log::info);
        } catch (IOException ioException) {
            log.error("", ioException);
        }
    }
}
```

```txt
2021-03-05 13:56:08.067  INFO 17700 --- [           main] com.example.demo.MessageSourceAwareDemo  : 你好呀小老弟
```