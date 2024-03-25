import React from 'react'
import './Footer.css'
import logo from '../../Assets/Img/log.png'

function Footer() {
  return (
    <>
    <div className="footermain">
      <div className="footerma2">
        <div className="ffirst">
          <img src={logo} alt="" />
        </div>

        <div className="fsecond">
          <div className='color'>About Company</div>
          <div>About Us</div>
          <div>Terms Of Services</div>
          <div>Our Lawyers</div>
        </div>

        <div className="fthird">
          <div className='color'>Join Us</div>
          <div>Login</div>
          <div>Register as User</div>
          <div>Register as Lawyer</div>
        </div>

        <div className="ffourth">
          <div className='color'>Contacts</div>
          <div>Contacts Us</div>
          <div>Kohat University</div>
          <div>Muneebjee1997@gmail.com</div>
          <div>Muzamilktk3@gmail.com</div>
          <div>rauf62874@gmail.com</div>
          <div>+923329827667</div>
        </div>

      </div>
      <div className='copyright'>2023 copyright By  <span className='color color2'>WakeelApka.pk</span>  pvt Ltd. All rights Reserved</div>
      </div>
    </>
  )
}

export default Footer;