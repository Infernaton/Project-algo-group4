fs = require('fs');

module.exports = {
    read: function(fileName, callback){
        console.time("__Reading File");
        fs.readFile(fileName,{encoding: 'utf8'}, function(err,data) {
            if(err) return callback(err);
            data = JSON.parse(data);
            callback(null, data);
        });
        console.timeEnd("__Reading File");
    },
    write: function(filePath, data){
        console.time("__Writing File");
        data = JSON.stringify(data, null, '\t');
        fs.writeFile(filePath,data,function(err) {
            if(err) return callback(err);
            console.log('Done.');
            })
            console.timeEnd("__Writing File");
    },
    transform: function(fileName, fileOut){
        console.time("Transform the title");
        data = this.read(fileName, function(err, data){
            for(i=0; i < data.length; i++){
                year = ~~(data[i].release_date/(3600*24*365)) + 1970; //To transform the value in second to Year
                if (year != null){
                    data[i].title += ' (' + year +')';
                }
            }
            
            //I don't know but it doesn't recognise the 'write' function above so i juste rewrite it here
            data = JSON.stringify(data, null, '\t');
            fs.writeFileSync(fileOut,data);
        });
        console.timeEnd("Transform the title");
    }
}