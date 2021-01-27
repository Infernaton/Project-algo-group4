//let say =  require('./module');
//let hello = say.hello();
//console.log(hello);

console.log(""); //Used to jump the first line

function help(){
    console.log("<!>----------{ Help Message }----------<!>\n");
    console.log("'node main.js -help' \n    -> To print this message.");
    console.log("'node main.js –save <path_folder>' \n   -> Optional, Save the picture movie in a path folder, can be used with the -action.");
    console.log("'node main.js -action <an Action> <filePath> <args>' \n    -> To Apply different action to the specified file.\n");
    console.log("The different Action:");
    console.log("   'transform': Transforming, in specified file, the title movie.\n            'node main.js –action transform <entryFilePath> <outFilePath>'");
    console.log("   'sort_date': Sorting by Date the specified file content.\n            'node main.js –action sort_date <entryFilePath> <outFilePath>'");
    console.log("   'sort_title': Sorting by Title the specified file content.\n            'node main.js –action sort_titre <entryFilePath> <outFilePath>'");
    console.log("   'search_date': Search for the movies with the specified Date in the current file.\n            'node main.js –action search_date <filePath> <year> <True|False>'");
    console.log("   'search_key_word': Search for key word in the description's movie in the specified file.\n            'node main.js –action search_key_word <filePath <key_word> <genre>'");
}
function printError(type,msg){
    //To specified the different error that the user is written
    switch(type){
        case 'syntax':
            console.log("Error Syntax. "+msg);
            break;
        case 'missing':
            console.log("Missing Argument. "+msg);
            break;
        default:
            console.log("Error. "+msg);
    }    
}

let args = process.argv.splice(2); //To remove useless args like the path file of node.exe and main.js
//let file = require('modiFile');
console.log(args);
console.log('');

if (args[0]== '-action'){
    let entry = args[2]; //To know the files entry where the movies are
    let out;
    if (entry == null){
        printError('missing',"No Entry Specified");

    }else{
        switch (args[1]) {

            case 'transform':
                out = args[3];
                if (out == null){
                    printError("missing","No exit found");
                }else{
                    console.log("Transforming, in specified file, the title movie.");
                    //Add here the function to call
                }
                break;

            case 'sort_date':
                out = args[3];
                if (out == null){
                    printError("missing","No exit found");
                }else{
                    console.log("Sorting by Date the specified file content.");
                    //Add here the function to call
                }
                break;

            case 'sort_title':
                out = args[3];
                if (out == null){
                    printError("missing","No exit found");
                }else{
                    console.log("Sorting by Title the specified file content.");
                    //Add here the function to call
                }
                break;

            case 'search_date':
                let year = args[3];
                let sorted = args[4];
                if (year == null || sorted == null){
                    printError("missing","");
                }else{
                    console.log("Search for the movies with the specified Date in the current file.");
                    //Add here the function to call
                }
                break;

            case 'search_key_word':
                let key_word = args[3];
                let genre = args[4];
                if (key_word == null || genre == null){
                    printError("missing","")
                }else{
                    console.log("Search for key word in the description's movie in the specified file.");
                    //Add here the function to call
                }
                break;

            default:
                printError('missing',"Not valid Argument found for -action");
        }
    }
    
}else if(args[0] == '-help'){
    help();
}else{
    printError('syntax',"Command Available: -help, -action");
}