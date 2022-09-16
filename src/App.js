import CustomRoutes from "./routes/CustomRoutes"
import React from "react";
import { Container,Row } from "react-bootstrap";
import Home from "./views/Home";
import Education from "./views/Education";
import Skills from "./views/Skills";
import Experience from "./views/Experience";
import Contact from "./views/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./app.css"


import {MainContainer, MainBackgroundImage} from "./styles/viewsStyle/MainStyle"
function App() {
  return (

    <Container style={MainContainer} >
      <Header></Header> 
      <Home></Home> 
    <Row> <Education></Education></Row>
    <Row> <Skills></Skills></Row>
    <Row> <Experience></Experience></Row>
    <Row>  <Contact></Contact></Row>
    <Row>  <Footer></Footer></Row>  

   </Container>
  );
}

export default App;
