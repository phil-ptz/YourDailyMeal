import React, {useEffect, useState} from "react";
import "../stylesheet.css";

const Meal = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/recipes/random")
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((err) => console.error("API Error:", err));
    }, []);

    if (!data) return (
        <main className="meal-container">
            <p>Laden.....</p>
        </main>
    );

    const meal = data.meals[0];

    if (!meal) return <div className="meal-loading">Loading...</div>;

    return (
        <main className="meal-container">
            <h1 className="meal-title">{meal.strMeal}</h1>
            <img
                className="meal-image"
                src={meal.strMealThumb}
                alt={meal.strMeal}
            />
            <p className="meal-info">
                <strong>Kategorie:</strong> {meal.strCategory}
            </p>
            <p className="meal-info">
                <strong>Herkunft:</strong> {meal.strArea}
            </p>
            <div className="meal-instructions">
                <p><strong>Zubereitung:</strong></p>
                <p>{meal.strInstructions}</p>
            </div>
            <a
                className="meal-link"
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
            >
                Auf YouTube anschauen
            </a>
        </main>
    );
};

export default Meal;
