---
date: 2021-03-18 14:55:00
updated: 2021-03-18 14:55:00
mathjax: true
typora-root-url: ..\..
---

# 仓库同步


```sh
yum install git -y
mkdir /data/GitLibrary
mkdir -p /data/www/hexo
git init --bare hexo.git
vim /data/GitLibrary/hexo.git/hooks/post-receive
​```
git --work-tree=/data/www/hexo --git-dir=/data/GitLibrary/hexo.git checkout -f
​```
chmod +x /data/GitLibrary/hexo.git/hooks/post-receive
```

# 部署

```sh
docker run -d --restart=always \
-p 80:80 -v /data/www/hexo:/usr/share/nginx/html \
--name=hexo-blog nginx
```

