import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/signuprider/login', { email, password });
      console.log('Login successful:', response.data);
      navigate('/mainhome');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid credentials. Please try again.');
      } else {
        alert('An error occurred while logging in. Please try again later.');
      }
      console.error('There was an error logging in!', error);
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='log_1'>
      <div className="log_2">
        <div className="log_3">
          <div className="log_4">
            <h3 className="log_5">Sign In</h3> {/* Updated heading */}
            <p className="log_6">Access your account to get unlimited access to data & information.</p> {/* Updated text */}
            <form className="log_7" onSubmit={handleSubmit}>
              <label className="log_8">Email</label>
              <input
                className="log_9"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label className="log_8">Password</label>
              <input
                className="log_9"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="log_10">
                <div>
                  <input
                    type="checkbox"
                    id="show-password"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                  <label htmlFor="show-password" className="log_8">Show Password</label>
                </div>
                <a href="#" className="log_13">Forgot your password?</a>
              </div>
              <button type="submit" className="log_11">
                <span className='color'>Log in</span>
              </button>
              <button type="button" className="log_11 log_12">Sign in with Google</button>
            </form>
            <p className="log_6">
              Don't have an account?<Link to='/Register' className="log_13">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
