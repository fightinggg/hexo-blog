---
title: mysql刷题1
mathjax: true
abbrlink: 62235
date: 2020-04-06 23:18:23
categories:
-  DB
-  mysql刷题1
tags:
-  DB
-  mysql刷题1
keywords:
-  DB
-  mysql刷题1
---

# 查找最晚入职员工的所有信息
查找最晚入职员工的所有信息
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));

&emsp;&emsp; 我们排序以后选出最大的
```sql
select * from employees
    order by hire_date desc
    limit 0,1
```
&emsp;&emsp; 找到最大值以后使用where
```sql
select * from employees
    where hire_date = (select max(hire_date) from employees);
```
<!--more-->

# 查找入职员工时间排名倒数第三的员工所有信息
查找入职员工时间排名倒数第三的员工所有信息
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));


```sql
select * from employees
    order by hire_date desc
    limit 2,1
```

&emsp;&emsp; 使用distinct去重
```sql
select * from employees
    where hire_date = (
        select distinct hire_date
            from employees
            order by hire_date desc
            limit 2,1
    )
```

# 查找各个部门当前(to_date='9999-01-01')领导当前薪水详情以及其对应部门编号dept_no
CREATE TABLE `dept_manager` (
`dept_no` char(4) NOT NULL,
`emp_no` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select s.*, d.dept_no
    from
       salaries as s  inner join  dept_manager as d
            on d.emp_no = s.emp_no
    where
         d.to_date = '9999-01-01'
         and S.to_date = '9999-01-01'
```



# 查找所有已经分配部门的员工的last_name和first_name以及dept_no
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));

```sql
select e.last_name,e.first_name,d.dept_no
    from
        dept_emp as d inner join employees as e
            on d.emp_no = e.emp_no
```

# 查找所有员工的last_name和first_name以及对应部门编号dept_no，也包括展示没有分配具体部门的员工
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));


```sql
select e.last_name, e.first_name, d.dept_no
    from
        employees as e left join dept_emp as d
            on d.emp_no = e.emp_no
```


# 查找所有员工入职时候的薪水情况，给出emp_no以及salary， 并按照emp_no进行逆序
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

&emsp;&emsp; 找出最早的那个
```sql
select distinct s.emp_no,s.salary
from salaries as s
group by s.emp_no
having min(s.from_date)
order by s.emp_no desc
```

```sql

select s.emp_no , s.salary
from
    employees as e
    left join salaries as s
    on e.emp_no = s.emp_no and e.hire_date = s.from_date
order by s.emp_no desc
```



#查找薪水涨幅超过15次的员工号emp_no以及其对应的涨幅次数t
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select emp_no, count(emp_no) as t
from salaries
group by emp_no
having t > 15
```


#找出所有员工当前(to_date='9999-01-01')具体的薪水salary情况，对于相同的薪水只显示一次,并按照逆序显示
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

** 记录我第一次没看题解作出的题目 **
```sql
select distinct salary
from (
    select salary
    from salaries
    where to_date = '9999-01-01'
)
order by salary desc
```
&emsp;&emsp; 有个更好的写法
```sql
select salary
from salaries
where to_date='9999-01-01'
group by salary
order by salary desc
```


#获取所有部门当前manager的当前薪水情况，给出dept_no, emp_no以及salary，当前表示to_date='9999-01-01'
CREATE TABLE `dept_manager` (
`dept_no` char(4) NOT NULL,
`emp_no` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select d.dept_no,s.emp_no,s.salary
from (
    dept_manager as d
    inner join salaries as s
    on d.emp_no = s.emp_no
    and d.to_date = s.to_date
    and d.to_date = '9999-01-01'
)
```



#获取所有非manager的员工emp_no
CREATE TABLE `dept_manager` (
`dept_no` char(4) NOT NULL,
`emp_no` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));

```sql
select emp_no
from employees
where emp_no not in(
    select emp_no from dept_manager
)
```

#获取所有员工当前的manager，如果当前的manager是自己的话结果不显示，当前表示to_date='9999-01-01'。
结果第一列给出当前员工的emp_no,第二列给出其manager对应的manager_no。
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `dept_manager` (
`dept_no` char(4) NOT NULL,
`emp_no` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));

```sql
select de.emp_no,dm.emp_no as manager_no
from (
    dept_emp as de inner join dept_manager as dm
    on de.dept_no = dm.dept_no
)
where de.emp_no != dm.emp_no
and de.to_date = '9999-01-01'
and dm.to_date = '9999-01-01'
```



#获取所有部门中当前员工薪水最高的相关信息，给出dept_no, emp_no以及其对应的salary
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select d.dept_no,d.emp_no,max(s.salary) as salary
from (
    dept_emp as d inner join salaries as s
    on d.emp_no = s.emp_no
)
where d.to_date = '9999-01-01' AND s.to_date = '9999-01-01'
group by d.dept_no
```

#从titles表获取按照title进行分组，每组个数大于等于2，给出title以及对应的数目t。
CREATE TABLE IF NOT EXISTS "titles" (
`emp_no` int(11) NOT NULL,
`title` varchar(50) NOT NULL,
`from_date` date NOT NULL,
`to_date` date DEFAULT NULL);
```sql
select title,count(title) as t
from titles
group by title
having t>=2
```

#从titles表获取按照title进行分组，每组个数大于等于2，给出title以及对应的数目t。
注意对于重复的emp_no进行忽略。
CREATE TABLE IF NOT EXISTS `titles` (
`emp_no` int(11) NOT NULL,
`title` varchar(50) NOT NULL,
`from_date` date NOT NULL,
`to_date` date DEFAULT NULL);

```sql
select title,count(title) as t
from (
    select title from titles group by title,emp_no
)
group by title
having t>=2
```

```sql
select title,count(distinct emp_no) as t
from titles
group by title
having t>=2
```


#查找employees表所有emp_no为奇数，且last_name不为Mary的员工信息，并按照hire_date逆序排列
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));

