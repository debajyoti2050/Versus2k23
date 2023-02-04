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
    <div class="container">
    <div class="text-center mt-5">
        <img class="profileimg" src={updatedPhotoURL}/>
    </div>
    <p class="text-center T-text mb-4">Thank You for Registering!</p>
    <div class="text-center"><a href="/profile">
    <div class="btn prof-btn pr-4 pl-4">Your Profile</div></a> 
    </div>
</div>
<Footer/>

</>



  )
}

export default RegistrationSuccess