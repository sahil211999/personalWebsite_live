import React from 'react';
import { Container } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add( faHeart);
library.add(faCopyright );

const Signature = () => {
return(
  <div style = {{backgroundColor:'#99AAAB', height:'100px', borderTop:'1px solid black'}}>
  
     <Container>
     <hr style={{width:'25%', height:'0.25px',  backgroundColor: 'white' }}/> 
        <div style = {{ fontFamily: 'Montserrat', color:'white'}}>
        
        Made with  <FontAwesomeIcon icon={faHeart}  size="1x"  style = {{color:'red'}}/>   by Sahil Sashi <FontAwesomeIcon icon={faCopyright}  size="1x"  /> 2020
        </div>
        
     </Container>
  </div>
)
}

export default Signature