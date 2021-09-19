const fs=require("fs")
const path = require("path")
fs.readdir(process.argv[2],function callback(err,buffer) {
  if(err){
     return console.log(err.stack())
  }    

  for (let i = 0; i < buffer.length; i++) {
      if(path.extname(buffer[i])==`.${process.argv[3]}`) {console.log(buffer[i])}
      
  }
  
})