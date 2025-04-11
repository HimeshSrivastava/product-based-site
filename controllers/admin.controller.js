import { store } from "../models/storeData.js"
import { generateDiscountCode } from "../Utils/generateDiscountCode.js"


export const adminGeneratedDiscount=(req,res)=>{
    if(store.orderCount>0 && store.orderCount%store.N===0){
        const code=generateDiscountCode();
        store.discountCodes.push({
            code,
            used:false,
            discountPercent:10,
        });
        return res.json({ message: "Discount code generated", code });
    }
    else{
        const orderLeft=store.N-(store.orderCount%store.N);
        return res.status(400).json({
            message: `Not eligible yet. Discount code will be available in ${orderLeft} orders.`,
          });
    }
}


export const adminStatics=(req,res)=>{
    res.json({
        itemsSold: store.stats.itemsSold,
        totalAmount: store.stats.totalAmount,
        totalDiscountGiven: store.stats.discountAmount,
        discountCodes: store.discountCodes,
      });
}