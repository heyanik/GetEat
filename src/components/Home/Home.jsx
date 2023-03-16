import React from 'react'
import Footer from '../Footer/Footer'
import '../Home/Home.css'
import Navbar from '../Navbar/Navbar'

const Home = () => {
    return (
        <>
            <div className='Container'>
                <a href="/"><img className='geteat-logo' src='GetEat logo.png' alt='Logo' /></a>
                <img className='geteat-banner' src='geteat-banner.png' alt='banner' />

            </div>
            <div className='quote'>
                <p>GetEat is a family-owned restaurant that offers authentic cuisine. Our specialty is momos, a popular dumpling dish filled with a variety of meat, vegetables, and cheese. We are dedicated to providing our customers with a unique and enjoyable dining experience.</p>
                <a href="/">View Menu</a>
                <br />
                <a href="/">Location</a>
            </div>
            <Navbar />
            <Footer />
        </>

    )
}

export default Home
