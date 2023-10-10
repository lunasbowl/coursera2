import React from "react";
import userImage from './assets/user.png';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
    {
        fullName: 'Maria Sanchez',
        image: userImage,
        rating: [1, 1, 1, 1, 0.5],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        fullName: 'Brandon Ming',
        image: userImage,
        rating: [1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        fullName: 'Antony Clifton',
        image: userImage,
        rating: [1, 1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
];


function Testimonial () {
    return (
        <section className="testimonials">
            <div className="container grid">
                <h2>What people say about us!</h2>
                {customers.map((customer, index) =>
                    <TestimonialCard key={index} customer={customer} />
                )}
            </div>
        </section>
    )
}

export default Testimonial;