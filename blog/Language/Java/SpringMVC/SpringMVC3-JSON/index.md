---
date: 2020-04-24 23:28:11
updated: 2020-04-24 23:28:11
---

# json
这是一个字符串，他可以把JavaScript对象变成字符串，然后传给后端，实现前后端分离

# bson
bson是由10gen开发的一个数据格式，目前主要用于mongoDB中

bson 的遍历更加迅速，因为他在头部存下了每个元素的长度

bson 的操作更加简单，9变成10对json来说要移动内容，但是bson不需要，他数字超范围会慢一些

bson 支持二进制数据的传输binary array

# json 和javascirpt转化
```js
JSON.parse();
JSON.stringify();
```

# 解析json
```xml
<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.11.0.rc1</version>
</dependency>

```

# 参考
[BSON的介绍及BSON与JSON的区别](https://blog.csdn.net/m0_38110132/article/details/77716792)