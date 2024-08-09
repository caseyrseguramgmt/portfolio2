import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-backend-url/api/login', {
        email,
        password,
      });
      // Handle successful login (e.g., store token, redirect user)
      console.log('Login successful', response.data);
      // Redirect or update the UI accordingly
    } catch (error) {
      // Handle error (e.g., invalid credentials)
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 rounded shadow-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-left font-bold mb-2" htmlFor="email">Email</label>
          <input 
            className="w-full px-3 py-2 border rounded" 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-left font-bold mb-2" htmlFor="password">Password</label>
          <input 
            className="w-full px-3 py-2 border rounded" 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" 
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
