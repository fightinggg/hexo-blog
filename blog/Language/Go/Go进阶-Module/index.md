---
date: 2021-10-22 11:43:00
updated: 2021-10-22 11:43:00
clickbait:
  - 最简单的 Go Module 教程
---



# 1. Module使用

在文章[Go入门-Go语言从入门到进阶实战](https://fightinggg.github.io/R0T00O.html)中，我们介绍了GO项目的结构，但是没有解释其中的一个文件`go.mod`, 这其实是模块的意思。在go.mod中可以引入go的依赖。

```
require (
	github.com/golang/mock v1.4.4
	github.com/golang/protobuf v1.4.3
	github.com/patrickmn/go-cache v2.1.0+incompatible
	github.com/stretchr/testify v1.6.1
)
```

这里简单介绍一下，注意到这里是库名加版本号。当我们引入了依赖管理以后，就可以在自己的项目中直接import三方包了。



# 2. Module 的历史

> Go modules 是 Go 语言的依赖解决方案，发布于 Go1.11，Go1.14 上已经明确建议生产上使用了

在Go Module出现以前,我们使用Go Get获取库，库会直接下载到GOPATH目录的src文件夹下，很好用但是有一个问题-版本兼容问题。

当两个库依赖分别同一个库的v1和v2版本的时候，如果v1和v2不兼容，那么会导致这两个库无法同时使用。

后来官方采用了vgo方案来解决GO的依赖管理问题，也就是现在的Go modules。



# 3. go.mod 与 go.sum

go.mod控制依赖，go.sum校验依赖的完整性与正确性。





# 参考

https://www.jianshu.com/p/07ffc5827b26

https://www.infoq.cn/article/xyjhjja87y7pvu1iwhz3

