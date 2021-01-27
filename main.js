//let say =  require('./module');
//let hello = say.hello();
//console.log(hello);

function help(){
    console.log("\n<!>----------{ Help Message }----------<!>\n");
    console.log("'node main.js -help' \n    -> To print this message.");
    console.log("'node main.js –save <path_folder>' \n   -> Optional, Save the picture movie in a path folder, can be used with the -action.")
    console.log("'node main.js -action <an Action> <filePath> <args>' \n    -> To Apply different action to the specified file.\n");
    console.log("The different Action:");
    console.log("   'transform': Transforming, in specified file, the title movie.\n            'node main.js –action transform <entryFilePath> <outFilePath>'");
    console.log("   'sort_date': Sorting by Date the specified file content.\n            'node main.js –action sort_date <entryFilePath> <outFilePath>'");
    console.log("   'sort_title': Sorting by Title the specified file content.\n            'node main.js –action sort_titre <entryFilePath> <outFilePath>'");
    console.log("   'search_date': Search for the movies with the specified Date in the current file.\n            'node main.js –action search_date <filePath> <year> <True|False>'");
    console.log("   'search_key_word': Search for key word in the description's movie in the specified file.\n            'node main.js –action search_key_word <filePath <key_word> <genre>'");
}
function printError(){
    console.log("Error Synthax.")
    console.log("No action specified.")
}

let args = process.argv.splice(2);
console.log(args);
if (args[0]== '-action'){
    switch (args[1]) {
        case 'transform':
            console.log("Transforming, in specified file, the title movie.");
            break;
        case 'sort_date':
            console.log("Sorting by Date the specified file content.")
            break;
        case 'sort_title':
            console.log("Sorting by Title the specified file content.")
            break;
        case 'search_date':
            console.log("Search for the movies with the specified Date in the current file.")
            break;
        case 'search_key_word':
            console.log("Search for key word in the description's movie in the specified file.")
            break;   
        default:
            console.log("Action not found")
    }
}else if(args[0] == '-help'){
    help();
}else{
    printError();
}