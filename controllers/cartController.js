import { userCarts, products } from "../models/storeData.js";

export const addToCart=(req,res)=>{
    const { userId, productId, quantity }=req.body;
    const product=products.find(p=>p.id===productId);
    if(!product){
        return res.status(404).json({
            success:false,
            message:"product not found"
        })
    }

    const cart=userCarts.get(userId) || [];
    const existing=cart.find(item=>item.productId===productId);
    if(existing){
        existing.quantity+=quantity;
    }
    else{
        cart.push({productId, quantity });
    }
   
    userCarts.set(userId,cart);

    return res.json({ success: true, cart: cart, userCarts:userCarts });
}