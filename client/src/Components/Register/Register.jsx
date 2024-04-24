import React, { useState } from 'react'
import './Rgeister.css'
import Navbar from '../Navbar/Navbar'
import logo from '../../Assets/Img/login3.png'
import { Link, NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import axios from 'axios';

function Register() {
   const [showpasward, setShowpasward] = useState(false);
   // const [email, setEmail] = useState('');
   // const [password, setPasward] = useState("");
   // const [city , setCity] = useState("");
   // const [state, setState] = useState("");
   // const [phoneNumber, setPhoneNumber] = useState("");
   // const [name, setName] = useState("");

   const[data ,setData] = useState({
      name:"",
      password :"", 
      phoneNumber :" ", 
      city :"", 
      state:"",
      email : ""
   })

   const handleInput = (e)=>{
      setData({...data ,[e.target.name]:e.target.value})
   }

   const show = () => {
      setShowpasward(!showpasward);
   }
   function handleSubmitData(event){
      event.preventDefault(); 
      console.log('Submitting data...');
      axios.post('http://localhost:8000/user/register' , {data})
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
         <div className="registermain">

            <div className="registerleft">
               <img src={logo} alt="" />
            </div>

            <div className="registerright">
               <form className="registerform" action='/register' method='POST' onSubmit={handleSubmitData}>

                  <div className='wakeelr'>wakeelApka.pk <span>Register</span></div>

               <div className='fordis' >
                     <div className='w1024'>
                        <label htmlFor="">Name</label><br />
                        <input type="text" placeholder='Enter Name'name='name' onChange={handleInput}/><br />
                     </div>

                     <div className='w1024'>
                        <label htmlFor="">Email Address</label><br />
                        <input type="email" placeholder='Email Address' name='email'  onChange={handleInput}/><br />
                     </div>
                  </div>

                  <div className='fordis'>
                     <div className='w1024'>
                        <label htmlFor="">Phone Number</label><br />
                        <input type="text" placeholder='03249518191'  name='phoneNumber'  onChange={handleInput} /><br />
                     </div>

                     <div className='w1024'>
                        <label htmlFor="">State</label><br />
                        <input type="text" placeholder='Select State' name='state'  onChange={handleInput}/><br />
                     </div>
                  </div>

                  <div className='fordis'>
                     <div className='w1024'> 
                        <label htmlFor="">City</label><br />
                        <input type="text" placeholder='Select State' name='city' onChange={handleInput}/><br />
                     </div>

                     <div className='w1024'>
                        <label htmlFor="">Password</label><br />
                        <input type={showpasward ? "text" : "password"} name='password' placeholder='Enter Password'  onChange={handleInput
                        } /><br />
                        <svg onClick={show} xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 27 19" fill="none">
                           <path d="M26.8015 8.5365C24.309 3.67324 19.3745 0.382812 13.7244 0.382812C8.07425 0.382812 3.13838 3.67554 0.647228 8.53696C0.542086 8.74494 0.487305 8.97473 0.487305 9.20777C0.487305 9.44082 0.542086 9.67061 0.647228 9.87859C3.13976 14.7418 8.07425 18.0323 13.7244 18.0323C19.3745 18.0323 24.3104 14.7395 26.8015 9.87813C26.9067 9.67015 26.9615 9.44036 26.9615 9.20731C26.9615 8.97427 26.9067 8.74448 26.8015 8.5365ZM13.7244 15.8261C12.4154 15.8261 11.1357 15.4379 10.0473 14.7107C8.95889 13.9834 8.11058 12.9497 7.60964 11.7404C7.10869 10.531 6.97762 9.2002 7.233 7.91633C7.48838 6.63246 8.11874 5.45314 9.04436 4.52752C9.96998 3.6019 11.1493 2.97155 12.4332 2.71617C13.717 2.46079 15.0478 2.59186 16.2572 3.0928C17.4666 3.59374 18.5002 4.44206 19.2275 5.53048C19.9548 6.61889 20.3429 7.89852 20.3429 9.20754C20.3434 10.0768 20.1724 10.9377 19.84 11.7409C19.5075 12.544 19.02 13.2738 18.4053 13.8885C17.7907 14.5032 17.0609 14.9907 16.2577 15.3231C15.4545 15.6556 14.5937 15.8265 13.7244 15.8261ZM13.7244 4.79518C13.3305 4.80068 12.9392 4.85928 12.5611 4.96937C12.8728 5.393 13.0224 5.9143 12.9827 6.43876C12.943 6.96321 12.7167 7.45609 12.3448 7.82799C11.9729 8.1999 11.48 8.42621 10.9556 8.46588C10.4311 8.50556 9.90983 8.35597 9.48621 8.04424C9.24498 8.93296 9.28853 9.87495 9.61071 10.7376C9.9329 11.6003 10.5175 12.3402 11.2822 12.8532C12.047 13.3663 12.9533 13.6266 13.8737 13.5975C14.7942 13.5684 15.6823 13.2514 16.4131 12.6912C17.1439 12.1309 17.6807 11.3555 17.9478 10.4743C18.2149 9.59297 18.1989 8.65011 17.902 7.77838C17.6052 6.90666 17.0424 6.14998 16.293 5.61483C15.5436 5.07968 14.6453 4.79301 13.7244 4.79518Z" fill="black" />
                        </svg>
                     </div>
                  </div>

               <div className='privacypolicy'><input type="checkbox" name="" id="" /> I agree to Apnawakeel.pk Privacy Policy & Terms.
               </div>

                  <div className='button'><Link to="/">
               <button type="submit" onClick={handleSubmitData}>Create Account</button>
            </Link></div>

                  <div className='already'> Already have an account? <span><NavLink to='/'>Login</NavLink></span></div>
            </form>


            </div>

         </div>
         <Footer />
      </>
   )
}

export default Register;