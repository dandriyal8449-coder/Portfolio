import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-img.jpg'

const Hero = () => {
  return (
    <section id='home' className='hero container'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Suraj Dandriyal,</span> frontend developer</h1>
        <p> Hi! I am Suraj Chandra, a webdesigner focused on crafting great web experiences.Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/developer
        </p>
        <div className='hero-action'>
            <div className='hero-connect'>
                Connect With Me
            </div>
            <div className='hero-resume'>
                Resume
            </div>
        </div>
    </section>
  )
}

export default Hero