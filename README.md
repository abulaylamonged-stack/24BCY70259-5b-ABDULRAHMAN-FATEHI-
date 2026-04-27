# Student Management System (MVC)

A full-stack **Student Management System** built using the **MVC (Model-View-Controller)** architecture. This project demonstrates how to structure a Node.js application with proper separation of concerns, RESTful routing, validation, and a modern UI.

---

## Features

* Add new students
* View all students
* Edit student details
* Delete students
* Input validation middleware
* Responsive UI using Bootstrap
* MVC architecture (clean and scalable)
* MongoDB Atlas cloud database integration

---

## Project Structure (MVC)

```
student-mvc/
│
├── models/         # Database schemas
├── views/          # EJS templates (UI)
├── controllers/    # Business logic
├── routes/         # Application routes
├── middleware/     # Custom middleware (validation)
├── config/         # Database connection
├── public/         # Static files (CSS, JS)
│
├── app.js          # Main server file
├── package.json
└── README.md
```

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, Bootstrap
* **Database:** MongoDB Atlas
* **Architecture:** MVC Pattern

---

## Installation & Setup

### 1. Clone the Repository

```
git clone https://github.com/abulaylamonged-stack/24BCY70259-5b-ABDULRAHMAN-FATEHI-.git
cd abulaylamonged-stack/24BCY70259-5b-ABDULRAHMAN-FATEHI-
```

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add:

```

---

### 4. Run the Application

```
node app.js
```

Or (recommended):

```
npx nodemon app.js
```

---

### 5. Open in Browser

```
http://localhost:3000
```

---

## How It Works

* **Model:** Defines the student schema using Mongoose
* **View:** EJS templates render dynamic HTML pages
* **Controller:** Handles logic for CRUD operations
* **Routes:** Connect URLs to controller functions
* **Middleware:** Validates user input before processing

---

## 📷 Screenshots

> Add screenshots of your UI here (optional but recommended)

---

## Future Improvements

* User authentication (login/signup)
* Dark mode UI
* Search and filter students
* Dashboard with analytics
* Deploy to cloud (Render / Vercel)

---

## Important Notes

* Do **not** upload your `.env` file to GitHub
* Keep your MongoDB credentials secure
* Use `.gitignore` to exclude sensitive files

---

## Author

Your Name
GitHub: https://github.com/abulaylamonged-stack/24BCY70259-5b-ABDULRAHMAN-FATEHI-.git

---

## License

This project is for educational purposes.
