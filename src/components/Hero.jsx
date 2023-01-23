import React from 'react'
import About from './About'
import "../styles/Hero.css"
import BgVideo from "../assets/bg.mp4"

const Hero = () => {
  return (
    <>
    <header>
      <div className="hero-video flex">
        <p>Let the War Begin</p>
        <h1>Versus</h1>
        <a href="#" className="primary-button">Register Now</a>
        <video className="video-bg" autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
    </header>
    <About />
    </>
  )
}

export default Hero