---
date: 2020-04-21 12:18:20
updated: 2020-04-21 12:18:20
mathjax: true
---


## 国际化
- 编辑国际化配置文件
- 使用ResourceBundleMessageSource管理国际化资源文件
- 在页面使用fmt:message取出国际化内容
<!-- more -->
### 创建resources/i18n
然后创建login_zh_CN.properties 选择Resouerce Bundle
SpringBoot自动创建了管理国际化资源文件的组件
```java
@Configuration(proxyBeanMethods = false)
@ConditionalOnMissingBean(name = AbstractApplicationContext.MESSAGE_SOURCE_BEAN_NAME, search = SearchStrategy.CURRENT)
@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE)
@Conditional(ResourceBundleCondition.class)
@EnableConfigurationProperties
public class MessageSourceAutoConfiguration {

	private static final Resource[] NO_RESOURCES = {};

	@Bean
	@ConfigurationProperties(prefix = "spring.messages")
	public MessageSourceProperties messageSourceProperties() {
		return new MessageSourceProperties();
	}

	@Bean
	public MessageSource messageSource(MessageSourceProperties properties) {
		ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
		if (StringUtils.hasText(properties.getBasename())) {
			messageSource.setBasenames(StringUtils
					.commaDelimitedListToStringArray(StringUtils.trimAllWhitespace(properties.getBasename())));
		}
		if (properties.getEncoding() != null) {
			messageSource.setDefaultEncoding(properties.getEncoding().name());
		}
		messageSource.setFallbackToSystemLocale(properties.isFallbackToSystemLocale());
		Duration cacheDuration = properties.getCacheDuration();
		if (cacheDuration != null) {
			messageSource.setCacheMillis(cacheDuration.toMillis());
		}
		messageSource.setAlwaysUseMessageFormat(properties.isAlwaysUseMessageFormat());
		messageSource.setUseCodeAsDefaultMessage(properties.isUseCodeAsDefaultMessage());
		return messageSource;
	}
```
```java
/**
 * Configuration properties for Message Source.
 *
 * @author Stephane Nicoll
 * @author Kedar Joshi
 * @since 2.0.0
 * /
public class MessageSourceProperties {

	/**
	 * Comma-separated list of basenames (essentially a fully-qualified classpath
	 * location), each following the ResourceBundle convention with relaxed support for
	 * slash based locations. If it doesn't contain a package qualifier (such as
	 * "org.mypackage"), it will be resolved from the classpath root.
	 */
	private String basename = "messages";

```
```properties
spring.messages.basename = i18n.login
```
### thymeleaf 取国际化信息
使用#{}
```html
<h1 class="..." th:text="#{login.tip}">Please sign in</h1>
```
### 解决乱码
setting - editor - fileEncoding - utf8 - 自动转阿斯克码
### 测试
在浏览器中选择浏览器默认的语言就可以了,即他可以根据浏览器的语言信息设置语言了
### 如何实现点按钮实现不同语言呢
#### 国际化原理
locale: LocaleResolver
根据请求头的区域信息来进行国际化
```java
		@Bean
		@ConditionalOnMissingBean
		@ConditionalOnProperty(prefix = "spring.mvc", name = "locale")
		public LocaleResolver localeResolver() {
			if (this.mvcProperties.getLocaleResolver() == WebMvcProperties.LocaleResolver.FIXED) {
				return new FixedLocaleResolver(this.mvcProperties.getLocale());
			}
			AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();
			localeResolver.setDefaultLocale(this.mvcProperties.getLocale());
			return localeResolver;
		}

```
```java

	@Override
	public Locale resolveLocale(HttpServletRequest request) {
		Locale defaultLocale = getDefaultLocale();
		if (defaultLocale != null && request.getHeader("Accept-Language") == null) {
			return defaultLocale;
		}
		Locale requestLocale = request.getLocale();
		List<Locale> supportedLocales = getSupportedLocales();
		if (supportedLocales.isEmpty() || supportedLocales.contains(requestLocale)) {
			return requestLocale;
		}
		Locale supportedLocale = findSupportedLocale(request, supportedLocales);
		if (supportedLocale != null) {
			return supportedLocale;
		}
		return (defaultLocale != null ? defaultLocale : requestLocale);
	}
```
先写个链接把区域信息加上去
```html
<a class="..." th:href="@{/index.html(l='zh_CN')}">中文</a>
<a class="..." th:href="@{/index.html(l='en_US')}">English</a>
```
然后自己实现区域信息解析器
```java
    @Bean
    public LocaleResolver localeResolver(){
        return new MyLocaleResolver();
    }
```
```java
package com.wsx.springboothelloworld.component;

import org.springframework.cglib.core.Local;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.LocaleResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale;


public class MyLocaleResolver implements LocaleResolver {

    @Override
    public Locale resolveLocale(HttpServletRequest request) {
        String l = request.getParameter("l");
        if(!StringUtils.isEmpty(l)) {
            String[] split = l.split("_");
            return new Locale(split[0], split[1]);
        }
        return Locale.getDefault();
    }

    @Override
    public void setLocale(HttpServletRequest request, HttpServletResponse response, Locale locale) {

    }
}

```

