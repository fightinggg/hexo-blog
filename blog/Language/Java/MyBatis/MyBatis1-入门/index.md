---
date: 2020-04-27 15:03:48
updated: 2020-04-27 15:03:48
---

# MyBatis
是一个对JDBC的封装，是一个数据持久化框架
# 优点
减少代码量，降低维护成本，讲SQL写到XML中，降低耦合度，支持动态SQL语句，支持标签映射，
# 缺点
SQL编写工作量大，SQL语句依赖数据库，导致移植性较差
<!-- more -->
# 核心接口和类
SqlSessionFactoryBuilder - SqlSessionFactory - SqlSession
# 开发方式
使用原生接口或者用Mapper代理实现自定义接口
# 实际操作
- 导入依赖

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.5</version>
</dependency>
```
```xml
<build>
    <resources>
        <resource>
            <directory>src/main/resources</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>

            <filtering>true</filtering>
        </resource>
        <resource>
            <directory>src/main/java</directory>
            <includes>
                <include>**/*.properties</include>
                <include>**/*.xml</include>
            </includes>
            <filtering>true</filtering>
        </resource>

    </resources>
</build>
```
- 创建表
- 创建表对应的实体类
- 创建MyBatis配置文件MyBatis.xml

```xml
<environments default="development">
    <environment id="development">
        <!-- 配置JDBC事务管理 -->
        <transactionManager type="JDBC"></transactionManager>
        <!-- POOLED配置JDBC数据源连接池 -->
        <dataSource type="POOLED">
            <property name="driver" value="com.mysql.cj.jdbc.Driver"></property>
            <property name="url" value="jdbc:mysql://localhost:3306/mybatis?useUnicode=true&amp;characterEncoding=UTF-8"></property>
            <property name="username" value="root"></property>
            <property name="password" value="123456"></property>
        </dataSource>
    </environment>
    <environment id="other">
        <!--            write-->
    </environment>
</environments>
```
- 创建Mapper.xml
namespace 设置为文件所在包+文件名,insert表示执行insert,id是参数，parameterType是类型
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.wsx.mapper.AccoutMapper">

    <insert id="save" parameterType="com.wsx.entity.Account">
      insert into t_account(username,password,age) values(#{username},#{password},#{age})
    </insert>

</mapper>
```
- 注册SQL语句
```xml
<!-- 注册AccountMapper.xml -->
<mappers>
    <mapper resource="com/wsx/mapper/AccountMapper.xml"></mapper>
    <mapper resource="com/wsx/repository/AccountRepository.xml"></mapper>
    <mapper resource="com/wsx/repository/StudentRepository.xml"></mapper>
    <mapper resource="com/wsx/repository/ClassesRepository.xml"/>
    <mapper resource="com/wsx/repository/CustomerRepository.xml"/>
    <mapper resource="com/wsx/repository/GoodsRepository.xml"/>
</mappers>
```
- 调用接口

