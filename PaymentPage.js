import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PaymentPage.css';
import MoviesPage from './MoviesPage';

const PaymentPage = () => {
    const { movieName } = useParams(); 
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
    });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({
            ...paymentDetails,
            [name]: value
        });
    };

    const handlePayment = () => {
        console.log('Payment completed with method:', selectedPaymentMethod);
        setShowSuccessPopup(true);
    };

    const handlePopupClose = () => {
        setShowSuccessPopup(false);
    };

    return (
        <div className="payment-page">
            <h2>Payment {MoviesPage}</h2> 
            {!showSuccessPopup ? (
                <>
                    {!selectedPaymentMethod ? (
                        <div className="payment-options">
                            <label>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Google Pay"
                                    onChange={() => setSelectedPaymentMethod('Google Pay')}
                                />
                                Google Pay
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="PayPal"
                                    onChange={() => setSelectedPaymentMethod('PayPal')}
                                />
                                PayPal
                            </label>
                        </div>
                    ) : (
                        <div className="payment-form">
                            <h3>Payment Details</h3>
                            
                            <label>Card Number:</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={paymentDetails.cardNumber}
                                onChange={handleInputChange}
                            />
                            <button
                                className="payment-button"
                                onClick={handlePayment}
                            >
                                Complete Payment
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="payment-success-popup">
                    <p>Payment Successful!</p>
                    <p>Movie Name: Don {MoviesPage}</p>
                    
                    
                    <button onClick={handlePopupClose}>Close</button>
                </div>
            )}
            <Link to={`/booking/${movieName}`} className="back-link">Back to Booking</Link> 
        </div>
    );
};

export default PaymentPage;
