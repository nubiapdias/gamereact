import "./style.css";
import * as React from 'react';
import logo from "../../assets/icons/logo.jpg";
import checkoutIcon from "../../assets/icons/sacola.png";
import newGameIcon from "../../assets/icons/game.jpg";
import ModalNewGame from "../Modals/ModalNewGame";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Header = ({ getGames }) => {
  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  };

  return (
    <>
      <div className="header-container">
        <div className="headerTitle-container">
          <img id= "logo" alt="Logo" src={logo} />
          <h2>Jogos</h2>
        </div>
        <div className="headerOptions-container">
          <img
            className="headerOptions-newGameIcon"
            alt="Icone de criar novo jogo"
            src={newGameIcon}
            onClick={handleShowModalCreate}
          />
          <img
            className="headerOptions-checkoutIcon"
            alt="Sacola de Checkout"
            src={checkoutIcon}
            onClick={() => toast.error("Sessão em desenvolvimento")}
          />
        </div>
      </div>
      {showModalCreate && (
        <ModalNewGame
          closeModal={handleShowModalCreate}
          getGames={getGames}
        />
      )}
    </>
  );
};

export default Header;