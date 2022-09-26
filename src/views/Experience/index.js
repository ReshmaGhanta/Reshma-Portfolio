import React from 'react'
import { Container,Row,Col} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey'
import { ExperienceBackground,MenuItemStyle } from '../../styles/viewsStyle/ExperienceStyle';

import ImageRey from "../../components/ReusableComponents/ImageRey"
import { TextStyle , MasonLogoStyle } from '../../styles/viewsStyle/EducationStyle';
import MasonLogo from "../../assets/MasonLogo.png"


const Experience = () => {
    return (
       <Container style={ExperienceBackground} id="experience">
          <><TextRey data={{text:"Experience",style:MenuItemStyle}}></TextRey></>
      <Row > 
      <Col xs={12} lg={4}  className='p-2' ><ImageRey data={{ source: MasonLogo, avatar: "Avatar", customStyle:MasonLogoStyle}}></ImageRey>   </Col>
      <Col xs={12} lg={8}> <p>2016-2018</p>              
                           <p> Master of Science in Information Systems</p>
                           <p> Conducted multiple sessions on Front End Development.
                                Helping students to learn Full Stack Web Development</p>
       </Col> 
       </Row> 
       <Row> 
      <Col xs={12} lg={4}  className='p-2' ><ImageRey data={{ source: MasonLogo, avatar: "Avatar", customStyle:MasonLogoStyle}}></ImageRey>   </Col>
      <Col xs={12} lg={8}> <p>2016-2018</p>              
     <p> Master of Science in Information Systems</p>
     <p> Conducted multiple sessions on Front End Development.
       Helping students to learn Full Stack Web Development</p>

     </Col>
     </Row>
       </Container>
    )
}

export default Experience
