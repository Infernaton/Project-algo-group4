file = require("./modiFile");
const { strict } = require("assert");
const fs = require('fs')
const dl = require('image-downloader');
// Imported files below

module.exports = {
    toSearch : function(fileName, year, sorted, savePicture) {
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
            let searchYear = ~~(searchSecondsToYear/(3600*24*365)) + 1970;
            if (searchYear != null) {
                // If the the typed year is true
                if(searchYear == year) {
                    let displayTitle = movies[i].title
                    if(sorted == "true") {
                        //Algorithm to sort the title here.....
                        fs.writeFileSync('sorted_title.txt', displayTitle)
                    } else if(sorted == "false") {
                        result.push(movies[i])
                        // We dislay according to conditions the result
                        console.log(movies[i].title)
                    } 
                }
            } 
        }
        
        console.timeEnd("\nexecution time : ")

        //If -save is used
        if (savePicture != ""){
            for(i = 0; i< result.length; i++){
                const options = {
                    url : result[i].poster,
                    dest : savePicture
                }
                //Use to download the picture we want
                dl.image(options)
                    .then(({ filename }) => {
                        console.log('__Save to', filename)
                    })
                    .catch((err) => console.error(err))
            }
            file.write(savePicture+"/listMovie.json",result)
        }
    }
}