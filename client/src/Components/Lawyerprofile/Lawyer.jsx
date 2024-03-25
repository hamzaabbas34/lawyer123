import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Lawyer.css'

import lawyer from '../../Assets/Img/lawyer1.svg'
import star from '../../Assets/Img/start.svg'


import howpic1 from '../../Assets/Img/howdoes1.svg'
import howpic2 from '../../Assets/Img/howdoes2.svg'
import howpic3 from '../../Assets/Img/howdoes3.svg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer/Footer'


export default function Lawyer() {
  return (

    <div>
      <Navbar />


      <div className='personlawyer'>
        <img src={lawyer} alt="" />

        <div>
          <h1>Muhammad Zubair</h1>
          <p>Barrister,L.L.B,L.L.M (UK)</p>
          <span>Islamabad, Pakistan</span>
          <br />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>

      </div>


      <div className="personcontent">
        <h1>Introduction</h1>
        <p>Mr. Muhammad Zubair is an English Barrister of the Honourable Society of Lincoln’s Inn with over 12 years of legal practice. He has an LLM
          (Masters in Law) degree from the UK. He is an expert in family, civil, criminal, and criminal,and corporate law. He has a wide range
          of practice areas. For his credentials and international record, please visit his following profile links
          <br />
          International profile and testimonials: https.//www.ipwork.com/freelancers/0lb2c8ad2e0?
          <br />
          Linkedia Profile: https.//www.linkedin.com/in/barrister-naveed khan 065a4311
          <br />
          Mr. khan has also drafted legislation and proposed reforems. One notable law he drafted for acid survivors in pakistan was acid
          crime and control prevention Act. The news reports can be se</p>
      </div>

      <div className="personcontent2">
        <h1>Expertise in Following Fields</h1>

        <div className='experiencetext'>
        <p>General Law</p>
        <p>Consumer Law</p>
        <p>Real State Law</p>
        </div>
     
        <div className='experiencetext'>
        <p>Immigration Law</p>
        <p>Traffic Law</p>
        <p>Family Law</p>
        </div>
     
        <div className='experiencetext'>
        <p>Business Law</p>
        <p>Criminal Law</p>
        <p>General Law</p>
      
   
        </div>
     
      </div>

      <div className="personcontent2">
        <h1>Experiences</h1>

        <div className='experiencetext'>
        <p>Barrister</p>
        <p>L.L.B</p>
        <p>L.L.M (UK)</p>
        </div>


     
      </div>

      
      <div className="personcontent2">
        <h1>Location</h1>

        <div className='experiencetext'>
        <p>Country</p>
        <p>City</p>
        <p>State</p>
        </div>

        <div className='experiencetext'>
        <p>Pakisyan</p>
        <p>KPK Kohat</p>
        <p>KPK Kohat</p>
        </div>


     
      </div>


      <div className="howdoesitworkdiv">
                <h2>How does it work?</h2>
                <p>Are you looking to post your Legal Question? Now it’s very simple, just post
                    your question and get immediate advice from experienced and
                    best Askwakeel Lawyers in your area</p>
            </div>



            <Container fluid>
                <Row>

                    <div className='howdoesmaindiv'>
                        <Col lg={4} md={6} xs={12}>
                            <img id='howdoespic' src={howpic1} alt="" />
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <img id='howdoespic' src={howpic2} alt="" />
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <img id='howdoespic' src={howpic3} alt="" />

                        </Col>

                    </div>

                </Row>

            </Container>


            <Footer/>
    </div>


  )
}
