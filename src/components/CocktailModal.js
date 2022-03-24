import React, { useState } from "react";
import "../styles/CocktailModal.scss";
import CloseIcon from "@mui/icons-material/Close";

const CocktailModal = ({
  modalCocktailName,
  modalCocktailImg,
  modalCocktailDescription,
  modalCocktailGlass,
  modalCocktailType,
  modalClass,
  setModalClass,
}) => {
  const hideModal = () => {
    // This function add the "hidden" class to this modal when X button is pressed
    setModalClass("hidden");
  };

  return (
    <div className={`cocktail-modal-container ${modalClass}`}>
      <div className="cocktail-modal">
        <div className="div1">
          <div className="transparent-div"></div>
          <h3>{modalCocktailName}</h3>
          <CloseIcon onClick={hideModal} className="close-icon" />
        </div>

        <div className="div2">
          <img src={modalCocktailImg} alt="cocktail image" />
        </div>

        <div className="div3">
          <h4>WHICH GLASS?</h4>
          <p>{modalCocktailGlass}</p>

          <h4>DRINK CATEGORY:</h4>
          <p>{modalCocktailType}</p>

          <h4>HOW TO:</h4>
          <p>{modalCocktailDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CocktailModal;
