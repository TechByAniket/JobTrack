# 💼 JobTrack - Job Application Tracker

 [Video Demo](https://drive.google.com/file/d/1j2AGB7m63yeut2v0VJaCxtn8I-Iw-Ujb/view?usp=sharing)
 
A modern, fast, and responsive full-stack web application designed to help job seekers track, organize, and manage their job applications throughout the recruitment lifecycle.

---

## ✨ Features

- **📊 Dynamic Dashboard Analytics**: Real-time overview cards tracking total applications, active applications, scheduled interviews, and received offers.
- **📝 Full CRUD Application Management**:
  - Add new job applications with comprehensive details (Company, Role, Location, Job Type, Status, Application Date, Job URL).
  - Edit and update application details in-place.
  - Delete applications with confirmation safety.
- **🔍 Instant Search & Status Filtering**: Real-time multi-field search (by company name or job title) paired with status filter dropdowns.
- **🎨 Polished & Compact UI**:
  - Clean top navigation bar with user profile.
  - Compact, modern typography and refined spacing.
  - Color-coded status badges (Applied, Interview, Offer, Rejected, Withdrawn).
- **📱 Fully Responsive Design**: Seamless adaptation across mobile, tablet, and desktop screens with horizontal and vertical scrolling controls and sticky table headers.
- **⚡ Zero Layout Shift**: Anti-jitter layout stabilization preventing screen shaking during filtering or empty state transitions.
- **🔔 Toast Notifications**: Contextual notifications for successful creation, updates, and deletions.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Utilities**: `dotenv`, `cors`, `nodemon`

---

## 📁 Project Structure

```text
JobTrack/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                 # MongoDB connection logic
│   │   ├── controllers/
│   │   │   └── applicationController.js # Route controller handlers (CRUD)
│   │   ├── models/
│   │   │   └── Application.js        # Mongoose data schema
│   │   ├── routes/
│   │   │   └── applicationRoutes.js  # Express API endpoints
│   │   └── server.js                 # Express app initialization
│   ├── .env                          # Backend environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── applications/
│   │   │   │   ├── ApplicationModal.jsx   # Add/Edit application modal
│   │   │   │   ├── ApplicationsTable.jsx  # Scrollable data table
│   │   │   │   ├── SearchFilter.jsx       # Search & status filter bar
│   │   │   │   └── StatusBadge.jsx        # Status pill badge
│   │   │   ├── common/
│   │   │   │   └── Toast.jsx              # Feedback toast component
│   │   │   ├── dashboard/
│   │   │   │   ├── StatCard.jsx           # Individual metric card
│   │   │   │   ├── StatsSection.jsx       # Metrics grid container
│   │   │   │   └── WelcomeSection.jsx     # Header welcome message
│   │   │   └── layout/
│   │   │       └── Header.jsx             # Top navigation bar
│   │   ├── pages/
│   │   │   └── Dashboard.jsx         # Main dashboard view
│   │   ├── services/
│   │   │   └── applicationService.js # Axios API client
│   │   ├── App.jsx
│   │   ├── index.css                 # Global Tailwind styles
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 📡 API Endpoints

All application routes are prefixed with `/api/applications`:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/applications` | Retrieve all job applications (sorted newest first) |
| `POST` | `/api/applications` | Create a new job application |
| `PUT` | `/api/applications/:id` | Update an existing job application by ID |
| `DELETE` | `/api/applications/:id` | Delete a job application by ID |

---

## 📋 Data Model (`Application`)

| Field | Type | Required | Options / Default |
|---|---|---|---|
| `company` | String | Yes | Trimmed |
| `role` | String | Yes | Trimmed |
| `location` | String | No | Default: `"Not specified"` |
| `jobType` | String | No | `["Internship", "Full-time", "Part-time", "Contract"]` (Default: `"Full-time"`) |
| `status` | String | No | `["Applied", "Interview Pipeline", "Offer", "Rejected", "Withdrawn"]` (Default: `"Applied"`) |
| `appliedDate` | Date | No | Default: `Date.now` |
| `jobUrl` | String | No | Default: `""` |
| `createdAt` / `updatedAt` | Date | Auto | Timestamps enabled |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB Atlas](https://www.mongodb.com/atlas) cluster or local MongoDB instance

---

### 1. Clone the Repository

```bash
git clone https://github.com/aniket-khemnar/JobTrack.git
cd JobTrack
```

---

### 2. Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/jobtrack?retryWrites=true&w=majority
   ```
   > **Note**: Ensure your IP address is whitelisted in your MongoDB Atlas cluster Network Access settings (`0.0.0.0/0` for development).

4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend server will run at `http://localhost:5000`.

---

### 3. Frontend Setup

1. Open a new terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open your browser and visit `http://localhost:5173`.

---

## 🧪 Production Build

To create an optimized production build for the frontend:

```bash
cd frontend
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

