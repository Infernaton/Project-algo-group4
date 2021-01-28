file = require("./modiFile");

module.exports = {
    date : function(fileName,out){
        data = file.read(fileName, function(err, data){

            // a first loop to sort the values

            for ( let i = 0; i < data.length; i++){
                let min = i;
                let tabDate = data[i].release_date;
                if (tabDate != null){
                    for ( let j = i+1 ; j < data.length; j++){
                        if(data[j].release_date < data[min].release_date){
                            min = j;
                        }
                        
                    }

                    // exchanges the place of the two values

                    let tmp = data[i].release_date;
                    data[i].release_date = data[min].release_date
                    data[min].release_date = tmp    
                }
            }

            // a second loop to display the sorted values
    
            for (l = 0 ; l < data.length; l++){
                if (data[l].release_date != null){
                     console.log(data[l].release_date)
                }
            }
        });
    }
}


