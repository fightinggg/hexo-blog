---
date: 2021-03-30 13:00:00
updated: 2021-03-30 13:00:00
typora-root-url: ..\..
---

# 深入理解Kafka: 核心设计与原理实践（未完结）

![image-2021-03-30-12.58.25.640](/images/image-2021-03-30-12.58.25.640.png)



# 5.1 文件目录布局

kafka文件目录中有很多文件，一般情况下我们只需要掌握`*.index`, `*.log`,`*.timeindex*`即可

<!-- more -->

![image-2021-03-30-13.04.23.883](/images/image-2021-03-30-13.04.23.883.png)

# 5.2 日志格式的演变

> 从0.8.x版本开始到现在的2.0.0版本，Kafka的消息格式也经历了3个版本：v0版本、v1版本和v2版本。

分区由一条条消息组成，如果消息设计的不够合理，分区的功能和性能会受到影响，过多的冗余导致储存增加、网络开销大、性能降低，缺少字段又会影响到<span style="color: red">日志的保存、切分策略</span>。

## V0版本的消息

右边是消息集，每个Record是一条消息，offset是偏移量，messagesize代表消息的长度。

![image-2021-03-30-13.11.25.916](/images/image-2021-03-30-13.11.25.916.png)

对于每个RECORD，他的字段如下

|     名称     |           功能           | 大小 |
| :----------: | :----------------------: | :--: |
|    crc32     | 消息内容的循环冗余校验值 |  4B  |
|    magic     |        消息版本号        |  1B  |
|  attributes  |       消息压缩算法       |  1B  |
|  key length  |        key的长度         |  4B  |
|     key      |           key            |  ？  |
| value length |       value的长度        |  4B  |
|    value     |          value           |  ？  |

我们注意到这里有一个压缩算法，这里其实很有趣，这个压缩算法指的是value的压缩算法，对于一条消息而言，什么时候需要压缩呢？

kafka不会对一条数据进行压缩,因为一条消息往往很小，压缩也不划算，kafka会对多条消息进行压缩，然后封装为一条新的消息。这时的key是无用的。

![image-2021-03-30-13.24.50.808](/images/image-2021-03-30-13.24.50.808.png)

另外内层消息的offset又可以从0开始编号了。

## V1版本消息

就多了一个时间戳

![image-2021-03-30-13.39.27.411](/images/image-2021-03-30-13.39.27.411.png)

## V2版本消息

V2版本引入了变长整型varints以及zigzag编码，这种编码对于越小的数据，他所占的空间越少，对于较大的数据，他所占的空间较多。有兴趣的读者可以自行查阅

![image-2021-03-30-13.27.13.649](/images/image-2021-03-30-13.27.13.649.png)

在v2版本中，message set改名为recordBatch，他也拥有了自己的头，在recordBatch中包含了多个record，其中的每个record与v1版本并无太大差异，我们注意到，他使用了大量的varint和delta，这个意思是很多数据是基于recordBatch中数据的相对值，这也导致了这些数往往很小，所以varint能发挥它最大的作用。

| 名称            |     状态     |              解释              | 大小   |
| --------------- | :----------: | :----------------------------: | ------ |
| length          | message size |           消息总长度           | 变长   |
| attributes      |     弃用     |                                | 1B     |
| timestamp delta |  timestamp   |           相对时间戳           | 变长   |
| offset delta    |    offset    |           相对offset           | 变长   |
| key length      |  key length  |                                | 变长   |
| key             |     key      |                                | 未知   |
| value length    | value length |                                | 变长   |
| value           |    value     |                                | 未知   |
| headers         |     新增     | 应用级拓展（可以储存了多个kv） | varint |

