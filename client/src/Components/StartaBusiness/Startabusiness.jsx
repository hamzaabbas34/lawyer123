import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

import './Startabusiness.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import businesssvg from '../../Assets/Img/business.svg'
import manb1 from '../../Assets/Img/manb1.svg'
import manb2 from '../../Assets/Img/manb2.svg'
import manb3 from '../../Assets/Img/manb3.svg'

export default function Startabusiness() {
    return (
        <div>

            <Navbar />


            <Container fluid>
                <Row>

                    <Col md={7} xs={12}>

                        <div className='businesstext'>
                            <h2>What is an NGO and Hoe to SET IT UP!</h2>
                            <p>An Ngo is a non governmental organisation registered under societied
                                registration act 1860. when you have a charitable organisation where
                                you are going to be working for the welfare of the community or
                                some other chariable purpose, it is a good idea to get an NGO
                                registered The law stated that following types of orgisatioon
                                qualify as NGO’s, where:</p>

                            <p>“Any seven or more person(s) associated for any literary,
                                scientific or charitable purpose”</p>

                            <p>wish to set up an organisation, they may do so under the societices
                                Registration Act.</p>

                            <p>In Pakistan,there are numerous non-governmental organizations (NGOs)
                                working for the public great.For this,there is a nitty-gritty procedure to
                                register an NGO in pakistan.You need to register your NGO as follows.
                                Here are the means you need to follow to register your organization.</p>

                            <h2>Registration of NGOs.</h2>

                            <p>An NGO in Pakistan should be registered under the accompanying
                                resolutions of Pakistan before begining its operations.</p>

                            <p>Two signed duplicates of the non-governmental organization’s constitution</p>

                            <p>Registration under the Societies Act,1860.</p>

                            <h6>List of documents needed for enlistment under the societies
                                Registration Act.List of documents needed for enlistment
                                under the voluntary welfare Agencies Ordinance.</h6>

                            <p>Two signed duplicates of the non-governmental organization constitution</p>

                            <p>All pages of the NGO’s consitution should be signed by no less than three
                                board individuals</p>

                            <p>Two ensured duplicates were signed by the IASB office and board
                                individuals.</p>

                            <p>List of individuals from the General Assembly</p>

                            <p>Financial records</p>


                        </div>

                    </Col>





                    <Col md={5} xs={12}>
                        <div className='businesssvgdiv'>
                            <img src={businesssvg} alt="" />
                        </div>
                    </Col>


                </Row>

            </Container>


            <div className='businessdiv'>
                <h1>Wakeel Apka Lawyers</h1>
                <p>Do you want to see apkawakeel lawyer team profiles?
                    <br />

                    verified by Bar council and they are professional in their respective field.</p>
            </div>

            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >


                <SwiperSlide>
                    <div className='businesssidediv'>
                        <img src={manb1} alt="" />
                        <h5>Salman Bashir</h5>
                        <h6>Islamabad, Pakistan</h6>
                        <p>Thank you, If I ever run any legal
                            problem,I know askwakeel
                            is always there to help..</p>

                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className='businesssidediv'>
                        <img src={manb2} alt="" />
                        <h5>Salman Bashir</h5>
                        <h6>Islamabad, Pakistan</h6>
                        <p>Thank you, If I ever run any legal
                            problem,I know askwakeel
                            is always there to help..</p>

                    </div>
                </SwiperSlide>


                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

            <Footer />
        </div>
    )
}
