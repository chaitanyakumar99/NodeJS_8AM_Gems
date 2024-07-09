const http=require('http')
const dotenv=require('dotenv')

dotenv.config({path:'./config/dev.env'})
let port = process.env.PORT 
let host_Name=process.env.HOST_NAME
console.log(port)
console.log(host_Name)