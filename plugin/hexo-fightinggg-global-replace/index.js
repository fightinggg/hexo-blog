
hexoFightingggGlobalReplaceMap = hexo.config['global-replace'].map(o => ({
    reg: new RegExp(o.from, "gi"),
    replace: o.to
}))

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.layout === 'post') {
        hexoFightingggGlobalReplaceMap.forEach(o => {
            data.content = data.content.replace(o.reg, o.replace);
        })
    }
    return data;
});
