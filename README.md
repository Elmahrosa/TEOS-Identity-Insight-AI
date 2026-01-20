# 🏛️ TEOS Identity Insight AI (Alexandria Alpha)

**Architect:** [Ayman Seif](https://github.com/Elmahrosa)  
**Organization:** [Elmahrosa](https://github.com/Elmahrosa)  
**Core Domain:** [TEOSEGYPT.COM](https://teosegypt.com)

---

## 📜 Project Overview
TEOS Identity Insight AI is the sovereign identity validation pillar of the TEOS ecosystem. It provides a high-performance **FastAPI** backend for Decentralized Identifier (DID) analysis and a **React-based** Civic Dashboard for real-time identity status visualization.

### 🚀 Key Features
* **Sovereign Scoring:** AI-driven analysis of DID compliance levels.
* **Persona Validation:** Pre-configured logic for IAL2 compliance and revocation kill-switches.
* **Microservices Architecture:** Decoupled backend (Python) and frontend (TypeScript/React).
* **Docker Ready:** Containerized for instant deployment to cloud or on-premise servers.

---

## 🏗️ System Architecture
The system operates as a dual-layer stack:

1.  **Backend (Port 8000):** Python FastAPI engine handling identity logic.
2.  **Frontend (Port 3000):** React Dashboard displaying the "Elmahrosa" civic interface.



---

## 🛠️ Quick Start

### 1. Prerequisites
* Python 3.10+
* Node.js 18+
* Git

### 2. Launch Backend
```bash
cd backend
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

### 3. Launch Frontend
```bash
cd frontend
npm install
npm start
```

---

## 🧪 API Personas (Test DIDs)
Use the following DIDs in the Swagger UI (`http://localhost:8000/docs`) to test the AI response:
* `did:teos:omar`: **Recognized** (100% Score)
* `did:teos:marcus`: **Partial** (65% Score)
* `did:teos:hana`: **Revoked** (0% Score)

---

## 🛡️ License
Proprietary Architecture by Ayman Seif. All Rights Reserved.