处理post
```java
package com.wsx.springboothelloworld.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

public class LoginController {
    @RequestMapping(value="",method= RequestMethod.POST)
    public String login(){
        return "dashborad";
    }
}

```
简化写法
```java
package com.wsx.springboothelloworld.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


public class LoginController {
//    @RequestMapping(value="",method= RequestMethod.POST)
    @PostMapping("")
    public String login(@RequestParam("username") String username,
                        @RequestParam("password") String password){
        return "dashborad";
    }
}


```
如果成功就进入dashborad，否则就提示用户名密码错误， 考虑使用map实现
这一步后我们可能会碰到一些问题，这是缓存导致的，加入下面的配置
```properties
spring.thymeleaf.cache=false
```
然后ctrl+f9手动加载html到编译的文件中，这不必重新开启Spring了

做一个判断来决定标签是否生效
```html
<p style="color: red" th:text="${msg}" th:if="${not #strings.isEmpty(msg)}"></p>
```

表单重复提交问题。需要用重定向、视图、拦截器解决，重定向加视图能确保没有重复提交，但是会导致直接跳过登陆的问题，

### 拦截器
创建拦截器
```java
package com.wsx.springboothelloworld.component;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginHandlerInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Object loginUser = request.getSession().getAttribute("loginUser");
        if (loginUser == null) {
            request.setAttribute("msg","没有权限，请先登录");
            request.getRequestDispatcher("/index.html").forward(request,response);
            return false;
        } else {
            return true;
        }
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}

```
将登陆成功的用户放入seesion
```java
public class LoginController {
    //    @RequestMapping(value="",method= RequestMethod.POST)
    @PostMapping("")
    public String login(@RequestParam("username") String username,
                        @RequestParam("password") String password,
                        Map<String, Object> map,
                        HttpSession httpSession) {
        if (password.endsWith("123456")) {
            httpSession.setAttribute("loginUser", username);
            return "dashborad";
        } else {
            return "404";
        }
    }
}

```
springboot已经做好了静态资源，不用管他们，不会被拦截, 注意addPathPatterns.excludePathPatterns可以一直搞下去，拦截所有的页面，放行两个html
```java

    @Bean
    public WebMvcConfigurerAdapter webMvcConfigurerAdapter(){
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/wsx2").setViewName("templates_hello");
                registry.addViewController("/wsx3").setViewName("templates_hello");
            }

            @Override
            public void addInterceptors(InterceptorRegistry registry) {
                super.addInterceptors(registry);
                //
                registry.addInterceptor(new LoginHandlerInterceptor()).addPathPatterns("/**").excludePathPatterns("/index.html","/user/login");
            }
        };
    }
```