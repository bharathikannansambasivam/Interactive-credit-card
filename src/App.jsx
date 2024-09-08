import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";
import Greeting from "./components/Greeting";
export const Context = React.createContext();

function App() {
  const [cardDetails, setCardDetails] = useState({
    cardNo: "0000 0000 0000 0000",
    customerName: "Bharathikannan",
    expMonth: "",
    expYear: "",
    cvcPin: "",
  });

  return (
    <Context.Provider value={{ cardDetails, setCardDetails }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardDetails />}></Route>
          <Route path="/greeting" element={<Greeting />}></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
