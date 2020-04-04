---
title: understanding the JVM - 走进Java
mathjax: true
categories:
  - java
  - understanding the JVM
tags:
  - java
  - understanding the JVM
keywords:
  - java
  - understanding the JVM
abbrlink: a521a4f8
date: 2020-02-12 09:38:37
---

### what's that
&emsp;&emsp;这是学习《深入理解Java虚拟机》周志明 著. 的笔记

### Java 的优点
&emsp;&emsp;结构严谨、面向对象、脱平台、相对安全的内存管理和访问机制、热点代码检测和运行时编译及优化、拥有完善的应用程序接口及第三方类库......

### JDK,JRE,Java SE API 的区别
![](/images/JDK,JRE,Java-SE-API的区别.png)
图片来源于《深入理解Java虚拟机》

### Java平台
Java Card: 支持一些Java小程序运行在校内次设备（智能卡）上的平台
Java ME: 支持Java程序运行在移动终端上的平台,对Java API所精简
Java SE: 支持面向桌面级应用的平台，有完整的Java核心API
Java EE:支持多层架构的企业应用的平台，出Java核心API外还做了大量补充

### Sun HotSpot VM
&emsp;&emsp;这是Sun JDK和OpenJDK中所带的虚拟机
