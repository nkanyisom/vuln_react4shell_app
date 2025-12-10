const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Main route - serve the HTML
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CVE-2025-55182 Vulnerable App</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/dist/bundle.js"></script>
    </body>
    </html>
  `);
});

// React Server Components endpoint - VULNERABLE ENDPOINT
// This endpoint uses react-server-dom-webpack which has the deserialization vulnerability
app.post('/react-server-action', async (req, res) => {
  try {
    console.log('⚠️ VULNERABLE ENDPOINT CALLED - Server Action endpoint');
    console.log('Request body:', req.body);
    
    // This is where the vulnerability exists:
    // react-server-dom-webpack (19.0.0) unsafely deserializes the request payload
    // An attacker can send malicious serialized data that gets executed on the server
    
    // In a real vulnerable scenario, react-server-dom-webpack would process
    // the serialized payload from the request, potentially executing arbitrary code
    
    res.json({
      status: 'success',
      message: 'Server action processed (VULNERABLE)',
      warning: 'This endpoint is vulnerable to CVE-2025-55182',
      vulnerability: 'Unsafe deserialization in react-server-dom-webpack@19.0.0'
    });
  } catch (error) {
    console.error('Error processing server action:', error);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'running',
    react_version: '19.0.0',
    vulnerable_to: 'CVE-2025-55182',
    severity: 'CRITICAL (CVSS 10.0)',
    warning: 'This is an intentionally vulnerable application for testing purposes only!'
  });
});

app.listen(PORT, () => {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║  ⚠️  VULNERABLE APPLICATION RUNNING                            ║');
  console.log('║  CVE-2025-55182 Test Server                                   ║');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log(`║  Server running on: http://localhost:${PORT}                     ║`);
  console.log('║  React Version: 19.0.0 (VULNERABLE)                           ║');
  console.log('║  Vulnerable Package: react-server-dom-webpack@19.0.0          ║');
  console.log('║  Vulnerability: Unsafe Deserialization (CWE-502)              ║');
  console.log('║  CVSS Score: 10.0 CRITICAL                                    ║');
  console.log('╠════════════════════════════════════════════════════════════════╣');
  console.log('║  🚨 FOR TESTING PURPOSES ONLY - DO NOT EXPOSE TO INTERNET 🚨  ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log('Endpoints:');
  console.log(`  - GET  http://localhost:${PORT}/               (Main app)`);
  console.log(`  - POST http://localhost:${PORT}/react-server-action (VULNERABLE)`);
  console.log(`  - GET  http://localhost:${PORT}/health          (Health check)`);
  console.log('');
});
