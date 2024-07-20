import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile1.JPG'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className="hero-profile"><img src={profile_img} alt="" /></div>
      <h1><span>I'm Shivam Singh</span>, software engineer based in India.</h1>
      <p>QA professional transitioning to SDE, dedicated to crafting seamless and efficient software solutions.</p>
      <div className="hero-action">
      <AnchorLink className='anchor-link' offset={50} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero