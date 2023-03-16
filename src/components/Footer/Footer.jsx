import React from 'react'
import '../Footer/Footer.css'

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Info</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer