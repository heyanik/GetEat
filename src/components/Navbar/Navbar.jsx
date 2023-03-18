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
                <li><a href="https://foodpanda.page.link/3stqQRTXed4wgpZe7" target="_blank">Order now</a></li>
                <li><a href="https://maps.app.goo.gl/HLwe1HE2tpGqG5QD8" target="_blank">Location</a></li>
            </ul>
        </div>
    )
}

export default Navbar
