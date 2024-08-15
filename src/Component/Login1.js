import React, { useState } from 'react';
import axios from 'axios';
import './Login1.css';
import { Link, useNavigate } from 'react-router-dom';

function Login1() {
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
      const response = await axios.post('http://localhost:8080/ridesharer/login', {
        email,
        password
      });
      console.log('Login successful:', response.data);
      navigate('/driverhome');
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='log1_1'>
      <div className="log1_2">
        <div className="log1_3">
          <div className="log1_4">
            <h3 className="log1_5">Sign In</h3> {/* Updated heading */}
            <p className="log1_6">Access your account to get unlimited access to data & information.</p> {/* Updated text */}
            <form className="log1_7" onSubmit={handleSubmit}>
              <label className="log1_8">Email</label>
              <input
                className="log1_9"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label className="log1_8">Password</label>
              <input
                className="log1_9"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="log1_10">
                <div>
                  <input
                    type="checkbox"
                    id="show-password"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                  <label htmlFor="show-password" className="log1_8">Show Password</label>
                </div>
                <a href="#" className="log1_13">Forgot your password?</a>
              </div>
              <button type="submit" className="log1_11">
                <span className='color'>Log in</span>
              </button>
              <button type="button" className="log1_11 log1_12">Sign in with Google</button>
            </form>
            <p className="log1_6">
              Don't have an account?<Link to='/Register' className="log1_13">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;
