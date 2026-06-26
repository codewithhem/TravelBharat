![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Netlify](https://img.shields.io/badge/Frontend-Netlify-00C7B7?logo=netlify)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)

# 🌏 TravelBharat

TravelBharat is a Full Stack Tourism Website that helps users explore different Indian states, famous tourist destinations, local foods, culture, and travel information. The project is built using **React.js, Node.js, Express.js, and MongoDB Atlas**.

> **Project Status:** ✅ Live & Deployed

---

## 🔗 Live Project

### 🌐 Frontend (Netlify)

https://mytravelbharat.netlify.app/

### ⚙️ Backend (Render)

https://travelbharat-backend-k7q7.onrender.com/

---

## 🚀 Deployment

- **Frontend:** Netlify
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## 📌 Project Overview

TravelBharat is designed to promote tourism across India by providing information about all **28 Indian States**. Users can browse states, search destinations, explore famous places, learn about local culture, and discover popular foods.

The application follows a **Full Stack Architecture** where:

- React.js powers the frontend
- Node.js & Express.js provide REST APIs
- MongoDB Atlas stores tourism data
- Netlify hosts the frontend
- Render hosts the backend

---

## ✨ Features

### 👤 User Features

- Explore all 28 Indian States
- Search States by Name
- Filter States by Category
- View Detailed State Information
- Explore Famous Tourist Places
- Discover Popular Local Foods
- Learn About State Culture
- Responsive Design
- Contact Form
- MongoDB Database Integration

---

### 👨‍💼 Demo Admin Dashboard

- Dashboard Overview
- CRUD Operations Preview
- Future Updates Section
- Authentication Planned for Future Versions

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- HTML5
- CSS3
- JavaScript
- Vite

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- MongoDB Atlas
- Mongoose

### Deployment

- Netlify
- Render

### Tools

- Git
- GitHub
- VS Code
- Postman

---

## 📂 Project Structure

```bash
TravelBharat/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── styles/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation Guide

### Step 1: Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/TravelBharat.git
```

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 4: Create Environment Variables

Create a file named:

```bash
backend/.env
```

Add:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

### Step 5: Start Backend Server

```bash
npm start
```

### Step 6: Start Frontend

```bash
cd frontend
npm run dev
```---

## 🌐 API Endpoints

### Get All States

```http
GET /api/states
```

Returns information for all Indian states.

---

### Contact Form

```http
POST /api/contact
```

Stores user contact messages in the database.

---

### Health Check

```http
GET /
```

Checks whether the backend server is running successfully.

---

## 🗄️ Database

MongoDB Atlas is used to store:

- State Information
- Tourist Destinations
- Famous Foods
- Cultural Information
- Contact Form Messages

---

## 📸 Screenshots

> Screenshots will be added in future updates.

- 🏠 Home Page
- 🌍 States Page
- 📍 State Details Page
- ℹ️ About Page
- 📞 Contact Page
- 👨‍💼 Demo Admin Dashboard

---

## 📚 Learning Outcomes

Through this project I learned:

- Full Stack Web Development
- React.js Components & Hooks
- React Router DOM
- REST API Development
- Express.js Backend Development
- MongoDB Atlas Integration
- CRUD Operations
- API Fetching using Axios/Fetch
- Component-Based Architecture
- Responsive Web Design
- Git & GitHub Version Control
- Netlify & Render Deployment

---

## 🚀 Future Enhancements

- 🗺️ Interactive Maps Integration
- 🔐 JWT Authentication
- 👤 User Login & Registration
- ❤️ Wishlist / Favorite States
- ⭐ Reviews & Ratings
- 🌦️ Live Weather Information
- 📅 Trip Planner
- 🏨 Hotel & Restaurant Recommendations
- 🤖 AI Travel Assistant
- 📸 Multiple Images for Tourist Places

---

## 👨‍💼 Demo Admin Dashboard

The current Admin Dashboard is included as a **feature preview** to demonstrate the planned administration module. Secure authentication, role-based authorization, and advanced management features will be implemented in future versions.

---

## 👨‍💻 Author

**HEM SHUKLA**

MCA Student | Full Stack Developer

- GitHub: https://github.com/codewithhem
- LinkedIn: www.linkedin.com/in/hem-shukla
---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

If you'd like to improve this project:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Submit a Pull Request.

---

## 📄 License

This project is developed for **internship, learning, portfolio, and educational purposes**.

© 2026 TravelBharat. All Rights Reserved.

⭐ If you found this project useful, consider giving it a **Star** on GitHub.