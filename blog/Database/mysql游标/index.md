---
date: 2020-04-08 17:24:26
updated: 2020-04-08 17:24:26
---

# 游标允许我们遍历结果集
 不想多说，我只是感觉好复杂
```sql
create table test(id int);
delimiter //                            #定义标识符为双斜杠
drop procedure if exists test;          #如果存在test存储过程则删除
create procedure test()                 #创建无参存储过程,名称为test
begin
  declare i int;                      #申明变量
  declare id_ int;
  declare done int;
  declare cur cursor for select id from test;
  declare continue handler for not found set done = 1;
  open cur;
  read_loop: loop
    fetch cur into id_;
    if done = 1 then
      leave read_loop;
    end if;
  select id_;
  end loop;
  close cur;
end
//                                      #结束定义语句
call test();                            #调用存储过程
```