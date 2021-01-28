file = require("./modiFile");

module.exports = {
    keyWord: function(fileName, word, genre){
        let result = [];
        data = file.read(fileName, function(err, data){
            for (i=0; i<=data.length-1; i++){
                let movieGenre = data[i].genres;
                let description = data[i].overview.split(' ')
                if (movieGenre != null){
                    for (a=0; a < movieGenre.length; a++){
                        if (movieGenre[a] == genre){
                            for (e=0; e < description.length; e++){
                                if (description[e] == word){
                                    result.push(data[i]);
                                    break;
                                }
                            }
                        }
                    }
                }
            } 
            console.log(recent(result));
        });
        //All the code between the parenthesis is playing when the reading of the file is complete
    },
}
function recent(data){
    let top = 0;    //The most value for the Date
    let mostIndex;
    for(a=0; a<data.length; a++){
        currentDate = data[a].release_date;
        if(currentDate != null){
            if (currentDate > top){
                top = currentDate;  //If the current value is superior than the top value, that mean the the current movies is the most recent
                mostIndex = a;
            }
        }
    }
    return data[mostIndex];
}