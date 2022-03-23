import React, { useState } from "react";
import "../styles/CocktailModal.scss";
import CloseIcon from "@mui/icons-material/Close";

const CocktailModal = ({
  modalCocktailName,
  modalCocktailImg,
  modalCocktailDescription,
  modalClass,
  setModalClass,
}) => {
  const hideModal = () => {
    setModalClass("hidden");
  };

  return (
    <div className={`cocktail-modal-container ${modalClass}`}>
      <div className="cocktail-modal">
        <div className="div1"></div>
        <div className="div2">
          <h3>{modalCocktailName}</h3>
        </div>
        <div className="div3">
          <CloseIcon onClick={hideModal} className="close-icon" />
        </div>
        <div className="div4">FOTO</div>
        <div className="div5">
          <p>{modalCocktailDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CocktailModal;
