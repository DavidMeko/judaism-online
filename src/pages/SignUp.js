import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign up attempt with:', fullName, email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">הרשמה</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">שם מלא</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
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
        <div className="mb-4">
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
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2">אימות סיסמה</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required 
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors">
          הרשמה
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link to="/login" className="text-blue-500 hover:text-blue-600">כבר יש לך חשבון? התחבר כאן</Link>
      </div>
    </div>
  );
}

export default SignUp;