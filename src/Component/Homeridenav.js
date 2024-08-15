import React from 'react';
import './Homeridenav.css'; // Ensure this file contains the styles
import Footer from './Footer';
import Navbar from './Navbar';

const Homeridenav = () => {
  return (
    <div>
      <Navbar/>
      <div className="drho_1">
        <div className="drho_2">
          <img 
            src="https://images.playground.com/2bf81a3e99af4d1e975fa87af3176b23.jpeg" 
            alt="Ride Sharing" 
            className="drho_3" 
          />
        </div>
        <div className="drho_4">
          <p className="drho_5">
            Ride with Comfort.<br />
          </p>
          <div className="drho_6">
            <p className="drho_7">Experience hassle-free rides with Share Ride. Enjoy comfortable and safe journeys with our reliable drivers. Our platform is designed to meet your travel needs while offering you convenience and flexibility. Whether it's a daily commute or a special trip, Share Ride ensures a pleasant experience every time. Book your ride now and enjoy the journey!</p>
            <p className='drho_8'>Already a driver? Sign in</p>
          </div>
        </div>
      </div>
      <div className='drho_9'>
        <h1 className='drho_10'>Why Ride with Us</h1>
        <img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_1152,h_270/v1536163470/assets/3a/a87102-5c54-478c-8a98-0df3a951a202/original/whyDriveWithUs_desktop.svg' alt="Why Ride with Us" />
        <div className="drho_11">
          <div className="drho_12">
            <img 
              src="https://image.shutterstock.com/image-vector/convenient-scheduling-icon-260nw-1678349845.jpg" 
              alt="Flexible Scheduling Icon" 
              className="drho_13"
            />
            <p className="drho_14">Flexible Scheduling</p>
            <p className="drho_15">Choose the ride time that fits your schedule.</p>
          </div>
          <div className="drho_12">
            <img 
              src="https://image.shutterstock.com/image-vector/affordable-rates-icon-260nw-1619808956.jpg" 
              alt="Affordable Rates Icon" 
              className="drho_13"
            />
            <p className="drho_14">Affordable Rates</p>
            <p className="drho_15">Enjoy competitive pricing for every ride.</p>
          </div>
          <div className="drho_12">
            <img 
              src="https://image.shutterstock.com/image-vector/24-hours-support-icon-260nw-1361297038.jpg" 
              alt="Support Icon" 
              className="drho_13"
            />
            <p className="drho_14">24/7 Support</p>
            <p className="drho_15">Get assistance anytime, day or night.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homeridenav;
