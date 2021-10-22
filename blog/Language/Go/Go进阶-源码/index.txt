---
date: 2021-10-21 15:41:00
updated: 2021-10-21 15:41:00
clickbait:
  - Go工具链编译
---





# 1. 编译Go工具链

下载源码并编译Go（注意下面这个命令需要你有Go的环境，因为Go语言工具链是Go编写的）

```shell
git clone https://github.com/golang/go.git
cd go/src
./all.bash 
```

下面是编译的输出

```log
Building Go cmd/dist using /usr/local/Cellar/go/1.17.2/libexec. (go1.17.2 darwin/amd64)
Building Go toolchain1 using /usr/local/Cellar/go/1.17.2/libexec.
Building Go bootstrap cmd/go (go_bootstrap) using Go toolchain1.
Building Go toolchain2 using go_bootstrap and Go toolchain1.
Building Go toolchain3 using go_bootstrap and Go toolchain2.
Building packages and commands for darwin/amd64.

....省略

ALL TESTS PASSED
---
Installed Go for darwin/amd64 in /Users/s/src/go
Installed commands in /Users/s/src/go/bin
*** You need to add /Users/s/src/go/bin to your PATH.
```

验证Go,使用编译的结果，与`go version`对比，发现确实安装成功了。

```
s@HELLOWANG-MB1 go % go version
go version go1.17.2 darwin/amd64
s@HELLOWANG-MB1 go % /Users/s/src/go/bin/go version
go version devel go1.18-fca46d0b36 Thu Oct 21 02:35:47 2021 +0000 darwin/amd64
```

<!-- more -->

当然如果你注意观察，会发现这个工程下也有一个bin文件夹，其实这里也有一份可执行文件。

```
s@HELLOWANG-MB1 go % bin/go version
go version devel go1.18-fca46d0b36 Thu Oct 21 02:35:47 2021 +0000 darwin/amd64
```



# 2. 编译流程

## 2.1. all.bash

编译的指令只有一条，是从all.bash进入的，具体内容如下

```bash
set -e
if [ ! -f make.bash ]; then
	echo 'all.bash must be run from $GOROOT/src' 1>&2
	exit 1
fi
OLDPATH="$PATH"
. ./make.bash "$@" --no-banner
bash run.bash --no-rebuild
PATH="$OLDPATH"
$GOTOOLDIR/dist banner  # print build info

```

首先注意到是指令`set -e`, 该指令执行以后，如果当前bash执行了任意一条返回非0到指令，则整个bash直接 退出。

然后是一个条件判断`make.bash`这个文件是否存在，不存在则退出。

第七行，执行了`make.bash`这个程序，前面的点代表执行脚本时不开启新的shell，脚本所做的变量修改会被保留, [详见这里](https://bbs.huaweicloud.com/blogs/detail/218994)， "$@"代表参数透传，最后加上了一个`--no-banner`参数

笔者直接执行这个指令，能发现输出了这些内容

```
s@HELLOWANG-MB1 src % ./make.bash --no-banner
Building Go cmd/dist using /usr/local/Cellar/go/1.17.2/libexec. (go1.17.2 darwin/amd64)
Building Go toolchain1 using /usr/local/Cellar/go/1.17.2/libexec.
Building Go bootstrap cmd/go (go_bootstrap) using Go toolchain1.
Building Go toolchain2 using go_bootstrap and Go toolchain1.
Building Go toolchain3 using go_bootstrap and Go toolchain2.
Building packages and commands for darwin/amd64.
```

执行完make.bash,紧接着执行了run.bash。



## 2.2. make.bash

这个文件比较长，在注释中发现作者推荐我们观看[Go 1.5 Bootstrap Plan](https://golang.org/s/go15bootstrap)

Go1.5使用Go编写工具链，使用Go1.4进行编译

注意下面这行指令,这行指令做了一个编译

```shell
GOROOT="$GOROOT_BOOTSTRAP" GOOS="" GOARCH="" GO111MODULE=off "$GOROOT_BOOTSTRAP/bin/go" build -o cmd/dist/dist ./cmd/dist
```



































