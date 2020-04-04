---
title: linux指令学习8-软链接和history
mathjax: true
categories:
  - linux指令学习
tags:
  - linux指令学习
keywords:
  - linux指令学习
abbrlink: 6598ffe
date: 2020-03-27 13:26:01
---

# ln
&emsp;&emsp; 建立软链接(快捷方式)
&emsp;&emsp; 创建一个用户目录的软链接到当前目录，这个软链接叫mylink
```
ln -s ~ mylink
```

<!---more-->

# history
&emsp;&emsp; 查看最近执行的指令
&emsp;&emsp; mac中不太一样，history 10 表示查看第10条指令到现在的指令
&emsp;&emsp; 查看最近执行的10条指令
```
history 10
```
&emsp;&emsp;执行第10调指令
```
!10
```
