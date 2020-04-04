---
title: linux指令学习6-重定向和追加
mathjax: true
categories:
  - linux指令学习
tags:
  - linux指令学习
keywords:
  - linux指令学习
abbrlink: 743184c9
date: 2020-03-27 13:05:19
---

# &gt; 和&gt;&gt;
&emsp;&emsp; &gt;是输出重定向，会覆盖内容，&gt;&gt;是追加，不会覆盖

# 例子
&emsp;&emsp; ls -l 会输出一些内容，这些叫输出，&gt;a.txt会写入a.txt，当然也可以用&gt;&gt;来追加,后面只演示&gt;,不演示&gt;&gt;了
```
ls -l > a.txt
```
<!---more-->

# 例子2
&emsp;&emsp; 将cat的输出重定向到b.txt中
```
cat a.txt > b.txt
```

# echo
&emsp;&emsp; 输出 abcde
```
echo "abcde"
```
&emsp;&emsp; 将abcde写入a.txt
```
echo "abcde" > a.txt
```

# cal
&emsp;&emsp; cal显示日历
&emsp;&emsp; 将日历输出到a.txt
```
cal > a.txt 
```

