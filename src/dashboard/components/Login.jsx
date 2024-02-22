import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/vendor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      localStorage.setItem('token', data.token);
      localStorage.setItem('vendorId', data.vendorId);
      setFormData({
        username: '',
        password: '',
      });

      alert("login successful")
      console.log('Token:', data.token);
      navigate('/main-page');

    } catch (error) {
      console.error('Error:', error.message);
      alert(error.message);
    }
  };

  return (
    <div className="modal-container">
      <div className="login-form">
        <h4>Login Form</h4>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
