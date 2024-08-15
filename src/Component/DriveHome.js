import React from 'react';
import './DriveHome.css'; // Ensure this file contains the styles
import Footer from './Footer';
import DriveNav from './DriveNav';

const DriveHome = () => {
  return (
    <div>
    <br/>
    <DriveNav/>
    <div className="riho_1">
      <div className="riho_2">
        <img 
          src="https://images.ctfassets.net/q8mvene1wzq4/2U9CYHaJUPoUS5s00qjNh8/a7626e178402e61484b777918e1407b3/dvr_hero_pp_V2.jpg?w=2500&q=60&fm=webp" 
          alt="Ride Sharing" 
          className="riho_3" 
        />
      </div>
      <div className="riho_4">
        <p className="riho_5">
          Make every<br />
          day payday<br/>
        </p>
        <div className="riho_6">
          <p className="riho_9">As a ride-sharer with Share Ride, you can turn your spare time into earnings. Drive with <br/>flexibility, 
          choosing the hours that fit your schedule. Enjoy the benefits of competitive<br/> rates and a platform that
            values your time and effort. Whether you're on the go or planning ahead, Share Ride ensures you
            make the most out of every trip. Join us today and start earning with every ride!
          </p>
          <p className='riho_11'>Already have an account? Sign in</p>
        </div>
      </div>
    </div>
   <div className='riho_10'>
      <h1 className='riho_12'>Why drive with us</h1>
      <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_1152,h_270/v1536163470/assets/3a/a87102-5c54-478c-8a98-0df3a951a202/original/whyDriveWithUs_desktop.svg' />
      <div className="riho_10">
    <div className="riho_12">
      <div className="riho_13">
        <img 
          src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1535521901/assets/04/2e9cbe-6142-4d19-bea4-627a1967cc74/original/calendar.svg" 
          alt="Calendar Icon" 
          className="riho_14"
        />
        <p className="riho_16">Set your own hours</p>
        <p className="riho_17">You decide when and how often you drive.</p>
      </div>
      <div className="riho_13">
        <img 
          src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1535521926/assets/34/56a7a3-6c7b-46fc-a8c6-91d3271b92bd/original/money.svg" 
          alt="Calendar Icon" 
          className="riho_14"
        />
        <p className="riho_16">Get paid fast</p>
        <p className="riho_17">Weekly payments in your bank account</p>
      </div>
      <div className="riho_13">
        <img 
          src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1535521963/assets/d3/c75f64-aac4-4df0-abd1-561b7ce4feab/original/support.svg" 
          alt="Calendar Icon" 
          className="riho_14"
        />
        <p className="riho_16">Get support at every turn</p>
        <p className="riho_17">If there’s anything that you need, you can reach us anytime</p>
      </div>
    </div>
  </div><br/><br/>
  </div>
  <Footer/>
  </div>
  );
};

export default DriveHome;
