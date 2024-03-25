import React, { useState } from 'react'
import './Wakeelr.css'
import Navbar from '../Navbar/Navbar';
import logo from '../../Assets/Img/wakeelr.png'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import axios from 'axios';

function Wakeelr() {
   const[data ,setData] = useState({
      name:"",
      password :"", 
      phoneNumber :" ", 
      city :" ", 
      state:" ",
      email : " ",
      experience : " ",
      experienceYear:" ",
      cnicNo:" ",
      qualifications:" ",
      areaofExpertise:" ",
      skypeId:" ",
      imaga1:" ",
      imaga2:" ",
      imaga3:" ",
      imaga4:" "
   })

   const handleInput = (e)=>{
      setData({...data ,[e.target.name]:e.target.value})
   }

   const handleImageUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
         const base64String = reader.result.split(',')[1]; // Extract base64 string
         setData({ ...data, [e.target.name]: base64String });
      };
      reader.readAsDataURL(file);
   };

   function handleSubmitData(event){
      event.preventDefault(); 
      console.log('Submitting data...');
      axios.post('http://localhost:8000/user/register-wa' , {data})
          .then((res) => {
              console.log('Response data:', res);
             })
          .catch((err) => {
              console.error('Error with Axios:', err);
          });
  };

   return (
      <>
         <Navbar />
         <div className="wakeelrmain">

            <div className="wakeelrleft">
               <img src={logo} alt="" />
            </div>

            <div className="wakeelrright">

               <form className="wakelrform" onSubmit={handleSubmitData} method='post' >

                  <div className='layerr'>LAWYER REGISTRATION</div>

                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">Name</label><br />
                        <input type="text" placeholder='Enter name' name='name' onChange={handleInput}/><br />
                     </div>

                     <div>
                        <label htmlFor="">Email Address</label><br />
                        <input type="email" placeholder='Enter Email'  name='email' onChange={handleInput}/><br />
                     </div>
                  </div>

                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">CNIC NO.</label><br />
                        <input type="text" placeholder='Enter CNIC Number'  name='cnicNo' onChange={handleInput}/><br />
                     </div>

                     <div>
                        <label htmlFor="">Phone Number</label><br />
                        <input type="text" placeholder='03249518191'name='phoneNumber' onChange={handleInput} /><br />
                     </div>
                  </div>


                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">State</label><br />
                        <input type="text" placeholder='Enter State' name='state' onChange={handleInput} /><br />
                     </div>

                     <div>
                        <label htmlFor="">City</label><br />
                        <input type="text" placeholder='Enter City'  name='city' onChange={handleInput}/><br />
                     </div>
                  </div>


                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">Password</label><br />
                        <input type="text" placeholder='Enter Passward' name='password' onChange={handleInput}/><br />
                     </div>

                     <div>
                        <label htmlFor="">Experience</label><br />
                        <input type="text" placeholder='Enter your Experience' name='experience' onChange={handleInput}/><br />
                     </div>
                  </div>

                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">Experience in years</label><br />
                        <input type="text" placeholder='4 Years'name='experienceYear' onChange={handleInput} /><br />
                     </div>

                     <div>
                        <label htmlFor="">Qualifications</label><br />
                        <input type="text" placeholder='Qualifications'
                        name='qualifications' onChange={handleInput} /><br />
                     </div>
                  </div>


                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">Area of Expertise</label><br />
                        <input type="text" placeholder='Area of Expertise' name='areaofExpertise' onChange={handleInput} /><br />
                     </div>

                     <div>
                        <label htmlFor="">Skype Id</label><br />
                        <input type="text" placeholder='Enter Skype Id'  name='skypeId' onChange={handleInput} /><br />
                     </div>
                  </div>

                  <div className='fordis2file'>
                     <div>
                        <label htmlFor="">Profile Picture</label><br />
                        <input type="file" placeholder='03249518191' name='imaga1' onChange={handleImageUpload} /><br />
                     </div>

                     <div>
                        <label htmlFor="">ID Card Back Side</label><br />
                        <input type="file" placeholder='Select State' name='imaga2' onChange={handleImageUpload} /><br />
                     </div>
                  </div>

                  <div className='fordis2file'>
                     <div>
                        <label htmlFor="">Bar License Reg License</label><br />
                        <input type="file" placeholder='03249518191' name='imaga3' onChange={handleImageUpload} /><br />
                     </div>

                     <div>
                        <label htmlFor="">Resume</label><br />
                        <input type="file" placeholder='Select State' name='imaga4' onChange={handleImageUpload} /><br />
                     </div>
                  </div>



                  <div className='privacypolicy paddpr'><input type="checkbox" name="" id="" /> I agree to Apnawakeel.pk Privacy Policy & Terms.</div>

                  <div className='button'><button type="submit">Create Account</button></div>
                  <div className='already paddal'> Already have an account? <span><NavLink to='/'>Login</NavLink></span></div>


               </form>

            </div>

         </div>
         <Footer />
      </>
   )
}

export default Wakeelr;