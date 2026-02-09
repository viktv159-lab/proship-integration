# Proship Easy 📦

**ส่งพัสดุง่ายๆ สำหรับทุกคน!**

A super simple Proship interface that even a 12-year-old can use.

## Features

- 📝 **สร้างออเดอร์** - Create shipping orders easily
- 📋 **ดูรายการ** - View all orders by status  
- 🖨️ **พิมพ์ใบปะหน้า** - Print shipping labels
- 🔍 **ค้นหาพัสดุ** - Track order status

## Setup

1. Go to [app.proship.co.th](https://app.proship.co.th) 
2. Navigate to Settings > API to get your API Key
3. Navigate to Settings > Shops to get your Shop ID
4. Enter both in the ⚙️ Settings of this app

## Tech

- Pure HTML/CSS/JavaScript
- Tailwind CSS (CDN)
- No build required!
- Hosted on Netlify

## API Endpoints Used

- `POST /orders/v1/orders` - Create order
- `GET /orders/v1/orders-v2` - List orders
- `GET /orders/v1/orders/{id}` - Get order details
- `POST /print/v1/print-label` - Print label

## Deploy

Just push to GitHub and connect to Netlify. That's it!

---

Built with 💜 by Bee
