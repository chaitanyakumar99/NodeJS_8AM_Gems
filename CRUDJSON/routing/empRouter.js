import express from 'express'
import fs from 'fs'
let router = express.Router()

router.post("/create",(req,resp)=>{})
/*
    usage:  Get All employee - Reat Operation
    URL:  http://127.0.0.1:8080/emp/read/
    Method:GET
    Access Type:Public
    Req Fields:None
*/
router.get("/read",async(req,resp)=>{
    let employees= await getEmployees()
    //console.log("Type of:",typeof employees)
    resp.status(200).json(employees);
})
router.put("/update/:id",(req,resp)=>{})
router.delete("/delete/:id",(req,resp)=>{})

let saveEmployees=(employees)=>{}
let getEmployees=()=>{
    
    console.log("Inside getEmployees method")
    let employees=fs.readFileSync('data.json','utf-8');
    return JSON.parse(employees);
}
export default router;