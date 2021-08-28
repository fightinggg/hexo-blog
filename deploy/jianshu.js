async function createInJianshu(post) {
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

    var responsePromise = await fetch("https://www.jianshu.com/author/notes", {
        "headers": {
            "accept": "application/json",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://www.jianshu.com/writer",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"notebook_id\":\"45288457\",\"title\":\"2021-08-28\",\"at_bottom\":true}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    const id = (await responsePromise.json()).id;
    const times = 1;


    responsePromise = await fetch(`https://www.jianshu.com/author/notes/${id}`, {
        "headers": {
            "accept": "application/json",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://www.jianshu.com/writer",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify({
            "id": id,
            "autosave_control": times,
            "title": post.title,
            "content": post.md
        }),
        "method": "PUT",
        "mode": "cors",
        "credentials": "include"
    });
    const result = await responsePromise.json();

    responsePromise = await fetch(`https://www.jianshu.com/author/notes/${id}/publicize`, {
        "headers": {
            "accept": "application/json",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://www.jianshu.com/writer",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    const deploy = await responsePromise.json();

    if (deploy.error !== null) {
        return {
            code: deploy.error[0].code,
            msg: deploy.error[0].message,
        }
    }

    return {
        code: 200,
        data: {
            id: `${id}-${times + 1}`,
            url: id,
        }
    }

}


async function updateInJianshu(post) {
    if (post === undefined
        || post.id === undefined
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

    const id = Number.parseInt(post.id.split('-')[0]);
    const times = Number.parseInt(post.id.split('-')[1]);

    responsePromise = await fetch(`https://www.jianshu.com/author/notes/${id}`, {
        "headers": {
            "accept": "application/json",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://www.jianshu.com/writer",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify({
            "id": id,
            "autosave_control": times,
            "title": post.title,
            "content": post.md
        }),
        "method": "PUT",
        "mode": "cors",
        "credentials": "include"
    });
    const result = await responsePromise.json();

    responsePromise = await fetch(`https://www.jianshu.com/author/notes/${id}/publicize`, {
        "headers": {
            "accept": "application/json",
            "accept-language": "zh-CN,zh;q=0.9",
            "content-type": "application/json; charset=UTF-8",
            "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://www.jianshu.com/writer",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    const deploy = await responsePromise.json();

    if (deploy.error !== undefined) {
        return {
            code: deploy.error[0].code,
            msg: deploy.error[0].message,
        }
    }

    return {
        code: 200,
        data: {
            id: `${id}-${times + 1}`,
            url: id,
        }
    }
}

config.platform.jianshu.createBlog = createInJianshu
config.platform.jianshu.updateBlog = updateInJianshu



