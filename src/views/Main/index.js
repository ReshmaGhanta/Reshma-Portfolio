import React from 'react'
import { Container } from "react-bootstrap";
import {MainContainer} from "../../styles/viewsStyle/MainStyle.js"
import Home from "../Home";
import Education from "../Education"
import Skills from '../Skills';
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Main = () => {
  return (
    <Container style={MainContainer} >
      <Header></Header>   
    <Home></Home>
    <Education></Education>
    <Skills></Skills>
    <Experience></Experience>
    <Contact></Contact>
    <Footer></Footer>
   </Container>
  )
}

export default Main