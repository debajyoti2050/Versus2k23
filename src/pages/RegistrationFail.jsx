import React from 'react'
import ErrorIMG from '../assets/FailureImg.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/reg-success-form.css'

const RegistrationFail = () => {
  return (
    <>
    <Navbar/>
    <div class="container">
    <div class="text-center mt-5">
        <img class="profileimg2" src={ErrorIMG} alt='' />
    </div>
    <p class="text-center T-text mb-4">Oops!</p>
        <p class="text-center T-subtext">Something went wrong.</p>
    <div class="text-center"><a href="/">
    <div class="btn prof-but pr-4 pl-4 mt-5 mb-5"><i class="bi bi-arrow-up-left"></i>&nbsp;Back to Home</div></a>
    </div>
</div>
<Footer/>
</>
  )
}

export default RegistrationFail