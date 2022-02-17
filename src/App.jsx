import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import buyElectricity from "./views/BuyElectricity";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact >

        </Route>
      </Switch>
      <Header/>
      <Routes>
      </Routes>
    </Router>
    
  );
}

export default App;
