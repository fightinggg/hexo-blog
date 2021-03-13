const util = require("./util");

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
function filterPost(log, data) {
    let metadata = util.parseSource(data.source);

    data.title = metadata.title;

    data.abbrlink = (data.date.valueOf() / 1000).toString(36).toUpperCase();

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
