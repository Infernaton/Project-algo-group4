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
            console.log(result);
        });
    }
}