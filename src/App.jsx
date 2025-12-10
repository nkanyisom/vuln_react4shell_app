import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React 19.0.0 Vulnerable Application</h1>
      <p>CVE-2025-55182 Test Application</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h2>About This Application</h2>
        <p>This is a test application running React 19.0.0 with React Server Components.</p>
        <p>It is vulnerable to CVE-2025-55182 (React4Shell) - a pre-authentication RCE vulnerability.</p>
        <p><strong>⚠️ WARNING: This application is intentionally vulnerable. For testing purposes only!</strong></p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Vulnerability Details:</h3>
        <ul>
          <li>CVE: CVE-2025-55182</li>
          <li>CVSS Score: 10.0 CRITICAL</li>
          <li>Affected Package: react-server-dom-webpack</li>
          <li>Affected Version: 19.0.0</li>
          <li>Vulnerability Type: Unsafe Deserialization (CWE-502)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
