---
title: linux指令学习3-touch和cp
mathjax: true
categories:
  - linux指令学习
tags:
  - linux指令学习
keywords:
  - linux指令学习
abbrlink: 4e68a793
date: 2020-03-27 12:32:45
---

# touch
&emsp;&emsp; 创建文件，我常用vim
```
touch a.txt b.txt c.txt 
```

<!---more-->

# cp
&emsp;&emsp; 将a.txt拷贝到用户目录下
```
cp a.txt ~/
```
&emsp;&emsp; 将a这个文件夹全部拷贝到用户目录，-r指的是递归
```
cp -r a/ ~/
```
&emsp;&emsp; \cp可以强制覆盖不提示，在mac中直接覆盖了，不需要\cp




