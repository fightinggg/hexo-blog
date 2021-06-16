# author: polin
# author: fightinggg
# author: hellowang

import os
import re
import yaml


# data

sourceDir = "source"
public = "my-app/public/react-style/"
tags = ['C++', 'Boost', 'STL', 'Java', 'Spring', 'SpringBoot', 'SpringMVC', 'SpringCloud',
        'Maven', 'JVM', 'MyBatis', 'JPA', 'Python', '爬虫', '大数据', '并发', '集群', '分布式', 'Hadoop',
        'Zookeeper', 'Kafka', 'SQL', '数据库', 'redis', 'codeforces', 'hdu', 'bzoj', 'uoj', '牛客',
        '数据结构', '线段树', '主席树', '平衡树', '字典树', '前缀树', 'tree', 'heap', 'trie', '算法',
        'hash', '二分', '倍增', '数学', '字符串', '自动机', 'dp', 'euler', 'datastructure', 'dsu', '图论',
        '最短路', '最小生成树', '生成树', '最大团', '最大独立集', '字符串', 'KMP', 'Manacher', '后缀数组',
        '字符串Hash', '后缀自动机', '回文树', '位运算', 'xor', '区间', '区间问题', '线性基', '计算几何',
        'Stern', 'Brocot', 'linux', 'git', 'vim', 'hexo', 'kernel', 'LDA', 'kernel', 'functions',
        'k子段和', 'k短路', 'lct', 'lis', 'machine', 'learning', 'math', 'mathematics', 'matrix',
        'metric_space', 'min25筛', 'myself_library', 'mysql', 'pollard', 'rho', 'supervised',
        'learning', '两分数间分母最小的分数', '中国剩余定理', '二分图匹配', '二次剩余', '凸壳', '分数二分',
        '前缀线性基', '后缀自动机', '启发式查询', '图连通性', '序列自动机', '操作系统', '支配树', '数据结构',
        '数论', '斐波那契', '斜率', '最大流最小割', '最小字典序', '最小表示法', '最短路', '有向图判环', '期望',
        '期望复杂度', '杜教筛', '构造', '树链剖分', '欧几里得算法', '珂朵莉树', '生成树', '积性函数', '笛卡尔树',
        '等比数列', '算法复杂度分析', '类欧几里得算法', '素数', '虚树', '计算机网络', '记忆化', '设计模式',
        '费用流', '软件测试', '软件需求', '霍尔定理', '实习', '腾讯', '阿里', '字节', '网易', '美团']


def buildMetaList(obj: dict):
    res = ""
    for key in obj.keys():
        template = """
        <meta name="{key}" content="{value}">"""
        res = res + template.format(key=key, value=obj[key])
    return res

devScript = """
        <script src="/static/js/bundle.js"></script>
        <script src="/static/js/vendors~main.chunk.js"></script>
        <script src="/static/js/main.chunk.js"></script>
"""

prodScript = """
        <script>!function (e) { function r(r) { for (var n, a, i = r[0], c = r[1], l = r[2], f = 0, s = []; f < i.length; f++)a = i[f], Object.prototype.hasOwnProperty.call(o, a) && o[a] && s.push(o[a][0]), o[a] = 0; for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]); for (p && p(r); s.length;)s.shift()(); return u.push.apply(u, l || []), t() } function t() { for (var e, r = 0; r < u.length; r++) { for (var t = u[r], n = !0, i = 1; i < t.length; i++) { var c = t[i]; 0 !== o[c] && (n = !1) } n && (u.splice(r--, 1), e = a(a.s = t[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function a(r) { if (n[r]) return n[r].exports; var t = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(t.exports, t, t.exports, a), t.l = !0, t.exports } a.e = function (e) { var r = [], t = o[e]; if (0 !== t) if (t) r.push(t[2]); else { var n = new Promise((function (r, n) { t = o[e] = [r, n] })); r.push(t[2] = n); var u, i = document.createElement("script"); i.charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.src = function (e) { return a.p + "static/js/" + ({}[e] || e) + "." + { 3: "aa1bd996" }[e] + ".chunk.js" }(e); var c = new Error; u = function (r) { i.onerror = i.onload = null, clearTimeout(l); var t = o[e]; if (0 !== t) { if (t) { var n = r && ("load" === r.type ? "missing" : r.type), u = r && r.target && r.target.src; c.message = "Loading chunk " + e + " failed.\\n(" + n + ": " + u + ")", c.name = "ChunkLoadError", c.type = n, c.request = u, t[1](c) } o[e] = void 0 } }; var l = setTimeout((function () { u({ type: "timeout", target: i }) }), 12e4); i.onerror = i.onload = u, document.head.appendChild(i) } return Promise.all(r) }, a.m = e, a.c = n, a.d = function (e, r, t) { a.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t }) }, a.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, a.t = function (e, r) { if (1 & r && (e = a(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var t = Object.create(null); if (a.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e) for (var n in e) a.d(t, n, function (r) { return e[r] }.bind(null, n)); return t }, a.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return a.d(r, "a", r), r }, a.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }, a.p = "/", a.oe = function (e) { throw console.error(e), e }; var i = this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || [], c = i.push.bind(i); i.push = r, i = i.slice(); for (var l = 0; l < i.length; l++)r(i[l]); var p = c; t() }([])</script>
        <script src="/static/js/2.0817fd77.chunk.js"></script>
        <script src="/static/js/main.eb30630d.chunk.js"></script>
"""

