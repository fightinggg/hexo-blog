---
date: 2020-10-30 00:00:00
updated: 2020-10-30 00:00:00
---



## Spring Boot Starter Webflux


![](spring-webflux-starter-自动装配.svg)

<!-- more -->
### Spring Webflux 5.3.2



#### ResponseBodyResultHandler

这个ResultHandler是最常用的一个,我们可以看到他在containingClass被ResponseBody标记或者方法被ResponseBody标记时生效

```java
	@Override
	public boolean supports(HandlerResult result) {
		MethodParameter returnType = result.getReturnTypeSource();
		Class<?> containingClass = returnType.getContainingClass();
		return (AnnotatedElementUtils.hasAnnotation(containingClass, ResponseBody.class) ||
				returnType.hasMethodAnnotation(ResponseBody.class));
	}

	@Override
	public Mono<Void> handleResult(ServerWebExchange exchange, HandlerResult result) {
		Object body = result.getReturnValue();
		MethodParameter bodyTypeParameter = result.getReturnTypeSource();
		return writeBody(body, bodyTypeParameter, exchange);
	}

```

#### ViewResolutionResultHandler

ViewResolutionResultHandler支持的attributes比较多，它可以解析CharSequence，Rendering，Model，Map，View等

```java
	@Override
	public boolean supports(HandlerResult result) {
		if (hasModelAnnotation(result.getReturnTypeSource())) {
			return true;
		}

		Class<?> type = result.getReturnType().toClass();
		ReactiveAdapter adapter = getAdapter(result);
		if (adapter != null) {
			if (adapter.isNoValue()) {
				return true;
			}
			type = result.getReturnType().getGeneric().toClass();
		}

		return (CharSequence.class.isAssignableFrom(type) ||
				Rendering.class.isAssignableFrom(type) ||
				Model.class.isAssignableFrom(type) ||
				Map.class.isAssignableFrom(type) ||
				View.class.isAssignableFrom(type) ||
				!BeanUtils.isSimpleProperty(type));
	}
```







#### ServerResponseResultHandler

ServerResponseResultHandler只处理返回值为ServerResponse类型的Response，并使用内置的messageWriters和视图解析器来处理他们

```java
	@Override
	public void afterPropertiesSet() throws Exception {
		if (CollectionUtils.isEmpty(this.messageWriters)) {
			throw new IllegalArgumentException("Property 'messageWriters' is required");
		}
	}

	@Override
	public boolean supports(HandlerResult result) {
		return (result.getReturnValue() instanceof ServerResponse);
	}

	@Override
	public Mono<Void> handleResult(ServerWebExchange exchange, HandlerResult result) {
		ServerResponse response = (ServerResponse) result.getReturnValue();
		Assert.state(response != null, "No ServerResponse");
		return response.writeTo(exchange, new ServerResponse.Context() {
			@Override
			public List<HttpMessageWriter<?>> messageWriters() {
				return messageWriters;
			}
			@Override
			public List<ViewResolver> viewResolvers() {
				return viewResolvers;
			}
		});
	}
```