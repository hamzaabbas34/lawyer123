import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/Img/log.png'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Navbar() {
const navigate = useNavigate();

  const [toogle, setToogle] = useState(false);

  const showtoogle = () => {
    setToogle(!toogle);
  }

  const gotologin = ()=>{
    navigate('/');
  }

  return (
    <>
      <div className="navmain">

        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className={toogle ? "listitems2" : "listitems"}>
          <li>Home</li>
          <li>Draft Documents</li>
          <Link to={'/startabusiness'}>
          <li>Start a Busniness</li>
          </Link>
          <Link to={'/media'}>
          <li>Media</li>
          </Link>
          <li>Services</li>
          <Link to={'/blog'}>
          <li>Blog</li>
          </Link>
        </div>

        <div className="logoutbut" onClick={gotologin}>
          Login
        </div>

        <div className="tooglebut" onClick={showtoogle}>
          |||
        </div>

      </div>

    </>
  )
}

export default Navbar;