import React, { useState } from "react";
import "./App.scss";
import axios from "axios";
import FadeIn from "react-fade-in";
import CocktailResult from "./components/CocktailResult";
import CocktailModal from "./components/CocktailModal";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./img/logo.png";

function App() {
  // const [inputValue, setInputValue] = useState(searchQuery);
  const [searchQuery, setSearchQuery] = useState(""); // User query is stored here and updated on every input change
  const [cocktailArray, setCocktailArray] = useState([]);
  const [numberOfResults, setNumberOfResults] = useState("");

  const clearInput = () => {
    setSearchQuery("");
  };

  const renderCocktail = () => {
    if (cocktailArray.isArray) {
      setNumberOfResults(cocktailArray.length);
      cocktailArray.map((e) => {
        return <CocktailResult name={e.strDrink} img={e.strDrinkThumb} />;
      });
    }
  };

  const callCocktailApi = () => {
    // This function fetches an array of cocktails from the api and stores it in cocktailArray
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
    console.log(searchQuery);
    callCocktailApi();
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="search-bar-container">
          <FadeIn transitionDuration="1000">
            <img src={Logo} alt="logo" className="logo" />
          </FadeIn>
          <FadeIn transitionDuration="1000" delay="500">
            <div className="search-bar">
              <input
                type="text"
                value={searchQuery}
                className="search-bar-input"
                placeholder="Enter Your Favorite Cocktail:"
                onChange={searchCocktail}
              />
              <CloseIcon className="close-icon" onClick={clearInput} />
            </div>
          </FadeIn>
        </div>
        <FadeIn transitionDuration="1000" delay="500">
          <h4 className="number-of-results">{`${numberOfResults} COCKTAILS FOUND:`}</h4>
        </FadeIn>
        <div className="result-container">
          {cocktailArray.map((e) => {
            return <CocktailResult name={e.strDrink} img={e.strDrinkThumb} />;
          })}
        </div>
      </div>
      <CocktailModal />
    </div>
  );
}

export default App;
