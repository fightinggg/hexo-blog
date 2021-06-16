---
date: 2020-06-08 15:58:00
updated: 2020-06-08 15:58:00
mathjax: true
---



```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">

    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %highlight(%-5level) --- [%15.15(%thread)] %cyan(%-40.40(%logger{40})): %msg%n
            </pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>
    <root level="INFO">
        <appender-ref ref="STDOUT"/>
    </root>
    
</configuration>
```

