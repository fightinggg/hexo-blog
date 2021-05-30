---
date: 2020-03-27 14:38:47
updated: 2020-03-29 18:48:10
mathjax: true

---


# 创建工作空间

 我们先创建一个工作空间myGit，在其中创建一个项目project，植入两个文件a.txt和b.txt，并分别写入"a"和"b"

```
cd ~ 
mkdir -p myGit/project
cd myGit/project
touch a.txt b.txt
echo "a" >> a.txt
echo "b" >> b.txt
```

# 初始化git

 紧接着我们用git初始化这个项目

```
git init
```

<!-- more -->

 我们看到了输出,他的意思是我们创建了一个空的git仓库

```
Initialized empty Git repository in /Users/s/myGit/project/.git/
```

 他的意思是说我们的git没有追踪任何一个文件，我们可以通过下面对指令来查看git的状态

```
git status
```

 紧接着我们得到了反馈,他说没有提交过，并且a.txt和b.txt没有被追踪，他让我们使用add来添加追踪。

```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	a.txt
	b.txt

nothing added to commit but untracked files present (use "git add" to track)
```

 我们尝试使用下面的指令为a.txt追踪,然后再查看状态

```
git add a.txt
git status
```

 这时候我们的反馈就不一样了，他说我们的a.txt已经进入了git的暂存区

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

 工作区，即我们文件默认的地方，暂存区，即git暂时保留文件的地方，版本库，git保存文件版本的地方

## git中文件的状态

 文件分为4个状态，untracked未被追踪，modified工作区修改了文件，但没有添加进暂存区，staged添加到了暂存区但是没有提交到版本库，conmitted数据安全的储存在了本地库中。

## 配置git

```
git config --global user.email "246553278@qq.com"
git config --global user.name "fightinggg"
```

## 查看git配置

 我们可以输入如下指令来查看当前的git配置情况

```
git config --list
```

 之后我们就会看到下面的输出

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




# 提交

 然后我们就可以尝试去提交我们的

```
git commit -m 'first commit'
```

 我们得到了如下输出

```
[master (root-commit) 913bc88] first commit
 1 file changed, 1 insertion(+)
 create mode 100644 a.txt
```

 查看git日志

```
git log
```


得到了输出

```
commit 913bc886088dabee0af5b06351450cad60102c23 (HEAD -> master)
Author: fightinggg <246553278@qq.com>
Date:   Sun Mar 29 16:45:19 2020 +0800

    first commit
```

 我们尝试将b.txt也提交上去

```
git add b.txt
git commit -m 'second commit'
```

 再次查看log

```
commit fbdd818849343a78d0e6ccd8d5ce0f35d9d8b123 (HEAD -> master)
Author: fightinggg <246553278@qq.com>
Date:   Sun Mar 29 16:48:56 2020 +0800

    second commit

commit 913bc886088dabee0af5b06351450cad60102c23
Author: fightinggg <246553278@qq.com>
Date:   Sun Mar 29 16:45:19 2020 +0800

    first commit
```

# 更多的文件

 加入更多的文件

```
touch a2.txt a3.txt a4.txt a5.txt
```

 将他们全部提交

```
git add .
git commit -m 'third commit'
git log
```

 我们现在看到有了3次提交

```
commit 9d1f0b1c3ecd11e5c629c0dd0bfdf4118ad4e999 (HEAD -> master)
Author: fightinggg <246553278@qq.com>
Date:   Sun Mar 29 16:52:36 2020 +0800

    third commit

commit fbdd818849343a78d0e6ccd8d5ce0f35d9d8b123
Author: fightinggg <246553278@qq.com>
Date:   Sun Mar 29 16:48:56 2020 +0800

    second commit

commit 913bc886088dabee0af5b06351450cad60102c23
Author: fightinggg <246553278@qq.com>
Date:   Sun Mar 29 16:45:19 2020 +0800

    first commit
```

# 修改后的文件

 如果我们修改了一个文件

```
echo "hellp" >> a.txtgit status
```

 我们看到了git提示有文件被修改了

```
On branch masterChanges not staged for commit:  (use "git add <file>..." to update what will be committed)  (use "git checkout -- <file>..." to discard changes in working directory)	modified:   a.txtno changes added to commit (use "git add" and/or "git commit -a")
```

 将它提交

```
git commit -am 'modified a.txt'
```

 看到了输出

