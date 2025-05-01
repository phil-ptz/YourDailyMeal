import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import Recipe from "./components/Recipe";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header />
      <Recipe />
  </React.StrictMode>
);