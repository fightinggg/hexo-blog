---
date: 2020-04-09 18:20:05
updated: 2020-04-09 18:20:05
---

# spring支持的事务
 似乎都是关于数据库的，可能也是我的水平问题，不知道其他的东西
 大概需要实现两个，一个commit，另一个是rollback
 事务是基于AOP实现的

<!--more-->

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.example</groupId>
    <artifactId>springTransaction</artifactId>
    <version>1.0-SNAPSHOT</version>


    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.2.4.RELEASE</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-tx</artifactId>
            <version>5.2.4.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-jdbc</artifactId>
            <version>5.2.4.RELEASE</version>
        </dependency>

        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <version>5.2.4.RELEASE</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.6</version>
        </dependency>

        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
        </dependency>


        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>1.8.13</version>
        </dependency>


    </dependencies>
</project>
```

```java
package com.wsx.spring.Service;

import com.wsx.spring.Account;
import com.wsx.spring.Dao.IAccountDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
public class AccountService implements IAccountService {
    @Autowired
    private IAccountDao accountDao;

    public Account findAccountById(Integer accountId) {
        return accountDao.findAccountById(accountId);
    }


    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public void transfer(String sourceName, String targetName, Float money) {
        System.out.println("start transfer");
        // 1.根据名称查询转出账户
        Account source = accountDao.findAccountByName(sourceName);
        // 2.根据名称查询转入账户
        Account target = accountDao.findAccountByName(targetName);
        // 3.转出账户减钱
        source.setMoney(source.getMoney() - money);
        // 4.转入账户加钱
        target.setMoney(target.getMoney() + money);
        // 5.更新转出账户
        accountDao.updateAccount(source);

        int i = 1 / 0;

        // 6.更新转入账户
        accountDao.updateAccount(target);
    }
}
```