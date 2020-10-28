import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col' 
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './hero.css'

import Particles from 'react-particles-js';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, faEnvelope);

class MainHero extends Component{
  state = {

  }
  
  render(){
    return(
      <div style = {{justifyContent:'center', fontSize:'60px', backgroundColor:'#758AA2', width:'100%', height:'900px', color:'white', fontWeight:'bold', position:'relative'}}>
         <Particles id ="lolo" style={{  position: 'absolute', top: '0', left: '0' }}
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />

          <div style = {{paddingTop:'100px'}}> 
          <Image roundedCircle style = {{height:'400px' , width:'400px', zIndex:'100',  position: 'relative', border:'6px solid black'}}src={require('/Users/sahil_21/Desktop/new_website/new_website2/new_website2/src/Assets/ImageForAbout.png')} ></Image>
          
          </div>
         <Container style = {{zIndex:'100',  position: 'relative'}}>
         
        <Row className="justify-content-md-center" ><Col lg="2"> <FontAwesomeIcon icon={['fab', 'github']}  size="xs" color="black"/> </Col> <Col lg="2" > <FontAwesomeIcon icon={faEnvelope}  size="xs"/> </Col> <Col lg="2"> <FontAwesomeIcon icon={['fab', 'linkedin']} size="xs" color="#0A79DF"/></Col> </Row>
          <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('Hi! My name is Sahil. ')
            .start();
            }}
         />
         
         
       
        </Container>
        

      </div>
    )
  }
}

export default MainHero