---
layout: page
title: 热度排行
date: 2021-03-14 14:58:10
updated:  2021-03-14 14:58:10
commens: false
---

<div id="hot"></div>
<div id="barcon" name="barcon"></div>
<div id="comment"></div>


<script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script>
<script>
AV.initialize("T7JBt0YPfeKdVQ0KPjrICOOm-gzGzoHsz", "oMcE8X0UKAVaDtK51UA1LuGL");
</script>
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
        var content = "<p>" + "<font color='var(--text-color)'>" + index + ".【文章热度:" + time + "℃】" + "</font>" + "<a href='" + url + "'>" + title + "</a>" + "</p>";
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
    tempStr += "<a href=\"#\" onClick=\"prePage()\">⬅️</a>&emsp;"
    var beg = Math.max(1, currentPage - 5);
    while (beg > 1 && beg + pageSize - 1 > totalPage) {
        beg--;
    }
    for (var j = 1; j <= pageSize && beg <= totalPage; j++, beg++) {
        if (beg == currentPage) {
            tempStr += "<a href=\"#\" onClick=\"goPage(" + beg + "," + pageSize + ")\"><span style='color:var(--text-color);'>" + doubleWord(beg) + "</span></a>" + "&emsp;"
        } else {
            tempStr += "<a href=\"#\" onClick=\"goPage(" + beg + "," + pageSize + ")\">" + doubleWord(beg) + "</a>" + "&emsp;"
        }
    }
    tempStr += "<a href=\"#\" onClick=\"nextPage()\">➡️</a>";
    document.getElementById("barcon").innerHTML = tempStr;
}
</script>
<script type="text/javascript">
new AV.Query('Comment').descending('createdAt').limit(10).find().then(o => {
    html = "<h1 class='post-title' itemprop='name headline'>最近评论</h1>"
    o.forEach(item => {
        comment = item.attributes.comment
        url = item.attributes.url
        var content = `<div><a href='${url}' color='var(--link-color)'>${url}</a><div color='var(--text-color)' style='margin-left: 10%'>${comment}</div></div>\n`
        html += content
    });
    document.getElementById('comment').innerHTML = html
})
</script>
