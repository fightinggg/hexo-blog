---
date: 2020-04-28 15:49:04
updated: 2020-04-28 15:49:04
---

# 拦截器
拦截器是SpringMVC框架自己的，只用SpringMVC才能使用
拦截器只会拦截访问的控制方法，静态资源是不会拦截的

# 定义拦截器
实现HandlerInterceptor
其实只要使用preHandle就可以了，他返回true才执行，否则不执行
比如我们就可以在这里实现登陆请求
```java
package com.onlineStore.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
```

# 文件上传和下载
MultipartResolver
```xml
<bean id="multipartResolver"
    class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
    <!--上传文件的最大大小，单位为字节 --> 
    <property name="maxUploadSize" value="17367648787"></property>
     
    <!-- 上传文件的编码 -->
    <property name="defaultEncoding" value="UTF-8"></property>
</bean>
```

# 结束