```java
//加载MyBatis配置文件
InputStream inputStream = Test.class.getClassLoader().getResourceAsStream("config.xml");
SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(inputStream);
SqlSession sqlSession = sqlSessionFactory.openSession();
String statement = "com.wsx.mapper.AccoutMapper.save";
Account account = new Account(1L,"张三","123123",22);
sqlSession.insert(statement,account);
sqlSession.commit();
sqlSession.close();
```
# 自定义接口
```java
public interface AccountRepository {
    public int save(Account account);
    public int update(Account account);
```
```xml
<insert id="save" parameterType="com.wsx.entity.Account">
    insert into t_account(username,password,age) values(#{username},#{password},#{age})
</insert>
<update id="update" parameterType="com.wsx.entity.Account">
    update t_account set username = #{username},password = #{password},age = #{age} where id = #{id}
</update>
```
```java
InputStream inputStream = Test.class.getClassLoader().getResourceAsStream("config.xml");
SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(inputStream);
SqlSession sqlSession = sqlSessionFactory.openSession();
//获取实现接口的代理对象
AccountRepository accountRepository = sqlSession.getMapper(AccountRepository.class);
accountRepository.()
```
# 传入多个变量
```xml
<select id="findByNameAndAge" resultType="com.wsx.entity.Account">
    select * from t_account where username = #{arg0} and age = #{arg1}
</select>
```
# 查询深入
## 多对一
比方这个, 我们查询出来有多个id，这时候，student对象的id会匹配第一个，name也是，所以查询出来classes就null了
我们需要使用resultMap来处理
```java

@Data
public class Classes {
    private long id;
    private String name;
    private List<Student> students;
}

@Data
public class Student {
    private long id;
    private String name;
    private Classes classes;
}
```
```xml
<resultMap id="studentMap" type="com.wsx.entity.Student">
    <id column="id" property="id"></id>
    <result column="name" property="name"></result>
    <association property="classes" javaType="com.wsx.entity.Classes">
        <id column="cid" property="id"></id>
        <result column="cname" property="name"></result>
    </association>
</resultMap>

<select id="findById" parameterType="long" resultMap="studentMap">
    select s.id,s.name,c.id as cid,c.name as cname from student s,classes c where s.id = #{id} and s.cid = c.id
</select>
```
## 一对多
```xml
<resultMap id="classesMap" type="com.wsx.entity.Classes">
    <id column="cid" property="id"></id>
    <result column="cname" property="name"></result>
    <collection property="students" ofType="com.wsx.entity.Student">
        <id column="id" property="id"/>
        <result column="name" property="name"/>
    </collection>
</resultMap>

<select id="findById" parameterType="long" resultMap="classesMap">
    select s.id,s.name,c.id as cid,c.name as cname from student s,classes c where c.id = #{id} and s.cid = c.id
</select>
```
# 逆向工程
传统开发中，实体类、自定义Mapper接口、Mapper.xml 需要开发者手动创建，逆向工程可以帮助开发者来自动创建三个组件，减少工作量
## MBG
MyBatis Generator ， 一个专门为MyBatis框架开发者定制的代码生成器
```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.5</version>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.11</version>
</dependency>

<dependency>
    <groupId>org.mybatis.generator</groupId>
    <artifactId>mybatis-generator-core</artifactId>
    <version>1.3.2</version>
</dependency>
```
## 配置文件
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<generatorConfiguration>
    <context id="testTables" targetRuntime="MyBatis3">
        <jdbcConnection
                driverClass="com.mysql.cj.jdbc.Driver"
                connectionURL="jdbc:mysql://localhost:3306/mybatis?useUnicode=true&amp;characterEncoding=UTF-8"
                userId="root"
                password="123456"
        ></jdbcConnection>
        <javaModelGenerator targetPackage="com.wsx.entity" targetProject="./src/main/java"></javaModelGenerator>
        <sqlMapGenerator targetPackage="com.wsx.repository" targetProject="./src/main/java"></sqlMapGenerator>
        <javaClientGenerator type="XMLMAPPER" targetPackage="com.wsx.repository" targetProject="./src/main/java"></javaClientGenerator>
        <table tableName="t_user" domainObjectName="User"></table>
    </context>
</generatorConfiguration>
```
1、jdbcConnection 配置数据库连接信息。
2、javaModelGenerator 配置 JavaBean 的⽣成策略。
3、sqlMapGenerator 配置 SQL 映射⽂件⽣成策略。
4、javaClientGenerator 配置 Mapper 接⼝的⽣成策略。
5、table 配置⽬标数据表（tableName：表名，domainObjectName：JavaBean 类名）。
生成代码如下，这个代码不重要，跑就完事了, 他就给我们生成了很多sql
```java
List<String> warings = new ArrayList<String>();
boolean overwrite = true;
String genCig = "/generatorConfig.xml";
File configFile = new File(Main.class.getResource(genCig).getFile());
ConfigurationParser configurationParser = new ConfigurationParser(warings);
Configuration configuration = null;
try {
    configuration = configurationParser.parseConfiguration(configFile);
} catch (IOException e) {
    e.printStackTrace();
} catch (XMLParserException e) {
    e.printStackTrace();
}
DefaultShellCallback callback = new DefaultShellCallback(overwrite);
MyBatisGenerator myBatisGenerator = null;
try {
    myBatisGenerator = new MyBatisGenerator(configuration,callback,warings);
} catch (InvalidConfigurationException e) {
    e.printStackTrace();
}
try {
    myBatisGenerator.generate(null);
} catch (SQLException e) {
    e.printStackTrace();
} catch (IOException e) {
    e.printStackTrace();
} catch (InterruptedException e) {
    e.printStackTrace();
}
```
# 延迟加载
先配置
```xml
<settings>
    <!-- 打印SQL-->
    <setting name="logImpl" value="STDOUT_LOGGING"/>
    <!-- 开启延迟加载 -->
    <setting name="lazyLoadingEnabled" value="true"/>
