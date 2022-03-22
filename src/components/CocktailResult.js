import React from "react";
import "../styles/CocktailResult.scss";

const CocktailResult = ({ img, name }) => {
  return (
    <div className="cocktail-result">
      <img src={img} alt="cocktail-image" />
      <p>{name}</p>
      <div className="expolore-button">
        <h1>></h1>
      </div>
    </div>
  );
};

export default CocktailResult;
