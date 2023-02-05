import { signOut } from "firebase/auth";
import React from "react";
import { SignNoLeftTurn } from "react-bootstrap-icons";
import { ToastContainer } from "react-toastify";
import ErrorIMG from "../assets/FailureImg.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import "../styles/reg-success-form.css";

const RegistrationFail = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="text-center mt-5">
          <img class="profileimg2" src={ErrorIMG} alt="" />
        </div>
        <p class="text-center T-text mb-4">Oops!</p>
        <p class="text-center T-subtext">Something went wrong!</p>
        <p class="text-center T-subtext">Please <span style={{color:"red", fontWeight:"700"}}>sign out</span> and try to <span style={{color:"green", fontWeight:"700"}}>sign in</span> again</p>
        
        <div class="text-center">
          <a href="/">
            <div class="btn prof-but pr-4 pl-4 mb-5" onclick= {() =>signOut(auth)}>
              Sign Out
            </div>
          </a>
        </div>
        <div class="text-center">
          <a href="/">
            <div class="btn prof-but pr-4 pl-4 mb-5">
              <i class="bi bi-arrow-up-left"></i>&nbsp;Back to Home
            </div>
          </a>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default RegistrationFail;
