
from fastapi import FastAPI, Path, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

db = [
    {'did': 'did:teos:marcus', 'status': 'Partial', 'details': ['unknown']},
    {'did': 'did:teos:hana', 'status': 'Not Recognized', 'details': ['revoked', 'suspicious']},
    {'did': 'did:teos:omar', 'status': 'Recognized', 'details': ['secure']}
]

@app.get('/')
async def root():
    return {'status': 'ELMAHROSA Online', 'version': '1.0.0'}

@app.get('/identities')
async def get_ids():
    return db

@app.post('/identities')
async def add_id(identity: dict):
    db.append(identity)
    return identity

@app.delete('/identities/{did}')
async def delete_id(did: str = Path(...)):
    global db
    db = [i for i in db if i['did'] != did]
    return {'message': 'Purged'}
