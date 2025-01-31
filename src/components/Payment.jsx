import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';

const Payment = () => {
  const [formData, setFormData] = useState({
    paymentMethod: '',
    cardType: 'mastercard',
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const validateCardNumber = (cardNumber) => /^\d{13,19}$/.test(cardNumber);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'cardNumber' && !validateCardNumber(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNumber: 'Card number must be between 13 and 19 digits.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { cardNumber, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMethod === 'card' && !validateCardNumber(formData.cardNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cardNumber: 'Card number must be between 13 and 19 digits.',
      }));
      return;
    }
    setIsPaymentProcessing(true);
    setTimeout(() => {
      setIsPaymentProcessing(false);
      alert('Payment Successful!');
    }, 2000);
  };

  const handlePaymentMethodChange = (method) => {
    setFormData({ ...formData, paymentMethod: method });
    if (method === 'gpay') {
      simulateGPayPayment();
    } else if (method === 'cod') {
      confirmCODPayment();
    }
  };

  const simulateGPayPayment = () => {
    setIsPaymentProcessing(true);
    setTimeout(() => {
      setIsPaymentProcessing(false);
      setPaymentStatus('Payment with Google Pay successful!');
      alert('Google Pay Payment Successful!');
    }, 2000);
  };

  const confirmCODPayment = () => {
    setPaymentStatus('Cash on Delivery selected. Payment will be collected upon delivery.');
    alert('Cash on Delivery Payment Selected!');
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/pay.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ color: '#d5006d', marginBottom: '20px' }}>Payment</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0)',
          borderRadius: '15px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Payment Method Selection */}
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
          <label style={{ color: '#000000' }}>Select Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={(e) => handlePaymentMethodChange(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #000',
              fontSize: '16px',
              background: '#e374df',
            }}
          >
            <option value="">Choose Payment Method</option>
            <option value="card">Card</option>
            <option value="gpay">Google Pay</option>
            <option value="cod">Cash on Delivery</option>
            <option value="netbanking">Net Banking</option>
          </select>
        </div>

        {formData.paymentMethod === 'card' && (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {/* Card Type Selection Box */}
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '10px',
                padding: '15px',
                border: '2px solid #d5006d',
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <label style={{ color: '#000000', fontSize: '18px', fontWeight: 'bold' }}>
                Select Card Type
              </label>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '15px' }}>
                {['visa', 'mastercard', 'amex'].map((type) => (
                  <label
                    key={type}
                    style={{
                      padding: '10px',
                      border: formData.cardType === type ? `3px solid ${type === 'visa' ? '#1A1F71' : type === 'mastercard' ? '#EB001B' : '#2E77BC'}` : '2px solid gray',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <input
                      type="radio"
                      name="cardType"
                      value={type}
                      checked={formData.cardType === type}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                    />
                    {type === 'visa' && <FaCcVisa size={40} color="#1A1F71" />}
                    {type === 'mastercard' && <FaCcMastercard size={40} color="#EB001B" />}
                    {type === 'amex' && <FaCcAmex size={40} color="#2E77BC" />}
                    <span style={{ marginTop: '5px', fontSize: '14px' }}>{type.toUpperCase()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Card Input Fields */}
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required style={inputStyle} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required style={inputStyle} />
            <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleInputChange} required style={inputStyle} />
            {errors.cardNumber && <p style={{ color: '#d5006d' }}>{errors.cardNumber}</p>}
            <input type="text" name="expiryDate" placeholder="MM/YYYY" value={formData.expiryDate} onChange={handleInputChange} required style={inputStyle} />
            <input type="password" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleInputChange} required style={inputStyle} />

            <button type="submit" disabled={isPaymentProcessing} style={buttonStyle('#d5006d')}>
              {isPaymentProcessing ? 'Processing...' : 'Submit Payment'}
            </button>
          </form>
        )}

        {/* Google Pay and COD Info */}
        {formData.paymentMethod === 'gpay' && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h3 style={{ color: '#d5006d' }}>Google Pay</h3>
            <p>Proceed with your payment via Google Pay for a seamless experience. You will be redirected to the payment gateway.</p>
          </div>
        )}

        {formData.paymentMethod === 'cod' && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h3 style={{ color: '#d5006d' }}>Cash on Delivery</h3>
            <p>Your payment will be collected upon delivery. Please have the exact amount ready for a smooth transaction.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const inputStyle = { width: '48%', padding: '12px', borderRadius: '5px', border: '1px solid #d5006d', fontSize: '16px' };
const buttonStyle = (bgColor) => ({ width: '100%', padding: '12px', backgroundColor: bgColor, color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' });

export default Payment;
