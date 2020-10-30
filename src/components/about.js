import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
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
    <div style = {{width:'100%', padding:'100px'  }}>
   <div style = {{}}>
  </div>
  <Reveal effect="fadeInUp">
   <Container>
   <FontAwesomeIcon icon={faUser}  size="6x"/>
  <Row> <Col large={true} style = {{fontSize:'30px', fontFamily: 'Montserrat', fontColor:'#2C3335' , fontWeight:'bolder', paddingTop:'100px' }}> I am a 20 year old college student, studying computer science and linguistics at University of Illinois at Urbana Champaign. I have combined industry experience of about 9 - 12 months in software development. I am currently actively seeking summer 2021 internships. My particularly interested in Full-Stack mobile and web development as well as in natural language processing. </Col> </Row>
    </Container>
 </Reveal>
  </div>
    )
  }
}

export default AboutSect