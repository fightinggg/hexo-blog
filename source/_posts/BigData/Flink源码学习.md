---
date: 2021-06-08 01:36:00
updated: 2021-06-08 01:36:00
mathjax: true
typora-root-url: ..\..
---

# 源码运行

## Step1. 源码获取

我们只学习1.13版本，你需要提前安装jdk8和maven，注意不要使用其他版本的jdk。

直接clone源码，然后切换到release-1.13分支

```sh
 git clone https://github.com/apache/flink.git
 git checkout -f release-1.13
```

## Step2. 启动代码编写

然后直接创建一个新的module，在idea种选择最普通的maven即可，module名字无所谓。

在moudule的pom.xml文件中增加如下依赖和构建

```xml
    <dependencies>
		<dependency>
			<groupId>org.apache.flink</groupId>
			<artifactId>flink-runtime_2.11</artifactId>
			<version>1.14-SNAPSHOT</version>
		</dependency>

		<dependency>
			<groupId>org.apache.flink</groupId>
			<artifactId>flink-runtime-web_2.11</artifactId>
			<version>1.14-SNAPSHOT</version>
		</dependency>

		<dependency>
			<groupId>log4j</groupId>
			<artifactId>log4j</artifactId>
			<version>1.2.17</version>
		</dependency>
		<dependency>
			<groupId>org.slf4j</groupId>
			<artifactId>slf4j-log4j12</artifactId>
			<version>1.7.7</version>
		</dependency>
	</dependencies>

	<build>
		<resources>
			<resource>
				<!-- Only include the web folder from the web-dashboard directory -->
				<directory>../flink-runtime-web/web-dashboard</directory>
				<includes>
					<include>web/**</include>
				</includes>
			</resource>
			<resource>
				<directory>src/main/resources</directory>
			</resource>
		</resources>
	</build>
```

在module的resource文件夹中增加配置

```properties
### direct log messages to stdout ###
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n

log4j.rootLogger=debug, stdout
```

最后创建一个Java类

```java
package org.apache.flink.launch;

import org.apache.flink.runtime.entrypoint.StandaloneSessionClusterEntrypoint;
import org.apache.flink.runtime.taskexecutor.TaskManagerRunner;

class Main {

    public static void main(String[] args) throws InterruptedException {
        final Thread task = new Thread(Main::taskManager);
        final Thread job = new Thread(Main::jobManager);
        task.start();
        Thread.sleep(10000);
        job.start();

        task.join();
        job.join();
    }

    public static void jobManager() {
        StandaloneSessionClusterEntrypoint.main(jobManagerCmd.split(" "));
    }

    public static void taskManager() {
        try {
            TaskManagerRunner.main(taskManagerCmd.split(" "));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static String jobManagerCmd =
            "--configDir flink-dist/src/main/resources "
                    + "--executionMode cluster "
                    + "-D jobmanager.memory.off-heap.size=134217728b "
                    + "-D jobmanager.memory.jvm-overhead.min=201326592b "
                    + "-D jobmanager.memory.jvm-metaspace.size=268435456b "
                    + "-D jobmanager.memory.heap.size=1073741824b "
                    + "-D jobmanager.memory.jvm-overhead.max=201326592b";

    static String taskManagerCmd =
            "--configDir flink-dist/src/main/resources "
                    + "-D taskmanager.memory.network.min=134217730b "
                    + "-D taskmanager.cpu.cores=1.0 "
                    + "-D taskmanager.memory.task.off-heap.size=0b "
                    + "-D taskmanager.memory.jvm-metaspace.size=268435456b "
                    + "-D external-resources=none "
                    + "-D taskmanager.memory.jvm-overhead.min=201326592b "
                    + "-D taskmanager.memory.framework.off-heap.size=134217728b "
                    + "-D taskmanager.memory.network.max=134217730b "
                    + "-D taskmanager.memory.framework.heap.size=134217728b "
                    + "-D taskmanager.memory.managed.size=536870920b "
                    + "-D taskmanager.memory.task.heap.size=402653174b "
                    + "-D taskmanager.numberOfTaskSlots=1 "
                    + "-D taskmanager.memory.jvm-overhead.max=201326592b";
}
```

## Step3. 运行

![image-2021-06-08 01.35.17.569](/images/image-2021-06-08 01.35.17.569.png)

## Step4. Enjoy It

现在你可以直接从这里进入flink的控制台http://localhost:8081， 你也可以直接在ideal中调试flink。

![image-2021-06-08 01.37.00.834](/images/image-2021-06-08 01.37.00.834.png)

