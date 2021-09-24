---
date: 2021-09-24 10:59:00
updated: 2021-09-24 10:59:00
tags: linux指令
mathjax: true
---

# 查看开机启动项

```
systemctl list-unit-files
```

会看到有两列，左侧是服务的名字，右侧是服务的状态，enabled代表开机自启

```
UNIT FILE                                                                     STATE   
docker-cfaf73bd979fa2fea877e7ae44193bf46318c1bc7fda16e14ffeaa8f8b397e04.scope static  
docker-d66a6df41c6b8f1ce687c864a580638d8000f8095f29fbef936f7abc3ff3ec69.scope static  
session-102.scope                                                             static  
session-106.scope                                                             static  
session-96.scope                                                              static  
acpid.service                                                                 enabled 
arp-ethers.service                                                            disabled
arptables.service                                                             disabled
```

# 禁用开机启动项

```
systemctl disable kubelet
```



# 启用开机启动

```
systemctl enable kubelet
```





# 参考

https://linux.cn/article-5926-1.html