FROM centos:centos8

# Install requirements
RUN yum install git nodejs -y
RUN npm install -g hexo-cli

# Set workdir
WORKDIR /app

# Expose Server Port
EXPOSE 4000

COPY package.json /app

RUN npm install

CMD \
  cp -rf /data/hexo-blog/* /app && \
  # npm install && \
  cp -r /data/.ssh ~/ && \
  chmod 600 ~/.ssh/id_rsa && \
  chmod 700 ~/.ssh && \
  git config --global user.email "246553278@qq.com" && \
  git config --global user.name "wsx" && \
  hexo clean && hexo s


# unalias cp 

# cp -rf /data/hexo-blog/* /app && hexo clean && hexo s

# sudo docker run -it --rm --name=hexoblog -v /src/hexo-blog:/data/hexo-blog -v /root/.ssh:/data/.ssh -p 4000:4000 hexo bash

# sudo docker build -t hexo .

# sudo docker rm -f hexoblog
