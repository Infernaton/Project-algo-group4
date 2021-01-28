module.exports = {
    date : function(entry,out,fileName){
        data = file.read(fileName, function(err, data){
            console.log(typeof data);
        });
    }
}

file = require("./modiFile");
data = file.read("movies.json", function(err, data){
    
        for ( let i = 0; i < data.length; i++){
            let min = i;
            let tabDate = data[i].release_date;
            if (tabDate != null){
                for ( let j = i+1 ; j < data.length; j++){
                    if(data[j].release_date < data[min].release_date){
                        min = j;
                    }
                    
                }
                let tmp = data[i].release_date;
                data[i].release_date = data[min].release_date
                data[min].release_date = tmp    
            }
        }

        for (l = 0 ; l < data.length; l++){
            if (data[l].release_date != null){
                 console.log(data[l].release_date)
            }
        }
        
    }
);