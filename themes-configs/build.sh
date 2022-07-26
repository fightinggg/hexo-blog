source /etc/profile

GIT_PRI_KEY=$1

echo -e $GIT_PRI_KEY

exit 0

mkdir /blog
cp -r /data/* /blog
cd /blog

workspace='themes-configs/.hexo-multi-themes'

rm -rf $workspace 
mkdir $workspace 
cd $workspace

# setup tmplate 
mkdir _template
cd _template 
hexo init  > /dev/null 2>&1
mv _config.yml defaultConfig.yml 
cd ..

# config
GIT_USER_CONFIG=$(cat ../config.properties | grep 'git.user')
GIT_EMAIL_CONFIG=$(cat ../config.properties | grep 'git.email')
GIT_REPO_CONFIG=$(cat ../config.properties | grep 'git.repo')
GIT_USER=${GIT_USER_CONFIG#*=}
GIT_EMAIL=${GIT_EMAIL_CONFIG#*=}
GIT_REPO=${GIT_REPO_CONFIG#*=}


for(( i=0;;i++));
    do 
        nameConfig=$(cat ../config.properties | grep 'themes\['$i'\].name')
        giturlConfig=$(cat ../config.properties | grep 'themes\['$i'\].git')
        depConfig=$(cat ../config.properties | grep 'themes\['$i'\].dep')
        name=${nameConfig#*=}
        giturl=${giturlConfig#*=}
        dep=${depConfig#*=}
        if [ ! $name ]; then
           break;
        fi

        echo 'name: '$name
        echo 'git:  '$giturl

        # init hexo 
        mkdir $name 
        cp -r _template/* $name

        # download themes
        git clone -b master --depth=1 $giturl $name/themes/$name > /dev/null 2>&1

        # config themes
        echo 'url: http://fightinggg.github.io/'$name >> $name/_config2.yml
        echo 'root: /'$name >> $name/_config2.yml
        echo 'theme: '$name >> $name/_config2.yml
        echo "permalink: ':abbrlink.html'" >> $name/_config2.yml
        echo 'index_generator:' >> $name/_config2.yml
        echo '  order_by: -updated' >> $name/_config2.yml

        # merge user cumtom themes
        cp -r ../$name/* $name > /dev/null 2>&1
        echo 'theme '$name' config success...'


        # add blogs
        cp -r ../../blog/* $name/source/_posts
        rm -rf $name/source/_posts/ACM $name/source/_posts/index.json $name/source/_posts/hello-world.md 
        # cp -r .deploy/hexo-next/source/tags .deploy/multiblog/$name/source/tags
        # cp -r .deploy/hexo-next/source/fightinggg .deploy/multiblog/$name/source/about
        # cp -r .deploy/hexo-next/source/categories .deploy/multiblog/$name/source/categories
        echo 'theme '$name' add blog success...'

        # build
        cd $name 
        echo npm i hexo-fightinggg-enhancer ${dep//,/ }
        npm i hexo-fightinggg-enhancer ${dep//,/ } > /dev/null 2>&1
        echo 'theme '$name' add depend success...'
        hexo --config  defaultConfig.yml.yml,_config2.yml,_config.yml g
        echo 'theme '$name' build success...'
        cd ..

        # build 
        mkdir -p _target/$name
        cp -r $name/public/* _target/$name
    done


mainNameConfig=$(cat ../config.properties | grep 'main.themes.name')
mainName=${mainNameConfig#*=}
if [ $mainName ]; then
   echo 'main themes: '$mainName
   cp -r _target/$mainName/* _target
   find ../../blog/* -name "*.*g" -exec cp {} _target \;
fi

# NOW EVERYTHINGS TO DO IS DEPLOY _target To Pages
sudo timedatectl set-timezone "Asia/Shanghai"
mkdir -p ~/.ssh/
echo -e $GIT_PRI_KEY > ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa
ssh-keyscan github.com >> ~/.ssh/known_hosts
ssh-keyscan fightinggg.top >> ~/.ssh/known_hosts
ssh-keyscan e.coding.net >> ~/.ssh/known_hosts
git config --global user.name $GIT_USER
git config --global user.email $GIT_EMAIL

cd _target
git init  > /dev/null 2>&1
git config remote.origin.url $GIT_REPO
git add .  > /dev/null 2>&1
git commit -m "-"  > /dev/null 2>&1
git push --set-upstream origin master 


# docker run -it --rm --name nginx -p 8081:80 -v $PWD/themes-configs/.hexo-multi-themes/_target:/usr/share/nginx/html nginx

