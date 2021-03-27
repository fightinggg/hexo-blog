---
date: 2020-09-14 00:00:00
updated: 2020-09-14 00:00:00
mathjax: true
---


# Linux

换源

https://zhuanlan.zhihu.com/p/61228593

```sh
sudo cp /etc/apt/sources.list /etc/apt/sources.list_backup
sudo vi /etc/apt/sources.list

## 添加在最前面
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse


sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install build-essential -y
```





## 安装yum

```sh
sudo apt-get install build-essential -y
sudo apt-get install yum -y
```



## ele

### firefox

```shell
sudo dpkg --remove --force-remove-reinstreq google-chrome-stable
apt-get install firefox
```
<!-- more -->

## XXD

这是一个16进制查看工具

```sh
# 查看帮助
xxd -h

# 查看文件前100个字节
xxd -l 100 file.bin
```



## 磁盘管理

### 查看磁盘使用情况

```sh
df
```

第一列是文件系统， 一般是虚拟磁盘和物理磁盘，我们一般只用关心物理磁盘

### 查看文件夹使用情况

```sh
du -sh *
```









## SSH

### Install

```sh
# 必须安装passwd
yum install openssh-server openssh-clients passwd  -y; \
sed -i "s/^UsePAM yes/UsePAM no/g" /etc/ssh/sshd_config; \
echo 123456 | passwd root --stdin; \
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa; \
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys; \
chmod 0600 ~/.ssh/authorized_keys; \
ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key; \
ssh-keygen -q -N "" -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key; \
ssh-keygen -q -N "" -t ed25519 -f /etc/ssh/ssh_host_ed25519_key; \
/usr/sbin/sshd
```

### Install2

```sh
# 必须安装passwd
yum install openssh-server openssh-clients passwd  -y; \
sed -i "s/^UsePAM yes/UsePAM no/g" /etc/ssh/sshd_config; \
echo 123456 | passwd root --stdin; \
ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key; \
ssh-keygen -q -N "" -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key; \
ssh-keygen -q -N "" -t ed25519 -f /etc/ssh/ssh_host_ed25519_key; \
/usr/sbin/sshd
```

### id_rsa

```sh
chmod 0600 id_rsa
```

```txt
xxxx
~~~~
xxxx
```

### authorized_keys

```txt
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCxlCDiJkFEK+cI9i1RltBdzhmkpEOHxGaqJh9CXzkmWRCYE1IaqBQ3ev+kHMShMX48crpdv1mHVrMvt9Kpo7PhkZem+Pd5i+PMVw53MY3Ow0ntoaqK0nBclDieJNmb32BfdI19nm4j6bSyyh8IMmYPsBfTR5wO+5u4cZxXb4I4mocVtvQXa3g7yZHaeEAVL9WfCrWM8/tH/7sAcP3pxdIuoIht/dMBU6wbRt7oPPC7pgw4uDq6y0sHv5SR9zlrmyqusZHDkg+BUaaFnsxnwREuC5Ll1q6ufqNBoUhTETxmZTaqMiwXyKb3gIer8BVctLRoKstNxX08CBiM/1RNzFX3 1144560553@qq.com
```



### id_rsa.pub

```txt
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCxlCDiJkFEK+cI9i1RltBdzhmkpEOHxGaqJh9CXzkmWRCYE1IaqBQ3ev+kHMShMX48crpdv1mHVrMvt9Kpo7PhkZem+Pd5i+PMVw53MY3Ow0ntoaqK0nBclDieJNmb32BfdI19nm4j6bSyyh8IMmYPsBfTR5wO+5u4cZxXb4I4mocVtvQXa3g7yZHaeEAVL9WfCrWM8/tH/7sAcP3pxdIuoIht/dMBU6wbRt7oPPC7pgw4uDq6y0sHv5SR9zlrmyqusZHDkg+BUaaFnsxnwREuC5Ll1q6ufqNBoUhTETxmZTaqMiwXyKb3gIer8BVctLRoKstNxX08CBiM/1RNzFX3 1144560553@qq.com
```



### Problem

