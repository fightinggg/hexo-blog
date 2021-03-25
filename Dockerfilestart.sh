
sudo docker run -it \
--rm --name=hexoblog \
-v /src/hexo-blog/source:/app/source \
-v /src/hexo-blog/themes:/app/themes \
-v /src/hexo-blog/_config.yml:/app/_config.yml \
-v /root/.ssh:/root/.ssh \
-p 4000:4000 hexo

sudo docker build -t hexo .

sudo docker rm -f hexoblog
