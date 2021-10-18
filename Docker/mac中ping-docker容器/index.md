---
date: 2020-04-18 01:28:04
updated: 2020-04-18 01:28:04
---

```
brew cask install tunnelblick
```
找一个目录
```
git clone https://github.com/wojas/docker-mac-network.git
cd docker-mac-network
vim helpers/run.sh
```
修改网段和掩码
```
s|redirect-gateway.*|route 172.17.0.1 255.255.0.0|;
```
执行
```
docker-compose up -d
```
得到一个docker-for-mac.ovpn

在route 172.17.0.0 255.255.0.0

上面加

```
comp-lzo yes
```
双击docker-for-mac.ovpn,会被tunnelblick打开，一直点确定就好了


# 参考
[mac连接docker容器 docker-mac-network](https://blog.csdn.net/z457181562/article/details/96144248?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-7&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-7)

[docker-mac-network](https://github.com/wojas/docker-mac-network)