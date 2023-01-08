import React from 'react'
import logo from "../images/logo.png"
import { BsSearch } from "react-icons/bs"


const Navbar = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <a href="/"><img id="logoimg" src={logo} alt="not" /></a>
            </div>
            <div className='linksbox'>
                <a href="/miphones" className='navlinks'>Mi Phones</a>
                <a href="/redmiphones" className='navlinks'>Redmi Phones</a>
                <a href="/tv" className='navlinks'>TV</a>
                <a href="/laptops" className='navlinks'>Laptops</a>
                <a href="/lifestyle" className='navlinks'>Fitness & Lifestyle</a>
                <a href="/home" className='navlinks'>Home</a>
                <a href="/accessories" className='navlinks'>Accessories</a>
                <a href="/audio" className='navlinks'>Radio</a>
            </div>
            <div className='searchbox'>
                <input type="text" placeholder='Search Product' />
                <BsSearch />
            </div>
        </div>
    )
}

export default Navbar