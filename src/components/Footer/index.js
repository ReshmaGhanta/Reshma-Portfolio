import React from 'react'
import { Container } from "react-bootstrap";
import TextRey from '../ReusableComponents/TextRey'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook,faGithub,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {FooterBackground,FullnameStyle,SocialmediaStyle,LineStyle,CopyrightStyle}  from "../../styles/ComponentsStyle/FooterStyle"


const Footer = () => {
    return (
        <>
           {/*  <><TextRey data={{text:"Reshma Ghanta",style:FullnameStyle}}></TextRey></> */}
            <div style={SocialmediaStyle}>
                <FontAwesomeIcon icon={faFacebook} size="3x" fixedWidth onClick={openFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGithub} size="3x" fixedWidth onClick={openGithub}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram} size="3x" fixedWidth onClick={openInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin} size="3x" fixedWidth onClick={openLinkedin}></FontAwesomeIcon>
            </div>
            <> <hr style={LineStyle}/>  </>  
            <><TextRey data={{text:"Designed & Built by Reshma Ghanta Ⓒ 2022",style:CopyrightStyle}}></TextRey></>       
        </>
    )
}

function openFacebook(){
    window.open("https://www.facebook.com/Ghanta9999");
}
function openGithub(){
    window.open("https://github.com/ReshmaGhanta");
}
function openInstagram(){
    window.open("https://www.instagram.com/reshma_chowdari/");
}
function openLinkedin(){
    window.open("https://www.linkedin.com/in/rghanta2/");
}
export default Footer

