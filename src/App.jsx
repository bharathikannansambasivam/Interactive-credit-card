import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Greeting from "./components/Greeting";
export const Context = React.createContext();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardDetails />}></Route>
        <Route path="/greeting" element={<Greeting />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
