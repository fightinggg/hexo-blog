---
date: 2020-03-27 13:45:24
updated: 2020-03-27 13:45:24
mathjax: true
---

# find

 在用户文件夹下找名为.vimrc的文件
```
find ~ -name .vimrc
```
 在用户文件夹下找名为.vimrc属于用户s的文件

```
find ~ -user s -name .vimrc
```

<!---more-->
 在用户文件夹下找大于100M的文件
```
find ~ -size +100M
```
 在用户文件夹下找小于100M的文件
```
find ~ -size -100M
```
 在用户文件夹下找等于100M的文件
```
find ~ -size 100M
```
 通配符
```
find ~ -name *.txt
```


# locate
 根据数据库快速定位文件的位置，
更新数据库
```
updatedb
```
根据数据库快速定位a.txt
```
locate a.txt 
```

# 管道
 将前一个指令的输出传递给后一个指令处理
```
|
```

# grep

 寻找let，并输出行号和行数据，-n表示输出行号，-i表示不区分大小写，
```
grep -n -i let ~/.vimrc
```
 通过管道将cat的结果传递给grep，同上
```
cat ~/.vimrc | grep -ni let
```