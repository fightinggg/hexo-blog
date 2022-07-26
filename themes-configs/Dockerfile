FROM centos:centos8
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-* \
&& sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-* \
&& curl https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo -L -o /etc/yum.repos.d/CentOS-Base.repo \
&& yum clean all \
&& yum makecache

RUN yum install -y nodejs git
RUN npm i hexo n -g && n stable
RUN curl https://github.com/jgm/pandoc/releases/download/2.14.0.3/pandoc-2.14.0.3-linux-amd64.tar.gz -L -o pandoc.tar.gz \
 && tar -zxf pandoc.tar.gz && rm -f pandoc.tar.gz
ENV PATH="/pandoc-2.14.0.3/bin:${PATH}"
COPY build.sh /build.sh