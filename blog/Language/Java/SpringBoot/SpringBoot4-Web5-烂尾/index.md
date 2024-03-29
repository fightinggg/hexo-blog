---
date: 2020-04-22 23:18:20
updated: 2020-04-22 23:18:20
---



## 需求 
### 员工列表
|普通CRUD|restfulCRUD
-|-|-
查询|getEmp|emp...GET
添加|addEmp?|emp...POST
修改|updateEmp?|emp/{id}...PUT
删除|deleteEmp?|emp/{id}...DELETE
<!-- more -->
### 架构
|请求URL|请求方式
-|-|-
查询所有员工|emps|GET
查询单个员工|emp/{id}|GET
来到添加页面|emp|GET
添加员工|emp|POST
来到修改页面|emp/{id}|GET
修改员工|emp|PUT
删除员工|emp/{id}|DELETE



修改|updateEmp?|emp/{id}...PUT
删除|deleteEmp?|emp/{id}...DELETE

```html
<footer th:fragment="copy">
hello
</footer>

<div th:insert="footer :: copy"></div>
<div th:replace="footer :: copy"></div>
<div th:include="footer :: copy"></div>
```
insert 是将整个元素插入到引用中
replace 是替换
include 是包含进去
```html
    <div th:fragment="topbar"> 这里测试 include replace 和insert</div>
```
```html
    <div id="include" th:include="~{templates_hello::topbar}">hi</div>
    <div id="replace" th:replace="templates_hello::topbar">hi</div>
    <div id="insert" th:insert="templates_hello::topbar">hai</div>
```
```html
    <div id="include"> 这里测试 include replace 和insert</div>
    <div> 这里测试 include replace 和insert</div>
    <div id="insert"><div> 这里测试 include replace 和insert</div></div>
```
挺前端的
## 错误响应
如何定制错误页面？
这个是ErrorMvcAutoConfiguration
```java
    @Bean
    @ConditionalOnMissingBean(value = ErrorAttributes.class, search = SearchStrategy.CURRENT)
    public DefaultErrorAttributes errorAttributes() {
        return new DefaultErrorAttributes(this.serverProperties.getError().isIncludeException());
    }

    @Bean
    @ConditionalOnMissingBean(value = ErrorController.class, search = SearchStrategy.CURRENT)
    public BasicErrorController basicErrorController(ErrorAttributes errorAttributes,
            ObjectProvider<ErrorViewResolver> errorViewResolvers) {
        return new BasicErrorController(errorAttributes, this.serverProperties.getError(),
                errorViewResolvers.orderedStream().collect(Collectors.toList()));
    }

    @Bean
    public ErrorPageCustomizer errorPageCustomizer(DispatcherServletPath dispatcherServletPath) {
        return new ErrorPageCustomizer(this.serverProperties, dispatcherServletPath);
    }


      @Bean
        @ConditionalOnBean(DispatcherServlet.class)
        @ConditionalOnMissingBean(ErrorViewResolver.class)
        DefaultErrorViewResolver conventionErrorViewResolver() {
            return new DefaultErrorViewResolver(this.applicationContext, this.resourceProperties);
        }
```
系统出现错误以后去/error处理请求

