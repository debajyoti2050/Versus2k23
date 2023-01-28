import React, { useState } from "react";
import About from "./About";
import "../styles/Hero.css";
import "../styles/hero.scss";
import BgVideo from "../assets/bg.mp4";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        console.log(result);
        try{
          const {data} = await axios.post('https://versus2k23-backend.onrender.com/api/v1/registerUser',{ name : result.user.displayName, email : result.user.email })
          console.log(data);
        }
        catch(err){
          console.log(err)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, [user]);

  return (
    <>
      <header>
        <div className="hero-video flex">
          <div className="versus">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 849.15 160.78"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="76.07"
                y1="0"
                x2="76.07"
                y2="145.09"
                gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fff" />
                <stop offset=".06" stop-color="#eee7d9" />
                <stop offset=".16" stop-color="#eee7d9" />
                <stop offset=".26" stop-color="#eee7d9" />
                <stop offset=".36" stop-color="#eee7d9" />
                <stop offset=".46" stop-color="#eee7d9" />
                <stop offset=".58" stop-color="#eee7d9" />
                <stop offset=".7" stop-color="#eee7d9" />
                <stop offset=".83" stop-color="#ffffff" />
                <stop offset="1" stop-color="#ffffff" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="222.75"
                x2="222.75"
                y2="130.54"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-3"
                x1="376.71"
                x2="376.71"
                y2="160.78"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-4"
                x1="515.54"
                x2="515.54"
                y2="130.54"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-5"
                x1="649.6"
                x2="649.6"
                y2="130.54"
                xlinkHref="#linear-gradient"
              />
              <linearGradient
                id="linear-gradient-6"
                x1="788.21"
                x2="788.21"
                y2="130.54"
                xlinkHref="#linear-gradient"
              />
            </defs>
            <g id="Versus" isolation="isolate">
              <g isolation="isolate">
                <path
                  d="M52.53,130.54L0,0H48.21l27.52,68.22L103.93,0h48.21l-62.99,145.09c-7.28-1.82-13.87-3.83-19.78-6.03-5.91-2.2-11.52-5.04-16.83-8.53Z"
                  fill="url(#linear-gradient)"
                />
                <path
                  d="M161.01,130.54V0h123.48l-19.78,35.02h-60.49v14.33h69.59l-19.78,35.02h-49.8v11.14h69.36l-19.79,35.02h-92.78Z"
                  fill="url(#linear-gradient-2)"
                />
                <path
                  d="M460.05,160.78h-2.05l-112.8-81.19,42.53-40.25c-.31-.76-.84-1.55-1.59-2.39-.76-.83-1.37-1.25-1.82-1.25h-47.76V109.84c.15,0-.72,.49-2.62,1.48-1.9,.99-4.32,2.27-7.28,3.87-2.96,1.59-6.18,3.26-9.67,5-3.49,1.75-6.79,3.41-9.89,5-3.11,1.59-5.76,2.88-7.96,3.87-2.2,.99-3.45,1.48-3.75,1.48h-2.05V0h129.4c1.82,0,4.09,1.44,6.82,4.32,2.73,2.88,5.46,6.22,8.19,10.01,2.73,3.79,5.23,7.54,7.51,11.26,2.27,3.72,3.79,6.33,4.55,7.85l-48.89,52.99,59.13,74.36Z"
                  fill="url(#linear-gradient-3)"
                />
                <path
                  d="M473.47,95.51h41.39l-57.76-76.87c2.12-5.31,4.05-9.32,5.8-12.05,1.74-2.73,3.45-4.92,5.12-6.59h108.48l-19.79,34.79h-35.25l52.76,73.68c-1.52,4.09-3.22,7.92-5.12,11.48-1.9,3.56-4.36,7.09-7.39,10.57h-107.11l18.88-35.02Z"
                  fill="url(#linear-gradient-4)"
                />
                <path
                  d="M712.94,123.37c-2.12,2.96-4.02,5.34-5.69,7.16h-108.25c-1.67-1.82-3.49-4.21-5.46-7.16-1.97-2.96-3.79-6.86-5.46-11.71V37.3l-7.05-5.23c2.58-6.37,5.3-12.17,8.19-17.4,2.88-5.23,6.14-10.12,9.78-14.67h32.29V95.51h43.66V0h43.21V111.66c-1.36,4.85-3.11,8.75-5.23,11.71Z"
                  fill="url(#linear-gradient-5)"
                />
                <path
                  d="M746.14,95.51h41.39l-57.76-76.87c2.12-5.31,4.05-9.32,5.8-12.05,1.74-2.73,3.45-4.92,5.12-6.59h108.48l-19.79,34.79h-35.25l52.76,73.68c-1.52,4.09-3.22,7.92-5.12,11.48-1.9,3.56-4.36,7.09-7.39,10.57h-107.11l18.88-35.02Z"
                  fill="url(#linear-gradient-6)"
                />
              </g>
            </g>
          </svg>
          </div>

          
          <p>Let the War Begin</p>
          {user ? (
            <h3>hello {user.displayName} </h3>
          ) : (
            <button
              onClick={handleGoogleSignIn}
              type="button"
              class="login-with-google-btn"
            >
              Sign in with Google
            </button>
          )}
          {user ? (
            <button onClick={() => signOut(auth)} className="primary-button">
              Sign Out
            </button>
          ) : (
            <></>
          )}
          {/* <button onClick={handleGoogleSignIn} className="primary-button">Register Now</button> */}
          <video className="video-bg" autoPlay loop muted>
            <source src={BgVideo} type="video/mp4" />
          </video>
        </div>
              
      </header>
      {/* <About /> */}
      <div>
        <section className="big-glassmorphism-card">
          <div className="container glassmorphism-card flex">
            <div className="big-feature-image">
              <img src="images/valo bg 1.jpg" alt="" />
            </div>
            <div className="descirp flex ">
              <h4>1v1</h4>
              <h3>NFS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                quia impedit voluptas, reiciendis voluptate dolor ut nisi
                dignissimos at odit sunt id aliquid magni nobis incidunt.
                Blanditiis ipsa asperiores rem.
              </p>
            </div>
          </div>
        </section>
        <section className="big-glassmorphism-card">
          <div className="container glassmorphism-card flex">
            <div className="descirp-2 flex">
              <h4>1v1</h4>
              <h3>NFS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                quia impedit voluptas, reiciendis voluptate dolor ut nisi
                dignissimos at odit sunt id aliquid magni nobis incidunt.
                Blanditiis ipsa asperiores rem.
              </p>
            </div>
            <div className="big-feature-image-2">
              <img src="images/pes.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="big-glassmorphism-card">
          <div className="container glassmorphism-card flex">
            <div className="big-feature-image">
              <img src="images/416648.jpg" alt="" />
            </div>
            <div className="descirp flex">
              <h4>1v1</h4>
              <h3>NFS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                quia impedit voluptas, reiciendis voluptate dolor ut nisi
                dignissimos at odit sunt id aliquid magni nobis incidunt.
                Blanditiis ipsa asperiores rem.
              </p>
            </div>
          </div>
        </section>
        <section className="big-glassmorphism-card">
          <div className="container glassmorphism-card flex">
            <div className="descirp-2 flex">
              <h4>1v1</h4>
              <h3>NFS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                quia impedit voluptas, reiciendis voluptate dolor ut nisi
                dignissimos at odit sunt id aliquid magni nobis incidunt.
                Blanditiis ipsa asperiores rem.
              </p>
            </div>
            <div className="big-feature-image-2">
              <img src="images/6164273.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="big-glassmorphism-card">
          <div className="container glassmorphism-card flex">
            <div className="big-feature-image">
              <img src="images/maxresdefault.jpg" alt="" />
            </div>
            <div className="descirp flex">
              <h4>1v1</h4>
              <h3>NFS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                quia impedit voluptas, reiciendis voluptate dolor ut nisi
                dignissimos at odit sunt id aliquid magni nobis incidunt.
                Blanditiis ipsa asperiores rem.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
