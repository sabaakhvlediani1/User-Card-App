import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Navigation/Home/Home";
import User from "./Navigation/User/User";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
