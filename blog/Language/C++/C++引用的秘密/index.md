---
date: 2022-02-16 13:04:00
updated: 2022-02-16 13:04:00
tags: 结构体中的引用
---

# 0. 一个错误的概念

```c++
int main() {
    int a = 111;
    int &b = a;
    b = 222;
    std::cout<<&a<<&b;
}
```

我们能看到这里输出的两个值相同。

- 错误1:

  很多人认为这里的b就是a，a就是b，a和b的地址是一样的。

  但是笔者要说，其实这个概念是有问题的，a是a，b是b，a和b并不是同一个地址。

  

<!-- more -->

 # 1. 从STD的tie类型说起

笔者在阅读ClickHouse源码的时候发现了有趣的现象，该源码中有如下代码，我们注意第7-9行，可以发现这使用了STD的tie，该类型让C++实现了一次性返回两个值的效果。下面的executeQueryImpl函数返回了两个值，分别写入到了ast和streams中。

```c++
BlockIO executeQuery(
    const String & query,
    ContextMutablePtr context,
    bool internal,
    QueryProcessingStage::Enum stage)
{
    ASTPtr ast;
    BlockIO streams;
    std::tie(ast, streams) = executeQueryImpl(query.data(), query.data() + query.size(), context, internal, stage, nullptr);

    if (const auto * ast_query_with_output = dynamic_cast<const ASTQueryWithOutput *>(ast.get()))
    {
        String format_name = ast_query_with_output->format
                ? getIdentifierName(ast_query_with_output->format)
                : context->getDefaultFormat();

        if (format_name == "Null")
            streams.null_format = true;
    }

    return streams;
}
```

# 2. 如何实现的

实际上C++中可以在结构体中指定一个引用字段，通过构造函数将外界的变量传递进结构体，再通过该结构体的拷贝构造函数实现赋值。



# 3. 结构体中如何储存引用

结构体如何储存其他值的引用？按照前文的说法，如果引用的地址是一样的，结构体如何储存其他值的引用呢。











