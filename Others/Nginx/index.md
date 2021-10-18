---
date: 2021-01-11 00:00:00
updated: 2021-01-11 00:00:00
---

# Nginx

```sh
# 支持stream 的nginx
cd 
wget http://nginx.org/download/nginx-1.16.1.tar.gz
tar -zxf nginx-1.16.1.tar.gz -C /usr/local
cd /usr/local/nginx-1.16.1
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-stream
make && make install 
/usr/local/nginx/sbin/nginx -v

stream {
    upstream myapp{
        server IP:9000;
    }
    server {
        listen 20000;
        proxy_connect_timeout 5s;
        proxy_timeout 5s;
        proxy_pass myapp;
    }
}
/usr/local/nginx/sbin/nginx -s reload
```
