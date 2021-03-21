---
date: 2020-04-05 14:37:59
updated: 2021-03-14 15:34:00
mathjax: true
typora-root-url: ..\..
---

# 博客崩溃了
 我很难受，重新开始配置一下，然后我记录一下过程

# 初始化博客
```shell script
hexo init
```
 然后我碰到了第一个问题
```shell script
INFO  Cloning hexo-starter https://github.com/hexojs/hexo-starter.git
Cloning into '/Users/s/Documents/debug'...
remote: Enumerating objects: 30, done.
remote: Counting objects: 100% (30/30), done.
remote: Compressing objects: 100% (24/24), done.
remote: Total 161 (delta 12), reused 12 (delta 4), pack-reused 131
Receiving objects: 100% (161/161), 31.79 KiB | 262.00 KiB/s, done.
Resolving deltas: 100% (74/74), done.
Submodule 'themes/landscape' (https://github.com/hexojs/hexo-theme-landscape.git) registered for path 'themes/landscape'
Cloning into '/Users/s/Documents/debug/themes/landscape'...
remote: Enumerating objects: 1063, done.        
remote: Total 1063 (delta 0), reused 0 (delta 0), pack-reused 1063        
Receiving objects: 100% (1063/1063), 3.21 MiB | 2.87 MiB/s, done.
Resolving deltas: 100% (585/585), done.
Submodule path 'themes/landscape': checked out '73a23c51f8487cfcd7c6deec96ccc7543960d350'
INFO  Install dependencies

> ejs@2.7.4 postinstall /Users/s/Documents/debug/node_modules/ejs
> node ./postinstall.js

Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

npm notice created a lockfile as package-lock.json. You should commit this file.
added 254 packages from 454 contributors and audited 470 packages in 12.565s

5 packages are looking for funding
  run `npm fund` for details

found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
INFO  Start blogging with Hexo!
```
<!--more-->
 修复他
```shell script
npm audit fix
```

