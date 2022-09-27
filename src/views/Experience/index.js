import React from 'react'
import { Container,Row,Col} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey'
import { ExperienceBackground,MenuItemStyle,JobTitleStyle, TextStyle , rowStyle, colOneStyle, colTwoStyle, CompanyStyle, ProjectStyle, DescriptionStyle, TenureStyle, vrStyle} from '../../styles/viewsStyle/ExperienceStyle';

import ImageRey from "../../components/ReusableComponents/ImageRey"
import {  MasonLogoStyle } from '../../styles/viewsStyle/EducationStyle';
import MasonLogo from "../../assets/MasonLogo.png"


const Experience = () => {
    return (
       <Container style={ExperienceBackground} id="experience">
          <><TextRey data={{text:"Experience",style:MenuItemStyle}}></TextRey></>
      <Row style={rowStyle}> 
      <Col xs={12} lg={4}  style={colOneStyle} >
             <TextRey data={{text:"Full Stack Developer",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"July 2018 - Present",style:TenureStyle}}></TextRey>   
       </Col>
       <div className="d-flex" style={vrStyle}>  <div className="vr"></div>
       </div>
       <Col xs={12} lg={8} style={colTwoStyle}>
            <TextRey data={{text:"Lucrative Innovations Inc",style:CompanyStyle}}></TextRey>             
             <TextRey data={{text:"E911Live - 1st2911",style:ProjectStyle}}></TextRey>             
             <ul style={DescriptionStyle}>
                  <li>   Created a responsive landing page. </li>
                  <li> Optimized the landing page for SEO. </li>
                  <li> Optimized the videos on the landing page to work on all types of devices and browsers.</li>
                  <li> Created a React Dashboard for our B2B SaaS product.</li>
              </ul>

        </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={4}  style={colOneStyle} >
             <TextRey data={{text:"Vice President Public Relations",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"July 2020 - April 2021",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={8} style={colTwoStyle}>
            <TextRey data={{text:"Toastmasters International",style:CompanyStyle}}></TextRey>             
             <TextRey data={{text:"Communicators at IUPUI",style:ProjectStyle}}></TextRey>             
             <ul style={DescriptionStyle}>
                  <li>   Created a responsive landing page. </li>
                  <li> Optimized the landing page for SEO. </li>
                  <li> Optimized the videos on the landing page to work on all types of devices and browsers.</li>
                  <li> Created a React Dashboard for our B2B SaaS product.</li>
              </ul>

        </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={4}  style={colOneStyle} >
             <TextRey data={{text:"Sergeant at arms",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"July 2019 - June 2020",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={8} style={colTwoStyle}>
              <TextRey data={{text:"Toastmasters International",style:CompanyStyle}}></TextRey>             
              <TextRey data={{text:"Communicators at IUPUI",style:ProjectStyle}}></TextRey>             
                     
             <ul style={DescriptionStyle}>
                  <li>   Created a responsive landing page. </li>
                  <li> Optimized the landing page for SEO. </li>
                  <li> Optimized the videos on the landing page to work on all types of devices and browsers.</li>
                  <li> Created a React Dashboard for our B2B SaaS product.</li>
              </ul>
        </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={4}  style={colOneStyle} >
             <TextRey data={{text:"Java Graduate Teaching Assistant",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"August 2017 - May 2018",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={8} style={colTwoStyle}>
              <TextRey data={{text:"George Mason University",style:CompanyStyle}}></TextRey>             
              <TextRey data={{text:"IST Department",style:ProjectStyle}}></TextRey>             
                     
             <ul style={DescriptionStyle}>
                  <li>   Created a responsive landing page. </li>
                  <li> Optimized the landing page for SEO. </li>
                  <li> Optimized the videos on the landing page to work on all types of devices and browsers.</li>
                  <li> Created a React Dashboard for our B2B SaaS product.</li>
              </ul>
        </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={4}  style={colOneStyle} >
             <TextRey data={{text:"Software Developer Intern",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"May 2015 - July 2015",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={8} style={colTwoStyle}>
              <TextRey data={{text:"HCL Career Development Centre",style:CompanyStyle}}></TextRey>             
              <TextRey data={{text:"Hyderabad",style:ProjectStyle}}></TextRey>             
                     
             <ul style={DescriptionStyle}>
                  <li>   Created a responsive landing page. </li>
                  <li> Optimized the landing page for SEO. </li>
                  <li> Optimized the videos on the landing page to work on all types of devices and browsers.</li>
                  <li> Created a React Dashboard for our B2B SaaS product.</li>
              </ul>
        </Col> 
       </Row> 
       </Container>
    )
}

export default Experience
