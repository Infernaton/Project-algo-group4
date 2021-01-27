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
    },
    transform: function(fileName, fileOut){
        data = this.read(fileName, function(err, data){
            for(i=0; i < data.length; i++){
                year = ~~(data[i].release_date/(3600*24*365)) + 1970; //To transform the value in second to Year
                if (year != null){
                    data[i].title += ' (' + year +')';
                }
            }
            console.log(data[0])
            this.write(fileOut, data);
        });
    }
}