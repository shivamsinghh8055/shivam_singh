import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile2.JPG'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Experienced QA professional transitioning to a Software Development Engineer role, passionate about creating efficient and high-quality software solutions.</p>
                    <p> Adept at both finding and fixing issues, with a strong focus on continuous learning and improvement.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>DSA</p><hr style={{width: "50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>8+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>500+</h1>
                    <p>DSA QUESTIONS SOLVED</p>
                </div>
            </div>
    </div>
  )
}

export default About