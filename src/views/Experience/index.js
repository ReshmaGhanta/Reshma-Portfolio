import React from 'react'
import { Container} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey'
import { ExperienceBackground,MenuItemStyle } from '../../styles/viewsStyle/ExperienceStyle';

const Experience = () => {
    return (
       <Container style={ExperienceBackground}>
          <><TextRey data={{text:"Experience",style:MenuItemStyle}}></TextRey></>
       </Container>
    )
}

export default Experience
