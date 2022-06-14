import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import api from "./api";
import * as React from 'react';

const App = () => {

  const [games, setGames] = useState([]);

  const getGames = async () => {
    const response = await api.get("/games/listar-todos");

    setGames(response.data);
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <Header getGames={getGames} />
      <Home games={games} getGames={getGames} />
    </>
  );
};

export default App;