import React from 'react'
import { Container } from "react-bootstrap";
import TextRey from "../../components/ReusableComponents/TextRey"
import { EducationBackground,MenuItemStyle,TextStyle } from '../../styles/viewsStyle/EducationStyle';

const Education = () => {
    return (
      <Container style={EducationBackground} id="education"> 
              <><TextRey data={{text:"Education",style:MenuItemStyle}}></TextRey></>
              <><TextRey data={{ style:TextStyle,text:"I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement. Developers can work in systems software or in applications such as those for mobile devices, but their duties are similar in many cases.Develop and test software to meet consumers' and clients' needs.Recommend and develop upgrades for existing applications."}}></TextRey></>         
      </Container> 
    )
}

export default Education
