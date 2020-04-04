---
title: linux指令学习7-echo head 和tail
mathjax: true
categories:
  - linux指令学习
tags:
  - linux指令学习
keywords:
  - linux指令学习
abbrlink: bbee3fb2
date: 2020-03-27 13:14:04
---

# echo 
&emsp;&emsp; 一般用于输出信息，
&emsp;&emsp; 输出了abc
```
echo "abc"
```
&emsp;&emsp; 输出环境变量， 
```
echo $PATH
```
<!---more-->
# head
&emsp;&emsp; 查看文件的前几行
&emsp;&emsp; 看vim配置文件前10行
```
head ~/.vimrc
```
&emsp;&emsp; 看vim配置文件的前20行，-n表示行数
```
head -n 20 ~/.vimrc
```

# tail
&emsp;&emsp; 查看结尾几行，同上
&emsp;&emsp; 监控a.txt,当他被追加的时候，输出追加的信息
```
tail -f a.txt
```
