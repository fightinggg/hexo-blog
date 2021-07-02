docker run -it --rm --name=hexoblog -v ${HOME}:/data:ro -p 4000:4000 hexo bash -c "source /root/.bashrc && cp -rf /data/src/hexo-blog/* /app && hexo s"
