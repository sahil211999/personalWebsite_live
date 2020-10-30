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
      <div style = {{justifyContent:'center',paddingBottom:'50px',fontSize:'60px', backgroundColor:'#758AA2', width:'100%',  color:'white', fontWeight:'bold', position:'relative'}}>
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

          <div style = {{paddingTop:'100px', }}> 
          <Image roundedCircle style = {{height:'40%' , width:'40%', zIndex:'100',  position: 'relative', border:'6px solid black'}}src={require('../Assets/ImageForAbout.png')} ></Image>
          
          </div>
         <Container style = {{zIndex:'1',  position: 'relative', paddingBottom:'100px'}}>
         
        <Row className="justify-content-md-center" ><Col lg="2"> <a href="https://github.com/sahil211999"> <FontAwesomeIcon id = "github" icon={['fab', 'github']}  size="xs" color="black"   /> </a> </Col> <Col lg="2" > <a href="/faq"> <FontAwesomeIcon  id = "evenlope" icon={faEnvelope}  size="xs"/></a>  </Col> <Col lg="2"> <a href="https://www.linkedin.com/in/sahil-sashi-256971179/"> <FontAwesomeIcon id = "linkedIn" icon={['fab', 'linkedin']} size="xs" color="#0A79DF"/></a> </Col> </Row>
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