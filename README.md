# 📦 Inventory Search & Management System

## 🚀 Overview

This project is a full-stack application that allows users to search inventory items and manage supplier-based inventory data.

It consists of:

* 🔍 Search Feature (Assignment A)
* 🗄️ Database & APIs (Assignment B)

---

## 🔧 Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** SQLite

---

## 🔍 Features

### 1. Inventory Search

* Search products by name (partial match)
* Filter by category
* Filter by price range
* Case-insensitive search
* Handles:

  * Empty query
  * Invalid price range
  * No results

---

### 2. Database Management

#### Tables:

**Suppliers**

* id
* name
* city

**Inventory**

* id
* supplier_id
* product_name
* quantity
* price

#### APIs:

* POST /supplier → Add supplier
* POST /inventory → Add inventory item
* GET /inventory → Get grouped inventory summary

---

## 📊 Special Query

Returns inventory grouped by supplier and sorted by total value:

total_value = quantity × price

---

## 🧠 Search Logic

* Data stored in in-memory array
* Filters applied sequentially:

  * Name → Category → Price
* Uses `.toLowerCase()` for case-insensitive matching

---

## ⚡ Performance Improvement (Future)

* Add database indexing
* Implement pagination
* Use debouncing for search input
* Move search to database instead of in-memory

---

## 🧠 Why SQL?

* Structured relational data
* Clear relationship (supplier → inventory)
* Efficient aggregation using JOIN and SUM

---

## 📦 Dataset

* Generated ~100 records programmatically
* Simulates real-world inventory scale

---

## ▶️ How to Run

### Backend

cd backend
npm install
npm run dev

### Frontend

cd frontend
npm install
npm start

---

## 📸 Screenshots


<img width="1811" height="853" alt="Screenshot 2026-04-07 115846" src="https://github.com/user-attachments/assets/ec187d4d-928c-4582-866e-886e64f2d338" />

---

## 🎯 Conclusion

This project demonstrates full-stack development skills including API design, database modeling, filtering logic, and UI development.
