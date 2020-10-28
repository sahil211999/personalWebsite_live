import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Zoom from 'react-reveal/Zoom';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add( faUser);


class AboutSect extends Component{
  state = {

  }
  
  render(){
    return(
      <div style = {{width:'100%', height:'800px', zIndex:'1'}}>
      <div style = {{paddingTop:'30px'}}>
     {/* <Zoom >
   <h1 style = {{ fontWeight:'bold'}}>About  me</h1>
  
  </Zoom> */}
  </div>

  <Reveal effect="fadeInUp">
   <Container>
   <FontAwesomeIcon icon={faUser}  size="6x"/>
  <Row> <Col style = {{fontSize:'30px', fontFamily: 'Montserrat', fontColor:'#2C3335' , fontWeight:'bolder', paddingTop:'100px' }}> I am a 20 year old college student, studying computer science and linguistics at University of Illinois at Urbana Champaign. I have combined industry experience of about 9 - 12 months in software development. I am currently actively seeking summer 2021 internships. My particularly interested in Full-Stack mobile and web development as well as in natural language processing. </Col> </Row>
    </Container>
 </Reveal>



  </div>
    )
  }
}

export default AboutSect