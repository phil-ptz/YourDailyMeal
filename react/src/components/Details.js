import React from "react";
import "./Details.css";

const Details = ({ meal, onClose }) => {
    if (!meal) return null;

    return (
        <div className="details-overlay" onClick={onClose}>
            <div className="details-modal" onClick={(e) => e.stopPropagation()}>
                <button className="details-close" onClick={onClose}>×</button>
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt={meal.strMeal} className="details-img" />
                <p><strong>Kategorie:</strong> {meal.strCategory}</p>
                <p><strong>Herkunft:</strong> {meal.strArea}</p>
                <p><strong>Zubereitung:</strong></p>
                <p>{meal.strInstructions}</p>
                <a href={meal.strYoutube} target="_blank" rel="noreferrer">Auf YouTube ansehen</a>
            </div>
        </div>
    );
};

export default Details;