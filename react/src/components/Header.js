import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet.css";

const Header = () => {

    const navigate = useNavigate();

    const handleHistoryClick = () => {
        navigate("/history");
    };

    const handleTitleClick = () => {
        navigate("/");
    };

    return (
        <header className="header">
            <div className="header-title" onClick={handleTitleClick} style={{ cursor: "pointer" }}>YourDailyMeal</div>
            <button className="history-button" onClick={handleHistoryClick}>
                Vergangene Tage
            </button>
        </header>
    );
};

export default Header;