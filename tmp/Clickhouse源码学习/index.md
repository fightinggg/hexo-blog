---
date: 2022-07-31 15:48:00
date: 2022-07-31 15:48:00
tags: [Clickhouse,源码]
---

# 搭建Clickhouse源码学习环境
Clickhouse源码不是比较好运行，强烈建议大家专门为Clickhouse搭建一套学习环境，笔者这里选用的是[VirutalBox虚拟机](https://www.virtualbox.org/)搭建[Ubuntu22.04-server环境](https://ubuntu.com/download/server)

注意CPU给多一点，不然太卡；注意储存空间不要分配太小，笔者第一次空间就分配少了，只给了25GB的磁盘，后来很难受；宿主机必须要有[VPN网络](https://fightinggg.github.io/RFJ220.html)，虚拟机选择NAT网络模式共享VPN,否则不论是前期的操作系统安装（在线更新），还是后期的源码下载、依赖下载，都会非常非常慢


