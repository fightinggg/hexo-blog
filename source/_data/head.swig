<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>

<script src="/js/msg.js"></script>
<script src="/js/hello.js"></script>
<!--script src="/js/changeBackground.js"></script -->
<script type="text/javascript" src="/js/nightAuto.js"></script>

<!-- <script type="text/javascript" src="\js\snow.js"></script> -->

<script>
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if(/^\/[0-9A-Z]+.html$/.test(window.location.pathname)){
            Vue.prototype.$notify({
                title: 'React Blog 已经发布',
                dangerouslyUseHTMLString: true,
                message: `<a href="/react-style${window.location.pathname}">点击感受更快的体验</a>`,
                duration: 0
            });
        }
    });
})
</script>