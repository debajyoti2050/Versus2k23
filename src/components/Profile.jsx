import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import ProfileIMG from "../assets/DummyProfileImg.jpg";
import Background from "../assets/backgroundimg.jpg";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate('/')
      }
      console.log(user);
    });
  }, [user]);
  return (
    <>
      <Navbar />
      <div className="container">
        <img className="backgroundimg" src={Background} alt="" />
        <div className="details mt-4">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <img className="profileimg" src={user?.photoURL} alt="" />
            </div>
            <div className="detailsText col-lg-3 col-md-6">
              <h4>{user?.displayName}</h4>
              <p>{user?.email}</p>
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
    </>
  );
};

export default Profile;
