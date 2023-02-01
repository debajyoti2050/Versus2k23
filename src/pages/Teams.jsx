/* eslint-disable jsx-a11y/img-redundant-alt */
import "../styles/Teams.css";
import React from "react";
import Navbar from "../components/Navbar";
import person1 from "../assets/TeamImg.jpg";
import Footer from "../components/Footer";

import { accounts,game,graphics,faculty,core,marketing, website } from "../components/teams";

const Teams = () => {
  return (
    <>
      <Navbar />
      <section id="team">
      {/* <h1 className="heading">FACULTY COORDINATORS</h1>
      <div className="container">
        <div className="row">
          {
            faculty.map((faculties) => {
              return(
                <div className="col-lg-3 col-md-6" key={faculties.id}>
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={faculties.image}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                  <h3 className="text-center mt-3">{faculties.name}</h3>
                  <h3 className="text-center">{faculties.surname}</h3>
                  <h5 className="text-center mt-1">{faculties.team}</h5>
                </div>
              </div>
            </div>
          </div>
              )}
              )
          }
        </div>
      </div> */}

      <h1 className="heading mt-5">CORE COMMITTEE</h1>
      <div className="container">
        <div className="row">
          {
            core.map((cores) => {
              return(
                <div className="col-lg-3 col-md-6" key={cores.id}>
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={cores.image}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                  <h3 className="text-center mt-3">{cores.name}</h3>
                  <h3 className="text-center">{cores.surname}</h3>
                  <h5 className="text-center mt-1">{cores.team}</h5>
                  {/* <p className="text-center mt-2">9876543210</p> */}
                </div>
              </div>
            </div>
          </div>
              )}
            )}

          
        </div>
      </div>


      <h1 className="heading mt-5">WEBSITE TEAM</h1>
      <div className="container">
        <div className="row">
         {
            website.map((websites) => {
              return(
                <div className="col-lg-3 col-md-6" key={websites.id}>
                <div className="card shadow mt-5 p-4">
                  <img
                    className="card-img-top team-image rounded-circle"
                    src={websites.image}
                    alt="Card Image"
                  />
                  <div className="card-body">
                    <div className="card-text CardText text-center">
                      <h3 className="text-center mt-3">{websites.name}</h3>
                      <h3 className="text-center">{websites.surname}</h3>
                      <h5 className="text-center mt-1">{websites.team}</h5>
                      {/* <p className="text-center mt-2">9876543210</p> */}
                    </div>
                  </div>
                </div>
              </div>
              )}
            )
         }
        </div>
      </div>

      <h1 className="heading mt-5">MARKETING TEAM</h1>
      <div className="container">
        <div className="row">
          {
            marketing.map((marketings) => {
              return(
                <div className="col-lg-3 col-md-6 " key={marketings.id}>
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={marketings.image}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                  <h3 className="text-center mt-3">{marketings.name}</h3>
                  <h3 className="text-center">{marketings.surname}</h3>
                  <h5 className="text-center mt-1">{marketings.team}</h5>
                  {/* <p className="text-center mt-2">9876543210</p> */}
                </div>
              </div>
            </div>
          </div>
              )}
            )
          }
        </div>
      </div>

      <h1 className="heading mt-5">ACCOUNTS TEAM</h1>
      <div className="container">
        <div className="row">
          {accounts.map((account) => {
            
            return(
              
              <div className="col-lg-3 col-md-6" key={account.id}>
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={account.image}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                  <h3 className="text-center mt-3">{account.name}</h3>
                  <h3 className="text-center">{account.surname}</h3>
                  <h5 className="text-center mt-1">{account.team}</h5>
                  {/* <p className="text-center mt-2">9876543210</p> */}
                </div>
              </div>
            </div>
          </div>
            )
          })
          }
          
        </div>
      </div>

      <h1 className="heading mt-5">GRAPHICS TEAM</h1>
      <div className="container">
        <div className="row">
          {graphics.map((graphic) => {
              return(
                <div className="col-lg-3 col-md-6" key={graphic.id}>
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={graphic.image}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                  <h3 className="text-center mt-3">{graphic.name}</h3>
                  <h3 className="text-center">{graphic.surname}</h3>
                  <h5 className="text-center mt-1">{graphic.team}</h5>
                  {/* <p className="text-center mt-2">9876543210</p> */}
                </div>
              </div>
            </div>
          </div>
              )
          })
          }
        </div>
      </div>

      

      <h1 className="heading mt-5">GAMING COORDINATORS</h1>
      <div className="container">
        <div className="row">
          {game.map((game) => {
            return(
              <div className="col-lg-3 col-md-6" key={game.id}>
            <div className="card shadow mt-5 p-4">
              <img
                className="card-img-top team-image rounded-circle"
                src={game.image}
                alt="Card Image"
              />
              <div className="card-body">
                <div className="card-text CardText text-center">
                  <h3 className="text-center mt-3">{game.name}</h3>
                  <h3 className="text-center">{game.surname}</h3>
                  <h5 className="text-center mt-1">{game.team}</h5>
                  <p className="text-center mt-2">{game.game}</p>
                </div>
              </div>
            </div>
          </div>
            )})

          }
          
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
};

export default Teams;
