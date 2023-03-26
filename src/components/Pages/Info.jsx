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
                <div className='info-title'>
                    <h1>Food items</h1>
                </div>
                <div className="food-details">
                    <div className="food-container">
                        <p>Regular chicken momo</p>
                        <img src="/food-pic/Regular Chicken momo.jpeg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>Chicken fried momo</p>
                        <img src="/food-pic/Fried-chicken-momo.jpeg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>Mozzarella cheese momo</p>
                        <img src="/food-pic/Mozzarella cheese momo_.jpg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>Chicken naga momo</p>
                        <img src="/food-pic/naga momo.jpeg" alt="" />
                    </div>
                </div>
                <div className="food-details">
                    <div className="food-container">
                        <p>Fried mozzarella momo</p>
                        <img src="/food-pic/Fried mozzarella momo.jpg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>Fried jhal momo</p>
                        <img src="/food-pic/Fried Jhal momo.jpg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>Fried desi paneer momo</p>
                        <img src="/food-pic/Fried desi paneer momo.jpg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>Fried desi paneer momo</p>
                        <img src="/food-pic/Fried cheddar cheese momo.jpg" alt="" />
                    </div>
                </div>
                <div className="food-details">
                    <div className="food-container">
                        <p>Desi paneer momo</p>
                        <img src="/food-pic/Desi paneer momo.jpeg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>Chef's special momo</p>
                        <img src="/food-pic/Chef’s special momo.jpg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>Cheddar cheese momo</p>
                        <img src="/food-pic/Cheddar cheese momo.jpg" alt="" />
                    </div>
                    <div className="food-container">
                        <p>GetEat special momo</p>
                        <img src="/food-pic/Geteat special cheese momo.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Navbar />
            <Footermenu />
        </>
    )
}

export default Info