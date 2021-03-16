---
date: 2021-03-15 15:18:00
updated: 2021-03-15 15:18:00
mathjax: true
---





```sh



curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.5.1-x86_64.rpm
rpm -vi filebeat-7.5.1-x86_64.rpm
filebeat modules enable logstash
filebeat setup
cat<<EOF>/etc/filebeat/filebeat.yml
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /data/*.log
filebeat.config.modules:
  path: \${path.config}/modules.d/*.yml
  reload.enabled: false
setup.template.settings:
  index.number_of_shards: 1
setup.kibana:
output.elasticsearch:
  hosts: ["localhost:9200"]
processors:
  - add_host_metadata: ~
  - add_cloud_metadata: ~
  - add_docker_metadata: ~
  - add_kubernetes_metadata: ~
EOF
mkdir /data
for i in $(seq 1 10000); do echo "{\"x\"="$i"}" >> /data/10000.log; sleep 1s;done &
/usr/share/filebeat/bin/filebeat -c /etc/filebeat/filebeat.yml -path.home /usr/share/filebeat -path.config /etc/filebeat -path.data /var/lib/filebeat -path.logs /var/log/filebeat -e &













```



