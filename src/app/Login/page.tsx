'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('text-red-500');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'user' && password === 'pass123') {
      setMessage('Login successful!');
      setMessageColor('text-green-500');
      router.push('/dashboard');
    } else {
      setMessage('Invalid credentials');
      setMessageColor('text-red-500');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Welcome back Fellas</h1>
        <p className='text-center mb-8 text-xl text-gray-600'>Enter user & password to continue</p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username is user"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password is pass123"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        
        {message && (
          <p className={`text-center mt-4 font-medium ${messageColor}`}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
