import React from 'react'
import { Container,Row} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey';
import ButtonRey from '../../components/ReusableComponents/ButtonRey';
import { ContactBackground,MenuItemStyle,TextStyle ,EmailButton,ContactContainer} from '../../styles/viewsStyle/ContactStyle';
//import { Link } from 'react-router-dom';
import Footer from "../../components/Footer"

const Contact = () => {
    return (
        <Container id="contact" style={ContactBackground}>
          <><TextRey data={{text:"Let's Get In Touch",style:MenuItemStyle}}></TextRey></>
		  <Row><TextRey data={{ style:TextStyle, text:"Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!"}}></TextRey> </Row>
		  <Row style={ContactContainer}> <ButtonRey data={{label:"Say Hello",customStyle:EmailButton,onClick:openEmail}}></ButtonRey> </Row>        
          <> <Footer></Footer> </>      
       </Container>
    )
}

function openEmail(){
    window.open('mailto:reshma.ghanta@gmail.com');
}


export default Contact
