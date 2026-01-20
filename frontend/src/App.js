import React, { useState, useEffect } from 'react';

const App = () => {
  const [ids, setIds] = useState([]);
  const [auditLog, setAuditLog] = useState([{ time: new Date().toLocaleTimeString(), action: "ELMAHROSA Launching..." }]);
  const [autoPurge, setAutoPurge] = useState(false);

  const addLog = (action) => setAuditLog(prev => [{ time: new Date().toLocaleTimeString(), action }, ...prev]);

  const exportAudit = () => {
    const csv = "Time,Action\n" + auditLog.map(l => `${l.time},${l.action}`).join("\n");
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `elmahrosa_audit_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  const fetchIds = async () => {
    try {
      const res = await fetch('http://localhost:8000/identities');
      const data = await res.json();
      setIds(data);
    } catch (e) { addLog("Connection Lost"); }
  };

  useEffect(() => { fetchIds(); const interval = setInterval(fetchIds, 3000); return () => clearInterval(interval); }, []);

  return (
    <div style={{ background: '#020617', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #1e293b', paddingBottom: '10px' }}>
        <h1>🛡️ ELMAHROSA | Autonomous Defense</h1>
        <button onClick={exportAudit} style={{ background: '#22c55e', color: 'white', padding: '10px', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
          DOWNLOAD AUDIT CSV
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <label><input type="checkbox" checked={autoPurge} onChange={e => setAutoPurge(e.target.checked)} /> ENABLE AI PURGE PROTOCOL</label>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px' }}>
        <section style={{ background: '#0f172a', padding: '20px', borderRadius: '10px' }}>
          <h3>Live Registry</h3>
          {ids.map((id, i) => (
            <div key={i} style={{ padding: '10px', borderBottom: '1px solid #1e293b' }}>
              {id.did} - <span style={{ color: '#ef4444' }}>70% RISK</span>
            </div>
          ))}
        </section>

        <section style={{ background: '#0f172a', padding: '20px', borderRadius: '10px' }}>
          <h3>Audit Log</h3>
          <div style={{ maxHeight: '300px', overflowY: 'auto', fontSize: '0.8rem' }}>
            {auditLog.map((log, i) => <div key={i}>[{log.time}] {log.action}</div>)}
          </div>
        </section>
      </div>
    </div>
  );
};
export default App;
