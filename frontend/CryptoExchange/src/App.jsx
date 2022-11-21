import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Markets from "./components/Markets";
import Exchange from "./components/Exchange";
import ApiComponent from "./components/ApiComponent";
function App() {
  const [getPrice, setPrice] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/coins")
      .then((response) => {
        setPrice(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(getPrice.data["bitcoin"][1]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <ApiComponent />
      <Markets />
    </BrowserRouter>
  );
}

export default App;
