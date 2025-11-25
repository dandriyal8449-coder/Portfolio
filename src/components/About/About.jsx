import React from 'react'
import './About.css'
import profileImage from '../../assets/profile-img.jpg'

const About = () => {
  return (
    <section id='about' className='container about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>

        <div className="about-section">
            <div className="about-left">
                <img src={profileImage} alt="" />
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>I am Suraj Dandriyal, Web Developer who specializes in creating great websites. I have spent a lot of time researching new technologies needed to create simple, light, and more functional websites.</p>
                    <p> I am also able to learn anything new very quickly. My ability to optimize your website effectively sets me apart from other web designers.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML</p><hr style={{width: "90%"}} /></div>
                    <div className="about-skill"><p>CSS</p><hr style={{width: "80%"}} /></div>
                    <div className="about-skill"><p>Java Script</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>React js</p><hr style={{width: "75%"}} /></div>
                    <div className="about-skill"><p>Tailwine css</p><hr style={{width: "70%"}} /></div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About