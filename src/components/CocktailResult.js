import React from "react";
import "../styles/CocktailResult.scss";

const CocktailResult = ({
  img,
  name,
  description,
  glass,
  type,
  setModalCocktailName,
  setModalCocktailImg,
  setModalCocktailDescription,
  setModalCocktailGlass,
  setModalCocktailType,
  setModalClass,
}) => {
  const setModalData = () => {
    // This function updates the modal data with the clicked cocktail result and make it visible
    setModalCocktailName(name);
    setModalCocktailImg(img);
    setModalCocktailDescription(description);
    setModalCocktailGlass(glass);
    setModalCocktailType(type);

    setModalClass("");
  };
  return (
    <div className="cocktail-result" onClick={setModalData}>
      <img src={img} alt="cocktail-image" />
      <p>{name}</p>
      <div className="explore-button">
        <h1>></h1>
      </div>
    </div>
  );
};

export default CocktailResult;
