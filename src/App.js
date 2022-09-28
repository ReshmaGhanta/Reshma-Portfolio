import React from "react";
import Home from "./views/Home";
import Education from "./views/Education";
import Skills from "./views/Skills";
import Experience from "./views/Experience";
import Contact from "./views/Contact";
import Header from "./components/Header";
import "./app.css"


import {MainContainer} from "./styles/viewsStyle/MainStyle"
function App() {
  return (
    <div style={MainContainer} >
        <Header/> 
        <Home/>
        <Education/>
        <Skills/>
        <Experience/>
        <Contact/>
   </div>
  );
}

export default App;
