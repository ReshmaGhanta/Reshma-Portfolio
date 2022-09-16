import React from 'react'
import { Container} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey'
import { SkillBackground,MenuItemStyle } from '../../styles/viewsStyle/SkillsStyle';

const Skills = () => {
    return (
        <Container style={SkillBackground} id="skills">
                    <><TextRey data={{text:"Skills",style:MenuItemStyle}}></TextRey></>
       </Container>
    )
}

export default Skills
