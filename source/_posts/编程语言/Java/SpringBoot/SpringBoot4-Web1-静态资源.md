---
date: 2020-04-16 12:18:20
updated: 2020-04-16 12:18:20
mathjax: true
---

# SpringBoot与Web
先在idea中选择场景
SpringBoot已经默认将这些常见配置好了，我们只需要在配置文件中指定少量配置就可以运行起来
然后我们可以开始编写业务代码了


## SpringBoot与静态资源
### WebMvcAutoConfiguration
打开WebMvcAutoConfiguration.java
```java
		@Override
		public void addResourceHandlers(ResourceHandlerRegistry registry) {
			if (!this.resourceProperties.isAddMappings()) {
				logger.debug("Default resource handling disabled");
				return;
			}
			Duration cachePeriod = this.resourceProperties.getCache().getPeriod();
			CacheControl cacheControl = this.resourceProperties.getCache().getCachecontrol().toHttpCacheControl();
			if (!registry.hasMappingForPattern("/webjars/**")) {
				customizeResourceHandlerRegistration(registry.addResourceHandler("/webjars/**")
						.addResourceLocations("classpath:/META-INF/resources/webjars/")
						.setCachePeriod(getSeconds(cachePeriod)).setCacheControl(cacheControl));
			}
			String staticPathPattern = this.mvcProperties.getStaticPathPattern();
			if (!registry.hasMappingForPattern(staticPathPattern)) {
				customizeResourceHandlerRegistration(registry.addResourceHandler(staticPathPattern)
						.addResourceLocations(getResourceLocations(this.resourceProperties.getStaticLocations()))
						.setCachePeriod(getSeconds(cachePeriod)).setCacheControl(cacheControl));
			}
		}
```
<!-- more -->
### 配置jquery
所有/webjars/下的资源，都去classpath:/MEFA-INF/resources/webjars/找
在[Webjars](http://webjars.org)中选择Maven,然后就可以导入你想要jquery的依赖了
比方安装了这个以后就可以通过下面的地址访问jquery了[localhost:8080/webjars/jquery/3.3.1/jquery.js](localhost:8080/webjars/jquery/3.5.0/jquery.js)

```xml
        <dependency>
            <groupId>org.webjars</groupId>
            <artifactId>jquery</artifactId>
            <version>3.5.0</version>
        </dependency>
```
### 默认映射
ResourceProperties 可以设置静态资源的配置，如缓存时间
```java
@ConfigurationProperties(prefix = "spring.resources", ignoreUnknownFields = false)
public class ResourceProperties {
```
还会在下面的路径中找(静态资源的文件夹)
比方说你要访问一个localhost:8080/myjs.js,如果找不到的话，就在下面的文件夹中寻找
```java
	private static final String[] CLASSPATH_RESOURCE_LOCATIONS = { "classpath:/META-INF/resources/",
			"classpath:/resources/", "classpath:/static/", "classpath:/public/" };
```
### 欢迎界面
欢迎页面, 静态资源文件夹的/index.html, 见下面的代码
```java
		@Bean
		public WelcomePageHandlerMapping welcomePageHandlerMapping(ApplicationContext applicationContext,
				FormattingConversionService mvcConversionService, ResourceUrlProvider mvcResourceUrlProvider) {
			WelcomePageHandlerMapping welcomePageHandlerMapping = new WelcomePageHandlerMapping(
					new TemplateAvailabilityProviders(applicationContext), applicationContext, getWelcomePage(),
					this.mvcProperties.getStaticPathPattern());
			welcomePageHandlerMapping.setInterceptors(getInterceptors(mvcConversionService, mvcResourceUrlProvider));
			return welcomePageHandlerMapping;
		}
    		private Optional<Resource> getWelcomePage() {
			String[] locations = getResourceLocations(this.resourceProperties.getStaticLocations());
			return Arrays.stream(locations).map(this::getIndexHtml).filter(this::isReadable).findFirst();
		}

		private Resource getIndexHtml(String location) {
			return this.resourceLoader.getResource(location + "index.html");
		}
```
### 图标
配置自己的favicon.ico
SpringBoot2中没有这个东西，可能移到其他位置去了
### 定义自己的映射
利用配置文件来自己定义/的映射
```properties
spring.resources.static-locations = classpath:/hello/,classpath:/hello2/
```