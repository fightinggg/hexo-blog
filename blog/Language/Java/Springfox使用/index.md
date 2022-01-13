---
date: 2022-01-13 10:48:00
updated: 2022-01-13 10:48:00
tags: SpringFox使用
---



# 1. 对List不能很好的支持

## 1.1. 核心代码

代码中写的是数组

```java
    /**
     * 用户
     */
    @ApiModelProperty(value = "用户",example = "hellowang")
    private List<String> user;
```

## 1.2. 问题详情

在swagger页面展示的例子是字符串

```json
{
  "user": "hellowang"
}
```



## 1.3. 问题讨论

 [Stackoverflow](https://stackoverflow.com/questions/40989038/swagger-apimodelproperty-example-value-for-liststring-property)

 [Github](https://github.com/swagger-api/swagger-core/issues/1855)

## 1.4. 解决方案

[springfox-collection-example-plugin](https://github.com/aaitmouloud/springfox-collection-example-plugin)



