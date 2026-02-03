# 🚀 Projects Portfolio – Vikash Kumar

This repository contains my major web development projects built using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB**.  
These projects demonstrate my understanding of **full-stack development, MVC architecture, authentication, and interactive UI design**.

---

# 🏡 Airbnb-Style Rental Booking Web Application (Project-1)

A full-stack **Airbnb-style rental booking web application** developed using **Node.js, Express.js, MongoDB, and EJS**.  
The project focuses on real-world backend concepts such as **CRUD operations, authentication, authorization, and MVC architecture**.

---

## 📌 Project Overview

This application allows users to browse rental properties, create their own listings, and manage them securely.  
It simulates the core functionality of Airbnb and demonstrates scalable web application design.

---

## 🚀 Features

🔐 Authentication & Authorization  
- User registration and login system  
- Session-based authentication  
- Middleware-protected routes  
- Only listing owners can edit or delete their properties  

🏠 Property Listings  
- Create, read, update, and delete listings  
- Form validation for secure input handling  
- Dynamic rendering of listing details  

🎨 User Interface  
- Responsive UI using CSS  
- Server-side rendering with EJS templates  
- Clean and user-friendly design  

🧩 Architecture  
- MVC (Model-View-Controller) architecture  
- Modular and maintainable codebase  

---

## 🛠️ Technologies Used

Frontend: HTML, CSS, EJS  
Backend: Node.js, Express.js  
Database: MongoDB, Mongoose  
Tools: Git, GitHub  

---

## 📂 Project Structure

Airbnb-Clone/  
models/  
routes/  
controllers/  
views/  
public/  
middleware/  
app.js  
package.json  

---

## ⚙️ Installation & Setup

Clone the repository  
git clone https://github.com/your-username/airbnb-clone.git  

Install dependencies  
npm install  

Start the server  
node app.js  

Open browser  
http://localhost:3000  

---

🧭 How to Use the App

step-1:Register / Login

Create an account and log in to access protected features.

step-2:Browse Listings

View all available rental properties on the homepage.

Open a listing to see complete details.

step-3:Create a Listing

Click on Add New Listing after logging in.

Fill in property details and submit the form.

step-4:Edit or Delete Listings

Only the owner of a listing can modify or delete it.

step-5:Secure Access

Unauthorized users cannot access protected routes.

Middleware ensures proper access control.


🔗 API Routes Overview
User Routes

POST /register → Register a new user

POST /login → Login user

GET /logout → Logout user

Listing Routes

GET /listings → View all listings

GET /listings/:id → View listing details

POST /listings → Create a new listing

PUT /listings/:id → Update a listing

DELETE /listings/:id → Delete a listing

🚀 Future Enhancements

Image upload using Cloudinary

Booking and reservation system

User reviews and ratings

Search and filter functionality

Payment gateway integration

Admin dashboard

📚 Learning Outcomes

End-to-end full-stack web development

Strong understanding of Express routing & middleware

Practical experience with MongoDB schema design

Authentication and authorization implementation

MVC architecture for scalable applications
