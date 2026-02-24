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
  <Row> <Col large={true} style = {{fontSize:'30px', fontFamily: 'Montserrat', fontColor:'#2C3335' , fontWeight:'bolder', paddingTop:'100px' }}> I am a Masters student in Computer Science at the University of Illinois at Urbana-Champaign, with a background in Computer Science and Linguistics. I have nearly 3 years of industry experience as a software engineer at Axon, along with internships at Amazon (AWS) and Goldman Sachs. My work has spanned full-stack development, distributed microservices, and cloud infrastructure, and has more recently evolved toward machine learning and AI — including semantic search pipelines, retrieval-augmented generation, and NLP research. I am currently seeking summer 2026 internships. </Col> </Row>
    </Container>
 </Reveal>
  </div>
    )
  }
}

export default AboutSect