const http=require("http")
const fs=require("fs")

const server=http.createServer(function (request,response) {	
        response.writeHead(200, {'Content-Type': 'text/html'});	
        fs.createReadStream(process.argv[3]).pipe(response)	
     
       
})
server.listen(process.argv[2])