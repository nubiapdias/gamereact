import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../../api";
import * as React from 'react';

const ModalEditGame = ({ closeModal, game, getGames }) => {
  const [nome, setNome] = useState(game.nome);
  const [preco, setPreco] = useState(game.preco);
  const [descricao, setDescricao] = useState(game.descricao);
  const [foto, setFoto] = useState(game.foto);

  const handleEditGame = async () => {
    const editedGame = {
      nome,
      preco,
      descricao,
      foto,
    };

    const response = await api.put(
      `/jogos/atualizar-jogo/${game._id}`,
      editedGame
    );

    if (response.status !== 200) {
      return toast.error("A atualização falhou :<");
    }

    closeModal();
    getGames();
    toast.success("Jogo atualizado com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Editar jogo</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={nome}
          placeholder="Digite o nome do jogo"
          onChange={(event) => setNome(event.target.value)}
          name="nome"
        />
        <input
          value={preco}
          placeholder="Digite o preço"
          onChange={(event) => setPreco(event.target.value)}
          name="preco"
          type="number"
        />
        <input
          value={descricao}
          placeholder="Digite a descrição"
          onChange={(event) => setDescricao(event.target.value)}
          name="descricao"
        />
        <input
          value={foto}
          placeholder="Digite o URL da foto"
          onChange={(event) => setFoto(event.target.value)}
          name="foto"
        />
        <button onClick={handleEditGame}>Editar</button>
      </div>
    </div>
  );
};

export default ModalEditGame;