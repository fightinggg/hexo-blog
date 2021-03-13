---
date: 2020-03-07 12:28:32
updated: 2020-03-07 12:28:32
mathjax: true
typora-root-url: ..\..
---

# vim
 vim是一款强大的文本编辑器,如果配置到位，真的真的非常漂亮，如下图violet主题的浅色和深色

![img](/images/violet_light.png) 

<!---more-->
![](/images/violet_dark.png)
 还有经典的molokai配色主题
 还有c++高亮配色
![](/images/c++高亮.png)
 c++补全
![](/images/c++补全.png)
 多行编辑
![](/images/多行编辑.png)



# 笔者的vim经历
 先后尝试vim，笔者已经度过了两年，学到了很多，却也很少，

# vim安装
 以前笔者使用过linux下的vim，现在正使用的mac下的vim，这里只讲mac如何安装vim，mac本身自带vim,当然mac也可以使用指令
```bash
brew install vim
```

# vim基本配置
 vim是需要简单配置一下的，对于没有配置的vim而言，会很难受，下面我先发一下我的vim配置
```
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
```

# vim的插件
 这里推荐vundle，安装vundle后，我们的配置前面就多了一些东西
<summary>代码</summary>
```
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
Plugin 'Valloric/YouCompleteMe'
Plugin 'zxqfl/tabnine-vim'
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
```
 这里的Plugin "..."指的是使用啥啥啥插件的意思。

# vim基础操作
 下面我们进入到最核心的地方，vim的快捷操作
## vim 基本移动操作
### 基本跳转
 jkhl分别对应了上下左右
### 字符串跳转
 b是向前跳转一个单词，w是向后跳转一个单词
### 行内跳转
 $跳转到行末,A跳转到行末并输入,0跳转到行首,^跳转到行首非空字符,I跳转到行首非空字符并输入
 f+a跳转到后面的第一个a, F+a跳转到前面第一个a
### 行间跳转
 gg到首行，G到尾行, :100到100行
 H到屏幕顶，M到屏幕中，L到屏幕底
### 屏幕跳转
 zz把当前行变为屏幕正中间。
 <C-y>向上移动一行，<C-e>向下移动一行
 <C-b>向上整个屏幕, <C-f>向下整个屏幕
### 文件跳转
 :bn到缓冲区下一个文件，bp到前一个
 :A .c与.h文件跳转
 :IH 到光标指向文件

## vim 多行操作
用插件会卡，这里我们可以<C-v>, 移动,I,写,ESC 
指令10,20s/^/#/g


### vim 高质量跳转
 % 跳转括号


## vim 高质量组合操作
 c<space> 删除当前字符并插入
 caw  change a word删除当前单词并插入 
```
one
two
three
four
```
渴望变成
```
one,two,three,four
```
先定位到one的o，然后<C-v> 进入列选择，3j将列选择光标移动到four的f,$将光标移动到尾部，A进入插入模式，,添加逗号，Esc作用与所有列，V进入块选择，3j定位到four,J将行合并，结束了。