import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <>
    {
      console.log("Footer")
    }
    <footer>
      <div className="container flex footer-container">
        <div className="link-column flex">
          <h4>About</h4>
          <a href="#" className="hover-link">ABOUT US</a>
          <a href="#" className="hover-link">COOL</a>
          <a href="#" className="hover-link">HEllo</a>
          <a href="#" className="hover-link">Page</a>
          <a href="#" className="hover-link">Yo</a>
        </div>
        <a href="#" className="iem-logo">
          <img src="images/IEM NEW LOGO (1)white logo 2.png" alt="IEM-logo" />
        </a>
        <a href="#" className="versus-logo">
          <img src="images/logo gold cropped 3.png" alt="IEM-logo" />
        </a>
        <div className="link-column flex">
          <h4>Resources</h4>
          <a href="#" className="hover-link">ABOUT US</a>
          <a href="#" className="hover-link">COOL</a>
          <a href="#" className="hover-link">HEllo</a>
          <a href="#" className="hover-link">Page</a>
          <a href="#" className="hover-link">Yo</a>
        </div>
      </div>
    </footer>

    <div className="subfooter">
      <div className="container flex subfooter-container">
        <a href="#" className="hover-link">Privacy policy</a>
        <a href="#" className="hover-link">Terms & Condition</a>
        <a href="#" className="hover-link">Security information</a>
        <a href="#" className="hover-link"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="hover-link"><i className="fa-brands fa-twitter"></i></a>
      </div>
      </div>
    </>
  )
}

export default Footer