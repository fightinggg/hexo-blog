---
date: 2021-03-29 11:14:14
updated: 2021-03-29 11:14:14
---

# PING

我们常常使用ping来测试网络的联通性，但是你知道他是属于哪一次层的吗？其实ping属于网络层，他使用ICMP协议, 他没有使用UDP或者TCP。

<!-- more -->

ICMP报文是被IP报文包裹的。 ![](/images/image-2021-03-29-11.44.20.000.png)

|          |              |      |
| :------: | :----------: | :--: |
| 8位Type  | ICMP报文类型 |      |
|   code   |              |      |
| checksum |    校验和    |      |

# ping的流程

准备一个ICMP包，封装进IP包，发送到目的地，

目的地主机解析收到IP包，发现这是一个ICMP，拆包，得到ICMP包，处理，最后发送ICMP包回复ICMP包。



# 参考

[解析ping原理及实现](https://www.jianshu.com/p/14113212cd18)
