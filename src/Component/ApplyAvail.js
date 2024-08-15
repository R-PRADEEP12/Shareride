import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ApplyAvail.css'; // Import the CSS file

function ApplyAvail() {
  const location = useLocation();
  const { state } = location;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(state || {
    leavingFrom: '',
    goingTo: '',
    startHour: '',
    startMinute: '',
    startMeridiem: 'AM',
    availability: 1,
    minimumAmount: '',
    vehicleType: 'bike',
    date: '',
  });
  const [isDeleted, setIsDeleted] = useState(false);
  const [message, setMessage] = useState('');
  const [id, setId] = useState(null); // Store the ID

  useEffect(() => {
    // Fetch the entry by unique fields and get the ID
    const fetchShareAvail = async () => {
      try {
        const response = await fetch(`http://localhost:8080/shareavail/details?leavingFrom=${formData.leavingFrom}&goingTo=${formData.goingTo}`);
        if (response.ok) {
          const data = await response.json();
          setId(data.id); // Set the fetched ID
        } else {
          console.error('Failed to fetch share availability');
        }
      } catch (error) {
        console.error('Error fetching share availability:', error);
      }
    };

    fetchShareAvail();
  }, [formData.leavingFrom, formData.goingTo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === null) {
      setMessage('ID not found. Please try again.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/shareavail/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update the record: ${errorText}`);
      }

      setIsEditing(false);
      setMessage('Your ride share information has been successfully updated.');
    } catch (error) {
      console.error('Error updating the record:', error);
      setMessage('Error updating the record. Please try again.');
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost:8080/shareavail/delete', {
        method: 'DELETE',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete the record: ${errorText}`);
      }

      setFormData({
        leavingFrom: '',
        goingTo: '',
        startHour: '',
        startMinute: '',
        startMeridiem: 'AM',
        availability: 1,
        minimumAmount: '',
        vehicleType: 'bike',
        date: '',
      });
      setIsDeleted(true);
      setMessage('Your ride share information has been successfully deleted.');
    } catch (error) {
      console.error('Error deleting the record:', error);
      setMessage('Error deleting the record. Please try again.');
    }
  };

  if (isDeleted) {
    return (
      <div className="apply-avail-container">
        <h1>Success!</h1>
        <p>{message}</p>
      </div>
    );
  }

  if (!state) {
    return (
      <div className="apply-avail-container">
        <h1>Success!</h1>
        <p>Your ride share information has been successfully submitted.</p>
      </div>
    );
  }

  return (
    <div className="apply-avail-container">
      {message && <div className={`message ${message.startsWith('Error') ? 'error-message' : 'success-message'}`}>{message}</div>}
      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <h2>Edit Ride Share Information</h2>
          <div className="form-group">
            <label>Leaving From:</label>
            <input
              type="text"
              name="leavingFrom"
              value={formData.leavingFrom}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Going To:</label>
            <input
              type="text"
              name="goingTo"
              value={formData.goingTo}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Minimum Amount:</label>
            <input
              type="text"
              name="minimumAmount"
              value={formData.minimumAmount}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
  <label>Date:</label>
  <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    className="input-field"
  />
</div>
          <div className="form-group time-group">
            <label>Time:</label>
            <input
              type="text"
              name="startHour"
              value={formData.startHour}
              onChange={handleChange}
              placeholder="HH"
              maxLength={2}
              className="input-field time-field"
            />
            <span>:</span>
            <input
              type="text"
              name="startMinute"
              value={formData.startMinute}
              onChange={handleChange}
              placeholder="MM"
              maxLength={2}
              className="input-field time-field"
            />
            <select
              name="startMeridiem"
              value={formData.startMeridiem}
              onChange={handleChange}
              className="input-field time-field"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div className="form-group">
            <label>Vehicle Type:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="vehicleType"
                  value="bike"
                  checked={formData.vehicleType === 'bike'}
                  onChange={handleChange}
                /> Bike
              </label>
              <label>
                <input
                  type="radio"
                  name="vehicleType"
                  value="car"
                  checked={formData.vehicleType === 'car'}
                  onChange={handleChange}
                /> Car
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Availability:</label>
            <div className="availability-control">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, availability: Math.max(prev.availability - 1, 1) }))}
                className="btn adjust-btn"
              >-</button>
              <span>{formData.availability}</span>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, availability: Math.min(prev.availability + 1, 10) }))}
                className="btn adjust-btn"
              >+</button>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn save-btn">Save Changes</button>
            <button type="button" onClick={handleCancelEdit} className="btn cancel-btn">Cancel</button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Ride published Successfully</h2>
          <h2>Ride Details:</h2>
          <table className="details-table">
            <tbody>
              <tr>
                <td><strong>Leaving From:</strong></td>
                <td>{formData.leavingFrom}</td>
              </tr>
              <tr>
                <td><strong>Going To:</strong></td>
                <td>{formData.goingTo}</td>
              </tr>
              <tr>
  <td><strong>Date:</strong></td>
  <td>{formData.date}</td>
</tr>
              <tr>
                <td><strong>Time:</strong></td>
                <td>{formData.startHour}:{formData.startMinute} {formData.startMeridiem}</td>
              </tr>
              <tr>
                <td><strong>Availability:</strong></td>
                <td>{formData.availability}</td>
              </tr>
              <tr>
                <td><strong>Minimum Amount:</strong></td>
                <td>{formData.minimumAmount}</td>
              </tr>
              <tr>
                <td><strong>Vehicle Type:</strong></td>
                <td>{formData.vehicleType}</td>
              </tr>
            </tbody>
          </table>
          <div className="form-actions">
            <button onClick={handleEdit} className="btn edit-btn">Edit</button>
            <button onClick={handleDelete} className="btn delete-btn">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyAvail;
