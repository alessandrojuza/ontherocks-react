import React, { useState } from "react";
import "./App.scss";
import axios from "axios";
import FadeIn from "react-fade-in";
import CocktailResult from "./components/CocktailResult";
import CocktailModal from "./components/CocktailModal";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "./img/logo.png";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // User query is stored here and updated on every input change
  const [cocktailArray, setCocktailArray] = useState([]); // Fetched from API, this array contains all the cocktail objects

  const [modalCocktailName, setModalCocktailName] = useState("");
  const [modalCocktailImg, setModalCocktailImg] = useState("");
  const [modalCocktailDescription, setModalCocktailDescription] = useState("");
  const [modalCocktailGlass, setModalCocktailGlass] = useState("");
  const [modalCocktailType, setModalCocktailType] = useState("");

  const [modalClass, setModalClass] = useState("hidden"); // this variable sets the visibility of the CocktailModal

  const clearInput = () => {
    // This function clears the user input when X button is pressed
    setSearchQuery("");
    setCocktailArray([]);
  };

  const callCocktailApi = () => {
    // This function fetches an array of cocktails from the api and stores it in cocktailArray
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}
    ` // API Call
      )
      .then((res) => {
        setCocktailArray(res.data.drinks || []); // Only render results if an array is fetched
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

        <div className="result-container">
          {cocktailArray.map((e) => {
            return (
              <FadeIn transitionDuration="200" key={e.idDrink}>
                <CocktailResult
                  name={e.strDrink}
                  img={e.strDrinkThumb}
                  description={e.strInstructions}
                  glass={e.strGlass}
                  type={e.strCategory}
                  setModalClass={setModalClass}
                  setModalCocktailImg={setModalCocktailImg}
                  setModalCocktailName={setModalCocktailName}
                  setModalCocktailDescription={setModalCocktailDescription}
                  setModalCocktailGlass={setModalCocktailGlass}
                  setModalCocktailType={setModalCocktailType}
                />
              </FadeIn>
            );
          })}
        </div>
      </div>
      <CocktailModal
        modalCocktailImg={modalCocktailImg}
        modalCocktailName={modalCocktailName}
        modalCocktailDescription={modalCocktailDescription}
        modalCocktailGlass={modalCocktailGlass}
        modalCocktailType={modalCocktailType}
        modalClass={modalClass}
        setModalClass={setModalClass}
      />
    </div>
  );
}

export default App;
