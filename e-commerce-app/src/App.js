import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Productpage from "./pages/productpage";
import Loginpage from "./pages/loginpage";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
