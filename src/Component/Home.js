import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineSchedule } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { IoIosBody } from "react-icons/io";
import { FaGift } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {
  return (
    <div className="hom_1">
      <Navbar/>
      <div className="hom_10">
        <img 
          src="https://www.livelaw.in/h-upload/2023/03/09/1500x900_462538-bike-taxi.webp" 
          alt="Description of the image" 
          className="hom_11" 
        />
        <div className="hom_12">
          <h1 className="hom_13">Let's Ride</h1>
          <div className="hom_14">
          <Link to='/register'> <button className="hom_15">Apply to Share ride</button></Link> 
           <Link to='signup' ><button className="hom_15">Sign up to rider</button></Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="hom_16">
        <div className="hom_17">
          <h2 className="hom_18">DRIVE WITH SHARE RIDE</h2>
          <p className="hom_19">
            Set your own hours. Earn on<br />
            your own terms.<br/>
            <div className='hom_23'>
            <LiaMoneyBillWaveSolid className="home_22" />
            <h6 className='hom_24'>Reliable earning:</h6>
            </div>
            <p className='hom_25'>Make money, keep your tips, and cash out when you want.</p>
            <div className='hom_23'>
            <MdOutlineSchedule className="home_22" />
            <h6 className='hom_24'>A flexible schedule:</h6>
            </div>
            <p className='hom_25'>Be your own boss and drive whenever it works for you.</p>
            <div className='hom_23'>
            <BsFillLightningChargeFill className="home_22" />
            <h6 className='hom_24'>Get paid instantly:</h6>
            </div>
            <p className='hom_25'>Cash out your earnings whenever you want</p>
            <div className='hom_26'>
            <button className='hom_27'>Apply to drive</button>
            <p className='hom_28'>How driver pay works </p>
            <GrFormNextLink className="home_29" />

            </div>
          </p>
          <div>
          </div>
        </div>
        <div className="hom_20">
          <img 
            src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL0hvdy10by1hY3RpdmF0ZS10cmFuc2l0aW9uLWxlbnNlcy13aXRob3V0LXN1bi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==" 
            alt="Ride Sharing" 
            className="hom_21" 
          />
        </div>
      </div>
      <br/><br/>
      <div className="hom_30">
      <div className="hom_31">
        <img 
          src="https://images.ctfassets.net/q8mvene1wzq4/3cHTnz98k6rNl3GEcze3xk/1f33e4f2b6036b2b652ef0fd7fb8fe0d/Select_Lyft_EN_v5.png?w=1500&q=60&fm=webp" 
          alt="Ride Sharing" 
          className="hom_32" 
        />
      </div>
      <div className="hom_33">
        <h2 className="hom_34">RIDE WITH SHARE RIDE</h2>
        <p className="hom_35">
        Ready, set, go<br />
        in just a few quick taps<br/>
        <p className='hom_44'>No matter your destination, we’ll get you where you need to go</p>
          <div className='hom_36'>
            <IoIosBody className="hom_37" />
            <h6 className='hom_38'>Get a reliable ride in minutes</h6>
          </div>
          <div className='hom_36'>
            <RiCalendarScheduleLine className="hom_37" />
            <h6 className='hom_38'>Schedule your ride in advance</h6>
          </div>
          <div className='hom_36'>
            < FaGift className="hom_37" />
            <h6 className='hom_38'>Earn rewards on every ride
            </h6>
          </div>
          <div className='hom_40'>
            <button className='hom_41'>SignUp to ride</button>
            <p className='hom_42'>Learn more about riding with Share ride </p>
            <GrFormNextLink className="hom_43" />
          </div>
        </p>
      </div>
    </div>
    <br/>
    <div className='hom_45'>
      <div className="hom_46">
        <h2 className="hom_47">SAFETY FIRST</h2>
        <p className="hom_48">
          Your safety comes first.<br />
          Always.<br />
        <div className='hom_49'>
          <p className='hom_50'>
            We look out for you before, during, and after every<br />
            single ride. And we check in with you during your<br />
            ride to help you get where you need to go. If you<br />
            ever need it, we’re standing by, ready to help.
          </p>
        </div>
        <div className='hom_53'>
  <button className='hom_54'>Learn about<br/>safety</button>

  <p className='hom_55'>Community<br/>guidelines
  <GrFormNextLink className="hom_56" /></p>
</div>
        </p>
      </div>
      <div className="hom_57">
        <img 
          src="https://images.ctfassets.net/q8mvene1wzq4/3tEhujwTqY4G4LXZ0yZltF/c544aaffe54de76aacce746d9db34d9b/home_pinkpaint_safety.jpg?w=1500&q=60&fm=webp" 
          alt="Ride Sharing" 
          className="hom_58" 
        />
      </div>
    </div>
   <div className='hom_69'>
  <div className="hom_59">
    <img 
      src="https://images.ctfassets.net/q8mvene1wzq4/4sWP94iWODBwQzOY6rFn0N/f34033d586a917eb2dc63209cb23d955/20210717_Lyft_HealthClinic_V4.jpg?w=1500&q=60&fm=webp" 
      alt="Ride Sharing" 
      className="hom_60" 
    />
  </div>
  <div className="hom_61">
    <p className="hom_63">
    Making millions of rides<br/>more accessible
      <br />
    <div className='hom_64'>
      <p className='hom_65'>
      A ride is more than just a ride. It's a gateway to<br/>opportunities and jobs. A connection to community.<br/>
      And access to essentials like groceries, healthcare,<br/>and polling places. Our Lyft Up initiative makes rides<br/>
      more accessible for millions, and helps bring<br/>communities even closer.
      </p>
    </div>
    <div className='hom_53'>
      <p className='hom_67'>learn more about Share ride programs
      <GrFormNextLink className="hom_68" /></p>
    </div>
    </p>
  </div>
</div>
<div className='hom_70'>
  <div className="hom_71">
    <img 
      src="https://img.freepik.com/premium-vector/cartoon-biker-riding-motorcycle-illustration-mascot-logo-vector_488085-607.jpg?w=2000" 
      alt="Logo"
      className="hom_72" 
    />
    <p className="hom_73">Share Ride <br/>Business</p>
  </div>
  <div className="text-container">
    <p className="hom_74">We help move</p>
    <div className="slider">
      <div className="slider-text">guests</div>
      <div className="slider-text">patients</div>
      <div className="slider-text">employees</div>
      <div className="slider-text">visitors</div>
    </div>
    <p className="hom_75">From affordable transportation solutions to effortless expensing, we’ll help drive your business forward by</p>
    <p className="hom_75">getting your people where they need to go.</p>
    <button className='hom_77'>Learn More</button>
  </div>
  <div className="hom_78">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*hm4QNpObAKN4CN_Rws4TLA.png" alt="Image 1" className="hom_79" />
      <img src="https://cinoptics.com/wp-content/uploads/2014/05/Ascension-logo1.jpg" alt="Image 2" className="hom_79" />
      <img src="https://www.shutterstock.com/image-vector/bangalore-karnataka-india-23-september-600nw-2366885943.jpg" alt="Image 3" className="hom_79" />
    </div>
</div>
<Footer/>
</div>

  );
}
export default Home;