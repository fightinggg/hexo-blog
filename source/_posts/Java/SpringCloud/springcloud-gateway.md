
---
date: 2020-11-10 00:00:00
updated: 2020-11-10 00:00:00
typora-root-url: ..\..
---



### Spring Cloud Gateway



```java
package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.event.RefreshRoutesEvent;
import org.springframework.cloud.gateway.route.RouteDefinition;
import org.springframework.cloud.gateway.route.RouteDefinitionRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

// 动态路由
// https://zhuanlan.zhihu.com/p/125018436
@RestController
@SpringBootApplication
public class DemoApplication implements RouteDefinitionRepository, ApplicationEventPublisherAware {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    // event publisher
    ApplicationEventPublisher applicationEventPublisher;

    @Override
    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        this.applicationEventPublisher = applicationEventPublisher;
    }


    // router
    List<RouteDefinition> memery = new ArrayList<>();

    private void refreshRoute() {
        applicationEventPublisher.publishEvent(new RefreshRoutesEvent(this));
    }

    @PutMapping
    Mono<Void> putRoute(@RequestBody Mono<RouteDefinition> o) {
        return o.flatMap(routeDefinition -> {
            memery.add(routeDefinition);
            refreshRoute();
            return Mono.empty();
        });
    }

    @PostMapping
    Mono<Void> postRoute(@RequestBody Mono<RouteDefinition> o) {
        return o.flatMap(routeDefinition -> {
            for (int i = 0; i < memery.size(); i++) {
                if (memery.get(i).getId().equals(routeDefinition.getId())) {
                    memery.set(i, routeDefinition);
                }
            }
            refreshRoute();
            return Mono.empty();
        });
    }

    @DeleteMapping
    Mono<Void> deleteRoute(@RequestBody Mono<String> o) {
        return o.flatMap(id -> {
            memery.removeIf(routeDefinition -> routeDefinition.getId().equals(id));
            refreshRoute();
            return Mono.empty();
        });
    }

    @GetMapping
    Mono<List<RouteDefinition>> getRoute(){
        return Mono.just(memery);
    }

    @Override
    public Flux<RouteDefinition> getRouteDefinitions() {
        return Flux.fromIterable(memery);
    }

    @Override
    public Mono<Void> save(Mono<RouteDefinition> route) {
        return Mono.empty();
    }

    @Override
    public Mono<Void> delete(Mono<String> routeId) {
        return Mono.empty();
    }
}
```
<!-- more -->
```txt
GET http://localhost:52834/test

###

PUT http://localhost:52834
Content-Type: application/json

{
    "id": "test",
    "predicates": [
        {
            "name": "Path",
            "args": {
                "pattern": "/test"
            }
        }
    ],
    "filters": [
        {
            "name": "RewritePath",
            "args": {
                "regexp": "/test",
                "replacement": "/s"
            }
        }
    ],
    "uri": "http://www.baidu.com",
    "order": 0
}

###

GET http://localhost:52834

###

GET http://localhost:52834/test
```
