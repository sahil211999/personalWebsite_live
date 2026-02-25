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

async function askSahil(msg) {
  const res = await fetch("/.netlify/functions/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg }),
  });

  const data = await res.json();
  return data.answer;
}

class MainHero extends Component{
  state = {
    question: '',
    answer: '',
    loading: false,
    error: ''
  }
  
  handleInputChange = (e) => {
    this.setState({ question: e.target.value });
  }

  handlePresetClick = (text) => {
    this.setState({ question: text }, () => {
      this.handleAsk();
    });
  }

  handleAsk = async () => {
    const { question } = this.state;
    if (!question.trim()) {
      return;
    }

    try {
      this.setState({ loading: true, error: '', answer: '' });
      const answer = await askSahil(question.trim());
      this.setState({ answer, loading: false });
    } catch (err) {
      this.setState({
        error: 'Sorry — something went wrong. Please try again.',
        loading: false,
      });
    }
  }
  
  render(){
    const { question, answer, loading, error } = this.state;

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

        <div className="hero-chat">
          <h1 className="hero-chat__title">Ask me anything about my experience</h1>
          <p className="hero-chat__subtitle">
            Projects • Work history • Skills • Fit for your role
          </p>

          <div className="hero-chat__input-row">
            <input
              className="hero-chat__input"
              type="text"
              placeholder="Ask about Sahil..."
              value={question}
              onChange={this.handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  this.handleAsk();
                }
              }}
            />
            <button
              className="hero-chat__send"
              onClick={this.handleAsk}
              disabled={loading}
            >
              {loading ? '...' : '➜'}
            </button>
          </div>

          <div className="hero-chat__presets">
            <button
              className="hero-chat__chip"
              type="button"
              onClick={() => this.handlePresetClick('Tell me about your Axon experience.')}
            >
              Axon experience
            </button>
            <button
              className="hero-chat__chip"
              type="button"
              onClick={() => this.handlePresetClick('What are your key projects?')}
            >
              Key projects
            </button>
            <button
              className="hero-chat__chip"
              type="button"
              onClick={() => this.handlePresetClick('What are your main skills?')}
            >
              Skills
            </button>
            <button
              className="hero-chat__chip"
              type="button"
              onClick={() => this.handlePresetClick('Give me a brief resume-style summary of Sahil.')}
            >
              Resume summary
            </button>
          </div>

          {loading && (
            <div className="hero-chat__answer hero-chat__answer--loading">
              <div className="hero-chat__spinner" />
              <span className="hero-chat__loading-text">
                Thinking about the best answer for you…
              </span>
            </div>
          )}

          {(answer || error) && !loading && (
            <div className="hero-chat__answer hero-chat__answer--visible">
              {error ? <p className="hero-chat__error">{error}</p> : <p>{answer}</p>}
            </div>
          )}
        </div>
       
        </Container>
        

      </div>
    )
  }
}

export default MainHero