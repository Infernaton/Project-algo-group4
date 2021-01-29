const file = require("./modiFile");

module.exports = {
    date : function(fileName,out){
        data = file.read(fileName, function(err, data){
            console.time("Sort date");

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

                    let tmp = data[i];
                    data[i] = data[min];
                    data[min] = tmp;
                }
            }
            // a second loop to display the sorted values
            file.write(out, data)
            
            console.timeEnd("Sort date");
        });
    },
    title : function(fileName,out){
        data = file.read(fileName, function(err, data){
            console.time("Sort title");

            // a first loop to sort the values
            for ( let i = 0; i < data.length; i++){
                let min = i;
                let tabTitle = data[i].title;
                if (tabTitle != null){
                    for ( let j = i+1 ; j < data.length; j++){
                        if(data[j].title < data[min].title){
                            min = j;
                        }
                    }

                    // exchanges the place of the two values
                    let tmp = data[i];
                    data[i] = data[min];
                    data[min] = tmp;
                }
            }

            // a second loop to display the sorted values
            file.write(out, data)
            console.timeEnd("Sort title");
        });
    }
}
