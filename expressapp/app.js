import express from 'express'
import path from 'path'
let app=express()
/*
    API URL: http://localhost:8080/
    Method Type:GET
    Required Feilds:None
*/
app.get("/",(req,resp)=>{
    //resp.send("Root Request")
    resp.sendFile(path.join(process.cwd(),"staticweb",'index.html'),(err)=>{
        if(err) throw err 
    })
})
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"staticweb",'about.html'),(err)=>{
        if(err) throw err
    })
})
app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`Express Server Running...`)
})