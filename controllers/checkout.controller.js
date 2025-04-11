import { products, store, userCarts } from "../models/storeData.js";
import { generateDiscountCode } from "../Utils/generateDiscountCode.js";

export const checkout=(req,res)=>{
    const {userId,discountCode}=req.body;

    const CartItems=userCarts.get(userId);
    console.log(CartItems);

    if(!CartItems){
        res.status(401).json("cart is empty");
    }
    let total=0;
    for(let i=0;i<CartItems.length;i++){
      const product=products.find((p)=>p.id===CartItems[i].productId);
      if(product){
        total+= CartItems[i].quantity * product.price;
      }
    }

    
    let discountApplied = 0;

    if(discountCode){
        let codeObj=store.discountCodes.find(dc=>dc.code===discountCode && !dc.used);
        if(!codeObj){
            return res.status(400).json({ message: "Invalid or already used discount code." });
        }
        discountApplied= total * (codeObj.discountPercent/100);
        total-=discountApplied;
        codeObj.used=true;
    }

    const orders={
        userId,
        CartItems,
        discountApplied,
        total,
        timestamp:new Date()
    }

    store.orders.push(orders);
    store.user.push(orders);
    store.stats.itemsSold+=CartItems.length;
    store.stats.totalAmount+=total;
    store.stats.discountAmount+=discountApplied;
    store.orderCount += 1;

    userCarts[userId]=[];
  if(store.orderCount%store.N===0){
    const newCode=generateDiscountCode();
    store.discountCodes.push({
        code:newCode,
        used:false,
        discountPercent: 10
    });
  }
  let checkDiscountIsValid=store?.discountCodes;
  console.log(total);
  res.json({
    message: "Checkout successful",
    orders,
    total,
    checkDiscountIsValid,
    nextDiscountAvailableOn: store.orderCount % store.N === 0 ? 'Already generated' : `${store.N - (store.orderCount % store.N)} orders later`
  });
}