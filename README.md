# 🏛️ TEOS Identity Insight AI | TESL Pillar

[![Build Status](https://img.shields.io/github/actions/workflow/status/Elmahrosa/TEOS-Identity-Insight-AI/ci.yml?branch=main)](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI/actions)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)
[![TESL Integrated](https://img.shields.io/badge/TESL-Integrated-blue)](https://github.com/Elmahrosa)
[![Identity Insight AI](https://img.shields.io/badge/Module-Identity_Insight_AI-gold)](https://github.com/Elmahrosa/TEOS-Identity-Insight-AI)

**Architect:** [Ayman Seif](https://github.com/Elmahrosa)  
**Organization:** [Elmahrosa International](https://github.com/Elmahrosa)  
**Core Domain:** https://teosegypt.com  
**TESL Anchor:** TEOS Sovereign Layer compliance backbone

---

## Overview
TEOS Identity Insight AI is the TESL identity pillar. It combines a **FastAPI** backend for Decentralized Identifier (DID) analysis with a **React Civic Dashboard** for real‑time identity visualization, risk scoring, and institutional auditability.

---

## Key Features
- **TESL Risk Scoring** AI driven compliance scoring aligned with TESL governance.  
- **Identity Registry** DID registration with flags for trusted, suspicious, or revoked states.  
- **Auto Purge** Automatic removal of identities scoring ≥ 70% risk.  
- **Audit Log** Real‑time logging of registration, scoring, and revocation events.  
- **Secure Auth** JWT authentication and token lifecycle management.  
- **Persona Validation** Preconfigured DIDs for demo and compliance testing.

---

## Architecture
- **Backend** FastAPI (port 8000) for identity logic and scoring.  
- **Frontend** React (port 3000) Civic Dashboard.  
- **Database** In‑memory for now; planned PostgreSQL/Redis support.  
- **Deployment** Docker ready for cloud or sovereign on‑premise rollout.

---

## Quick Start

### Prerequisites
- Python 3.10+  
- Node.js 18+  
- Git  
- Docker optional but recommended

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm start
```

Swagger UI `http://localhost:8000/docs`  
Civic Dashboard `http://localhost:3000`

---

## Test Personas
- `did:teos:omar` Recognized 100%  
- `did:teos:marcus` Partial 65%  
- `did:teos:hana` Revoked 0%

---

## TESL Ecosystem Linkage
This module is integrated into the TESL Sovereign Layer and should be linked across TEOS repos:  
https://github.com/Elmahrosa/TEOS-Identity-Insight-AI

---

## Governance and Contribution
**CONTRIBUTING.md** and **SECURITY.md** recommended. Enable branch protection, Dependabot, and secret scanning for production readiness.

---

## License
Proprietary Architecture © Ayman Seif. All Rights Reserved.
```

---

### Bash script to inject TESL badge into multiple repos
Save as `inject_tesl_badge.sh`, make executable, then run.

```bash
#!/usr/bin/env bash
set -euo pipefail

# Configuration
ORG="Elmahrosa"
REPOS=(
  "TEOS-Forge"
  "TEOS-NFT"
  "TEOS-Pioneers"
  "TEOS-Holders"
  "TEOS-Sovereign-Stack"
)
WORKDIR=$(mktemp -d)
BADGE_LINE="[![TESL Integrated](https://img.shields.io/badge/TESL-Integrated-blue)](https://github.com/$ORG/TEOS-Identity-Insight-AI)"
README_SNIPPET=$'---\n\n## TESL Integration\n'$BADGE_LINE$'\n\nThis repository is linked to the TESL Identity Insight AI module: https://github.com/Elmahrosa/TEOS-Identity-Insight-AI\n'

echo "Working directory: $WORKDIR"
cd "$WORKDIR"

for repo in "${REPOS[@]}"; do
  echo "Processing $repo..."
  git clone "https://github.com/$ORG/$repo.git" "$repo"
  cd "$repo"

  # Ensure README exists
  if [ ! -f README.md ]; then
    echo "# $repo" > README.md
  fi

  # Add badge if not present
  if ! grep -Fq "TESL-Integrated" README.md; then
    # Append snippet at end
    printf "\n%s\n" "$README_SNIPPET" >> README.md
    git add README.md
    git commit -m "chore: add TESL integration badge and link to Identity Insight AI"
    # Push changes
    git push origin main || git push origin master || echo "Push failed for $repo; check branch name and permissions"
    echo "Updated $repo"
  else
    echo "Badge already present in $repo"
  fi

  cd ..
done

echo "Cleanup $WORKDIR"
rm -rf "$WORKDIR"
echo "Done. All repos processed."
```

**How to run**
1. Save file and make executable:
   ```bash
   chmod +x inject_tesl_badge.sh
   ```
2. Run:
   ```bash
   ./inject_tesl_badge.sh
   ```

**Notes**
- The script uses HTTPS cloning. If you need to push with SSH or require authentication, run it where your Git credentials are configured or adapt the clone URLs.
- It attempts `main` then `master` when pushing; adjust if your repos use a different default branch.

---
