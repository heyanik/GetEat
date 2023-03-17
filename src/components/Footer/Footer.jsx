import React from 'react'
import '../Footer/Footer.css'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='info'>
                    <p>018-6728-6587</p>
                    <p>geteat@gmail.com</p>
                    <br />
                    <p>29/16-B Tajmahal Rd, Mohammadpur</p>
                    <p>Dhaka, Dhaka 1207</p>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/" > <a>Home</a> </Link></li>
                        <li><Link to="/menu" > <a>Menu</a> </Link></li>
                        <li><Link to="/info" > <a>Info</a> </Link></li>
                        <li><Link to="/ordernow" > <a>Order now</a> </Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer