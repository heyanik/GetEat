import React from 'react'
import '../Navbar/Navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><NavLink exact activeClassName="active" to="/" > <a>Home</a> </NavLink></li>
                <li><NavLink activeClassName="active" to="/menu" > <a>Menu</a> </NavLink></li>
                <li><NavLink activeClassName="active" to="/info" > <a>Info</a> </NavLink></li>
                <li><NavLink activeClassName="active" to="/ordernow" > <a>Order now</a> </NavLink></li>
                <li><NavLink activeClassName="active" to="/location" > <a>Location</a> </NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
