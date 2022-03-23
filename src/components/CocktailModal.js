import React from "react";
import "../styles/CocktailModal.scss";

const CocktailModal = ({}) => {
  return (
    <div className="cocktail-modal-container">
      <div className="cocktail-modal">
        <div className="div1"></div>
        <div className="div2">NOME COCKTAIL</div>
        <div className="div3">X</div>
        <div className="div4">FOTO</div>
        <div className="div5">Descrizione</div>
      </div>
    </div>
  );
};

export default CocktailModal;
