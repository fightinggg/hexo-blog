---
date: 2021-04-03 15:34:00
updated: 2021-04-03 15:34:00
typora-root-url: ..\..
---

# HTTP权威指南

<img src="/images/image-2021-04-03-15.40.44.260.png" alt="image-2021-04-03 15.40.44.260" style="zoom:18%;" />

# 第一章： HTTP概述



# 媒体类型

> 因特上有数千种不同的数据类型,HTTP仔细地给每种要通过Web传输的对象都打上了名为MIME类型( MIME type)的数据格式标签。最初设计MIME( Multipurpose Internet Mail Extension,多用途因特网邮件扩展)是为了解决在不同的电子邮件系统之间搬移报文时存在的问题。MIME在电子邮件系统中工作得非常好,因此HTTP也采纳了它,用它来描述并标记多媒体内容。
>
> Page: 6

<!-- more -->

![image-2021-04-03 15.48.48.076](/images/image-2021-04-03-15.48.48.076.png)

## URI

> 服务器资源名被称为统一资源标识符( Uniform Resource Identifier,URI)。
>
> Page: 7

URI分为两种，URL（统一资源定位符）和URN（统一资源名）

下面是一个URL例子

![image-2021-04-03 15.51.20.995](/images/image-2021-04-03-15.51.20.995.png)

URN是作为特定内容的唯一名称使用的,与目前的资源所在地无关。使用这些与位置无关的URN,就可以将资源四处搬移。通过URN,还可以用同一个名字通过多种网络访问协议来访问资源。例如我们可以访问RFC 2141

```txt
urn:ietf:rfc:2141
```

## 事务























