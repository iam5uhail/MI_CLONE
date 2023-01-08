import React from 'react'
import { Link } from 'react-router-dom'
const Hotaccessories = () => {
    return (
        <div className='hotaccessoriesMenu'>
            <Link className="HotaccessoriesLink" to="/music">Music Store</Link>
            <Link className="HotaccessoriesLink" to="/smartDevice">Smart Device</Link>
            <Link className="HotaccessoriesLink" to="/home">Home</Link>
            <Link className="HotaccessoriesLink" to="/lifeStyle">Lifestyle</Link>
            <Link className="HotaccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
        </div>
    )
}

export default Hotaccessories