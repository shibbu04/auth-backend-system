# 🔐 Auth Backend – Node.js + TypeScript + MySQL

Secure and production-ready authentication system with JWT, role-based access, and MySQL, ready to deploy on Railway.

---

## 🚀 Live URL

👉 [https://auth-backend-system.up.railway.app](#)


---

## ⚙️ Tech Stack

* **Backend**: Node.js, Express.js, TypeScript
* **ORM**: Prisma
* **Database**: MySQL (via Railway)
* **Auth**: JWT + bcrypt
* **Validation**: Zod
* **Security**: Helmet, Rate Limit, CORS

---

## 📁 Project Structure

```
/src
 ┣ /controllers
 ┣ /middleware
 ┣ /routes
 ┣ /services
 ┗ app.ts
prisma/schema.prisma
```

---

## 🔧 Local Setup

1. **Clone the repo**

```bash
git clone https://github.com/shibbu04/auth-backend-system
cd auth-backend-system
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up `.env`**

```env
DATABASE_URL=your_mysql_url
JWT_SECRET=your_secret
PORT=3000
```

4. **Set up DB (using Prisma)**

```bash
npm run db:generate
npm run db:push
```

5. **Run locally**

```bash
npm run dev
```

---

## 🚀 Deploy on Railway

1. Push your code to GitHub

2. Go to [Railway](https://railway.app) → New Project

3. Add:

   * **MySQL Plugin**
   * **GitHub Repo** (select this project)

4. In Railway Variables tab, add:

```env
DATABASE_URL=<from MySQL plugin>
JWT_SECRET=your_secret
```

5. Add these scripts in `package.json` (if missing):

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/app.js",
  "postinstall": "prisma generate"
}
```

6. Railway auto-builds and deploys your app 🚀

---

## 🔑 Core Auth APIs

* **POST /auth/signup** → Register user
* **POST /auth/login** → Login & get JWT
* **GET /auth/me** → Get current user (Protected)
* **POST /auth/request-password-reset** → Email-based reset
* **POST /auth/reset-password** → Set new password
* **GET /auth/admin/users** → (Admin only route)

Use Postman or `curl` to test routes.

---

## ✅ Sample `.env`

```env
DATABASE_URL="mysql://user:pass@host:port/db"
JWT_SECRET="your-secret"
PORT=3000
```

---

## 🛡️ Security Notes

* Use strong secrets in production
* Never push `.env` to GitHub
* Enable HTTPS on frontend
* Rate limiting enabled
