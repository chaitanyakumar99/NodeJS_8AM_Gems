import express from 'express'
let router= express.Router();
/*
URL: http://localhost:8080/user/read
Method:GET
Access Type:Public 
Required Field:None
*/
router.get("/read",(req,resp)=>{
    resp.send("user Router - GET Request")
})

/*
URL: http://localhost:8080/user/create
Method:POST
Access Type:Public 
Required Field:None
*/
router.post("/create",(req,resp)=>{
    resp.send("User Router POST Request")
})

export default router;