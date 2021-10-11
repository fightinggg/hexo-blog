---
date: 2021-03-29 10:34:30
updated: 2021-03-29 10:34:30
mathjax: true
typora-root-url: ../../../source
---

# ARP

Address Resolution Protocol， 地址解析协议，实现IP地址到MAC地址的映射。

>在局域网中，网络中实际传输的是“帧”，帧里面是有目标主机的MAC地址的。在以太网中，一个主机和另一个主机进行直接通信，必须要知道目标主机的MAC地址。但这个目标MAC地址是如何获得的呢？它就是通过地址解析协议获得的。所谓“地址解析”就是主机在发送帧前将目标IP地址转换成目标MAC地址的过程。ARP协议的基本功能就是通过目标设备的IP地址，查询目标设备的MAC地址，以保证通信的顺利进行。

<!-- more -->

# ARP映射

静态映射： 手动修改ARP表，比较复杂，难以维护。

动态映射： 不用自己修改，通过协议获取

## 如何映射

广播： 在局域网中的任何时候，当主机需要寻找另一个主机的IP地址的时候，他会发送一个ARP请求报文，报文中包含了发送方的MAC地址、IP地址和接收方的IP地址，这个包被广播，局域网中的每条主机都会接受并处理这个请求报文，如果自己不是接收方（通过IP判断），则继续广播这个包，如果自己是接受方，则可以通过ARP单播进行回复，整个过程和学习型交换机一摸一样。







## ARP是网络层还是链路层

ARP报文

![](/images/image-2021-03-29-20.00.00.000.png)

IP报文

![](/images/image-2021-03-29-20.11.46.000.png)

> 以ARP协议为例，它的功能最终是获取到MAC信息，服务于链路层，从这点考虑，ARP是链路层协议；但是从层次来看，ARP基于Ethernet协议，IP协议基于Ethernet协议，它们在Ethernet协议里面有独立的Type类型，前者是0x0806，后者是0x0800，既然ARP和IP协议"平起平坐"，那么IP是网络层，ARP难道就不是网络层？


# 参考

[图解ARP协议（一）](https://zhuanlan.zhihu.com/p/28771785)

[经典ARP协议讲解，一定要看](https://blog.csdn.net/weixin_30951389/article/details/96950806?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-3.control)

[IP报文格式和实例分析](https://blog.csdn.net/deramer1/article/details/73410019)



