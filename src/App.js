import React from "react";
import { Home } from "./Page";
import { Navbar } from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from "./Page/About";


function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <About/>
       <Routes>
      <Route path="/logo" component = {Home}/>
      <Route path="/about" exact component = {About}/>
       </Routes>
    </Router>
  );
}

export default App;
