/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Header from '../../components/Header/Header';
import { PRODUCTION_API_URL } from '../../constants';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [status, setStatus] = useState<"success" | "error" | null>(null); // To track the status of the login process

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return;
    }

    try {
      const response = await fetch(`${PRODUCTION_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      setStatus("success");
      setFormData({ // Clear the form after successful login
        email: '',
        password: ''
      });
      // You might want to redirect the user to another page upon successful login
      // Example: window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <h1>Log In</h1>
        {status === 'success' && (
          <p style={{ color: 'green' }}>Log In successful!</p>
        )}
        {status === 'error' && (
          <p style={{ color: 'red' }}>Log In failed. Please try again.</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
