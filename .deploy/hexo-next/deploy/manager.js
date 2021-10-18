/**
 *
 * @copyright fightinggg...
 */


document.getElementById("fileInput").onchange = async function (e) {
    var files = [...e.target.files];
    console.log("load files: ", files)
    let index = await createOrLoadIndex(files);
    index = index.filter(o => o.path.endsWith(".md"))
    index = index.sort((l, r) => r.file.lastModified - l.file.lastModified)
    console.log("index: ", index)
    showIndex(index);
}

function createOrLoadIndex(files) {
    for (var i = 0; i < files.length; i++) {
        var split = files[i].webkitRelativePath.split("/");
        if (split.length === 2 && split[1] === "index.json") {
            return loadIndex(files[i], files);
        }
    }
    return createIndex(files);
}

async function loadIndex(indexFile, files) {
    console.log("load index from index.json")
    const index = await readFileAsync(indexFile)
    const res = [...JSON.parse(index)];
    const allFiles = {}
    files.forEach(o => allFiles[o.webkitRelativePath] = o)
    res.forEach(o => {
        o.file = allFiles[o.path];
        delete allFiles[o.path]
    });
    Object.keys(allFiles).forEach(o => {
        res.push({
            path: allFiles[o].webkitRelativePath,
            file: allFiles[o],
        })
    })
    return config.files = res.filter(o => o.file !== undefined);
}

function createIndex(files) {
    console.log("create index to index.json")
    return config.files = files.map(o => ({
        path: o.webkitRelativePath,
        file: o
    }));
}


function showIndex(index) {
    var header = `
        <thead>
            <tr>
                <th>path</th>
                <th>csdn</th>
                <th>zhihu</th>
                 <th>jianshu</th>
            </tr>
        </thead>
        `;
    var body = index.map(o =>
        `<tr>
            <td>${o.path}</td>
            <td>${getButtonHtml('csdn', o)}</td>
            <td>${getButtonHtml('zhihu', o)}</td>
            <td>${getButtonHtml('jianshu', o)}</td>
         </tr>
        `);
    document.getElementById("indexTable").innerHTML = header + body.join('');

    index.forEach(o => {
            setButtonCreateHtml('csdn', o)
            setButtonCreateHtml('zhihu', o)
            setButtonCreateHtml('jianshu', o)
            setButtonUpdateHtml('csdn', o)
            setButtonUpdateHtml('zhihu', o)
            setButtonUpdateHtml('jianshu', o)
        }
    );
}


function getLoadButton(platform, o) {
    return `<button>
                    <a href="${o[platform].url}" target="_blank" >${config.platform[platform].logo}</a>
                </button>
                <button id="${o.path} ${platform} sync">
                    ${config.sync}
                </button>`
}

function getButtonHtml(platform, o) {
    if (o[platform] === undefined) {
        return `<button id="${o.path} ${platform}">${config.platform[platform].disableLogo}</button>
                <span >${config.disableSync}</span>
`
    } else {
        return getLoadButton(platform, o);
    }
}

async function setButtonCreateHtml(platform, o) {
    if (o[platform] === undefined) {
        var htmlId = `${o.path} ${platform}`
        document.getElementById(htmlId).onclick = async function () {
            const context = blogPrework(await readFileAsync(o.file));
            const postData = {
                title: o.file.name.substring(0, o.file.name.length - 3),
                html: `<div>${new showdown.Converter().makeHtml(context)}</div>`,
                md: context,
                tags: ['default'],
            }
            console.log("prepare to post", postData)
            const res = await config.platform[platform].createBlog(postData)
            if (res.code === 200) {
                o[platform] = {
                    id: res.data.id,
                    url: res.data.url,
                    md5: SparkMD5.hashBinary(context)
                }
                document.getElementById(htmlId).innerHTML = getLoadButton(platform, o);
                antd.Notification.success({message: "发布成功"})
            } else {
                antd.Notification.error({message: "发布失败", description: res.msg})
            }
        }
    }
}

async function setButtonUpdateHtml(platform, o) {
    if (o[platform] !== undefined) {
        var htmlId = `${o.path} ${platform} sync`
        document.getElementById(htmlId).onclick = async function () {
            const context = blogPrework(await readFileAsync(o.file));
            const postData = {
                id: o[platform].id,
                title: o.file.name.substring(0, o.file.name.length - 3),
                html: `<div>${new showdown.Converter().makeHtml(context)}</div>`,
                md: context,
                tags: ['default'],
            }
            console.log("prepare to post", postData)
            const res = await config.platform[platform].updateBlog(postData)
            if (res.code === 200) {
                o[platform] = {
                    id: res.data.id,
                    url: res.data.url,
                    md5: SparkMD5.hashBinary(context)
                }
                document.getElementById(htmlId).innerHTML = `<button id="${o.path} ${platform} sync">
                    ${config.sync}
                </button>`;
                antd.Notification.success({message: "更新成功"})
            } else {
                antd.Notification.error({message: "更新失败", description: res.msg})
            }
        }
    }
}


document.getElementById("indexOutput").onclick = async function (e) {
    if (config.files === undefined) {
        alert("没有数据下载")
        return;
    }
    const eleLink = document.createElement('a');
    eleLink.download = 'index.json';
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    console.log("export ", config.files)
    const blob = new Blob([JSON.stringify(config.files)]);
    eleLink.href = URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
}


