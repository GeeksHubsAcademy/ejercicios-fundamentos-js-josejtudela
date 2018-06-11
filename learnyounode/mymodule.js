var fs = require('fs');


module.exports = function(files,extension,callback){ 
    fs.readdir(files,(err,data)=>{
        if(err) return callback(err)
        var ext = data.filter(file=>extension===file.split('.')[1]);
        //ext.forEach(e=>console.log(e));
        callback(null,ext);
    })
};