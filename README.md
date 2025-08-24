
🍲 Recipe Share App

    A full-stack web app to share, rate, and comment on recipes. Users can upload images, save their favorites, and explore delicious dishes from others.

✨ Built with React, Node.js, Express, and MongoDB.

🚀 Features
    Core Features

    ✅ Create, view, update, and delete recipes

    ✅ Upload recipe images

    ✅ Detailed recipe page with ingredients & instructions

    ✅ User authentication (JWT)

Intermediate Features

    💬 Comment system on each recipe

    ⭐ Star rating (1-5 stars)

    ❤️ Favorite recipes (“My Favorites” page)

Advanced Features

    🥗 Categories: Dessert, Dinner, Vegan, etc.

    ⚡ Smooth animations and responsive design

    🏷️ Filter recipes by category

🖥️ Frontend (React)
    Pages

    Home Page – Browse all recipes

    Recipe Detail – View recipe, comments, rating, favorite button

    New Recipe – Add a recipe with photo upload

    Login / Signup – Secure authentication

    My Favorites – View saved recipes

Setup
    cd src
    install npm
    npm start
    Frontend runs at: http://localhost:3000

🗄️ Backend (Node.js + Express + MongoDB)

    | Method | Endpoint                   | Description           |
    | ------ | -------------------------- | --------------------- |
    | POST   | /api/auth/signup           | Create user           |
    | POST   | /api/auth/login            | Login user            |
    | GET    | /api/recipes               | List all recipes      |
    | GET    | /api/recipes/\:id          | Recipe details        |
    | POST   | /api/recipes               | Create recipe         |
    | PUT    | /api/recipes/\:id          | Update recipe         |
    | DELETE | /api/recipes/\:id          | Delete recipe         |
    | POST   | /api/recipes/\:id/comments | Add comment           |
    | POST   | /api/recipes/\:id/rate     | Rate recipe           |
    | POST   | /api/recipes/\:id/favorite | Favorite / unfavorite |

Setup
    cd backend
    npm install

Create .env:
  PORT=5000
  MONGO_URI=mongodb://127.0.0.1:27017/recipeshare
  JWT_SECRET=mysecretkey123
 
Run backend:
    npm start

Backend runs at: http://localhost:5000/api/recipes

⚙️ Technologies Used

    Frontend: React, Axios, React Router DOM

    Backend: Node.js, Express, MongoDB, Mongoose, Multer

    Authentication: JWT

    Styling: CSS 

📝 Instructions

    Start backend server first (npm start)

    Start frontend (npm start)

    Signup / Login to access full features

    Add recipes, comment, rate, and favorite


👩‍💻 VAISHNAVI NAIK..