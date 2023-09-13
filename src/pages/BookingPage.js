import React from "react";
import { useState } from "react";
import './BookingPage.css';

function BookingPage (
    availableTimes,
    dispatchOnDateChange,
    submitForm
) {

    const defaultTime = availableTimes[0];
    
    const [name, setName] = useState("");
    const [date, setDate] = useState(defaultTime);
    const [time, setTime] = useState("");
    const [numberGuests, setNumberGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const isNameValid = () => name !=='';
    const isDateValid = () => date !=='';
    const isTimeValid = () => time !=='';
    const isNumberGuestsValid = () => numberGuests !=='';
    const isOccasionValid = () => occasion !=='';

    const areAllFieldsValid = () => 
        isNameValid()
        && isDateValid()
        && isTimeValid()
        && isNumberGuestsValid()
        && isOccasionValid();

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({ name, date, time, numberGuests, occasion});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="Booking-field">
                <label htmlFor="name">Name</label>
                <input 
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    name="name"
                    value={name}
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="Booking-field">
                <label>Choose Date</label>
                <input 
                    type="date"
                    value={date}
                    required={true}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => {
                        setDate(e.target.value)
                        dispatchOnDateChange(e.target.value)
                    }}
                />
            </div>
            <div className="Booking-field">
                <label>Choose Time</label>
                <select value={time} required={true} onChange={(e) => setTime(e.target.value)}>
                    <option disabled={true} value="">please select</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                </select>
            </div>
            <div className="Booking-field">
                <label>Number of Guests</label>
                <input 
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={numberGuests}
                    required={true}
                    onChange={(e) => setNumberGuests(e.target.value)}
                />
            </div>
            <div className="Booking-field">
                <label>Occasion</label>
                <select value={occasion} required={true} onChange={(e) => setOccasion(e.target.value)}>
                    <option disabled={true} value="">please select</option>
                    <option value="None">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
            </div>
            <button disabled={!areAllFieldsValid()} type="submit">
                Make Reservation
            </button>
        </form>
    );
}

export default BookingPage;