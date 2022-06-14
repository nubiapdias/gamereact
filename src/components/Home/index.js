import "./style.css";
import Card from "../Card";
import { useState } from "react";
import ReactLoading from "react-loading";
import * as React from 'react';

const Home = ({ games, getGames }) => {
  const [filterInput, setfilterInput] = useState("");

  return (
    <div className="home-container">
      <h2>Lista de Jogos</h2>
      <input
        value={filterInput}
        onChange={(event) => setfilterInput(event.target.value)}
        placeholder="Filtrar por nome"
      />
      {games.length === 0 ? (
        <ReactLoading type="spin" color="lightblue" />
      ) : (
        <div>
          {filterInput !== ""
            ? games
                .filter((element) =>
                  element.nome
                    .toLowerCase()
                    .includes(filterInput.toLowerCase())
                )
                .map((element) => {
                  return (
                    <Card
                      getGames={getGames}
                      key={element._id}
                      game={element}
                    />
                  );
                })
            : games.map((element) => {
                return (
                  <Card
                    getGames={getGames}
                    key={element._id}
                    game={element}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
};

export default Home;