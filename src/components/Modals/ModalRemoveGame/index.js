import "./style.css";
import { toast } from "react-hot-toast";
import api from "../../../api";
import * as React from 'react';

const ModalRemoveGame = ({ closeModal, game, getGames }) => {
  const handleRemoveGame = async () => {


    const response = await api.delete(`/jogos/excluir-jogo/${game._id}`);

    if (response.status !== 200) {
      return toast.error("Erro na exclusão do jogo");
    }

    closeModal();
    getGames();
    toast.success("Jogo excluido com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modalRemove-container">
        <h3>Deseja excluir o jogo {game.title}?</h3>
        <div className="modalRemove-actions">
          <button className="cancelButton" onClick={closeModal}>
            Não
          </button>
          <button className="successButton" onClick={handleRemoveGame}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRemoveGame;