import React from 'react'
import '../Footer/Footer.css'
import { Link } from "react-router-dom";
import tiktok from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='info'>
                    <a href='tel:01867286587'>018-6728-6587</a>
                    <p>geteat@gmail.com</p>
                    <br />
                    <a href='https://maps.app.goo.gl/HLwe1HE2tpGqG5QD8' target="_blank">Dhaka, Dhaka 1207 <br />29/16-B Tajmahal Rd, Mohammadpur</a>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/" > <a>Home</a> </Link></li>
                        <li><Link to="/menu" > <a>Menu</a> </Link></li>
                        <li><Link to="/info" > <a>Info</a> </Link></li>
                        <li><Link to="/terms" > <a>Terms & Conditions</a> </Link></li>
                        <li> <a href='https://foodpanda.page.link/3stqQRTXed4wgpZe7' target="_blank">Order now</a></li>

                    </ul>
                    <div className="social-links">
                        <h1>Find us</h1>
                        <a href="https://www.facebook.com/geteatbd"><i class="fa-brands fa-facebook-f fa-lg"></i></a>
                        <a href="https://www.instagram.com/geteatbd/"><i class="fa-brands fa-instagram fa-lg"></i></a>
                        <a href=""><i class="fa-brands fa-tiktok fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer