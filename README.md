# Student-performance-analyzer-system

## Overview

The **Student Performance Analyzer System** is a web-based application designed to evaluate and classify student performance based on key inputs such as marks, attendance, and other academic parameters. The system provides real-time analysis results like **Good, Average, or Poor**, helping users understand performance levels effectively.

---

## Objective

* To build a system that analyzes student performance
* To provide meaningful insights based on input data
* To create a user-friendly interface for easy interaction
* To integrate frontend, backend, database, and analysis modules

---

## Features

* User Authentication (Login & Signup)
* Student Data Input (marks, attendance, etc.)
* Real-time Performance Analysis
* Result Display (Good / Average / Poor)
* Clean and Responsive User Interface

---

## Project Structure

```
student-performance-analyzer/
│
├── frontend/
│   ├── index.html        # Login page
│   ├── signup.html       # Signup page
│   ├── dashboard.html    # Input form page
│   ├── result.html       # Result display page
│   ├── style.css         # Styling
│   └── script.js         # Frontend logic
│
├── backend/
│   ├── app.py            # Main backend server
│   └── routes.py         # API routes
│
├── database/
│   ├── db.py             # Database connection
│   └── schema.sql        # Database schema
│
├── analysis/
│   └── analysis.py       # Performance logic
│
└── README.md
```

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Python (Flask)
* **Database:** SQLite
* **Tools:** VS Code

---

## How the System Works

1. User logs in or signs up
2. User enters student data in dashboard
3. Data is sent to backend
4. Backend processes data using analysis module
5. Result is generated (Good / Average / Poor)
6. Result is displayed on the result page

---

## How to Run the Project

### Step 1: Clone the Repository

```bash
git clone <your-repo-link>
cd student-performance-analyzer
```

---

### Step 2: Install Backend Dependencies

```bash
pip install flask
```

---

### Step 3: Setup Database

* Open `database/schema.sql`
* Run the SQL file in SQLite
* This will create required tables

---

### Step 4: Run Backend Server

```bash
cd backend
python app.py
```

---

### Step 5: Run Frontend

* Open `frontend/index.html` in your browser
  OR
* Use Live Server in VS Code

---

## Example Flow

```
User → Login → Dashboard → Enter Data → Click Analyze → View Result
```

---

## Example Output

```
Performance: Good
```

---

## Role Distribution

* **Person 1 (Frontend):** UI design, pages, user interaction
* **Person 2 (Backend):** API handling, system control
* **Person 3 (Database):** Data storage and management
* **Person 4 (Analysis):** Performance evaluation logic

---

## Key Learnings

* Frontend development using HTML, CSS, JavaScript
* Building multi-page web applications
* Handling user input and validation
* Understanding full-stack system architecture
* Integrating frontend with backend

---

## Future Improvements

* Add charts and graphs for better visualization
* Add real-time analytics dashboard
* Enhance authentication and security
* Deploy project online

---

## Author

Nandini Soota
