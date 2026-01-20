# 🛡️ TEOS Identity Insight AI | TESL Pillar

[![Build Status](https://img.shields.io/github/actions/workflow/status/Elmahrosa/TEOS-Identity-Insight-AI/ci.yml?branch=main)](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI/actions)
[![License](https://img.shields.io/badge/License-TESL%20Proprietary-red)](LICENSE)
[![TESL Integrated](https://img.shields.io/badge/TESL-Integrated-blue)](https://github.com/Elmahrosa)
[![Identity Insight AI](https://img.shields.io/badge/Module-Identity_Insight_AI-gold)](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI)

**Architect:** [Ayman Seif](https://github.com/Elmahrosa)  
**Organization:** [Elmahrosa International](https://github.com/Elmahrosa)  
**Core Domain:** [teosegypt.com](https://teosegypt.com)  
**TESL Anchor:** TEOS Sovereign Layer compliance backbone

---

## 🏛️ Overview
**TEOS Identity Insight AI (ELMAHROSA)** serves as the critical identity pillar of the TEOS Egypt ecosystem. It combines a high-performance **FastAPI** backend for Decentralized Identifier (DID) analysis with a **React Civic Dashboard** designed for real‑time identity visualization, risk scoring, and institutional auditability.



---

## 🚀 Key Features
- **TESL Risk Scoring:** AI-driven compliance scoring strictly aligned with TESL governance protocols.  
- **Identity Registry:** DID management with status flags for *Trusted*, *Suspicious*, or *Revoked* states.  
- **Auto-Purge Protocol:** Autonomous defense mechanism that automatically removes identities with a risk score $\ge 70\%$.  
- **Institutional Audit Log:** Real‑time, exportable logging of all registration, scoring, and revocation events.  
- **Secure Auth:** JWT-based authentication with robust token lifecycle management.  
- **Persona Validation:** Preconfigured DIDs for rapid demonstration and compliance stress-testing.

---

## 🏗️ Architecture
- **Backend:** FastAPI (Port 8000) handling core identity logic and scoring.  
- **Frontend:** React (Port 3000) Civic Defense Dashboard.  
- **Database:** Standardized for PostgreSQL/Redis support; current dev build utilizes in‑memory storage.  
- **Deployment:** Fully Dockerized for cloud-native or sovereign on‑premise rollout.



---

## 🚦 Quick Start

### 1. Prerequisites
- Python 3.10+
- Node.js 18+
- Git / Docker

### 2. Backend Initialization
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

```

### 3. Frontend Initialization

```bash
cd frontend
npm install
npm start

```

* **Swagger UI:** `http://localhost:8000/docs`
* **Civic Dashboard:** `http://localhost:3000`

---

## 🧪 Test Personas

* **Recognized (100%):** `did:teos:omar`
* **Partial Risk (65%):** `did:teos:marcus`
* **Revoked (0%):** `did:teos:hana`

---

## 🔗 TESL Ecosystem Linkage

This module is a mandatory component of the **TESL Sovereign Layer**. It must be integrated as a submodule or linked dependency across the following TEOS repositories:

* [TEOS Forge](https://github.com/Elmahrosa/TEOS-Forge)
* [TEOS NFT](https://www.google.com/search?q=https://github.com/Elmahrosa/TEOS-NFT)
* [TEOS Sovereign Stack](https://www.google.com/search?q=https://github.com/Elmahrosa/TEOS-Sovereign-Stack)

---

## ⚖️ License & Governance

**TEOS Egypt Sovereign License (TESL)** Copyright © 2025 **Ayman Seif / Elmahrosa International**.

This software is **Proprietary / Source-Available**. Full rights to use, modify, deploy, and monetize are strictly reserved for the Founder. Unauthorized commercial exploitation is prohibited. Final authority over AI decision-outputs resides with the Human Founder.

---

📧 **Contact:** [ayman@teosegypt.com](mailto:ayman@teosegypt.com)

```

---