```
commit 2e625b6f5de426675e4d2edf8ce86a75acc360de (HEAD -> master)Author: fightinggg <246553278@qq.com>Date:   Sun Mar 29 16:57:43 2020 +0800    modified a.txtcommit 9d1f0b1c3ecd11e5c629c0dd0bfdf4118ad4e999Author: fightinggg <246553278@qq.com>Date:   Sun Mar 29 16:52:36 2020 +0800    third commitcommit fbdd818849343a78d0e6ccd8d5ce0f35d9d8b123Author: fightinggg <246553278@qq.com>Date:   Sun Mar 29 16:48:56 2020 +0800    second commitcommit 913bc886088dabee0af5b06351450cad60102c23Author: fightinggg <246553278@qq.com>Date:   Sun Mar 29 16:45:19 2020 +0800    first commit
```

# 追加提交

 如果我们发现上一次的提交是没有用的，或者说不想让它出现，又或者说想把它删了，我们使用如下指令

```
echo "b" >> b.txtgit commit --amend
```

 我们发现我们进入到了vim中

```
modified a.txt# Please enter the commit message for your changes. Lines starting# with '#' will be ignored, and an empty message aborts the commit.## Date:      Sun Mar 29 16:57:43 2020 +0800## On branch master# Changes to be committed:#	modified:   a.txt## Changes not staged for commit:#	modified:   b.txt#
```

 我们将它修改为

```
modified a.txt b.txt# Please enter the commit message for your changes. Lines starting# with '#' will be ignored, and an empty message aborts the commit.## Date:      Sun Mar 29 16:57:43 2020 +0800## On branch master# Changes to be committed:#	modified:   a.txt## Changes not staged for commit:#	modified:   b.txt#
```

 最后再次查看log

```
git log --oneline
```

 我们得到了下面的输出，上一次的提交被现在的提交覆盖了

```
105a02a (HEAD -> master) modified a.txt b.txt9d1f0b1 third commitfbdd818 second commit913bc88 first commit
```

# 撤销

 假设你犯了一个严重的错误

```
rm *.txt
```

 代码没了我们来看看git的状态

```
git status
```

 看到了如下的输出

```
On branch masterChanges not staged for commit:  (use "git add/rm <file>..." to update what will be committed)  (use "git checkout -- <file>..." to discard changes in working directory)	deleted:    a.txt	deleted:    a2.txt	deleted:    a3.txt	deleted:    a4.txt	deleted:    a5.txt	deleted:    b.txtno changes added to commit (use "git add" and/or "git commit -a")
```

<!---more-->
 check

```
git checkout
```

  看到了这些输出,他说我们删了很多东西，其实和git status的一样

```
D	a.txtD	a2.txtD	a3.txtD	a4.txtD	a5.txtD	b.txt
```

 从暂存区恢复指定文件

```
git checkout -- a.txtcat a.txt
```

 我们发现a.txt已经恢复了,输出如下

```
a.txt
```

 恢复所有文件

```
git checkout -- .ls 
```

 看到了输出,终于我们的文件全部恢复，

```
a.txt	a2.txt	a3.txt	a4.txt	a5.txt	b.txt
```

 恢复更老的版本？使用reset将暂存区的文件修改为版本913bc886088dabee0af5b06351450cad60102c23的a.txt

```
git reset 913bc886088dabee0af5b06351450cad60102c23 a.txtgit status
```

 我们注意下面的输出,有两条提示，第一条说改变没有被提交，是因为暂存区和版本区的文件不一致，第二条说修改没有储存到暂存区，这是因为工作区和暂存区的文件不一致造成的。

```
On branch masterChanges to be committed:  (use "git reset HEAD <file>..." to unstage)	modified:   a.txtChanges not staged for commit:  (use "git add <file>..." to update what will be committed)  (use "git checkout -- <file>..." to discard changes in working directory)	modified:   a.txt
```

 这时候我们就可以使用checkout将暂存区的文件拿出来放到工作区，

```
git checkout -- a.txtcat a.txtgit status
```

 我们发现a.txt已经恢复到初始的版本的了。我们查看状态发现工作区和暂存区的差异已经消失了，这就已经达到了恢复文件的目的。

```
On branch masterChanges to be committed:  (use "git reset HEAD <file>..." to unstage)	modified:   a.txt
```

# git删除

 将文件删除

```
git rm a.txt
```

 我们看到了如下的输出,我们看到他说文件被修改了，即暂存区和版本库中的文件不一致

