import React from 'react'
import ProductReviewCard from './ProductReviewCard'

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='productreviews'>
        {
            ProductReviews.map((item,index)=>(
                <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index}/>
            ))
        }
    </div>
  )
}

export default ProductReviews