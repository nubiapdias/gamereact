import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../../api";
import * as React from 'react';

const ModalNewGame = ({ closeModal, getGames }) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  const handleCreateGame = async () => {
    const newGame = {
      nome,
      preco,
      descricao,
      foto,
    };

    const response = await api.post("/jogos/criar-jogo", newGame);

    if (response.status !== 201) {
      return toast.error("Falha na criação do jogo. Tente de novo.");
    }

    setNome("");
    setPreco("");
    setDescricao("");
    setFoto("");
    closeModal();
    getGames();
    toast.success("Jogo adicionado a lista");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Adicionar a lista</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={nome}
          placeholder="Digite o nome"
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
          placeholder="Digite a descrição do jogo"
          onChange={(event) => setDescricao(event.target.value)}
          name="descricao"
        />
        <input
          value={foto}
          placeholder="Url da Foto"
          onChange={(event) => setFoto(event.target.value)}
          name="foto"
        />
        <button onClick={handleCreateGame}>Adicionar</button>
      </div>
    </div>
  );
};

export default ModalNewGame;