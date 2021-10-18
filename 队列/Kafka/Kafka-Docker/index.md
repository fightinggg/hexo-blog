---
date: 2021-05-28 16:17:00
updated: 2021-05-28 16:17:00
---

# Install Kafka

## step 1. launch zookeeper in background

```
docker run -d \
-p 2181:2181 \
--name zookeeper \
-m 100M --memory-swap 100M --cpus 0.1 \
zookeeper
```

## step 2. launch kafka

```
docker run -it --rm \
--link zookeeper:zookeeper \
--name=kafka \
-p 9092:9092 \
-m 200M --memory-swap=1024M \
1144560553/kafka:test \
bin/kafka-server-start.sh config/server.properties \
--override zookeeper.connect=zookeeper:2181 \
--override listeners=PLAINTEXT://0.0.0.0:9092 \
--override advertised.listeners=PLAINTEXT://localhost:9092
```



# Project In Github

https://github.com/fightinggg/kafka-docker



# Project In Dockerhub
