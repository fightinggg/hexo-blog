---
date: 2020-03-27 14:24:18
updated: 2020-03-27 14:24:18
mathjax: true
---

# gzip gunzip
 将hello.txt压缩为hello.txt.gz
```
gzip hello.txt 
```
 将hello.txt.gz解压为hello.txt
```
gunzip hello.txt.gz
```

<!---more-->
# zip 与 unzip
 把用户目录下的所有文件压缩到res.zip中
```
zip -r res.zip ~
```
 把res.zip解压到~/res中
```
unzip -d ~/res res.zip
```

# rar 与 unrar
 有这东西，很少用

# tar
 -z是打包同时压缩，-c是产生.tar文件，-v是显示详细信息，-f是指定压缩后的文件名 res.tar.gz是打包后的文件，其后为打包文件

```
-zcvf res.tar.gz a.txt b.txt
```
 对a文件夹打包
```
-zcvf res.tar.gz a/
```
 解压到当前目录
```
-zxvf res.tar.gz 
```
  指定解压到~中
```
-zxvf res.tar.gz -c ~ 
```