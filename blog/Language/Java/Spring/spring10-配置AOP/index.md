---
date: 2020-04-06 00:06:13
updated: 2020-04-06 00:06:13
---

# spring中的AOP
 连接点，被拦截到的点，在spring中指的是方法
 切入点，被增强的连接点
 通知 在调用方法前的是前置通知，在后面的是后置通知，在catch中的是异常通知，在final中的是最终通知，整个invoke方法就是环绕通知
 Target 被代理的对象
<!-- more -->
 proxy 代理对象
 织入 把被代理对象增强的过程
 切面  通知+切入点
### spring中的AOP要明确的事情
 编写核心代码，抽取公共代码制作为通知，在配置文件中声明切入点和通知之间的关系
## spring中AOP的配置
### XML配置AOP
 aop:config 表明aop配置开始,
 aop:aspect 切面配置开始 id是切面的名字，ref是通知类bean
 aop:before 前置通知 method用于指定中的方法 pointcut是切入点
```xml
<bean id='logger' class="com.wsx.utils.logger"></bean>
<aop:config>
    <aop:aspect id="logAdvice" ref="logger">
        <aop:before method="pringLog" porint="execution(public void com.wsx.wsx.wsx.saveAccount())"></aop:before>
    </aop:aspect>
</aop:config>
```
#### 通配写法
 访问修饰符可以省略 如public
 返回值可以是通配符，表示任意返回值
 包名可以是通配符表示任意包，几个包就有几个\*， 可以用..\*表示当前包的所有子包
 方法可以用\*
 参数可以用通配符，或者类型名
  \* \*..\*\*.\*(..)
```xml
<bean id='logger' class="com.wsx.utils.logger"></bean>
<aop:config>
    <aop:aspect id="logAdvice" ref="logger">
        <aop:before method="pringLog" porint="execution(* *..*.*(..)"></aop:before>
    </aop:aspect>
</aop:config>
```
#### 实际开发怎么写呢
  \* com.wsx.wsx.wsx.\*.\*(..)

#### 各种通知都加进来
```xml
<bean id='logger' class="com.wsx.utils.logger"></bean>
<aop:config>
    <aop:aspect id="logAdvice" ref="logger">
        <aop:before method="before" porint="execution(public void com.wsx.wsx.wsx.saveAccount())"></aop:before>
        <aop:after-returning method="after-returning" porint="execution(public void com.wsx.wsx.wsx.saveAccount())"></aop:after-returning>
        <aop:after-throwing method="after-throwing" porint="execution(public void com.wsx.wsx.wsx.saveAccount())"></aop:after-throwing>
        <aop:after method="after" porint="execution(public void com.wsx.wsx.wsx.saveAccount())"></aop:after>
    </aop:aspect>
</aop:config>
```
#### 配置切点
 减少代码量，写在aop:aspect外可以所有切面都可以使用(写在aspect之前)，写在aop:aspect内只在内部有用
```xml
<bean id='logger' class="com.wsx.utils.logger"></bean>
<aop:config>
    <aop:aspect id="logAdvice" ref="logger">
        <aop:before method="before" pointcut-ref="pt1"></aop:before>
        <aop:after-returning method="after-returning" pointcut-ref="pt1"></aop:after-returning>
        <aop:after-throwing method="after-throwing" pointcut-ref="pt1"></aop:after-throwin>
        <aop:after method="after" pointcut-ref="pt1"></aop:after>
        <aop:pointcut id="pt1" expression="execution(public void com.wsx.wsx.wsx.saveAccount())"></aop:pointcut>
    </aop:aspect>
</aop:config>
```

#### 配置环绕通知
 当我们配置了环绕通知以后，spring就不自动帮我们调用被代理对象了
```xml
<aop:around method="?" pointcut-ref="pt1"></aop:around>
```
```java
public Object arroundPringLog(ProceedingJoinPoint pjp){
    Object rtValue = null;
    try{
        Object[] args = pjp.getArgs(); // 获得参数
        rtValue = pip.proceed(args); //调用函数
        return rtValue;
    }catch(Throwable t){
    }finally{
    }
}
```
### 注解配置AOP
#### 开启注解
```xml
<aop:aspectj-autoproxy></aop:aspectj-autoproxy>
```
#### @Aspect
 表明当前类是一个切面类
#### @Pointcut
 切入点表达式
```java
@pointcut("execution(public void com.wsx.wsx.wsx.saveAccount())")
private void pt1(){}
```
#### @Before
 表明当前方法是一个前置通知， AfterReturning、AfterThrowing、After、Arount同理
```java
@Before("pt1()")
public void f(){}
```
#### 注解调用顺序的问题
 前置、最终、后置/异常

#### 纯注解
 加在类的前面即可
```java
@Configuration
@ComponentScan(..)
@EnableAspectJAutoProxy
```