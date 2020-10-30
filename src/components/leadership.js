import React, {Component} from 'react';
import {Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers } from '@fortawesome/free-solid-svg-icons';
library.add( faUsers);


class Leadership extends Component{
  state = {

  }
  
  render(){
    return(
      <div >
      
<div  style={{height:'400px',opacity: '0.5', padding:'0px' ,backgroundImage: `url(${require('../Assets/hack2.jpg')})` }}>     
         <div >
         <h1 style = {{color:'Black', fontSize:'60px', paddingTop:'150px', opacity: '6'}}> Leadership </h1>
         </div>
         
         
         </div>

         <div style = {{backgroundColor:'#758AA2', fontFamily:'Montserrat', color:'white', fontSize:'30px', fontWeight:'bolder',  paddingTop:'100px', paddingBottom:'100px'}}>
         
         <FontAwesomeIcon icon={faUsers}  size="3x" />
        <Container style = {{paddingTop:'100px'}}>
       
       I am really involved with the college of Engineering RSOs and participate in events and organizing student and administrative events. Having spent considerable time in these endevours, I have been able to develop skills nessecccary to work in a diverse and challenging spaces.
        </Container>
      </div>

         <div style = {{backgroundColor:'white'}}> 
         <Container style={{padding:'50px'}} >
         
         <Row>
         <Col lg={true} lg={4} sm={12} style={{ color:'black', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder', paddingTop:'10%' , paddingBottom:'10%' }}> <h4 style = {{paddingRight:'10px'}}> Engineering Council Representative </h4>  <Image src={require('../Assets/engineering_council.png')}  rounded style ={{height:'50%', width:'80%', border:'5.0px solid black' }} />  represent my RSO Triangle on the engineering council. 
          Working on allocating funding to diffrent RSOs, working on collecting various types of issues and student affairs   </Col> 
          
          <Col lg={true}lg={4} sm={12} style={{ color:'black', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder', paddingTop:'10%' , paddingBottom:'10%' }}> <h4 style = {{paddingRight:'10px'}}> MRDC(Midwestern Robo Design Competition) </h4>  <Image src={require('../Assets/Mrdc.jpeg')}  rounded style ={{height:'50%', width:'80%', border:'5.0px solid black' }} /> MRDC is the biggest Robotics competition in the midwest. With about 13 participating schools, my team is responsible for setting up hydraulics, collecting data from the ramp. </Col> 
         
         
          <Col lg={true} lg={4} sm={12} style={{ color:'black', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder', paddingTop:'10%' , paddingBottom:'10%' }}> <h4 style = {{paddingRight:'10px'}}> ESAA(Engineering Student Alumni Association) </h4>  <Image src={require('../Assets/ESAA.jpeg')}  rounded style ={{height:'50%', width:'80%', border:'5.0px solid black' }} />  
          Worked as a student ambassador for the College of Engineering, organizing events and fundraisers along with managing special requests by made alumni. </Col> 
         </Row>
          <Row>
         <Col lg={true} lg={2} sm={12}> </Col>
         <Col lg={true} lg={4} sm={12} style={{ color:'black', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' , paddingBottom:'5%'  }}> <h4 style = {{padding:'10px'}}> Technical Chair, Triangle </h4>  <Image src={require('../Assets/triamgleIma.jpeg')}  rounded style ={{height:'50%', width:'80%', border:'5.0px solid black' }} /> <pr> Resolved technical issues like managing WiFi, house server and other equipment in a house of 35 residents. </pr>   </Col> 
        <Col lg={true}lg={4}  sm = {12}style={{ color:'black', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' , paddingBottom:'10%'}}> <h4 style = {{padding:'10px'}}> League of Linguistics </h4>  <Image src={require('../Assets/lolimag.png')}  rounded style ={{height:'55%', width:'80%', border:'5.0px solid black' }} />  <pr> Actively lead projects on various teams in the field of computational linguistics.  </pr>   </Col> 
        <Col lg={true} lg={2} sm={12}> </Col>
        </Row>
        </Container>
          </div>





        
      
         
      </div>
    )
  }
}

export default Leadership