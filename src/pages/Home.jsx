import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <>
    <Navbar home/>
    <Hero />
    <Gallery />
    <Footer />
    </>
  )
}

export default Home