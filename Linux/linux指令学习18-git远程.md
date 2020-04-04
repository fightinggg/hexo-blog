---
title: linux指令学习18-git远程·
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
abbrlink: 4101dfbd
date: 2020-03-29 18:48:10
---



# 推入远程仓库
&emsp;&emsp; 先建立一个快捷访问
```
git remote add unimportant git@github.com:fightinggg/unimportant.git
git remote -v
```
&emsp;&emsp; 看到了输出
```
unimportant	git@github.com:fightinggg/unimportant.git (fetch)
unimportant	git@github.com:fightinggg/unimportant.git (push)
```
&emsp;&emsp; 推入
```
git push unimportant master
```

<!---more-->
&emsp;&emsp; 看到是成功了的
```
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 4 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (13/13), 1.00 KiB | 1.00 MiB/s, done.
Total 13 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
To github.com:fightinggg/unimportant.git
 * [new branch]      master -> master
```
&emsp;&emsp; 拉回
```
git pull unimportant master
```
&emsp;&emsp; 也看到成功了
```
From github.com:fightinggg/unimportant
 * branch            master     -> FETCH_HEAD
Already up to date.
```

# 在服务器搭建远程仓库
```
mkdir /wsx.com.git 
cd wsx.com.git
git init --bare
```
&emsp;&emsp; 使用方式
```
git push ssh://root@<IP>/wsx.com.git master
```
