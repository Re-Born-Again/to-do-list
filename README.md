# 📌 To-Do List App (Node.js + Express + PostgreSQL)

A simple web-based To-Do List app built with **Express**, **EJS**, and **PostgreSQL** as the backend database. You can add, edit, and delete tasks easily through a minimal UI.

---

## 🚀 Features
- Add new to-do items
- Edit existing items inline
- Delete tasks with a checkbox
- Uses PostgreSQL for persistent storage
- EJS templating for dynamic rendering

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, EJS
- **Database**: PostgreSQL

---

## 📂 Folder Structure
```
to-do-list/
├── public/
│   ├── assets/
│       └── icons/
│           ├── check-solid.svg
│           └── pencil-solid.svg
│   └── styles/
│        └── main.css
├── views/
│   ├── index.ejs
│   └── partials/
│       └── header.ejs
├── index.js
├── queries.sql
└── README.md
```

---

## 🖥️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Re-Born-Again/to-do-list.git
cd to-do-list
```
### 2. Install dependencies

```bash
npm install
```

### 3. Set up PostgreSQL database

- Make sure PostgreSQL is running on your machine.
- Create a database:
```bash
createdb todolist
```
- Run the SQL script:
```bash
psql -d todolist -f queries.sql
```

### 4. Run the server

```bash
node index.js
```

### 5. Access to-do-list

- Open your browser and visit:
``` bash
http://localhost:3000
```
- Add, edit, or delete your tasks!
