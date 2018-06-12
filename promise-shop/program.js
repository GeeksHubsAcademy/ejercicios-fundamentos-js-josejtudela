require('es6-promise');
'use strict';
//### Ejercicio 1 ####
//setTimeout( ()=>console.log('TIMED OUT!'), 300);

//### Ejercicio 2 ####
// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(()=>fulfill('FULFILLED!'),300)
// });
//
// promise.then((success)=>console.log(success));

//### Ejercicio 3 ###
// var promise = new Promise(function (fulfill, reject) {
//   var reason = new Error('REJECTED!');
//   setTimeout(()=>reject(reason),300);
// });
//
// function onReject(error) {
//   console.log(error);
// }
//
// promise.then(()=>console.log("ok"),(error)=>onReject(error.message));

//### Ejercicio 4 ###
// var promise = new Promise(function (fulfill, reject) {
//
//   fulfill('I FIRED');
//
//   var reason = new Error('I DID NOT FIRE');
//   reject(reason)
//
// });
//
// function onReject(error) {
//   console.log(error);
// }
//
// promise.then((success)=>console.log(success),(error)=>onReject(error.message));

//### Ejercicio 5 ###
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });
// promise.then((success)=>console.log(success),(error)=>onReject(error.message));
// console.log("MAIN PROGRAM");

//### Ejercicio 6 ###
// var promiseC = new Promise(function (fulfill, reject) {
//   var reason = new Error('REJECTED!');
//   reject(reason);
// });
// var promiseCatch = promiseC.catch((error)=>console.log(error.message));
//
// var promiseFF = new Promise(function (fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });
// var promiseResolve =  Promise.resolve((success)=>console.log(success));
//
// var promiseR = new Promise(function (fulfill, reject) {
//   var reason = new Error('REJECTED!');
//   reject(reason);
// });
// var promiseReject = Promise.reject((error)=>console.log(error.message));

//### Ejercicio 7 ###
//first().then((secret)=>second(secret)).then(console.log);

//### Ejercicio 8 ###
// var first = ()=>{
//   return new Promise((fulfill,reject)=>{
//       fulfill("MANHATTAN")
//   });
// }
// let attachTitle = (arg)=>'DR. '+arg;
// first().then((success)=>attachTitle(success)).then((message)=>console.log(message));

//### Ejercicio 9 ###
let json = process.argv[2];
var parsePromised = (json)=>{
  return new Promise((fulfill,reject)=>{
      if(JSON.parse(json)){
        fulfill(JSON.parse(json));
      }else{
        reject(new Error("ERROR!"))
      }
  });
}
parsePromised(json).then(res=>parsePromised(res)).then(null,console.log);