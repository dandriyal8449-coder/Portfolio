import React from 'react'
import './Footer.css'
import { FaUser } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='container'>
        <div className='footer'>
            <div className='footer-top'>
                <div className="footer-top-left">
                    <h1>PORT<span>FOLIO</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quibusdam quam in eum amet animi saepe.</p>
                </div>
                <div className="footer-top-right">
                    <div className='footer-email-input'>
                        <span><FaUser /></span>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>&copy; 2025 Suraj Dandriyal. All right reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer