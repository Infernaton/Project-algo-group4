fs = require('fs');

module.export = {
    read: function(fileName){
        fs.readFile(fileName,{encoding: 'utf8'}, function(err,data) {
            if(err) return console.log(err);
            data = JSON.parse(data);
            return data
        });
    },
    write: function(filePath, data){
        data = JSON.stringify(json,null,'\t');
        fs.writeFile(filePath,data,function(err) {
            if(err) return console.error(err);
            console.log('Done.');
            })
    }
}