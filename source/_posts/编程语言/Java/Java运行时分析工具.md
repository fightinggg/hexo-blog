---
date: 2021-09-24 10:24:00
updated: 2021-09-24 19:27:00
typora-root-url: ..\..\..
---



# Jps

jps 可以看到运行中的java进程

```shell
sh-4.2$ jps
370 xxx.jar
180682 Jps
```

# Jcmd

jcmd可以看到运行中的java进程以及参数

```shell
sh-4.2$ jcmd
370 /usr/local/xxx.jar config_path=xxx.yaml
180773 sun.tools.jcmd.JCmd
```



# Jmap

jmap是可以查看整个JVM内存的工具。

<!-- more -->

`jmap -heap <pid>`即可查看JVM堆堆使用情况，主要有两块，一块是Heap配置，另一块是Heap使用情况。

Heap配置中包含了最小堆空余空间比例、最大比例、最大堆大小、新生代大小、老生代大小、新生代比例、老生代比例、原空间大小等等。这部分是Java进程启动的时候由JVM参数决定的

Heap Usage是堆的使用情况，包括新生代使用情况、老生代使用情况（容量、使用、未使用）

```shell
sh-4.2$ jmap -heap 364
Attaching to process ID 364, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 25.252-b4

using thread-local object allocation.
Parallel GC with 48 thread(s)

Heap Configuration:
   MinHeapFreeRatio         = 0
   MaxHeapFreeRatio         = 100
   MaxHeapSize              = 32210157568 (30718.0MB)
   NewSize                  = 715653120 (682.5MB)
   MaxNewSize               = 10736369664 (10239.0MB)
   OldSize                  = 1431830528 (1365.5MB)
   NewRatio                 = 2
   SurvivorRatio            = 8
   MetaspaceSize            = 21807104 (20.796875MB)
   CompressedClassSpaceSize = 1073741824 (1024.0MB)
   MaxMetaspaceSize         = 17592186044415 MB
   G1HeapRegionSize         = 0 (0.0MB)

Heap Usage:
PS Young Generation
Eden Space:
   capacity = 88604672 (84.5MB)
   used     = 6212968 (5.925148010253906MB)
   free     = 82391704 (78.5748519897461MB)
   7.0120094795904215% used
From Space:
   capacity = 9961472 (9.5MB)
   used     = 1900544 (1.8125MB)
   free     = 8060928 (7.6875MB)
   19.07894736842105% used
To Space:
   capacity = 9961472 (9.5MB)
   used     = 0 (0.0MB)
   free     = 9961472 (9.5MB)
   0.0% used
PS Old Generation
   capacity = 1482162176 (1413.5MB)
   used     = 230906152 (220.20926666259766MB)
   free     = 1251256024 (1193.2907333374023MB)
   15.57900719226018% used

20563 interned Strings occupying 1939392 bytes.
```



`jmap -histo <pid>`可以查看JVM内存中每个类的内存使用情况

```shell
sh-4.2$ jmap -histo 370 | less
num     #instances         #bytes  class name
----------------------------------------------
   1:       1887996      284532232  [C
   2:         51934       55537536  [I
   3:       1368797       51696928  [B
   4:       1686385       46376560  [Ljava.lang.Object;
   5:        846166       33846640  java.util.TreeMap$Entry
   6:        494971       23758608  java.util.TreeMap
   7:        984173       23620152  java.lang.String
   8:        349310       19561360  sun.nio.cs.UTF_8$Encoder
   9:        495105       15843360  java.util.Collections$UnmodifiableMap
  10:        494750       15832000  java.util.TreeMap$EntryIterator
  11:        494925       11878200  java.util.Arrays$ArrayList
  12:        473586       11366064  java.util.Collections$UnmodifiableMap$UnmodifiableEntrySet$1
```



`jmap -finalizerinfo <pid>`可以看到有多少个对象在等待finalizer

```shell
sh-4.2$ jmap -finalizerinfo 370
Attaching to process ID 370, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 25.252-b4
Number of objects pending for finalization: 0
```

`jmap -dump:format=b,file=dump.bin 370` 可以把堆中的数据导出到二进制文件中

```shell
sh-4.2$ jmap -dump:format=b,file=dump.bin 370
Heap dump file created
sh-4.2$ ls
dump.bin
```



