import express from "express";
import EmployeeModel from '../models/employee.js'
let router=express.Router();

//URL:localhost:8080/emp/
//Method:GET
router.get("/",(req,resp)=>{

    resp.status(200).json({"msg":"Employee Root Request"})
})

//URL:localhost:8080/emp/read
//GET:GET
router.get("/read",  async(req,resp)=>{
    try{
        let employees= await EmployeeModel.find();
        return resp.status(200).json(employees);
    }
    catch(err){
        return resp.status(401).json({"msg":err.message})
    }
   
})
/*
    Usage: create new employee
    
*/
export default router;