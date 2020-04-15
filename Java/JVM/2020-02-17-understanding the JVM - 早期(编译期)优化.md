
### Java 编译
- 解析与填充符号表过程
- 插入式注解处理器的注解处理过程
- 分析与字节码生成过程

<!---more-->

### Java 语法糖
- 自动拆箱装箱
- 遍历循环
- 条件编译 : 类似c++的宏
- 范型与类型擦除 : Java的范性和c++范型不一样，Java是用类型擦除来实现的，然后使用类型强制转化。


### 拆箱陷阱
#### 先看代码
```java
class test{
  public static void main(String[] args){
    Integer a = 1;
    Integer b = 2;
    Integer c = 3;
    Integer d = 3;
    Integer e = 321;
    Integer f = 321;
    Long g = 3L;
    System.out.println(c == d);
    System.out.println(e == f);
    System.out.println(c == (a + b));
    System.out.println(c.equals(a + b));
    System.out.println(g == (a + b));
    System.out.println(g.equals(a + b));
  }
}
```

#### 输出
```
true
false
true
true
true
false
```

#### 解释
- = 会导致自动拆箱和装箱
- +，-，*，/混合运算会拆箱
- &gt;,&lt;,==比较运算会拆箱
- euqals会装箱
- 向集合类添加数据会装箱
- Integer类有缓存区域,储存了[-128,127],所有这些值都共享缓存区的对象指针

