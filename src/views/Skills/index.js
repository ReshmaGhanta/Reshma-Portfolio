import React from 'react'
import { Container} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey'
import ImageRey from '../../components/ReusableComponents/ImageRey';
import { SkillBackground,MenuItemStyle,SubMenuItemStyle,CertificationStyle, CarouselNameStyle, CarouselImageStyle} from '../../styles/viewsStyle/SkillsStyle';
import "../../styles/viewsStyle/Carousel.css"
import logo from "../../assets/Logo.png"


const Skills = () => {
    return (
        <Container style={SkillBackground} id="skills">
                    <><TextRey data={{text:"Skills",style:MenuItemStyle}}></TextRey></>
 
{/* <div style={MovingStyle}>
<div style={CarouselStyle} >
    <div>
        <ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
        <TextRey data={{text:"Amazon 1",style:CarouselNameStyle}}></TextRey>
    </div>
</div>
<div style={CarouselStyle} >
    <div>
        <ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
        <TextRey data={{text:"Amazon 1",style:CarouselNameStyle}}></TextRey>
    </div>
</div>
<div style={CarouselStyle} >
    <div>
        <ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
        <TextRey data={{text:"Amazon 1",style:CarouselNameStyle}}></TextRey>
    </div>
</div>
</div> */}

<div class="slider">
<div class="slide-track">
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 1",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 2",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 3",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 4",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 5",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 6",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 7",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 8",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 9",style:CarouselNameStyle}}></TextRey>
</div>
<div class="slide">
<ImageRey data={{ source: logo, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Amazon 10",style:CarouselNameStyle}}></TextRey>
</div> 
</div>
</div>
            <><TextRey data={{text:"Certifications",style:SubMenuItemStyle}}></TextRey></>
            <><TextRey data={{text:"Oracle Certified Associate, Java SE 8 Programmer",style:CertificationStyle}}></TextRey></>
                    
       </Container>
    )
}

export default Skills
