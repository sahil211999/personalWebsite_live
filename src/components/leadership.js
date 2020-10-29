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
      <div fluid style={{height:'400px',opacity: '0.5', padding:'0px' ,backgroundImage: `url(${require('../Assets/hack2.jpg')})` }}>     
         <div >
         <h1 style = {{color:'Black', fontSize:'60px', paddingTop:'150px', opacity: '6'}}> Leadership </h1>
         </div>
         
         
         </div>
        
         <div style = {{backgroundColor:'#758AA2', fontFamily:'Montserrat', color:'white', fontSize:'30px', fontWeight:'bolder', height:'700px', paddingTop:'100px', paddingBottom:'100px'}}>
         
         <FontAwesomeIcon icon={faUsers}  size="3x" />
        <Container style = {{paddingTop:'100px'}}>
       
       I am really involved with the college of Engineering RSOs and participate in events and organizing student and administrative events. Having spent considerable time in these endevours, I have been able to develop skills nessecccary to work in a diverse and challenging spaces.
        </Container>
      </div>
      
      
      
      <div style = {{backgroundColor:'white'}}>
        
         <div > 
         <Container style = {{paddingLeft:'30px' , paddingTop:'200px', paddingBottom:'200px'}} >
        <Row> <Col>  <Row> <Image src={require('../Assets/engineering_council.png')}  rounded style ={{height:'300px', width:'300px', border:'6px solid black' }} /> </Row> <Row style = {{alignContent:'center', alignSelf:'center', paddingRight:'80px', fontFamily:'Montserrat', fontWeight:'bolder'}}> <h4 style = {{paddingRight:'10px'}}> Engineering Council Representative </h4>   I represent my RSO Triangle on the engineering council. 
          Working on allocating funding to diffrent RSOs, working on collecting various types of issues and student affairs
          </Row> </Col> 
          <Col> <Row><Image src={require('../Assets/Mrdc.jpeg')}  rounded style ={{height:'300px', width:'300px', border:'6px solid black' }} /> </Row> <Row style = {{alignContent:'center', alignSelf:'center', paddingRight:'80px', fontFamily:'Montserrat', fontWeight:'bolder'}}>  <h4 style = {{paddingRight:'3px'}}> MRDC (Midwestern Robo design Competition) </h4> MRDC is the biggest robotics competition in the Mid west with about 13 schools participating. Iamp. 
          
          </Row> </Col> <Col> 
          <Row>  
          <Image src={require('../Assets/ESAA.jpeg')}  rounded style ={{height:'300px', width:'300px', border:'6px solid black' }} /> </Row> <Row style = {{alignContent:'center', alignSelf:'center', paddingRight:'80px', fontFamily:'Montserrat', fontWeight:'bolder'}}> <h4 style = {{paddingRight:'4px'}}> ESAA (Engineering Student Alumni Association) </h4> Worked as a Student Ambassador on the Engineering Council maintaining and fostering better alumni relations. Working on organizing fund raisers and creating better alumni relations. 
          </Row> </Col>
          
          </Row>

          <Row style = {{paddingTop:'80px'}}> 
          
          <Col lg={6}>  <Row style = {{paddingLeft:'90px'}}> <Image src={require('../Assets/triamgleIma.jpeg')}  rounded style ={{height:'300px', width:'300px', border:'6px solid black' }} /> </Row> <Row style = {{alignContent:'center', alignSelf:'center', paddingRight:'80px', fontFamily:'Montserrat', fontWeight:'bolder'}}> <h4 style = {{paddingLeft:'110px'}}> Technical Chair Triangle </h4>   I represent my RSO Triangle on the engineering council. 
          Working on allocating funding to diffrent RSOs, working on collecting various types of issues and student affairs
          </Row> </Col> 
           
           <Col lg={6}> 

          <Row style = {{paddingLeft:'110px'}}>  
          <Image src={require('../Assets/lolimag.png')}  rounded style ={{height:'300px', width:'300px', border:'6px solid black'  }} /> </Row> <Row style = {{alignContent:'center', alignSelf:'center', paddingLeft:'10px', paddingRight:'40px', fontFamily:'Montserrat', fontWeight:'bolder'}}> <h4 style = {{paddingLeft:'140px'}}> League of Linguistics </h4> Worked as a Student Ambassador on the Engineering Council maintaining and fostering better alumni relations. Working on organizing fund raisers and creating better alumni relations. 
          </Row> 
          
          </Col>
          
          </Row>
         
         </Container>
          </div>
      </div>
      
         
      </div>
    )
  }
}

export default Leadership