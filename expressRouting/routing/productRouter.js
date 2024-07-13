import express from 'express'
let router = express.Router()

/*
    USAGE:update product
    URL:http:localhost:8080/product/update
    Method:PUT
    Access type:Public
    Req Fields: None
*/

router.put("/update",(req,resp)=>{
    resp.send("Product Router - PUT Req")
})

/*
    USAGE:delete product
    URL: http:localhost:8080/product/del
    Method:DELETE
    Access type:Public
    Req Fields: None
*/
router.delete("/del",(req,resp)=>{
    resp.send("Product Router - Delete Req")
})

export default router