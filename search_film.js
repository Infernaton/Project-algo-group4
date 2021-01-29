file = require("./modiFile");
const { strict } = require("assert");
const fs = require('fs')
// Imported files below

module.exports = {
    toSearch : function(fileName ,year,sorted) {
        console.time("\nexecution time : ");
        let fichier = fs.readFileSync(fileName)
        // To parse JSON file
        let movies = JSON.parse(fichier)
        // In order to push data in the array
        let result = [];
        // We browse every elements in the "for"
        for(let i = 0; i < movies.length; i++) {
            // We pick up the browsed element 
            let searchSecondsToYear = movies[i].release_date
            // We convert the seconds in year
            let searchYear = new Date(searchSecondsToYear * 1000).getFullYear()
            if (searchYear != null) {
                // If the the typed year is true
                if(searchYear == year) {
                    let displayTitle = movies[i].title
                    if(sorted == "true") {
                        //Algorithm to sort the title here.....
                        fs.writeFileSync('sorted_title.txt', displayTitle)
                    } else if(sorted == "false") {
                        result.push(displayTitle)
                    } 
                }
            } 
        }
        // We dislay according to conditions the result
        console.log(result)
        // We calculate the time
        console.timeEnd("\nexecution time : ")
    }     
}