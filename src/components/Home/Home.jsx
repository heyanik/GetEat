import React from 'react'
import Footer from '../Footer/Footer'
import '../Home/Home.css'
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className='Container'>
                <a href="/"><img className='geteat-logo' src='GetEat logo.png' alt='Logo' /></a>
                <img className='geteat-banner' src='geteat-banner.png' alt='banner' />

            </div>
            <div className='quote'>
                <p>GetEat is a family-owned restaurant that offers authentic cuisine. Our specialty is momos, a popular dumpling dish filled with a variety of meat, vegetables, and cheese. We are dedicated to providing our customers with a unique and enjoyable dining experience.</p>
                <Link to="/menu" > <a>View Menu</a> </Link>
                <br />
                <Link to="/location" > <a>Location</a> </Link>
            </div>
            <Navbar />
            <Footer />
        </>

    )
}

export default Home
