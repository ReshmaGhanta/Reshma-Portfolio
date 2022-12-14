import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from 'react';
import { NavbarContainer, NavbarFixed, Navbar, Nav,logoStyle, ListStyle, MenuItem, MenuItemFixed} from '../../styles/ComponentsStyle/HeaderStyle';
import ImageRey from '../ReusableComponents/ImageRey';
import logo from "../../assets/Logo.png";

const Header = () => {
const[fixNavbar,setFixNavbar]=useState(false)
    
const changeBackground=()=>{
    if(window.scrollY>=100)
    {
        setFixNavbar(true);
    }else{
        setFixNavbar(false);
    }
}  

useEffect(()=>{
    window.addEventListener('scroll',changeBackground)
})

    return (
       <Router>
       
       <Container fluid style={fixNavbar ? NavbarFixed : Navbar }>
        <div> <AnchorLink href='#home' style={fixNavbar ? MenuItemFixed : MenuItem}>
            <ImageRey  data={{ source: logo, avatar: "Avatar", customStyle:logoStyle}}></ImageRey> </AnchorLink>   </div>
        <div style={NavbarContainer}>
        <nav style={Nav}> 
        <ul>
            <li style={ListStyle}>  <AnchorLink href='#home' style={fixNavbar ? MenuItemFixed : MenuItem}>Home</AnchorLink></li>       
            <li style={ListStyle}>  <AnchorLink href='#education' style={fixNavbar ? MenuItemFixed : MenuItem}>Education</AnchorLink></li>
            <li style={ListStyle}>  <AnchorLink href='#skills' style={fixNavbar ? MenuItemFixed : MenuItem}>Skills</AnchorLink></li>
            <li style={ListStyle}>  <AnchorLink href='#experience' style={fixNavbar ? MenuItemFixed : MenuItem}>Experience</AnchorLink></li>
            <li style={ListStyle}> <AnchorLink href='#contact'style={fixNavbar ? MenuItemFixed : MenuItem}>Contact</AnchorLink></li>
        </ul>
        </nav>
        </div>
       
        </Container>
       </Router>
    )
}

export default Header
