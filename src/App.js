import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";
import EpisodeComponent from "./components/EpisodeComponent";
import CharacterComponent from "./components/CharacterComponent";


function App() {
  return (
    <div>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/episode" element={<EpisodeComponent />} />
          <Route path="/character" element={<CharacterComponent/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
