import React from 'react'

const Offer = ({index,src,link}) => {
  return (
    <div className='offer'>
        <a href={link}><img src={src} alt={`${index} offer`}/></a>
    </div>
  )
}

export default Offer