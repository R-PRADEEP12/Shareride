import React, { useEffect, useState } from 'react';
import './AdminDash.css'; 

const AdminDash = () => {
    const [activeSection, setActiveSection] = useState('availability');
    const [availability, setAvailability] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [availabilitySearchTerm, setAvailabilitySearchTerm] = useState('');
    const [bookingSearchTerm, setBookingSearchTerm] = useState('');
    const [editingBookingId, setEditingBookingId] = useState(null);
    const [editingBookingData, setEditingBookingData] = useState({ status: '' });

    useEffect(() => {
        const dummyAvailability = [
            { id: 1, driver: 'Mike Johnson', vehicle: 'Toyota Camry', availableFrom: '08:00 AM', availableTo: '05:00 PM' },
            { id: 2, driver: 'Emily Davis', vehicle: 'Honda Accord', availableFrom: '09:00 AM', availableTo: '06:00 PM' }
        ];
        
        const dummyBookings = [
            { id: 1, rider: 'John Doe', origin: '123 Main St', destination: '456 Elm St', status: 'Pending', assignedDriver: null },
            { id: 2, rider: 'Jane Smith', origin: '789 Maple Ave', destination: '101 Pine St', status: 'Pending', assignedDriver: null }
        ];

        setTimeout(() => {
            setAvailability(dummyAvailability);
            setBookings(dummyBookings);
            setLoading(false);
        }, 1000);
    }, []);

    const handleDeleteBooking = (id) => {
        setBookings(bookings.filter(booking => booking.id !== id));
    };

    const handleAssignDriver = (bookingId, driverId) => {
        setBookings(bookings.map(booking => 
            booking.id === bookingId ? { ...booking, assignedDriver: driverId, status: 'Assigned' } : booking
        ));
    };

    const handleEditBooking = (id) => {
        const bookingToEdit = bookings.find(booking => booking.id === id);
        setEditingBookingId(id);
        setEditingBookingData({ status: bookingToEdit.status });
    };

    const handleSaveBooking = () => {
        setBookings(bookings.map(booking => 
            booking.id === editingBookingId ? { ...booking, ...editingBookingData } : booking
        ));
        setEditingBookingId(null);
        setEditingBookingData({ status: '' });
    };

    const handleCancelBooking = (id) => {
        setBookings(bookings.map(booking => 
            booking.id === id ? { ...booking, status: 'Cancelled', assignedDriver: null } : booking
        ));
    };

    const filteredAvailability = availability.filter(item => 
        item.driver.toLowerCase().includes(availabilitySearchTerm.toLowerCase())
    );
    const filteredBookings = bookings.filter(booking => 
        booking.rider.toLowerCase().includes(bookingSearchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="admin-dashboard">
            <div className="sidebars">
                <h2>Admin Dashboard</h2>
                <div className="dropdown">
                    <button className="dropbtn">Dashboard</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={() => setActiveSection('availability')}>Ride Sharer Availability</a>
                        <a href="#" onClick={() => setActiveSection('bookings')}>Rider Bookings</a>
                    </div>
                </div>
            </div>
            <div className="main-content">
                {activeSection === 'availability' && (
                    <div>
                        <h2>Ride Sharer Availability</h2>
                        <input
                            type="text"
                            placeholder="Search Availability..."
                            value={availabilitySearchTerm}
                            onChange={(e) => setAvailabilitySearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Driver</th>
                                    <th>Vehicle</th>
                                    <th>Available From</th>
                                    <th>Available To</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAvailability.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.driver}</td>
                                        <td>{item.vehicle}</td>
                                        <td>{item.availableFrom}</td>
                                        <td>{item.availableTo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeSection === 'bookings' && (
                    <div>
                        <h2>Rider Bookings</h2>
                        <input
                            type="text"
                            placeholder="Search Bookings..."
                            value={bookingSearchTerm}
                            onChange={(e) => setBookingSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Rider</th>
                                    <th>Origin</th>
                                    <th>Destination</th>
                                    <th>Status</th>
                                    <th>Assigned Driver</th>
                                    <th>Assign Driver</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td>{booking.id}</td>
                                        <td>{booking.rider}</td>
                                        <td>{booking.origin}</td>
                                        <td>{booking.destination}</td>
                                        <td>
                                            {editingBookingId === booking.id ? (
                                                <select
                                                    value={editingBookingData.status}
                                                    onChange={(e) => setEditingBookingData({ ...editingBookingData, status: e.target.value })}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Assigned">Assigned</option>
                                                    <option value="Completed">Completed</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                            ) : (
                                                booking.status
                                            )}
                                        </td>
                                        <td>
                                            {booking.assignedDriver ? 
                                                filteredAvailability.find(avail => avail.id === booking.assignedDriver)?.driver
                                                : 'None'
                                            }
                                        </td>
                                        <td>
                                            {editingBookingId === booking.id ? (
                                                <select
                                                    onChange={(e) => handleAssignDriver(booking.id, e.target.value)}
                                                    defaultValue={booking.assignedDriver || ''}
                                                >
                                                    <option value="">None</option>
                                                    {filteredAvailability.map(avail => (
                                                        <option key={avail.id} value={avail.id}>{avail.driver}</option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <button onClick={() => handleEditBooking(booking.id)}>Assign Driver</button>
                                            )}
                                        </td>
                                        <td>
                                            {editingBookingId === booking.id ? (
                                                <>
                                                    <button className="save-button" onClick={handleSaveBooking}>Save</button>
                                                    <button className="cancel-button" onClick={() => setEditingBookingId(null)}>Cancel</button>
                                                </>
                                            ) : (
                                                <>
                                                    <button className="cancel-button" onClick={() => handleCancelBooking(booking.id)}>Cancel Booking</button>
                                                    <button className="delete-button" onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDash;
