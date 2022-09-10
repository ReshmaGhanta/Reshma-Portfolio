import React from 'react'
import Header from "../../components/Header"
import StickyEmail from '../../components/Stickyemail'
import TextRey from '../../components/ReusableComponents/TextRey'
import ButtonRey from '../../components/ReusableComponents/ButtonRey'
import Resume from "../../assets/ReshmaResume.pdf"
import { Container} from "react-bootstrap";
import {HomeBackground,WelcomeStyle, TitleStyle,JobTitleStyle,AboutStyle,ResumeButton, StickyEmailStyle} from "../../styles/viewsStyle/HomeStyle.js"
import {useNav} from '../../customHooks/useNav'

const Home = () => {

   //const aboutRef = useNav('Home');
    return (
       <>
        <Container style={HomeBackground} >
                   <Header></Header>
                    <><TextRey data={{text:"Hi, my name is",style:WelcomeStyle}}></TextRey></>
                    <><h1 style={TitleStyle}>Reshma Ghanta.</h1></>
                    <><TextRey data={{text:"I am a Full Stack Developer",style:JobTitleStyle}}></TextRey></>
                    <><TextRey data={{text:"I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement. Developers can work in systems software or in applications such as those for mobile devices, but their duties are similar in many cases.Develop and test software to meet consumers' and clients' needs.Recommend and develop upgrades for existing applications.",style:AboutStyle}}></TextRey> </>
                    <><ButtonRey data={{label:"Resume",customStyle:ResumeButton,onClick:openResume}}></ButtonRey> </>
                    {/* <StickyEmail style={StickyEmailStyle}></StickyEmail>    */}
        </Container>
        </>
    )
}

function openResume(){
    window.open("https://linkedin.com/");
}

export default Home
