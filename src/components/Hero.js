import React from "react";
import { Link } from "react-router-dom";
import restaurantFoodImage from "./assets/restauranfood.jpg";
import './Hero.css';

function Hero () {
    return (
        <section className="hero">
            <div className="container grid">
                <div className="hero-information">
                    <h1>Little Lemon</h1>
                    <h2 className="hero-sub-title">Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, 
                        focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/booking">
                        <button className="reserve-button">Reserve a Table</button>
                    </Link>
                </div>
                <img className="hero-image" src={restaurantFoodImage} alt="restaurant food" />
            </div>
        </section>
    )
}

export default Hero;