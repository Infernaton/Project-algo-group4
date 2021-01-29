file = require("./modiFile");

data = file.read("movies.json", function(err,data){

    console.time("function pair");

    for ( let i = 0; i < 1; i++){
        let tabDesc = data[i].overview;
            
            if (tabDesc != null){
                var words = tabDesc.split(' ');
                console.log("Paire pour le film numéro", i, "( a supprimer )")
                for (let j = 0; j < words.length; j++){
                    if (words[j].length >= 4){
                        //console.log(words[j]);
                        for (let f = 1; f < words.length; f++){
                            if (words[f].length >= 4 && words[f] != words[j]){
                                console.log(words[j],'/',words[f])
                            }
                        }
                    }  
                }
            }
    }

    console.timeEnd("function pair");
        
});