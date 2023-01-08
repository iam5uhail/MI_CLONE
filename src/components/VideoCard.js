import React from 'react'
import {GiPlayButton} from "react-icons/gi"

const VideoCard = ({image,name,index}) => {
  return (
    <div className='videocard' style={{backgroundImage:`url(${image})`}}>
        <a href="#/"><GiPlayButton/></a>
        <span>{name}</span>
    </div>
  )
}

export default VideoCard