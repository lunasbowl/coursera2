import React from "react";
import Card from "./Card";
import greekSaladImage from "./assets/greek-salad.jpg";
import bruchettaImage from "./assets/bruchetta.svg";
import lemonDessertImage from "./assets/lemon-dessert.jpg";
import './Special.css';

function Special () {

    const meals = [
        {
            name: 'Greek Salad',
            image: greekSaladImage,
            price: '$12.99',
            description: `Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons.`
        },
        {
            name: 'Bruschetta',
            image: bruchettaImage,
            price: '$6.99',
            description: `Grilled bread smeared with garlic and seasoned with salt and olive oil.`
        },
        {
            name: 'Lemon Dessert',
            image: lemonDessertImage,
            price: '$7.99',
            description: `This comes straight from grandma's recipe book.`
        }
    ]

    return (
        <section className="week-specials">
            <div className="week-specials-header">
                <h2>This Week Specials!</h2>
            </div>
            {meals.map((meal, index) =>
                <Card key={index} meal={meal} />
            )}
        </section>
    );
};

export default Special;