# 下载next主题
[github下载地址](https://github.com/iissnan/hexo-theme-next/releases)
![image-20200405143759000](/images/image-20200405143759000.png)
 下载完成以后得到了这个，我们把它放到主题文件夹下
![image-20200405143800000](/images/image-20200405143800000.png)

# 使用next主题
&emsp 修改主配置文件_config.yml
```text
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: landscape
```
 改为
```text
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: hexo-theme-next-5.1.4
```

# 启动hexo
```shell script
hexo s
```
&esmp; 发现了新版本
```shell script
INFO  Start processing
WARN  ===============================================================
WARN  ========================= ATTENTION! ==========================
WARN  ===============================================================
WARN   NexT repository is moving here: https://github.com/theme-next 
WARN  ===============================================================
WARN   It's rebase to v6.0.0 and future maintenance will resume there
WARN  ===============================================================
```
&esmp; [新版本地址](https://github.com/theme-next/hexo-theme-next)

# 下载新版本
```shell script
git clone https://github.com/theme-next/hexo-theme-next themes/next
```
 查看版本,发现是7.8.0
```shell script
cd themes/next
git tag -l
```
同上再次修改主题为next，然后启动，发现启动成功了

# 主配置文件

```shell script
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/


# Site
title: Believe it
subtitle: ''
description: 相信战胜死亡的年轻
keywords:
author: fightinggg
language: zh-CN
timezone: ''

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://yoursite.com
root: /
permalink: :title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: ./
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link:
  enable: true # Open external links in new tab
  field: site # Apply to the whole site
  exclude: ''
filename_case: 0
render_drafts: false
post_asset_folder: false
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false

# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: ''
  per_page: 10
  order_by: -date

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Metadata elements
## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
meta_generator: true

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: YYYY-MM-DD
time_format: HH:mm:ss
## Use post's date for updated date unless set in front-matter
use_date_for_updated: false

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
exclude:
ignore:

# Extensions
- hexo-generator-baidu-sitemap
- hexo-generator-sitemap

baidusitemap:
    path: baidusitemap.xml
sitemap:
    path: sitemap.xml
baidu_url_submit:
  count: 10 ## 比如3，代表提交最新的三个链接
  host: https://fightinggg.github.io ## 在百度站长平台中注册的域名
  token: your_token ## 请注意这是您的秘钥， 请不要发布在公众仓库里!
  path: baidu_urls.txt ## 文本文档的地址， 新链接会保存在此文本文档里
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: next

# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: 
    coding: git@git.dev.tencent.com:fightinggg/fightinggg.git
    github: git@github.com:fightinggg/fightinggg.github.io.git
  branch: master
```

# 修改主题配置文件
## 切换风格
```shell script
# Schemes
#scheme: Muse
#scheme: Mist
scheme: Pisces
#scheme: Gemini
```
## 打开侧边栏
```shell script
menu:
  home: / || fa fa-home
  about: /about/ || fa fa-user
  tags: /tags/ || fa fa-tags
  categories: /categories/ || fa fa-th
  archives: /archives/ || fa fa-archive
  schedule: /schedule/ || fa fa-calendar
  sitemap: /sitemap.xml || fa fa-sitemap
  commonweal: /404/ || fa fa-heartbeat
```

## 数学公式
 打开数学公式
```shell script
math:
  # Default (true) will load mathjax / katex script on demand.
  # That is it only render those page which has `mathjax: true` in Front-matter.
  # If you set it to false, it will load mathjax / katex srcipt EVERY PAGE.
  per_page: true

  # hexo-renderer-pandoc (or hexo-renderer-kramed) required for full MathJax support.
  mathjax:
    enable: true
    # See: https://mhchem.github.io/MathJax-mhchem/
    mhchem: false

  # hexo-renderer-markdown-it-plus (or hexo-renderer-markdown-it with markdown-it-katex plugin) required for full Katex support.
  katex:
    enable: false
    # See: https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex
    copy_tex: false
```
 切换数学公式引擎
```shell script
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save
```
 碰到未知问题，修复他npm audit fix
```shell script
audited 449 packages in 2.108s

5 packages are looking for funding
  run `npm fund` for details

found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
```

 解决正则表达式的冲突 /node_modules/kramed/lib/rules/inline.js 
```js
var inline = {
  escape: /^\\([`*\[\]()#$+\-.!_>])/, 
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  html: /^<!--[\s\S]*?-->|^<(\w+(?!:\/|[^\w\s@]*@)\b)*?(?:"[^"]*"|'[^']*'|[^'">])*?>([\s\S]*?)?<\/\1>|^<(\w+(?!:\/|[^\w\s@]*@)\b)(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  reffn: /^!?\[\^(inside)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\*((?:\*\*|[\s\S])+?)\*(?!\*)/, 
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`$]| {2,}\n|$)/,
  math: /^\$\$\s*([\s\S]*?[^\$])\s*\$\$(?!\$)/,
};
```

# 安装mermaid
```shell script
npm install hexo-filter-mermaid-diagrams
```
 出错了，修复
```shell script
+ hexo-filter-mermaid-diagrams@1.0.5
added 3 packages from 2 contributors and audited 472 packages in 46.646s

5 packages are looking for funding
  run `npm fund` for details

found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
```
 然后在next的配置文件中打开mermaid
```shell script
# Mermaid tag
mermaid:
  enable: true
  # Available themes: default | dark | forest | neutral
  theme: forest
```

# 评论
 去填充appid和appkey
```shell script
# Valine
# You can get your appid and appkey from https://leancloud.cn
# For more information: https://valine.js.org, https://github.com/xCss/Valine
valine:
  enable: true # When enable is set to be true, leancloud_visitors is recommended to be closed for the re-initialization problem within different leancloud adk version
  appid: ???
  appkey: ???
  notify: false # Mail notifier. See: https://github.com/xCss/Valine/wiki
  verify: false # Verification code
  placeholder: Just go go # Comment box placeholder
  avatar: mm # Gravatar style
  guest_info: nick,mail,link # Custom comment header
  pageSize: 10 # Pagination size
  language: # Language, available values: en, zh-cn
  visitor: true # leancloud-counter-security is not supported for now. When visitor is set to be true, appid and appkey are recommended to be the same as leancloud_visitors' for counter compatibility. Article reading statistic https://valine.js.org/visitor.html
  comment_count: true # If false, comment count will only be displayed in post page, not in home page
  recordIP: false # Whether to record the commenter IP
  serverURLs: # When the custom domain name is enabled, fill it in here (it will be detected automatically by default, no need to fill in)
  #post_meta_order: 0
```

# 字数和时长
```shell script
npm install hexo-symbols-count-time --save
```
 在主题配置文件中加入
```shell script
# Post wordcount display settings
# Dependencies: https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:
  separated_meta: true     # 是否另起一行（true的话不和发表时间等同一行）
  item_text_post: true     # 首页文章统计数量前是否显示文字描述（本文字数、阅读时长）
  item_text_total: false   # 页面底部统计数量前是否显示文字描述（站点总字数、站点阅读时长）
  awl: 4                   # Average Word Length
  wpm: 275                 # Words Per Minute（每分钟阅读词数）
  suffix: mins.
```

# 唯一链接
```shell script
npm install hexo-abbrlink --save
```
 修改主配置文件
```shell script
permalink: :abbrlink/
```

# 网站运行时间
 /themes/next/layout/_partials/footer.swig 
```shell script
<span id="timeDate">载入天数...</span><span id="times">载入时分秒...</span>
<script>
    var now = new Date(); 
    function createtime() { 
        var grt= new Date("08/06/2019 00:00:00");//在此处修改你的建站时间，格式：月/日/年 时:分:秒
        now.setTime(now.getTime()+250); 
        days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days); 
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours); 
        if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum); 
        mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;} 
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum); 
        snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;} 
        document.getElementById("timeDate").innerHTML = "本站已安全运行 "+dnum+" 天 "; 
        document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒"; 
    } 
setInterval("createtime()",250);
</script>
```


# fork me
 放到themes/next/layout/_layout.swig的headband下面
```shell script
<a href="https://github.com/fightinggg" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: ab    solute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7     120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class=    "octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0     C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0     205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentCol    or" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rota    te(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>  
```

# 百度站点地图
```shell script
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```

# enhancder
 这个插件完美的避开了date、title、categories、tags、abbrlink
 date、title就是文件名
 categories就是文目录
 abbrlink是文件名的crc加密
 tags是主题词分析
 [中文博客](https://sulin.me/2019/Z726F8.html)
```sh
npm uninstall hexo-abbrlink --save
npm install hexo-enhancder --save
```
 安装完成后会碰到一些小问题，其实只需要修改这里即可hexo/node_modules/hexo-enhancer/index.js
```js
if (metadata.title) {
data.title = metadata.title;
log.i("Generate title [%s] for post [%s]", metadata.title, data.source);
}
```

# 404.html
 在目录/hexo/source下创建404.md,随便东西你就可以使用了

# 本地搜索
```
npm install hexo-generator-searchdb --save
```
 然后配置全局config
```
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
```
 最后修改next的主题配置
```
local_search: true
```

# 友链搭建
[参考](https://www.jianshu.com/p/ef110f36650b)
`hexo new page links`
修改主题配置`links: /links/ || fa fa-link`
增加themes/next/languages/zh-Hans.yml ` links: 友链`
增加文件themes/next/layout/links.swig
```swig

{% block content %}
  {######################}
  {### LINKS BLOCK ###}
  {######################}

    <div id="links">
        <style>

            #links{
               margin-top: 5rem;
            }

            .links-content{
                margin-top:1rem;
            }

            .link-navigation::after {
                content: " ";
                display: block;
                clear: both;
            }

            .card {
                width: 300px;
                font-size: 1rem;
                padding: 10px 20px;
                border-radius: 4px;
                transition-duration: 0.15s;
                margin-bottom: 1rem;
                display:flex;
            }
            .card:nth-child(odd) {
                float: left;
            }
            .card:nth-child(even) {
                float: right;
            }
            .card:hover {
                transform: scale(1.1);
                box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
            }
            .card a {
                border:none;
            }
            .card .ava {
                width: 3rem!important;
                height: 3rem!important;
                margin:0!important;
                margin-right: 1em!important;
                border-radius:4px;

            }
            .card .card-header {
                font-style: italic;
                overflow: hidden;
                width: 236px;
            }
            .card .card-header a {
                font-style: normal;
                color: #2bbc8a;
                font-weight: bold;
                text-decoration: none;
            }
            .card .card-header a:hover {
                color: #d480aa;
                text-decoration: none;
            }
            .card .card-header .info {
                font-style:normal;
                color:#a3a3a3;
                font-size:14px;
                min-width: 0;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        </style>
        <div class="links-content">
            <div class="link-navigation">

                {% for link in theme.mylinks %}

                    <div class="card">
                        <img class="ava" src="{{ link.avatar }}"/>
                        <div class="card-header">
                        <div><a href="{{ link.site }}" target="_blank">@ {{ link.nickname }}</a></div>
                        <div class="info">{{ link.info }}</div>
                        </div>
                    </div>

                {% endfor %}

            </div>
            {{ page.content }}
            </div>
        </div>

  {##########################}
  {### END LINKS BLOCK ###}
  {##########################}
{% endblock %}
```
修改themes/next/layout/page.swig, 改了两个地方
```swig
{% extends '_layout.swig' %}
{% import '_macro/sidebar.swig' as sidebar_template with context %}

{% block title %}
  {%- set page_title_suffix = ' | ' + title %}

  {%- if page.type === 'categories' and not page.title %}
    {{- __('title.category') + page_title_suffix }}
  {%- elif page.type === 'tags' and not page.title %}
    {{- __('title.tag') + page_title_suffix }}
  {%- elif page.type === 'links' and not page.title %}
    {{- __('title.links') + page_title_suffix }}
  {%- elif page.type === 'schedule' and not page.title %}
    {{- __('title.schedule') + page_title_suffix }}
  {%- else %}
    {{- page.title + page_title_suffix }}
  {%- endif %}
{% endblock %}

{% block class %}page posts-expand{% endblock %}

{% block content %}

    {##################}
    {### PAGE BLOCK ###}
    {##################}
    <div class="post-block" lang="{{ page.lang or config.language }}">
      {% include '_partials/page/page-header.swig' %}
      {#################}
      {### PAGE BODY ###}
      {#################}
      <div class="post-body{%- if page.direction and page.direction.toLowerCase() === 'rtl' %} rtl{%- endif %}">
        {%- if page.type === 'tags' %}
          <div class="tag-cloud">
            <div class="tag-cloud-title">
              {{ _p('counter.tag_cloud', site.tags.length) }}
            </div>
            <div class="tag-cloud-tags">
              {{ tagcloud({
                min_font   : theme.tagcloud.min,
                max_font   : theme.tagcloud.max,
                amount     : theme.tagcloud.amount,
                color      : true,
                start_color: theme.tagcloud.start,
                end_color  : theme.tagcloud.end})
              }}
            </div>
          </div>
        {% elif page.type === 'categories' %}
          <div class="category-all-page">
            <div class="category-all-title">
              {{ _p('counter.categories', site.categories.length) }}
            </div>
            <div class="category-all">
              {{ list_categories() }}
            </div>
          </div>
        {% elif page.type === 'schedule' %}
          <div class="event-list">
          </div>
          {% include '_scripts/pages/schedule.swig' %}
        {% elif page.type === 'links' %}
          {% include 'links.swig' %}
        {% else %}
          {{ page.content }}
        {%- endif %}
      </div>
      {#####################}
      {### END PAGE BODY ###}
      {#####################}
    </div>
    {% include '_partials/page/breadcrumb.swig' %}
    {######################}
    {### END PAGE BLOCK ###}
    {######################}

{% endblock %}

{% block sidebar %}
  {{ sidebar_template.render(true) }}
{% endblock %}

```
添加主题配置文件
```yml
mylinks:
  - nickname: Fi9Coder  #友链名称
    avatar: https://www.safeinfo.me/images/avatar.gif  #友链头像
    site: https://www.safeinfo.me  #友链地址
    info: 致力于Web安全与Python学习,研究,开发。  #友链说明
  - nickname: Leaf's Blog
    avatar: https://leafjame.github.io/images/beichen.png
    site: https://leafjame.github.io
    info: Java狮 北漂男 摄影 旅行 赚钱
```



# 增加站点访问量

next主题配置文件中，注意到数字可能很大，但是不用担心，deploy之后就正常了

```yml
busuanzi_count:
  enable: ture
  total_visitors: true
  total_visitors_icon: fa fa-user
  total_views: true
  total_views_icon: fa fa-eye
  post_views: true
  post_views_icon: fa fa-eye
```

![image-20210314153159462](/images/image-20210314153159462.png)



# 版权申明

next主题配置文件中

```yml
creative_commons:
  license: by-nc-sa
  sidebar: false
  post: true
  language: zh-CN
```

![image-20210314153108100](/images/image-20210314153108100.png)



# 图片点击放大

修改配置文件

```yml
# FancyBox is a tool that offers a nice and elegant way to add zooming functionality for images.
# For more information: https://fancyapps.com/fancybox
fancybox: true
```



# 给文章增加结束语

新增文件 themes/next/layout/_macro/passage-end-tag.swig

```swig
<div>
    <div>
        {% if not is_index %}
        <div style="text-align:center;color: #ccc;font-size:14px;">-----------------------<span style="margin: 0 10px;">本文结束</span><i class="fa fa-paw"></i><span style="margin: 0 10px;">感谢您的阅读</span>-----------------------</div>
        {% endif %}
    </div>
</div>
```

修改themes/next/layout/_macro/post.swig

![image-20210314160247164](/images/image-20210314160247164.png)

增加主题配置文件配置项

```yml
passage_end_tag: 
  enabled: true
```



![image-20210314160407308](/images/image-20210314160407308.png)



效果

![image-20210314160604068](/images/image-20210314160604068.png)



# 热度榜单

```sh
hexo n page hot
```

*注意修改appid和appkey*

```js
<div id="hot"></div>
<div id="barcon" name="barcon"></div>


<script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script>
<script>AV.initialize("T7JBt0YPfeKdVQ0KPjrICOOm-gzGzoHsz", "oMcE8X0UKAVaDtK51UA1LuGL");</script>
<script type="text/javascript">

var rankList;
var pageSize = 10;
var currentPage = 1;
var totalPage;


new AV.Query('Counter').descending('time').limit(1000).find().then(o => {
    rankList = o;
    totalPage = Math.ceil(rankList.length / pageSize);//总页数
    goPage(currentPage, pageSize)
})

function prePage() {
    currentPage--;
    if (currentPage == 0) {
        currentPage = 1;
    }
    goPage(currentPage, pageSize)
}


function nextPage() {
    currentPage++;
    if (currentPage == totalPage + 1) {
        currentPage = totalPage;
    }
    goPage(currentPage, pageSize)
}

function goPage(page, pageSize) {
    currentPage = page;
    document.getElementById("hot").innerHTML = ""
    for (var i = 0; i < pageSize; i++) {
        var index = (currentPage - 1) * pageSize + i + 1
        if (index - 1 >= rankList.length) {
            break;
        }
        var result = rankList[index - 1].attributes;
        var time = result.time;
        var title = result.title;
        var url = result.url;
        var content = "<p>" + "<font color='#1C1C1C'>" + index + ".【文章热度:" + time + "℃】" + "</font>" + "<a href='" + url + "'>" + title + "</a>" + "</p>";
        document.getElementById("hot").innerHTML += content
    }
    showButton();
}

function doubleWord(x) {
    if (x < 10) {
        return "0" + x;
    } else {
        return x;
    }
}

function showButton() {//当前页数
    var tempStr = "";
    tempStr += "<a href=\"#\" onClick=\"prePage()\">⬅️</a>&emsp;&emsp;&emsp;"
    var beg = Math.max(1, currentPage - 5);
    while (beg > 1 && beg + pageSize - 1 > totalPage) {
        beg--;
    }
    for (var j = 1; j <= pageSize && beg <= totalPage; j++, beg++) {
        if (beg == currentPage) {
            tempStr += "<a href=\"#\" onClick=\"goPage(" + beg + "," + pageSize + ")\"><span style='color:red;'>" + doubleWord(beg) + "</span></a>" + "&emsp;"
        } else {
            tempStr += "<a href=\"#\" onClick=\"goPage(" + beg + "," + pageSize + ")\">" + doubleWord(beg) + "</a>" + "&emsp;"
        }
    }
    tempStr += "&emsp;&emsp;<a href=\"#\" onClick=\"nextPage()\">➡️</a>";
    document.getElementById("barcon").innerHTML = tempStr;
}
</script>
```

主题配置文件修改

```yml
hot: /hot/ || fa fa-signal
```

![image-20210314162656483](/images/image-20210314162656483.png)



增加中文**hexo/theme/next/languages/zh-Cn.yml**

![image-20210314162816972](/images/image-20210314162816972.png)