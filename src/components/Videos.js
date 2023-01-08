import React from 'react'
import VideoCard from "./VideoCard"

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item,index)=>(
                <VideoCard key={item.image} image={item.image} index={index} name={item.name}/>
            ))
        }
    </div>
  )
}

export default Videos