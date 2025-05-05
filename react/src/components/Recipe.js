import React, { useEffect, useState } from 'react';
import '../stylesheet.css';

const Recipe = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/recipes/random")
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((err) => console.error("API Error:", err));
    }, []);

    if (!data) return <div>Laden.....</div>;

    const meal = data.meals[0];

    return (
        <main className="recipe">
            <div className="container">
                <div className="recipe-box">
                    <h1>{meal.strMeal}</h1>
                    <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: '300px' }} />
                    <p><strong>Category:</strong> {meal.strCategory}</p>
                    <p><strong>Origin:</strong> {meal.strArea}</p>
                    <p><strong>Instructions:</strong></p>
                    <p>{meal.strInstructions}</p>
                    <a href={meal.strYoutube} target="_blank" rel="noreferrer">Watch on YouTube</a>
                </div>
            </div>
        </main>
    );
};

export default Recipe;