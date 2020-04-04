---
title: linux指令学习12-git安装和初始化
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
abbrlink: 82f3cbc
date: 2020-03-27 14:38:47
---

# Git安装
&emsp;&emsp; 官网下去[git官网](https://git-scm.com)

# 创建工作空间
&emsp;&emsp; 我们先创建一个工作空间myGit，在其中创建一个项目project，植入两个文件a.txt和b.txt，并分别写入"a"和"b"
```
cd ~ 
mkdir -p myGit/project
cd myGit/project
touch a.txt b.txt
echo "a" >> a.txt
echo "b" >> b.txt
```
# 初始化git
&emsp;&emsp; 紧接着我们用git初始化这个项目
```
git init
```
<!---more-->
&emsp;&emsp; 我们看到了输出,他的意思是我们创建了一个空的git仓库
```
Initialized empty Git repository in /Users/s/myGit/project/.git/
```
&emsp;&emsp; 他的意思是说我们的git没有追踪任何一个文件，我们可以通过下面对指令来查看git的状态
```
git status
```
&emsp;&emsp; 紧接着我们得到了反馈,他说没有提交过，并且a.txt和b.txt没有被追踪，他让我们使用add来添加追踪。
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	a.txt
	b.txt

nothing added to commit but untracked files present (use "git add" to track)
```
&emsp;&emsp; 我们尝试使用下面的指令为a.txt追踪,然后再查看状态
```
git add a.txt
git status
```
&emsp;&emsp; 这时候我们的反馈就不一样了，他说我们的a.txt已经进入了git的暂存区
```
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   a.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	b.txt

```
# git的结构和状态
## git的三层结构
&emsp;&emsp; 工作区，即我们文件默认的地方，暂存区，即git暂时保留文件的地方，版本库，git保存文件版本的地方
## git中文件的状态
&emsp;&emsp; 文件分为4个状态，untracked未被追踪，modified工作区修改了文件，但没有添加进暂存区，staged添加到了暂存区但是没有提交到版本库，conmitted数据安全的储存在了本地库中。
## 配置git
```
git config --global user.email "246553278@qq.com"
git config --global user.name "fightinggg"
```
## 查看git配置
&emsp;&emsp; 我们可以输入如下指令来查看当前的git配置情况
```
git config --list
```
&emsp;&emsp; 之后我们就会看到下面的输出
```
credential.helper=osxkeychain
user.name=fightinggg
user.email=246553278@qq.com
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
```



