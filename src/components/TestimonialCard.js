import React from "react";
import './TestimonialCard.css';

function TestimonialCard ({ customer }) {
    return (
        <article className="testimonial-card">
            <img src={customer.image} alt={customer.fullName}/>
            <h4>{customer.fullName}</h4>
            <span>{customer.rating}</span>
            <blockquote><p>"{customer.says}"</p></blockquote>
        </article>
    );
};

export default TestimonialCard;