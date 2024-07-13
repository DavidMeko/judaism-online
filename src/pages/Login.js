import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">התחברות</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">כתובת אימייל</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">סיסמה</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors">
          התחבר
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600">שכחת סיסמה?</Link>
      </div>
      <div className="mt-2 text-center">
        <Link to="/signup" className="text-blue-500 hover:text-blue-600">אין לך חשבון? הירשם כאן</Link>
      </div>
    </div>
  );
}

export default Login;