---
date: 2021-03-18 13:19:00
updated: 2021-03-18 13:19:00
mathjax: true
typora-root-url: ..\..
---





```sh
docker run -d  \
-e "SS_PORT=443" \
-e "SS_PASSWORD=fightinggg" \
-e "SS_METHOD=salsa20" \
-e "SS_TIMEOUT=600" \
-p 443:443 -p 443:443/udp \
--restart=always \
--name=vpn \
imhang/shadowsocks-docker
```

```ssh
docker logs -f vpn
```

