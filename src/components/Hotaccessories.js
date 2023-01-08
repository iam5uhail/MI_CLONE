import React from 'react'
import HotItemCard from './HotItemCard'

const Hotaccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover }) => {
  return (
    <div className='hotaccessories'>
      <div className='hot-1'>
        <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="cover" />
      </div>
      <div className='hot-2'>
        {
          music && music.map((item, index) => (
            <HotItemCard key={item.image} image={item.image} name={item.name} price={item.price} />
          ))
        }
        {
          smartDevice && smartDevice.map((item, index) => (
            <HotItemCard key={item.image} image={item.image} name={item.name} price={item.price} />
          ))
        }
        {
          home && home.map((item, index) => (
            <HotItemCard key={item.image} image={item.image} name={item.name} price={item.price} />
          ))
        }{
          lifeStyle && lifeStyle.map((item, index) => (
            <HotItemCard key={item.image} image={item.image} name={item.name} price={item.price} />
          ))
        }{
          mobileAccessories && mobileAccessories.map((item, index) => (
            <HotItemCard key={item.image} image={item.image} name={item.name} price={item.price} />
          ))
        }
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  )
}

export default Hotaccessories