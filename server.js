import express from 'express'

const app=express();

app.use(express.json());

import cartRoutes from './routes/cartRoutes.js'

app.use("/api/cart", cartRoutes);

app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(1000,()=>{
    console.log("Express is running")
})