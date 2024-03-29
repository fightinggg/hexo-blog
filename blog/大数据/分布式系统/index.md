---
date: 2020-04-21 20:48:13
updated: 2020-04-21 20:48:13
---

# 集群的到来
你为什么要使用集群? 如果一个问题可以在单机上解决，那就使用单机的方法，在使用分布式解决问题前，要充分尝试别的思路，因为分布式系统会让问题解决变得复杂

并行、容错、通信、安全/孤立

<!-- more -->

难以解决的局部错误

人们设计分布式系统的根本原因是为了获得更高的性能，你的集群到底发挥了多大的能力？1000台发挥了1000倍的能力吗？

如果一个系统，只需要提高几倍的机器的数量，就可以提高几倍的性能或者吞吐量，这就是一个巨大的胜利，因为不需要花高价雇程序员

## 并行
比方有一个web服务器，一夜之间火了，上亿的人来访问，就需要更多的web服务器，可是当你的web服务器的数量增大以后，数据库又成为了瓶颈，限制了性能，你可以尝试更多的数据库，但是这又会问到其他问题。

## 容错
假设每台计算机一年只坏一次，那么1000台计算机的集群，每天坏3台，计算机崩溃成为了常见的错误，各种问题，网络，交换机，计算机过热，错误总会发生，

## 可用性
某个系统经过精心设计，在某些错误下，系统可以正常运行，提供完整的服务，就想没有发生错误一样，比如多个备份，即使一个备份出错，但是另一个备份是正常的

我们的可用性是在一定的条件下的，并非所有的错误都不怕

## 修复
系统在修复前无法继续工作，当恢复后会正常工作，这一点非常重要，这就是最重要的指标,

## 非易失性储存
他们更新起来昂贵，构建高性能容错系统非常繁琐，聪明的办法是避免写入非易失性储存

## 使用复制
管理复制来实现容错，这也很复杂，你需要保证一致性，

## 强一致性
get得到的值一定是最新的put的值

## 弱一致性
某人put，你可能看到的是旧值，但一段时间以后他会变成新值，我们不保证时间。我们要避免通信，所以我们更加倾向于弱一致性，强一致性太麻烦了，代价太高

把所有备份放到一个机房，放到一个机架上，这非常糟糕，要是有人不小心绊倒了电源线，就糟糕了,位了让副本更好的容错，人们希望将不同的副本尽可能的分开远放，例如放在不同的城市，

副本在几千英里以外，想抱着强一致性特别困难，你要去等待多个服务器来给你反馈，等个20-30毫秒，这难忍受，并浪费了资源。

# MapReduce
要在TB数量的数据中分析，需要大量的并行计算，我们会把输入分成多份，对每一份进行map，他会生成一堆keyvalue，然后是数据移动，按照key合并，并交给reduce处理，不同的reduce输出不同的结果

MapReduce最大的瓶颈是网络，我们要尽量避免数据的传输，

## shuffle
map之后的数据，传给reduce，往往意味着由行储存变为列储存，


# 链接
[分布式系统](bilibili.com/video/BV1R7411t71W?p=1)