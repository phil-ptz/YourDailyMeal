import React, { useEffect, useState } from "react";
import "./History.css";
import Details from "./Details";

const History = () => {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    useEffect(() => {
        fetch("/api/recipes/all")
            .then((res) => res.json())
            .then((data) => setMeals(data))
            .catch((err) => console.error("Fehler beim Laden:", err));
    }, []);

    return (
        <div className="history-container">
            <h2 className="history-title">Vergangene Rezepte</h2>
            <div className="meal-grid">
                {meals.map((meal) => (
                    <div
                        key={meal.id}
                        className="meal-card"
                        onClick={() => setSelectedMeal(meal)}
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="meal-img"
                        />
                        <h3 className="meal-card-title">{meal.strMeal}</h3>
                        <h3 className="meal-card-subtitle">
                            {new Date(meal.createdAt).toLocaleDateString("de-DE", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </h3>
                    </div>
                ))}
            </div>
            {selectedMeal && (
                <Details meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
            )}
        </div>
    );
};

export default History;
