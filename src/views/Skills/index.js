import React from 'react'
import { Container} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey'
import ImageRey from '../../components/ReusableComponents/ImageRey';
import { SkillBackground,MenuItemStyle,SubMenuItemStyle,CertificationStyle, CarouselNameStyle, CarouselImageStyle, JavaNameStyle, NpmNameStyle, OracleNameStyle, CssNameStyle, JQNameStyle, HTMLNameStyle} from '../../styles/viewsStyle/SkillsStyle';
import "../../styles/viewsStyle/Carousel.css"
import firebase from "../../assets/firebase.png"
import java from "../../assets/java.png"
import nodejs from "../../assets/nodejs.png"
import bootstrap from "../../assets/bootstrap.png"
import css from "../../assets/css.png"
import expressjs from "../../assets/ExpressJs.png"
import javascript from "../../assets/Javascript.png"
import jquery from "../../assets/jQuery.png"
import npm from "../../assets/Npm.png"
import react from "../../assets/React.png"
import socketio from "../../assets/SocketIo.png"
import oracle from "../../assets/Oracle.png"
import html from "../../assets/Html.png"


const Skills = () => {
    return (
        <Container fluid style={SkillBackground} id="skills">
                    <><TextRey data={{text:"Skills",style:MenuItemStyle}}></TextRey></>

<div className="slider">
      <div className="slide-track">
        <div className="slide">
            <ImageRey data={{ source: html, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
             <TextRey data={{text:"Html 5",style:HTMLNameStyle}}></TextRey>
        </div>
        <div className="slide">
             <ImageRey data={{ source: css, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
            <TextRey data={{text:"Css 3",style:CssNameStyle}}></TextRey>
        </div>
        <div className="slide">
          <ImageRey data={{ source: bootstrap, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
             <TextRey data={{text:"Bootstrap",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: expressjs, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Express JS",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: firebase, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Firebase",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: java, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
         <TextRey data={{text:"Java",style:JavaNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: jquery, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
              <TextRey data={{text:"jQuery",style:JQNameStyle}}></TextRey> 
        </div>
        <div className="slide">
        <ImageRey data={{ source: javascript, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Javascript",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: nodejs, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Node JS",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: npm, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"NPM",style:NpmNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: oracle, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Oracle",style:OracleNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: react, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"React JS",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: socketio, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Socket.io",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
            <ImageRey data={{ source: html, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
             <TextRey data={{text:"Html 5",style:HTMLNameStyle}}></TextRey>
        </div>
        <div className="slide">
             <ImageRey data={{ source: css, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
            <TextRey data={{text:"Css 3",style:CssNameStyle}}></TextRey>
        </div>
        <div className="slide">
          <ImageRey data={{ source: bootstrap, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
             <TextRey data={{text:"Bootstrap",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: expressjs, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Express JS",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: firebase, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Firebase",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: java, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Java",style:JavaNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: jquery, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
              <TextRey data={{text:"jQuery",style:JQNameStyle}}></TextRey> 
        </div>
        <div className="slide">
        <ImageRey data={{ source: javascript, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Javascript",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: nodejs, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Node JS",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: npm, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"NPM",style:NpmNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: oracle, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"Oracle",style:OracleNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: react, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
<TextRey data={{text:"React JS",style:CarouselNameStyle}}></TextRey>
        </div>
        <div className="slide">
        <ImageRey data={{ source: socketio, avatar: "Avatar", customStyle:CarouselImageStyle}}></ImageRey> 
        <TextRey data={{text:"Socket.io",style:CarouselNameStyle}}></TextRey>
        </div>
      </div>
    </div>
            <><TextRey data={{text:"Certifications",style:SubMenuItemStyle}}></TextRey></>
            <><TextRey data={{text:"Oracle Certified Associate, Java SE 8 Programmer",style:CertificationStyle}}></TextRey></>
                    
       </Container>
    )
}

export default Skills
