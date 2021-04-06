document.addEventListener('DOMContentLoaded', () => {
    var img = new Image();
    img.src = '/images/background/snow.jpg';

    changeBackground = () => {
        document.body.style.backgroundImage = `url(/images/background/snow.jpg)`;
        msgUtils.showSuccessMsg('背景图片画质太低了，为您换一张更高的', 3000)
    }

    changeImg = () => {
        if (document.documentElement.className === "") {
            changeBackground();
        } else {
            // msgUtils.showSuccessMsg("等待下一次换背景")
            setTimeout(changeImg, 3000)
        }
    }

    img.onload = () => {
        changeImg()
    }
})
