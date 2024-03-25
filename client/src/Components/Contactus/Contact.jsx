import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import './Contact.css'
import logo from '../../Assets/Img/login3.png'
import MapComponent from './Mapcom';
import Footer from '../Footer/Footer';
import axios from 'axios';


function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
 

  function handleSubmitData(event){
    event.preventDefault(); 
    if(!email || !name || !comment) return null
    console.log('Submitting data...');
    try{
      axios.post('http://localhost:8000/user/contact-us' , {email,name ,comment})
        .then((res) => {
            console.log('Response data:', res);
           })
        .catch((err) => {
            console.error('Error with Axios:', err);
        });
        setComment("")
        setEmail("")
        setName("")
    }
    catch(e) {
      console.log('Error' , e)
      }
};


  return (
    <>
    <Navbar/>
    <div className="conntactmain">

      <div className="conttop">

                <form  className="topleft">
              
                  <div className="contform">

                      <div>Contact Us</div>

                      <label >Name</label><br />
                      <input type="text" placeholder='Enter Name' name='name' value={name} onChange={(e) => setName(e.target.value)}/><br />

                      <label >Email</label><br />
                      <input type="email" placeholder='Enter Email'value={email} onChange={(e) => setEmail(e.target.value)}/><br />

                       <label >Message</label><br />
                      <textarea name="comment" id="" cols="30" rows="5" placeholder='Enter Message'value={comment} onChange={(e) => setComment(e.target.value)} ></textarea><br />

                  </div>
                </form>

              <div className="topright">
              <img src={logo} alt="" />
              </div>

        </div>
        <div className='contbutton' onClick={handleSubmitData}>Submit</div>

        <div className='maproute'>
        <MapComponent/>
        </div>
            </div>
        <Footer/>

            </>
          )
        }

        export default Contact;