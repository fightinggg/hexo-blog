FROM centos:centos8
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-* \
&& sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-* \
&& curl https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo -L -o /etc/yum.repos.d/CentOS-Base.repo \
&& yum clean all \
&& yum makecache
RUN yum install -y nodejs git
RUN npm i hexo -g
RUN npm install -g n && n stable
RUN yum install wget -y
RUN wget https://github.com/jgm/pandoc/releases/download/2.14.0.3/pandoc-2.14.0.3-linux-amd64.tar.gz \
 && tar -zxf pandoc-2.14.0.3-linux-amd64.tar.gz \
 && PATH="$PWD/pandoc-2.14.0.3/bin":$PATH
ENV PATH="/pandoc-2.14.0.3/bin:${PATH}"
RUN yum install nginx -y
COPY build.sh /build.sh