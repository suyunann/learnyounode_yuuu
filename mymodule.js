const fs = require('fs');
const path = require('path')

const func = (dir, ext,callback) => {
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err)
        let newList = [];
        for(let i = 0; i<=list.length-1; i++){
            if(path.extname(list[i]) === '.' + ext){
                newList.push(list[i])
            }
        }
        
        callback(null, newList)
    });

}
module.exports = func;