# Jstack



`jstack <pid>`可以看到所有线程目前的栈信息。

```shell
"Finalizer" #3 daemon prio=8 os_prio=0 tid=0x00007fd8506eb000 nid=0x1a7 in Object.wait() [0x00007fd77b826000]
   java.lang.Thread.State: WAITING (on object monitor)
        at java.lang.Object.wait(Native Method)
        at java.lang.ref.ReferenceQueue.remove(ReferenceQueue.java:144)
        - locked <0x000000008023bb50> (a java.lang.ref.ReferenceQueue$Lock)
        at java.lang.ref.ReferenceQueue.remove(ReferenceQueue.java:165)
        at java.lang.ref.Finalizer$FinalizerThread.run(Finalizer.java:216)

"Reference Handler" #2 daemon prio=10 os_prio=0 tid=0x00007fd8506de800 nid=0x1a6 in Object.wait() [0x00007fd77baf9000]
   java.lang.Thread.State: WAITING (on object monitor)
        at java.lang.Object.wait(Native Method)
        at java.lang.Object.wait(Object.java:502)
        at java.lang.ref.Reference.tryHandlePending(Reference.java:191)
        - locked <0x00000000802478a8> (a java.lang.ref.Reference$Lock)
        at java.lang.ref.Reference$ReferenceHandler.run(Reference.java:153)

"VM Thread" os_prio=0 tid=0x00007fd8506db000 nid=0x1a5 runnable

"GC task thread#0 (ParallelGC)" os_prio=0 tid=0x00007fd85001f000 nid=0x175 runnable

"GC task thread#1 (ParallelGC)" os_prio=0 tid=0x00007fd850021000 nid=0x176 runnable
```





# Jstat

## options

查看options

```shell
sh-4.2$ jstat -options
-class
-compiler
-gc
-gccapacity
-gccause
-gcmetacapacity
-gcnew
-gcnewcapacity
-gcold
-gcoldcapacity
-gcutil
-printcompilation
```

## 类加载情况

查看类的个数, 每1000毫秒打印一次，一共打印10次

```shell
sh-4.2$ jstat -class 370 1000 10
Loaded  Bytes  Unloaded  Bytes     Time
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
 12501 23290.5        0     0.0       9.15
```



## JIT情况

查看JIT实时编译器编译的情况

```shell
sh-4.2$ jstat -compiler 370 1000 3
Compiled Failed Invalid   Time   FailedType FailedMethod
   12448      5       0    68.28          1 io/netty/buffer/SizeClasses sizeClass
   12448      5       0    68.28          1 io/netty/buffer/SizeClasses sizeClass
   12448      5       0    68.28          1 io/netty/buffer/SizeClasses sizeClass
```

## GC情况

查看GC情况，每一列分别对应

|      |                          |                                                            |
| ---- | ------------------------ | ---------------------------------------------------------- |
| S0C  | 第一个survivor的容量     |                                                            |
| S1C  | 第二个survivor的容量     |                                                            |
| S0U  | 第一个survivor的使用空间 |                                                            |
| S1U  | 第二个survivor的使用空间 |                                                            |
| EC   | eden容量                 | eden和survivor的比例是8:1:1                                |
| EU   | eden使用空间             |                                                            |
| OC   | 老年代容量               |                                                            |
| OU   | 老年代使用空间           |                                                            |
| MC   | 方法区的容量             |                                                            |
| MU   | 方法区使用空间           |                                                            |
| CCSC | 压缩类容量               | 注意被压缩的不是类，而是对象头中指向类的指针被压缩成32位了 |
| CCSU | 压缩类使用空间           |                                                            |
| YGC  | YGC的次数                |                                                            |
| YGCT | YGC的时间                |                                                            |
| FGC  | FULL GC的次数            |                                                            |
| FGCT | FULL GC的时间            |                                                            |
| GCT  | GC总时间                 |                                                            |



```shell
sh-4.2$ jstat -gc 370 1000 3
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT
1024.0 9728.0 576.0   0.0   485888.0 256731.1 1941504.0   60846.4   67968.0 64626.7 8576.0 7907.2     96    1.053   3      0.343    1.396
1024.0 9728.0 576.0   0.0   485888.0 299599.8 1941504.0   60846.4   67968.0 64626.7 8576.0 7907.2     96    1.053   3      0.343    1.396
1024.0 9728.0 576.0   0.0   485888.0 340310.0 1941504.0   60846.4   67968.0 64626.7 8576.0 7907.2     96    1.053   3      0.343    1.396
```