```sql
select *
from employees
where emp_no%2 == 1
and last_name != "Mary"
order by hire_date  desc
```

#统计出当前各个title类型对应的员工当前（to_date='9999-01-01'）薪水对应的平均工资。结果给出title以及平均工资avg。
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));
CREATE TABLE IF NOT EXISTS "titles" (
`emp_no` int(11) NOT NULL,
`title` varchar(50) NOT NULL,
`from_date` date NOT NULL,
`to_date` date DEFAULT NULL);

```sql
select t.title,avg(s.salary)
from (
    salaries as s inner join titles as t
    on s.emp_no = t.emp_no
)
where s.to_date='9999-01-01'
and t.to_date='9999-01-01'
group by title
```

#获取当前（to_date='9999-01-01'）薪水第二多的员工的emp_no以及其对应的薪水salary
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select emp_no,salary
from salaries
order by salary desc
limit 1,1
```

#查找当前薪水(to_date='9999-01-01')排名第二多的员工编号emp_no、薪水salary、last_name以及first_name，不准使用order by
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select e.emp_no,s.salary,e.last_name,e.first_name
from (
    employees as e inner join salaries as s
    on e.emp_no = s.emp_no
    and s.to_date= '9999-01-01'
    and s.salary = (
        /*select max(salary) from salaries*/
        select max(salary) from salaries where salary<(
            select max(salary) from salaries
        )
    )
)
```

#查找所有员工的last_name和first_name以及对应的dept_name，也包括暂时没有分配部门的员工
CREATE TABLE `departments` (
`dept_no` char(4) NOT NULL,
`dept_name` varchar(40) NOT NULL,
PRIMARY KEY (`dept_no`));
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));

```sql
select e.last_name,e.first_name,dm.dept_name
from (
    (
        employees as e left join dept_emp as de
        on e.emp_no = de.emp_no
    ) left join departments as dm
    on de.dept_no=dm.dept_no
)
```


#查找员工编号emp_no为10001其自入职以来的薪水salary涨幅值growth
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select
(

(select salary
from salaries
where emp_no= 10001
order by to_date desc
limit 0,1) -
(select salary
from salaries
where emp_no= 10001
order by to_date
limit 0,1)

) as growth
```


#查找所有员工自入职以来的薪水涨幅情况，给出员工编号emp_no以及其对应的薪水涨幅growth，并按照growth进行升序
CREATE TABLE `employees` (
`emp_no` int(11) NOT NULL,
`birth_date` date NOT NULL,
`first_name` varchar(14) NOT NULL,
`last_name` varchar(16) NOT NULL,
`gender` char(1) NOT NULL,
`hire_date` date NOT NULL,
PRIMARY KEY (`emp_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select a.emp_no,(b.salary-c.salary) as growth
from
    employees as a
    inner join salaries as b
    on a.emp_no = b.emp_no and b.to_date = '9999-01-01'
    inner join salaries as c
    on a.emp_no = c.emp_no and a.hire_date = c.from_date
order by growth
```

#统计各个部门的工资记录数，给出部门编码dept_no、部门名称dept_name以及次数sum
CREATE TABLE `departments` (
`dept_no` char(4) NOT NULL,
`dept_name` varchar(40) NOT NULL,
PRIMARY KEY (`dept_no`));
CREATE TABLE `dept_emp` (
`emp_no` int(11) NOT NULL,
`dept_no` char(4) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`dept_no`));
CREATE TABLE `salaries` (
`emp_no` int(11) NOT NULL,
`salary` int(11) NOT NULL,
`from_date` date NOT NULL,
`to_date` date NOT NULL,
PRIMARY KEY (`emp_no`,`from_date`));

```sql
select dm.dept_no,dm.dept_name,count(s.salary) as sum
from
    salaries as s
    inner join dept_emp as de
    on s.emp_no = de.emp_no
    inner join departments as dm
    on de.dept_no = dm.dept_no
group by dm.dept_no
```

