import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faMicrophone, faMicrophoneSlash, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './hero.css'

import Particles from 'react-particles-js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, faEnvelope, faMicrophone, faMicrophoneSlash, faVolumeUp);

const PROMPT_TEXT = "Hi! I am Sahil's AI assistant. Ask me anything about his professional background.";

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
    error: '',
    isListening: false,
    isSpeaking: false,
  }

  recognitionRef = null;
  autoSendTimeoutRef = null;

  speakInputText = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    const { question } = this.state;
    if (!question.trim()) return;
    if (this.state.isSpeaking) {
      window.speechSynthesis.cancel();
      this.setState({ isSpeaking: false });
      return;
    }
    const utterance = new SpeechSynthesisUtterance(question.trim());
    utterance.rate = 0.95;
    utterance.onend = () => this.setState({ isSpeaking: false });
    utterance.onerror = () => this.setState({ isSpeaking: false });
    window.speechSynthesis.speak(utterance);
    this.setState({ isSpeaking: true });
  }

  startSpeechInput = () => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.setState({ error: 'Speech recognition is not supported in this browser.' });
      return;
    }
    if (this.state.isListening) {
      if (this.recognitionRef) this.recognitionRef.stop();
      this.setState({ isListening: false });
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.onresult = (e) => {
      let transcript = '';
      for (let i = 0; i < e.results.length; i++) {
        transcript += e.results[i][0].transcript;
      }
      this.setState({ question: transcript });
      if (this.autoSendTimeoutRef) clearTimeout(this.autoSendTimeoutRef);
      this.autoSendTimeoutRef = setTimeout(() => {
        if (!this.state.question.trim()) return;
        this.handleAsk();
        this.setState({ question: '' });
        this.autoSendTimeoutRef = null;
      }, 500);
    };
    recognition.onend = () => this.setState({ isListening: false });
    recognition.onerror = () => this.setState({ isListening: false });
    this.recognitionRef = recognition;
    recognition.start();
    this.setState({ isListening: true, error: '' });
  }

  handleInputChange = (e) => {
    this.setState({ question: e.target.value });
  }

  handlePresetClick = (text) => {
    this.setState({ question: text }, () => {
      this.handleAsk();
    });
  }

  componentWillUnmount() {
    if (this.autoSendTimeoutRef) clearTimeout(this.autoSendTimeoutRef);
    if (this.recognitionRef) this.recognitionRef.stop();
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

        <div className="hero-chat">
          <h1 className="hero-chat__title">
            <Typewriter
              options={{ delay: 25 }}
              onInit={(typewriter) => {
                typewriter.typeString(PROMPT_TEXT).start();
              }}
            />
          </h1>
          <p className="hero-chat__subtitle">
            Projects • Work history • Skills 
          </p>

          <div className="hero-chat__input-row">
            <div className="hero-chat__mic-wrap">
              <button
                type="button"
                className={`hero-chat__mic ${this.state.isListening ? 'hero-chat__mic--listening' : ''}`}
                onClick={this.startSpeechInput}
                title={this.state.isListening ? 'Stop listening' : 'Speak your question'}
                aria-label={this.state.isListening ? 'Stop listening' : 'Speak your question'}
              >
                <FontAwesomeIcon icon={this.state.isListening ? faMicrophoneSlash : faMicrophone} />
              </button>
              {this.state.isListening && (
                <span className="hero-chat__mic-tooltip" role="status">Listening…</span>
              )}
            </div>
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
              type="button"
              className={`hero-chat__speak ${this.state.isSpeaking ? 'hero-chat__speak--active' : ''}`}
              onClick={this.speakInputText}
              title={this.state.isSpeaking ? 'Stop reading' : 'Read aloud'}
              aria-label={this.state.isSpeaking ? 'Stop reading' : 'Read aloud'}
              disabled={!question.trim()}
            >
              <FontAwesomeIcon icon={faVolumeUp} />
            </button>
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
              onClick={() => this.handlePresetClick('Tell me about Sahil\'s Axon experience.')}
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
              onClick={() => this.handlePresetClick('What are Sahil\'s main skills?')}
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