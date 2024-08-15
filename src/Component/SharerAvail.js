import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SharerAvail.css';
import axios from 'axios';

function SharerAvail() {
  const [availability, setAvailability] = useState(1);
  const [startHour, setStartHour] = useState('');
  const [startMinute, setStartMinute] = useState('');
  const [startMeridiem, setStartMeridiem] = useState('AM');
  const [vehicleType, setVehicleType] = useState('bike');
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [minimumAmount, setMinimumAmount] = useState('');
  const [travelDate, setTravelDate] = useState(''); // State for travel date

  const navigate = useNavigate();

  const handleHourChange = (e) => {
    const value = e.target.value;
    if (/^([1-9]|1[0-2])?$/.test(value)) {
      setStartHour(value);
    }
  };

  const handleMinuteChange = (e) => {
    const value = e.target.value;
    if (/^([0-5]?[0-9])?$/.test(value)) {
      setStartMinute(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      leavingFrom,
      goingTo,
      travelDate,
      startHour: parseInt(startHour),
      startMinute: parseInt(startMinute),
      startMeridiem,
      availability,
      minimumAmount: parseFloat(minimumAmount),
      vehicleType
    };

    try {
      const response = await axios.post('http://localhost:8080/shareavail/post', formData);
      console.log('Successfully submitted:', response.data);
      // Navigate to ApplyAvail page with form data
      navigate('/success', { state: formData });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="shav_1">
      <div className="shav_2">
        <h1 className="shav_3">Become a RideSharer and save on travel costs by sharing your ride with passengers.</h1>
        <form onSubmit={handleSubmit} className="shav_4">
          <div className="shav_5">
            <input
              type="text"
              placeholder="Leaving from..."
              className="shav_6"
              value={leavingFrom}
              onChange={(e) => setLeavingFrom(e.target.value)}
            />
            <input
              type="text"
              placeholder="Going to..."
              className="shav_6"
              value={goingTo}
              onChange={(e) => setGoingTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Minimum amount..."
              className="shav_6"
              value={minimumAmount}
              onChange={(e) => setMinimumAmount(e.target.value)}
            />
            <input
              type="date"
              className="shav_6" // Applying the same styles as other inputs
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              required // Make the date required
            />
          </div>
          <div className="shav_7">
            <label className="shav_8">Time:</label>
            <div className="shav_9">
              <input
                type="text"
                value={startHour}
                onChange={handleHourChange}
                placeholder="HH"
                maxLength={2}
                className="shav_10"
              />
              <span className="shav_11">:</span>
              <input
                type="text"
                value={startMinute}
                onChange={handleMinuteChange}
                placeholder="MM"
                maxLength={2}
                className="shav_10"
              />
              <select value={startMeridiem} onChange={(e) => setStartMeridiem(e.target.value)} className="shav_12">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
          <div className="shav_7">
            <label className="shav_8">Vehicle Type:</label>
            <div className="shav_9">
              <label className="shav_12">
                <input
                  type="radio"
                  value="bike"
                  checked={vehicleType === 'bike'}
                  onChange={(e) => setVehicleType(e.target.value)}
                /> Bike
              </label>
              <label className="shav_12">
                <input
                  type="radio"
                  value="car"
                  checked={vehicleType === 'car'}
                  onChange={(e) => setVehicleType(e.target.value)}
                /> Car
              </label>
            </div>
          </div>
          <div className="shav_13">
            <label className="shav_14">Availability:</label>
            <button type="button" onClick={() => setAvailability(availability > 1 ? availability - 1 : 1)} className="shav_15">-</button>
            <span className="shav_16">{availability}</span>
            <button type="button" onClick={() => setAvailability(availability < 3 ? availability + 1 : 3)} className="shav_15">+</button>
          </div>
          <button type="submit" className="shav_17">Publish a ride</button>
        </form>
      </div>
      <div className="shav_19">
        <h1 className="shav_20">Drive. Share. Save.</h1>
        <div className="shav_21">
          <div className="shav_22">
            <h2 className="shav_23">Drive</h2>
            <p>Keep your plans! Hit the road just as you anticipated and make the most of your vehicle’s empty seats.</p>
          </div>
          <div className="shav_22">
            <h2 className="shav_23">Share</h2>
            <p>Travel with good company. Share a memorable ride with travelers from all walks of life.</p>
          </div>
          <div className="shav_22">
            <h2 className="shav_23">Save</h2>
            <p>Tolls, petrol, electricity... Easily divvy up all the costs with other passengers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharerAvail;
