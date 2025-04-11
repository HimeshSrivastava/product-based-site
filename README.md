# 🛒 E-Commerce Store Backend (Assignment)
This project is a simplified e-commerce backend built using Node.js. Clients can add items to their cart and place orders. Every **nth order** (where _n = 3 by default_) receives a **10% discount coupon**, which can be applied during checkout.

## ✅ Features

- Add items to cart
- Checkout functionality with optional discount code
- Auto-generate discount code every nth order
- Admin APIs:
  - Generate new discount code
  - View stats like total items sold, total revenue, discounts used, etc.

---

## 📦 Technologies Used

- Node.js
- Express.js
- In-memory data storage (no database used)
- Postman for testing

---

## 📚 API Documentation

### 1. **Add to Cart**

**POST** `/cart/add`

**Body:**
```json
{
  "userId": "user1",
  "productId": 6,
  "quantity": 2
}
```
**POST** `/cart/checkout`

**Body:**
```json
{
  "userId": "user1",
  "discountCode": "ABC123"  // (optional)
}

```

**POST** `/admin/coupen`

**GET** `/admin/stats`

