import express from "express";
import Employee from '../models/employee.js'
let router=express.Router();

//URL:localhost:8080/emp/
//Method:GET
router.get("/",(req,resp)=>{

    resp.status(200).json({"msg":"Employee Root Request"})
})

//URL:localhost:8080/emp/read
//GET:GET
router.get("/read",  (req,resp)=>{
            let employees=  Employee.find();
            resp.status(200).json(employees)
})

export default router;