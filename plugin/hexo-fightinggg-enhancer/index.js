const util = require("./util");
const moment = require('moment')

// prepare tags by `hexo.config.enhancer.tags` and `hexo.config.keywords`
const tags = [];
util.parseTags(hexo.config.tags, tags);
util.parseTags(hexo.config.keywords, tags);

/**
 * fitler hexo's post, auto generate `title`, `date`, `abbrlink`
 *
 * @param log
 * @param data
 */

hexoAbbrlinkSet = new Set();
function filterPost(log, data) {
    let metadata = util.parseSource(data.source);

    data.title = metadata.title;


    if (data.source.substring(data.source.length - 5) == '.html') {
        data.date = moment(1565018588000)
        data.updated = moment(1565018588000)
        data.abbrlink = data.title
    } else {
        data.abbrlink = (data.abbrlink?data.abbrlink:'') + (data.date.valueOf() / 1000).toString(36).toUpperCase();
    }
    if(hexoAbbrlinkSet.has(data.abbrlink)){
        log.error('重复的abbrlink: '+data.source)
    }
    hexoAbbrlinkSet.add(data.abbrlink);

  
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
    }
    return data;
});
