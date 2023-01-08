import React from 'react'
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"
import { TbReplace } from "react-icons/tb"
import { SiAdguard } from "react-icons/si"
import { GiNetworkBars } from "react-icons/gi"

const Footer = ({ Footer }) => {
    return (
        <>
            <div className='prefooter'>
                <div>
                    <TbReplace />
                    <p><b>Hassle-free replacement</b> <br />10-day easy replacement policy on mi.com</p>
                </div>
                <div>
                    <SiAdguard />
                    <p><b>100% secure payments</b> <br />We support Cards,Wallets,EMI and COD</p>
                </div>
                <div>
                    <GiNetworkBars />
                    <p><b>Vast service network</b> <br />1000 Mi service-centers across 600 cities</p>
                </div>
            </div>
            <div className='prefooter2'>
                <div>
                    <p>LET'S STAY IN TOUCH</p>
                    <span>Get updates on sales specials and more</span>
                </div>
                <div className="inputsec">
                    <input type="text" placeholder="search products"></input>
                    <span>Thanks You're on our email list for our special offers.</span>
                </div>
                <div>
                    <p>FOLLOW MI</p>
                    <span>we want to hear from you!</span>
                </div>
                <div className='icons'>
                    <AiFillFacebook />
                    <AiFillYoutube />
                    <AiFillInstagram />
                    <AiOutlineTwitter />
                </div>
            </div>


            <div className='footer'>
                <div>
                    <p>SUPPORT</p>
                    {Footer.support.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <p>Shop And Learn</p>
                    {Footer.shopAndLearn.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div> <div>
                    <p>Retail Store</p>
                    {Footer.retailStore.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div> <div>
                    <p>About Us</p>
                    {Footer.aboutUS.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div> <div>
                    <p>Contact Us</p>
                    {Footer.contactUs.map((item, index) => (
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))}
                </div>
                <div>
                    <div>Chat with our Virtual AI Bot(24/7 Live agent support)</div>
                    <button>CHAT NOW</button>
                </div>
            </div>
                <div>
                    <div className="footerBorder">
                        <div> Copyright © 2010 - 2021 Xiomi. All Rights Reserved.</div>
                    </div>
                </div>
        </>
    )
}

export default Footer