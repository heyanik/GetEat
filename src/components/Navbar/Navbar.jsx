import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Info</a></li>
                <li><a href="#">Order now</a></li>
                <li><a href="#">Location</a></li>
            </ul>
        </div>
    )
}

export default Navbar
