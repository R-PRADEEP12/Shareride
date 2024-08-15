import React from "react";
import { Outlet } from "react-router-dom";
import './DriverHome.css';
import { Link } from "react-router-dom";
import DriveNav from "./DriveNav";

function Driverhome() {
  return (
    <div>
      <DriveNav/>
      <Outlet/> 
      <div className="rimho_11">
        <div className="rimho_12">
          <h1 className="rimho_13">Welcome to ShareRide!</h1>
          <p className="rimho_14">Turn your spare time into earnings with our ride-sharing platform.</p>
          <p className="rimho_14">Become a ride sharer and enjoy the flexibility to choose your own hours while earning money on the go.</p>
          <div className="rimho_15">
            <Link to="/sharerbook">
              <div className="rimho_16"><Link to='/shareravail'>Give Availability</Link></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Driverhome;
