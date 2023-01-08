import React from 'react'

const Starproducts = ({ starproducts }) => {
    return (
        <div className='starproducts'>
            <div>
                <a href={starproducts[0].url}><img src={starproducts[0].image} alt="1st product" /></a>
            </div>
            <div>
                <a href={starproducts[1].url}><img src={starproducts[1].image} alt="1st product" /></a>
                <a href={starproducts[2].url}><img src={starproducts[2].image} alt="1st product" /></a>
                <a href={starproducts[3].url}><img src={starproducts[3].image} alt="1st product" /></a>
            </div>
        </div>
    )
}

export default Starproducts