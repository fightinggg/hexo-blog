FROM centos:centos8

# Install requirements
RUN yum install git nodejs -y
RUN npm install -g hexo-cli

# Set workdir
WORKDIR /app

# Expose Server Port
EXPOSE 4000

CMD \
  cp -r /data/hexo-blog/* /app && \
  npm install && \
  cp -r /data/.ssh ~/ && \
  chmod 600 ~/.ssh/id_rsa && \
  chmod 600 ~/.ssh/id_rsa.pub && \
  chmod 700 ~/.ssh && \
  cat ~/.ssh/id_rsa.pub && \
  hexo s
