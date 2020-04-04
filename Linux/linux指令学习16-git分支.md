---
title: linux指令学习16-git分支
mathjax: true
categories:
  - linux指令学习
  - git指令
tags:
  - linux指令学习
  - git指令
keywords:
  - linux指令学习
  - git指令
abbrlink: 4c1671c6
date: 2020-03-29 18:46:19
---

# git分支
&emsp;&emsp; 先看看如何查看分支
```
git branch
```
&emsp;&emsp; 得到了输出
```
* master
```
&emsp;&emsp; 创建分支
```
git branch dev
```
&emsp;&emsp;  得到下面的输出，其中\*表示当前分支
```
  dev
* master
```

<!---more-->
&emsp;&emsp; 切换分支,再次查看分支
```
git checkout dev
git branch
```
&emsp;&emsp; 我们发现dev现在成为了当前分支了
```
* dev
  master
```
&emsp;&emsp; 删除dev分支,直接报错了，因为当前分支是dev分支
```
git branch -d dev
```
&emsp;&emsp; 切换分支并删除dev
```
git checkout master
git branch -d dev
```
&emsp;&emsp; 创建分支，然后修改分支名
```
git branch b1
git branch -m b1 b2
```
&emsp;&emsp; 注意到执行两次这个操作后,报错了，他说名字不能重复
```
fatal: A branch named 'b2' already exists.
```
&emsp;&emsp; 现在我们的分支为
```
  b1
  b2
* master
```
&emsp;&emsp; 创建分支并切换
```
git checkout -b b3  
```

# 分支控制
&emsp;&emsp; 比较工作区和暂存区
```
git diff
```
&emsp;&emsp; 比较暂存区和版本库
```
git diff --staged
```
&emsp;&emsp; 比较版本
```
git diff 0923131  105a02a
```
&emsp;&emsp; 比较分支
```
git diff b1 b2
```
&emsp;&emsp; 合并分支
```
git merge b1
```

