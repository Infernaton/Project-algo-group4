file = require("./modiFile");
const { strict } = require("assert");
const fs = require('fs')

module.exports = {
    toSearch : function(fileName ,year,sorted) {
        console.time("\nexecution time : ");
        let fichier = fs.readFileSync(fileName)
        let movies = JSON.parse(fichier)
        let result = [];
        for(let i = 0; i < movies.length; i++) {
            let searchSecondsToYear = movies[i].release_date
            let searchYear = ~~(searchSecondsToYear/(3600*24*365)) + 1970;
            if (searchYear != null) {
                if(searchYear == year) {
                    let displayTitle = movies[i].title
                    if(sorted == "true") {
                        //Algorithme pour trier le tableau ici
                        

                    } else if(sorted == "false") {
                        result.push(displayTitle)
                    }
                }
            } 
        }
        console.log(result)
        console.timeEnd("\nexecution time : ")

        function strSort(a) {
            return a.sort(function(x,y) {
              return x.toString().localeCompare(y.toString());
            });
          }
    }     
}