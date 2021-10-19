---
date: 2021-10-19 16:37:00
updated: 2021-10-19 16:37:00
tags: 读书
clickbait:
  - Effective GO
---



# 1. Effective GO

[https://github.com/bingohuang/effective-go-zh-en](https://github.com/bingohuang/effective-go-zh-en)

# 2. 格式化

在最开始学习GO的时候，写了几篇Blog，发现代码里面的对齐都是TAB，这让我很困惑，知道现在才知道，GO语言，默认使用TAB进行对齐。

当然GO还有自己的空格规则`x<<8 + y<<16`,向这份代码，我们根据空格就能知道计算的优先级了。



# 3. 注释

## 3.1. 包注释

Go语言要求package语句前加上注释，来介绍整个包，如果package包含多个文件，则只需要在其中一个文件中标注即可。



```go
/*
Package regexp implements a simple library for regular expressions.

The syntax of the regular expressions accepted is:

	regexp:
		concatenation { '|' concatenation }
	concatenation:
		{ closure }
	closure:
		term [ '*' | '+' | '?' ]
	term:
		'^'
		'$'
		'.'
		character
		'[' [ '^' ] character-ranges ']'
		'(' regexp ')'
*/
package regexp
```

<!-- more -->

需要注意的是，注释不是JavaDoc模式的,下面这种就不对了

```go
/**
 *
 *  main
 *
 */
package main
```

## 3.2. 导出注释

在程序中，每个可导出（首字母大写）的名称都应该有文档注释。使用行注释的形式，行注释的第一行要以被导出的内容开头，并总结整个注释，如下，第一行以Compile开头

```go
// Compile parses a regular expression and returns, if successful, a Regexp
// object that can be used to match against text.
func Compile(str string) (regexp *Regexp, err error) {
```



# 4. 命名

Go语言默认使用驼峰命名，请不要使用下划线

## 4.1. 包

包名用小写，不要带下划线，

不要使用`import .`的语句，很容易冲突

## 4.2. 字段Getter Setter

Getter方法不需要`Get`这个前缀,如下

```go
obj.Owner()
obj.SetOwner(user)
```



## 4.3. 接口名

只包含一个方法的接口命名以er结尾。



# 5. 分号

在Go中，行末，不要加入分号。

分号其实是由词法分析器自动增加的。



# 6. 控制流

## 6.1.  变量重新声明

下面的这份代码，注意到其中的err申明了两次，上面这个err声明了两次，但是这并不是错误，编译器会帮忙解决这个问题，实际上err第二次只是被重新赋值而已。

```go
package main

import (
	"fmt"
	"os"
)

func main() {
	f1, err := os.Open("file")
	fmt.Println(f1,err)

	f2, err := os.Open("file2")
	fmt.Println(f2,err)
}

```

当然这样的技巧只能在特殊情况才能生效

- 本次声明与已声明的 v 处于同一作用域中（若 v 已在外层作用域中声明过，则此次声明会创建一个新的变量 §），
- 在初始化中与其类型相应的值才能赋予 v，且
- 在此次声明中至少另有一个变量是新声明的。



# 7. 函数



























