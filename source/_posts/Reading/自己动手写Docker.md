---
date: 2021-04-16 13:46:00
updated: 2021-04-17 13:55:00
typora-root-url: ..\..
---



<img src="/images/image-2021-04-16-13.59.48.106.png" style="zoom:25%;" />



# 容器与开发语言

## 容器

随着云计算领域的兴起，容器这个词出现了，但是什么是容器？

容器英文名Container，是基于Linux Namespace以及Cgroups技术实现的具备隔离特性的进程。

OK，他是一个具备隔离特性的进程。



## 虚拟机

虚拟机是使用Hypervisor技术提供的虚拟化硬件的操作系统。

OK，虚拟机是一个操作系统。

<!-- more -->

## 操作系统和进程的区别

操作系统是管理软件、硬件的进程。



## GO

这里不做介绍



# 基础技术



## Linux Namespace

Namespace即为名称空间，这是一个树状的结构，父名称空间可以看到子名称空间的所有内容，反之则不行。这类似于Spring框架的父子Beanfactory。

Linux 一个实现了6个不同的Namespace

|  Namespace 类型   | 系统调用参数  |      备注      |
| :---------------: | :-----------: | :------------: |
|  Mount Namespace  |  CLONE NEWNS  | 文件系统挂载点 |
|   UTS Namespace   | CLONE NEWUTS  |     主机名     |
|   IPC Namespace   | CLONE NEWIPC  |    进程通信    |
|   PID Namespace   | CLONE NEWPID  |     进程ID     |
| Network Namespace | CLONE NEWNET  |      网络      |
|  User Namespace   | CLONE NEWUSER |      用户      |

对于这些Namespace，Linux提供了3个系统调用。

|   API   |               备注                |
| :-----: | :-------------------------------: |
|  clone  | 创建新进程，并为其分配6个名称空间 |
| unshare |        把进程移出名称空间         |
|  setns  |        把进程加入名称空间         |





## UTS Namespace

下面是一个`main.go`文件，我们使用指令`go run main.go`

```go
package main

import (
  "os/exec"
  "syscall"
  "os"
  "log"
)

func main () {
  cmd := exec.Command("sh")
  cmd.SysProcAttr = &syscall.SysProcAttr{
    Cloneflags: syscall.CLONE_NEWUTS,
  }
  cmd.Stdin = os.Stdin
  cmd.Stdout = os.Stdout
  cmd.Stderr = os.Stderr
  if err := cmd.Run(); err!= nil {
    log.Fatal(err)
  }
}
```



然后我们发现我们进入到了一个shell命令中。

```sh
[root@VM-4-4-centos tmp]# go run main.go 
sh-4.4# 
```

接下来我们查看hostname并更改然后再次查看。

```sh
[root@VM-4-4-centos tmp]# go run main.go 
sh-4.4# hostname
VM-4-4-centos
sh-4.4# hostname
VM-4-4-centos
sh-4.4# hostname wsx
sh-4.4# hostname
wsx
sh-4.4# 
```

回到宿主机上使用指令hostname,发现宿主机的hostname并没有发生改变。

```sh
[root@VM-4-4-centos src]# hostname
VM-4-4-centos
[root@VM-4-4-centos src]# 
```

我们使用指令`ps -ef | grep $$`查看当前进程的pid为1539189， ppid为1539185。

```sh
sh-4.4# ps -ef | grep $$
root     1539189 1539185  0 15:01 pts/0    00:00:00 sh
root     1540099 1539189  0 15:05 pts/0    00:00:00 ps -ef
root     1540100 1539189  0 15:05 pts/0    00:00:00 grep 1539189
```

然后分别查看他们的ns空间, 不难发现只有uts空间不一样。

```sh
sh-4.4# ls -l /proc/$$/ns
total 0
lrwxrwxrwx 1 root root 0 Apr 16 15:08 cgroup -> 'cgroup:[4026531835]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 ipc -> 'ipc:[4026531839]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 mnt -> 'mnt:[4026531840]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 net -> 'net:[4026531992]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 pid -> 'pid:[4026531836]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 pid_for_children -> 'pid:[4026531836]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 user -> 'user:[4026531837]'
lrwxrwxrwx 1 root root 0 Apr 16 15:06 uts -> 'uts:[4026532643]'
sh-4.4# ls -l /proc/1539185/ns
total 0
lrwxrwxrwx 1 root root 0 Apr 16 15:08 cgroup -> 'cgroup:[4026531835]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 ipc -> 'ipc:[4026531839]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 mnt -> 'mnt:[4026531840]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 net -> 'net:[4026531992]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 pid -> 'pid:[4026531836]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 pid_for_children -> 'pid:[4026531836]'
lrwxrwxrwx 1 root root 0 Apr 16 15:08 user -> 'user:[4026531837]'
lrwxrwxrwx 1 root root 0 Apr 16 15:07 uts -> 'uts:[4026531838]'
```

## 其他的Namespace

更多的例子可以查看原书11-19页，即可实现其他5个空间的隔离，其实只需要修改代码为下面这样即可。我们只需要使用符号 `|`就能同时开启多个资源的隔离。 

```go
  cmd.SysProcAttr = &syscall.SysProcAttr{
    Cloneflags: syscall.CLONE_NEWUTS | syscall.CLONE_NEWIPC,
  }
```



## Linux Cgroups

有了资源隔离，还差一点东西才能实现容器，那就是资源限制、控制、统计（包括CPU、Memory、IO等）。Linux Cgroups就是干这个事的。

