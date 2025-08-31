# RESTful API – User Management CRUD

## 📌 Objective

This project is a **RESTful API built with Node.js and Express** to manage a list of users.
It demonstrates routing, middleware, error handling, and CRUD operations with an **in-memory data source**.

---

## 🗂 Project Structure

```
rest-api-assignment/
│── models/
│    └── userModel.js        # In-memory user data
│── controllers/
│    └── userController.js   # Route logic
│── routes/
│    └── userRoutes.js       # API routes
│── middleware/
│    ├── logger.js           # Logs requests
│    ├── validateUser.js     # Validates user input
│    └── errorHandler.js     # Handles errors globally
│── server.js                # Entry point
│── package.json
```

---

## ⚙️ Installation & Setup

1. Clone or extract the project.
  
    ```bash
    git clone https://github.com/nishandutta/API-CRUD.git
    cd shoppyglobe
     ```

2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   node server.js
   ```
4. Server runs at:

   ```
   http://localhost:5555
   ```

---

## 📌 API Endpoints

### 1. Get all users

```http
GET /users
```

**Response (200):**

```json
[
  {
    "id": "1",
    "firstName": "Anshika",
    "lastName": "Agarwal",
    "hobby": "Teaching"
  }
]
```

---

### 2. Get user by ID

```http
GET /users/:id
```

**Example:** `/users/1`

* ✅ Success → returns user
* ❌ Not found → `404 { "error": "User not found" }`

---

### 3. Add a new user

```http
POST /user
```

**Request Body:**

```json
{
  "id": "2",
  "firstName": "Nishan",
  "lastName": "Dutta",
  "hobby": "Coding"
}
```

* ✅ Success → `201 Created` with user JSON
* ❌ Missing fields → `400 { "error": "id, firstName, lastName, and hobby are required" }`

---

### 4. Update existing user

```http
PUT /user/:id
```

**Request Body (any field optional):**

```json
{
  "firstName": "UpdatedName"
}
```

* ✅ Success → updated user JSON
* ❌ Not found → `404 { "error": "User not found" }`

---

### 5. Delete user by ID

```http
DELETE /user/:id
```

**Response (200):**

```json
{
  "message": "User deleted successfully",
  "user": {
    "id": "1",
    "firstName": "Anshika",
    "lastName": "Agarwal",
    "hobby": "Teaching"
  }
}
```

* ❌ Invalid ID → `404 { "error": "User not found" }`

---

## 🛠 Middleware

* **Logger:** Logs method, URL, and status code.
* **Validation:** Ensures `id, firstName, lastName, hobby` exist for POST/PUT.
* **Error Handler:** Centralized error responses with proper status codes.

---

## 🧪 Testing Instructions

Use  **ThunderClient (VS Code)** to test:

1. `GET /users` → all users
2. `GET /users/:id` → single user
3. `POST /user` → create user 
4. `PUT /user/:id` → update user 
5. `DELETE /user/:id` → delete user 
