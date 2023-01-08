import React from 'react'

const ProductReviewCard = ({name,image,index,price,review}) => {
  return (
    <div className='productreviewcard'>
        <img src={image} alt={`${index} product`}/>
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard