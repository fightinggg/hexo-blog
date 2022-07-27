const util = require("./util");
const moment = require('moment')

// prepare tags by `hexo.config.enhancer.tags` and `hexo.config.keywords`
const tags = [];
util.parseTags(hexo.config.tags, tags);
util.parseTags(hexo.config.keywords, tags);

function imagesUrlProcess(data) {
    // 目前使用正则解析，有人力以后使用markd
    re = /(.*)!\[(.*)\]\(([^\/].*)\)(.*)/

    contents = data.content.split('\n')
    for (i = 0; i < contents.length; i++) {
        imageRow = contents[i].match(re)
        if (imageRow) {
            contents[i] = `${imageRow[1]}![${imageRow[2]}](/${imageRow[3]})${imageRow[4]}`
        }
    }
    data.content = contents.join('\n')
    // console.log(data)
}


/**
 * fitler hexo's post, auto generate `title`, `date`, `abbrlink`
 *
 * @param log
 * @param data
 */
function filterPost(log, data) {
    let metadata = util.parseSource(data.source);

    data.title = metadata.title || parseInt(Math.random().toString().substring(2), 10).toString().substring(0, 5);

    imagesUrlProcess(data)


    if (data.source.substring(data.source.length - 5) == '.html') {
        data.date = moment(1565018588000)
        data.updated = moment(1565018588000)
        data.abbrlink = data.title
    } else {
        data.abbrlink = (data.abbrlink ? data.abbrlink : '') + (data.date.valueOf() / 1000).toString(36).toUpperCase();
    }


    if (metadata.categories.length) {
        let categories = metadata.categories;
        data.categories.forEach(item => {
            if (typeof item === 'string') {
                categories.push(item);
            } else if (item.name) {
                categories.push(item.name);
            }
        });
        categories.reverse();
        data.setCategories(categories);
    }

    if (tags.length) {
        let matchedTags = util.matchTags(data.raw, tags);
        if (matchedTags.length) {
            data.tags.forEach(tag => {
                if (matchedTags.indexOf(tag) < 0) {
                    matchedTags.push(tag.name);
                }
            });
            data.setTags(matchedTags);
        }
    }
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.layout === 'post') {
        filterPost(this.log, data);
        if (data.source.startsWith("_posts")) {
            data.source = data.source.substring(7)
        } else {
            log.error("error source file, this file not in _post dir ", data.source)
        }
    }
    return data;
});