def buildHtml(title, meta, markdownRaw):
    html = """
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <title>{title}</title>
        {meta}
        
        <script src="https://unpkg.com/mermaid@8.10.2/dist/mermaid.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.0.6/markdown-it.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.0/build/highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlightjs-line-numbers.js/2.8.0/highlightjs-line-numbers.min.js"></script>

        <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.2/antd.min.js" integrity="sha512-7WBiAfyuDABD2IBD+kzf/R6gOVTSanXi5VTlY6P23wqjQVM7bfVohsOx8/6Wy8iQVmfh6hzQWsXDYNvM5i6tag==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-markdown/4.3.1/react-markdown.js" integrity="sha512-uVjoOKL4IHlUC7gc0LuPfhTqvJBi37Uff7EC3s4tXAZp0rgskDv40jgOIvv3ImoPFZyCwUtsQ4VQ1SRXKHyrXQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/SyntaxHighlighter/3.0.83/scripts/shCore.min.js" integrity="sha512-Z5dAQyvO8EyY1cHQcqYTYL8z6PDjM0URql6AioNodsSxxTJS5Fqfujr+o/4ye2dLp0he1qAVTiZABTunv6oLow==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.2/antd.min.css" integrity="sha512-TErmYgNyUY3aXRo4uaLyCVwXhjABbNDgZ7rUuXnTQwEcMnWh83h+fgwKuBDaDGVfCk1d/tbN5a1g/lDCZPkKew==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" title="highlightstyle" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/default.min.css">

    </head>
    <body>
        <raw >
            <div id="hint"><center><h1>博客渲染中</h1><h1>您现在能查看源代码</h1><center></div>
            <xmp id="raw">{markdownRaw}</xmp>
        </raw>
        <div id="root">
        </div>
    {prodScript}
    </body>
</html>
"""
    return html.format(title=title, meta=buildMetaList(meta), markdownRaw=markdownRaw,prodScript=prodScript)


# 进制转化


def converting(source_num, source_hex, target_hex):
    # （2， 36）之间的进制转换
    if source_hex > 36 or source_hex < 2:
        return '2 <= source_hex <= 36'
    if target_hex > 36 or target_hex < 2:
        return '2 <= target_hex <= 36'
    str_36 = '0123456789abcdefghijklmnopqrstuvwxyz'
    dict_36 = {}
    for i in range(len(str_36)):
        dict_36[str_36[i]] = i
    str_b = str_36[:target_hex]
    result = ''
    source_str = str(source_num).lower()
    decimal_num = 0
    for i in range(len(source_str)):
        decimal_num += dict_36[source_str[-i-1]] * (source_hex ** i)
    quotient_int = decimal_num
    while quotient_int:
        remainder = quotient_int % target_hex
        quotient_int = quotient_int // target_hex
        result = str_b[remainder] + result
        if quotient_int and quotient_int < target_hex:
            result = str_b[quotient_int] + result
            break
    return result


def countWord(txt):
    size = 0
    for s in txt:
        if '\u4e00' <= s <= '\u9fff':
            size = size+1
    return size


# 枚举所有的文件
mdSrc = []
postSrc = []
binSrc = []

