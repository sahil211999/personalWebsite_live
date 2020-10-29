import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
library.add( faBriefcase);






class Experience extends Component{
  state = {

  }
  
  render(){
    return(
      <div>
       <div fluid style={{height:'400px',opacity: '0.5', padding:'0px' ,backgroundImage: `url(${require('../Assets/workImage.jpeg')})` }}>     
         <div style = {{opacity: '6'}}>
         <h1 style = {{color:'white', fontSize:'60px', paddingTop:'150px'}}> Experience </h1>
         </div>
         </div>
         <div style = {{backgroundColor:'white', fontFamily:'Montserrat', color:'black', fontSize:'30px', fontWeight:'bolder', height:'700px', paddingTop:'100px', paddingBottom:'100px'}}>
         
         <FontAwesomeIcon icon={faBriefcase}  size="3x" />
        <Container style = {{paddingTop:'100px'}}>
        I have software development experience from 2 internsips. I have been able to gain in-depth knowledge in full stack mobile and web development in various technologies. Working across multiple teams, I always try to push myself to make significant contributions at the places I have worked. Currently I am trying to gain impactful research experience by working alongside with professors at my University.
      
        </Container>
      </div>
        
      
      
      <div style = {{backgroundColor:'#535C68'}}>
     
     
         <div > 
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom:'50px', fontWeight:'bolder'}}><Col><h1 style = {{fontSize:'50px'}}>Cargill Innovation Lab</h1></Col></Row>
         <Row><Col lg={true}> <Image src={require('../Assets/cargill-1.png')}  rounded style ={{height:'500px', width:'500px', border:'1.0px solid black' }} /> </Col> <Col lg={true} style={{ color:'white', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}><p>I worked as a full stack developer collaborating with UX designers, buisness analysts and actual users from focus groups to develop products which could one day be a part of the array of digital services Cargill provides. </p> 
         <p> For my core project, I developed a responsive web app for animal feed mills to improve user experience. Apart from my core team project, I contributed to another hardware project at the Cargill Innovation, developing the UI for a hardware project, which was aimed at improving order accuracy in quick service restaurants. This prototype will potetially be pitched to YUM brands. </p>
         <p> I also developed a prototype feedmill truck driver app for tracking order and optmizing routes</p>
         </Col> </Row>
        
         </Container>
          </div>
      </div>
      <div style = {{backgroundColor:'white'}}>
        
         <div > 
         <Container style={{padding:'50px'}} >
         <Row style = {{ paddingBottom:'50px' ,fontWeight:'bolder'}}><Col><h1 style = {{fontSize:'50px'}}>QA infotech</h1></Col></Row>
         <Row><Col lg={true} style={{ fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}> <p> I worked as a backend developer on a full-stack development team. I worked on the Java SpringBoot framework, developing APIs for a farm risk management app. I contributed in designed and architecting the backend database for the APIs and also helped in deployment of the the application. I also worked on quality assurance testing and debugging code for streamlining the application. </p> </Col> <Col   >
         <Image src={require('../Assets/QaInfotech.jpeg')}  rounded style ={{height:'500px', width:'500px', border:'6px solid black' }} />
         </Col> </Row>
         </Container>
          </div>
      </div>
      <div style = {{backgroundColor:'#535C68'}}>
        
         <div> 
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom:'50px', fontWeight:'bolder'}}><Col lg={true}><h1 style = {{fontSize:'50px'}}>NLP Research at UIUC</h1></Col></Row>
         <Row><Col lg={true}> <Image src={require('../Assets/1_tYZ8_SodwSUPJTuWQs-CoA.jpeg')}  rounded style ={{height:'500px', width:'500px', border:'6px solid black' }} /> </Col> <Col  style={{ color:'white', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}><p> Working on emotion analysis to detect emotions from fiction novels particularly from project Gutenberg. I am currently working on collecting, catalouging and labelling data from fiction novels and </p> 
         <p> </p>
        </Col> </Row>
         </Container>
          </div>
      </div>
      </div>
    )
  }
}

export default Experience