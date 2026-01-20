# 🏛️ TEOS Identity Insight AI | TESL Pillar

[![Build Status](https://img.shields.io/github/actions/workflow/status/Elmahrosa/TEOS-Identity-Insight-AI/ci.yml?branch=main)](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI/actions)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)
[![TESL Linked](https://img.shields.io/badge/TESL-Integrated-blue)](https://github.com/Elmahrosa)
[![Identity Insight AI](https://img.shields.io/badge/Identity-Insight_AI-gold)](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI)

**Architect:** [Ayman Seif](https://github.com/Elmahrosa)  
**Organization:** [Elmahrosa International](https://github.com/Elmahrosa)  
**Core Domain:** [TEOSEGYPT.COM](https://teosegypt.com)  
**TESL Anchor:** TEOS Sovereign Layer — compliance‑first backbone for global civic infrastructure.

---

## 📜 Overview
**TEOS Identity Insight AI** is the **TESL identity pillar**, providing sovereign risk scoring, DID validation, and persona governance.  
It fuses a **FastAPI backend** with a **React Civic Dashboard**, enabling real‑time compliance visualization and institutional‑grade auditability.

---

## 🚀 Features
- **TESL Risk Scoring:** AI‑driven compliance scoring aligned with TESL governance standards.  
- **Identity Registry:** DID registration with flags for suspicious, revoked, or trusted states.  
- **Auto‑Purge:** High‑risk identities (≥70%) automatically removed.  
- **Audit Logging:** Real‑time logs of registration, scoring, and revocation events.  
- **Secure Authentication:** JWT‑based login and token lifecycle management.  
- **Persona Validation:** Pre‑configured DID personas for demo and institutional testing.  

---

## 🏗️ Architecture
- **Backend (Port 8000):** FastAPI engine for identity logic and TESL scoring.  
- **Frontend (Port 3000):** React Civic Dashboard for visualization.  
- **Database:** In‑memory (future expansion to PostgreSQL/Redis).  
- **Deployment:** Docker‑ready for cloud or sovereign on‑premise rollout.  

---

## 🛠️ Quick Start

### Prerequisites
- Python 3.10+  
- Node.js 18+  
- Git  
- Docker (optional, recommended)

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```

Access Swagger UI at: `http://localhost:8000/docs`  
Access Civic Dashboard at: `http://localhost:3000`

---

## 🧪 Test Personas (DIDs)
- `did:teos:omar` → **Recognized** (100% Score)  
- `did:teos:marcus` → **Partial** (65% Score)  
- `did:teos:hana` → **Revoked** (0% Score)  

---

## 🔗 TESL Ecosystem Linkage
This repo is integrated into the **TESL Sovereign Layer**, linked across all TEOS modules:  
[`https://github.com/Elmahrosa/TEOS-Identity-Insight-AI`](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI)

---

## 🛡️ License
Proprietary Architecture © Ayman Seif. All Rights Reserved.  
For institutional licensing and compliance audits, contact [Elmahrosa International](https://github.com/Elmahrosa).
```
