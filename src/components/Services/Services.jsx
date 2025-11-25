import React from 'react'
import './Services.css'
import { FaCode, FaJsSquare } from "react-icons/fa";


const Services = () => {
  return (
    <section id='services' className='container services'>
        <h1>My Services</h1>
        <div className='services-grid'>
            <div className='services-grid-col'>
                <span><FaCode /></span>
                <h3>Web Designer</h3>
                <p>Web development is tha process of building. programming Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nulla aliquam tempora eos consectetur ducimus deleniti necessitatibus fuga ab nesciunt!</p>
            </div>

            <div className='services-grid-col'>
                <span><FaJsSquare /></span>
                <h3>Web Developer</h3>
                <p>Web development is tha process of building. programming Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nulla aliquam tempora eos consectetur ducimus deleniti necessitatibus fuga ab nesciunt!</p>
            </div>
        </div>
    </section>
  )
}

export default Services