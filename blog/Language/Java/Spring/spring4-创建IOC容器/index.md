---
date: 2020-04-06 00:04:34
updated: 2020-04-06 00:04:34
---

# 创建IOC容器
## ApplicationContest
 单例对象适用
- ClassPathXmlApplicationContext 可以加载类路径下的配置文件，要求配置文件在类路径下
- FileSystemXmlApplicationContext 可以加载任意路径下的配置文件(要有访问权限)
- AnnotationConfigApplicationContext 读取注解创建容器

## ApplicationContest什么时候创建对象
- 当加载配置文件的时候就创建了对象
<!-- more -->
## BeanFactory
 多例对象适用
- XmlBeanFactory 使用的时候才创建对象