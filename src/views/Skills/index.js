import React from 'react'
import { Container} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey'
import ImageRey from '../../components/ReusableComponents/ImageRey';
import { SkillBackground,MenuItemStyle,SubMenuItemStyle,CertificationStyle, CarouselNameStyle, CarouselImageStyle} from '../../styles/viewsStyle/SkillsStyle';
import "../../styles/viewsStyle/Carousel.css"
import logo from "../../assets/Logo.png"
import firebase from "../../assets/firebase.png"
import java from "../../assets/java.png"
import nodejs from "../../assets/nodejs.png"



const Skills = () => {
    return (
        <Container  fluid style={SkillBackground} id="skills">
                    <><TextRey data={{text:"Skills",style:MenuItemStyle}}></TextRey></>
<div class="slider">
<div class="slide-track">
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Html 5",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Css 3",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Bootstrap",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Express JS",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: firebase, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Firebase",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: java, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Java",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"jQuery",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Javascript",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: nodejs, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Node JS",style:CarouselNameStyle}}></TextRey>
</div> 
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"NPM",style:CarouselNameStyle}}></TextRey>
</div> 
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Oracle",style:CarouselNameStyle}}></TextRey>
</div> 
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"React JS",style:CarouselNameStyle}}></TextRey>
</div> 
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Socket.io",style:CarouselNameStyle}}></TextRey>
</div> 
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Html 5",style:CarouselNameStyle}}></TextRey>
</div>
</div>
</div>
            <><TextRey data={{text:"Certifications",style:SubMenuItemStyle}}></TextRey></>
            <><TextRey data={{text:"Oracle Certified Associate, Java SE 8 Programmer",style:CertificationStyle}}></TextRey></>
                    
       </Container>
    )
}

export default Skills
