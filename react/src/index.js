import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheet.css';

import Header from "./components/Header";
import Meal from "./components/Meal";
import History from "./components/History";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Meal />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    </React.StrictMode>
);