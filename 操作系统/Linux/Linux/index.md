---
date: 2020-09-14 00:00:00
updated: 2020-09-14 00:00:00
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