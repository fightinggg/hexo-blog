regMapConfig = hexo.config.linkable || []
regMap = regMapConfig.map(o => ({
    reg: new RegExp("(" + o.key + ")", "gi"),
    replace: "[$1](" + o.url + ")"
}))

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.layout === 'post') {
        regMap.forEach(o => {
            data.content = data.content.replace(o.reg, o.replace);
        })
    }
    return data;
});
