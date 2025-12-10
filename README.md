# CVE-2025-55182 Vulnerable React Application

⚠️ **WARNING: This is an intentionally vulnerable application for testing purposes only!** ⚠️

## Overview

This is a test application built with **React 19.0.0** that is vulnerable to **CVE-2025-55182** (also known as "React4Shell"). This application is designed for security researchers and developers to test detection scripts and security scanning tools.

## Vulnerability Details

- **CVE ID**: CVE-2025-55182
- **Common Name**: React4Shell
- **CVSS Score**: 10.0 CRITICAL
- **Vulnerability Type**: Pre-authentication Remote Code Execution (RCE)
- **CWE**: CWE-502 (Deserialization of Untrusted Data)
- **Affected Versions**: 
  - React 19.0.0
  - React 19.1.0
  - React 19.1.1
  - React 19.2.0
- **Affected Packages**:
  - `react-server-dom-webpack`
  - `react-server-dom-parcel`
  - `react-server-dom-turbopack`

### Description

A pre-authentication remote code execution vulnerability exists in React Server Components. The vulnerable code unsafely deserializes payloads from HTTP requests to Server Function endpoints. An attacker can send malicious serialized data to the server, which gets executed without proper validation.

## Project Structure

```
react4shell/
├── package.json                 # Dependencies with vulnerable React 19.0.0
├── webpack.config.js            # Webpack configuration
├── server.js                    # Express server with vulnerable endpoint
├── src/
│   ├── App.jsx                  # Main React component
│   ├── index.jsx                # Client entry point
│   └── ServerComponent.jsx      # React Server Component
└── public/
    └── index.html               # HTML template
```

## Installation

```bash
npm install
```

## Running the Application

### Development Mode

```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Endpoints

1. **Main Application**
   - **URL**: `GET http://localhost:3000/`
   - **Description**: Serves the main React application

2. **Vulnerable Server Action Endpoint** ⚠️
   - **URL**: `POST http://localhost:3000/react-server-action`
   - **Description**: This endpoint uses `react-server-dom-webpack@19.0.0` which has the unsafe deserialization vulnerability
   - **Risk**: Attackers can send malicious serialized payloads that get executed on the server

3. **Health Check**
   - **URL**: `GET http://localhost:3000/health`
   - **Description**: Returns application status and vulnerability information

## Testing the Vulnerability

This application can be used to:

1. **Test vulnerability scanners** - Check if your security tools can detect the vulnerable React version
2. **Develop detection scripts** - Create scripts to identify CVE-2025-55182 in package.json files
3. **Test exploitation techniques** - Practice identifying and understanding the vulnerability (in a safe, isolated environment)
4. **Verify patches** - Compare behavior with patched versions

### Detection Points

Your detection script should look for:

1. **package.json** dependencies:
   ```json
   {
     "react": "19.0.0" || "19.1.0" || "19.1.1" || "19.2.0",
     "react-server-dom-webpack": "19.0.0" || "19.1.0" || "19.1.1" || "19.2.0"
   }
   ```

2. **Server endpoints** that handle React Server Components
3. **Usage of Server Actions** ('use server' directive)

## Remediation

To fix this vulnerability, upgrade to patched versions:

```bash
npm install react@19.2.1 react-dom@19.2.1 react-server-dom-webpack@19.2.1
```

Or for Next.js applications:
- Next.js 15.0.x: Upgrade to 15.0.5+
- Next.js 15.1.x: Upgrade to 15.1.9+
- Next.js 15.2.x: Upgrade to 15.2.6+
- Next.js 15.3.x: Upgrade to 15.3.6+
- Next.js 15.4.x: Upgrade to 15.4.8+
- Next.js 15.5.x: Upgrade to 15.5.7+
- Next.js 16.0.x: Upgrade to 16.0.7+

## References

- [NVD CVE-2025-55182](https://nvd.nist.gov/vuln/detail/CVE-2025-55182)
- [React Official Security Advisory](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)
- [Facebook Security Advisory](https://www.facebook.com/security/advisories/cve-2025-55182)
- [CISA Known Exploited Vulnerabilities](https://www.cisa.gov/known-exploited-vulnerabilities-catalog?field_cve=CVE-2025-55182)

## Disclaimer

🚨 **IMPORTANT**: This application is intentionally vulnerable and should **NEVER** be deployed to a production environment or exposed to the internet. It is strictly for educational and testing purposes in isolated, controlled environments.

## License

This test application is provided as-is for security research and educational purposes.
