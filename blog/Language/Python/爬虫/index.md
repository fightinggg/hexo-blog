---
date: 2020-03-25 15:49:27
updated: 2020-03-25 15:49:27
---

# 网页
 当我们输入网址以后，会建立http(https算了)连接，我们给服务器请求，服务器给我们回应，我们不断发送request,服务器不断返回response,请求又很多种。

# 大量的response
 我们要把这些数据存起来，数据库啊啥的都行。

# 简单的爬虫
```py
import requests
res = requests.get("http://www.baidu.com")
res.encoding = 'utf-8'
print(res.text)
```
 上面的代码能够得到百度网站

# 分析html
```py
import requests
#import bs4
from bs4 import BeautifulSoup
res = requests.get("http://www.baidu.com")
res.encoding = 'utf-8'
print(res.text)
soup = BeautifulSoup(res.text,"html.parser")
print(soup.text)
```

# 得到连接
```py
import requests
import bs4
res = requests.get("http://www.baidu.com")
res.encoding = 'utf-8'
print(res.text)
soup = bs4.BeautifulSoup(res.text, "html.parser")
print(soup.text)
for link in soup.select('a'):
    print(link.text,link['href'])
```

# 结束了，好简单，还准备写一套流程的，现在免了