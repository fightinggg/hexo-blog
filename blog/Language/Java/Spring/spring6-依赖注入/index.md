---
date: 2020-04-06 00:05:16
updated: 2020-04-06 00:05:16
---



# sprint的依赖注入
 dependency injection
 IOC是降低程序之间的依赖关系的，我们把依赖关系交给spring维护，依赖关系的维护就叫做依赖注入
 注入的类型 基本类型和Sring、 bean类型、集合类型
 注入的方法 构造函数、set、注解
<!-- more -->
## 构造函数注入
 使用constructor-arg标签
### type标签
 我们很容易想到
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <constructor-arg type="java.lang.String" value="wsx"></constructor-arg>
</bean>
```

### index 标签
 使用下标，位置从0开始
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <constructor-arg index="0" value="wsx"></constructor-arg>
</bean>
```
### name 标签
 使用参数的名称
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <constructor-arg name="name" value="wsx"></constructor-arg>
</bean>
```
### 使用ref
 使用其他的bean
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <constructor-arg name="myobj" ref="myobj"></constructor-arg>
</bean>
```

## set方法注入
 property标签
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <property name="name" value="wsx"></property>
    <property name="myobj" ref="myobj"></property>
</bean>
```

### 构造函数注入和set方法注入
 set注入可以有选择性地注入，构造函数强制了必要的数据

## 集合的注入
 当我们碰到集合的时候，使用ref就不合适了，我们发现property内部还有标签
```xml
<bean id="myclass" class="com.wsx.spring.Myclass">
    <property name="mylist">
        <list>
            <value>1</value>
            <value>2</value>
            <value>3</value>
            <value>4</value>
            <value>5</value>
        </list>
    </property>
</bean>
```
 注意上面的<list> 我们甚至可以使用其他的例如<set> <array>
 同理<map> 和<prop>也可以互换