fs = require('fs');

module.exports = {
    read: function(fileName, callback){
        fs.readFile(fileName,{encoding: 'utf8'}, function(err,data) {
            if(err) return callback(err);
            data = JSON.parse(data);
            callback(null, data);
        });
    },
    write: function(filePath, data){
        data = JSON.stringify(data, null, '\t');
        fs.writeFile(filePath,data,function(err) {
            if(err) return console.error(err);
            console.log('Done.');
            })
    }
}