import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './BookingPage.css';
import './PaymentPage';

const BookingPage = ({ match }) => {
    const movieName = match ? match.params.movieName : null;
    const [proceededToPayment, setProceededToPayment] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const [seatAvailability, setSeatAvailability] = useState([
        true, true, true, true, true, true, false, false, true, true,
        true, false, true, true, false, true, false, true, true, false,
        true, true, true, true, true, true, true, false, true, true,
        false, true, false, true, true, true, true, false, true, true, false, true
    ]);

    const handleSeatClick = (index) => {
        const updatedAvailability = [...seatAvailability];
        updatedAvailability[index] = !updatedAvailability[index];
        setSeatAvailability(updatedAvailability);

        if (!selectedSeats.includes(index)) {
            setSelectedSeats([...selectedSeats, index]);
        } else {
            setSelectedSeats(selectedSeats.filter(seat => seat !== index));
        }
    };

    const handleProceedToPayment = () => {
        setProceededToPayment(true);
    };

    return (
        <div className="booking-page">
            <h2>Booking {movieName}</h2>
            <p>Selected Seats: {selectedSeats.length}</p>
            <div className="seat-container">
                {seatAvailability.map((available, index) => (
                    <div 
                        key={index} 
                        className={available ? "seat available" : "seat unavailable"}
                        onClick={() => handleSeatClick(index)}
                    >
                        {available ? "Available" : "Unavailable"}
                    </div>
                ))}
            </div>
            {!proceededToPayment && (
                <Link 
                    to={`/payment/${movieName}`} 
                    className="payment-link" 
                    onClick={handleProceedToPayment}
                >
                    Proceed to Payment
                </Link>
            )}
            {proceededToPayment && (
                <Link 
                    to={{
                        pathname: `/payment/${movieName}`,
                        state: { selectedSeats }
                    }}
                    className="payment-link"
                >
                    Proceed to Payment
                </Link>
            )}
        </div>
    );
};

export default BookingPage;
