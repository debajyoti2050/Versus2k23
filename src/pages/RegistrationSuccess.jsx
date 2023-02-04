import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { auth } from '../firebase';
import '../styles/reg-success-form.css'

const RegistrationSuccess = () => {
    const [user, setUser] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);
  const [updatedPhotoURL, setUpdatedPhotoURL] = useState(null);
  const navigate = useNavigate()


    useEffect( () => {
        window.scrollTo(0, 0);
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
            
            
          } else {
            setUser(null);
            navigate('/')
          }
          // console.log(user);
        });
      }, [navigate, photoURL, user,]);

  return (
    <>
    <Navbar/>
    <div class="container mt-5 mb-5">
      <div className="container1">
    <div class="text-center mt-5">
        <img className="profileimg1" src={updatedPhotoURL}/>
    </div>
    <p class="text-center T-text mb-4">Thank You for Registering!</p>
    <p class="text-center T-text1 mb-4">To finish your <span style={{color:"green", fontWeight:"700"}}>payment</span> process please visit our college campus</p>
    <p class="text-center T-text1 mb-4"><span style={{fontWeight:"700"}}>Address : </span> GN-34/2, Ashram Building, Saltlake Electronics Complex, Street Number 27, Sector V, Bidhannagar, Kolkata, West Bengal 700091</p>
    <p class="text-center T-text1 mb-4"><span style={{fontWeight:"600"}}><i class="bi bi-telephone-fill"></i> <i class="bi bi-whatsapp"></i>&nbsp;Arindam Mondal : </span>8388092132</p>
    <p class="text-center T-text1 mb-4"><span style={{fontWeight:"600"}}><i class="bi bi-telephone-fill"></i> <i class="bi bi-whatsapp"></i>&nbsp;Sayantan Ghosh  : </span>8250711949</p>
    <p class="text-center T-text1 mb-4"><span style={{fontWeight:"600"}}><i class="bi bi-telephone-fill"></i> <i class="bi bi-whatsapp"></i>&nbsp;Nirmalya Shit  : </span>9330853619</p>
    <div class="text-center mb-5"><a href="/profile">
    <div class="prof-but pr-4 pl-4 ">View Profile&nbsp;<i className="bi bi-arrow-up-right"></i></div></a> 
    </div>
    </div>
</div>
<Footer/>

</>



  )
}

export default RegistrationSuccess