</settings>
```
然后把多表关联查询拆分成多个单表查询, 调用接口的时候再去查询，不用就不查询，比方有图书表和图书类型表，我们查到了一些类型，这就是一个单表查询，如果你不去调用getBook，接下来的查询就不会进行, 慎用，这个东西讲一次查询拆成了多次，这可能导致性能降低

# MyBatis缓存
我干嘛不用redis？
## 一级缓存
默认开启且不可关闭,是SqlSession级别的，用HashMap实现，不同的SqlSession之间的数据区域互不影响, 当执行了DML操作(insert,update,delete),就要清空缓存
## 二级缓存
多个SqlSession共用同一个缓存，依然是HashMap实现
在config.xml中开启
```xml
<settings>
    <!-- 打印SQL-->
    <setting name="logImpl" value="STDOUT_LOGGING"/>
    <!-- 开启延迟加载 -->
    <setting name="lazyLoadingEnabled" value="true"/>
    <!-- 开启二级缓存 -->
    <setting name="cacheEnabled" value="true"/>
</settings>
```
在Mapper.xml 中加入
```xml
<cache></cache>
```
实体类要实现序列化(Serializable)

# 第三方缓存
```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-ehcache</artifactId>
    <version>1.0.0</version>
</dependency>
<dependency>
    <groupId>net.sf.ehcache</groupId>
    <artifactId>ehcache-core</artifactId>
    <version>2.4.3</version>
</dependency>
```
配置第三方缓存，ehcache.xml
```xml
<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="../config/ehcache.xsd">
    <diskStore/>
    <defaultCache
            maxElementsInMemory="1000"
            maxElementsOnDisk="10000000"
            eternal="false"
            overflowToDisk="false"
            timeToIdleSeconds="120"
            timeToLiveSeconds="120"
            diskExpiryThreadIntervalSeconds="120"
            memoryStoreEvictionPolicy="LRU">
    </defaultCache>
</ehcache>
```
在config.xml中开启（同上)
最后在mapper.xml中配置 缓存失效间隔、回收策略, 这里就不需要实现序列化了
```xml
<cache type="org.mybatis.caches.ehcache.EhcacheCache">
    <!-- 缓存创建之后，最后一次访问缓存的时间至缓存失效的时间间隔 -->
    <property name="timeToIdleSeconds" value="3600"/>
    <!-- 缓存自创建时间起至失效的时间间隔 -->
    <property name="timeToLiveSeconds" value="3600"/>
    <!-- 缓存回收策略，LRU表示移除近期使用最少的对象 -->
    <property name="memoryStoreEvictionPolicy" value="LRU"/>
</cache>
```
# 动态SQL
where 控制 and是否删除，
if 控制是否存在, 
这里我不深入了...会用就行
```xml
<select id="findByAccount" parameterType="com.wsx.entity.Account" resultType="com.wsx.entity.Account">
    select * from t_account
    <where>
        <if test="id!=0">
            id = #{id}
        </if>
        <if test="username!=null">
            and username = #{username}
        </if>
        <if test="password!=null">
            and password = #{password}
        </if>
        <if test="age!=0">
            and age = #{age}
        </if>
    </where>
</select>
```

# 参考资料
[4小时学会MyBatis](https://www.bilibili.com/video/BV1V7411w7VW)
[你真的懂了mybatis延迟加载吗？](https://zhuanlan.zhihu.com/p/84942970)