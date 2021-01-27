let say =  require('./module');

let hello = say.hello();

console.log(hello);
let args = process.argv.splice(2);
console.log(args);