>cgroups（Control Groups）最初叫 Process Container，由 Google 工程师（Paul Menage 和 Rohit Seth）于 2006 年提出，后来因为 Container 有多重含义容易引起误解，就在 2007 年更名为 Control Groups，并被整合进 Linux 内核。顾名思义就是把进程放到一个组里面统一加以控制。
>
>引用自： [原文链接](https://www.infoq.cn/article/docker-kernel-knowledge-cgroups-resource-isolation)

### Task

在Cgroups术语中，Task就是一个进程。

### Cgroup

即一个控制组，可以对一组进程进行配置。

### Subsystem

具体的配置子系统，例如cpu子系统可以配置Cgroup中进程被调度的策略，memory子系统可以控制Cgroup中进程的内存占用。

### Hierarchy

hierarchy把cgroup描述为一个树状结构，在这个树状结构中，Cgroups完成了继承，就和前面的Linux Namespace一样。



## 安装Cgroup库

```sh
yum install -y libcgroup-tools.x86_64
```

### 查看cgroup

我们可以看到这里有很多cgroup，冒号左边是子系统，右边是cgroup。

```sh
[root@VM-4-4-centos cpu]# lscgroup | head -n 15
cpu,cpuacct:/
cpu,cpuacct:/YunJing
cpu,cpuacct:/docker
cpu,cpuacct:/docker/de0ca6c8064d53b51a3076317c90c472b3b62e31d5110c08a9e158d4470bde2a
cpu,cpuacct:/docker/5e0cd00a0390669e38f844b1ecf56c63dc8d406d0c12d330d278ff137aafd2d2
cpu,cpuacct:/docker/29f1d2a9d2d3baaf7e108696dace633e84a75dca7182b3015d0a632d72b2f1f8
cpu,cpuacct:/docker/d97f48af25382fad8175a285dfe3c6ebc93fe28d022c534c20c35152a47e9a09
cpu,cpuacct:/docker/dfdc0ad0ca19f736e8bb70abcbdbbd75b483b9830920097566e01bb8dc83d1b6
cpu,cpuacct:/docker/28c73206d27e9bfcbca5fd9f801ff96a57cd07c5b6806f1bcf5932e4643296e1
cpu,cpuacct:/docker/9852a95cfef5ff071cb4554ea73b6699be0ab5aa08f873abe1575ef07c31c68f
cpu,cpuacct:/docker/a3845de540c9eaa8dc609b67d09fb40f262a0bc286eef8363607d4fba68dad36
cpu,cpuacct:/docker/d46d67f40ea34e5a9e0aaf9e32d0438d9fc9c0db614c2e60139971ab7917602f
cpu,cpuacct:/docker/a3fa62cd8e9ec321a708e81c0f5aa1048b636815db225e1f9b3252dd9f676913
cpu,cpuacct:/user.slice
cpu,cpuacct:/init.scope
```

### 查看子系统

下面的指令会列出所有的子系统，一般就几个子系统。

```sh
[root@VM-4-4-centos cpu]# lssubsys -a
cpuset
cpu,cpuacct
blkio
memory
devices
freezer
net_cls,net_prio
perf_event
hugetlb
pids
rdma
```

### 查看子系统挂载

```sh
[root@VM-4-4-centos src]# lssubsys -m
cpuset /sys/fs/cgroup/cpuset
cpu,cpuacct /sys/fs/cgroup/cpu,cpuacct
blkio /sys/fs/cgroup/blkio
memory /sys/fs/cgroup/memory
devices /sys/fs/cgroup/devices
freezer /sys/fs/cgroup/freezer
net_cls,net_prio /sys/fs/cgroup/net_cls,net_prio
perf_event /sys/fs/cgroup/perf_event
hugetlb /sys/fs/cgroup/hugetlb
pids /sys/fs/cgroup/pids
rdma /sys/fs/cgroup/rdma
```



### Cgroup例子

如下图所示，cgroup（粉色） 是一个树状结构，组成了一个Hierarchy（绿色），而每一个子系统（蓝色）可以分配到一个Hierarchy上。

![](/images/image-2021-04-17-13.55.00.000.svg)



### 三个组件的约束

>系统在创建了新的 hierarchy之后,系统中所有的进程都会加入这个 hierarchy的 cgroup根节点,这个 cgroup根节点是 hierarchy默认创建的。
>
>一个 subsystem只能附加到一个 hierarchy上面。
>
>一个 hierarchy可以附加多个 subsystem。
>
>一个进程可以作为多个 cgroup的成员,但是这些 cgroup必须在不同的 hierarchy中。
>
>一个进程fork出子进程时,子进程是和父进程在同一个 cgroup中的,也可以根据需要将其移动到其他 cgroup中。





# 11111111111111111111fork出子进程时,子进程是和父进程在同一个 cgroup中的

## 1111111111111111111

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi



# 21111111111111111111fork出子进程时,子进程是和父进程在同一个 cgroup中的

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

# 31111111111111111111fork出子进程时,子进程是和父进程在同一个 cgroup中的

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

# 41111111111111111111fork出子进程时,子进程是和父进程在同一个 cgroup中的

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

# 5

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

# 6

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

# 7

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

# 8

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

# 9

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

# 10

## 1

### 1

abc

### 2

def

### 3

ghi



## 2

### 1

abc

### 2

def

### 3

ghi

## 3

### 1

abc

### 2

def

### 3

ghi

## 4

### 1

abc

### 2

def

### 3

ghi

## 5

### 1

abc

### 2

def

### 3

ghi

## 6

### 1

abc

### 2

def

### 3

ghi

















