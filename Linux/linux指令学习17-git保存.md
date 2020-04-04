---
title: linux指令学习17-git保存
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
abbrlink: 66a25f47
date: 2020-03-29 18:47:33
---

# 保存
&emsp;&emsp; 将工作区和暂存区的资料保存到栈
```
git stash
```
&emsp;&emsp; 查看栈保存的资料
```
git stash list
```
&emsp;&emsp; 从栈恢复资料
```
git stash apply 0

```
&emsp;&emsp; 删除栈中的资料
```
git stash drop 0
```

<!---more-->
