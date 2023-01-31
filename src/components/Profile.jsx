import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import ProfileIMG from "../assets/DummyProfileImg.jpg";
import Background from "../assets/backgroundimg.jpg";
import Navbar from "./Navbar";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router";
import cover from '../assets/Cover.png'
import Footer from '../components/Footer'

const Profile = () => {
  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [updatedPhotoURL, setUpdatedPhotoURL] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setPhotoURL(user?.photoURL);
        const originalURL="s96-c";
        const newURL="s400-c";
        const path = photoURL?.toString()
        const newPhotoURL=path?.replace(originalURL,newURL);
        console.log(newPhotoURL);
        setUpdatedPhotoURL(newPhotoURL);
      } else {
        setUser(null);
        navigate('/')
      }
      console.log(user);
    });
  }, [navigate, photoURL, user]);
  return (
    <>
      <Navbar />
      <div className="container">
        <img className="backgroundimg" src={cover} alt="" />
        <div className="details mt-4">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {updatedPhotoURL ? (
                <img referrerPolicy='no-referrer' className="profileimg" src={updatedPhotoURL} alt="" />
              ) : (
                <></>
              )}
            </div>
            <div className="detailsText col-lg-3 col-md-6">
              <h1>{user?.displayName}</h1>
              <h5>{user?.email}</h5>
              {user ? (
            <button onClick={() => signOut(auth)} className="primary-button mt-3">
              Sign Out
            </button>
          ) : (
            <></>
          )}
            </div>
          </div>
        </div>
        <h2 className="heading mt-4 mb-4">MY GAMES</h2>
        <div className="row">
          <div className="col-lg-4">
          <p className="games"><p className="mt-3">VALORANT</p></p>
          </div>

          <div className="col-lg-4">
          <p className="games"><p className="mt-3">BGMI</p></p>
          </div>

          <div className="col-lg-4">
          <p className="games"><p className="mt-3">8 BALL POOL</p></p>
          </div>

          <div className="col-lg-4">
          <p className="games"><p className="mt-3">NFS</p></p>
          </div>

          <div className="col-lg-4">
          <p className="games"><p className="mt-3">COD</p></p>
          </div>
        </div>
        <h1 className="endText mt-5 mb-5">Thank You for Registering!!</h1>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
