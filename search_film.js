file = require("./modiFile");
const fs = require('fs')

module.exports = {
    toSearch : function(fileName ,year) {
        let fichier = fs.readFileSync(fileName)
        let movies = JSON.parse(fichier)
        let result = [];
        for(let i = 0; i < movies.length; i++) {
            let searchYear = movies[i].release_date
            if (searchYear != null) {
                if(searchYear > year) {
                    result.push(movies[i].title)
                }
            } 
        }
        console.log(result)
    }     
}

