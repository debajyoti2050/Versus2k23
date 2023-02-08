import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
// import Background from "../assets/backgroundimg.jpg";
import Navbar from "./Navbar";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router";
import cover from '../assets/profile-cover.jpg'
import Footer from '../components/Footer'
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [uid , setUid] = useState();
  const [photoURL, setPhotoURL] = useState(null);
  const [updatedPhotoURL, setUpdatedPhotoURL] = useState(null);
  const navigate = useNavigate()

  const userUID=async()=>{
    if(user){
      try{
        const headers={
          "Content-Type": "application/json",
          Authorization: `${user?.stsTokenManager.accessToken}`,
          }
          
          const {data} =await axios.post('https://versus-event.herokuapp.com/api/v1/8fb6b78dc6d7cb36f2bd0373ce496aa5/getUserByEmail',{email:user?.email},{headers})
          // console.log(data,"hiiii");
          setUid(data)
      }
      catch(error){
        console.log(error);
      }
    }
    
  }


  useEffect( () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setPhotoURL(user?.photoURL);
        const originalURL="s96-c";
        const newURL="s400-c";
        const path = photoURL?.toString()
        const newPhotoURL=path?.replace(originalURL,newURL);
        // console.log(newPhotoURL);
        setUpdatedPhotoURL(newPhotoURL);
        userUID();
        
      } else {
        setUser(null);
        navigate('/')
      }
      // console.log(user);
    });
  }, [navigate, photoURL, user,]);
  return (
    <>
      <Navbar />
      <div className="container">
        <img className="backgroundimg" src={cover} alt="" />
        <div className="details mt-4">
          <ToastContainer/>
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
              <h5>UID : {uid?.uniqueCode}</h5>
              
              <p>{ uid?.message === "user with this email is not available" ? "⚠️Kindly sign out and try sign in again⚠️" :null}</p>
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
          {(uid?.valorantIsRegistered) ? (
            <div className="col-lg-4">
            <p className="games"><p className="mt-3">VALORANT : {(uid.valorantPaymentStatus)? (<>(Payment Success✅)</>):(<>Payment Pending🟡</>)} </p></p>
            </div>
          ):(
            <></>
          )}

          {(uid?.bgmiIsRegistered) ? (
            <div className="col-lg-4">
            <p className="games"><p className="mt-3">BGMI : {(uid.bgmiPaymentStatus)? (<>(Payment Success✅)</>):(<>Payment Pending🟡</>)}</p></p>
            </div>
          ):(<></>)}

          {(uid?.ballpoolIsRegistered) ? (
            <div className="col-lg-4">
            <p className="games"><p className="mt-3">8 BALL POOL : {(uid.ballpoolPaymentStatus)? (<>(Payment Success✅)</>):(<>Payment Pending🟡</>)}</p></p>
            </div>
          ):(<></>)}

          {(uid?.nfsIsRegistered) ? (
            <div className="col-lg-4">
            <p className="games"><p className="mt-3">NFS : {(uid.nfsPaymentStatus)? (<>(Payment Success✅)</>):(<>Payment Pending🟡</>)}</p></p>
            </div>
          ):(<></>)}

          {(uid?.csIsRegistered) ? (
            <div className="col-lg-4">
            <p className="games"><p className="mt-3">CS 1.6 : {(uid.csPaymentStatus)? (<>(Payment Success✅)</>):(<>Payment Pending🟡</>)}</p></p>
            </div>
          ):(<></>)}
        </div>
        {/* <h1 className="endText mt-5 mb-5">Thank You for Registering!!</h1> */}

        { (uid?.ballpoolIsRegistered || 
        uid?.bgmiIsRegistered ||
        uid?.csIsregistered ||
        uid?.nfsIsRegistered ||
        uid?.valorantIsRegistered) ?(
          <></>
        ):
        (
          <h1 className="endText mt-5 mb-5">No Games Enrolled</h1>
        )
      
      }
        
        <h5 className="endText mt-7 pt-5 mb-4" style={{color:'red'}}>*Your Enrolled Games Will Appear Here after Registration*</h5>
        <h5 className="endText mt-2 pt-5 mb-4" style={{color:'red'}}>Facing Technical Issues?</h5>
        <div className="text-center">
        <a href="https://api.whatsapp.com/send?phone=8697812885" target="_blank">
            <div class="btn prof-but mx-2 pr-4 pl-4 mb-4">
            <span style={{color:"red", fontWeight:"500"}}>Report  Problem </span><span style={{color:"green", fontWeight:"600"}}><i class="bi bi-whatsapp"></i></span>
            </div>
          </a>
          </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
