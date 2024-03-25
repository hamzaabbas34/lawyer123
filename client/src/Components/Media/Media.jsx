import React from 'react'
import './Media.css'

import commingsoon from '../../Assets/Img/comingsoon.png'
import wakeelapka from '../../Assets/Img/wakeelapka.png'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function Media() {
  return (
    <div>
        <Navbar/>

        <div className='commingsoondiv'>
            <h2>COMING SOON</h2>
            <p>We are currently working on something fantasic.</p>

            <div> 
            <img src={wakeelapka} alt="" />
        </div>


        </div>

    

        <Footer/>
    </div>
  )
}
