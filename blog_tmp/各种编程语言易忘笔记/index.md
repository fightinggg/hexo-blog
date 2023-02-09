---
date: 2020-11-01 00:00:00
updated: 2020-11-01 00:00:00
tags: [编程语言,笔记]

---



# 1. C/C++



# 2. Java



# 3. Go



# 4. Node



# 5. Python

## 5.1. 字符串格式化

| 代码                     | 备注                                  |
| ------------------------ | ------------------------------------- |
| `"{:.5f}".format(0.123)` | 浮点数保留5位小数                     |
| `"{:5d}".format(123)`    | 整数右对齐，保留5个字符长度，空格补齐 |
|                          |                                       |

## 5.2. 排序

list对象自带sort方法

```python
a=[3,1,2];a.sort();a
```

指定排序key

```python
c = [{"a":"13"},{"a":"2"}];c.sort(key=lambda x:x["a"]);c
```



## 5.3. filter

list的filter



```
filter(lambda x: x % 2 == 0, range(10))
```



# 6. MySQL

## 6.1 date转时间

```mysql
select date_format(now(), '%Y%m%d%H')
```



https://www.cnblogs.com/ggjucheng/p/3352280.html

# 7. ClickhouseSQL

## 7.1. SQL Settings

### 7.1.1. 设置单机聚合

```sql
settings distributed_group_by_no_merge = 1
```

## 7.2. 系统分析

## 7.3. DDL

```
create table on cluster xxx(
   // ...
)
ENGINE = Distributed('clustername', 'dbname', 'localtable', hashfunction())
```



```
CREATE TABLE system.parts_all on cluster clickhouse_pcg_video_data_science_1_replica ( \ 
partition                             String, \
name                                  String, \
part_type                             String, \
active                                UInt8, \
marks                                 UInt64, \
rows                                  UInt64, \
bytes_on_disk                         UInt64, \
data_compressed_bytes                 UInt64, \
data_uncompressed_bytes               UInt64, \
marks_bytes                           UInt64, \
modification_time                     DateTime, \
remove_time                           DateTime, \
refcount                              UInt32, \
min_date                              Date, \
max_date                              Date, \
min_time                              DateTime, \
max_time                              DateTime, \
partition_id                          String, \
min_block_number                      Int64, \
max_block_number                      Int64, \
level                                 UInt32, \
data_version                          UInt64, \
primary_key_bytes_in_memory           UInt64, \
primary_key_bytes_in_memory_allocated UInt64, \
is_frozen                             UInt8, \
database                              String, \
table                                 String, \
engine                                String, \
disk_name                             String, \
path                                  String, \
hash_of_all_files                     String, \
hash_of_uncompressed_files            String, \
uncompressed_hash_of_compressed_files String, \
delete_ttl_info_min                   DateTime, \
delete_ttl_info_max                   DateTime, \
`move_ttl_info.expression`              Array(String), \
`move_ttl_info.min`                     Array(DateTime), \
`move_ttl_info.max`                     Array(DateTime), \
bytes                                 UInt64, \
marks_size                            UInt64 \      
) \
ENGINE = Distributed('clickhouse_pcg_video_data_science_1_replica', 'system', 'parts', rand()) 
```



## 7.4. 时间和字符串

### 7.4.1. 转化

```sql
SELECT formatDateTime(toDateTime('2010-01-04 12:13:14'), '%Y-%m-%d %H:%M:%S')
select parseDateTime32BestEffort('20220203112233')
```

### 7.4.2. 时间加减

`addYears`, addMonths, addWeeks, addDays, addHours, addMinutes, addSeconds, addQuarters

```
SELECT formatDateTime(addDays(toDateTime('2010-01-04 12:13:14'),1), '%Y-%m-%d %H:%M:%S')
```



































