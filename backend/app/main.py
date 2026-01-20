from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="TEOS Identity AI | Architect: Ayman Seif")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app.post("/analyze/{did}")
async def analyze(did: str):
    personas = {
        "did:teos:marcus": {"status": "🟡 Partial", "score": 65, "reasons": ["IAL2 OK", "No Health Card"]},
        "did:teos:hana": {"status": "🔴 Not Recognized", "score": 0, "reasons": ["Kill-Switch: Revoked"]},
        "did:teos:omar": {"status": "🟢 Recognized", "score": 100, "reasons": ["Sovereign Compliance"]}
    }
    return {"did": did, "report": personas.get(did.lower(), {"status": "⚪ Unknown", "score": 0, "reasons": ["DID not found"]})}
