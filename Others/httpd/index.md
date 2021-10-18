---
date: 2021-04-20 01:14:00
updated: 2021-04-20 01:14:00
---
```sh
 docker run \
 -d \
 --name httpd \
 -p 8085:80 \
 -v $HOME/sharefile:/usr/local/apache2/htdocs/sharefile \
 httpd
```