// valine.swig 
// using this because valine.swig is too big

// {%- set valine_uri = theme.vendors.valine or '//unpkg.com/valine/dist/Valine.min.js' %}

// <script>
// NexT.utils.loadComments(document.querySelector('#valine-comments'), () => {
//   NexT.utils.getScript('{{ valine_uri }}', () => {
//     var GUEST = ['nick', 'mail', 'link'];
//     var guest = '{{ theme.valine.guest_info }}';
//     guest = guest.split(',').filter(item => {
//       return GUEST.includes(item);
//     });
//     new Valine({
//       el         : '#valine-comments',`
//       verify     : {{ theme.valine.verify }},
//       notify     : {{ theme.valine.notify }},
//       appId      : '{{ theme.valine.appid }}',
//       appKey     : '{{ theme.valine.appkey }}',
//       placeholder: {{ theme.valine.placeholder | json }},
//       avatar     : '{{ theme.valine.avatar }}',
//       meta       : guest,
//       pageSize   : '{{ theme.valine.pageSize }}' || 10,
//       visitor    : {{ theme.valine.visitor }},
//       lang       : '{{ theme.valine.language }}' || 'zh-cn',
//       path       : location.pathname,
//       recordIP   : {{ theme.valine.recordIP }},
//       serverURLs : '{{ theme.valine.serverURLs }}'
//     });
//   }, window.Valine);
// });
// </script>



$.get("/api/valineConfig/").then(valine => {
    valine = JSON.parse(valine)
    NexT.utils.loadComments(document.querySelector('#valine-comments'), () => {
        NexT.utils.getScript(valine.uri, () => {
            var GUEST = ['nick', 'mail', 'link'];
            var guest = valine.guest_info;
            guest = guest.split(',').filter(item => {
                return GUEST.includes(item);
            });
            new Valine({
                el: '#valine-comments',
                verify: valine.verify,
                notify: valine.notify,
                appId: valine.appid,
                appKey: valine.appkey,
                placeholder: valine.placeholder | 'json',
                avatar: valine.avatar,
                meta: guest,
                pageSize: valine.pageSize || 10,
                visitor: valine.visitor,
                lang: valine.language || 'zh-cn',
                path: location.pathname,
                recordIP: valine.recordIP,
                serverURLs: valine.serverURLs
            });
        }, window.Valine);
    });
})