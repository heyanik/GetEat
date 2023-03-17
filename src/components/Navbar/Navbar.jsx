import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/" > <a>Home</a> </Link></li>
                <li><Link to="/menu" > <a>Menu</a> </Link></li>
                <li><Link to="/info" > <a>Info</a> </Link></li>
                <li><Link to="/ordernow" > <a>Order now</a> </Link></li>
                <li><Link to="/location" > <a>Location</a> </Link></li>
            </ul>
        </div>
    )
}

export default Navbar