for root, dirs, files in os.walk(sourceDir):
    for file in files:
        if file.startswith(".") or root.startswith("."):
            pass
        elif file.endswith(".md"):  # 如果是markdown文件
            with open(root+"/"+file) as f:
                raw = f.read()
                yamlFront = re.match("^---\n([\s\S]*?)---\n", raw)
                if yamlFront:
                    properties = raw[4:yamlFront.end(0)-4]
                    properties = yaml.safe_load(properties)
                    # 需要密码的blog
                    if properties.get('password') != None:
                        print("private blog: "+root+"/"+file)
                        continue

                    context = raw[yamlFront.end(0):]
                else:
                    properties = {}
                    context = raw
                mdType = properties.get('type')
                mdType = mdType if mdType != None else "md"
                mdType = str(mdType)

                if(mdType == "md"):
                    date = properties.get('date')
                    if(date == None):
                        print("counld find date properties in file", root, file)
                    update = properties.get('updated')
                    abbrlink = file if date == None else converting(
                        int(date.timestamp()), 10, 36).upper()
                    targetFilePath = public
                    targetFileName = abbrlink+".html"
                    postSrc.append({
                        "type": mdType,
                        "title": file[:-3],
                        "dirPath": root,
                        "fileName": file,
                        "date": date,
                        "update": update,
                        "abbrlink": abbrlink,
                        "targetFilePath": targetFilePath,
                        "targetFileName": targetFileName,
                        "meta": properties,
                        "data": context
                    })
                else:
                    targetFilePath = public
                    targetFileName = mdType+".html"
                    mdSrc.append({
                        "type": mdType,
                        "title": file[:-3],
                        "dirPath": root,
                        "fileName": file,
                        "targetFilePath": targetFilePath,
                        "targetFileName": targetFileName,
                        "meta": {},
                        "data": context
                    })
        else:
            with open(root+"/"+file, "rb") as f:
                raw = f.read()
                publcRoot = public+"/"+root[6:]
                targetFilePath = publcRoot
                targetFileName = file
                binSrc.append({
                    "type": "bin",
                    "dirPath": root,
                    "fileName": file,
                    "targetFilePath": targetFilePath,
                    "targetFileName": targetFileName,

                    "data": raw
                })


postSrc.sort(key=lambda x: x.get('date'))


# 第一次预处理
for index in range(len(postSrc)):
    item = postSrc[index]
    if(index != 0):
        item['meta']['pre-blog'] = "/react-style/"+postSrc[index-1]['abbrlink']+".html"
    if(index+1 != len(postSrc)):
        item['meta']['next-blog'] = "/react-style/"+postSrc[index+1]['abbrlink']+".html"

    itemTags = []

    for tag in tags:
        if item['dirPath'].find(tag) != -1 or item['fileName'].find(tag) != -1 or item['data'].find(tag) != -1:
            itemTags.append(tag)

    item['meta']['keywords'] = ",".join(itemTags)
    count = countWord(item['data'])
    item['word-count-raw'] = count
    item['meta']['word-count'] = str(round(count / 1000, 2)) + "k"
    item['meta']['reading-time'] = str(round(count / 300, 2)) + "min"
    item['meta']['date'] = str(item['meta']['date'])[:10]
    item['meta']['updated'] = str(item['meta']['updated'])[:10]
    item['meta']['abbrlink'] = item['abbrlink']

    # data = item['data']
    # item['data'] = ''
    # print(index, item)
    # item['data'] = data

# 合并处理
allCount = 0
for index in range(len(postSrc)):
    item = postSrc[index]
    allCount = allCount + item['word-count-raw']


# 第二次处理
for index in range(len(postSrc)):
    item = postSrc[index]
    item['meta']['all-word-count'] = str(round(allCount / 1000, 2)) + "k"
    item['meta']['all-reading-time'] = str(round(allCount / 300, 2)) + "min"


for item in (postSrc+mdSrc+binSrc):

    if(item['type'] == "md"):
        if not os.path.exists(item['targetFilePath']):
            os.mkdir(item['targetFilePath'])
        with open(item['targetFilePath']+"/"+item['targetFileName'], "w") as f:
            f.write(buildHtml(title=item['title'], meta=item['meta'], markdownRaw=item['data']))
    # else:
    #     with open(item['targetFilePath']+"/"+item['targetFileName'], "wb") as f:
    #         f.write(item['data'])
