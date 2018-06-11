//### ejercicio1 
//console.log('HELLO WORLD');

//### ejercicio2
// let numbers = process.argv.slice(2);
// let sum = numbers.reduce((total,next)=>Number(total)+Number(next));
// console.log(sum);

//### ejercicio3
// var fs = require('fs');
// const file = fs.readFileSync(process.argv[2]);
// let lines = file.toString().split('\n');
// //let str = lines.filter(line=>'\r'===line);
// console.log(lines.length-1);

//### ejercicio4
// var fs = require('fs');
// fs.readFile(process.argv[2], (err, data) => {
//     if (err) throw err;
//     let lines = data.toString().split('\n');
//     console.log(lines.length-1);
//   });

//### ejercicio5
// var fs = require('fs');

// fs.readdir(process.argv[2],(err,data)=>{
//     let ext = data.filter(file=>process.argv[3]===file.split('.')[1]);
//     ext.forEach(e=>console.log(e));
// });

//### ejercicio6
// var fs = require('fs');
// var mymodule = require('./mymodule');
// let onError = (err,data)=>{
//     if(err){
//         console.log(error.message)
//     }else{
//         data.forEach(e=>console.log(e));
//     }
// }
// mymodule(process.argv[2],process.argv[3],onError);

//### ejercicio7
// const http = require('http');
// let url = process.argv[2];
// let requesURL = (url) => {
//     http.get(url,res=>{
//         res.on("data",data=>{
//             console.log(data.toString());
//         });
//         res.on('error',console.log);
//     }).on('error',console.log);
// };
// requesURL(url);

//### ejercicio8
// const BufferList = require('bl');
// const http = require('http');
// let url = process.argv[2];
// let requesURL = (url) => {
//     http.get(url,res=>{
//         let body = [];
//         res.on('data', (chunk) => {
//             body.push(chunk);
//         }).on('end', () => {
//             body = Buffer.concat(body).toString();
//             console.log(body.length)
//             console.log(body)
//         });
//     })
// };
// requesURL(url);

//### ejercicio9
// const http = require('http');
// let [url1,url2,url3] = process.argv.slice(2);
// let requesUR1 = (url1,url2,url3) => {
//     http.get(url1,res=>{
//         let body = [];
//         res.on('data', (chunk) => {
//             body.push(chunk);
//         }).on('end', () => {
//             body = Buffer.concat(body).toString();
//             console.log(body)
//             http.get(url2,res=>{
//                 let body = [];
//                 res.on('data', (chunk) => {
//                     body.push(chunk);
//                 }).on('end', () => {
//                     body = Buffer.concat(body).toString();
//                     console.log(body)
//                     http.get(url3,res=>{
//                         let body = [];
//                         res.on('data', (chunk) => {
//                             body.push(chunk);
//                         }).on('end', () => {
//                             body = Buffer.concat(body).toString();
//                             console.log(body)
//                         });
//                     })
//                 });
//             })
//         });
//     })
// };
// requesUR1(url1,url2,url3)

//### ejercicio10
// const net = require('net');
// const server = net.createServer(socket=>{
//     let date = new Date();
//     socket.write(`${date.getFullYear(9)}-0${date.getMonth()+1}-0${date.getDate()} ${date.getHours()}:0${date.getMinutes()}\n`);
//     socket.end();
// });

// server.listen(process.argv[2]);

//### ejercico11
// const http = require('http'), fs = require('fs');
// const [port,url] = process.argv.slice(2);

// const serverHttp = http.createServer((req,res)=>{
//     fs.readFile(url,(err,data)=>{
//         if(err) throw err
//         res.write(data);
//         res.end();
//     });
// });

// serverHttp.listen(port);

//### ejercico12
// const http = require('http'), fs = require('fs');
// const port = process.argv[2];

// const serverHttp = http.createServer((req,res)=>{
//     if(req.method === 'POST'){
//         let body = '';
//         req.on('data',(data)=>{
//             body += data.toString();
//         });
//         req.on('end',()=>{
//             res.write(body.toUpperCase());
//             res.end();
//         });
//     }else{
//         res.write('Only recive POST method');
//         res.end();
//     }
// });
// serverHttp.listen(port);

//### ejercico12
const http = require('http'),
    url = require('url');
const port = process.argv[2];

const serverHttp = http.createServer((req, res) => {
    if (req.method === 'GET') {
        let parseURL = url.parse(req.url, true);
        let endPoint = parseURL.pathname;
        if (endPoint === '/api/parsetime') {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            // let date = parseURL.query.iso.split('T');
            // date = date[1].split(":")
            // let hours = date[0];
            // let minutes = date[1];
            // let seconds = date[2].split('.')[0];
            
            let date = new Date(parseURL.query.iso.toString());
            let timeJson = {hour:date.getHours(),minute:date.getMinutes(),second:date.getSeconds()}
            //datee.parseURL.query.iso.toISOString();
            
            res.write(JSON.stringify(timeJson));
        }
        if (endPoint === '/api/unixtime') {
            let date = new Date(parseURL.query.iso.toString());
            let timeJson = {unixtime:date.getTime()}
            res.write(JSON.stringify(timeJson));
        }
        res.end();
    } else {
        res.write('Only recive POST method');
        res.end();
    }
});
serverHttp.listen(port);