---
date: 2020-03-26 19:36:28
updated: 2020-03-26 19:36:28
---

# Spring 模块
  Spring有六大模块，测试、容器、面向切面编程、instrumentation、数据访问与集成、Web与远程调用。
- 测试: Test
- 容器: Beans,Core,Context,Expression,ContextSupport
- 面向切面编程: AOP,Aspects
- instrumentation: instrument,instrumentTomcat
- 数据访问与集成: JDBC,Transaction,ORM,OXM,Messaging,JMS
- Web与远程调用: Web,WebServlet,WebPortlet,WebSocket
 但是Spring远不止这些

# Spring配置
 Spring有三种配置方式，第一是通过XML配置，第二是通过JAVA配置，第三是隐式的bean返现机制和自动装配。建议优先使用三，而后是二，最后是一
## 自动化装配bean
 有两种方法，组件扫描和自动装配，