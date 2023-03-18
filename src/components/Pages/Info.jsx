import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footermenu from '../Footer/Footermenu'
import './Info.css'

function Info() {
    return (
        <>
            <div className="info-container">
                <div className='Container'>
                    <a href="/"><img className='geteat-logo' src='GetEat logo.png' alt='Logo' /></a>
                </div>
                <div className='info-banner'>
                    <img src="info-baner.png" alt="photo" />
                </div>
                <div className='info-title'>
                    <h1>Info</h1>
                    <p>GetEat is a family-owned restaurant that offers authentic cuisine. Our specialty is momos, a popular dumpling dish filled with a variety of meat, vegetables, and cheese. We are dedicated to providing our customers with a unique and enjoyable dining experience.</p>
                    <br />
                    <a href='tel:01867286587'>PHONE:018-6728-6587</a>
                    <a href="mailto:geteat@gmail.com">MAIL:GETEAT@GMAIL.COM</a>

                </div>
            </div>
            <Navbar />
            <Footermenu />
        </>
    )
}

export default Info