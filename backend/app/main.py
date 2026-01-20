from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from jose import jwt
from typing import List

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

SECRET_KEY = "ELMAHROSA_SECRET_2026"
ALGORITHM = "HS256"

class Identity(BaseModel):
    did: str
    status: str
    details: List[str]

class User(BaseModel):
    username: str
    password: str

db = [
    {"did": "did:teos:marcus", "status": "Partial", "details": ["IAL2 OK", "No Health Card"]},
    {"did": "did:teos:hana", "status": "Not Recognized", "details": ["Kill-Switch: Revoked"]},
    {"did": "did:teos:omar", "status": "Recognized", "details": ["Sovereign Tier 1"]}
]

@app.post("/token")
async def login(user: User):
    if user.username == "ayman" and user.password == "teos2026":
        token = jwt.encode({"sub": user.username}, SECRET_KEY, algorithm=ALGORITHM)
        return {"access_token": token, "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Invalid Credentials")

@app.get("/identities")
async def get_identities():
    return db

@app.post("/identities")
async def create_identity(id_obj: Identity):
    db.append(id_obj.dict())
    return {"message": "Success"}
