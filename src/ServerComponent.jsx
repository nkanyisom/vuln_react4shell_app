'use server';

import React from 'react';

// This is a React Server Component
// The vulnerability exists in how Server Functions handle deserialization
export default async function ServerComponent() {
  return (
    <div>
      <h3>Server Component</h3>
      <p>This component runs on the server using React Server Components.</p>
    </div>
  );
}

// Server Action - this is where the vulnerability lies
export async function serverAction(formData) {
  'use server';
  
  // The vulnerable code path: react-server-dom-webpack unsafely deserializes
  // payloads from HTTP requests to Server Function endpoints
  console.log('Server action called with:', formData);
  
  return {
    message: 'Server action executed',
    timestamp: new Date().toISOString()
  };
}