这老师是源码杀手，我要炸了，我现在开始怕源码了
这里分两类，一个返回html，另一个返回json，区分浏览器,浏览器优先接受html，但是客户端优先接受/*， 没有要求，所以对浏览器返回，html,对客户端返回json

```java
    @RequestMapping(produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView errorHtml(HttpServletRequest request, HttpServletResponse response) {
        HttpStatus status = getStatus(request);
        Map<String, Object> model = Collections
                .unmodifiableMap(getErrorAttributes(request, isIncludeStackTrace(request, MediaType.TEXT_HTML)));
        response.setStatus(status.value());
        ModelAndView modelAndView = resolveErrorView(request, response, status, model);
        return (modelAndView != null) ? modelAndView : new ModelAndView("error", model);
    }

    @RequestMapping
    public ResponseEntity<Map<String, Object>> error(HttpServletRequest request) {
        HttpStatus status = getStatus(request);
        if (status == HttpStatus.NO_CONTENT) {
            return new ResponseEntity<>(status);
        }
        Map<String, Object> body = getErrorAttributes(request, isIncludeStackTrace(request, MediaType.ALL));
        return new ResponseEntity<>(body, status);
    }

```
### 所以到底如何定制？
有模版引擎的话，就在error下写一个404.html就可以了，你甚至可以用4xx.html来批评所有的4开头的错误
```html
<h1>status:[[${status}]]</h1>
```
没有模版引擎就在静态资源文件夹找

## 嵌入式servlet容器
默认是tomcat
### 如何定制修改servlet容器
- 方法1
使用server.port = 8081
server.tomcat.xxx
```java
@ConfigurationProperties(prefix = "server", ignoreUnknownFields = true)
public class ServerProperties {
```
- 方法2 
使用Bean, 
springboot中有很多xxxConfiguier来拓展配置
有很多xxxCustomizer来定制配置
```java
    @Bean
    public WebServerFactoryCustomizer<ConfigurableWebServerFactory> webServerFactoryWebServerFactoryCustomizer(){
        return new WebServerFactoryCustomizer<ConfigurableWebServerFactory>(){
            @Override
            public void customize(ConfigurableWebServerFactory factory) {
                factory.setPort(8083);
            }
        };
    }

```
- 注册Servlet、Filter、Listener
使用ServletReristrationBean、FilterRegistrationBean、Listener...把他们Bean到容器中就可以了
- 切换Servlet容器
Jetty 适用长链接
Undertow 适用于高并发不带jsp
1. 排除tomcat依赖
2. 引入其他依赖

### 嵌入式的tomcat如何实现
**源码警告**
```java
@Configuration(proxyBeanMethods = false)
@ConditionalOnWebApplication
@EnableConfigurationProperties(ServerProperties.class)
public class EmbeddedWebServerFactoryCustomizerAutoConfiguration {
    /**
     * Nested configuration if Tomcat is being used.
     */
    @Configuration(proxyBeanMethods = false)
    @ConditionalOnClass({ Tomcat.class, UpgradeProtocol.class })
    public static class TomcatWebServerFactoryCustomizerConfiguration {

        @Bean
        public TomcatWebServerFactoryCustomizer tomcatWebServerFactoryCustomizer(Environment environment,
                ServerProperties serverProperties) {
            return new TomcatWebServerFactoryCustomizer(environment, serverProperties);
        }

    }
```
源码变了。。。
<iframe src="//player.bilibili.com/player.html?aid=38657363&bvid=BV1Et411Y7tQ&cid=67953935&page=48" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
以前是放一个嵌入式的容器工厂，然后配置tomcat，最后传给TomcatEmbeddedServletContainer，并且启动tomcat容器

### 配置修改是如何生效的
配置文件+定制器， 他们本质上都是定制器
有一个BeanPostProcessorRegistrar， 导入了EmbeddedServletContainerCustomizerBeanPostProcessor

SpringBoot根据导入的依赖情况，给容器添加相应的容器工厂， 容器中某个组件要创建对象就会惊动后置处理器， 只要是嵌入式的servlet容器工厂，后置处理器就会工作, 后置处理器会从容器中获取所有的定制器，调用定制器的方法。 

### 嵌入式servlet什么时候创建
springboot启动， 运行run， 创建IOC容器， 并初始化， 创建容器中的每个bean， 如果是web应用就创建web容器，否则创建AnnotationConfigApplicationContext, 在web的IOC容器中， 重写了onRefresh， 在这里创建了嵌入式的Servlet， 获取容器工厂， tomcatembeddedservletcontainerfactory创建对象以后，后置处理器就开始配置，然后获得新的servlet容器，最后启动
### 优点
简单便携
### 缺点
不支持jsp