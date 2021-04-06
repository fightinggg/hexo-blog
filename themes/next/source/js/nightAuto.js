autoScheme = () => {
    // localStorage.removeItem('lastAutoUpdateScheme')
    hour = (new Date()).getHours()

    // 如果最近一个小时没有修改过
    last = localStorage.getItem('lastAutoUpdateScheme')
    if (last != hour) {
        localStorage.setItem('lastAutoUpdateScheme', hour)

        if (hour <= 6 || hour >= 19) { // 如果是晚上
            if (!document.documentElement.classList.contains('darkScheme')) {
                msgUtils.showSuccessMsg('晚上好呀！自动为您切换到夜间模式！')
                localStorage.setItem('Scheme', 'Dark');
                document.documentElement.classList.toggle('darkScheme');
            }
        } else { // 如果是白天
            if (document.documentElement.classList.contains('darkScheme')) {
                msgUtils.showSuccessMsg('白天好呀！为您切换到白天模式！')
                localStorage.removeItem('Scheme');
                document.documentElement.classList.toggle('darkScheme');
            }
        }
    } else {
        //alert("放过了")
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('night-btn')[0].onclick = () => {
        if (!document.documentElement.classList.contains('darkScheme')) {
            msgUtils.showSuccessMsg('白天主题好看！(可以按alt+x或者option+x快速更新😯)', 1000)
        } else {
            msgUtils.showSuccessMsg('暗色主题好看！(可以按alt+x或者option+x快速更新😯)', 1000)
        }
    }
    autoScheme();
    setInterval(autoScheme, 60 * 60 * 1000);
})
