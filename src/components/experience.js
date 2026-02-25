import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
library.add( faBriefcase);

const experienceAssets = {
  axon: require('../Assets/axon.jpg'),
  amazon: require('../Assets/amazon.jpg'),
  goldmanSachs: require('../Assets/goldmanSachs.jpg'),
  Cargill: require('../Assets/Cargill.jpg'),
  illinois: require('../Assets/ResearchImage.jpg'),
};






class Experience extends Component{
  state = {

  }
  
  render(){
    return(
      <div>
       <div fluid style={{height:'400px',opacity: '0.5', padding:'0px' ,backgroundImage: `url(${require('../Assets/workImage.jpeg')})` }}>     
         <div style = {{opacity: '6'}}>
         <h1 style = {{color:'white', fontSize:'60px', paddingTop:'150px'}}> Experience </h1>
         </div>
         </div>
         <div style = {{backgroundColor:'white', fontFamily:'Montserrat', color:'black', fontSize:'30px', fontWeight:'bolder',  paddingTop:'100px', paddingBottom:'100px'}}>
         
         <FontAwesomeIcon icon={faBriefcase}  size="3x" />
        <Container style = {{paddingTop:'100px'}}>
        With nearly 3 years of industry experience as a software engineer, I have built and shipped production systems spanning full-stack development, distributed microservices, and cloud infrastructure. More recently, my work has evolved toward machine learning and AI — from building semantic search pipelines and RAG systems to conducting NLP research. I am passionate about leveraging my strong engineering foundation to build intelligent, scalable AI-driven products.
      
        </Container>
      </div>
        
      
      
      <div style = {{backgroundColor:'#535C68'}}>
         <div >
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom: '24px', justifyContent: 'center' }}>
           <Col xs="12">
             <Image src={experienceAssets.axon} alt="Axon" style={{ maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }} />
           </Col>
         </Row>
         <Row style = {{paddingBottom:'50px', fontWeight:'bolder' }}><Col><h1 style = {{fontSize:'50px', color:'white'}}>Axon</h1><h3 style = {{color:'#dfe6e9'}}>Software Engineer &nbsp;|&nbsp; Seattle, WA &nbsp;|&nbsp; Jan 2023 – Oct 2025</h3></Col></Row>
         <Row><Col lg={true} style={{ color:'white', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}>
         <p><strong style={{color:'#74b9ff'}}>AI & Search</strong></p>
         <p>Engineered a semantic image retrieval pipeline by generating embedding vectors and indexing them in a vector database optimized for k-Nearest Neighbor (k-NN) similarity search. Implemented a query embedding and similarity matching flow using cosine distance to return top-K nearest neighbors with high semantic relevance. Fine-tuned a debiasing layer to sanitize incoming queries, mitigating biased or out-of-scope search patterns. Designed a Retrieval-Augmented Generation (RAG) system combining vector-based semantic retrieval with LLM generation, enabling grounded question answering over domain-specific evidence data with relevance filtering and safety constraints.</p>
         
         <p><strong style={{color:'#74b9ff'}}>Full-Stack & Infrastructure</strong></p>
         <p>Developed a new Golang microservice to enable evidence search, replacing a legacy Scala-based microservice. Enhanced search functionality by optimizing the Solr search architecture across Axon products, achieving a 20% reduction in query response time. Designed and implemented an asynchronous cron job system using Azure Service Bus to manage task queues for large-scale search indexing workflows. Managed monthly production releases on Azure Kubernetes Service (AKS) and administered Kubernetes clusters including resource allocation, autoscaling, and configuration of namespaces, deployments, and services.</p>
         </Col> </Row>
        
         </Container>
          </div>
      </div>
      <div style = {{backgroundColor:'white'}}>
         <div >
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom: '24px', justifyContent: 'center' }}>
           <Col xs="12">
             <Image src={experienceAssets.amazon} alt="Amazon AWS" style={{ maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }} />
           </Col>
         </Row>
         <Row style = {{ paddingBottom:'50px' ,fontWeight:'bolder' }}><Col><h1 style = {{fontSize:'50px'}}>Amazon (AWS)</h1><h3 style = {{color:'#636e72'}}>Software Development Engineer Intern &nbsp;|&nbsp; Seattle, WA &nbsp;|&nbsp; May 2022 – Aug 2022</h3></Col></Row>
         <Row><Col lg={true} style={{ fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}> <p>Developed multiple APIs on AWS QLDB and Brazil (a framework similar to Java SpringBoot) for service escalation diagnostics, reducing weekly on-call diagnostic time. Created a pipeline to extract macro and micro level data about customer usage behavior for the EC2 launch templates team. Developed the internal architecture to manage access and metrics for the APIs to be callable by more than 10 teams under AWS EC2 core.</p> </Col> </Row>
         </Container>
          </div>
      </div>

      <div style = {{backgroundColor:'#535C68'}}>
         <div >
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom: '24px', justifyContent: 'center' }}>
           <Col xs="12">
             <Image src={experienceAssets.goldmanSachs} alt="Goldman Sachs" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
           </Col>
         </Row>
         <Row style = {{paddingBottom:'50px', fontWeight:'bolder' }}><Col><h1 style = {{fontSize:'50px', color:'white'}}>Goldman Sachs</h1><h3 style = {{color:'#dfe6e9'}}>Software Engineering Intern &nbsp;|&nbsp; New York, NY &nbsp;|&nbsp; June 2021 – Aug 2021</h3></Col></Row>
         <Row><Col lg={true} style={{ color:'white', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}>
         <p>Worked on the account onboarding team in Asset Management. Developed APIs and a tracking dashboard to streamline and track the account onboarding process for asset management clients using SpringBoot, RxJava, and React, leading to a 4-hour weekly reduction in time spent on manual account onboarding and reducing onboarding time by 30%. Wrote unit tests and release tests using JUnit and Mockito to release the feature into production for dozens of Goldman Asset-Management clients.</p>
         </Col> </Row>
        
         </Container>
          </div>
      </div>
      <div style = {{backgroundColor:'white'}}>
         <div >
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom: '24px', justifyContent: 'center' }}>
           <Col xs="12">
             <Image src={experienceAssets.Cargill} alt="Cargill" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
           </Col>
         </Row>
         <Row style = {{ paddingBottom:'50px' ,fontWeight:'bolder' }}><Col><h1 style = {{fontSize:'50px'}}>Cargill Inc.</h1><h3 style = {{color:'#636e72'}}>Software Engineering Intern &nbsp;|&nbsp; Champaign, IL &nbsp;|&nbsp; May 2020 – April 2021</h3></Col></Row>
         <Row><Col lg={true} style={{ fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}> <p>Developed, tested, and designed software in collaboration with UX designers and business analysts in an Agile environment. Built a native iOS and Android application for Cargill Risk Management, allowing traders to view positions. Developed a responsive web app for animal feed mills on the React, Bootstrap, and .NET Core stack to provide clients with an improved shopping experience. Created a web app for a hardware-based project to improve order accuracy in quick service restaurants by 50% — a prototype potentially to be used by YUM Brands. Built a truck delivery driver app in Flask that generates optimized routes using the Maps API and the traveling salesman algorithm.</p> </Col> </Row>
         </Container>
          </div>
      </div>

      <div style = {{backgroundColor:'#535C68'}}>
         <Container style={{padding:'50px'}} >
         <Row style = {{paddingBottom: '24px', justifyContent: 'center' }}>
           <Col xs="12">
             <Image src={experienceAssets.illinois} alt="University of Illinois Research" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
           </Col>
         </Row>
         <Row style = {{paddingBottom:'50px', fontWeight:'bolder' }}><Col><h1 style = {{fontSize:'50px', color:'white'}}>University of Illinois</h1><h3 style = {{color:'#dfe6e9'}}>Research Assistant &nbsp;|&nbsp; Urbana, IL &nbsp;|&nbsp; June 2020 – Dec 2020</h3></Col></Row>
         <Row><Col lg={true} style={{ color:'white', fontFamily:'Montserrat', fontSize:'20px', fontWeight:'bolder' }}>
         <p>Formulated sentiment analysis as a supervised text classification task, engineering Bag-of-Words and TF-IDF features and establishing strong probabilistic baselines (Naive Bayes) for comparison. Designed and executed controlled experiments benchmarking classical models against PyTorch-based neural networks, using consistent evaluation protocols to analyze generalization. Built an end-to-end, reproducible experimentation pipeline in PyTorch for training, validation, and metrics tracking, evaluating models with precision, recall, F1, and inference efficiency tradeoffs.</p>
         </Col> </Row>
        
         </Container>
        </div>
      


     
      </div>
    )
  }
}

export default Experience