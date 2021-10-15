---
date: 2021-10-13 20:26:00
updated: 2021-10-13 20:26:00
clickbait:
  - CPU的争夺
  - Go协程的调度
---



# 1. 从协程谈起

很多语言都支持协程，那什么是协程，和线程进程有什么区别呢？这里推荐一篇[Blog](https://www.cnblogs.com/liang1101/p/7285955.html)，笔者直接提取其中最重要的部分

>**进程、线程 和 协程 之间概念的区别**
>
>　　对于 **进程、线程**，都是有内核进行调度，有 CPU 时间片的概念，进行 **抢占式调度**（有多种调度算法）
>
>　　对于 **协程**(用户级线程)，这是对内核透明的，也就是系统并不知道有协程的存在，是完全由用户自己的程序进行调度的，因为是由用户程序自己控制，那么就很难像抢占式调度那样做到强制的 CPU 控制权切换到其他进程/线程，通常只能进行 **协作式调度**，需要协程自己主动把控制权转让出去之后，其他协程才能被执行到。
>
>　**goroutine 和协程区别**
>
>　　**本质上，goroutine 就是协程。** 不同的是，Golang 在 runtime、系统调用等多方面对 goroutine 调度进行了封装和处理，当遇到长时间执行或者进行系统调用时，会主动把当前 goroutine 的CPU (P) 转让出去，让其他 goroutine 能被调度并执行，也就是 Golang 从语言层面支持了协程。Golang 的一大特色就是从语言层面原生支持协程，在函数或者方法前面加 go关键字就可创建一个协程。

操作系统是不知道协程的，那么应用层如何实现协程呢？下面给一些伪代码

```C
不断循环：
    从任务队列获取任务
    执行任务，如果任务运行结束:
        进行下一轮循环(continue)
    如果任务运行时进入阻塞状态:
        把当前任务放入队列尾部(挂起)
    如果任务主动释放CPU:
        把当前任务放入队列尾部(挂起)
```

我们可以看到，其实这里正在执行的任务就是协程，这样的线程模型，他的CPU利用率非常高，他的协程切换代价非常低，几乎只需要入队出队而已。

但是这样的模型有一个很大的缺点，那就是CPU的公平性，如果一个协程迟迟不退出，且不进行系统调用，也不主动释放CPU，那么，这个协程将造成队头阻塞现象。

<!-- more -->

# 2. Goroutine

想必很多人都知道这个名词，这其实就是Go的协程(coroutine), 相比于普通的协程，Go做了特殊的处理，能够在一些适当的时候，交出CPU控制权，所以Go的调度是公平的。

当然Go关于协程，也有一个[Bug](https://fengyoulin.com/for-block-all.html)，这个Bug在[Go1.14](https://golang.org/doc/go1.14#runtime)的时候被修复了，有兴趣的读者可以自己查看，当然笔者在下文也会通过一个更加简单的例子来复现这个Bug。



# 3. Bug复现

Bug的复现需要两个版本的Go进行对比才能看出来，笔者建议使用Docker。首先就是给出代码了,下面的代码启用了两个协程，第一个做CPU空轮询，第二个做不间断输出。

```go
package main

import (
	"fmt"
	"runtime"
	"time"
)

func main() {

	runtime.GOMAXPROCS(1)

	go func() {
		fmt.Println("begin1")
		s := 0
		for t := 0; t < 10000; t++ {

			for i := 0; i < 1000000000; i++ {
				s += i
			}
			//fmt.Println(1, "->", s)
		}
		fmt.Println("end1", s)

	}()

	go func() {
		fmt.Println("begin2")
		s := 0
		for t := 0; t < 10; t++ {

			for i := 0; i < 1000000000; i++ {
				s += i
			}
			fmt.Println(2, "->", s)
		}
		fmt.Println("end2", s)
	}()

	time.Sleep(time.Second * 10)
}
```



## 3.1. 在Go1.13 中的表现

用docker启动容器，用cat写入代码

```sh
docker run -it --rm golang:1.13 bash
root@c6921e499184:/go# cat<<EOF>a.go
> package main
>
> import (
>     "fmt"
>     "runtime"
>     "time"
> )
>
> func main() {
>
>     runtime.GOMAXPROCS(1)
>
>     go func() {
>         fmt.Println("begin1")
>         s := 0
>         for t := 0; t < 10000; t++ {
>
>             for i := 0; i < 1000000000; i++ {
>                 s += i
>             }
>             //fmt.Println(1, "->", s)
>         }
>         fmt.Println("end1", s)
>
>     }()
>
>     go func() {
>         fmt.Println("begin2")
>         s := 0
>         for t := 0; t < 10; t++ {
>
>             for i := 0; i < 1000000000; i++ {
>                 s += i
>             }
>             fmt.Println(2, "->", s)
>         }
>         fmt.Println("end2", s)
>     }()
>
>     time.Sleep(time.Second * 10)
> }
> EOF
```

然后运行

```sh
go run a.go
```

读者可以很容易地发现，这份代码只会输出一个`begin1`



# 3.2. 在Go1.14 中的表现

这次，进入docker的指令换成下面这条就行了

```
docker run -it --rm golang:1.14 bash
```

在1.14中，会输出如下内容

```
begin2
begin1
2 -> 499999999500000000
2 -> 999999999000000000
2 -> 1499999998500000000
2 -> 1999999998000000000
2 -> 2499999997500000000
2 -> 2999999997000000000
2 -> 3499999996500000000
2 -> 3999999996000000000
2 -> 4499999995500000000
2 -> 4999999995000000000
end2 4999999995000000000
```

由此可见，Go1.14解决了for循环长时间占用CPU的问题。





# 4. 如何主动释放CPU

要注意释放的时机，函数调用、for循环中都可以，但是要注意控制释放的频率，不能太频繁，也不能太不频繁。








