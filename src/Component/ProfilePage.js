import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css'; // Make sure to create and include this CSS file

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    gender: '',
    contactNumber: '',
    address: '',
    aadharNumber: '',
    panNumber: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('User not logged in');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/signuprider/profile/${userId}`);
        setProfileData(response.data);
      } catch (error) {
        setError('Failed to fetch profile data. Please try again later.');
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="profile-container">
      {error && <div className="error-message">{error}</div>}
      {!error && (
        <div className="profile-content">
          <h2 className="profile-title">Profile</h2>
          <div className="profile-detail"><strong>Name:</strong> {profileData.name}</div>
          <div className="profile-detail"><strong>Email:</strong> {profileData.email}</div>
          <div className="profile-detail"><strong>Gender:</strong> {profileData.gender}</div>
          <div className="profile-detail"><strong>Contact Number:</strong> {profileData.contactNumber}</div>
          <div className="profile-detail"><strong>Address:</strong> {profileData.address}</div>
          <div className="profile-detail"><strong>Aadhar Number:</strong> {profileData.aadharNumber}</div>
          <div className="profile-detail"><strong>PAN Number:</strong> {profileData.panNumber}</div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
