file = require("./modiFile");
const fs = require('fs')

module.exports = {
    toSearch : function(fileName ,year,sorted) {
        let fichier = fs.readFileSync(fileName)
        let movies = JSON.parse(fichier)
        let result = [];
        for(let i = 0; i < movies.length; i++) {
            let searchSecondsToYear = movies[i].release_date
            let searchYear = ~~(searchSecondsToYear/(3600*24*365)) + 1970;
            if (searchYear != null) {
                if(searchYear == year) {
                    result.push(movies[i].title)
                }
            } 
        }
        console.log(result)
         
        if(sorted == "true") {
            console.log("done")
            //return algo ;
            
            //for(i=movies.length-1;i>=1;i--){
                // tri par alphabet
            //}
             
        } else if(sorted == "false") {
                return null;
        } else {
            console.log("\nerror, please to retype")
        }
        
    }     
}

