import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importing icons
import './Signup.css';

function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    contactNumber: '',
    address: '',
    aadharNumber: '',
    panNumber: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);

    try {
      const response = await axios.post('http://localhost:8080/signuprider/add', formData);
      console.log('Registration successful:', response.data);

      navigate('/mainhome'); // Redirect after successful registration
    } catch (error) {
      console.error('There was an error registering:', error);
    }
  };

  return (
    <div className='sign_1'>
      <div className="sign_2">
        <div className="sign_3">
          <img src="https://media.istockphoto.com/id/1742862025/vector/mobile-phone-navigation-map-ride-share-carpooling-travel-driving-mobile-phone.jpg?s=612x612&w=0&k=20&c=ijmj9S3hfN1dx_IH5VUWrOEFP5DQ7pzwvbu0S7AFclk=" alt="Ride Share" className='sign_4' />
        </div>
        <div className="sign_5">
          <div className="sign_6">
            <h3 className='sign_7'>Create a Rider Account</h3>
            <form className='sign_8' onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" required />
                  <label>Password</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" required />
                  <label>Confirm Password</label>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" required />
                  <button type="button" className="sign_9" onClick={() => setStep(2)}>
                    Next <FaArrowRight className="sign_10" />
                  </button>
                </>
              )}
              {step === 2 && (
                <>
                  <label>Gender</label>
                  <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Enter your gender" required />
                  <label>Contact Number</label>
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Enter your contact number" required />
                 
                  <button type="button" className="sign_11" onClick={() => setStep(1)}>
                    <FaArrowLeft className="sign_12" /> Back
                  </button>
                  <button type="button" className="sign_13" onClick={() => setStep(3)}>
                    Next <FaArrowRight className="sign_14" />
                  </button>
                </>
              )}
              {step === 3 && (
                <>
                  <label>Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" required />
                  <label>Aadhar Number</label>
                  <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder="Enter your Aadhar number" required />
                  <label>PAN Number</label>
                  <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} placeholder="Enter your PAN number" required />
                  <button type="button" className="sign_15" onClick={() => setStep(2)}>
                    <FaArrowLeft className="sign_16" /> Back
                  </button>
                  <button type="submit" className='sign_17'>Register</button>
                  <button type="button" className="sign_18">Sign up with Google</button>
                </>
              )}
            </form>
            <p>
              Already have an account? <Link to="/login" className='sign_19'>Log in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
