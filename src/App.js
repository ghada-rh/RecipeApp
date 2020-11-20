import React, { useState, useEffect } from "react";
import "./style.css";

const App = () => {
  const APP_ID = "51f45b0e";
  const APP_KEY = "6553d5dfc4b3bc20c4a3c1d17e24660c";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}"
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form" /*onSubmit={handleSubmit}*/>
        <input className="search-bar" type="text" /*onChange={handleChange}*/ />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default App;
