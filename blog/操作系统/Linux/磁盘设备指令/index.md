---
date: 2021-09-30 11:28:00
updated: 2021-09-30 11:28:00
---



给磁盘分区

```
fdisk /dev/vdc
```

格式化分区

```
mkfs.ext4 /dev/vdc 
```

挂载磁盘

```
mkdir -p /data/ssd && mount /dev/vdc /data/ssd
```
