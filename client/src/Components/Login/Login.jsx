import React, { useState } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import image from '../../Assets/Img/login3.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  function handleSubmitData(event, email, password) {
    event.preventDefault();
    console.log('Submitting data...');
  
    axios.post('http://localhost:8000/user/login', { email, password })
      .then((res) => {
        console.log('Response data:', res);
        // Make a fetch request with credentials included
      })
      .catch((err) => {
        console.error('Error with Axios:', err);
      });
  };
  

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const submitLogin = () => {
    if (email === '' || password === '') {
      window.alert('Please fill in all fields');
    } else if (password.length < 6) {
      window.alert('Password must be at least 6 characters long');
    } else {
      // Proceed with your login logic here
    }
  };

  return (
    <div>
      <Navbar />
      <div className="loginmain">
        <div className="loginleft">
          <img src={image} alt="" />
        </div>

        <form onSubmit={handleSubmitData}  className="loginright">
          <div className="loginform">
            <div>LOGIN <span>WakeelApka</span></div>
            <div>Access to our dashboard</div>

            <label>Email Address</label><br />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleChangeEmail}
            /><br />

            <label>Password</label><br />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={handleChangePassword}
            /><br />

            <svg onClick={showPasswordHandler} xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 28 19" fill="none">
              <path d="M27.0808 8.7489C24.5883 3.88564 19.6538 0.595215 14.0037 0.595215C8.35355 0.595215 3.41767 3.88794 0.926525 8.74936C0.821383 8.95734 0.766602 9.18713 0.766602 9.42018C0.766602 9.65322 0.821383 9.88301 0.926525 10.091C3.41905 14.9542 8.35355 18.2447 14.0037 18.2447C19.6538 18.2447 24.5897 14.952 27.0808 10.0905C27.186 9.88255 27.2407 9.65277 27.2407 9.41972C27.2407 9.18667 27.186 8.95688 27.0808 8.7489ZM14.0037 16.0385C12.6947 16.0385 11.415 15.6503 10.3266 14.9231C9.23819 14.1958 8.38988 13.1621 7.88893 11.9528C7.38799 10.7434 7.25692 9.4126 7.5123 8.12873C7.76768 6.84486 8.39803 5.66555 9.32365 4.73993C10.2493 3.81431 11.4286 3.18395 12.7125 2.92857C13.9963 2.67319 15.3271 2.80426 16.5365 3.3052C17.7459 3.80615 18.7795 4.65446 19.5068 5.74288C20.2341 6.83129 20.6222 8.11092 20.6222 9.41995C20.6226 10.2892 20.4517 11.1501 20.1193 11.9533C19.7868 12.7564 19.2993 13.4862 18.6846 14.1009C18.07 14.7156 17.3402 15.2031 16.537 15.5356C15.7338 15.868 14.873 16.0389 14.0037 16.0385ZM14.0037 5.00758C13.6098 5.01308 13.2185 5.07168 12.8404 5.18178C13.1521 5.6054 13.3017 6.12671 13.262 6.65116C13.2223 7.17562 12.996 7.66849 12.6241 8.04039C12.2522 8.4123 11.7593 8.63861 11.2349 8.67828C10.7104 8.71796 10.1891 8.56837 9.76551 8.25664C9.52428 9.14536 9.56783 10.0874 9.89001 10.95C10.2122 11.8127 10.7968 12.5526 11.5615 13.0656C12.3263 13.5787 13.2326 13.839 14.153 13.8099C15.0735 13.7808 15.9616 13.4638 16.6924 12.9036C17.4232 12.3433 17.96 11.5679 18.2271 10.6867C18.4942 9.80537 18.4782 8.86251 18.1813 7.99079C17.8845 7.11907 17.3217 6.36238 16.5723 5.82723C15.8229 5.29208 14.9245 5.00541 14.0037 5.00758Z" fill="black" />
            </svg>

            <div><NavLink to='/forget-pasward'>Forgot Password?</NavLink></div>
            <button onClick={submitLogin} type='submit'>Login</button>
            <div>Don’t have an account? <span><NavLink to='/register'>Register</NavLink></span></div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
