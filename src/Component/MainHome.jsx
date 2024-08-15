import React from "react";
import RiderNav from "./RiderNav";
import { Outlet } from "react-router-dom";
import './MainHome.css';
import { Link } from "react-router-dom";
function MainHome(){
    return(
        <div>
        <RiderNav/>
        <Outlet/> 
      <div className="rimho_11">
        <div className="rimho_12">
          <h1 className="rimho_13">Welcome to ShareRide!</h1>
          <p className="rimho_14">Join our reliable ride-sharing service and experience the difference.</p>
          <p className="rimho_14">Whether you need a ride or are looking to book one, we've got you covered.</p>
          <div className="rimho_15">
            <Link to="/riderbook">
              <div className="rimho_16"><Link to='/bookride'>Book a Ride</Link></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
}
export default MainHome;