var createUuid = function createUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};

var xCaSignature = function xCaSignature(uuid) {
    let key = '9znpamsyl2c7cdrr9sas0le9vbc3r6ba'
    let msg = `POST\n*/*\n\napplication/json\n\nx-ca-key:203803574\nx-ca-nonce:${uuid}\n/blog-console-api/v3/mdeditor/saveArticle`
    return CryptoJS.HmacSHA256(msg, key).toString(CryptoJS.enc.Base64)
};


async function createInCsdn(post) {
    if (post === undefined
        || post.title === undefined
        || post.html === undefined
        || post.md === undefined
        || post.tags === undefined) {
        return new Promise((resolve, reject) => {
            resolve({
                code: 400,
                msg: '发布失败'
            })
        });
    }

    var uuid = createUuid();
    var sign = xCaSignature(uuid)
    var body = {
        "title": post.title, // string
        "markdowncontent": post.md,  // 这里是csdn的md文件
        "content": post.html, // 这里是csdnhtml的文件
        "readType": "public",
        "tags": `${post.tags.join(',')}`, // string: [a,b,c]
        "status": 0,
        "categories": "",
        "type": "original",
        "original_link": "",
        "authorized_status": false,
        "not_auto_saved": "1",
        "source": "pc_mdeditor",
        "cover_images": [],
        "cover_type": 0,
        "is_new": 1,
        "vote_id": 0,
        "pubStatus": "publish"
    }
    var responsePromise = await fetch("https://bizapi.csdn.net/blog-console-api/v3/mdeditor/saveArticle", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-ca-key": "203803574",
            "x-ca-nonce": uuid,
            "x-ca-signature": sign,
            "x-ca-signature-headers": "x-ca-key,x-ca-nonce",
            "origin": "https://editor.csdn.net"
        },
        "referrer": "https://editor.csdn.net/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    return responsePromise.json();
}


async function updateInCsdn(post) {
    if (post === undefined
        || post.title === undefined
        || post.html === undefined
        || post.md === undefined
        || post.tags === undefined
        || post.id === undefined) {
        return new Promise((resolve, reject) => {
            resolve({
                code: 400,
                msg: '更新失败'
            })
        });
    }

    var uuid = createUuid();
    var sign = xCaSignature(uuid)
    var body = {
        "id": post.id,
        "title": post.title, // string
        "markdowncontent": post.md,  // 这里是csdn的md文件
        "content": post.html, // 这里是csdnhtml的文件
        "readType": "public",
        "tags": `${post.tags.join(',')}`, // string: [a,b,c]
        "status": 0,
        "categories": "",
        "type": "original",
        "original_link": "",
        "authorized_status": false,
        "not_auto_saved": "1",
        "source": "pc_mdeditor",
        "cover_images": [],
        "cover_type": 0,
        "is_new": 1,
        "vote_id": 0,
        "pubStatus": "publish"
    }
    var responsePromise = await fetch("https://bizapi.csdn.net/blog-console-api/v3/mdeditor/saveArticle", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-ca-key": "203803574",
            "x-ca-nonce": uuid,
            "x-ca-signature": sign,
            "x-ca-signature-headers": "x-ca-key,x-ca-nonce",
            "origin": "https://editor.csdn.net"
        },
        "referrer": "https://editor.csdn.net/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify(body),
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    return responsePromise.json();
}

config.platform.csdn.createBlog = createInCsdn
config.platform.csdn.updateBlog = updateInCsdn



