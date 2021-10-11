---
date: 2021-10-11 16:10:00
updated: 2021-10-11 16:10:00
typora-root-url: ../../../
---



# 1. 开始学习Go

从一本英文书开始，这本书叫做[《Go by Example》](https://gobyexample.com/)



# 2. Hello World

学啥语言的第一步都是Hello World, 第一步是搭建开发环境，直接下载[Goland](https://www.jetbrains.com/go/)，创建一个新的工程，点击create

![截屏2021-10-11 下午4.21.50](/images/image-2021-10-11-16.22.00.000.png)

<!--more-->

建好项目以后，项目应该是下面这个样子的，当然我们不用关注这个go.mod是干什么的，我们只是利用IDE编写代码，使用命令行运行。

```shell
s@HELLOWANG-MB1 go-study % tree
.
`-- go.mod

0 directories, 1 file

```

然后新建一个main.go的文件，其内容如下

```go
package main
import "fmt"
func main() {
    fmt.Println("hello world")
}
```

最后运行该文件

```shell
s@HELLOWANG-MB1 go-study % go run main.go
hello world
```

我们也可以编译为二进制文件，然后运行

```shell
s@HELLOWANG-MB1 go-study % go build main.go
s@HELLOWANG-MB1 go-study % ls
go.mod  main    main.go
s@HELLOWANG-MB1 go-study % ./main
hello world
```





# 3. Go的变量声明

变量的声明方式为`var <变量名> <变量类型>`

例如下面的程序

```go
package main

import "fmt"

func main() {
	var a int // 定义一个整形
	fmt.Println(a)
}

```

经过了命令行运行以后，可以转而使用IDE集成开发，点击按钮▶️

![截屏2021-10-11 下午4.42.58](/images/image-2021-10-11-16.43.00.000.png)

当然，还有更多的声明方式

```go
package main

import "fmt"

func main() {
	var a int // 定义一个整形
	fmt.Println(a)

	var b int = 1 // 定义并赋值
	fmt.Println(b)

	var c = 2 // 编译器自动推导
	fmt.Println(c)

	d := 3 // 精简写法
	fmt.Println(d)
}

```

最后还有一个小技巧，即函数返回可以是多个变量，用逗号分隔, `_`表示匿名变量，即忽略该位置的值。

```go
package main

import "fmt"

func main() {
	a := 1
	b := 2
	a, b = b, a
	c, _ := a, b
	_, d := a, b
	fmt.Println(a, b, c, d)
}

```



# 4. Go 的基础数据类型

## 4.1. 整形

有符号整型: `int8 int16 int32 int64`

无符号整型: `uint8 uint16 uint32 uint64`

平台自适应整形: `int uint`(自动根据平台决定整形的长度)

## 4.2. 浮点数

`float32 float64`

```go
package main

import "fmt"

func main() {
	var a float32 = 1.5
	var b float64 = 1.5
	fmt.Println(a, b)
}

```

## 4.3. 布尔型

```go
package main

import "fmt"

func main() {
	var a bool = true
	fmt.Println(a)
}

```

## 4.4. 字符串

```go
package main

import "fmt"

func main() {
	var a string = "123"
	fmt.Println(a)
}

```

多行字符串

```go
package main

import "fmt"

func main() {
	var a string = `  123你好
	abcsdaf
aslfnskflasjlfjoiwn
	`
	fmt.Println(a)
}

```



# 5. Go的控制流

## 5.1. 循环

```go
package main

import "fmt"

func main() {

	// 类似与C的while
	a := 1
	for a <= 3 {
		fmt.Println(a)
		a++
	}

	// 类似与C的while(true)
	for {
		fmt.Println("break")
		break
	}

	// 类似于C的for
	for i := 0; i < 3; i++ {
		fmt.Println("hello")
	}

}

```



## 5.2. 条件判断

```go
package main

import "fmt"

func main() {

	if 1+1 == 2 {
		fmt.Println("1+1=2")
	} else {
		fmt.Println("1+1!=2")
	}

}

```



## 5.3. switch

需要注意的是Go的switch自带break，下面的程序只会输出3

```go
package main

import "fmt"

func main() {

	switch 3 {
	case 3:
		fmt.Println(3)
	case 2:
		fmt.Println(2)
	case 1:
		fmt.Println(1)
	}

}

```



# 6. Go的容器/集合

## 6.1. Map

注意map需要指定key和value 的类型

```go
package main

import "fmt"

func main() {
	mp := make(map[string]int)
	mp["k1"] = 1
	mp["k2"] = 2
	fmt.Println(mp)

	delete(mp,"k1")
	fmt.Println(mp)
	
}

```

## 6.2. 数组

数组长度固定

```go
package main

import "fmt"

func main() {
	var a []int = make([]int, 3)
	a[0] = 1
	fmt.Println(a)
}

```

## 6.3. 列表

列表可以自动伸缩

```go
package main

import (
	"container/list"
	"fmt"
)

func main() {
	ls := list.New()
	ls.PushBack(1)
	ls.PushBack(2)
	fmt.Println(ls)
}

```

# 7. Go的函数

返回值写在参数后面

```go
package main

import "fmt"

func plus(a int, b int) int {
	return a + b
}

func main() {
	a := 1
	b := 1
	fmt.Println(plus(a, b))
}

```

还可以选择返回多个值

```go
package main

import "fmt"

func swap(a int, b int) (int, int) {
	return b, a
}

func main() {
	a := 1
	b := 2
	fmt.Println(swap(a, b))
}

```

变长的参数

```go
package main

import "fmt"

func sum(a ...int) int {
	s := 0
	for i := 0; i < len(a); i++ {
		s += a[i]
	}
	return s
}

func main() {
	fmt.Println(sum(1, 2, 3))

	nums := []int{1, 2, 3, 4}
	fmt.Println(sum(nums...))
}

```

返回一个函数

```go
package main

import "fmt"

func increase() func() int {
	i := 0
	return func() int {
		i++
		return i
	}
}

func main() {
	fun := increase()
	fmt.Println(fun())
	fmt.Println(fun())
	fmt.Println(fun())
	fmt.Println(fun())

}
```

# 8. Go的指针

和C一样



# 9. Go 的结构体

## 9.1. 结构体定义

```go
type <类型名> struct {
    <字段1名> <字段1类型>
    <字段2名> <字段2类型>
    <字段3名> <字段3类型>
}
```

例子:

```go
type Point struct {
	X int32
	Y int32
}
```

## 9.2. 结构体实例化

```go
package main

import "fmt"

type Point struct {
	X int32
	Y int32
}

func main() {
	var p Point
	p.X = 1
	p.Y = 2
	fmt.Println(p.X, p.Y)
}

```

使用new实例化,注意此时得到的p2是指针

```go
package main

import "fmt"

type Point struct {
	X int32
	Y int32
}

func main() {
	p2 := new(Point)
	fmt.Println(p2)
}

```



## 9.3. 结构体函数

结构体函数定义比普通函数定义在func和函数名之间多了一个结构体对象，这个对象一般使用指针

```go
package main

import "fmt"

type Point struct {
	X int32
	Y int32
}

func (p *Point) getAndSet(X int32, Y int32) (int32, int32) {
	p.X, X = X, p.X // swap
	p.Y, Y = Y, p.Y // swap
	return X, Y
}

func main() {
	p := new(Point)
	p.X, p.Y = 1, 2
	fmt.Println(p.getAndSet(3, 4))
	fmt.Println(p.X, p.Y)
}


```

# 10. Go的接口

接口定义

```go
type <接口类型名> interface{
    <方法1名> (<参数列表1>) 返回值列表1
    <方法2名> (<参数列表2>) 返回值列表2
}
```

让结构体实现接口, 只需要让结构体的函数与接口保持一致即可，

```go
package main

import "fmt"

type Point struct {
	X int32
	Y int32
}

type GetAndSet interface {
	invoke(X int32, Y int32) (int32, int32)
}

func (p *Point) invoke(X int32, Y int32) (int32, int32) {
	p.X, X = X, p.X // swap
	p.Y, Y = Y, p.Y // swap
	return X, Y
}

func main() {
	p := new(Point)
	p.X, p.Y = 1, 2

	var it GetAndSet = p
	fmt.Println(it.invoke(3, 4))
	fmt.Println(p.X, p.Y)
}

```



# 11. Go的包

回到最开始的Helloworld，注意到第一行中的`package main`， 在Go中，有这样一个约定

> 包名为main的包为应用程序的入口包，编译源码没有main包时，将无法编译输出可执行的文件。

```go
package main
import "fmt"
func main() {
    fmt.Println("hello world")
}
```



## 11.1 Go的包导出































# 参考文献

https://weread.qq.com/web/reader/24d323407155597024d28a7kc81322c012c81e728d9d180















