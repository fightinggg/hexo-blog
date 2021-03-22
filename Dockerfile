FROM centos:centos8

# Install requirements
RUN yum install git nodejs -y
RUN npm install -g hexo-cli

# Set workdir
WORKDIR /app

# Expose Server Port
EXPOSE 4000

CMD \
  unalias cp && \
  cp -r /data/hexo-blog/* /app && \
  npm install && \
  cp -r /data/.ssh ~/ && \
  chmod 600 ~/.ssh/id_rsa && \
  chmod 700 ~/.ssh && \
  git config --global user.email "246553278@qq.com" && \
  git config --global user.name "wsx" && \
  (while(true) do cp -rf /data/hexo-blog/source/_posts/* /app/source/_posts; sleep 10s; done &) && \
  hexo clean && hexo s


# cp -rf /data/hexo-blog/* /app && hexo s

# sudo docker run -it --rm --name=hexoblog -v /src/hexo-blog:/data/hexo-blog -v /root/.ssh:/data/.ssh -p 4000:4000 hexo bash

# sudo docker build -t hexo .

# sudo docker rm -f hexoblog
