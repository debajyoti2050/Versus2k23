import '../styles/Teams.css'
import React from 'react'
import Navbar from '../components/Navbar'
import person1 from '../assets/TeamImg.jpg'
import Footer from '../components/Footer'


const Teams = () => {
  return (
    <>
    <Navbar/>
    <h1 className="heading mt-5">FACULTY COORDINATORS</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={person1}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                  <h3 className="text-center mt-3">Name</h3> 
                  <h3 className="text-center">Surname</h3>
                  <h5 className="text-center mt-1">Team Name</h5>
                  <p className="text-center mt-2">9876543210</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>



    <h1 className="heading mt-5">CORE COMMITTEE</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={person1}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                  <h3 className="text-center mt-3">Name</h3> 
                  <h3 className="text-center">Surname</h3>
                  <h5 className="text-center mt-1">Team Name</h5>
                  <p className="text-center mt-2">9876543210</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <h1 className="heading mt-5">MARKETING TEAM</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={person1}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                <h3 className="text-center mt-3">Name</h3> 
                  <h3 className="text-center">Surname</h3>
                  <h5 className="text-center mt-1">Team Name</h5>
                  <p className="text-center mt-2">9876543210</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <h1 className="heading mt-5">ACCOUNTS TEAM</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={person1}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                <h3 className="text-center mt-3">Name</h3> 
                  <h3 className="text-center">Surname</h3>
                  <h5 className="text-center mt-1">Team Name</h5>
                  <p className="text-center mt-2">9876543210</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <h1 className="heading mt-5">GRAPHICS TEAM</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={person1}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                <h3 className="text-center mt-3">Name</h3> 
                  <h3 className="text-center">Surname</h3>
                  <h5 className="text-center mt-1">Team Name</h5>
                  <p className="text-center mt-2">9876543210</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
 
    <h1 className="heading mt-5">WEBSITE TEAM</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={person1}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                <h3 className="text-center mt-3">Name</h3> 
                  <h3 className="text-center">Surname</h3>
                  <h5 className="text-center mt-1">Team Name</h5>
                  <p className="text-center mt-2">9876543210</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

    <h1 className="heading mt-5">GAMING COORDINATORS</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={person1}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                <h3 className="text-center mt-3">Name</h3> 
                  <h3 className="text-center">Surname</h3>
                  <h5 className="text-center mt-1">Team Name</h5>
                  <p className="text-center mt-2">9876543210</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}


export default Teams