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
                console.log(searchYear)
                //console.log(movies)
                    if(searchYear > year) {
                        result.push(movies[i].title)
                        console.log("Find")
                    }
            } 
            return "error"
        }
        console.log(result)
    }     
}

