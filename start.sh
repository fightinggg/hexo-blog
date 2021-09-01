docker run -d --restart=always --name hexo-blog -p 80:80 nginx:1.21.1 bash -c "apt update && \
apt-get install git -y && \
rm -rf /usr/share/nginx/html && \
git clone https://github.com/fightinggg/fightinggg.github.io.git /usr/share/nginx/html && \
cd /usr/share/nginx/html && \
git config pull.rebase true && \
((while true; \
do git fetch --all && git reset --hard origin/master && git pull  && sleep 10 ;\
done;)&) && \
echo \"launch nginx now\" && \
nginx -g \"daemon off;\""