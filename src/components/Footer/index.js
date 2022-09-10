import React from 'react'
import { Container } from "react-bootstrap";
import TextRey from '../ReusableComponents/TextRey'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook,faGithub,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {FooterBackground,FullnameStyle,SocialmediaStyle,LineStyle,CopyrightStyle}  from "../../styles/ComponentsStyle/FooterStyle"


const Footer = () => {
    return (
        <Container style={FooterBackground}>
            <><TextRey data={{text:"Reshma Ghanta",style:FullnameStyle}}></TextRey></>
            <div style={SocialmediaStyle}>
                <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth></FontAwesomeIcon>
            </div>
            <> <hr style={LineStyle}/>  </>  
            <><TextRey data={{text:"Built by Reshma Ghanta Ⓒ 2022",style:CopyrightStyle}}></TextRey></>
       
        </Container>
    )
}

export default Footer

