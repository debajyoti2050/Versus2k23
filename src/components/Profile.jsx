import React from 'react'
import '../styles/Profile.css'
import ProfileIMG from  '../assets/DummyProfileImg.jpg'
import Background from  '../assets/backgroundimg.jpg'

const Profile = () => {
  return (
    <div className="container">
    
      <img className="backgroundimg" src={Background} alt=''/>
      <div className="details mt-4">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <img className="profileimg" src={ProfileIMG} alt='' />
          </div>
          <div className="detailsText col-lg-3 col-md-6">
            <h4>Name Surname</h4>
            <p>abc@gmail.com</p>
            <p>9876543210</p>
          </div>
        </div>
      </div>  
    
      <h3 className="heading mt-4 mb-4">MY GAMES</h3>
      <p className="games">VALORANT</p>
      <p className="games">BGMI</p>
      <p className="games">8 BALL POOL</p>
      <p className="games">NFS</p>
      <p className="games">COD</p>
    </div>
  )
}

export default Profile