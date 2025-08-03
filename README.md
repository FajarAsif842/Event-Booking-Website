#  Event Booking Website
##  Project Objective

The **Event Booking Website** is designed to help users browse and register for different types of upcoming events such as webinars, workshops, and orientation sessions.

Users can:
-  View a list of all available upcoming events  
-  Click on any event to view full details  
-  Register for an event via a simple form  
-  See a confirmation message/page after successful registration

---

##  Technologies Used

This project is built using the **MERN Stack** with React Bootstrap for UI components.

### Frontend:
- React.js  
- React Bootstrap  
- Axios  

### Backend:
- Node.js  
- Express.js  
- MongoDB (with Mongoose ODM)  

### Tools & Environment:
- Visual Studio Code  
- Git & GitHub  
- MongoDB Atlas / Compass  
- Postman (for API testing)

---

## How to Run the Project Locally

### 1Clone the Repository

git clone https://github.com/FajarAsif842/Event-Booking-Website.git
cd Event-Booking-Website
2️. Backend Setup

cd backend
npm install
Create a .env file in the backend/ directory with the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the backend server:
npm run dev

3️.Frontend Setup (React + Vite)

Open a new terminal, then:

cd frontend
npm install
npm run dev
Vite will show a local dev server URL like:

http://localhost:5173/
Ensure:
Backend is running on port 5000

Frontend is running on port 5173

API endpoints are correctly connected using Axios base URL (http://localhost:5000/api/...)


