# TravelBharat

TravelBharat is a Full Stack Tourism Website that helps users explore different Indian states, famous tourist destinations, local foods, culture, and travel information. The project is built using React.js, Node.js, Express.js, and MongoDB Atlas.

---

## 📌 Project Overview

TravelBharat is designed to promote tourism across India by providing information about all 28 Indian states. Users can browse states, search destinations, explore famous places, learn about local culture, and discover popular foods.

The project uses a modern MERN Stack architecture where React handles the frontend, Node.js and Express manage backend APIs, and MongoDB stores all state-related data.

---

## ✨ Features

### User Features

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

### Admin Features (Future Scope)

- Add New States
- Update State Information
- Delete States
- Manage Tourist Places
- Manage Foods
- Dashboard Analytics

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- CSS3
- Vite

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Tools

- Git
- GitHub
- VS Code

---

## 📂 Project Structure

```bash
travel-bharat/
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
git clone https://github.com/yourusername/TravelBharat.git
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
npm run dev
```

### Step 6: Start Frontend

```bash
cd frontend
npm run dev
```

---

## 🌐 API Endpoints

### Get All States

```http
GET /api/states
```

### Contact Form

```http
POST /api/contact
```

### Health Check

```http
GET /
```

---

## 🗄️ Database

MongoDB Atlas is used to store:

- State Information
- Tourist Places
- Local Foods
- Cultural Information
- Contact Messages

---

## 📸 Screenshots

### Home Page

- Hero Banner
- Featured States
- Popular Destinations

### States Page

- Search Functionality
- Category Filters
- State Cards

### State Details Page

- Culture
- Foods
- Tourist Places
- Related States

### Contact Page

- Contact Form
- User Message Submission

---

## 🎯 Learning Outcomes

Through this project I learned:

- React.js Fundamentals
- React Router DOM
- State Management using Hooks
- REST APIs
- Express.js Backend Development
- MongoDB Atlas Integration
- CR Operations
- API Fetching
- Component-Based Architecture
- Full Stack Development

---

## 🔮 Future Improvements

- User Authentication
- Admin Dashboard
- Favorite States Feature
- Dark Mode
- AI Travel Recommendations
- Image Upload Support
- Hotel Integration
- Weather Information
- Travel Cost Calculator
- Deployment

---

## 👨‍💻 Author

**HEM SHUKLA**

MCA Student

TravelBharat Full Stack Project

---

## 📄 License

This project is created for educational and learning purposes.

© 2026 TravelBharat. All Rights Reserved.