---
date: 2020-04-07 15:07:57
updated: 2020-04-07 15:07:57
mathjax: true
---

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