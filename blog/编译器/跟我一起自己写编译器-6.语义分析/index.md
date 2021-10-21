---
date: 2021-06-24 22:25:05
updated: 2021-08-29 17:41:05
tags: [跟我一起写编译器,读书]
---

# 6. 语义分析

# 6.1. 语法制导翻译

语法制导翻译分为两类，一类是S型语法制导翻译，另一类是L型语法制导翻译。这里我们主要介绍S型语法制导翻译，因为他更简单，更加适用于语法树。

# 6.2. S型语法制导翻译

当我们构建出语法书以后，其每个节点与自己的子节点的关系就是产生式的关系，对语法树进行DFS就是遍历整个语法树，很多信息可以在遍历的过程中自底向上进行逐步翻译。

<!-- more -->

# 6.3. 正则文法语法制导翻译

这里列举一个笔者的项目compiler中一个有趣的子模块，[正则子模块](https://github.com/fightinggg/compiler/blob/master/main/src/main/java/com/example/lang/reg/RegSyntaxDirectedTranslation.java)，

直接看代码, 这里是一个语法制导翻译片段，在产生式`unit -> char`下， 

其中有四个参数，fa是上下问信息，rt是当前节点，sonlist是子节点数组，accessAllSon是一个子树分析的接口。

首先调用` accessAllSon.run();`将子树进行翻译

当子树翻译完成以后，sonlist中会有子节点的所有信息，这时候我们只需要将子树所生产的nfa放入当前节点的nfa即可

```java
Map.entry("unit -> char", (fa, rt, sonList, accessAllSon) -> {
    accessAllSon.run();
    rt.put("nfa", sonList.get(0).get("nfa"));
}),
```

然后看星号片段，一个正则后面紧跟着一个add代表这个正则可以出现1次或者多次，所以我们只需要先对子树进行翻译，然后取出翻译后的unit的nfa，对他进行自循环操作。何为自循环可见`5.5.4. 正则例4`

```java
Map.entry("unit -> unit add", (fa, rt, sonList, accessAllSon) -> {
    accessAllSon.run();
    Nfa<Object, String> nfa = toNfa(sonList.get(0).get("nfa"));
    rt.put("nfa", NfaUtils.series(nfa, NfaUtils.selfLoop(nfa, Nfa.EMPTY_TRANS), Nfa.EMPTY_TRANS));
}),
```



# 6.4. JSON文法语法制导翻译

然后来看笔者i项目中另一个有趣的子模块，[JSON子模块](https://github.com/fightinggg/compiler/blob/master/main/src/main/java/com/example/lang/json/JsonSyntaxDirectedTranslation.java), 这部分代码非常短，我们就直接全部贴过来，

`object -> string | array | leftCurlyBracket kvs rightCurlyBracket  `等 则直接将子树的结果放入当前的obj

`kv -> string colon object`则将子树的string变为key，obj当作value，制造一个map

`kvs -> kvs comma kv`则合并子树的map

```java
Map<String, SyntaxDirectedTranslationUtils.SyntaxDirectedTranslationConsumer> innerNodeConfig = Map.ofEntries(
    Map.entry("object -> string", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", son.get(0).get("tokenRaw"));
    }),
    Map.entry("object -> number", (fa, rt, son, accessAllSon) -> {
        throw new RuntimeException();
    }),
    Map.entry("object -> array", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", son.get(0).get("object"));
    }),
    Map.entry("object -> leftCurlyBracket kvs rightCurlyBracket", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", son.get(1).get("object"));
    }),
    Map.entry("object -> leftCurlyBracket rightCurlyBracket", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", Map.of());
    }),
    Map.entry("target -> object", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", son.get(0).get("object"));
    }),
    Map.entry("array -> leftSquareBracket objects rightSquareBracket", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", son.get(1).get("object"));
    }),
    Map.entry("array -> leftSquareBracket rightSquareBracket", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", List.of());
    }),
    Map.entry("kvs -> kv", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", son.get(0).get("object"));
    }),
    Map.entry("kvs -> kvs comma kv", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        Map<String, Object> kvs = toMap(son.get(0).get("object"));
        Map<String, Object> kv = toMap(son.get(2).get("object"));
        rt.put("object", MergeableMap.merge(kvs, kv));
    }),
    Map.entry("kv -> string colon object", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        String key = toString(son.get(0).get("tokenRaw"));
        Object value = son.get(2).get("object");
        rt.put("object", Map.of(key, value));
    }),
    Map.entry("objects -> object", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        rt.put("object", List.of(son.get(0).get("object")));
    }),
    Map.entry("objects -> objects comma object", (fa, rt, son, accessAllSon) -> {
        accessAllSon.run();
        Collection<Object> l1 = toList(son.get(0).get("object"));
        Collection<Object> l2 = List.of(son.get(2).get("object"));
        rt.put("object", MergeableCollection.merge(l1, l2));
    })
```

# 6.5. Pava子项目语法制导翻译

pava语言是一门类c语言，其支持函数、整形、字符串、加减乘除等运算、for、if、while等循环。

pava项目非常复杂，其中涉及到了三地址代码、作用域、CPU抽象、寄存器分配等信息，这里不打算展开，笔者会在另一篇Blog中进行详细分析。这里只做简要介绍。

## 6.5.1. 三地址代码

三地址代码是一种类似于汇编的代码，每个代码最多只有三个地址，一个运算，往往为第二和第三个地址操作以后，其值存入地址1。

## 6.5.2. 变量定义

当定义一个变量时，将其作用域提升至函数入口，具体方案为在语法制导翻译的时候将子树的作用域合并到自己身上

##  6.5.3. 变量计算

按照语法制导翻译，所有的二元运算、一元运算，都需要新建一个临时变量来储存

## 6.5.4. if 条件分支

if只需要支持jump指令即可翻译，先计算if的条件的值，将其结果放入临时变量，然后使用jumpIfTrue这种指令来进行跳转。

## 6.5.5. for/while循环

稍微改改if的跳转即可实现

## 6.5.6. 函数

函数是一个很复杂的东西，当调用一个函数的时候，需要保存当前所有的变量，然后参数入栈，跳转，

当一个函数执行时， 需要从栈中取出变量，执行函数体以后，需要从栈中取出返回地址（PC指针），将返回值存入寄存器，然后返回。



# 6.6. IF条件分支翻译

查看下面的代码

```
if condititon code1 else code2
```



假设condition的代码为conditon.code,这段代码执行完以后值保留在地址condition.address中，

假设code1的代码为code1.code, code2的代码为code2.code，

这是的代码布局为四段，第一段对应if，先执行完condition.code，然后根据conditon.address来决定是否跳转到code2Begin，

如果为真则跳转，否则继续向下执行

注意到code1.code和code2.code执行完以后，都会跳转的到LABEL IFEND

```
${conditon.code}
JUMIFFALSE conditon.address code2Begin

LABEL code1Begin
${code1.code}
JUMP IFEND

LABEL code2Begin
${code2.code}
JUMP IFEND

LABEL IFEND
```





# 6.7. WHILE循环翻译

还是一样

假设condition的代码为conditon.code,这段代码执行完以后值保留在地址condition.address中，

假设code的代码为code.code

```
while condititon code
```

代码分为四段

第一段为while的开始，

第二段为条件判断，如果为真则跳转到whileEnd，否则向下执行

第三段为code，执行以后跳转到whileBegin进行重新循环

第四段为whlieEnd,是while循环的出口

```
LABEL whileBegin

${conditon.code}
JUMIFFALSE conditon.address whileEnd

${code1.code}
JUMP whileBegin

LABEL whileEnd
```





# 6.8. FOR/DOWHILE循环

和while一样








