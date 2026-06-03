# 🛍️ SNITCH

A modern full-stack shopping application built with the MERN stack. SNITCH offers a seamless shopping experience with secure authentication, product management, and a clean user interface.

---

## 🚀 Features

- 🔐 User authentication (JWT + Google OAuth via Passport.js)
- 📦 Product listing, search, and filtering
- 🛒 Add to cart and checkout flow
- 👤 User profile management
- ✅ Input validation with express-validator
- 🔒 Secure password hashing with bcrypt
- 📱 Responsive design

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS / CSS

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- Passport.js (Google OAuth 2.0)
- JWT Authentication
- bcrypt
- express-validator
- dotenv

---

## 📁 Project Structure

```
SNITCH/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
├── server/                 # Express backend
│   ├── config/
│   │   ├── db.js
│   │   └── passport.js
│   ├── controllers/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   ├── validators/
│   │   └── user.js
│   └── server.js
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Google OAuth credentials ([console.cloud.google.com](https://console.cloud.google.com))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/snitch.git
cd snitch
```

2. **Install backend dependencies**

```bash
cd server
npm install
```

3. **Install frontend dependencies**

```bash
cd ../client
npm install
```

4. **Set up environment variables**

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

5. **Run the app**

```bash
# Run backend (from server/)
npm run dev

# Run frontend (from client/)
npm run dev
```

App runs at `http://localhost:5173` (frontend) and `http://localhost:5000` (backend).

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port for the Express server |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login with email & password |
| GET | `/auth/google` | Login with Google |
| GET | `/auth/google/callback` | Google OAuth callback |

### Products
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Add a product (admin) |
| PUT | `/api/products/:id` | Update product (admin) |
| DELETE | `/api/products/:id` | Delete product (admin) |

### Cart
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/cart` | Get user cart |
| POST | `/api/cart` | Add item to cart |
| DELETE | `/api/cart/:id` | Remove item from cart |

---

## 🔒 Security

- Passwords hashed using **bcrypt** (salt rounds: 10)
- Auth protected with **JWT tokens**
- Input validated with **express-validator**
- Sensitive keys stored in **environment variables** (never committed)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)

---

> Built with ❤️ by [Your Name]
