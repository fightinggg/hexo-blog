/**
 *
 * @copyright fightinggg...
 */


 document.getElementById("fileInput").onchange = async function (e) {
    var files = [...e.target.files];
    console.log("load files: ", files)
    config.files = await createOrLoadIndex(files);
    config.files = config.files.sort((l, r) => {
        return (l.abbrlink < r.abbrlink) ? 1 : -1
    })
    console.log("index: ", config.files)
    showIndex();
}

function createOrLoadIndex(files) {
    for (var i = 0; i < files.length; i++) {
        var split = files[i].webkitRelativePath.split("/");
        if (split.length === 2 && split[1] === "index.json") {
            console.log("load index from index.json")
            return loadIndex(files[i], files);
        }
    }
    console.log("create index to index.json")
    return createIndex(files);
}

async function loadIndex(indexFile, files) {
    const index = await readFileAsync(indexFile)
    const res1 = [...JSON.parse(index)];
    const res2 = await createIndex(files)
    const res = {}
    res2.forEach(o=>{
        res[o.abbrlink] = o
    })
    res1.forEach(o=>{
        res[o.abbrlink] = ({
            ...o,
            ...res[o.abbrlink]
        })
    })
    return Object.values(res)
}

async  function getFileObject(file){
    const raw = await readFileAsync(file)
    const yaml= parseYaml(raw)
    const abbrlink = (new Date(yaml.date).valueOf() / 1000).toString(36).toUpperCase()
    return  ({
        path: file.webkitRelativePath,
        file: file,
        //raw: raw,
        abbrlink: abbrlink,
        //yaml: yaml
    })
}

async function createIndex(files) {
    res = []
    for (var i = 0; i < files.length; i++) {
        if(!files[i].name.endsWith("index.md")){
            continue
        }
        res.push(await getFileObject(files[i]))
    }
    return res; 
}


function showIndex() {
    index = config.files;
    var header = `
        <thead>
            <tr>
                <th>abbrlink</th>
                <th>path</th>
                <th>csdn</th>
                <th>zhihu</th>
                 <th>jianshu</th>
            </tr>
        </thead>
        `;
    var body = index.map(o =>
        `<tr>
            <td>${o.abbrlink}</td>
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
                title: o.file.webkitRelativePath.split("/")[ o.file.webkitRelativePath.split("/").length-2],
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
                showIndex();
                antd.Notification.success({message: "发布成功"})
            } else {
                showIndex();
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
                title: o.file.webkitRelativePath.split("/")[ o.file.webkitRelativePath.split("/").length-2],
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
                showIndex();
                antd.Notification.success({message: "更新成功"})
            } else {
                showIndex();
                antd.Notification.error({message: "更新失败", description: res.msg})
            }
        }
    }
}


document.getElementById("indexOutput").onclick = async function (e) {
    if (config.files === undefined) {
        antd.Notification.success({message: "复制失败"})
        return;
    }
    const data = config.files.filter(o=>Object.keys(o).length!=3);
    console.log(data)
    copy(JSON.stringify(data))
    antd.Notification.success({message: "复制成功"})
}


