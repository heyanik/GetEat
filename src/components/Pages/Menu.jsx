import React from 'react'
import Footermenu from '../Footer/Footermenu'
import Navbar from '../Navbar/Navbar'
import "./Menu.css"

function Menu() {
    return (
        <>
            <div className='menu-container'>
                <div className='Container'>
                    <a href="/"><img className='geteat-logo' src='GetEat logo.png' alt='Logo' /></a>
                </div>
                <div className='menu-title'>
                    <h1>Menu</h1>
                </div>
                <div className='menu-list'>
                    <div className="names">
                        <div className='catagory'>Momos</div>
                        <div>Steamed Section
                        </div>
                        <div className="line"></div>
                        <li>Regular Momo</li>
                        <br />
                        <div>Cheese Section</div>
                        <div className="line"></div>
                        <li>Cheddar Momo</li>
                        <li>Mozzarella Momo</li>
                        <li>Desi Paneer Momo</li>
                        <br />
                        <div>Fried Section</div>
                        <div className="line"></div>
                        <li>Fried Chicken Momo</li>
                        <li>Fried Naga Momo</li>
                        <li>Fried Cheddar Cheese Momo</li>
                        <li>Fried Mozzarella Cheese Momo</li>
                        <li>Fried Desi Paneer Momo</li>
                        <br />
                        <div>Saucy Section</div>
                        <div className="line"></div>
                        <li>Saucy Momo</li>
                        <br />
                        <div>Spicy Section</div>
                        <div className="line"></div>
                        <li>Naga Momo</li>
                        <li>Chilli Oil Momo</li>
                        <br />
                        <div>Chef's Special</div>
                        <div className="line"></div>
                        <li>Chef's Special Momo</li>
                        <br />
                        <div>GetEat Special</div>
                        <div className="line"></div>
                        <li>GetEat Special Cheese Momo</li>
                        <div className='drinks-catagory'>Drinks</div>
                        <br />
                        <div>Fruits Drinks</div>
                        <div className="line"></div>
                        <li>Lamonade</li>
                        <li>Mint Lamonade</li>
                        <li>Watermelon juice</li>
                        <li>Lime juice</li>
                    </div>
                    <div className="photos">
                        <img src="mpic2.jpeg" alt="photo" />
                        <img src="mpic1.jpg" alt="photo" />
                        <img src="./food-pic/watermelon.jpeg" alt="photo" />
                    </div>
                </div>
            </div>
            <Navbar />
            <Footermenu />
        </>
    )
}

export default Menu