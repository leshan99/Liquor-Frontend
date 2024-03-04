import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    address: '',
    password: '',
    confirmPassword: '',
  }); 

  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setPasswordError('Password and Confirm Password must match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8090/api/users', user);
      
      console.log('User registered successfully:', response.data);
      navigate('/login');

      setPasswordError('');

    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Telephone:
          <input
            type="text"
            name="telephone"
            value={user.telephone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;