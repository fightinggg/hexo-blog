---
date: 2020-03-27 13:14:04
updated: 2020-03-27 13:14:04
mathjax: true
---

# echo 
 一般用于输出信息，
 输出了abc
```
echo "abc"
```
 输出环境变量， 
```
echo $PATH
```
<!---more-->
# head
 查看文件的前几行
 看vim配置文件前10行
```
head ~/.vimrc
```
 看vim配置文件的前20行，-n表示行数
```
head -n 20 ~/.vimrc
```

# tail
 查看结尾几行，同上
 监控a.txt,当他被追加的时候，输出追加的信息
```
tail -f a.txt
```