import React from 'react'
import './Blog.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import blog1 from '../../Assets/Img/blog1.png'
import blog2 from '../../Assets/Img/blog2.png'
import blog3 from '../../Assets/Img/blog3.png'
import blog4 from '../../Assets/Img/blog4.png'


export default function Blog() {
    return (
        <div>
            <Navbar />


            <div className='blogdiv'>
                <img src={blog1} alt="" />
                <h2>Single Member Company</h2>
                <h6>Barrister Naveed khan</h6>
                <p>Single Member Company or SMC is a Private company which has only one member/ director and which has the
                    privileges of limited liability. It has facilitated sole proprietorships to obtain corporate status. All the shares
                    are vested with single member/director. The creation of SMCs was first allowe...</p>
                <a href="/">Read More</a>
            </div>


            {/* 2 */}


            <div className='blogdiv'>
                <img src={blog2} alt="" />
                <h2>Single Member Company</h2>
                <h6>Barrister Naveed khan</h6>
                <p>Single Member Company or SMC is a Private company which has only one member/ director and which has the
                    privileges of limited liability. It has facilitated sole proprietorships to obtain corporate status. All the shares
                    are vested with single member/director. The creation of SMCs was first allowe...</p>
                <a href="/">Read More</a>
            </div>


            {/* 3 */}
            <div className='blogdiv'>
                <img src={blog3} alt="" />
                <h2>Single Member Company</h2>
                <h6>Barrister Naveed khan</h6>
                <p>Single Member Company or SMC is a Private company which has only one member/ director and which has the
                    privileges of limited liability. It has facilitated sole proprietorships to obtain corporate status. All the shares
                    are vested with single member/director. The creation of SMCs was first allowe...</p>
                <a href="/">Read More</a>
            </div>

            {/* 4 */}
            <div className='blogdiv'>
                <img src={blog4} alt="" />
                <h2>Single Member Company</h2>
                <h6>Barrister Naveed khan</h6>
                <p>Single Member Company or SMC is a Private company which has only one member/ director and which has the
                    privileges of limited liability. It has facilitated sole proprietorships to obtain corporate status. All the shares
                    are vested with single member/director. The creation of SMCs was first allowe...</p>
                <a href="/">Read More</a>
            </div>



            <Footer />
        </div>
    )
}
