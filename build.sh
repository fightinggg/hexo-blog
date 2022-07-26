#!/bin/bash
# https://github.com/litten/hexo-theme-yilia.git

themes=(matery foundation next landscape)
themesAddr=(
    https://github.com/blinkfox/hexo-theme-matery.git
    https://github.com/chrisjlee/hexo-theme-zurb-foundation.git
    https://github.com/next-theme/hexo-theme-next.git
    https://github.com/next-theme/hexo-theme-next.git
)

# build

# setup main 
rm -rf .deploy/multiblog/hexo-next
mkdir -p .deploy/multiblog/hexo-next
cp -r .deploy/hexo-next/ .deploy/multiblog/hexo-next

# setup tmplate 
rm -rf .deploy/multiblog/template
mkdir -p .deploy/multiblog/template
cd .deploy/multiblog/template && hexo init && cd ../../..


for(( i=0;i<${#themes[@]};i++));
    do
        name=${themes[i]}
        giturl=${themesAddr[i]}

        echo 'process: '${name}' '$giturl
        


        # init hexo 
        rm -rf .deploy/multiblog/$name
        mkdir -p .deploy/multiblog/$name
        cp -r .deploy/multiblog/template/ .deploy/multiblog/$name

        # download themes
        git clone -b master --depth=1 $giturl .deploy/multiblog/$name/themes/$name > /dev/null

        # config themes
        echo 'url: http://fightinggg.github.io/'$name >> .deploy/multiblog/$name/_config2.yml
        echo 'root: /'$name >> .deploy/multiblog/$name/_config2.yml
        echo 'theme: '$name >> .deploy/multiblog/$name/_config2.yml
        echo "permalink: ':abbrlink.html'" >> .deploy/multiblog/$name/_config2.yml
        echo 'index_generator:' >> .deploy/multiblog/$name/_config2.yml
        echo '  order_by: -updated' >> .deploy/multiblog/$name/_config2.yml 
        # echo 'exclude: ["source/_posts/ACM/**"]' >> .deploy/multiblog/$name/_config2.yml 

        # add blogs
        cp -r blog/ .deploy/multiblog/$name/source/_posts
        rm -rf .deploy/multiblog/$name/source/_posts/ACM
        rm .deploy/multiblog/$name/source/_posts/index.json .deploy/multiblog/$name/source/_posts/hello-world.md 

        # config plugins
        cd .deploy/multiblog/$name && npm i hexo-fightinggg-enhancer && cd ../../..

        # build 
        hexo --cwd .deploy/multiblog/$name --config  _config.yml,_config2.yml g --silent 
        cp -r .deploy/multiblog/$name/public/ .deploy/multiblog/hexo-next/source/$name

    done


# server
# for(( i=0;i<${#themes[@]};i++));
#   do
#     echo 'http://localhost:4000/'${themes[i]}
#   done
# cd  .deploy/multiblog/hexo-next && hexo clean --silent  && hexo s 