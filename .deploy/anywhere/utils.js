async function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsText(file);
    })
}



function copy(value){
    const input = document.createElement("input"); // 直接构建input
    input.value = value; // 设置内容
    document.body.appendChild(input); // 添加临时实例
    input.select(); // 选择实例内容
    document.execCommand("Copy"); // 执行复制
    document.body.removeChild(input); // 删除临时实例
}