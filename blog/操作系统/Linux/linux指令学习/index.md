---
date: 2020-03-27 12:11:28
updated: 2020-04-07 15:25:07
tags: linux指令
---

# MAN 操作手册

学linux，必须知道如何使用man，首先是安装man，或者在[这里](https://man7.org/linux/man-pages/dir_all_alphabetic.html)逛逛

```sh
yum -y install man-pages
```

# 下载
下载东西可以使用curl指令，如
```
curl baidu.com -O -L
```
也可以使用wget指令,如
```
wget baidu.com
```


# Linux运行级别

 linux一共有7个级别，分别为
0关机、
1单用户、
2无网多用户、
3有网多用户，
4保留，
5图形界面，
6重启。
在文件/etc/inittab中指定了级别。

<!---more-->

# 查看运行级别
 查看文件/etc/inittab 

# 修改运行级别
```
init 3
```

# 如何找回root密码
 进入单用户模式，然后修改密码，因为进入单用户模式不需要密码就可以登陆。
 进入grub中，按e编辑指令，修改kernel，输入1进入单用户级别，输入b启动,用passwd root修改密码



# mkdir

 在用户文件夹下创建hello
```
mkdir ~/hello 
```
 多级目录需要加上-p参数
```
mkdir ~/h/h/h
```
<!---more-->

# rmdir
 删除空文件夹
```
rmdir ~/hello
```
 删除非空文件夹
```
rm -rf
```



# touch
 创建文件，我常用vim
```
touch a.txt b.txt c.txt 
```

<!---more-->

# cp
 将a.txt拷贝到用户目录下
```
cp a.txt ~/
```
 将a这个文件夹全部拷贝到用户目录，-r指的是递归
```
cp -r a/ ~/
```
 \cp可以强制覆盖不提示，在mac中直接覆盖了，不需要\cp


 # rm
 删除a.txt，
```
rm a.txt
```
 删除目录a, -r为递归
```
rm -r a/
```
 删除目录a，-f为不提示 可与-r合并为-rf
```
rm -r -f a/
```
<!---more-->
# mv
 将a.txt重命名为b.txt
```
mv a.txt b.txt
```
 将a.txt一定到用户目录，如果那有的话，mac不提示是否替换，直接替换，有点不人道了。
```
mv a.txt ~/
```


# cat
 cat是浏览文件
 就能看到配置文件了
```
cat ~/.vimrc
```
 -n 能够显示行号
```
cat -n ~/.vimrc
```
 more是一个类似于vim的东西，能够把文件分页，用空格看下一行，用enter看下一页，用&lt;C-F&gt;和&lt;C-B&gt;翻页，用=输出行号，用fb也可以翻页。
```
cat -n ~/.vimrc | more
```

<!---more-->
# more
 直接完成
```
more ~/.vimrc 
```

# less
 基于显示的懒加载方案，打开文件非常快
 几乎和more一样，就是开大文件快一点，可以用来打开日志。
```
less ~/.vimrc
```




# &gt; 和&gt;&gt;
 &gt;是输出重定向，会覆盖内容，&gt;&gt;是追加，不会覆盖

# 例子
 ls -l 会输出一些内容，这些叫输出，&gt;a.txt会写入a.txt，当然也可以用&gt;&gt;来追加,后面只演示&gt;,不演示&gt;&gt;了
```
ls -l > a.txt
```
<!---more-->

# 例子2
 将cat的输出重定向到b.txt中
```
cat a.txt > b.txt
```

# echo
 输出 abcde
```
echo "abcde"
```
 将abcde写入a.txt
```
echo "abcde" > a.txt
```

# cal
 cal显示日历
 将日历输出到a.txt
```
cal > a.txt 
```



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


# ln
 建立软链接(快捷方式)
 创建一个用户目录的软链接到当前目录，这个软链接叫mylink
```
ln -s ~ mylink
```

<!---more-->

# history
 查看最近执行的指令
 mac中不太一样，history 10 表示查看第10条指令到现在的指令
 查看最近执行的10条指令
```
history 10
```
执行第10调指令
```
!10
```

# date
 date可以看到时间,后面是格式设置
```
date "+%Y-%m-%d 星期%w %H:%M:%S"
```

<!---more-->

## 设置日期
 -s 表示设置时间
```
date -s "2021-1-1 1:1:1"
```

# cal
 cal直接查看当前月的日历
 看2020n年的日历
```
cal 2020 
```



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


# netstat
 netstat可以显示网络状态，
```shell script
netstat -a
```
 netstat可以显示网卡
```shell script
netstat -i
```
<!--more-->
 我们看到了输出
```shell script
Name       Mtu   Network       Address            Ipkts Ierrs    Opkts Oerrs  Coll
lo0   16384 <Link#1>                        529008     0   529008     0     0
lo0   16384 127           localhost         529008     -   529008     -     -
lo0   16384 localhost   ::1                 529008     -   529008     -     -
lo0   16384 s-2.local   fe80:1::1           529008     -   529008     -     -
gif0* 1280  <Link#2>                             0     0        0     0     0
stf0* 1280  <Link#3>                             0     0        0     0     0
XHC20 0     <Link#4>                             0     0        0     0     0
XHC0* 0     <Link#5>                             0     0        0     0     0
en0   1500  <Link#6>    f0:18:98:04:fb:91  2816466     0  2459809     0     0
en0   1500  s-2.local   fe80:6::18f3:f6a:  2816466     -  2459809     -     -
en0   1500  192.168.0     192.168.0.106    2816466     -  2459809     -     -
en1   1500  <Link#7>    82:37:90:29:8c:01        0     0        0     0     0
en2   1500  <Link#8>    82:37:90:29:8c:00        0     0        0     0     0
bridg 1500  <Link#9>    82:37:90:29:8c:01        0     0        1     0     0
p2p0  2304  <Link#10>   02:18:98:04:fb:91        0     0        0     0     0
awdl0 1484  <Link#11>   3e:c1:fd:7a:da:c8      131     0       99     0     0
awdl0 1484  fe80::3cc1: fe80:b::3cc1:fdff      131     -       99     -     -
llw0  1500  <Link#12>   3e:c1:fd:7a:da:c8        0     0        0     0     0
llw0  1500  fe80::3cc1: fe80:c::3cc1:fdff        0     -        0     -     -
utun0 1380  <Link#13>                            0     0        4     0     0
utun0 1380  s-2.local   fe80:d::a38c:4185        0     -        4     -     -
utun1 2000  <Link#14>                            0     0        4     0     0
utun1 2000  s-2.local   fe80:e::1c71:618a        0     -        4     -     -
utun2 1380  <Link#15>                            2     0       36     0     0
utun2 1380  s-2.local   fe80:f::d494:4c0e        2     -       36     -     -
utun3 1380  <Link#16>                            0     0        4     0     0
utun3 1380  s-2.local   fe80:10::b7d4:8de        0     -        4     -     -
```
 netstat查看udp连接
```shell script
netstat -a -p udp
```
 看到了如下输出
```shell script
Active Internet connections (including servers)
Proto Recv-Q Send-Q  Local Address          Foreign Address        (state)
udp4       0      0  *.65006                *.*
udp4       0      0  *.49684                *.*
udp4       0      0  *.53824                *.*
udp4       0      0  *.63924                *.*
udp4       0      0  *.52738                *.*
udp4       0      0  *.59184                *.*
udp4       0      0  *.55333                *.*
udp4       0      0  *.52971                *.*
udp4       0      0  *.*                    *.*
udp4       0      0  *.*                    *.*
udp4       0      0  *.61025                *.*
udp4       0      0  *.xserveraid           *.*
udp4       0      0  *.mdns                 *.*
udp6       0      0  *.62311                *.*
udp4       0      0  *.62311                *.*
udp6       0      0  *.63490                *.*
udp4       0      0  *.63490                *.*
```



# 用户分组
 linux中每个文件和目录都有访问权限，分别是只读、只写、可执行

# 权限分类
 用户权限即自己的权限，用户组权限即同组人的权限，其他权限即和自己不同组的人的权限，所有人的权限即所有人的权限

<!--more-->

# 权限

符号|操作|数字
-|-|-
r|读|4
w|写|2
x|执行|1
d|目录
+|增加权限
-|取消权限
=|赋予权限并取消其他权限


# chmodu
 修改文件的权限





















# 参考

[文件权限中 chmod、u+x、u、r、w、x分别代表什么](https://blog.csdn.net/BjarneCpp/article/details/79912495)
