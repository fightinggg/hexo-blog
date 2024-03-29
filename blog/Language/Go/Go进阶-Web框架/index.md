---
date: 2021-10-18 17:34:00
updated: 2021-10-19 13:49:00
clickbait:
  - 超简单Beego入门
  - 超简单Gin入门
---



# 0. 前言

简单介绍Beego和Gin，水一水文章。



## 1.1. 安装Beego库

```shell
go get github.com/astaxie/beego
```

同时安装Bee工具

```shell
go get github.com/beego/bee
```

看到如下内容代表安装成功

```shell
s@HELLOWANG-MB1 ~ % go get github.com/astaxie/beego
go: downloading github.com/astaxie/beego v1.12.3
go: downloading github.com/prometheus/client_golang v1.7.0
go: downloading github.com/hashicorp/golang-lru v0.5.4
go: downloading golang.org/x/crypto v0.0.0-20191011191535-87dc89f01550
go: downloading github.com/shiena/ansicolor v0.0.0-20151119151921-a422bbe96644
go: downloading github.com/prometheus/common v0.10.0
go: downloading github.com/prometheus/client_model v0.2.0
go: downloading github.com/prometheus/procfs v0.1.3
go: downloading github.com/beorn7/perks v1.0.1
go: downloading golang.org/x/sys v0.0.0-20200615200032-f1bc736245b1
go: downloading github.com/cespare/xxhash/v2 v2.1.1
go: downloading github.com/golang/protobuf v1.4.2
go: downloading github.com/matttproud/golang_protobuf_extensions v1.0.1
go: downloading google.golang.org/protobuf v1.23.0
s@HELLOWANG-MB1 ~ % go get github.com/beego/bee
go: downloading github.com/beego/bee v1.12.3
go: downloading github.com/gadelkareem/delve v1.4.2-0.20200619175259-dcd01330766f
go: downloading github.com/gorilla/websocket v1.4.2
go: downloading github.com/lib/pq v1.7.0
go: downloading github.com/flosch/pongo2 v0.0.0-20200529170236-5abacdfa4915
go: downloading github.com/pelletier/go-toml v1.2.0
go: downloading github.com/smartwalle/pongo2render v1.0.1
go: downloading github.com/spf13/viper v1.7.0
go: downloading github.com/astaxie/beego v1.12.1
go: downloading github.com/hashicorp/hcl v1.0.0
go: downloading github.com/magiconair/properties v1.8.1
go: downloading github.com/spf13/afero v1.1.2
go: downloading github.com/spf13/cast v1.3.0
go: downloading github.com/spf13/jwalterweatherman v1.0.0
go: downloading github.com/spf13/pflag v1.0.3
go: downloading github.com/subosito/gotenv v1.2.0
go: downloading gopkg.in/ini.v1 v1.51.0
go: downloading golang.org/x/text v0.3.2
go: downloading github.com/sirupsen/logrus v1.6.0
go: downloading github.com/cosiner/argv v0.1.0
go: downloading github.com/peterh/liner v0.0.0-20170317030525-88609521dc4b
go: downloading github.com/mattn/go-colorable v0.0.9
go: downloading github.com/mattn/go-isatty v0.0.3
go: downloading golang.org/x/arch v0.0.0-20190927153633-4e8777c89be4
go: downloading go.starlark.net v0.0.0-20190702223751-32f345186213
go: downloading github.com/konsorten/go-windows-terminal-sequences v1.0.3
go get: installing executables with 'go get' in module mode is deprecated.
	Use 'go install pkg@version' instead.
	For more information, see https://golang.org/doc/go-get-install-deprecation
	or run 'go help get' or 'go help install'.
```

<!-- more -->

注意安装以后对二进制文件在$GOPATH/bin下，所以请确保该路径在你的环境变量下,笔者使用MACOS，在`~/.zshrc`中使用如下配置

```
GOPATH=~/go
PATH=$PATH:~/go/bin
```





## 1.2. 创建项目

### 1.2.1. 创建项目

```shell
s@HELLOWANG-MB1 src % bee new bee-demo
2021/10/18 17:47:29 INFO     ▶ 0001 generate new project support go modules.
2021/10/18 17:47:29 INFO     ▶ 0002 Creating application...
	create	 /Users/s/src/bee-demo/go.mod
	create	 /Users/s/src/bee-demo/
	create	 /Users/s/src/bee-demo/conf/
	create	 /Users/s/src/bee-demo/controllers/
	create	 /Users/s/src/bee-demo/models/
	create	 /Users/s/src/bee-demo/routers/
	create	 /Users/s/src/bee-demo/tests/
	create	 /Users/s/src/bee-demo/static/
	create	 /Users/s/src/bee-demo/static/js/
	create	 /Users/s/src/bee-demo/static/css/
	create	 /Users/s/src/bee-demo/static/img/
	create	 /Users/s/src/bee-demo/views/
	create	 /Users/s/src/bee-demo/conf/app.conf
	create	 /Users/s/src/bee-demo/controllers/default.go
	create	 /Users/s/src/bee-demo/views/index.tpl
	create	 /Users/s/src/bee-demo/routers/router.go
	create	 /Users/s/src/bee-demo/tests/default_test.go
	create	 /Users/s/src/bee-demo/main.go
2021/10/18 17:47:29 SUCCESS  ▶ 0003 New application successfully created!
```

### 1.2.2. 初始化项目

