---
title: linux指令学习15-git删除
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
abbrlink: 798d07dd
date: 2020-03-29 18:28:45
---

# git删除
&emsp;&emsp; 将文件删除
```
git rm a.txt
```
&emsp;&emsp; 我们看到了如下的输出,我们看到他说文件被修改了，即暂存区和版本库中的文件不一致
```
error: the following file has changes staged in the index:
    a.txt
(use --cached to keep the file, or -f to force removal)
```
&emsp;&emsp; 我们提交,然后删除,这里就直接成功了
```
git commit -m 'recover a.txt'
git rm a.txt
```

<!---more-->
&emsp;&emsp; 下面考虑另外一种情况，我们先撤销这次删除,并对a.txt进行修改,然后再次删除
```
git reset -- a.txt
git checkout a.txt
echo "add">> a.txt
git rm a.txt
```
&emsp;&emsp; 又遇到问题了，我们的暂存区和工作区的文件不一致
```
error: the following file has local modifications:
    a.txt
(use --cached to keep the file, or -f to force removal)
```
&emsp;&emsp; 这些的删除本身就是危险的，不建议删除，但我们依然可以使用-f来强制删除
```
git rm a.txt -f
```

