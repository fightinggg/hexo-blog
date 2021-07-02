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

RUN yum install wget -y
RUN wget https://github.com/jgm/pandoc/releases/download/2.14.0.3/pandoc-2.14.0.3-linux-amd64.tar.gz
RUN tar -zxf pandoc-2.14.0.3-linux-amd64.tar.gz -C /usr/local
RUN echo -e "unalias cp\nPATH=$PATH:/usr/local/pandoc-2.14.0.3/bin\n" >> /root/.bashrc


CMD \
  cp -rf /data/hexo-blog/* /app && \
  # npm install && \
  cp -r /data/.ssh ~/ && \
  chmod 600 ~/.ssh/id_rsa && \
  chmod 700 ~/.ssh && \
  git config --global user.email "246553278@qq.com" && \
  git config --global user.name "wsx" && \
  hexo clean && hexo s


# docker build --build-arg  http_proxy=http://host.docker.internal:1080 --build-arg https_proxy=http://host.docker.internal:1080 -t hexo . 

