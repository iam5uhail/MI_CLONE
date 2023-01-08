import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"

const Banner = ({ data }) => {
    console.log(data)
    return (
        <Carousel>
            {
                data.map((item, index) => (

                    <Carousel.Item key={item.name} id="banner" interval={1000}>
                        <img className='d-block w-100' id="bannerImage" src={item.image} alt={`${index} banner`} />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <u>Read more</u>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))
            }
        </Carousel>
    )
}

export default Banner