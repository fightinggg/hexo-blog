---
date: 2020-04-06 00:06:03
updated: 2020-04-06 00:06:03
---

# account案例
&emsp;&emsp; 我们有一个转账方法: 根据名称找到账户，转出账户减钱，转入账户加钱，更新转出账户，更新转入账户，这个方法没有事务的控制，可能出现问题
## 案例问题
&emsp;&emsp; 实际上我们需要维护一个和线程绑定的数据库连接，我们做一个工具类，让其支持回滚，于是我们在上诉案例中可以使用trycatch，一旦碰到问题，在catch中回滚即可,这个可以解决问题，但是太复杂了。
<!-- more -->
# 动态代理
&emsp;&emsp; 字节码随用随创建，随用随加载，不修改远么的基础上对方法增强，
&emsp;&emsp; 有两种，基于接口的动态代理和基于类的动态代理
### 基于接口的动态代理
&emsp;&emsp; Proxy.newProxyInstance
&emsp;&emsp; 参数1 类加载器： 固定写法 是被代理对象的类加载器
&emsp;&emsp; 参数2 字节码数组： 固定写法 让代理对象和被代理对象有相同的方法
&emsp;&emsp; 参数3 增强的代码 ，是一个匿名内部类
#### 内部类
&emsp;&emsp; 实现一个invoke(proxy,method,args); method.invoke(producer,args);
&emsp;&emsp; 如果被代理的类没有实现任何接口，则此方法无用
## 动态代理的另一种实现方式
&emsp;&emsp; cglib
### 基于子类的动态代理
&emsp;&emsp; Enhancer.create(class,callback);
&emsp;&emsp; 要求类不能是最终类
&emsp;&emsp; class是被代理对象的字节码，
&emsp;&emsp; 第二个参数是MethodInterceptor是一个内部匿名类
### 动态代理的作用
&emsp;&emsp; 用动态代理增强connect，让其加回连接池
#