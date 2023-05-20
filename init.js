const fs = require('fs');
let dirObj = {}
let year = []
const exist = fs.existsSync('./blog/config.json')
let list = getFilesAndFoldersInDir('./blog/articles')
if (exist) {
    filter()
    writeConfig()
}
console.log(year);
console.log(dirObj);

function getFilesAndFoldersInDir(path) {
    const items = fs.readdirSync(path);
    const result = [];
    items.forEach(item => {
        const itemPath = `${path}/${item}`;
        const stat = fs.statSync(itemPath);
        if (stat.isDirectory()) {
            let data = {
                // 文件夹
                type: 'folder',
                name: item
            }
            let children = getFilesAndFoldersInDir(itemPath)
            if (children && children.length) {
                data.children = children
            }
            result.push(data);
        } else {
            // 文件
            result.push({
                type: 'file',
                name: item
            });
        }
    });
    return result;
}

function filter(type = "md") {
    
    let list1 = [] //去掉最外层的文件
    list.forEach((e) => {
        if (e.type == "folder") {
            list1.push(e)
            year.push(e.name)
        }
    })
    console.log(list1);
    year.forEach((e, index) => {
        let temp = []
        for (let key in list1[index]) {
            if (key == "children") {
                list1[index].children.forEach((e) => {
                    if (e.type == "file" && e.name.match("." + type) && e.name != "模板.md") {
                        temp.push(e.name)
                    }
                })
            }
        }
        dirObj[`${year[index]}`] = temp
    })
 
}

function writeConfig() {
    const content = JSON.stringify(dirObj)
    const opt = {
        flag: 'w', // a：追加写入；w：覆盖写入
    }
    fs.writeFile('./blog/config.json', content, opt, (err) => {
        if (err) {
            console.error(err)
        }
    })

}


