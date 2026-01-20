import React, { useEffect, useState } from 'react';

export default function App() {
  const [reports, setReports] = useState([]);
  
  useEffect(() => {
    const ids = ['did:teos:marcus', 'did:teos:hana', 'did:teos:omar'];
    Promise.all(ids.map(id => 
      fetch('http://localhost:8000/analyze/' + id, {method:'POST'}).then(r => r.json())
    )).then(setReports);
  }, []);

  return (
    <div style={{background: '#020617', color: 'white', minHeight: '100vh', padding: '50px', fontFamily: 'sans-serif'}}>
      <h1 style={{fontSize: '3.5rem', fontWeight: '900', color: '#3b82f6', margin: 0}}>ELMAHROSA</h1>
      <p style={{color: '#94a3b8', letterSpacing: '2px'}}>SOLO ARCHITECT: AYMAN SEIF | TEOSEGYPT.COM</p>
      <div style={{marginTop: '50px', maxWidth: '800px'}}>
        {reports.map((item, i) => (
          <div key={i} style={{background: '#0f172a', padding: '30px', borderRadius: '25px', marginBottom: '25px', border: '1px solid #1e293b'}}>
            <h2 style={{fontSize: '2rem', margin: '0 0 10px 0'}}>{item.report ? item.report.status : "Processing..."}</h2>
            <code style={{color: '#60a5fa'}}>{item.did}</code>
            <ul style={{marginTop: '20px', color: '#94a3b8'}}>
              {item.report && item.report.reasons.map(r => <li key={r}>{r}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
