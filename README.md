# 🛡️ TEOS Identity Insight AI

[![License: TESL – Founder-Exclusive](https://img.shields.io/badge/license-TESL%20Founder--Exclusive-red?style=for-the-badge&logo=skull&labelColor=black)](https://github.com/Elmahrosa/Teos-Pharaoh-Portal/blob/main/TESL.md)

[![TESL License](https://img.shields.io/badge/TESL-Sovereign%20License-red?style=flat&logo=lock)](https://github.com/Elmahrosa/Teos-Pharaoh-Portal/blob/main/TESL.md)

[![Build Status](https://img.shields.io/github/actions/workflow/status/Elmahrosa/TEOS-Identity-Insight-AI/ci.yml?branch=main)](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI/actions)

[![Module](https://img.shields.io/badge/Module-Identity_Insight_AI-gold)](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI)


---

## 🧠 Overview

**TEOS Identity Insight AI** analyzes **DIDs**, scores risk, detects fraud via civic dashboard.

**Use Cases:** Compliance • Fraud Detection • Institutional Monitoring

---

## 🚀 Features

- 🎯 **Risk Scoring** (behavioral + compliance)
- 🆔 **DID Registry** (Trusted/Suspicious/Revoked)
- ⚡ **Auto-Removal** (risk threshold)
- 📊 **Audit Logs** (full traceability)
- 🔐 **JWT Auth**
- 🧑‍💼 **Test Personas**

---

## 🏗️ Stack

| Component | Tech | Port |
|-----------|------|------|
| Backend | FastAPI | 8000 |
| Frontend | React | 3000 |
| DB | PostgreSQL-ready | - |
| Deploy | Docker | - |

---

## 🚦 Quick Start

```bash
# Backend
cd backend && pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Frontend (new terminal)
cd frontend && npm install && npm start
```

**Access:**  
🔗 [API Docs](http://localhost:8000/docs) | 📱 [Dashboard](http://localhost:3000)

---

## 🧪 Test DIDs

| Status | DID |
|--------|-----|
| ✅ Trusted | `did:teos:omar` |
| ⚠️ Medium | `did:teos:marcus` |
| ❌ Revoked | `did:teos:hana` |

---
## ⚖️ TESL License

# 🛡️ **TEOS EGYPT SOVEREIGN LICENSE**

[![TESL](https://img.shields.io/badge/%F0%9F%87%AA%F0%9F%87%AC%20TESL-Sovereign-red?style=for-the-badge&logo=egypt)](https://github.com/Elmahrosa/Teos-Pharaoh-Portal/blob/main/TESL.md)

**© 2025 Elmahrosa International**  
**Proprietary • Founder-Exclusive** 🔒

**ALL RIGHTS RESERVED** → **Ayman Seif / Elmahrosa**

✅ **Allowed**: Founder use/modify/deploy  
❌ **BANNED**: Forks • Redistribution • Commercial  

**AI = Decision Support Only** (Founder Authority Required)

📜 **[TESL.md](https://github.com/Elmahrosa/Teos-Pharaoh-Portal/blob/main/TESL.md)** | ✉️ **ayman@teosegypt.com**  
**🇪🇬 Built in Egypt**
