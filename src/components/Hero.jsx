import React, { useState } from 'react'
import About from './About'
import "../styles/Hero.css"
import BgVideo from "../assets/bg.mp4"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useEffect } from 'react'

const Hero = () => {
  const [user, setUser] = useState(null)

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
    .then(async (result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
      });
    }, [user])  


  return (
    <>
    <header>
      <div className="hero-video flex">
        <p>Let the War Begin</p>
        <h1>Versus</h1>
        { user ? <h3>hello {user.displayName} </h3> : <button onClick={handleGoogleSignIn} className="primary-button">Register Now</button>}
        {user ? <button onClick={() => signOut(auth)} className="primary-button">Sign Out</button> : <></>}
         {/* <button onClick={handleGoogleSignIn} className="primary-button">Register Now</button> */}
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