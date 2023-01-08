import React from 'react'
import Prenavbar from './components/Prenavbar'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Slider from "./components/Slider"
import data from "./data/data.json"
import Offers from "./components/Offers"
import Heading from './components/Heading'
import Starproducts from "./components/Starproducts"
import HotaccessoriesMenu from "./components/HotaccessoriesMenu"
import Hotaccessories from "./components/Hotaccessories"
import ProductReviews from "./components/ProductReviews"
import Videos from './components/Videos'
import Banner from "./components/Banner"
import Footer from './components/Footer'
import NavOption from "./components/NavOption"


import "./styles/App.css"
import "./styles/Prenavbar.css"
import "./styles/Navbar.css"
import "./styles/offers.css"
import "./styles/Heading.css"
import "./styles/Starproducts.css"
import "./styles/HotaccessoriesMenu.css"
import "./styles/Hotaccessories.css"
import "./styles/HotItemCard.css"
import "./styles/Productreviews.css"
import "./styles/ProductreviewCard.css"
import "./styles/Videos.css"
import "./styles/VideoCard.css"
import "./styles/Footer.css"
import "./styles/NavCard.css"
import "./styles/NavOption.css"

const App = () => {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} 
      fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}/>

      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <Starproducts starproducts={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotaccessoriesMenu />
      <Routes>
        <Route path="/music" element={<Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
        <Route path="/smartDevice" element={<Hotaccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
        <Route path="/home" element={<Hotaccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        <Route path="/lifeStyle" element={<Hotaccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
        <Route path="/mobileAccessories" element={<Hotaccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews ProductReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner data={data.banner.end}/>
      <Footer Footer={data.footer}/>
    </Router>
  )
}

export default App