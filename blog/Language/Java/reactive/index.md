---
date: 2020-05-15 11:52:15
updated: 2020-05-15 11:52:15
---

# reactive
响应式编程，是一种非阻塞的编程方式，在Spring5中，Spring WebFlux出现了，他就是使用的reactive，传统的servlet和filter是同步的，传统的getParameter和getPart是阻塞的。

# 同步servlet
servlet的doGet函数是阻塞的，你的doGet占用多久，servlet线程就要占用多久

# 异步servlet
在doGet中开启新的线程，在新的线程中执行doGet的业务请求，执行完了再通知servlet线程，这样就不会阻塞servlet，可以支持更高的并发。

# Mono 和 Flux
Mono可以返回一个， Flux是多个

# SSE(server-sent events)
HTTP协议是一问一答，为什么Flux可以表现出流的样子？注意到response有一个flush，当flush调用的时候，就发送了一个数据过去

# WebFlux