---
title: linux指令学习9-时间日期
mathjax: true
categories:
  - linux指令学习
tags:
  - linux指令学习
keywords:
  - linux指令学习
abbrlink: 61b1ffbd
date: 2020-03-27 13:36:26
---

# date
&emsp;&emsp; date可以看到时间,后面是格式设置
```
date "+%Y-%m-%d 星期%w %H:%M:%S"
```

<!---more-->

## 设置日期
&emsp;&emsp; -s 表示设置时间
```
date -s "2021-1-1 1:1:1"
```

# cal
&emsp;&emsp; cal直接查看当前月的日历
&emsp;&emsp; 看2020n年的日历
```
cal 2020 
```

