---
date: 2022-03-31 09:52:00
updated: 2022-03-31 09:52:00
tags: [读书,AspectJ]
---

# 1. AspectJ

## 1.1. AspectJ介绍

AspectJ官网[^1]

### 1.1.1. pointcuts

pointcuts指的是程序中的某些链接点（某些时机），例如`call(void Point.setX(int))`表示：调用类`Point`的`setX(int)`方法时

pointcuts可以使用与或非表达式（`||,&&,!`）连接，比如 `call(void Point.setX(int)) ||
call(void Point.setY(int))`

pointcuts可以被定义为变量，如下面代码中的`move()`

```asp
pointcut move():
    call(void FigureElement.setXY(int,int)) ||
    call(void Point.setX(int))              ||
    call(void Point.setY(int))              ||
    call(void Line.setP1(Point))            ||
    call(void Line.setP2(Point));
```

当然pointcuts定义的时候还可以使用通配符，比如`call(void Figure.make*(..))`代表`Figure`的以make开头且返回值为void的方法（不关心参数）调用的时候。比如`call(public * Figure.* (..))`代表`Figure`的任何方法（不关心方法名，参数，返回值）调用的时候。

<!-- more -->

cflow是什么？



### 1.1.2. advice

pointcuts 指出了一些事件发生的时机，当这些事件真正发生的时候，我们需要advice表示该做些什么。





## 1.2. 在IntelliJ IDEA上安装AspectJ

安装AspectJ插件[^2]即可





# 2. Spring 对 AspectJ的支持

官方文档[^3]

## 2.1. 



# 3. 引用

[^1]: [AspectJ官网](https://www.eclipse.org/aspectj/doc/released/progguide/index.html)
[^2]: [AspectJ插件](https://plugins.jetbrains.com/plugin/4679-aspectj )
[^3]:[Spring对AspectJ的支持](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop-ataspectj)

