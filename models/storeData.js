export const products = [
    { id: 1, name: "Laptop", price: 59999 },
    { id: 2, name: "Headphones", price: 2999 },
    { id: 3, name: "Smartphone", price: 19999 },
    { id: 4, name: "Keyboard", price: 999 },
    { id: 5, name: "Mouse", price: 499 },
    { id: 6, name: "Tablet", price: 14999 },
    { id: 7, name: "Smartwatch", price: 6999 },
    { id: 8, name: "Bluetooth Speaker", price: 2499 },
    { id: 9, name: "Monitor", price: 10999 },
    { id: 10, name: "Gaming Chair", price: 12999 },
    { id: 11, name: "External Hard Drive", price: 3999 },
    { id: 12, name: "Webcam", price: 1599 },
    { id: 13, name: "USB-C Hub", price: 899 },
    { id: 14, name: "Wireless Charger", price: 1299 },
    { id: 15, name: "Graphics Tablet", price: 3499 },
  ];
  
  
 
  
  export const userCarts = new Map();

 export const store = {
    user:[],
    orders: [], 
    discountCodes: [], 
    stats: {
      itemsSold: 0,
      totalAmount: 0,
      discountAmount: 0
    },
    N: 3, 
    orderCount: 0
  }
  