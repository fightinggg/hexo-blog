---
date: 2020-03-24 14:37:30
updated: 2020-03-24 14:37:30
---

# hadoop 
 hadoop = common+hdfs+mapreduce+yarn

# common
 工具、rpc通信

# hdfs
 分布式文件系统，一个文件分成多个128Mb的文件，存储在多个节点，为了保证分区容错性，存有备份，默认为3。主从架构。

<!-- more -->

## namenode
用来记录各个文件的block的编号、各个block的位置、抽象目录树

处理读写请求

可以有多个namenode

## secondarynamenode
 用来备份namenode,当namenode宕机的时候，帮助namenode恢复
## datanode
 用来储存数据
## 副本机制
 如果一个datanode挂了，就再开一个datanode，然后吧挂了的数据通过备份推出来存进去，如果之前那个挂了的又活了，则选择一个节点删掉。副本过多将导致维护成本提高
## 优点
- 可构建在廉价机器上
- 高容错性 : 自动恢复
## 缺点
- 不支持数据修改(尽管支持改名和删除)
- 延迟高
- 不擅长存储小文件，寻址时间长，空间利用低


# yarn
 资源调度、管理框架
- resourcemanager 统筹资源
- nodemanager 资源调度

# mapreduce
 分布式计算框架