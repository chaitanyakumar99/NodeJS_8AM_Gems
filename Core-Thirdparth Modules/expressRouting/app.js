import express from 'express'
import userRouter from './routing/userRouter.js'
import prodRouter from './routing/productRouter.js'
import morgan from 'morgan'

//create express app 
let app = express()
app.use(morgan('tiny'))

app.use("/user",userRouter)
app.use("/product",prodRouter)

app.listen(8080,'127.0.0.1',(err)=>{
    console.log(`Server is Running`)
})