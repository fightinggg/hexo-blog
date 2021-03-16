---
date: 2021-03-16 12:12:00
updated: 2021-03-16 12:12:00
mathjax: true
---





```sh
# install logstash
yum install -y java-1.8.0-openjdk.x86_64 wget vim
wget https://artifacts.elastic.co/downloads/logstash/logstash-7.0.0.tar.gz
tar -xzvf logstash-7.0.0.tar.gz
mv logstash-7.0.0 /usr/local/logstash
echo "LOGSTASH_HOME=/usr/local/logstash" >> ~/.bashrc
echo "PATH=\$LOGSTASH_HOME/bin:\$PATH" >> ~/.bashrc
source ~/.bashrc
```



grok语法

https://github.com/logstash-plugins/logstash-patterns-core/tree/master/patterns

