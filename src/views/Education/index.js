import React from 'react'
import { Container,Row, Col } from "react-bootstrap";
import TextRey from "../../components/ReusableComponents/TextRey"
import ImageRey from "../../components/ReusableComponents/ImageRey"
import { EducationBackground,MenuItemStyle, MasonLogoStyle , PVPLogoStyle , YearStyle,DegreeStyle,UniversityStyle, rowStyle, colStyle,DescriptionStyle} from '../../styles/viewsStyle/EducationStyle';
import MasonLogo from "../../assets/MasonLogo.png"
import PvPLogo from "../../assets/PvpLogo.png"

const Education = () => {
    return (
    <Container style={EducationBackground} id="education">
          <> <TextRey data={{text:"Education",style:MenuItemStyle}}></TextRey> </>  
      <Row style={rowStyle}> 
      <Col xs={12} lg={3} style={colStyle}><ImageRey data={{ source: MasonLogo, avatar: "Avatar", customStyle:MasonLogoStyle}}></ImageRey>   </Col>
      <Col xs={12} lg={9}>  
             <TextRey data={{text:"2016-2018",style:YearStyle}}></TextRey>             
             <TextRey data={{text:"Master of Science in Information Systems",style:DegreeStyle}}></TextRey>             
             <TextRey data={{text:"George Mason University",style:UniversityStyle}}></TextRey>   
             <TextRey data={{text: "Course work: Program Design & Data Structures, Secure Software Design, User interface Design & Development, Software Engineering for WWW, Principles & Practices of Communication Networks, Information Systems Analysis & Design, Information Security, Database Systems, Computer Organization and Operating Systems.",style:DescriptionStyle}}></TextRey>   
       </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={3} style={colStyle} ><ImageRey data={{ source: PvPLogo, avatar: "Avatar", customStyle:PVPLogoStyle}}></ImageRey>   </Col>
      <Col xs={12} lg={9}>  <TextRey data={{text:"2012-2016",style:YearStyle}}></TextRey>             
      <TextRey data={{text:"Bachelor of Technology in Computer Science",style:DegreeStyle}}></TextRey>             
      <TextRey data={{text:"PVP Siddhartha Institute of Technology",style:UniversityStyle}}></TextRey>  
      <TextRey data={{text: "Course work: Object oriented programming with Java, Compiler Design, Design & Analysis of Algorithms, Software Architecture, Distributed Systems, Big Data Concepts, Design Patterns, Data Warehousing & Mining, Information Security, Web Technologies, Mobile Application Development, Software Project Management. ",style:DescriptionStyle}}></TextRey>   
       </Col>
     </Row>

       
      </Container>
    )
}

export default Education
