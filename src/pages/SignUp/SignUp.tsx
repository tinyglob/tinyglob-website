/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Header from '../../components/Header/Header';
import { PRODUCTION_API_URL } from '../../constants';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });
  const [status, setStatus] = useState<"success" | "error" | null>(null); // To track the status of the registration process

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.username || !formData.email || !formData.password) {
      return;
    }

    try {
      const response = await fetch(`${PRODUCTION_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to register');
      }
      setStatus("success");
      setFormData({ // Clear the form after successful registration
        name: '',
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Registration failed:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <h1>Sign Up</h1>
        {status === 'success' && (
          <p style={{ color: 'green' }}>Registration successful!</p>
        )}
        {status === 'error' && (
          <p style={{ color: 'red' }}>Registration failed. Please try again.</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
