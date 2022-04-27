import React from "react";
import "./App.css";
import Giphy from "./Components/Giphy";
import Gifpage from "./Components/Gifpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Giphy />} />
        <Route path="/:id" element={<Gifpage />} />
      </Routes>
    </>
  );
}

export default App;
