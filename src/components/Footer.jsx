import React from 'react'
import "../styles/Footer.css"
import Versus from "../assets/logo_gold.png"
import IEM from "../assets/logo_white.png"
import { Instagram, Facebook, Twitter, Envelope,Phone, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <>
    <footer className="footer" id='contact'>
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-lg-3 col-xs-12 social-media">
            <h3>CONNECT WITH US</h3>
            <p className="socials">
              <a href="" className="facebook mx-1" target="_blank"><Facebook size={30}/></a>
              <a href="https://www.instagram.com/iem_versus/" rel='noreferrer' className="instagram mx-1" target="_blank"><Instagram size={30} /></a>
            </p>
          </div>
          <br className="hide desktop-show"></br>
          <div className="col-lg-6 col-xs-12 images">
            <img src={Versus} />       
            <img src={IEM} />       
            <br/>
          </div>
          <div className="col-lg-3 col-xs-12 contact" style={{textAlign:"center"}}>
            <h3 className="mt-lg-0 mt-sm-4">CONTACT US</h3>
            <p>
            <p><a className='phone' href='tel:8240645680'><Phone size={20}/>8240645680 (Avishek Sharma) </a></p>
            <p><a className='phone' href='tel:7439477838'><Phone size={20}/>7439477838 (Srija Karmakar) </a></p>
            <p ><a className="mailto" href="mailto:versus.iembca@gmail.com"><Envelope size={18}/> versus.iembca@gmail.com</a></p>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-4">© 2023 : All Rights Reserved by <b>Versus</b>
      </div>
    </footer>
    </>
  )
}

export default Footer