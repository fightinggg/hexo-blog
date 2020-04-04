---
title: linux指令学习4-rm和mv
mathjax: true
categories:
  - linux指令学习
tags:
  - linux指令学习
keywords:
  - linux指令学习
abbrlink: 53cbb430
date: 2020-03-27 12:46:29
---

# rm
&emsp;&emsp; 删除a.txt，
```
rm a.txt
```
&emsp;&emsp; 删除目录a, -r为递归
```
rm -r a/
```
&emsp;&emsp; 删除目录a，-f为不提示 可与-r合并为-rf
```
rm -r -f a/
```
<!---more-->
# mv
&emsp;&emsp; 将a.txt重命名为b.txt
```
mv a.txt b.txt
```
&emsp;&emsp; 将a.txt一定到用户目录，如果那有的话，mac不提示是否替换，直接替换，有点不人道了。
```
mv a.txt ~/
```


