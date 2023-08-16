import React,{useState} from 'react'
import TextRey from '../ReusableComponents/TextRey'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook,faGithub,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {SocialmediaStyle,LineStyle,CopyrightStyle}  from "../../styles/ComponentsStyle/FooterStyle"


const Footer = () => {
    const [isHover, setIsHover] = useState(false);

    const  handleonPointerOver = () => {
       setIsHover(true);
    };
 
    const handleonPointerOut = () => {
       setIsHover(false);
    };

    const mediaStyle={
        color: isHover? "#e2cfd7" : "#B5B9E4",
      }

    return (
        <>
           {/*  <><TextRey data={{text:"Reshma Ghanta",style:FullnameStyle}}></TextRey></> */}
            <div style={SocialmediaStyle} >
                <FontAwesomeIcon icon={faFacebook} size="3x" fixedWidth style={mediaStyle}  onPointerOver={handleonPointerOver} onPointerOut={handleonPointerOut} onClick={openFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faGithub} size="3x" fixedWidth style={mediaStyle}  onPointerOver={handleonPointerOver} onPointerOut={handleonPointerOut}  onClick={openGithub}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram} size="3x" fixedWidth style={mediaStyle}  onPointerOver={handleonPointerOver} onPointerOut={handleonPointerOut} onClick={openInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin} size="3x" fixedWidth style={mediaStyle}  onPointerOver={handleonPointerOver} onPointerOut={handleonPointerOut} onClick={openLinkedin}></FontAwesomeIcon>
            </div>
            <> <hr style={LineStyle}/>  </>  
            <><TextRey data={{text:"Designed & Built by Reshma Ghanta Ⓒ 2023",style:CopyrightStyle}}></TextRey></>       
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

