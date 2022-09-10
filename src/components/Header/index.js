import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { NavbarContainer, NavbarFixed, Navbar, Nav,LogoStyle, ListStyle, MenuItem, MenuItemFixed} from '../../styles/ComponentsStyle/HeaderStyle';
import logo from '../../assets/Logo 2.png';
import ImageRey from '../ReusableComponents/ImageRey';


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
       <>
       <div style={fixNavbar ? NavbarFixed : Navbar }>
        <div style={NavbarContainer}>
        <nav style={Nav}>
          {/*      <ImageRey data={{source:logo,  customStyle:{LogoStyle}}}></ImageRey>  */}    
        <ul>
            <li style={ListStyle}><Link to="/home" style={fixNavbar ? MenuItemFixed : MenuItem}>Home</Link></li>
            <li style={ListStyle}><Link to="/education" style={fixNavbar ? MenuItemFixed : MenuItem}>Education</Link></li>
            <li style={ListStyle}><Link to="/skills" style={fixNavbar ? MenuItemFixed : MenuItem}>Skills</Link> </li>
            <li style={ListStyle}><Link to="/experience" style={fixNavbar ? MenuItemFixed : MenuItem}>Experience</Link></li>
            <li style={ListStyle}><Link to="/contact" style={fixNavbar ? MenuItemFixed : MenuItem}>Contact</Link> </li>
        </ul>
        </nav>
        </div>
        </div>
       </>
    )
}

export default Header
