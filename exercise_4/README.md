# 💰 Personal Finance Tracker API

A secure RESTful API for managing income, expenses, and monthly financial summaries.  
Built with **Node.js, Express, MongoDB, JWT authentication, Zod validation, and Swagger documentation**.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- Register & Login with JWT  
- Protected routes using middleware  
- Role-based access (user/admin)  

### 💸 Transactions
- Create new transactions (income/expense)  
- Update and delete transactions  
- Get all user transactions  
- Monthly summary (income, expense, balance)  
- Zod validation included  

### ☁️ File Uploads
- Upload profile picture using Cloudinary  
- Multer middleware for handling file uploads  

### 📚 API Documentation
- Swagger UI integrated  
- Auto-generated docs for all routes  

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js / Express | Backend server |
| MongoDB / Mongoose | Database |
| JWT | Authentication |
| Zod | Request validation |
| Swagger | API documentation |
| Cloudinary + Multer | File uploads |
| bcryptjs | Password hashing |

---

## 📂 Project Structure

project/
├── controllers/
│   ├── authController.js
│   ├── transactionsController.js
│   └── uploadController.js
│
├── middlewares/
│   ├── protect.js
│   ├── authorize.js
│   ├── validate.js
│   └── upload.js
│
├── models/
│   ├── User.js
│   └── Transaction.js
│
├── routes/
│   ├── authRoutes.js
│   ├── transactionRoutes.js
│   ├── uploadRoutes.js
│   └── adminRoutes.js
│
├── validation/
│   └── transactionSchema.js
│
├── utils/
│   └── generateToken.js
│
├── swagger/
│   └── swagger.js
│
├── .env
├── package.json
├── index.js
└── README.md



---





## 🔧 Setup Instructions

1️⃣ **Clone the repository**
```bash
git clone https://github.com/yourusername/finance-tracker-api.git
cd finance-tracker-api

npm install

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
PORT=4000


npm run start


http://localhost:4000


http://localhost:4000/docs

```




---

### 🔐 Authentication Routes

| Action   | Method | Endpoint                    |
| -------- | ------ | --------------------------- |
| Register | POST   | `/auth/register`            |
| Login    | POST   | `/auth/login`               |
| Profile  | GET    | `/auth/profile` (protected) |





### 💸 Transactions Routes
| Method | Endpoint                        | Description             |
| ------ | ------------------------------- | ----------------------- |
| POST   | `/transactions`                 | Create transaction      |
| GET    | `/transactions`                 | Get all my transactions |
| PUT    | `/transactions/:id`             | Update transaction      |
| DELETE | `/transactions/:id`             | Delete transaction      |
| GET    | `/transactions/monthly-summary` | Monthly summary         |




### ☁️ Upload Route
| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| POST   | `/upload/profile-picture` | Upload profile photo |



---


### 🛡 Admin Route
| Method | Endpoint       | Description                 |
| ------ | -------------- | --------------------------- |
| GET    | `/admin/users` | View all users (admin only) |


___


### 🧪 Validation
All transactions are validated using Zod:

 - title (string, required)

 - amount (number, required)

 - type (income/expense)

 - category (Food, Salary, Rent, etc.)

 - date (ISO date string)




 ### 🤝 Contribution
Pull requests are welcome!
For major changes, please open an issue first.


### 📝 License
MIT License © 2025


