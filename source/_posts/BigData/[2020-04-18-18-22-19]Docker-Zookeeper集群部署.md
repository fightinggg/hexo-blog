---
mathjax: true
---

# 创建工作目录
```sh
mkdir ~/DockerDesktop
mkdir ~/DockerDesktop/Zookeeper
cd ~/DockerDesktop/Zookeeper
```
<!-- more -->
# 创建挂载目录
```sh
mkdir node1 
mkdir node1/data
mkdir node1/datalog
cp -r node1 node2
cp -r node1 node3
cp -r node1 node4
cp -r node1 node5
```
# 创建docker-compose.yml
```sh
vim docker-compose.yml
```
```yml
version: '3'

services:
  Zookeeper1:
    image: zookeeper
    hostname: Zookeeper1
    volumes: # 挂载数据
      - ~/DockerDesktop/Zookeeper/node1/data:/data
      - ~/DockerDesktop/Zookeeper/node1/datalog:/datalog
    environment:
      ZOO_MY_ID: 1
      ZOO_SERVERS: server.1=Zookeeper1:2888:3888;2181 server.2=Zookeeper2:2888:3888;2181 server.3=Zookeeper3:2888:3888;2181 server.4=Zookeeper4:2888:3888;2181 server.5=Zookeeper5:2888:3888;2181
    networks:
      default:
        ipv4_address: 172.17.1.1

  Zookeeper2:
    image: zookeeper
    hostname: Zookeeper2
    volumes: # 挂载数据
      - ~/DockerDesktop/Zookeeper/node2/data:/data
      - ~/DockerDesktop/Zookeeper/node2/datalog:/datalog
    environment:
      ZOO_MY_ID: 2
      ZOO_SERVERS: server.1=Zookeeper1:2888:3888;2181 server.2=Zookeeper2:2888:3888;2181 server.3=Zookeeper3:2888:3888;2181 server.4=Zookeeper4:2888:3888;2181 server.5=Zookeeper5:2888:3888;2181
    networks:
      default:
        ipv4_address: 172.17.1.2

  Zookeeper3:
    image: zookeeper
    hostname: Zookeeper3
    volumes: # 挂载数据
      - ~/DockerDesktop/Zookeeper/node3/data:/data
      - ~/DockerDesktop/Zookeeper/node3/datalog:/datalog
    environment:
      ZOO_MY_ID: 3
      ZOO_SERVERS: server.1=Zookeeper1:2888:3888;2181 server.2=Zookeeper2:2888:3888;2181 server.3=Zookeeper3:2888:3888;2181 server.4=Zookeeper4:2888:3888;2181 server.5=Zookeeper5:2888:3888;2181
    networks:
      default:
        ipv4_address: 172.17.1.3

  Zookeeper4:
    image: zookeeper
    hostname: Zookeeper4
    volumes: # 挂载数据
      - ~/DockerDesktop/Zookeeper/node4/data:/data
      - ~/DockerDesktop/Zookeeper/node4/datalog:/datalog
    environment:
      ZOO_MY_ID: 4
      ZOO_SERVERS: server.1=Zookeeper1:2888:3888;2181 server.2=Zookeeper2:2888:3888;2181 server.3=Zookeeper3:2888:3888;2181 server.4=Zookeeper4:2888:3888;2181 server.5=Zookeeper5:2888:3888;2181
    networks:
      default:
        ipv4_address: 172.17.1.4

  Zookeeper5:
    image: zookeeper
    hostname: Zookeeper5
    volumes: # 挂载数据
      - ~/DockerDesktop/Zookeeper/node5/data:/data
      - ~/DockerDesktop/Zookeeper/node5/datalog:/datalog
    environment:
      ZOO_MY_ID: 5
      ZOO_SERVERS: server.1=Zookeeper1:2888:3888;2181 server.2=Zookeeper2:2888:3888;2181 server.3=Zookeeper3:2888:3888;2181 server.4=Zookeeper4:2888:3888;2181 server.5=Zookeeper5:2888:3888;2181
    networks:
      default:
        ipv4_address: 172.17.1.5

networks: # 自定义网络
  default:
    external:
      name: net17
```
# 运行
```
docker-compose up -d
```
我们不难发现Zookeeper5成为了集群的leader，其他都都成为了follower
```
Zookeeper5_1  | 2020-04-18 09:53:01,840 [myid:5] - INFO  [QuorumPeer[myid=5](plain=0.0.0.0:2181)(secure=disabled):QuorumPeer@863] - Peer state changed: leading - broadcast
Zookeeper3_1  | 2020-04-18 09:53:01,871 [myid:3] - INFO  [QuorumPeer[myid=3](plain=0.0.0.0:2181)(secure=disabled):CommitProcessor@476] - Configuring CommitProcessor with readBatchSize -1 commitBatchSize 1
Zookeeper1_1  | 2020-04-18 09:53:01,874 [myid:1] - INFO  [QuorumPeer[myid=1](plain=0.0.0.0:2181)(secure=disabled):CommitProcessor@476] - Configuring CommitProcessor with readBatchSize -1 commitBatchSize 1
Zookeeper1_1  | 2020-04-18 09:53:01,876 [myid:1] - INFO  [QuorumPeer[myid=1](plain=0.0.0.0:2181)(secure=disabled):CommitProcessor@438] - Configuring CommitProcessor with 1 worker threads.
Zookeeper3_1  | 2020-04-18 09:53:01,875 [myid:3] - INFO  [QuorumPeer[myid=3](plain=0.0.0.0:2181)(secure=disabled):CommitProcessor@438] - Configuring CommitProcessor with 1 worker threads.
Zookeeper4_1  | 2020-04-18 09:53:01,874 [myid:4] - INFO  [QuorumPeer[myid=4](plain=0.0.0.0:2181)(secure=disabled):CommitProcessor@476] - Configuring CommitProcessor with readBatchSize -1 commitBatchSize 1
Zookeeper4_1  | 2020-04-18 09:53:01,882 [myid:4] - INFO  [QuorumPeer[myid=4](plain=0.0.0.0:2181)(secure=disabled):CommitProcessor@438] - Configuring CommitProcessor with 1 worker threads.
Zookeeper2_1  | 2020-04-18 09:53:01,890 [myid:2] - INFO  [QuorumPeer[myid=2](plain=0.0.0.0:2181)(secure=disabled):CommitProcessor@476] - Configuring CommitProcessor with readBatchSize -1 commitBatchSize 1
Zookeeper2_1  | 2020-04-18 09:53:01,897 [myid:2] - INFO  [QuorumPeer[myid=2](plain=0.0.0.0:2181)(secure=disabled):CommitProcessor@438] - Configuring CommitProcessor with 1 worker threads.
Zookeeper1_1  | 2020-04-18 09:53:01,909 [myid:1] - INFO  [QuorumPeer[myid=1](plain=0.0.0.0:2181)(secure=disabled):RequestThrottler@74] - zookeeper.request_throttler.shutdownTimeout = 10000
Zookeeper4_1  | 2020-04-18 09:53:01,915 [myid:4] - INFO  [QuorumPeer[myid=4](plain=0.0.0.0:2181)(secure=disabled):RequestThrottler@74] - zookeeper.request_throttler.shutdownTimeout = 10000
Zookeeper3_1  | 2020-04-18 09:53:01,921 [myid:3] - INFO  [QuorumPeer[myid=3](plain=0.0.0.0:2181)(secure=disabled):RequestThrottler@74] - zookeeper.request_throttler.shutdownTimeout = 10000
Zookeeper2_1  | 2020-04-18 09:53:01,928 [myid:2] - INFO  [QuorumPeer[myid=2](plain=0.0.0.0:2181)(secure=disabled):RequestThrottler@74] - zookeeper.request_throttler.shutdownTimeout = 10000
Zookeeper1_1  | 2020-04-18 09:53:02,053 [myid:1] - INFO  [QuorumPeer[myid=1](plain=0.0.0.0:2181)(secure=disabled):QuorumPeer@863] - Peer state changed: following - broadcast
Zookeeper4_1  | 2020-04-18 09:53:02,056 [myid:4] - INFO  [QuorumPeer[myid=4](plain=0.0.0.0:2181)(secure=disabled):QuorumPeer@863] - Peer state changed: following - broadcast
Zookeeper3_1  | 2020-04-18 09:53:02,063 [myid:3] - INFO  [QuorumPeer[myid=3](plain=0.0.0.0:2181)(secure=disabled):QuorumPeer@863] - Peer state changed: following - broadcast
Zookeeper2_1  | 2020-04-18 09:53:02,068 [myid:2] - INFO  [QuorumPeer[myid=2](plain=0.0.0.0:2181)(secure=disabled):QuorumPeer@863] - Peer state changed: following - broadcast
```

