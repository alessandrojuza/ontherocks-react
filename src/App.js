import React, { useState } from "react";
import "./App.scss";
import axios from "axios";
import CocktailResult from "./components/CocktailResult";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./img/logo.png";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // User query is stored here and updated on every input change
  const [cocktailArray, setCocktailArray] = useState([]);
  const callCocktailApi = () => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}
    `
      )
      .then((res) => {
        setCocktailArray(res.data.drinks);
        console.log(res.data.drinks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchCocktail = (e) => {
    setSearchQuery(e.target.value); // Updates searchQuery on every input change

    callCocktailApi();
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="search-bar-container">
          <img src={Logo} alt="logo" className="logo" />
          <div className="search-bar">
            <input
              type="text"
              className="search-bar-input"
              placeholder="Enter Your Favorite Cocktail:"
              onChange={searchCocktail}
            />
            <CloseIcon className="close-icon" />
          </div>
        </div>
        <div className="result-container">
          {/* <CocktailResult /> */}
          {cocktailArray.map((e) => {
            return <CocktailResult name={e.strDrink} img={e.strDrinkThumb} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