```
error: the following file has changes staged in the index:    a.txt(use --cached to keep the file, or -f to force removal)
```

 我们提交,然后删除,这里就直接成功了

```
git commit -m 'recover a.txt'git rm a.txt
```

<!---more-->
 下面考虑另外一种情况，我们先撤销这次删除,并对a.txt进行修改,然后再次删除

```
git reset -- a.txtgit checkout a.txtecho "add">> a.txtgit rm a.txt
```

 又遇到问题了，我们的暂存区和工作区的文件不一致

```
error: the following file has local modifications:    a.txt(use --cached to keep the file, or -f to force removal)
```

 这些的删除本身就是危险的，不建议删除，但我们依然可以使用-f来强制删除

```
git rm a.txt -f
```

# git分支

 先看看如何查看分支

```
git branch
```

 得到了输出

```
* master
```

 创建分支

```
git branch dev
```

  得到下面的输出，其中\*表示当前分支

```
  dev* master
```

切换分支,再次查看分支

```
git checkout devgit branch
```

 我们发现dev现在成为了当前分支了

```
* dev  master
```

 删除dev分支,直接报错了，因为当前分支是dev分支

```
git branch -d dev
```

 切换分支并删除dev

```
git checkout mastergit branch -d dev
```

 创建分支，然后修改分支名

```
git branch b1git branch -m b1 b2
```

 注意到执行两次这个操作后,报错了，他说名字不能重复

```
fatal: A branch named 'b2' already exists.
```

 现在我们的分支为

```
  b1  b2* master
```

 创建分支并切换

```
git checkout -b b3  
```

# 分支控制

 比较工作区和暂存区

```
git diff
```

 比较暂存区和版本库

```
git diff --staged
```

 比较版本

```
git diff 0923131  105a02a
```

 比较分支

```
git diff b1 b2
```

 合并分支

```
git merge b1
```

# 保存

 将工作区和暂存区的资料保存到栈

```
git stash
```

 查看栈保存的资料

```
git stash list
```

 从栈恢复资料

```
git stash apply 0
```

 删除栈中的资料

```
git stash drop 0
```

# 推入远程仓库

 先建立一个快捷访问

```
git remote add unimportant git@github.com:fightinggg/unimportant.gitgit remote -v
```

 看到了输出

```
unimportant	git@github.com:fightinggg/unimportant.git (fetch)unimportant	git@github.com:fightinggg/unimportant.git (push)
```

 推入

```
git push unimportant master
```

看到是成功了的

```
Enumerating objects: 13, done.Counting objects: 100% (13/13), done.Delta compression using up to 4 threadsCompressing objects: 100% (8/8), done.Writing objects: 100% (13/13), 1.00 KiB | 1.00 MiB/s, done.Total 13 (delta 2), reused 0 (delta 0)remote: Resolving deltas: 100% (2/2), done.To github.com:fightinggg/unimportant.git * [new branch]      master -> master
```

 拉回

```
git pull unimportant master
```

 也看到成功了

```
From github.com:fightinggg/unimportant * branch            master     -> FETCH_HEADAlready up to date.
```

# 在服务器搭建远程仓库

```
mkdir /wsx.com.git cd wsx.com.gitgit init --bare
```

 使用方式

```
git push ssh://root@<IP>/wsx.com.git master
```




# Docker Git

```sh
docker run -it --rm \
	-v ${HOME}:/root \
	-v $(pwd):/git \
	alpine/git \
	clone https://github.com/alpine-docker/git.git
```

# 源码安装

```sh
gitVersion=2.29.2
yum install -y curl-devel expat-devel gettext-devel \
    openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker \
    autoconf automake make libtool wget;\
wget https://github.com/git/git/archive/v$gitVersion.tar.gz; \
tar -zxf v$gitVersion.tar.gz; \
cd /git-$gitVersion; \
make prefix=/usr/local/git all; \
make prefix=/usr/local/git install; \
echo "GIT_HOME=/usr/local/git" >> ~/.bashrc; \
echo "PATH=\$GIT_HOME/bin:\$PATH" >> ~/.bashrc; \
source ~/.bashrc; \
git --version;   
```

修改Git默认编辑器

```sh
 git config --global core.editor "vim"
```

# GIT提交规范

```txt
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
```

# 提交Tag

```
git push origin --tags
```

# 设置代理

```sh
git config --global http.proxy 'socks5://127.0.0.1:1081'
git config --global https.proxy 'socks5://127.0.0.1:1081'
```



