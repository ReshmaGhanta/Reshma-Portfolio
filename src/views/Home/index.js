import React from 'react'
//import StickyEmail from '../../components/Stickyemail'
import TextRey from '../../components/ReusableComponents/TextRey'
import ButtonRey from '../../components/ReusableComponents/ButtonRey'
import Resume from "../../assets/ReshmaResume.pdf"
import { Container} from "react-bootstrap";
import {HomeBackground,WelcomeStyle, TitleStyle,JobTitleStyle,AboutStyle,ResumeButton} from "../../styles/viewsStyle/HomeStyle.js"

const Home = () => {

    return (
     /*   <> */
        <Container style={HomeBackground} id="home" >
                    <><TextRey data={{text:"Hi,",style:WelcomeStyle}}></TextRey></>
                    <><h1 style={TitleStyle}>I'm Reshma,</h1></>
                   
                    <><TextRey data={{text:"Full Stack Developer",style:JobTitleStyle}}></TextRey></>
                   
                    <><TextRey data={{text:"I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Experienced in building intuitive and interactive progressive full stack applications.",style:AboutStyle}}></TextRey> </>
                    <><ButtonRey data={{label:"Resume",customStyle:ResumeButton ,onClick:openResume}}></ButtonRey> </>
                 
                  
        </Container>
       /*  <> <StickyEmail></StickyEmail>  </>
        </> */
    )
}

function openResume(){
    window.open(Resume);
}

export default Home
