import React from "react";
import './Card.css';

function Card ({ meal }) {
    return (
        <article className="meal-card">
            <div className="meal-card-image">
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className="meal-card-content">
                <h3>{meal.name}</h3>
                <span>{meal.price}</span>
                <p>{meal.description}</p>
            </div>
        </article>
    );
};

export default Card;