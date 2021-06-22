msgUtils = {
    showSuccessMsg: (msg, duration) => {
        Vue.prototype.$message({
            message: msg,
            center: true,
            duration: duration || 3000
        })
    }
}
