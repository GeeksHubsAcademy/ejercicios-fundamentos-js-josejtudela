//#### Ejercicio 1 ####
//console.log("HELLO ES6");
//#### Ejercicio 2 ####
// let name = process.argv[2];
// let param = `Hello, ${name}!
// Your name lowercased is "${name.toLowerCase()}".`;
//
// console.log(param);
//#### Ejercicio 3 ####
// var inputs = process.argv.slice(2);
// var result = inputs.map(input => input[0]).reduce((valorAnterior,valorActual) => valorAnterior+valorActual);
// console.log(`[${inputs}] becomes "${result}"`);
//### Ejercico 4 ###
// var foot = {
//     kick: () => {
//         this.yelp = "Ouch!";
//         setImmediate(() => {console.log(this.yelp)});
//     }
// };
// foot.kick();
//### Ejercico 5 ###
// let userArray = process.argv.slice(2);
// let [,username,email] = userArray;
// let obj = {
//   username: username,
//   email: email
// }
// console.log(obj);
//### Ejercico 6 ###
// let numbersArray = process.argv.slice(2);
// let minimumValue = Math.min(...numbersArray);
// console.log(`The minimum of [${numbersArray}] is ${minimumValue}`);
//### Ejercico 7 ###
// module.exports = function average(...args) {
//     var result = 0;
//     for(let number of args){
//       result += number;
//     }
//     return result/args.length;
// };
//### Ejercico 8 ###
// module.exports = function midpoint(lower=0,upper=1) {
//     return (lower+upper)/2;
// };
//### Ejercico 9 ###
// module.exports = function makeImportant(str,exc = str.length) {
//     let exclamation = '!'.repeat(exc);
//     return str+exclamation;
// };
//### Ejercico 10 ###
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(str,...values) {
  //let replaceds = values.replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt").replace(/>/g, "&amp;");
  var replacedS
  for(let value of values){
    replacedS = value.replace(/&/g, "&amp;");
    replacedS = replacedS.replace(/"/g, "&quot;");
    replacedS = replacedS.replace(/</g, "&lt;");
    replacedS = replacedS.replace(/>/g, "&gt;");
    replacedS = replacedS.replace(/'/g, "&apos;");
  }
  return `${str[0]}${values[0]}${str[1]}${replacedS}${str[2]}`;
}
