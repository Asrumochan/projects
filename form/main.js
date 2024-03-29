import http from 'http'
import fs from 'fs'

const server = http.createServer((req,resp)=>{
    if (req.url==="/index") {
        fs.readFile("views/index.html", 'utf-8',(err,data)=>{
            if(err) throw err 

            //resp.writeHead(200,'OK','UTF-8');
            resp.setHeader("Content-Type", "text/html");
            resp.end(data)
        })
    }
})
server.listen(8182,"127.0.0.1",(err)=>{
    if(err) throw err 
    console.log(`Server running on : http://${"127.0.0.1"}:${8182}/index`)
})

// const submit=Document.getElementById('submit')