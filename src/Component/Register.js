import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './register.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    bikeNumber: '',
    aadharNumber: '',
    drivingLicense: '',
    panCardNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/ridesharer/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Registration successful:', response.data);
      navigate('/driverhome');
    } catch (error) {
      if (error.response) {
        console.error('Registration error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error during registration:', error.message);
      }
    }
  };
  

  return (
    <div className='reg_3'>
      <div className="register-container">
        <div className="register-form">
          <div className="form-container">
            <h3 className='reg_1'>Create an Account</h3>
            <form className='reg_2' onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label>Gender</label>
              <input
                type="text"
                placeholder="Enter your gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              />
              <label>Bike Number</label>
              <input
                type="text"
                placeholder="Enter your bike number"
                name="bikeNumber"
                value={formData.bikeNumber}
                onChange={handleChange}
                required
              />
              <label>Aadhar Number</label>
              <input
                type="text"
                placeholder="Enter your Aadhar number"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                required
              />
              <label>Driving License</label>
              <input
                type="text"
                placeholder="Enter your driving license number"
                name="drivingLicense"
                value={formData.drivingLicense}
                onChange={handleChange}
                required
              />
              <label>PAN Card Number</label>
              <input
                type="text"
                placeholder="Enter your PAN card number"
                name="panCardNumber"
                value={formData.panCardNumber}
                onChange={handleChange}
                required
              />
              <button type="submit" className='color'>Register</button>
              <button type="button" className="google-signup">Sign up with Google</button>
            </form>
            <p>
              Already have an account? <Link to="/login1">Log in here</Link>
            </p>
          </div>
        </div>
        <div className="register-bg"></div>
      </div>
    </div>
  );
}

export default Register;
