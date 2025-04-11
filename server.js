import express from 'express'

const app=express();

app.use(express.json());

import cartRoutes from './routes/cart.routes.js'
import checkoutRoutes from './routes/checkout.routes.js'

app.use("/api/cart", cartRoutes);
app.use("/api/cart", checkoutRoutes);

app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(1000,()=>{
    console.log("Express is running")
})