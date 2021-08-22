docker run -d -p 80:80 --name hexo-blog centos bash -c "yum install nginx git -y && \
rm -rf /usr/share/nginx/html && \
git clone https://github.com/fightinggg/fightinggg.github.io.git /usr/share/nginx/html && \
cd /usr/share/nginx/html && \
git config pull.rebase true && \
((while true; \
do git fetch --all && git reset --hard origin/master && git pull  && sleep 10 ;\
done;)&) && \
echo \"launch nginx now\" && \
nginx -g \"daemon off;\""