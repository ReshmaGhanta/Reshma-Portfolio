import React from 'react'
import { Container,Row,Col} from "react-bootstrap";
import TextRey from '../../components/ReusableComponents/TextRey'
import { ExperienceBackground,MenuItemStyle,JobTitleStyle , rowStyle, colOneStyle, colTwoStyle, CompanyStyle, ProjectStyle, DescriptionStyle, TenureStyle} from '../../styles/viewsStyle/ExperienceStyle';



const Experience = () => {
    return (
       <Container style={ExperienceBackground} id="experience">
          <><TextRey data={{text:"Experience",style:MenuItemStyle}}></TextRey></>
      <Row style={rowStyle}> 
      <Col xs={12} lg={5}  style={colOneStyle} >
             <TextRey data={{text:"Full Stack Developer",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"July 2018 - Present",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={6} style={colTwoStyle}>
        <div className="d-flex justify-content-center flex-column">
            <TextRey data={{text:"Lucrative Innovations Inc",style:CompanyStyle}}></TextRey>             
             <TextRey data={{text:"E911Live - 1st2911",style:ProjectStyle}}></TextRey>             
             <ul style={DescriptionStyle}>
                  <li> Responsible for developing a full-stack application using HTML, CSS, JavaScript, React JS, Express JS , Node.js and Firebase. </li>
                  <li> Fetched the Amazon kinesis video streams from the back-end and displayed them in the front end for the end user. </li>
                  <li> Used Google Maps API to custom build a mapping system. Used Firebase database to store and fetch real-time data.</li>
                  <li> Responsible for architecting, designing and developing the critical components of the application, while participating in the entire Software Development Life Cycle using Agile methodology.</li>
                  <li>Worked with JIRA  the bug tracking system to track and maintain the history of issues on a daily basis. Extensively used GIT for version controlling.</li>
              </ul>
              </div>
        </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={5}  style={colOneStyle} >
             <TextRey data={{text:"Vice President Public Relations",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"July 2020 - April 2021",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={6} style={colTwoStyle}>
            <TextRey data={{text:"Toastmasters International",style:CompanyStyle}}></TextRey>             
             <TextRey data={{text:"Communicators at IUPUI",style:ProjectStyle}}></TextRey>             
             <ul style={DescriptionStyle}>
                  <li>  Reviewed and evaluated club's previous PR efforts, current objectives and tactics to reach goals. </li>
                  <li> Communicated Toastmasters’ key messages when writing news releases and while speaking to members, potential members and journalists. </li>
                  <li>Published weekly postcards about meetings on Social media sites to attract and connect with fellow members and external audience. </li>
              </ul>

        </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={5}  style={colOneStyle} >
             <TextRey data={{text:"Sergeant at arms",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"July 2019 - June 2020",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={6} style={colTwoStyle}>
              <TextRey data={{text:"Toastmasters International",style:CompanyStyle}}></TextRey>             
              <TextRey data={{text:"Communicators at IUPUI",style:ProjectStyle}}></TextRey>             
                     
             <ul style={DescriptionStyle}>
                  <li>  Helped anyone with computer difficulties when they needed it.</li>
                  <li> Made sure that the President and Toastmaster of the Day know the names of the guests and be ready to remind them to make introduction.</li>
              </ul>
        </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={5}  style={colOneStyle} >
             <TextRey data={{text:"Java Graduate Teaching Assistant",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"August 2017 - May 2018",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={6} style={colTwoStyle}>
              <TextRey data={{text:"George Mason University",style:CompanyStyle}}></TextRey>             
              <TextRey data={{text:"IST Department",style:ProjectStyle}}></TextRey>             
                     
             <ul style={DescriptionStyle}>
                  <li>  Responsible for instructing a class of 60 students on How to solve problems using computer programming in Java.  </li>
                  <li> Checked assignments, proctored exams, and provided grades according to the university standards.</li>
                  <li> Held weekly office hours to provide tutoring, counseling or assistance to the students.</li>
              </ul>
        </Col> 
       </Row> 
       <Row style={rowStyle}> 
      <Col xs={12} lg={5}  style={colOneStyle} >
             <TextRey data={{text:"Software Developer Intern",style:JobTitleStyle}}></TextRey>             
             <TextRey data={{text:"May 2015 - July 2015",style:TenureStyle}}></TextRey>   
       </Col>
       <Col xs={12} lg={6} style={colTwoStyle}>
              <TextRey data={{text:"HCL Career Development Centre",style:CompanyStyle}}></TextRey>             
              <TextRey data={{text:"Hyderabad",style:ProjectStyle}}></TextRey>             
                     
             <ul style={DescriptionStyle}>
                  <li> Developed Intranet mailing project using Java programming language.  </li>
                  <li> Used JSP, HTML, CSS, Bootstrap on front end, servlets as front controllers and JavaScript for client side validations.Learned software engineering process improvements and best practices. </li>
                  <li> Contributed to deployments by testing, debugging and resolving issues for optimal results.</li>
              </ul>
        </Col> 
       </Row> 
       </Container>
    )
}

export default Experience