```
s@HELLOWANG-MB1 bee-demo % go get
go: downloading gopkg.in/yaml.v2 v2.2.1
go: downloading github.com/shiena/ansicolor v0.0.0-20200904210342-c7312218db18
go get: added github.com/shiena/ansicolor v0.0.0-20200904210342-c7312218db18
```

### 1.2.3. 启动项目

在GoLand IDE中点击▶启动项目，看到如下输出，访问[http://localhost:8080/](http://localhost:8080/)即可看到小蜜蜂

![](beego-logo.png)

```shell
GOROOT=/usr/local/Cellar/go/1.17.2/libexec #gosetup
GOPATH=/Users/s/go #gosetup
/usr/local/Cellar/go/1.17.2/libexec/bin/go build -o /private/var/folders/6t/kt2nf9z17cv87lqk842lngj80000gn/T/GoLand/___go_build_bee_demo bee-demo #gosetup
/private/var/folders/6t/kt2nf9z17cv87lqk842lngj80000gn/T/GoLand/___go_build_bee_demo
2021/10/18 18:01:42.769 [I] [asm_amd64.s:1581]  http server Running on http://:8080
2021/10/18 18:04:54.533 [D] [server.go:2878]  |            ::1| 200 |   4.493325ms|   match| GET      /     r:/
2021/10/18 18:04:54.607 [D] [server.go:2878]  |            ::1| 200 |    316.098µs|   match| GET      /static/js/reload.min.js
2021/10/18 18:04:58.868 [D] [server.go:2878]  |            ::1| 200 |    1.40659ms|   match| GET      /     r:/
2021/10/18 18:05:03.305 [D] [server.go:2878]  |            ::1| 200 |   1.215993ms|   match| GET      /     r:/
2021/10/18 18:05:43.326 [D] [server.go:2878]  |            ::1| 200 |   2.620439ms|   match| GET      /     r:/
2021/10/18 18:05:43.381 [D] [server.go:2878]  |            ::1| 200 |     60.791µs|   match| GET      /static/js/reload.min.js
2021/10/18 18:09:39.216 [D] [server.go:2878]  |            ::1| 200 |   2.486943ms|   match| GET      /     r:/
2021/10/18 18:09:39.266 [D] [server.go:2878]  |            ::1| 200 |     66.282µs|   match| GET      /static/js/reload.min.js
```



### 1.2.4. Contorller

### 1.2.4.1 路由

路由在文件`routers/router.go`中, 在Beego的设计中，路由需要手动添加，即哪个PATH交给哪个Controller来处理。

```go
package routers

import (
	"bee-demo/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
}

```

### 1.2.4.2. Controller

MainController继承了beego.Controller,所以我们可以复写他的方法，注意到beego.Controller实现了beegoControllerInterface这个接口，里边的方法其实都比较明显了，就是HTTP协议的方法。

```go
type ControllerInterface interface {
	Init(ct *context.Context, controllerName, actionName string, app interface{})
	Prepare()
	Get()
	Post()
	Delete()
	Put()
	Head()
	Patch()
	Options()
	Trace()
	Finish()
	Render() error
	XSRFToken() string
	CheckXSRFCookie() bool
	HandlerFunc(fn string) bool
	URLMapping()
}
```





### 1.2.4.3. 返回JSON数据的Controller

首先编写一个HelloController,然后把它加入到route中，最后访问/hello，就可以看到输出了。

```go
package controllers

import (
	"github.com/astaxie/beego"
)

type HelloController struct {
	beego.Controller
}

type HelloVO struct {
	Say1 string `json:"say_1"`
	Say2 int    `json:"say_2"`
}

func (c *HelloController) Get() {
	c.Data["json"] = &HelloVO{
		Say1: "world",
		Say2: 9527,
	}
	c.ServeJSON()
}

```



```http
GET /hello
{
  "say_1": "world",
  "say_2": 9527
}
```



这一块就点到为止了，听说Beego框架不太火，了解了解就好了，笔者也不是文档翻译器，更多更加细节的部分关注[这里](https://www.topgoer.com/beego%E6%A1%86%E6%9E%B6/)



# 2.1. 安装Gin

```bash
 go get github.com/gin-gonic/gin
```



# 2.2.  编写Hello World

编写下面的代码，然后直接运行，访问[http://localhost:8080/](http://localhost:8080/)即可看到Hello World

```go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "hello World!")
	})
	r.Run()
}

```

日志如下

```log
GOROOT=/usr/local/Cellar/go/1.17.2/libexec #gosetup
GOPATH=/Users/s/go #gosetup
/usr/local/Cellar/go/1.17.2/libexec/bin/go build -o /private/var/folders/6t/kt2nf9z17cv87lqk842lngj80000gn/T/GoLand/___go_build_gin_demo gin-demo #gosetup
/private/var/folders/6t/kt2nf9z17cv87lqk842lngj80000gn/T/GoLand/___go_build_gin_demo
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:   export GIN_MODE=release
 - using code:  gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /                         --> main.main.func1 (3 handlers)
[GIN-debug] Environment variable PORT is undefined. Using port :8080 by default
[GIN-debug] Listening and serving HTTP on :8080
[GIN] 2021/10/19 - 15:02:00 | 200 |      16.428µs |             ::1 | GET      "/"


```



更加具体的，参见文档，太没技术的东西笔者不喜欢写。
