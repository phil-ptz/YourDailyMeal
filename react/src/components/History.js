import React from "react";
import "./History.css";

const exampleMeals = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
    },
    {
        id: 2,
        title: "Chicken Teriyaki",
        image: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
    },
    {
        id: 3,
        title: "Beef Stroganoff",
        image: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg"
    },
    {
        id: 4,
        title: "Tuna Nicoise Salad",
        image: "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg"
    }
];

const History = () => {
    return (
        <div className="history-container">
            <h2 className="history-title">Vergangene Rezepte</h2>
            <div className="meal-grid">
                {exampleMeals.map((meal) => (
                    <div key={meal.id} className="meal-card">
                        <img src={meal.image} alt={meal.title} className="meal-img" />
                        <h3 className="meal-card-title">{meal.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;