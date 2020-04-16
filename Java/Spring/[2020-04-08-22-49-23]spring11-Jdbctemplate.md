---
mathjax: true
---


# JdbcTemplate
## 测试写法
```java
ApplicationContext applicationContext = new ClassPathXmlApplicationContext("bean.xml");
JdbcTemplate jdbcTemplate = applicationContext.getBean("jdbcTemplate",JdbcTemplate.class);
// 保存
jt.update("insert into account(name,money)values(?,?)","eee",3333f);
// 更新
jt.update("update account set name=?,money=? where id=?","test",4567,7);
// 删除
jt.update("delete from account where id=?",8);
// 查询
List<Account> account = jt.query("select * from account where money>?",new BeanPropertyRowMapper<Account>(Account.class),1000f);
```
## DAO中的JdbcTemplate
&emsp;&emsp; 上面的代码实际上只能用于简单的测试，我们正确的做法应该还是使用DAO实现，注意到使用DAO实现的时候肯定要在类中创建jdbcTemplate，如果我们有多个DAO就会导致份重复的代码，这时可以让他们继承一个JdbcDaoSupport来实现，而这个类spring又恰好为我们提供了。但是只能通过xml注入，你想要用注解注入的话就只能自己写一个。



