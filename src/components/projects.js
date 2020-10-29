import React, {Component} from 'react';
import {  Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCode } from '@fortawesome/free-solid-svg-icons';
library.add( faCode);


class Projects extends Component{
  state = {

  }
  
  render(){
    return(
      <div>
      <div fluid style={{height:'400px',opacity: '0.5', padding:'0px' ,backgroundImage: `url(${require('../Assets/CodeBack.png')})` }}>     
         <div style = {{opacity: '6'}}>
         <h1 style = {{color:'white', fontSize:'60px', paddingTop:'150px'}}> Projects </h1>
         </div>
         
         
         </div>

         <div style = {{backgroundColor:'white', fontFamily:'Montserrat', color:'black', fontSize:'30px', fontWeight:'bolder', height:'700px', paddingTop:'100px', paddingBottom:'100px'}}>
         
         <FontAwesomeIcon icon={faCode}  size="3x" />
        <Container style = {{paddingTop:'100px'}}>
       
       I am really involved with the college of Engineering RSOs and participate in events and organizing student and administrative events. Having spent considerable time in these endevours, I have been able to develop skills nessecccary to work in a diverse and challenging spaces.
        </Container>
      </div>
        
      <div style = {{backgroundColor:'#535C68'}}>
     
         <div > 
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom:'50px', fontWeight:'bolder'}}><Col><h1 style = {{fontSize:'50px'}}>HomeBrew Shop</h1></Col></Row>
         <Row><Col> <Image src={require('../Assets/Screen Shot 2020-10-26 at 3.54.24 PM.png')}  rounded style ={{height:'500px', width:'500px', border:'6px solid black' }} /> </Col> <Col style={{ color:'white', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}><p> A project aimed at providing access to Homebrew to a wider base of users so that they could use Homebrew for everyday tasks.
          I built this project during a Hackathon(HackIllinois 2020) in Collaborations with HomeBrew contributors who were present as mentors during the Hackathon. This application is built on the open source framework of Electron strapped with React and NodeJs. I am currently working to get a permanent and viable application, which could possibly allow a lot of people to be able to download this application and use Homebrew without the Hassle of using and interacting with the terminal.</p> 
         <p>  </p>
         <p></p>
         </Col> </Row>
         <Row> <Col> </Col> <Col> </Col> </Row>
         </Container>
          </div>
      </div>
      <div style = {{backgroundColor:'white'}}>
        
         <div > 
         <Container style={{padding:'50px'}} >
         <Row style = {{ paddingBottom:'50px' ,fontWeight:'bolder'}}><Col><h1 style = {{fontSize:'50px'}}>Review Cruncher</h1></Col></Row>
         <Row><Col style={{ fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}> <p> This is an application that I am currently working on to able to provide a medium through which small buisnesses and vendors could receive feedback from amazon with a single click of the button to get feedback from the this application. I am building this application on React with flask on the backend along with the help of NLP libraries like spaCy, NLTk. </p> </Col> <Col >
         <Image src={require('../Assets/Screen Shot 2020-10-26 at 4.46.39 PM.png')}  rounded style ={{height:'500px', width:'500px', border:'6px solid black' }} />
         </Col> </Row>
         <Row> <Col> </Col> <Col> </Col> </Row>
         </Container>
          </div>
      </div>
      <div style = {{backgroundColor:'#535C68'}}>
        
         <div > 
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom:'50px', fontWeight:'bolder'}}><Col><h1 style = {{fontSize:'50px'}}>Crazy Tic Tac toe</h1></Col></Row>
         <Row><Col> <Image src={require('../Assets/Screen Shot 2020-10-19 at 11.40.40 AM.png')}  rounded style ={{height:'500px', width:'500px', border:'6px solid black' }} /> </Col> <Col style={{ color:'white', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}>
         <p> This is a more fun version of tic tac toe that I developed on the open frame works platform. It uses some external animation libraries like Box2d.</p>
         </Col> </Row>
         </Container>
          </div>
      </div>
      </div>
    )
  }
}

export default Projects