## GC capacity情况

主要关注各区域最大最小空间

```shell
sh-4.2$ jstat -gccapacity 370 1000 3
 NGCMN    NGCMX     NGC     S0C   S1C       EC      OGCMN      OGCMX       OGC         OC       MCMN     MCMX      MC     CCSMN    CCSMX     CCSC    YGC    FGC
698880.0 10484736.0 850944.0 8192.0 13824.0 213504.0  1398272.0 20970496.0  1941504.0  1941504.0      0.0 1110016.0  68224.0      0.0 1048576.0   8576.0    228     3
698880.0 10484736.0 850944.0 8192.0 13824.0 213504.0  1398272.0 20970496.0  1941504.0  1941504.0      0.0 1110016.0  68224.0      0.0 1048576.0   8576.0    228     3
698880.0 10484736.0 850944.0 8192.0 13824.0 213504.0  1398272.0 20970496.0  1941504.0  1941504.0      0.0 1110016.0  68224.0      0.0 1048576.0   8576.0    228     3
```



## GC cause 情况

主要关注导致GC的原因

```shell
sh-4.2$ jstat -gccause 370 1000 3
  S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT    LGCC                 GCC
 93.81   0.00  73.52   4.29  95.02  92.27    240    2.204     3    0.343    2.546 Allocation Failure   No GC
 93.81   0.00  73.52   4.29  95.02  92.27    240    2.204     3    0.343    2.546 Allocation Failure   No GC
 93.81   0.00  73.53   4.29  95.02  92.27    240    2.204     3    0.343    2.546 Allocation Failure   No GC
```



## GC utils情况

主要关注内存占比

```shell
sh-4.2$ jstat -gcutil 370 1000 3
  S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT
  0.00  96.98  13.54   4.28  95.01  92.27    235    2.167     3    0.343    2.510
  0.00  96.98  13.54   4.28  95.01  92.27    235    2.167     3    0.343    2.510
  0.00  96.98  13.56   4.28  95.01  92.27    235    2.167     3    0.343    2.510
```



## printcompilation情况

JIT的方法

```shell
sh-4.2$ jstat -printcompilation 370 1000 3
Compiled  Size  Type Method
   13367    285    1 javax/management/ObjectName setCanonicalName
   13367    285    1 javax/management/ObjectName setCanonicalName
   13367    285    1 javax/management/ObjectName setCanonicalName
```



# Jinfo

jinfo能输出一个进程的基本信息，包括他的配置、用户、路径、命令行等等

```shell
sh-4.2$ jinfo 370
Attaching to process ID 370, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 25.252-b4
Java System Properties:

java.runtime.name = OpenJDK Runtime Environment
java.vm.version = 25.252-b4
java.protocol.handler.pkgs = org.springframework.boot.loader
path.separator = :
file.encoding.pkg = sun.io
java.vm.name = OpenJDK 64-Bit Server VM
```



# Jhat

jhat是堆快照分析工具，用于分析堆的情况，首先要用jmap导出堆到文件dump.bin中，然后使用jhat分析,再访问7000端口即可

```shell
sh-4.2$ jhat  dump.bin
Reading from dump.bin...
Dump file created Fri Sep 24 19:38:36 CST 2021
Snapshot read, resolving...
Resolving 4748880 objects...
Chasing references, expect 949 dots.............
Eliminating duplicate references..............
Snapshot resolved.
Started HTTP server on port 7000
Server is ready.
```

![截屏2021-09-24 下午7.41.56](/images/image-2021-09-24-19.42.00.000.png)

# Javah

用于编写JNI方法

# JavaP

字节码分析工具



# Jshell

Java交互式工具

```shell
sh-4.2$ jshell
|  欢迎使用 JShell -- 版本 16.0.2
|  要大致了解该版本, 请键入: /help intro

jshell> int a = 1
a ==> 1

jshell> int b = 1
b ==> 1

jshell> System.out.print(a+b)
2
jshell>
```























