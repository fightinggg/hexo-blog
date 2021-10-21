const fs = require("fs");
const path = require("path")

function readFileList(dir, filesList = []) {
    const files = fs.readdirSync(dir);


    files.forEach((item, index) => {
        if(item.startsWith(".")){
            return
        }

        var fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {  
            filesList.push(dir+"/index.md");
            readFileList(path.join(dir, item), filesList);
        } else {
            if(fullPath.endsWith(".md")){
                filesList.push(fullPath);
            }          
        }
    });
    return filesList;
}

filesList = []
readFileList('.',filesList)
filesList = Array.from(new Set(filesList))

console.log('* [Polin & Fightinggg](README.md)')
filesList.forEach(name=>{
    const url = name.split('/')
    var str = ''
    for(i=3;i<url.length;i++){
        str += '    '
    }

    if(url.length<=2){
        return
    }
    console.log('%s* [%s](%s)',str,url[url.length-2],name)

})

//  node .SUMMARY.js > SUMMARY.md 