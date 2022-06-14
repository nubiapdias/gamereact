import "./style.css";
import { toast } from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ModalRemoveGame from "../Modals/ModalRemoveGame";
import ModalEditGame from "../Modals/ModalEditGame";
import { useState } from "react";
import * as React from 'react';

const Card = ({ game, getGames }) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowRemoveModal = () => {
    setShowRemoveModal(!showRemoveModal);
  };

  const handleShowEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <p>{`R$${game.preco.toFixed(2)}`}</p>
          <img src={game.foto} alt={`Esse é o jogo ${game.nome}`} />
        </div>
        <h3>{game.nome}</h3>
        <p>{game.descricao}</p>
        <div className="card-body">
          <span title="Editar">
            <FaEdit onClick={handleShowEditModal} />
          </span>
          <span title="Remover">
            <FaTrashAlt onClick={handleShowRemoveModal} />
          </span>
        </div>
        <button onClick={() => toast.error("Sessão em desenvolvimento")}>
          Adicionar
        </button>
      </div>
      {showRemoveModal && (
        <ModalRemoveGame
          closeModal={handleShowRemoveModal}
          game={game}
          getGames={getGames}
        />
      )}
      {showEditModal && (
        <ModalEditGame
          closeModal={handleShowEditModal}
          game={game}
          getGames={getGames}
        />
      )}
    </>
  );
};

export default Card;