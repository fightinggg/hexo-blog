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

> - 一开始go发布的时候是没有包管理的
>
> - go get命令会根据路径，把相应的模块获取并保存在`$GOPATH/src`
>
> - 也没有版本的概念，`master` 就代表稳定的版本
>
> 原文： [😊](https://zhuanlan.zhihu.com/p/374372749)

在Go Module出现以前,我们使用Go Get获取库，库会直接下载到GOPATH目录的src文件夹下，很好用但是有一个问题-版本兼容问题。

当两个库依赖分别同一个库的v1和v2版本的时候，如果v1和v2不兼容，那么会导致这两个库无法同时使用。

后来官方采用了vgo方案来解决GO的依赖管理问题，也就是现在的Go modules。

<!-- more -->

# 3. go.mod 与 go.sum

go.mod控制依赖，go.sum校验依赖的完整性与正确性。



# 4. Go111MODULE参数

> - `GO111MODULE=off` 无模块支持，go 会从 GOPATH 和 vendor 文件夹寻找包。
>
> - `GO111MODULE=on` 模块支持，go 会忽略 GOPATH 和 vendor 文件夹，只根据 `go.mod` 下载依赖。
>
>   原文：[😊](https://blog.csdn.net/qq_34276797/article/details/107148311?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-4.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-4.no_search_link)







# 参考

[Golang Package 与 Module 简介](https://www.jianshu.com/p/07ffc5827b26)

[Go Modules 包管理工具的理解与使用](https://www.infoq.cn/article/xyjhjja87y7pvu1iwhz3)

