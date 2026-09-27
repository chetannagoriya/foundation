# BHS Foundation - Hope, Support, Empower 🇮🇳

A modern, high-performance, full-stack **MERN** web portal built for **BHS Foundation**, matching the provided homepage UI designs.

![Celebso Foundation Preview](client/src/assets/preview.png)

---

## 🌟 Key Features & Design Highlights

1. **Pixel-Perfect UI Replication**:
   - **Tricolor Identity**: Subtle Saffron (`#FF7A00`) and India Green (`#1F8E3D`) accents with artistic paint-splatter brush effects.
   - **India Map Collage**: High-impact hero visual framing school children in uniforms with the silhouette of India.
   - **Editorial Typography**: Styled with `Playfair Display` and `DM Serif Display` alongside clean sans-serif body typography.

2. **Core Sections**:
   - **Navbar**: Brand logo with the Tree of Hope & Indian tricolor emblem, navigation menu, and quick "Donate Now" trigger.
   - **Hero Section**: *"Building a better India, one life at a time."* with primary and secondary call-to-actions.
   - **4 Pillars of Impact**: Education, Health, Nutrition, and Empowerment cards with customized circular badges.
   - **What Have We Done With Your Help?**: Asymmetric 3-photo grid collage with social impact metrics (98.4% school retention rate).
   - **Real Success Stories**: Interactive case study cards (Aarav, Priya, Ankit) with detailed modal popups.
   - **Nationwide Presence (Interactive India Map)**: Live statistics counters (52,000+ children, 15,000+ meals daily, 280+ health camps) and clickable state pins across India.
   - **Call-To-Action Banner**: *"Join our mission! Be the reason someone smiles today."* with dual Donate / Volunteer buttons.
   - **Contact & Social Bar**: Call desk (+91 9784626443), email, and social media handles.
   - **Footer**: Full navigation, legal links, and 80G / 12A certification notice.

3. **MERN Stack Functionality**:
   - **Interactive Donation Flow**: Select preset (₹500, ₹1000, ₹2500, ₹5000, ₹10000) or custom amount, one-time vs monthly, cause allocation, PAN collection for tax benefits.
   - **Instant 80G Tax Exemption Receipt**: Generates a printable and verifiable official tax receipt upon donation completion.
   - **Volunteer Registration Portal**: Collects volunteer interests, locations, availability, and messages.
   - **Resilient Database Layer**: Connected to MongoDB via Mongoose with auto-fallback to an in-memory repository if local MongoDB service is offline, guaranteeing zero downtime.

---

## 🏗️ Project Architecture

```
foundation_celebso/
├── package.json              # Root script runner (runs client & server concurrently)
├── server/                   # Backend REST API (Node.js, Express, MongoDB)
│   ├── src/
│   │   ├── config/db.js      # MongoDB connection with resilient fallback
│   │   ├── controllers/      # Business logic (donations, volunteers, stories, contacts)
│   │   ├── models/           # Mongoose schemas (Donation, Volunteer, Story, Contact)
│   │   ├── routes/           # Express router endpoints
│   │   └── server.js         # Main server bootstrap
│   ├── .env                  # Port (5000) and MongoDB URI
│   └── package.json
└── client/                   # Frontend SPA (React 18, Vite, Tailwind CSS, Lucide)
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Pillars.jsx
    │   │   ├── AboutImpact.jsx
    │   │   ├── Stories.jsx
    │   │   ├── MapReach.jsx
    │   │   ├── CallToAction.jsx
    │   │   ├── ContactBar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── DonationModal.jsx
    │   │   ├── VolunteerModal.jsx
    │   │   ├── ReceiptModal.jsx
    │   │   ├── StoryDetailModal.jsx
    │   │   └── Toast.jsx
    │   ├── services/api.js   # API client service layer
    │   ├── App.jsx           # App layout controller
    │   ├── index.css         # Tailwind & brush stroke styling
    │   └── main.jsx
    ├── index.html
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json
```

---

## 🚀 Getting Started

### 1. Launch Both Client & Server Concurrently
From the root folder:
```bash
npm run dev
```

This will run:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

### 2. Available Scripts
- `npm run dev`: Runs both backend and frontend concurrently with auto-reload.
- `npm run client`: Runs only the React frontend on port 3000.
- `npm run server`: Runs only the Node.js backend on port 5000.
- `npm run build`: Generates the production build of the React application in `client/dist`.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check & organization status |
| `POST` | `/api/donations` | Process donation & issue 80G tax receipt |
| `GET` | `/api/donations/stats` | Retrieve total funds, donors, & impact count |
| `GET` | `/api/donations/recent` | List latest public contributions |
| `POST` | `/api/volunteers` | Submit volunteer application |
| `GET` | `/api/stories` | Retrieve verified child success stories |
| `POST` | `/api/contact` | Submit general enquiry message |
