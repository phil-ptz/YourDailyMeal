import React from 'react';
import '../stylesheet.css'

const Recipe = () => {
    return (
        <main className="recipe">
            <div className="container">
                <div className="recipe-box">
                    <h2>Spaghetti Carbonara</h2>
                    <p>A classic Italian pasta dish made with eggs, cheese, pancetta and black pepper.</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>400g spaghetti</li>
                        <li>200g pancetta</li>
                        <li>4 large eggs</li>
                        <li>100g Pecorino Romano</li>
                        <li>Black pepper</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Recipe;