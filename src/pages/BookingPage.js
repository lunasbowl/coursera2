import React, { useState, useEffect } from "react";
import { getAvailableTimes, submitBooking } from "./Booking";
import './BookingPage.css';
import ConfirmedBooking from "./ConfirmedBooking";

function BookingPage () {

    // const defaultTime = availableTimes[0];
    
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numberGuests, setNumberGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const [availableTimes, setAvailableTimes] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [nameError, setNameError] = useState("");
    const [dateError, setDateError] = useState("");
    const [timeError, setTimeError] = useState("");
    const [numberGuestsError, setNumberGuestsError] = useState("");
    const [occasionError, setOccasionError] = useState("");

    const isNameValid = () => name !=='';
    const isDateValid = () => date !=='';
    const isTimeValid = () => time !=='';
    const isNumberGuestsValid = () => numberGuests !=='';
    const isOccasionValid = () => occasion !=='';

    const validateForm = () => {
        setNameError(isNameValid() ? "" : "Please enter your name.");
        setDateError(isDateValid() ? "" : "Please choose a date.");
        setTimeError(isTimeValid() ? "" : "Please choose a time.");
        setNumberGuestsError(isNumberGuestsValid() ? "" : "Please enter the number of guests.");
        setOccasionError(isOccasionValid() ? "" : "Please select an occasion.");
    
        return isNameValid() && isDateValid() && isTimeValid() && isNumberGuestsValid() && isOccasionValid();
      };

    useEffect(() => {
        async function fetchTimes() {
            const times = await getAvailableTimes(date);
            setAvailableTimes(times);
        }
        fetchTimes();
    }, [date]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const success = await submitBooking({ name, date, time, numberGuests, occasion});
            if (success) {
                setFormSubmitted(true);
            } else {
                
            }
        }
    };

    return (
        <div>
            {!formSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <div className="Booking-field">
                        <label htmlFor="name">Name</label>
                        <input 
                            id="name"
                            type="text"
                            placeholder="Enter your name..."
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className="error-message">{nameError}</p>
                    </div>
                    <div className="Booking-field">
                        <label>Choose Date</label>
                        <input 
                            type="date"
                            value={date}
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => {
                                setDate(e.target.value)
                                // dispatchOnDateChange(e.target.value)
                            }}
                        />
                        <p className="error-message">{dateError}</p>
                    </div>
                    <div className="Booking-field">
                        <label>Choose Time</label>
                        <select value={time}  onChange={(e) => setTime(e.target.value)}>
                            <option disabled={true} value="">please select</option>
                            {availableTimes.map((availableTime, index) => (
                                <option key={index} value={availableTime}>
                                    {availableTime}
                                </option>
                            ))}
                        </select>
                        <p className="error-message">{timeError}</p>
                    </div>
                    <div className="Booking-field">
                        <label>Number of Guests</label>
                        <input 
                            type="number"
                            placeholder="2"
                            min="2"
                            max="10"
                            value={numberGuests}
                            onChange={(e) => setNumberGuests(e.target.value)}
                        />
                        <p className="error-message">{numberGuestsError}</p>
                    </div>
                    <div className="Booking-field">
                        <label>Occasion</label>
                        <select value={occasion}  onChange={(e) => setOccasion(e.target.value)}>
                            <option disabled={true} value="">please select</option>
                            <option value="None">None</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                        <p className="error-message">{occasionError}</p>
                    </div>
                    <button type="submit">
                        Make Reservation
                    </button>
                </form>
            ) : (
                <ConfirmedBooking />
            )}
        </div>
    );
}

export default BookingPage;