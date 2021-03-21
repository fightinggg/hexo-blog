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
  hexo clean && hexo s


# cp -rf /data/hexo-blog/* /app && hexo s