- [System is booting up. Unprivileged users are not permitted to log in yet](https://unix.stackexchange.com/questions/487742/system-is-booting-up-unprivileged-users-are-not-permitted-to-log-in-yet)



### Docker Install

- Dockerfile

```txt
FROM centos:centos8
RUN yum install openssh-server openssh-clients passwd  -y; \
sed -i "s/^UsePAM yes/UsePAM no/g" /etc/ssh/sshd_config; \
echo 123456 | passwd root --stdin; \
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa; \
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys; \
chmod 0600 ~/.ssh/authorized_keys; \
ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key; \
ssh-keygen -q -N "" -t ecdsa -f /etc/ssh/ssh_host_ecdsa_key; \
ssh-keygen -q -N "" -t ed25519 -f /etc/ssh/ssh_host_ed25519_key;
EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
```

- Build

```sh
docker build -t sshd:centos8 .
```

- Run

```sh
docker run -itd -p 2222:22 sshd:centos8
```

- Connect

```sh
ssh localhost -p 2222
```

### USE

```sh
ssh root@9.135.10.2 -p 36000 -P
xxxx
```



## Git

```sh
docker run -it --rm \
	-v ${HOME}:/root \
	-v $(pwd):/git \
	alpine/git \
	clone https://github.com/alpine-docker/git.git
```

### 源码安装

```sh
gitVersion=2.29.2
yum install -y curl-devel expat-devel gettext-devel \
    openssl-devel zlib-devel gcc perl-ExtUtils-MakeMaker \
    autoconf automake make libtool wget;\
wget https://github.com/git/git/archive/v$gitVersion.tar.gz; \
tar -zxf v$gitVersion.tar.gz; \
cd /git-$gitVersion; \
make prefix=/usr/local/git all; \
make prefix=/usr/local/git install; \
echo "GIT_HOME=/usr/local/git" >> ~/.bashrc; \
echo "PATH=\$GIT_HOME/bin:\$PATH" >> ~/.bashrc; \
source ~/.bashrc; \
git --version;   
```

修改Git默认编辑器

```sh
 git config --global core.editor "vim"
```

### GIT提交规范

```txt
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
```

### 提交Tag

```
git push origin --tags
```



## vim

```sh
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
 
echo >~/.vimrc<<EOF 
" Vundle set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'The-NERD-Tree'
Plugin 'gdbmgr'
Plugin 'mbbill/undotree'
Plugin 'majutsushi/tagbar'
Plugin 'vim-airline/vim-airline' " 状态栏
Plugin 'vim-airline/vim-airline-themes' "状态栏
Plugin 'cohlin/vim-colorschemes' " 主题
Plugin 'tomasr/molokai' " molokai
Plugin 'jiangmiao/auto-pairs' " 括号补全
Plugin 'plasticboy/vim-markdown'
Plugin 'iamcco/mathjax-support-for-mkdp' " 数学公式
Plugin 'iamcco/markdown-preview.vim' " markdown预览
"Plugin 'Valloric/YouCompleteMe'
"Plugin 'zxqfl/tabnine-vim'
Plugin 'w0rp/ale' " 语法纠错
Plugin 'octol/vim-cpp-enhanced-highlight' " c++语法高亮
Plugin 'Shougo/echodoc.vim' " c++函数提示
Plugin 'Chiel92/vim-autoformat' " c++代码格式化
Plugin 'scrooloose/nerdcommenter' " c++代码注释
Plugin 'ashfinal/vim-colors-violet' " 配色
Plugin 'terryma/vim-multiple-cursors' " vim 多行编辑
Plugin 'mhinz/vim-startify'
call vundle#end()
filetype plugin indent on


set et "tab用空格替换

set tabstop=2
set expandtab
" Tab键的宽度

set softtabstop=2
set shiftwidth=2
"  统一缩进为2

set number
" 显示行号

set history=10000
" 历史纪录数

set hlsearch
set incsearch
" 搜索逐字符高亮

set encoding=utf-8
set fileencodings=utf-8,ucs-bom,shift-jis,gb18030,gbk,gb2312,cp936,utf-16,big5,euc-jp,latin1
" 编码设置

" set mouse=a
" use mouse

set langmenu=zn_CN.UTF-8
set helplang=cn
" 语言设置

set laststatus=2
" 总是显示状态行 就是那些显示 --insert-- 的怪东西

set showcmd
" 在状态行显示目前所执行的命令，未完成的指令片段亦会显示出来

set scrolloff=3
" 光标移动到buffer的顶部和底部时保持3行距离

set showmatch
" 高亮显示对应的括号

set matchtime=1
" 对应括号高亮的时间（单位是十分之一秒）

colorscheme molokai
EOF

vim +PluginInstall +qall
```

## Net Commond

### Centos8 IP网络配置

```sh
/etc/sysconfig/network-scripts/*
```



### Centos8重新载入网络设置

```sh
nmcli c reload
nmcli c up ens32
```
