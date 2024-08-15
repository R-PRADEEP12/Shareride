import React, { useState } from 'react';
import './Payment.css'; // Import CSS for styling

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi'); // Default to UPI
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    switch (paymentMethod) {
      case 'upi':
        alert('Processing UPI payment. This is a mock implementation.');
        break;
      case 'card':
        alert('Processing Card payment. This is a mock implementation.');
        break;
      case 'netbanking':
        alert('Processing Net Banking payment. This is a mock implementation.');
        break;
      default:
        alert('Please select a payment method.');
    }

    setLoading(false);
  };

  return (
    <div className="payment-container">
      <h2>Make a Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            Card
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="netbanking"
              checked={paymentMethod === 'netbanking'}
              onChange={() => setPaymentMethod('netbanking')}
            />
            Net Banking
          </label>
        </div>

        <div className="payment-details">
          {paymentMethod === 'upi' && (
            <div className="upi-details">
              <label>
                UPI ID:
                <input type="text" placeholder="Enter your UPI ID" required />
              </label>
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="card-details">
              <label>
                Card Number:
                <input type="text" placeholder="Card Number" required />
              </label>
              <label>
                Expiry Date:
                <input type="text" placeholder="MM/YY" required />
              </label>
              <label>
                CVV:
                <input type="text" placeholder="CVV" required />
              </label>
            </div>
          )}

          {paymentMethod === 'netbanking' && (
            <div className="netbanking-details">
              <label>
                Bank Name:
                <select required>
                  <option value="">Select Bank</option>
                  <option value="indian">Indian Bank</option>
                  <option value="union">Union Bank</option>
                  <option value="sbi">State Bank of India</option>
                </select>
              </label>
              <label>
                Account Number:
                <input type="text" placeholder="Account Number" required />
              </label>
              <label>
                IFSC Code:
                <input type="text" placeholder="IFSC Code" required />
              </label>
            </div>
          )}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
